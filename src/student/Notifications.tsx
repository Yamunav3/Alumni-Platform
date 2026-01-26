
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Bell, Mail, Calendar, Briefcase, Check, Trash2 } from "lucide-react";
// import StudentLayout from "./StudentLayout";

// const DEFAULT_NOTIFICATIONS = [
//   {
//     id: 1,
//     type: "application",
//     title: "Application Reviewed",
//     message: "Your application for Google Internship has been reviewed.",
//     time: "2 hours ago",
//     read: false,
//     icon: Briefcase
//   },
//   {
//     id: 2,
//     type: "event",
//     title: "Event Reminder",
//     message: "AI Workshop starts in 24 hours.",
//     time: "4 hours ago",
//     read: false,
//     icon: Calendar
//   }
// ];

// export default function StudentNotifications() {
//   const [notifications, setNotifications] = useState(() => {
//     const saved = localStorage.getItem("student_notifications");
//     return saved ? JSON.parse(saved) : DEFAULT_NOTIFICATIONS;
//   });

//   useEffect(() => {
//     localStorage.setItem("student_notifications", JSON.stringify(notifications));
//   }, [notifications]);

//   const unreadCount = notifications.filter((n: any) => !n.read).length;

//   const markAllAsRead = () => {
//     setNotifications(notifications.map((n: any) => ({ ...n, read: true })));
//   };

//   const clearAll = () => {
//     setNotifications([]);
//   };

//   const markOneRead = (id: number) => {
//     setNotifications(notifications.map((n: any) => n.id === id ? { ...n, read: true } : n));
//   };

//   return (
//     <StudentLayout>
//       <div className="p-8">
//         <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-12 px-8 rounded-3xl text-white mb-8 shadow-lg">
//           <div className="max-w-4xl mx-auto flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold">Notifications</h1>
//               <p className="opacity-80">Stay updated with your latest alerts</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full relative backdrop-blur-sm">
//               <Bell className="h-8 w-8" />
//               {unreadCount > 0 && (
//                 <Badge className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600">{unreadCount}</Badge>
//               )}
//             </div>
//           </div>
//         </section>

//         <div className="max-w-4xl mx-auto">
//           <div className="flex gap-4 mb-6">
//             <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
//               <Check className="h-4 w-4 mr-2" /> Mark All Read
//             </Button>
//             <Button variant="outline" onClick={clearAll} disabled={notifications.length === 0}>
//               <Trash2 className="h-4 w-4 mr-2" /> Clear All
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {notifications.length === 0 && (
//               <div className="text-center py-12 text-muted-foreground bg-card rounded-lg border border-dashed">
//                 No notifications at the moment.
//               </div>
//             )}
            
//             {notifications.map((notif: any) => (
//               <Card key={notif.id} className={`transition-all ${!notif.read ? "border-l-4 border-l-purple-500 bg-purple-50/50" : "opacity-80"}`}>
//                 <CardContent className="p-4 flex items-start gap-4">
//                   <div className="p-2 bg-white rounded-full shadow-sm border">
//                     {notif.type === 'application' && <Briefcase className="h-5 w-5 text-blue-500"/>}
//                     {notif.type === 'event' && <Calendar className="h-5 w-5 text-green-500"/>}
//                     {notif.type === 'message' && <Mail className="h-5 w-5 text-purple-500"/>}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <h3 className="font-semibold text-foreground">{notif.title}</h3>
//                       <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{notif.time}</span>
//                     </div>
//                     <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
//                     {!notif.read && (
//                       <Button variant="link" size="sm" className="px-0 h-auto mt-2 text-purple-600" onClick={() => markOneRead(notif.id)}>
//                         Mark as read
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </StudentLayout>
//   );
// }

import { useState } from "react";
import { 
  Bell, Check, Trash2, Mail, Calendar, Briefcase, 
  Info, AlertCircle, X, CheckCheck
} from "lucide-react";
import StudentLayout from "./StudentLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// --- TYPES ---
interface Notification {
  id: number;
  type: 'application' | 'event' | 'message' | 'system' | 'success';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

// --- MOCK DATA ---
const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: 'success',
    title: "Application Accepted!",
    message: "Congratulations! Your application for 'Senior Frontend Developer' at TechCorp has moved to the Interview stage.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: 'message',
    title: "New Message from Alex",
    message: "Hey! Are you free to discuss the hackathon project later today?",
    time: "4 hours ago",
    read: false,
  },
  {
    id: 3,
    type: 'event',
    title: "Webinar Reminder",
    message: " The 'AI in Healthcare' webinar starts in 30 minutes. Don't miss it!",
    time: "Today, 10:00 AM",
    read: true,
  },
  {
    id: 4,
    type: 'application',
    title: "Job Alert: Product Designer",
    message: "A new job matching your profile has been posted by Airbnb.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    type: 'system',
    title: "Profile Update",
    message: "Please update your resume to increase visibility to recruiters.",
    time: "2 days ago",
    read: true,
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);

  // --- ACTIONS ---
  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success("All notifications marked as read");
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success("Notification removed");
  };

  const clearAll = () => {
    setNotifications([]);
    toast.success("All notifications cleared");
  };

  // --- HELPER: GET ICON & COLOR ---
  const getIcon = (type: string) => {
    switch (type) {
      case 'application': return { icon: Briefcase, color: "text-blue-600 bg-blue-100" };
      case 'event': return { icon: Calendar, color: "text-green-600 bg-green-100" };
      case 'message': return { icon: Mail, color: "text-purple-600 bg-purple-100" };
      case 'success': return { icon: Check, color: "text-teal-600 bg-teal-100" };
      case 'system': return { icon: Info, color: "text-orange-600 bg-orange-100" };
      default: return { icon: Bell, color: "text-gray-600 bg-gray-100" };
    }
  };

  return (
    <StudentLayout>
      <div className="min-h-screen bg-gray-50/50 pb-20">
        <Toaster position="bottom-center" />
        
        {/* --- HEADER --- */}
        <div className="bg-white border-b border-gray-100 py-8 px-4 sm:px-8 shadow-sm">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                Notifications 
                {notifications.filter(n => !n.read).length > 0 && (
                  <Badge className="bg-red-500 hover:bg-red-600 text-white border-none h-6 w-6 flex items-center justify-center rounded-full p-0 text-xs">
                    {notifications.filter(n => !n.read).length}
                  </Badge>
                )}
              </h1>
              <p className="text-gray-500 mt-1">Stay updated with your applications and community.</p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={markAllRead} className="hidden sm:flex">
                <CheckCheck className="h-4 w-4 mr-2" /> Mark all read
              </Button>
              <Button variant="outline" size="sm" onClick={clearAll} className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                <Trash2 className="h-4 w-4 mr-2" /> Clear all
              </Button>
            </div>
          </div>
        </div>

        {/* --- CONTENT --- */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto inline-flex">
              <TabsTrigger value="all" className="rounded-lg px-6">All</TabsTrigger>
              <TabsTrigger value="unread" className="rounded-lg px-6">Unread</TabsTrigger>
            </TabsList>

            {/* LIST GENERATOR */}
            {['all', 'unread'].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="space-y-3">
                  <AnimatePresence>
                    {notifications.filter(n => tab === 'unread' ? !n.read : true).length === 0 ? (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200"
                      >
                        <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No {tab === 'unread' ? 'new' : ''} notifications</p>
                      </motion.div>
                    ) : (
                      notifications
                        .filter(n => tab === 'unread' ? !n.read : true)
                        .map((notif) => {
                          const { icon: Icon, color } = getIcon(notif.type);
                          return (
                            <motion.div
                              key={notif.id}
                              layout
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="group"
                            >
                              <Card className={`border-none shadow-sm hover:shadow-md transition-all ${
                                !notif.read ? 'bg-white border-l-4 border-l-purple-500' : 'bg-gray-50/50 opacity-80 hover:opacity-100'
                              }`}>
                                <CardContent className="p-4 flex gap-4 items-start">
                                  {/* Icon Box */}
                                  <div className={`p-3 rounded-full flex-shrink-0 ${color}`}>
                                    <Icon className="h-5 w-5" />
                                  </div>

                                  {/* Text Content */}
                                  <div className="flex-1 min-w-0 pt-1">
                                    <div className="flex justify-between items-start mb-1">
                                      <h3 className={`font-semibold text-base ${!notif.read ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {notif.title}
                                      </h3>
                                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                                        {notif.time}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      {notif.message}
                                    </p>
                                    
                                    {/* Actions */}
                                    <div className="mt-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                      {!notif.read && (
                                        <button 
                                          onClick={() => markAsRead(notif.id)}
                                          className="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center"
                                        >
                                          <Check className="h-3 w-3 mr-1" /> Mark as read
                                        </button>
                                      )}
                                      <button 
                                        onClick={() => deleteNotification(notif.id)}
                                        className="text-xs font-medium text-red-500 hover:text-red-700 flex items-center"
                                      >
                                        <X className="h-3 w-3 mr-1" /> Remove
                                      </button>
                                    </div>
                                  </div>

                                  {/* Status Dot */}
                                  {!notif.read && (
                                    <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                  )}
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })
                    )}
                  </AnimatePresence>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </StudentLayout>
  );
}