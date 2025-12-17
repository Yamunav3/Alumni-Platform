import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackGround from "../components/BackGround";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    collegeId: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend validation only
    if (!formData.collegeId || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Login Successful",
      description: "Welcome back, Student!",
    });
    // Here you would typically handle authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      {/* <ParticleBackGround/> */}
      
      
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
         
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Student Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/signup/student")} 
                className="p-0 text-primary"
              >
                Sign up here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentLogin;