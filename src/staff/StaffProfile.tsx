import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "../components/StaffNavbar"

import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase,
  Edit
} from "lucide-react";

export default function StaffProfile() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Navigation/>
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-asthra">
              <User className="h-16 w-16 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">John Doe</h1>
              <p className="text-xl  mb-4">CSE Student</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">Active</Badge>
                <Badge className="bg-asthra-blue/10 text-asthra-blue border-asthra-blue/20">3rd Year</Badge>
                <Badge className="bg-accent/10 text-accent-foreground border-accent/20">Honors Student</Badge>
              </div>
            </div>
            <div className="ml-auto">
              <Button className="bg-gradient-primary hover:opacity-90">
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
                  <span className="text-sm text-muted-foreground">john.doe@srkrec.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-asthra-green" />
                  <span className="text-sm text-muted-foreground">+91 7397014589</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-asthra-blue" />
                  <span className="text-sm text-muted-foreground">Bhimavaram , West Godavari</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-asthra-green" />
                  <span className="text-sm text-muted-foreground">Joined Oct 2022</span>
                </div>
              </CardContent>
            </Card>

            {/* Academic Info */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-asthra-blue" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Computer Science</p>
                    <p className="text-xs text-muted-foreground">Bachelor's Degree</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">GPA:</span>
                  <span className="text-sm text-asthra-green font-medium">9.2/10</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">Expected Graduation:</span>
                  <span className="text-sm text-muted-foreground">May 2027</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Python", "Java", "Node.js", "SQL", "Git", "AWS" ,"Spring Boot"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
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
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-asthra-green rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Applied for Software Engineer Internship</p>
                      <p className="text-xs text-muted-foreground">at Google • 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-asthra-blue rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Completed "React Advanced Patterns" Course</p>
                      <p className="text-xs text-muted-foreground">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-asthra-green rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Attended "AI in Healthcare" Webinar</p>
                      <p className="text-xs text-muted-foreground">1 week ago</p>
                    </div>
                  </div>
                </div>
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/30">
                    <div>
                      <p className="text-sm font-medium text-foreground">Google - Software Engineer Intern</p>
                      <p className="text-xs text-muted-foreground">Applied 2 days ago</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Under Review</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/30">
                    <div>
                      <p className="text-sm font-medium text-foreground">Microsoft - Frontend Developer</p>
                      <p className="text-xs text-muted-foreground">Applied 1 week ago</p>
                    </div>
                    <Badge className="bg-asthra-green/10 text-asthra-green border-asthra-green/20">Interview Scheduled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border/30">
                    <div>
                      <p className="text-sm font-medium text-foreground">Amazon - Data Analyst Intern</p>
                      <p className="text-xs text-muted-foreground">Applied 2 weeks ago</p>
                    </div>
                    <Badge variant="secondary">Application Sent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Achievements & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-border/30">
                    <h4 className="font-medium text-foreground mb-2">Dean's List</h4>
                    <p className="text-xs text-muted-foreground">Fall 2023 • Academic Excellence</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border/30">
                    <h4 className="font-medium text-foreground mb-2">AWS Cloud Practitioner</h4>
                    <p className="text-xs text-muted-foreground">Nov 2023 • Cloud Computing</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border/30">
                    <h4 className="font-medium text-foreground mb-2">Hackathon Winner</h4>
                    <p className="text-xs text-muted-foreground">Oct 2023 • University Tech Challenge</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border/30">
                    <h4 className="font-medium text-foreground mb-2">JavaScript Certification</h4>
                    <p className="text-xs text-muted-foreground">Sep 2023 • FreeCodeCamp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}