import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import api from "@/api/api"
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "../components/BackGround";
import { set } from "date-fns";

const StudentSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading,setLoading]=useState(false); //loading animation state
  const [formData, setFormData] = useState({
    collegeId: "",
    collegeEmail: "",
    fullname: "",
    branch: "",
    section: "",
    yearOfGraduation: "",
    interests: "",
    password: "",
    confirmPassword: "",
    username: "",
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
    const response = await api.post(
      "api/v1/auth/studentsignup",
      {
        collegeID: formData.collegeId,
        email: formData.collegeEmail,
        fullname: formData.fullname,
        username: formData.username,
        branch: formData.branch,
        section: formData.section,
        yearofpassing: formData.yearOfGraduation,
        interests: formData.interests,
        password: formData.password,
        mobilenumber: formData.mobilenumber,
        // role: "STUDENT"
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201 || response.status ===200) {
      toast({
        title: "Account Created",
        description: "Please login to continue",
      });

      // redirect to login page
      navigate("/login/student");
    }

  } catch (error) {
    console.error("Signup error:", error);

    toast({
      title: "Error",
      description:
        error.response?.data?.message ||
        "There was an error creating your account.",
      variant: "destructive",
    });
  }finally{
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      
      {/* <ParticleBackground/> */}
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
         
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Student Registration</CardTitle>
          <CardDescription>Create your student account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="collegeId">College ID *</Label>
                <Input
                  id="collegeId"
                  type="text"
                  placeholder="Enter your college ID"
                  value={formData.collegeId}
                  onChange={(e) => setFormData(prev => ({ ...prev, collegeId: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="collegeEmail">College Email *</Label>
                <Input
                  id="collegeEmail"
                  type="email"
                  placeholder="student@college.edu"
                  value={formData.collegeEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, collegeEmail: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => setFormData(prev => ({ ...prev, fullname: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Username *</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>
             
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="CSE">Computer Science & Allied</SelectItem>
                    <SelectItem value="IT">Information Technology & Allied</SelectItem>
                    <SelectItem value="ECE">Electronics & Communication Engineering</SelectItem>
                    <SelectItem value="ME">Mechanical Engineering</SelectItem>
                    <SelectItem value="CE">Civil Engineering</SelectItem>
                    <SelectItem value="EEE">Electrical & Electronics Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, section: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                    <SelectItem value="c">Section C</SelectItem>
                    <SelectItem value="d">Section D</SelectItem>
                    <SelectItem value="e">Section E</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearOfGraduation">Year of Graduation</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, yearOfGraduation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Interests</Label>
              <Textarea
                id="interests"
                placeholder="Tell us about your interests and hobbies..."
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                className="min-h-[80px]"
              />
            </div>
              
            <div className="space-y-2">
              <Label htmlFor="mobilenumber">Mobile Number *</Label>
              <Input id="mobilenumber"
              placeholder="enter your 10-digit mobile number"
              onChange={(e)=>setFormData(prev =>({...prev,mobilenumber:e.target.value}))}
              required />
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
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent">
                  </span>
                   Creating....
                </div>
              ):("Create Account")}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/login/student")} 
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

export default StudentSignup;