
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, Target, Lightbulb, Award, Globe, Rocket, Heart, Linkedin, Twitter, 
  Sparkles, TrendingUp, Zap, Briefcase, Loader2, Share2, Compass, Shield
} from "lucide-react";
import StudentLayout from "./StudentLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import api from "../api/api";

// --- FALLBACK DATA ---
const FALLBACK_TEAM = [
  { _id: "1", name: "Dr. Alan Grant", role: "Faculty Advisor", img: "", color: "from-blue-400 to-indigo-500" },
  { _id: "2", name: "Sarah Connor", role: "Alumni Relations", img: "", color: "from-purple-400 to-pink-500" },
  { _id: "3", name: "Tony Stark", role: "Tech Lead", img: "", color: "from-orange-400 to-red-500" },
];

const statsData = [
  { label: "Students", val: 1200, icon: <Users className="h-4 w-4" />, color: "text-purple-600", bg: "bg-purple-100" },
  { label: "Stories", val: 450, icon: <Award className="h-4 w-4" />, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "Partners", val: 150, icon: <Briefcase className="h-4 w-4" />, color: "text-green-600", bg: "bg-green-100" },
  { label: "Hours", val: 3000, icon: <Zap className="h-4 w-4" />, color: "text-orange-600", bg: "bg-orange-100" }
];

const GRADIENTS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-orange-400 to-red-500",
  "from-green-400 to-teal-500",
  "from-gray-700 to-black",
  "from-yellow-400 to-orange-500"
];

export default function StudentAbout() {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState<any[]>(FALLBACK_TEAM);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        // Ensure this matches your actual endpoint
        const response = await api.get('/staff/all'); 
        
        if (response.data && Array.isArray(response.data)) {
          const processedData = response.data.map((member: any, index: number) => ({
            _id: member._id || index,
            name: member.username || member.name || "Team Member",
            role: member.role || "Staff Member",
            img: member.profileImage || "",
            color: GRADIENTS[index % GRADIENTS.length]
          }));
          setTeamMembers(processedData);
        }
      } catch (error) {
        console.error("Failed to fetch team members, using fallback.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <StudentLayout>
      <div className="min-h-screen w-full bg-white pb-12 overflow-x-hidden">
        
        {/* --- SECTION 1: UNIQUE HERO (Tech Grid Style) --- */}
        <section className="relative bg-slate-950 overflow-hidden mb-12">
          {/* 1. CSS Grid Background Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
               }}>
          </div>
          
          {/* 2. Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 md:pt-32 md:pb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Typography */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-slate-300">Live Ecosystem</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                  Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ambition</span> <br/>
                  Meets <span className="text-white border-b-4 border-blue-500">Reality.</span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                  Asthra isn't just a platform—it's the engine powering the next generation of careers through connection, mentorship, and growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-900/20">
                    Get Started
                  </Button>
                  <Button variant="outline" className="h-12 px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg bg-transparent">
                    View Impact
                  </Button> */}
                </div>
              </div>

              {/* Right Column: Abstract Floating Network */}
              <div className="relative hidden md:block h-[400px]">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl z-20 animate-float">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
                
                {/* Floating Satellites (CSS Animation) */}
                <div className="absolute top-10 left-10 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-float-delayed z-10">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute bottom-20 left-20 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-float z-10">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute top-20 right-10 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-float-delayed z-10">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute bottom-10 right-20 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-float z-10">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>

                {/* Connecting Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20" viewBox="0 0 400 400">
                  <line x1="200" y1="200" x2="60" y2="60" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="340" y2="80" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="100" y2="340" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="200" x2="320" y2="320" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 2: STATS & VISION --- */}
        <section className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 -mt-16">
            {statsData.map((stat) => (
              <Card key={stat.label} className="border-none shadow-xl bg-white">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-900">{stat.val}+</div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="md:col-span-2">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl rounded-2xl overflow-hidden h-full border-none relative group">
                <CardContent className="p-10 relative z-10 flex flex-col justify-center h-full">
                  <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Compass className="text-white h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    To create a borderless academic community where every student has access to the guidance, resources, and networks needed to excel.
                  </p>
                </CardContent>
                <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
              </Card>
            </div>
            <div className="space-y-4">
              {[
                { title: "Innovation", icon: <Share2 className="text-orange-500 h-5 w-5" />, bg: "bg-orange-50" },
                { title: "Excellence", icon: <Shield className="text-blue-500 h-5 w-5" />, bg: "bg-blue-50" },
                { title: "Purpose", icon: <Heart className="text-red-500 h-5 w-5" />, bg: "bg-red-50" }
              ].map((item, i) => (
                 <div key={i} className={`p-6 rounded-2xl ${item.bg} flex items-center gap-4 transition-transform hover:-translate-y-1`}>
                    <div className="bg-white p-3 rounded-xl shadow-sm">{item.icon}</div>
                    <span className="font-bold text-gray-900 text-lg">{item.title}</span>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: DYNAMIC TEAM GRID --- */}
        <section className="py-12 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Meet the <span className="text-blue-600">Minds</span>
              </h2>
              <p className="text-gray-500 mt-2">The architects behind the community</p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={member._id || index} className="group relative">
                    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                      
                      <div className="relative">
                        <Avatar className="w-20 h-20 border-2 border-white shadow-md">
                          <AvatarImage src={member.img} />
                          <AvatarFallback className={`text-white bg-gradient-to-br ${member.color}`}>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {/* Status Dot */}
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                        <Badge variant="secondary" className="mt-1 bg-gray-100 text-gray-600 font-normal">
                          {member.role}
                        </Badge>
                      </div>

                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- SECTION 4: CTA --- */}
        {/* <section className="max-w-5xl mx-auto px-4 mt-20 mb-10">
          <div className="bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your journey?
              </h2>
              <div className="flex justify-center gap-4">
                <Button className="bg-white text-slate-900 hover:bg-gray-100 rounded-full px-8 h-12" onClick={()=>navigate('/login/student')}>Join as Student</Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 bg-transparent"  onClick={()=>navigate("/login/alumni")}>Join as Alumni</Button>
              </div>
            </div>
          </div>
        </section> */}

      </div>

      {/* --- SAFE CSS ANIMATIONS --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(-50%) translateY(-50%); }
          50% { transform: translateY(-10px) translateX(-50%) translateY(-50%); }
          100% { transform: translateY(0px) translateX(-50%) translateY(-50%); }
        }
        @keyframes float-simple {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float-simple 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-simple 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </StudentLayout>
  );
}