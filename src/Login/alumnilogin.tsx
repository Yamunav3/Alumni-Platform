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

const AlumniLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Django session login /account/login/ or /api/session-auth/login/
      await axios.post(
        "http://localhost:8000/account/login/",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setSuccess("Login successful!");
      toast({
        title: "Login Successful",
        description: "Welcome back, Alumni!",
      });
      // Optionally navigate to dashboard here
      // navigate("/alumni/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.detail || "Login failed. Please check your credentials."
      );
      toast({
        title: "Login Failed",
        description: err.response?.data?.detail || "Login failed. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
     
     <ParticleBackGround/>
     
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
              <Label htmlFor="collegeEmail">College Email *</Label>
              <Input
                id="collegeEmail"
                type="email"
                placeholder="Enter your college email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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