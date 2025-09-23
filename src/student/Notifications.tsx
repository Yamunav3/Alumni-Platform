// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import Navigation from "../components/StaffNavbar"

// import { 
//   Bell, 
//   Mail, 
//   Calendar, 
//   Briefcase, 
//   Users, 
//   Check,
//   Trash2
// } from "lucide-react";
// import StudentNavbar from "./StudentNavbar";

// const notifications = [
//   {
//     id: 1,
//     type: "application",
//     title: "Application Status Update",
//     message: "Your application for Software Engineer Internship at Google has been reviewed.",
//     time: "2 hours ago",
//     read: false,
//     icon: Briefcase,
//     color: "asthra-green"
//   },
//   {
//     id: 2,
//     type: "event",
//     title: "Upcoming Event Reminder",
//     message: "AI & Machine Learning Workshop starts in 24 hours. Don't forget to join!",
//     time: "4 hours ago",
//     read: false,
//     icon: Calendar,
//     color: "asthra-blue"
//   },
//   {
//     id: 3,
//     type: "mentorship",
//     title: "New Mentorship Match",
//     message: "You've been matched with Sarah Johnson, Senior Software Engineer at Meta.",
//     time: "1 day ago",
//     read: true,
//     icon: Users,
//     color: "asthra-green"
//   },
//   {
//     id: 4,
//     type: "message",
//     title: "New Message from Mentor",
//     message: "Your mentor has sent you feedback on your latest project submission.",
//     time: "2 days ago",
//     read: true,
//     icon: Mail,
//     color: "asthra-blue"
//   },
//   {
//     id: 5,
//     type: "event",
//     title: "Event Registration Confirmation",
//     message: "You've successfully registered for the Career Development Seminar.",
//     time: "3 days ago",
//     read: true,
//     icon: Calendar,
//     color: "asthra-green"
//   },
// ];

// export default function StudentNotifications() {
//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header Section */}
//     <StudentNavbar/>
//       <section className="bg-gradient-hero border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//                 <span className="bg-gradient-primary bg-clip-text text-transparent">
//                   Notifications
//                 </span>
//               </h1>
//               <p className="text-xl text-muted-foreground">
//                 Stay updated with your latest activities and opportunities
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 shadow-asthra">
//                 <Bell className="h-8 w-8 text-white" />
//               </div>
//               <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">
//                 {unreadCount} new
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Actions Bar */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-8">
//           <Button variant="outline" className="flex items-center gap-2">
//             <Check className="h-4 w-4" />
//             Mark All as Read
//           </Button>
//           <Button variant="outline" className="flex items-center gap-2">
//             <Trash2 className="h-4 w-4" />
//             Clear All
//           </Button>
//         </div>

//         {/* Notifications List */}
//         <div className="space-y-4">
//           {notifications.map((notification) => {
//             const IconComponent = notification.icon;
//             return (
//               <Card 
//                 key={notification.id} 
//                 className={`${
//                   !notification.read 
//                     ? 'bg-gradient-card border-primary/20 shadow-card-asthra' 
//                     : 'bg-card border-border/50'
//                 } transition-all duration-300 hover:shadow-card-asthra`}
//               >
//                 <CardContent className="p-6">
//                   <div className="flex items-start gap-4">
//                     {/* Icon */}
//                     <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
//                       notification.color === 'asthra-green' 
//                         ? 'bg-asthra-green/10 text-asthra-green' 
//                         : 'bg-asthra-blue/10 text-asthra-blue'
//                     }`}>
//                       <IconComponent className="h-6 w-6" />
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between mb-2">
//                         <h3 className={`font-semibold ${
//                           !notification.read ? 'text-foreground' : 'text-muted-foreground'
//                         }`}>
//                           {notification.title}
//                         </h3>
//                         {!notification.read && (
//                           <div className="w-2 h-2 bg-asthra-green rounded-full flex-shrink-0 mt-2"></div>
//                         )}
//                       </div>
//                       <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
//                         {notification.message}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-muted-foreground">
//                           {notification.time}
//                         </span>
//                         <div className="flex gap-2">
//                           {!notification.read && (
//                             <Button variant="ghost" size="sm" className="text-xs">
//                               Mark as Read
//                             </Button>
//                           )}
//                           <Button variant="ghost" size="sm" className="text-xs">
//                             <Trash2 className="h-3 w-3" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Empty State (when no notifications) */}
//         {notifications.length === 0 && (
//           <Card className="bg-gradient-card border border-border/50">
//             <CardContent className="text-center py-12">
//               <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 No notifications yet
//               </h3>
//               <p className="text-muted-foreground">
//                 When you have new updates, they'll appear here.
//               </p>
//             </CardContent>
//           </Card>
//         )}

//         {/* Notification Settings */}
//         <Card className="mt-8 bg-gradient-card border border-border/50">
//           <CardHeader>
//             <CardTitle className="text-lg font-semibold">Notification Preferences</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-foreground">Application Updates</span>
//                 <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">
//                   Enabled
//                 </Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-foreground">Event Reminders</span>
//                 <Badge className="bg-asthra-blue/10 text-asthra-blue border-asthra-blue/20">
//                   Enabled
//                 </Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-foreground">Mentorship Messages</span>
//                 <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">
//                   Enabled
//                 </Badge>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-foreground">Weekly Digest</span>
//                 <Badge variant="secondary">Disabled</Badge>
//               </div>
//             </div>
//             <Button variant="outline" className="w-full mt-6">
//               Manage All Preferences
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Mail, 
  Calendar, 
  Briefcase, 
  Users, 
  Check,
  Trash2
} from "lucide-react";
import StudentNavbar from "./StudentNavbar";

// Initial notifications data
const initialNotifications = [
  {
    id: 1,
    type: "application",
    title: "Application Status Update",
    message: "Your application for Software Engineer Internship at Google has been reviewed.",
    time: "2 hours ago",
    read: false,
    icon: Briefcase,
    color: "asthra-green"
  },
  {
    id: 2,
    type: "event",
    title: "Upcoming Event Reminder",
    message: "AI & Machine Learning Workshop starts in 24 hours. Don't forget to join!",
    time: "4 hours ago",
    read: false,
    icon: Calendar,
    color: "asthra-blue"
  },
  {
    id: 3,
    type: "mentorship",
    title: "New Mentorship Match",
    message: "You've been matched with Sarah Johnson, Senior Software Engineer at Meta.",
    time: "1 day ago",
    read: true,
    icon: Users,
    color: "asthra-green"
  },
  {
    id: 4,
    type: "message",
    title: "New Message from Mentor",
    message: "Your mentor has sent you feedback on your latest project submission.",
    time: "2 days ago",
    read: true,
    icon: Mail,
    color: "asthra-blue"
  },
  {
    id: 5,
    type: "event",
    title: "Event Registration Confirmation",
    message: "You've successfully registered for the Career Development Seminar.",
    time: "3 days ago",
    read: true,
    icon: Calendar,
    color: "asthra-green"
  },
];

export default function StudentNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    applicationUpdates: true,
    eventReminders: true,
    mentorshipMessages: true,
    weeklyDigest: false
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  // Clear all notifications
  const clearAll = () => {
    setNotifications([]);
    setShowEmptyState(true);
  };

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, read: true } 
        : notification
    ));
  };

  // Delete a single notification
  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    
    if (updatedNotifications.length === 0) {
      setShowEmptyState(true);
    }
  };

  // Toggle notification setting
  const toggleNotificationSetting = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <StudentNavbar/>
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Notifications
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with your latest activities and opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 shadow-asthra">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">
                {unreadCount} new
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <Check className="h-4 w-4" />
            Mark All as Read
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={clearAll}
            disabled={notifications.length === 0}
          >
            <Trash2 className="h-4 w-4" />
            Clear All
          </Button>
        </div>

        {/* Notifications List */}
        {!showEmptyState && notifications.length > 0 && (
          <div className="space-y-4">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className={`${
                    !notification.read 
                      ? 'bg-gradient-card border-primary/20 shadow-card-asthra' 
                      : 'bg-card border-border/50'
                  } transition-all duration-300 hover:shadow-card-asthra`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notification.color === 'asthra-green' 
                          ? 'bg-asthra-green/10 text-asthra-green' 
                          : 'bg-asthra-blue/10 text-asthra-blue'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-semibold ${
                            !notification.read ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-asthra-green rounded-full flex-shrink-0 mt-2"></div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-xs"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as Read
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-xs"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Empty State (when no notifications) */}
        {(showEmptyState || notifications.length === 0) && (
          <Card className="bg-gradient-card border border-border/50">
            <CardContent className="text-center py-12">
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No notifications yet
              </h3>
              <p className="text-muted-foreground">
                When you have new updates, they'll appear here.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setNotifications(initialNotifications);
                  setShowEmptyState(false);
                }}
              >
                Restore Notifications
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Notification Settings */}
        <Card className="mt-8 bg-gradient-card border border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Application Updates</span>
                <Badge 
                  className={`cursor-pointer ${notificationSettings.applicationUpdates 
                    ? 'bg-asthra-green/10 text-asthra-green border-asthra-green/20' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                  onClick={() => toggleNotificationSetting('applicationUpdates')}
                >
                  {notificationSettings.applicationUpdates ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Event Reminders</span>
                <Badge 
                  className={`cursor-pointer ${notificationSettings.eventReminders 
                    ? 'bg-asthra-blue/10 text-asthra-blue border-asthra-blue/20' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                  onClick={() => toggleNotificationSetting('eventReminders')}
                >
                  {notificationSettings.eventReminders ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Mentorship Messages</span>
                <Badge 
                  className={`cursor-pointer ${notificationSettings.mentorshipMessages 
                    ? 'bg-asthra-green/10 text-asthra-green border-asthra-green/20' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                  onClick={() => toggleNotificationSetting('mentorshipMessages')}
                >
                  {notificationSettings.mentorshipMessages ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Weekly Digest</span>
                <Badge 
                  className={`cursor-pointer ${notificationSettings.weeklyDigest 
                    ? 'bg-asthra-green/10 text-asthra-green border-asthra-green/20' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'}`}
                  onClick={() => toggleNotificationSetting('weeklyDigest')}
                >
                  {notificationSettings.weeklyDigest ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6">
              Manage All Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}