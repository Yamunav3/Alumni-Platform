import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, MapPin, Users, Clock, Filter, Search, UserPlus, 
  Video, ChevronRight, Camera, Star, Sparkles, GraduationCap, Mic, Lightbulb
} from "lucide-react";
import SuggestEventForm from "./Events/SuggestEventForm"; // ✅ Import the form
import { getEvents } from "../api/studentApi"; // ✅ Import the API function to fetch events
// Events Interface
interface Event{
  id:number;
  event_description:string;
   event_name:string;
   image:string;
   time:string;
}

// Mock Events Data
const EVENTS: Event[] = [
  {
    id: 1,
    event_name: "AI & Machine Learning Summit",
    event_description: "Join alumni working in AI to discuss the future of machine learning.",
    image: "",
    time: "2026-03-10T14:00:00"
  },
];

const EventCard = ({ event }: { event: Event }) => {
  const formattedTime = new Date(event.time).toLocaleString();

  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={`data:image/png;base64,${event.image}`}
          alt={event.event_name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900 backdrop-blur">
          Event
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="p-5 space-y-3">

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition">
          {event.event_name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {event.event_description}
        </p>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <Clock className="w-4 h-4 text-purple-500" />
          {formattedTime}
        </div>

      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
          View Event
        </Button>
      </CardFooter>

    </Card>
  );
};
// --- MOCK DATA ---
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Annual Alumni Reunion 2025",
    date: "March 15, 2025",
    month: "MAR",
    day: "15",
    time: "6:00 PM",
    location: "Main Campus Auditorium",
    category: "Social",
    attendees: 450,
    max: 500,
    isVirtual: false,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000",
    organizer: "Alumni Committee"
  },
  {
    id: 2,
    title: "Tech Industry Trends Summit",
    date: "January 20, 2025",
    month: "JAN",
    day: "20",
    time: "7:00 PM",
    location: "Zoom (Virtual)",
    category: "Tech",
    attendees: 120,
    max: 200,
    isVirtual: true,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
    organizer: "Admin Team"
  },
  {
    id: 3,
    title: "Career Mentorship Bootcamp",
    date: "February 05, 2025",
    month: "FEB",
    day: "05",
    time: "2:00 PM",
    location: "Business Center Hall",
    category: "Workshop",
    attendees: 85,
    max: 100,
    isVirtual: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    organizer: "Career Cell"
  }
];

const PAST_EVENTS = [
  {
    id: 4,
    title: "Healthcare Innovators Meet",
    date: "Nov 15, 2024",
    photos: 24,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
  },
  // {
  //   id: 5,
  //   title: "Start-up Founders Panel",
  //   date: "Oct 22, 2024",
  //   photos: 45,
  //   rating: 4.9,
  //   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
  // }
];

const CATEGORIES = [
  { name: "Networking", icon: Users, color: "bg-blue-100 text-blue-600", count: 12 },
  { name: "Workshops", icon: GraduationCap, color: "bg-purple-100 text-purple-600", count: 8 },
  { name: "Tech Talks", icon: Mic, color: "bg-orange-100 text-orange-600", count: 5 },
  { name: "Reunions", icon: Star, color: "bg-yellow-100 text-yellow-600", count: 3 },
];

const AlumniEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showSuggestForm, setShowSuggestForm] = useState(false); // ✅ State for modal
const [events,setEvents] =useState<Event[]>([]);


  const filteredEvents = UPCOMING_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || event.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
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

  return (
    <div className="min-h-screen bg-gray-50/30 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="relative bg-slate-900 text-white py-16 overflow-hidden mb-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Connect with Alumni & Experts</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Networking</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Explore events conducted by Alumni and Admins. Have a great idea? Suggest an event!
            </p>

            {/* ✅ Suggest Event Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg shadow-purple-900/20"
                onClick={() => setShowSuggestForm(true)}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Suggest an Event
              </Button>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs defaultValue="upcoming" className="space-y-8">
            
            <div className="flex justify-center">
              <TabsList className="bg-white border p-1 rounded-full shadow-sm h-auto inline-flex">
                <TabsTrigger value="upcoming" className="rounded-full px-6 py-2.5 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Upcoming</TabsTrigger>
                <TabsTrigger value="past" className="rounded-full px-6 py-2.5 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Past Events</TabsTrigger>
                {/* <TabsTrigger value="categories" className="rounded-full px-6 py-2.5 data-[state=active]:bg-purple-600 data-[state=active]:text-white">Browse Categories</TabsTrigger> */}
              </TabsList>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events, topics, or venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 bg-white border-gray-200 rounded-xl"
                />
              </div>
              <div className="w-full md:w-auto">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[180px] h-11 bg-white border-gray-200 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <SelectValue placeholder="Filter Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* UPCOMING EVENTS */}

            <TabsContent value="upcoming" className="space-y-6">
              <AnimatePresence>
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">No events found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
                          <div className="relative h-56 overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl p-2 text-center min-w-[60px] shadow-sm">
                              <span className="block text-xs font-bold text-red-500 uppercase tracking-wider">{event.month}</span>
                              <span className="block text-2xl font-bold text-gray-900 leading-none">{event.day}</span>
                            </div>

                            <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur border-none hover:bg-black/60">
                              {event.isVirtual ? "Virtual" : "In-Person"}
                            </Badge>
                          </div>

                          <CardContent className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-none">
                                {event.category}
                              </Badge>
                              <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                by {event.organizer}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                              {event.title}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-600 mb-6">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-500" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2">
                                {event.isVirtual ? <Video className="w-4 h-4 text-blue-500" /> : <MapPin className="w-4 h-4 text-red-500" />}
                                <span className="line-clamp-1">{event.location}</span>
                              </div>
                            </div>
                          </CardContent>

                          <CardFooter className="p-6 pt-0 mt-auto">
                            <Link to="" className="w-full">
                              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-11 rounded-xl shadow-md group-hover:translate-y-[-2px] transition-transform">
                                Register Now <UserPlus className="w-4 h-4 ml-2" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                      ))}
              </div>
              </AnimatePresence>
            </TabsContent>

            {/* PAST EVENTS */}
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PAST_EVENTS.map((event, index) => (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                      <div className="w-full md:w-48 h-48 md:h-auto relative">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"/>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> {event.photos} Photos</span>
                          <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {event.rating}</span>
                        </div>

                        <Button variant="outline" size="sm" className="w-fit">View Gallery <ChevronRight className="w-3 h-3 ml-1" /></Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* CATEGORIES */}
            <TabsContent value="categories">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {CATEGORIES.map((cat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="cursor-pointer border-none shadow-sm hover:shadow-md bg-white h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center shadow-sm`}>
                          <cat.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{cat.name}</h3>
                          <p className="text-sm text-gray-500">{cat.count} Events</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>

        {/* ✅ Modal Form */}
        <SuggestEventForm open={showSuggestForm} onOpenChange={setShowSuggestForm} />
        
      </div>
  );
};

export default AlumniEvents;
