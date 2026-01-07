import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield,Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleBackGround from "../components/BackGround";
import api from '../api/api';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const[loading, setLoading]=useState(false);
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

    try{
      setLoading(true);
      // Admin login logic here
       const response = await api.post("api/v1/auth/signin",{
        username:formData.username,
        password:formData.password,
       });
       if(response.status ===200 || response.status ===201){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
          
    if(localStorage.getItem('token')!=null){
      toast({
      title: "Login Successful",
      description: "Welcome back, Admin!",
    });
      navigate("/admin/home");
    }
           
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

    
   <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      
{/* < ParticleBackGround/> */}

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
         
          
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Access administrative controls</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usename *</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your admin username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
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

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ?( <div>
        <span className="animate-ping h-4 w-4 rounded-full border-2 border-white "></span>"logging in .."</div>):("login")}
      
            </Button>
          </form>
          {/* <Button asChild type="button" className="w-full">
  <Link to="/student">Sign In</Link>
</Button> */}
{/* </form> */}

          {/* <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                onClick={() => navigate("/signup/admin")} 
                className="p-0 text-primary"
              >
                Sign up here
              </Button>
            </p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;