
import { useState,useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spin } from "antd";
import { 
  Users, Briefcase, Video, BookOpen, MessageCircle, 
  TrendingUp, Star, Zap, Calendar, ArrowUpRight
} from "lucide-react";

// Components
import SuccessStoryHero from "../SuccessStoryHero";
import MentorshipSection from "./MentorshipSection";
import InternshipSection from "./InternshipSection";
import WebinarSection from "./WebinarSection";
import TrainingSection from "./TrainingSection";
import FeedbackSection from "./FeedbackSection";


interface profile{
    username:string;
    email:string;
    fullname:string;
    status:string;
 }



const StudentHome = () => {
  const [activeTab, setActiveTab] = useState("mentorship");
  const [loading, setLoading] = useState(false);
const token=localStorage.getItem('token')||'';

const [profile,setProfile]=useState<profile|null>(null);
  // --- MOCK DATA (Same as before) ---
  // (Keeping your existing data arrays here to save space in this snippet)
  // ... Paste your mentors, internships, webinars, trainings arrays here ...
  
  // Re-declaring empty arrays just for code validity in this view
  // REPLACE THESE with your actual data arrays
  const mentors = [/*... your data ...*/]; 
  const internships = [/*... your data ...*/];
  const webinars = [/*... your data ...*/];
  const trainings = [/*... your data ...*/];

  const handleTabChange = (value: string) => {
    setLoading(true);
    setActiveTab(value);
    setTimeout(() => setLoading(false), 400); // Slight delay for animation feel
  };



useEffect(()=>{
 
  fetch('http://localhost:8080/api/v1/student',{
   
    method:'GET',
    headers:{ 
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  }).then((res)=>{
    if(!res.ok){  
      return;
    }
    return res.json();
  }).then((data:profile)=>{
    setProfile(data);
  }).catch((err)=>{
    console.error(err);
  })},[]);

   
  return (
    <div className="min-h-screen bg-gray-50/50">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h2 className="text-sm font-semibold text-purple-600 tracking-wide uppercase mb-1">
                Student Dashboard
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{profile?.fullname}</span> 👋
              </h1>
              <p className="text-gray-500 mt-2 max-w-lg">
                Ready to accelerate your career?<span className="font-semibold text-gray-900">{}</span>
              </p>
            </div>
            <div className="flex gap-2">
               <div className="bg-white px-4 py-2 rounded-full border shadow-sm flex items-center gap-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {profile?.status === 'online' ? 'Online' : 'Offline'}
               </div>
               <div className="bg-white px-4 py-2 rounded-full border shadow-sm flex items-center gap-2 text-sm font-medium text-gray-600">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
               </div>
            </div>
          </div>
        </div>

        {/* --- 2. BENTO GRID HERO (Unique Layout) --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: The Success Story Carousel (Takes up 2/3 width) */}
            <div className="lg:col-span-2">
               <SuccessStoryHero />
            </div>

            {/* Right: Quick Stats & Actions (Takes up 1/3 width) */}
            <div className="flex flex-col gap-6">
              
              {/* Stat Card 1: Profile */}
              <Card className="rounded-3xl border-none shadow-lg bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <CardContent className="p-6 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <BadgePill text="+12% this week" />
                  </div>
                  <div>
                    <p className="text-indigo-100 text-sm mb-1">Profile Views</p>
                    <h3 className="text-4xl font-bold">1,248</h3>
                    <Button variant="link" className="text-white p-0 h-auto mt-2 text-xs opacity-90 hover:opacity-100">
                      View Analytics <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Stat Card 2: Upcoming */}
              <Card className="rounded-3xl border shadow-sm bg-white h-full group hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Upcoming</h4>
                      <p className="text-xs text-gray-500">Don't miss out</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 group-hover:bg-orange-50/50 transition-colors cursor-pointer">
                      <div className="flex-col flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm border text-xs font-bold text-gray-700">
                        <span>FEB</span><span>15</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">Tech Networking Night</p>
                        <p className="text-xs text-gray-500">5:00 PM • Virtual</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>

        {/* --- 3. FLOATING TABS SECTION --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
            
            {/* Custom Floating Tab List */}
            <div className="sticky top-4 z-30 flex justify-center">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 p-1.5 rounded-full shadow-lg shadow-gray-200/50 inline-flex overflow-x-auto max-w-full">
                <TabsList className="bg-transparent h-12 p-0 gap-1">
                  <TabItem value="mentorship" icon={<Users size={18} />} label="Mentorship" />
                  <TabItem value="internships" icon={<Briefcase size={18} />} label="Internships" />
                  <TabItem value="webinars" icon={<Video size={18} />} label="Webinars" />
                  <TabItem value="training" icon={<BookOpen size={18} />} label="Training" />
                  <TabItem value="feedback" icon={<MessageCircle size={18} />} label="Feedback" />
                </TabsList>
              </div>
            </div>

            {/* Tab Content Container */}
            <div className="min-h-[500px] relative">
              {loading && (
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-3xl">
                  <Spin size="large" />
                </div>
              )}

              <div className={`transition-all duration-500 ${loading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                
                <TabsContent value="mentorship" className="mt-0">
                  <SectionHeader title="Find your Mentor" subtitle="Connect with alumni who have walked your path." />
                  <MentorshipSection  />
                </TabsContent>

                <TabsContent value="internships" className="mt-0">
                  <SectionHeader title="Curated Internships" subtitle="Exclusive opportunities from our alumni network." />
                  <InternshipSection  />
                </TabsContent>

                <TabsContent value="webinars" className="mt-0">
                  <SectionHeader title="Live Sessions" subtitle="Learn from the best in the industry." />
                  <WebinarSection webinars={webinars} />
                </TabsContent>

                <TabsContent value="training" className="mt-0">
                  <SectionHeader title="Skill Up" subtitle="Courses designed to get you hired." />
                  <TrainingSection trainings={trainings} />
                </TabsContent>

                <TabsContent value="feedback" className="mt-0">
                  <SectionHeader title="Your Voice Matters" subtitle="Help us improve the community." />
                  <FeedbackSection />
                </TabsContent>

              </div>
            </div>
          </Tabs>
        </div>

      </div>
  );
};

// --- Helper Components for Clean Code ---

const BadgePill = ({ text }: { text: string }) => (
  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
    {text}
  </span>
);

const TabItem = ({ value, icon, label }: { value: string; icon: any; label: string }) => (
  <TabsTrigger 
    value={value} 
    className="rounded-full px-6 h-10 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-600 hover:text-purple-600 transition-all flex items-center gap-2"
  >
    {icon}
    <span className="hidden md:inline">{label}</span>
  </TabsTrigger>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-8 ml-2">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-500">{subtitle}</p>
  </div>
);

export default StudentHome;
