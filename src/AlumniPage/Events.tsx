import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Plus,
  Search,
  Filter,
  Video,
  Coffee,
  Briefcase,
  GraduationCap,
  Heart,
  Share2,
  UserPlus,
  CheckCircle,
  Eye
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const AlumniEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2025",
      date: "March 15, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "Main Campus Auditorium",
      type: "Reunion",
      organizer: "Alumni Committee",
      attendees: 450,
      maxAttendees: 500,
      registrationOpen: true,
      image: "/event-placeholder.jpg",
      description: "Join us for our biggest annual gathering of alumni from all batches.",
      isVirtual: false
    },
    {
      id: 2,
      title: "Tech Industry Networking Night",
      date: "January 20, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual Event",
      type: "Networking",
      organizer: "Tech Alumni Group",
      attendees: 120,
      maxAttendees: 200,
      registrationOpen: true,
      image: "/event-placeholder.jpg",
      description: "Connect with fellow tech professionals and share industry insights.",
      isVirtual: true
    },
    {
      id: 3,
      title: "Career Mentorship Workshop",
      date: "February 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Business Center Hall",
      type: "Workshop",
      organizer: "Career Services",
      attendees: 85,
      maxAttendees: 100,
      registrationOpen: true,
      image: "/event-placeholder.jpg",
      description: "Learn effective mentorship strategies and build meaningful connections.",
      isVirtual: false
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Healthcare Professionals Meet",
      date: "November 15, 2024",
      attendees: 95,
      feedback: 4.8,
      photos: 24,
      type: "Professional Meet"
    },
    {
      id: 5,
      title: "Startup Founders Panel",
      date: "October 22, 2024",
      attendees: 150,
      feedback: 4.9,
      photos: 18,
      type: "Panel Discussion"
    },
    {
      id: 6,
      title: "Alumni Charity Drive",
      date: "September 10, 2024",
      attendees: 200,
      feedback: 4.7,
      photos: 45,
      type: "Community Service"
    }
  ];

  const eventCategories = [
    { name: "All Events", count: 12, color: "bg-blue-500" },
    { name: "Networking", count: 4, color: "bg-green-500" },
    { name: "Professional", count: 3, color: "bg-purple-500" },
    { name: "Social", count: 2, color: "bg-pink-500" },
    { name: "Educational", count: 3, color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AlumniNavbar/>
      {/* Header */}
       <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
           Event Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover, organize, and participate in alumni events and networking opportunities
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="create">Create Event</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-t-lg" />
                    <Badge 
                      className="absolute top-4 left-4" 
                      variant={event.isVirtual ? "secondary" : "default"}
                    >
                      {event.isVirtual ? "Virtual" : "In-Person"}
                    </Badge>
                    <Badge className="absolute top-4 right-4" variant="outline">
                      {event.type}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {event.isVirtual ? <Video className="h-4 w-4 mr-2" /> : <MapPin className="h-4 w-4 mr-2" />}
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm text-muted-foreground">
                        by {event.organizer}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                        <Button size="sm">
                          <UserPlus className="h-4 w-4 mr-1" />
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Event History</h2>
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{event.attendees}</p>
                        <p className="text-xs text-muted-foreground">Attendees</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{event.feedback}</p>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{event.photos}</p>
                        <p className="text-xs text-muted-foreground">Photos</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Photos
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create Event */}
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Event</CardTitle>
                <CardDescription>
                  Organize a new alumni event and invite participants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Event Title</label>
                    <Input placeholder="Enter event title" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Event Type</label>
                    <Input placeholder="Networking, Workshop, etc." />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea placeholder="Describe your event..." className="mt-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Start Time</label>
                    <Input type="time" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">End Time</label>
                    <Input type="time" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Input placeholder="Event venue or 'Virtual'" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max Attendees</label>
                    <Input type="number" placeholder="100" />
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Create Event</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Event Categories</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-sm transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} events</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AlumniEvents;