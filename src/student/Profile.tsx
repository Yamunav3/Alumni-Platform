
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, Mail, Phone, Briefcase, Award, BookOpen, Edit, MapPin, Calendar,
  Linkedin, Github, FileText, ExternalLink, Download, Upload
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Types
interface Skill {
  id: number;
  name: string;
}

interface Activity {
  id: number;
  type: 'applied' | 'completed' | 'attended';
  title: string;
  description: string;
  date: string;
}

interface Application {
  id: number;
  company: string;
  position: string;
  status: 'applied' | 'under-review' | 'interview' | 'offer' | 'rejected';
  appliedDate: string;
}

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface Profile {
  fullname: string;
  branch: string;
  yearofpassing: string;
  collegeID: string;
  email: string;
  interests: string;
  mobilenumber: number;
  location?: string;
  joinDate?: string;
  degree?: string;
  major?: string;
  gpa?: string;
  
  // ✅ New Fields
  linkedin?: string;
  github?: string;
  resume?: string; // Storing filename or URL

  skills?: Skill[];
  activities?: Activity[];
  applications?: Application[];
  achievements?: Achievement[];
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<Profile | null>(null);

  useEffect(() => {  
    const token = localStorage.getItem("token");
    
    // Fallback mock data with new fields
    const mockProfile: Profile = {
        fullname: "John Doe",
        branch: "Computer Science",
        yearofpassing: "2025",
        collegeID: "AST-2022-001",
        email: "john.doe@asthra.com",
        interests: "AI, Web Development",
        mobilenumber: 9876543210,
        location: "New York, USA",
        joinDate: "Sept 2021",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        resume: "john_doe_resume.pdf",
        skills: [{id: 1, name: "React"}, {id: 2, name: "Node.js"}],
        activities: [],
        applications: [],
        achievements: []
    };

    if (!token) {
        setProfile(mockProfile);
        setFormData(mockProfile);
        setLoading(false);
        return;
    }

    fetch("http://localhost:8080/api/v1/student", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((res) => {
        if (!res.ok) {
           setProfile(mockProfile);
           setFormData(mockProfile);
           return; 
        }
        return res.json();
      })
      .then((data: Profile) => {
        setProfile(data);
        localStorage.setItem("studentName", data.fullname);
        setFormData(data);
      })
      .catch((err) => {
        console.error(err);
        setProfile(mockProfile);
        setFormData(mockProfile);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // ✅ Handle Resume File Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // In a real app, you would upload this file to a server here.
      // For now, we simulate by just setting the filename.
      setFormData({ ...formData, resume: file.name });
    }
  };

  const handleSave = () => {
    if (formData) {
      setProfile(formData);
      setIsEditModalOpen(false);
      // Add API call here to save changes (PUT request)
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-[80vh]">
        <div className="animate-pulse flex flex-col items-center">
            <div className="h-32 w-32 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
        </div>
    </div>
  );

  return (
    <>
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl overflow-hidden">
             {/* If user has image, show it here, else icon */}
            <User className="h-16 w-16 text-white" />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold mb-2">{profile?.fullname}</h1>
            <p className="text-xl text-indigo-100 mb-4">{profile?.branch} • {profile?.yearofpassing}</p>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge className="bg-green-500/20 text-green-100 hover:bg-green-500/30 border-none px-3 py-1">Active Student</Badge>
              <Badge className="bg-white/10 text-white hover:bg-white/20 border-none px-3 py-1">ID: {profile?.collegeID}</Badge>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button 
              onClick={() => setIsEditModalOpen(true)}
              className="bg-white text-indigo-900 hover:bg-indigo-50 border-none shadow-lg transition-transform hover:scale-105"
            >
              <Edit className="h-4 w-4 mr-2" /> Edit Profile
            </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Details */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* ✅ Professional Links Card */}
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Professional Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile?.resume && (
                <div className="p-4 border border-dashed border-indigo-200 rounded-xl bg-indigo-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-red-500">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-muted-foreground font-medium">Resume</p>
                      <p className="text-sm font-semibold truncate w-32">{profile.resume}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-indigo-600 hover:bg-indigo-100">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                {profile?.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2 border-indigo-100 hover:bg-blue-50 hover:text-blue-700">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" disabled className="w-full justify-start gap-2 opacity-50">
                    <Linkedin className="h-4 w-4" /> Add LinkedIn
                  </Button>
                )}

                {profile?.github ? (
                  <a href={profile.github} target="_blank" rel="noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2 border-indigo-100 hover:bg-gray-50 hover:text-gray-900">
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" disabled className="w-full justify-start gap-2 opacity-50">
                    <Github className="h-4 w-4" /> Add GitHub
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-indigo-500" />
                <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">{profile?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-green-500" />
                <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{profile?.mobilenumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-red-500" />
                <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">{profile?.location || "Not set"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader><CardTitle className="text-lg">Interests/Skills</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile?.skills && profile.skills.length > 0 ? (
                    profile.skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                        {skill.name}
                    </Badge>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground"></p>
                )}
                {/* Fallback for comma separated string */}
                {(!profile?.skills || profile.skills.length === 0) && profile?.interests && (
                    profile.interests.split(',').map((int, i) => (
                        <Badge key={i} variant="outline">{int.trim()}</Badge>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Stats & Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                    <Briefcase className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{profile?.applications?.length || 0}</div>
                <div className="text-xs text-gray-500">Applications</div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
                    <BookOpen className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{profile?.activities?.length || 0}</div>
                <div className="text-xs text-gray-500">Activities</div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2">
                    <Award className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{profile?.achievements?.length || 0}</div>
                <div className="text-xs text-gray-500">Awards</div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                    <Calendar className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-gray-800">4</div>
                <div className="text-xs text-gray-500">Events</div>
             </div>
          </div>

          <Card className="border-none shadow-md">
            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
            <CardContent>
                {profile?.activities && profile.activities.length > 0 ? (
                    <div className="space-y-4">
                        {profile.activities.map((activity) => (
                            <div key={activity.id} className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                                <div className={`mt-1 p-2 rounded-full ${
                                    activity.type === 'applied' ? 'bg-blue-100 text-blue-600' : 
                                    activity.type === 'completed' ? 'bg-green-100 text-green-600' : 
                                    'bg-purple-100 text-purple-600'
                                }`}>
                                    {activity.type === 'applied' ? <Briefcase size={16}/> : 
                                     activity.type === 'completed' ? <Award size={16}/> : <User size={16}/>}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">{activity.title}</h4>
                                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                                    <p className="text-[10px] text-gray-400 mt-1">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        No recent activity to show.
                    </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your personal information below.</DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {/* Personal Details */}
            <div className="space-y-4">
                <h3 className="font-medium text-sm text-gray-500 border-b pb-2">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input id="fullname" name="fullname" value={formData?.fullname} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="mobilenumber">Phone</Label>
                        <Input id="mobilenumber" name="mobilenumber" value={formData?.mobilenumber} onChange={handleInputChange} />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" name="location" value={formData?.location} onChange={handleInputChange} placeholder="City, Country"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="branch">Branch / Major</Label>
                        <Input id="branch" name="branch" value={formData?.branch} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="interests">Interests (Comma separated)</Label>
                    <Input id="interests" name="interests" value={formData?.interests} onChange={handleInputChange} />
                </div>
            </div>

            {/* ✅ New Professional Links Section */}
            <div className="space-y-4">
                <h3 className="font-medium text-sm text-gray-500 border-b pb-2">Professional Links & Resume</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="linkedin" className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn URL
                        </Label>
                        <Input 
                            id="linkedin" 
                            name="linkedin" 
                            placeholder="https://linkedin.com/in/..." 
                            value={formData?.linkedin || ""} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="github" className="flex items-center gap-2">
                            <Github className="h-4 w-4" /> GitHub URL
                        </Label>
                        <Input 
                            id="github" 
                            name="github" 
                            placeholder="https://github.com/..." 
                            value={formData?.github || ""} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="resume" className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-red-500" /> Resume / CV (PDF)
                    </Label>
                    <div className="border border-input rounded-md p-2 flex items-center gap-2 bg-gray-50">
                        <Input 
                            id="resume" 
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            className="file:bg-indigo-50 file:text-indigo-700 file:border-0 file:rounded-md file:px-2 file:py-1 file:mr-4 file:text-sm hover:file:bg-indigo-100 transition-all cursor-pointer"
                            onChange={handleFileChange} 
                        />
                    </div>
                    {formData?.resume && (
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <Upload className="h-3 w-3" /> Current: {formData.resume}
                        </p>
                    )}
                </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
