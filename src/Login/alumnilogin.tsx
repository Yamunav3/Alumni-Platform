import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackGround from "../components/BackGround";
import api from '../api/api';

const AlumniLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const [formData, setFormData] = useState({
  username: "",
  password: "",
});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // toast({
    //   title: "Login Successful",
    //   description: "Welcome back, Alumni!",
    // });

    //login logic here

    
    setError("");
    setSuccess("");
   try{
       setLoading(true);
        const response= await api.post("api/v1/auth/signin",{
        username:formData.username,
        password:formData.password,
        
       })
       
        if(response.status===200){
          localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        if(localStorage.getItem('token')!=null){
        toast({
      title: "Login Successful",
      description: "Welcome back, Alumni!",
    });
    navigate("/alumni/home");
     }
   }catch(error){
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
   }finally{
    setLoading(false);
   }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
     
     {/* <ParticleBackGround/> */}
     
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Alumni Login</CardTitle>
          <CardDescription>Connect with your alma mater</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) =>setFormData(prev=>({...prev , username:e.target.value}))}
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
                onChange={(e) => setFormData(prev=>({...prev,password:e.target.value}))}
                required
              />
            </div>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            {success && <div className="mb-4 text-green-500">{success}</div>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/signup/alumni")} 
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

export default AlumniLogin;