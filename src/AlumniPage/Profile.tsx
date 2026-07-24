import { useState , useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Award,
  Users,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";
import api from "../api/api";

interface Profile{
  username:string;
  fullname:string;
  workingcompany:string;
  jobrole:string;
  mobilenumber:number;
  email:string;
  yearofpassing:string;
  collegeID:string;
  interests:string;
  branch:string;
   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
   location: "San Francisco, CA";
   bio: "Passionate software engineer with 5+ years of experience in full-stack development. Alumni mentor and active community contributor.";
}

export default function Profile(){
  const[profile,setProfile] =useState<Profile|null>(null);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");
  //  const [isEditing, setIsEditing] = useState(false);


  useEffect(()=>{
      const token=localStorage.getItem("token");
       localStorage.setItem("role","ALUMNI");
       
       const url=import.meta.env.Backend_URL;

      if(!token){
        setError("Profile Can't be Loaded , Try again ..");
        setLoading(false);
          return ;
      }
      api.get("/api/v1/alumni").then((res)=>{
          const data=res.data;
          setProfile(data);
      })
  },[]);


  
  return (
    <div className="alumni-shell">
      <AlumniNavbar/>
      {/* Profile Header */}
      <section className="alumni-hero py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 rounded-[2rem] border border-white/60 bg-white/15 p-8 backdrop-blur-md">
            <Avatar className="h-32 w-32 border-4 border-white/80 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <AvatarImage src={profile?.avatar} alt={profile?.fullname} />
              <AvatarFallback className="text-2xl">A</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="alumni-pill mb-3">Professional profile</div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profile?.fullname}</h1>
                  <p className="text-xl text-white/85 mb-2">{profile?.jobrole}</p>
                  <div className="flex items-center text-white/80 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{profile?.workingcompany}</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>{"Banglore"}</span>
                  </div>
                </div>
                {/* <Button 
                  variant={isEditing ? "default" : "outline"} 
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? "Save" : "Edit Profile"}
                </Button> */}
              </div>
              
              <p className="text-white/80 mb-6">{profile?.bio}</p>
              
              
              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>Class of {profile?.yearofpassing} • {"Bachelor of technology(B.Tech)"}</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="alumni-tab-list grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.mobilenumber}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.location}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Bachelor of Science in {profile?.branch}</h4>
                      <p className="text-muted-foreground">SRKR Engineering College</p>
                      <p className="text-sm text-muted-foreground">Graduated {profile?.yearofpassing}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

           

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent contributions and interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>Participated in "Career Transitions" forum discussion</span>
                      <span className="text-muted-foreground">2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Mentored 3 junior developers this month</span>
                      <span className="text-muted-foreground">1 week ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Completed "Leadership Excellence" program</span>
                      <span className="text-muted-foreground">2 weeks ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );

}