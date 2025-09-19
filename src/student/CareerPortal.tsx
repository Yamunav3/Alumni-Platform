import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import StudentNavbar from "../components/StudentNavbar";


import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Building,
  Calendar,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  Star,
  Bookmark,
  Share,
  Eye,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const StudentCareerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $180K",
      postedBy: "John Smith (2015)",
      postedDate: "2 days ago",
      applications: 23,
      isUrgent: true,
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      description: "Join our engineering team to build next-generation products..."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140K - $200K",
      postedBy: "Sarah Chen (2012)",
      postedDate: "1 week ago",
      applications: 45,
      isUrgent: false,
      skills: ["Product Strategy", "Analytics", "Agile", "Leadership"],
      description: "Lead product development for our flagship platform..."
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "Growth Co",
      location: "Remote",
      type: "Internship",
      salary: "$20/hour",
      postedBy: "Mike Johnson (2018)",
      postedDate: "3 days ago",
      applications: 12,
      isUrgent: false,
      skills: ["Digital Marketing", "Content Creation", "Analytics"],
      description: "Gain hands-on experience in digital marketing..."
    }
  ];

  const applications = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Startup",
      appliedDate: "Dec 1, 2024",
      status: "Interview Scheduled",
      nextStep: "Technical Round - Dec 15",
      progress: 60
    },
    {
      id: 2,
      jobTitle: "Product Designer",
      company: "Design Agency",
      appliedDate: "Nov 28, 2024",
      status: "Under Review",
      nextStep: "Waiting for response",
      progress: 30
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "Analytics Corp",
      appliedDate: "Nov 25, 2024",
      status: "Offer Received",
      nextStep: "Negotiating terms",
      progress: 90
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      graduationYear: 2018,
      currentRole: "Senior Software Engineer at Google",
      company: "Google",
      previousRole: "Junior Developer",
      achievement: "Led development of Google Pay's fraud detection system, reducing false positives by 40%",
      brief: "From struggling with basic programming concepts to leading critical security initiatives at one of the world's largest tech companies.",
      image: "/placeholder.svg",
      tags: ["Software Engineering", "Security", "Leadership"],
      linkedin: "#"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      graduationYear: 2016,
      currentRole: "VP of Product at Stripe",
      company: "Stripe",
      previousRole: "Business Analyst",
      achievement: "Launched Stripe's expansion into 15 new markets, generating $500M+ in revenue",
      brief: "Transformed from a business analyst to a product leader, driving global expansion strategies for fintech innovation.",
      image: "/placeholder.svg",
      tags: ["Product Management", "Strategy", "Fintech"],
      linkedin: "#"
    },
    {
      id: 3,
      name: "Emily Johnson",
      graduationYear: 2019,
      currentRole: "Founder & CEO of EcoTech Solutions",
      company: "EcoTech Solutions",
      previousRole: "Environmental Consultant",
      achievement: "Built a $50M sustainable technology company, serving 200+ enterprise clients",
      brief: "Started as an environmental consultant and now leads a revolutionary clean-tech startup fighting climate change.",
      image: "/placeholder.svg",
      tags: ["Entrepreneurship", "Sustainability", "Leadership"],
      linkedin: "#"
    },
    {
      id: 4,
      name: "David Kim",
      graduationYear: 2017,
      currentRole: "Head of AI Research at OpenAI",
      company: "OpenAI",
      previousRole: "Research Assistant",
      achievement: "Co-authored 15 breakthrough papers in machine learning, cited over 10,000 times",
      brief: "From research assistant to AI pioneer, contributing to cutting-edge developments in artificial intelligence and natural language processing.",
      image: "/placeholder.svg",
      tags: ["AI Research", "Machine Learning", "Innovation"],
      linkedin: "#"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Breaking into Tech: A Complete Guide",
      speaker: "Jennifer Liu (2016) - Google PM",
      date: "Dec 20, 2024",
      time: "7:00 PM EST",
      attendees: 245,
      type: "Career Development",
      isLive: false
    },
    {
      id: 2,
      title: "Salary Negotiation Strategies",
      speaker: "Robert Chen (2014) - HR Director",
      date: "Dec 18, 2024",
      time: "6:30 PM EST",
      attendees: 189,
      type: "Professional Skills",
      isLive: true
    },
    {
      id: 3,
      title: "Building Your Personal Brand",
      speaker: "Lisa Wang (2013) - Marketing VP",
      date: "Dec 22, 2024",
      time: "8:00 PM EST",
      attendees: 156,
      type: "Personal Development",
      isLive: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      case "Offer Received":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <StudentNavbar/>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Job Board</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
          </TabsList>

          {/* Job Board */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Briefcase className="h-4 w-4 mr-2" />
                Post Job
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobListings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          {job.isUrgent && (
                            <Badge variant="destructive" className="text-xs">Urgent</Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Skills Required:</p>
                        <div className="flex flex-wrap gap-1">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.description}
                      </p>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <p>Posted by {job.postedBy}</p>
                          <p>{job.postedDate} • {job.applications} applications</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tracking */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Application Tracker</h2>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{app.jobTitle}</h3>
                        <p className="text-muted-foreground">{app.company}</p>
                        <p className="text-sm text-muted-foreground">Applied on {app.appliedDate}</p>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Application Progress</span>
                          <span className="text-sm text-muted-foreground">{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Next Step:</p>
                          <p className="text-sm text-muted-foreground">{app.nextStep}</p>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Success Stories */}
          <TabsContent value="success-stories" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Alumni Success Stories</h2>
              <Button>
                <Award className="h-4 w-4 mr-2" />
                Share Your Story
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={story.image} alt={story.name} />
                        <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <CardDescription className="text-sm">
                          Class of {story.graduationYear}
                        </CardDescription>
                        <div className="flex items-center mt-1">
                          <Building className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm font-medium">{story.currentRole}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{story.company}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm font-medium">Career Journey</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">From:</span> {story.previousRole}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">To:</span> {story.currentRole}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Target className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm font-medium">Key Achievement</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{story.achievement}</p>
                      </div>

                      <div>
                        <p className="text-sm italic">{story.brief}</p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {story.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          LinkedIn
                        </Button>
                        <Button size="sm">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Webinars & Workshops */}
          <TabsContent value="webinars" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Upcoming Webinars</h2>
              <Button>
                <Video className="h-4 w-4 mr-2" />
                Host Webinar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{webinar.title}</CardTitle>
                        <CardDescription className="mt-2">
                          by {webinar.speaker}
                        </CardDescription>
                      </div>
                      {webinar.isLive && (
                        <Badge variant="destructive" className="text-xs">Live</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {webinar.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {webinar.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{webinar.type}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {webinar.attendees} registered
                          </span>
                        </div>
                      </div>

                      <Button className="w-full">
                        {webinar.isLive ? "Join Now" : "Register"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentCareerPortal;