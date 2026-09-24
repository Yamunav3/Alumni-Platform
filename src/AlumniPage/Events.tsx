import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Plus,
  Search,
  Filter,
  Video,
  Eye,
  UserPlus,
  X
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";
import Reunion from "@/assets/reunion.png";
import Tech from "@/assets/tech.png";
import Mentor from "@/assets/mentor.png";


import meet from "@/assets/meetind.png";
import charity from "@/assets/charity.png";
import startup from "@/assets/startup.png";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {getEvents} from "../api/studentAPI";
import {postEvent} from "../api/AlumniAPI";

interface Event{
  id:number;
  description:string;
   eventname:string;
   eventtype:string;
   image:string;
   time:string;
   date:string;
   location:string;

}

const EventCard = ({ event }: { event: Event }) => {
  const formattedTime = new Date(event.time).toLocaleString();

  return (
    <Card className="alumni-card overflow-hidden border-none group">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={`data:image/png;base64,${event.image}`}
          alt={event.eventname}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <Badge className="absolute top-3 right-3 border-0 bg-white/90 text-gray-900 backdrop-blur shadow-md">
          Event
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="p-5 space-y-3">

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
          {event.eventname}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <Clock className="w-4 h-4 text-purple-500" />
          {formattedTime}
        </div>

      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_25px_-12px_hsl(262_83%_58%/0.6)] hover:shadow-[0_10px_30px_-8px_hsl(262_83%_58%/0.8)] hover:brightness-110 transition-all duration-300">
          View Event
        </Button>
      </CardFooter>

    </Card>
  );
};

const AlumniEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events,setEvents] =useState<Event[]>([]);
  const[submit,setSubmit] = useState(false);
  const[formData,setFormData] = useState<Event>({
    id: 0,
  description: "",
  eventname: "",
  eventtype: "",
  image: "",
  time: "",
  date: "",
  location: "",
  });



useEffect(() => {
    getEvents()
      .then((data: Event[]) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Failed to load events:", error);
      });
  }, []);
  
// Form data is directly taken from state not passed as parameter
  const handleSubmit = async (e:React.FormEvent) =>{
    e.preventDefault(); //prevents page reload
       try{
        setSubmit(true);

        const res = await postEvent(formData);
        console.log(res.data);
         return res.data;
       }catch(error){
        console.log(error.msg);
          throw error;
       }finally{
        setSubmit(false);
       }

    
  }


  // const upcomingEvents = [
  //   {
  //     id: 1,
  //     imageUrl: Reunion, 
  //     title: "Annual Alumni Reunion 2025",
  //     date: "March 15, 2025",
  //     time: "6:00 PM - 11:00 PM",
  //     location: "Main Campus Auditorium",
  //     type: "Reunion",
  //     organizer: "Alumni Committee",
  //     attendees: 450,
  //     maxAttendees: 500,
  //     registrationOpen: true,
  //     description: "Join us for our biggest annual gathering of alumni from all batches.",
  //     isVirtual: false
  //   },
  //   {
  //     id: 2,
  //     imageUrl: Tech, 
  //     title: "Tech Industry Networking Night",
  //     date: "January 20, 2025",
  //     time: "7:00 PM - 9:00 PM",
  //     location: "Virtual Event",
  //     type: "Networking",
  //     organizer: "Tech Alumni Group",
  //     attendees: 120,
  //     maxAttendees: 200,
  //     registrationOpen: true,
  //     description: "Connect with fellow tech professionals and share industry insights.",
  //     isVirtual: true
  //   },
  //   {
  //     id: 3,
  //     imageUrl: Mentor, 
  //     title: "Career Mentorship Workshop",
  //     date: "February 5, 2025",
  //     time: "2:00 PM - 5:00 PM",
  //     location: "Business Center Hall",
  //     type: "Workshop",
  //     organizer: "Career Services",
  //     attendees: 85,
  //     maxAttendees: 100,
  //     registrationOpen: true,
  //     description: "Learn effective mentorship strategies and build meaningful connections.",
  //     isVirtual: false
  //   }
  // ];

  // const pastEvents = [
  //   {
  //     id: 4,
  //     title: "Healthcare Professionals Meet",
  //     date: "November 15, 2024",
  //     attendees: 95,
  //     type: "Professional Meet",
  //     highlights: [
  //       "Panel on latest healthcare trends",
  //       "Networking with 20+ senior doctors",
  //       "Career opportunities shared"
  //     ],
  //     photos: [meet,meet,meet]
  //   },
  //   {
  //     id: 5,
  //     title: "Startup Founders Panel",
  //     date: "October 22, 2024",
  //     attendees: 150,
  //     type: "Panel Discussion",
  //     highlights: [
  //       "10 startup founders shared insights",
  //       "Q&A on funding challenges",
  //       "Pitch competition for students"
  //     ],
  //     photos: [startup,startup,startup]
  //   },
  //   {
  //     id: 6,
  //     title: "Alumni Charity Drive",
  //     date: "September 10, 2024",
  //     attendees: 200,
  //     type: "Community Service",
  //     highlights: [
  //       "Funds raised for rural education",
  //       "Volunteering by 50+ alumni",
  //       "Distributed 1000+ books"
  //     ],
  //     photos: [charity,charity,charity]
  //   }
  // ];

  const eventCategories = [
    { name: "All Events", count: 12, color: "bg-blue-500" },
    { name: "Networking", count: 4, color: "bg-green-500" },
    { name: "Professional", count: 3, color: "bg-purple-500" },
    { name: "Social", count: 2, color: "bg-pink-500" },
    { name: "Educational", count: 3, color: "bg-orange-500" }
  ];

  return (
    <div className="alumni-shell">
      <AlumniNavbar/>
      {/* Header */}
      <section className="alumni-hero py-20 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="alumni-hero-chip mx-auto mb-6 animate-fade-in">
            <Calendar className="h-4 w-4" />
            Events & networking
          </div>
          <h1 className="alumni-hero-title mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Event <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">Management</span>
          </h1>
          <p className="alumni-hero-sub max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover, organize, and participate in alumni events and networking opportunities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="alumni-tab-list grid w-full grid-cols-4">
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
                  className="pl-10 rounded-xl border-slate-200 bg-white/80 shadow-sm focus-visible:ring-primary/30"
                />
              </div>
              <Button variant="outline" className="rounded-xl border-slate-200 bg-white/80 shadow-sm hover:bg-primary/5 hover:text-primary">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="alumni-card overflow-hidden group">
                  <div className="relative">
                    {event.imageUrl ? (
                      <img 
                        src={event.imageUrl} 
                        alt={event.title}
                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <Badge 
                      className="absolute top-4 left-4 border-0 shadow-md" 
                      variant={event.isVirtual ? "secondary" : "default"}
                    >
                      {event.isVirtual ? "Virtual" : "In-Person"}
                    </Badge>
                    <Badge className="absolute top-4 right-4 text-red-500 bg-white/90 border-0 backdrop-blur shadow-md" variant="outline">
                      {event.type}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary/60" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary/60" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {event.isVirtual ? <Video className="h-4 w-4 mr-2 text-primary/60" /> : <MapPin className="h-4 w-4 mr-2 text-primary/60" />}
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary/60" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="text-sm text-muted-foreground">
                        by {event.organizer}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="rounded-lg border-slate-200 hover:bg-primary/5 hover:text-primary">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                        <Link to={"/register"}>
                          <Button size="sm" className="rounded-lg bg-gradient-to-r from-primary to-accent shadow-[0_8px_20px_-10px_hsl(262_83%_58%/0.6)] hover:brightness-110 transition-all">
                            <UserPlus className="h-4 w-4 mr-1" />
                            Register
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
  {events.map((event) => (
    <EventCard key={event.id} event={event} />
  ))}
</div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Event <span className="alumni-gradient-text">History</span></h2>
              <Link to={"/analytics"}>
                <Button size="sm" className="rounded-lg bg-gradient-to-r from-primary to-accent shadow-md hover:brightness-110">
                  <Eye className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="alumni-card overflow-hidden group">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-primary/60" />
                          {event.date}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-white/60 border-primary/20">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 pt-4">
                    <p className="text-sm text-muted-foreground"><Users className="h-4 w-4 mr-1.5 inline text-primary/60" /> Attendees: {event.attendees}</p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-slate-600">
                      {event.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="w-full rounded-xl border-slate-200 hover:bg-primary/5 hover:text-primary">
                          View Photos
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader className="flex justify-between items-center">
                          <DialogTitle>{event.title} - Photos</DialogTitle>
                        </DialogHeader>
                        <CarouselWithAutoplay photos={event.photos} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div> */}
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
              <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Event Title</label>
                    <Input placeholder="Enter event title" value={formData.eventname} onChange={(e)=>setFormData(prev=>({...prev , eventname:e.target.value}))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Event Type</label>
                    <Input placeholder="Networking, Workshop, etc." value={formData.eventtype} onChange={(e)=>setFormData(prev=>({...prev,eventtype:e.target.value}))} />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea placeholder="Describe your event..." className="mt-1" value={formData.description} onChange={(e)=>setFormData(prev =>({...prev,description:e.target.value}))} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <Input type="date" value={formData.date} onChange={(e)=>setFormData(prev =>({...prev,date:e.target.value}))}/>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Time</label>
                    <Input type="time"  value={formData.time} onChange={(e)=>setFormData(prev =>({...prev,time:e.target.value}))}/>
                  </div>
                  {/* <div>
                    <label className="text-sm font-medium">End Time</label>
                    <Input type="time" />
                  </div> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Input placeholder="Event venue or 'Virtual'" type="text" value={formData.location} onChange={(e)=>setFormData(prev =>({...prev,location:e.target.value}))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max Attendees</label>
                    <Input type="number" placeholder="100" />
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  {/* <Button variant="outline">Save Draft</Button> */}
                  <Button type="submit">{submit?"Creating event" : "Create Event"}</Button>
                  
                </div>
              </CardContent>
              </form>
            </Card>
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories" className="space-y-6">

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

/* Carousel Component with Autoplay */
function CarouselWithAutoplay({ photos }: { photos: string[] }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextBtn = carouselRef.current.querySelector<HTMLButtonElement>(
          "[data-carousel-next]"
        );
        nextBtn?.click();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full" ref={carouselRef}>
      <CarouselContent>
        {photos.map((photo, i) => (
          <CarouselItem key={i}>
            <img
              src={photo}
              alt={`Photo ${i + 1}`}
              className="rounded-lg w-full h-80 object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious data-carousel-prev />
      <CarouselNext data-carousel-next />
    </Carousel>
  );
}

export default AlumniEvents;
