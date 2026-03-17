
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Quote, Linkedin, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { set } from "date-fns";
import { getSuccessStories } from "@/api/studentApi";

const stories = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Product Designer",
    company: "Airbnb",
    gradYear: "2021",
    // image: "https://github.com/shadcn.png", // Replace with real images
    quote: "The mentorship I received in my 3rd year changed my career. My mentor helped me build a portfolio that got me hired.",
    tags: ["Design", "Tech"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AI Researcher",
    company: "OpenAI",
    gradYear: "2019",
    // image: "https://github.com/shadcn.png", 
    quote: "Asthra's hackathons gave me the confidence to build things. An alumnus noticed my project and recommended me for a fellowship.",
    tags: ["AI", "Research"]
  },
  {
    id: 3,
    name: "James Chen",
    role: "Founder",
    company: "TechFlow",
    gradYear: "2020",
    // image: "https://github.com/shadcn.png", 
    quote: "Networking isn't about asking for favors, it's about genuine relationships. I met my co-founder at an alumni mixer.",
    tags: ["Startup", "Founder"]
  }
];

//story structure that mainly holds the type info
interface storyType {
  id:number;
  name:string;
  title:string;
  role:string;
  company:string;
  gradYear:string;
  quote:string;
  tags:string[];
}

export default function SuccessStoryHero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [storiesData, setStoriesData] = useState<storyType>();
  
  // Auto-play logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };


useEffect(()=>{
    getSuccessStories().then((data:storyType)=>{
      setStoriesData(data);
    });
  // --- IGNORE ---
  // fetch("http://localhost:8080/api/v1/alumni/getStory",{
  //   method:"GET",
  //   headers:{
  //     "content-type":"application/json",
  //     "Authorization":`Bearer ${localStorage.getItem("token") }`
  //   },
  // }).then((res)=>{
  //   if(!res.ok)
  //      return ;
  //     return res.json();
  // }).then((data: storyType[])=>{
  //       setStoriesData(data);
  // }).catch((err)=>{
  //   console.log(err);
  // });
},[])


  const story = stories[current];

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-purple-50 via-white to-blue-50 border border-white/50 shadow-lg mb-8 group"
      onMouseEnter={() => setIsPlaying(false)} // Pause on hover
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Decorative background elements (Subtle for light mode) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl"></div>

      {/* Navigation Buttons (Visible on Hover) */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-purple-600 shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-purple-600 shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative z-10 px-6 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left Side: Image & Info */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Soft gradient ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full animate-pulse opacity-50 blur-sm"></div>
            <Avatar className="w-full h-full border-4 border-white shadow-xl relative z-10">
              {/* <AvatarImage src={story.image} className="object-cover" /> */}
              <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-3 -right-3 bg-white text-purple-600 p-2 rounded-full shadow-md border border-gray-100 z-20">
              <Quote className="h-5 w-5 fill-current" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">
              Alumni Spotlight
            </Badge>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm font-medium">Class of {story.gradYear}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            {story.name}
          </h2>
          <p className="text-gray-600 font-medium mb-4 text-lg">
            {story.role} at <span className="text-purple-700 font-bold">{story.company}</span>
          </p>

          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 max-w-2xl font-serif">
            "{story.quote}"
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200">
              Read Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-purple-700">
              <Linkedin className="mr-2 h-4 w-4 text-[#0077b5]" /> Connect
            </Button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-6 flex items-center gap-3 z-20">
        <div className="flex gap-1.5">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setIsPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-purple-600" : "w-1.5 bg-gray-300 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}