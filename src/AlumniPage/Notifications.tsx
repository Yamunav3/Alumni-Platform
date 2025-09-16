import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell,
  BellRing,
  Calendar,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  Check,
  X
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const notifications = [
  {
    id: 1,
    type: "event",
    title: "Alumni Reunion 2024",
    message: "Don't miss our annual reunion celebration next month!",
    time: "2 hours ago",
    unread: true,
    icon: Calendar,
    category: "Events"
  },
  {
    id: 2,
    type: "job",
    title: "New Job Opportunity",
    message: "Software Engineer position at TechCorp - Perfect match for your profile",
    time: "5 hours ago",
    unread: true,
    icon: Briefcase,
    category: "Career"
  },
  {
    id: 3,
    type: "connection",
    title: "New Connection Request",
    message: "John Smith (Class of 2018) wants to connect with you",
    time: "1 day ago",
    unread: false,
    icon: Users,
    category: "Network"
  },
  {
    id: 4,
    type: "forum",
    title: "New Forum Discussion",
    message: "Hot discussion in 'Career Advice' forum - 'Transitioning to Tech'",
    time: "2 days ago",
    unread: false,
    icon: MessageSquare,
    category: "Forums"
  },
  {
    id: 5,
    type: "mentorship",
    title: "Mentorship Request",
    message: "Sarah Wilson is looking for guidance in product management",
    time: "3 days ago",
    unread: true,
    icon: Users,
    category: "Mentorship"
  }
];

export default function AlumniNotifications() {
  const [filter, setFilter] = useState("all");
  const [notificationList, setNotificationList] = useState(notifications);

  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notif => ({ ...notif, unread: false }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notificationList.filter(notif => {
    if (filter === "unread") return notif.unread;
    if (filter === "events") return notif.type === "event";
    if (filter === "career") return notif.type === "job";
    if (filter === "network") return notif.type === "connection";
    return true;
  });

  const unreadCount = notificationList.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-background">
    <AlumniNavbar/>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <BellRing className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-4xl font-bold gradient-text">Notifications</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest activities and opportunities
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{unreadCount}</div>
              <div className="text-muted-foreground">Unread</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Your Notifications</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                <Check className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="space-y-4 mt-6">
              {filteredNotifications.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications found</p>
                  </CardContent>
                </Card>
              ) : (
                filteredNotifications.map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <Card 
                      key={notification.id}
                      className={`transition-all hover:shadow-md ${
                        notification.unread ? 'border-primary/20 bg-primary/5' : ''
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full ${
                              notification.unread ? 'bg-primary/10' : 'bg-muted'
                            }`}>
                              <IconComponent className={`h-4 w-4 ${
                                notification.unread ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <CardTitle className="text-base">{notification.title}</CardTitle>
                                {notification.unread && (
                                  <Badge variant="secondary" className="h-5 px-2 text-xs">
                                    New
                                  </Badge>
                                )}
                                <Badge variant="outline" className="h-5 px-2 text-xs">
                                  {notification.category}
                                </Badge>
                              </div>
                              <CardDescription className="text-sm">
                                {notification.message}
                              </CardDescription>
                              <p className="text-xs text-muted-foreground mt-2">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {notification.unread && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}