import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AlumniSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    collegeId: "",
    collegeEmail: "",
    name: "",
    graduationYear: "",
    branch: "",
    currentCompany: "",
    jobTitle: "",
    interests: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!formData.collegeId || !formData.collegeEmail || !formData.name || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Account Created",
      description: "Your alumni account has been created successfully!",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Alumni Registration</CardTitle>
          <CardDescription>Reconnect with your alma mater</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="collegeId">College ID *</Label>
                <Input
                  id="collegeId"
                  type="text"
                  placeholder="Your college ID during studies"
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
                  placeholder="alumni@college.edu"
                  value={formData.collegeEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, collegeEmail: e.target.value }))}
                  required
                />
              </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, graduationYear: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    {Array.from({ length: 30 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Branch</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="cse">Computer Science</SelectItem>
                    <SelectItem value="it">Information Technology</SelectItem>
                    <SelectItem value="ece">Electronics & Communication</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="ce">Civil Engineering</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>                 
                    {/* <SelectItem value="other">Other</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentCompany">Current Company</Label>
                <Input
                  id="currentCompany"
                  type="text"
                  placeholder="Where do you work now?"
                  value={formData.currentCompany}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentCompany: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  type="text"
                  placeholder="Your current position"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Interests & Expertise</Label>
              <Textarea
                id="interests"
                placeholder="Share your professional interests, hobbies, or areas where you can mentor students..."
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

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/login/alumni")} 
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

export default AlumniSignup;