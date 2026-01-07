import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import api from "@/api/api";

const StaffSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const[loading,setLoading]=useState(false);
  const [formData, setFormData] = useState({
    staffId: "",
    name: "",
    email: "",
    staffRole: "",
    department: "",
    interests: "",
    password: "",
    confirmPassword: "",
    username:"",
    mobilenumber:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      const response = await api.post('api/v1/auth/staffsignup', {
        collegeID: formData.staffId,
        fullname: formData.name,
        username:formData.username,
        email: formData.email,
        jobrole: formData.staffRole,
        branch: formData.department,
        interests: formData.interests,
        password: formData.password,
        mobilenumber: formData.mobilenumber,
        // confirmPassword: formData.confirmPassword,
      });

      if(response.status === 201 || response.status === 200){ {
  
        toast({
          title: "Account Created",
          description: "Your staff account has been created successfully!",
        });
        //navigate to login page
        navigate("/login/staff");
      }
    }
   } catch (error) {
      toast({
        title: "Error",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
      console.error("There was an error!", error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      {/* <ParticleBackground/> */}
      
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Staff Registration</CardTitle>
          <CardDescription>Create your staff account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="staffId">Staff ID *</Label>
                <Input
                  id="staffId"
                  type="text"
                  placeholder="Enter your staff ID"
                  value={formData.staffId}
                  onChange={(e) => setFormData(prev => ({ ...prev, staffId: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input id="username" type="text" placeholder="Enter your username"
               value={formData.username} onChange={(e)=>setFormData(prev =>({...prev ,username:e.target.value}))}  required>
              </Input>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="staff@college.edu"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="staffRole">Staff Role in College *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, staffRole: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="professor">Professor</SelectItem>
                    <SelectItem value="assistant-professor">Assistant Professor</SelectItem>
                    <SelectItem value="associate-professor">Associate Professor</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    <SelectItem value="lab-assistant">Lab Assistant</SelectItem>
                    <SelectItem value="librarian">Librarian</SelectItem>
                    <SelectItem value="counselor">Counselor</SelectItem>
                    <SelectItem value="administrative">Administrative Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobilenumber">Mobile Number</Label>
                  <Input id="mobilenumber" type="tel" maxLength={10} pattern="[6-9][0-9]{9}" placeholder="Enter Your Mobile Number" 
                                            required/>
                
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="CSE">Computer Science</SelectItem>
                    <SelectItem value="IT">Information Technology</SelectItem>
                    <SelectItem value="ECE">Electronics & Communication</SelectItem>
                    <SelectItem value="ME">Mechanical Engineering</SelectItem>
                    <SelectItem value="CE">Civil Engineering</SelectItem>
                    <SelectItem value="EEE">Electrical Engineering</SelectItem>
                    <SelectItem value="ADMIN">Administration</SelectItem>
                    <SelectItem value="LIBRARY">Library</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Interests & Specializations</Label>
              <Textarea
                id="interests"
                placeholder="Share your academic interests, research areas, or specializations..."
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                className="min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading?(
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />     
                   Creating Staff Account....
                </div>
              ):("Create Account")}     
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/login/staff")} 
                className="p-0 text-primary"
              >
                Sign in here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffSignup;