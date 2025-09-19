import { useState } from "react";
import { Briefcase, FileText, Trophy, Video, Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StaffNavbar from "../components/StaffNavbar";

const StaffCareerPortalStaff = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const jobListings = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $180K",
      urgent: true,
      description: "Join our innovative team building next-generation software solutions.",
      skills: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Data Scientist",
      company: "AI Innovations",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100K - $150K",
      urgent: false,
      description: "Work with cutting-edge machine learning and data analytics.",
      skills: ["Python", "TensorFlow", "SQL", "Machine Learning"]
    },
    {
      title: "Product Manager",
      company: "Growth Co",
      location: "Remote",
      type: "Full-time",
      salary: "$90K - $130K",
      urgent: false,
      description: "Lead product strategy and development for our flagship products.",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"]
    }
  ];

  const applications = [
    {
      job: "Senior Frontend Developer",
      company: "TechStart Inc",
      status: "Interview Scheduled",
      appliedDate: "2024-01-15",
      nextStep: "Technical Interview - Jan 20"
    },
    {
      job: "Full Stack Engineer",
      company: "Innovation Labs",
      status: "Under Review",
      appliedDate: "2024-01-10",
      nextStep: "Waiting for response"
    },
    {
      job: "UI/UX Designer",
      company: "Design Studio",
      status: "Rejected",
      appliedDate: "2024-01-05",
      nextStep: "Application closed"
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      year: "Class of 2022",
      story: "Through the career portal, I found my dream job at Google. The networking events and interview prep sessions were invaluable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Meta",
      year: "Class of 2021",
      story: "The alumni connections I made through this platform opened doors I never knew existed. Now I'm paying it forward.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Netflix",
      year: "Class of 2023",
      story: "The webinars and skill-building resources helped me transition from finance to tech successfully.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const webinars = [
    {
      title: "Breaking into Tech: A Complete Guide",
      presenter: "Alex Thompson, Senior Engineer at Apple",
      date: "Jan 25, 2024",
      time: "7:00 PM EST",
      attendees: 234,
      upcoming: true
    },
    {
      title: "Mastering Technical Interviews",
      presenter: "Dr. Lisa Wang, Engineering Manager at Microsoft",
      date: "Feb 1, 2024",
      time: "6:30 PM EST",
      attendees: 189,
      upcoming: true
    },
    {
      title: "Building Your Personal Brand",
      presenter: "Mark Davis, Head of Talent at LinkedIn",
      date: "Jan 15, 2024",
      time: "8:00 PM EST",
      attendees: 312,
      upcoming: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled": return "bg-primary text-primary-foreground";
      case "Under Review": return "bg-accent text-accent-foreground";
      case "Rejected": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <StaffNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Career Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover opportunities, track applications, and advance your career with alumni connections
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm p-2 rounded-2xl">
              <TabsTrigger value="jobs" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300">
                <Briefcase className="w-4 h-4" />
                Job Portal
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300">
                <FileText className="w-4 h-4" />
                My Applications
              </TabsTrigger>
              <TabsTrigger value="webinars" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300">
                <Video className="w-4 h-4" />
                Webinars
              </TabsTrigger>
              <TabsTrigger value="stories" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300">
                <Trophy className="w-4 h-4" />
                Success Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="animate-fade-in">
              <div className="space-y-8">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 p-6 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search jobs by title, company, or skills..." 
                      className="pl-10 h-12 bg-background/50"
                    />
                  </div>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  <Button size="lg" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Post Job
                  </Button>
                </div>

                {/* Job Listings */}
                <div className="space-y-6">
                  {jobListings.map((job, index) => (
                    <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                              {job.urgent && (
                                <Badge className="bg-destructive text-destructive-foreground">
                                  Urgent
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <span className="font-semibold">{job.company}</span>
                              <span>•</span>
                              <span>{job.location}</span>
                              <span>•</span>
                              <span>{job.type}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{job.salary}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button className="flex-1">Apply Now</Button>
                          <Button variant="outline">Save Job</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="animate-fade-in">
              <div className="space-y-6">
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold mb-4">Track Your Applications</h2>
                  <p className="text-muted-foreground text-lg">Stay organized and never miss an opportunity</p>
                </div>
                
                {applications.map((app, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card/40 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{app.job}</h3>
                          <p className="text-muted-foreground">{app.company}</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Applied:</span>
                          <span className="ml-2 font-medium">{app.appliedDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Next Step:</span>
                          <span className="ml-2 font-medium">{app.nextStep}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webinars" className="animate-fade-in">
              <div className="space-y-6">
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold mb-4">Learn & Network</h2>
                  <p className="text-muted-foreground text-lg">Join expert-led sessions to boost your career</p>
                </div>

                {webinars.map((webinar, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card/40 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                          <p className="text-muted-foreground mb-2">{webinar.presenter}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{webinar.date}</span>
                            <span>•</span>
                            <span>{webinar.time}</span>
                            <span>•</span>
                            <span>{webinar.attendees} registered</span>
                          </div>
                        </div>
                        <Badge variant={webinar.upcoming ? "default" : "secondary"}>
                          {webinar.upcoming ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                      <Button className="w-full" disabled={!webinar.upcoming}>
                        {webinar.upcoming ? "Register Now" : "View Recording"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stories" className="animate-fade-in">
              <div className="space-y-6">
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                  <p className="text-muted-foreground text-lg">Get inspired by alumni achievements and career transformations</p>
                </div>

                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-card/40 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{story.name}</h3>
                          <p className="text-primary font-medium mb-1">{story.role}</p>
                          <p className="text-muted-foreground text-sm mb-4">{story.year}</p>
                          <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default StaffCareerPortalStaff;