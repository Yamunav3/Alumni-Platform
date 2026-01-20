import { useState ,useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase,
  Edit,
  Award,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  MoreVertical,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentNavbar from "./StudentNavbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

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
  company?: string;
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

// interface ProfileData {
//   name: string;
//   email: string;
//   phone: string;
  
//   graduationDate: string;
  
// }

interface Profile{
  fullname:string;
  branch:string;
  yearofpassing:string;
  collegeID:string;
  email:string;
  interests:string;
  mobilenumber:number;


  location: string;
  joinDate: string;
  degree: string;
  major: string;
  gpa: string;
  skills: Skill[];
  activities: Activity[];
  applications: Application[];
  achievements: Achievement[];
}

// Profile Edit Form Component
// interface ProfileEditFormProps {
//   profile: Profile;
//   onSave: (data: Profile) => void;
//   onCancel: () => void;
//   isOpen: boolean;
// }

// const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
//   profile,
//   onSave,
//   onCancel,
//   isOpen
// }) => {
//   const [formData, setFormData] = useState<Profile>(profile);
//   const [newSkill, setNewSkill] = useState("");

//   const handleInputChange = (field: keyof Profile, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSkillAdd = () => {
//     if (newSkill.trim()) {
//       setFormData(prev => ({
//         ...prev,
//         skills: [...prev.skills, { id: Date.now(), name: newSkill.trim() }]
//       }));
//       setNewSkill("");
//     }
//   };

//   const handleSkillRemove = (id: number) => {
//     setFormData(prev => ({
//       ...prev,
//       skills: prev.skills.filter(skill => skill.id !== id)
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
// //     <Dialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
//       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Edit Profile</DialogTitle>
//           <DialogDescription>
//             Update your profile information below.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmit} className="space-y-6 py-4">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange('email', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   value={formData.mobilenumber}
//                   onChange={(e) => handleInputChange('mobilenumber', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="location">Location</Label>
//                 <Input
//                   id="location"
//                   value={formData.location}
//                   onChange={(e) => handleInputChange('location', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="joinDate">Join Date</Label>
//                 <Input
//                   id="joinDate"
//                   value={formData.joinDate}
//                   onChange={(e) => handleInputChange('joinDate', e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Academic Information */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="degree">Degree</Label>
//                 <Input
//                   id="degree"
//                   value={formData.degree}
//                   onChange={(e) => handleInputChange('degree', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="major">Major</Label>
//                 <Input
//                   id="major"
//                   value={formData.major}
//                   onChange={(e) => handleInputChange('major', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="gpa">GPA</Label>
//                 <Input
//                   id="gpa"
//                   value={formData.gpa}
//                   onChange={(e) => handleInputChange('gpa', e.target.value)}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="graduationDate">Graduation Date</Label>
//                 <Input
//                   id="graduationDate"
//                   value={formData.yearofpassing}
//                   onChange={(e) => handleInputChange('yearofpassing', e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Skills</h3>
//             <div className="flex gap-2 mb-4">
//               <Input
//                 value={newSkill}
//                 onChange={(e) => setNewSkill(e.target.value)}
//                 placeholder="Add a skill"
//               />
//               <Button type="button" onClick={handleSkillAdd}>
//                 Add
//               </Button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.skills.map((skill) => (
//                 <Badge key={skill.id} variant="secondary" className="flex items-center gap-1">
//                   {skill.name}
//                   <button
//                     type="button"
//                     onClick={() => handleSkillRemove(skill.id)}
//                     className="ml-1 text-xs"
//                   >
//                     ×
//                   </button>
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Achievements & Certifications</h3>
//             <div className="space-y-4">
//               {formData.achievements.map((achievement, index) => (
//                 <div key={achievement.id} className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                   <Input
//                     value={achievement.title}
//                     onChange={(e) => {
//                       const newAchievements = [...formData.achievements];
//                       newAchievements[index].title = e.target.value;
//                       setFormData(prev => ({ ...prev, achievements: newAchievements }));
//                     }}
//                     placeholder="Title"
//                   />
//                   <Input
//                     value={achievement.issuer}
//                     onChange={(e) => {
//                       const newAchievements = [...formData.achievements];
//                       newAchievements[index].issuer = e.target.value;
//                       setFormData(prev => ({ ...prev, achievements: newAchievements }));
//                     }}
//                     placeholder="Issuer"
//                   />
//                   <Input
//                     value={achievement.date}
//                     onChange={(e) => {
//                       const newAchievements = [...formData.achievements];
//                       newAchievements[index].date = e.target.value;
//                       setFormData(prev => ({ ...prev, achievements: newAchievements }));
//                     }}
//                     placeholder="Date"
//                   />
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     onClick={() => {
//                       const newAchievements = formData.achievements.filter(a => a.id !== achievement.id);
//                       setFormData(prev => ({ ...prev, achievements: newAchievements }));
//                     }}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => {
//                   setFormData(prev => ({
//                     ...prev,
//                     achievements: [
//                       ...prev.achievements,
//                       {
//                         id: Date.now(),
//                         title: "",
//                         issuer: "",
//                         date: "",
//                         description: ""
//                       }
//                     ]
//                   }));
//                 }}
//               >
//                 Add Achievement
//               </Button>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-2">
//             <Button type="button" variant="outline" onClick={onCancel}>
//               Cancel
//             </Button>
//             <Button type="submit">Save Changes</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

export default function Profile() {
 const[profile,setProfile]=useState<Profile | null>(null);
 const[isEditModalOpen,setIsEditModalOpen] = useState(true);
 const[loading,setLoading]=useState(true);
 const[error,setError]=useState("");
 

useEffect(()=>{
  const token=localStorage.getItem("token");
  if(!token){
    setError("user not logged in");
    setLoading(false);
    return ;

  }

  fetch("http://localhost:8080/api/v1/student",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })  
   .then((res)=>{
      if(!res.ok){
        throw new Error("Failed to fetch profile data");
      }
      return res.json();
   })
   .then((data:Profile)=>{
     setProfile(data);
   })
   .catch((err)=>{
    setError(err.message);
   })
   .finally(()=>{
    setLoading(false);
   });
  },[]);

  const handleSaveProfile = (newData: Profile) => {
    setProfile(newData);
    setIsEditModalOpen(false);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      applied: { label: "Application Sent", className: "bg-gray-100 text-gray-800 border-gray-200" },
      "under-review": { label: "Under Review", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
      interview: { label: "Interview Scheduled", className: "bg-blue-100 text-blue-800 border-blue-200" },
      offer: { label: "Offer Received", className: "bg-green-100 text-green-800 border-green-200" },
      rejected: { label: "Not Selected", className: "bg-red-100 text-red-800 border-red-200" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.applied;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "applied":
        return <Briefcase className="h-4 w-4 text-asthra-green" />;
      case "completed":
        return <BookOpen className="h-4 w-4 text-asthra-blue" />;
      case "attended":
        return <Award className="h-4 w-4 text-asthra-green" />;
      default:
        return <Briefcase className="h-4 w-4 text-asthra-green" />;
    }
  };
    if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    // <div className="min-h-screen bg-background">
    //   {/* Header Section */}
    <div>
      <StudentNavbar/>
      {/* <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>User Profile</h2>
      <p><strong>Full Name:</strong> {profile?.fullname}</p>
      <p><strong>Branch:</strong> {profile?.branch}</p>
      <p><strong>Year of Passing:</strong> {profile?.yearofpassing}</p>
      <p><strong>College ID:</strong> {profile?.collegeID}</p>
      <p><strong>Email:</strong> {profile?.email}</p>
      <p><strong>Interests:</strong> {profile?.interests}</p>
      <p><strong>Mobile Number:</strong> {profile?.mobilenumber}</p>
    </div>
    </div> */}
         


      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-asthra">
              <User className="h-16 w-16 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">{profile?.fullname}</h1>
              <p className="text-xl text-muted-foreground mb-4 text-white">{profile?.branch}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/10">Active</Badge>
                <Badge className="bg-asthra-blue/10 text-asthra-blue border-asthra-blue/20">3rd Year</Badge>
                <Badge className="bg-accent/10 text-accent-foreground border-accent/20">Honors Student</Badge>
              </div>
            </div>
            <div className="ml-auto">
              <Button 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => setIsEditModalOpen(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-asthra-blue" />
                  <span className="text-sm text-muted-foreground">{profile?.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-asthra-green" />
                  <span className="text-sm text-muted-foreground">{profile?.mobilenumber}</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-asthra-blue" />
                  <span className="text-sm text-muted-foreground">{profile?.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-asthra-green" />
                  <span className="text-sm text-muted-foreground">Joined {profile?.joinDate}</span>
                </div> */}
              </CardContent>
            </Card>

            {/* Academic Info */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-asthra-blue" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{profile?.major}</p>
                    <p className="text-xs text-muted-foreground">{profile?.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">GPA:</span>
                  <span className="text-sm text-asthra-green font-medium">{profile?.gpa}</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">Expected Graduation:</span>
                  <span className="text-sm text-muted-foreground">{profile?.yearofpassing}</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="flex flex-wrap gap-2">
                  {profile?.skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="text-xs">
                      {skill.name}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity & Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <div className="space-y-3">
                  {profile?.activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/30">
                      <div className="pt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.description} • {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div> */}
              </CardContent>
            </Card>

            {/* Applications Status */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Application Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="space-y-4">
                  {profile?.applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/30">
                      <div>
                        <p className="text-sm font-medium text-foreground">{application.company} - {application.position}</p>
                        <p className="text-xs text-muted-foreground">Applied {application.appliedDate}</p>
                      </div>
                      {getStatusBadge(application.status)}
                    </div>
                  ))}
                </div> */}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Achievements & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile?.achievements.map((achievement) => (
                    <div key={achievement.id} className="p-4 bg-background rounded-lg border border-border/30">
                      <h4 className="font-medium text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {achievement.issuer} • {achievement.date}
                        {achievement.description && ` • ${achievement.description}`}
                      </p>
                    </div>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {/* <ProfileEditForm
        profile={profile}
        onSave={handleSaveProfile}
        onCancel={() => setIsEditModalOpen(false)}
        isOpen={isEditModalOpen}
      /> */}

      
    </div>
  );
}