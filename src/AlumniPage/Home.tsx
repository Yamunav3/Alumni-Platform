import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Users,
  MessageSquare,
  BookOpen,
  MessageCircle,
  Sparkles,
  PartyPopper,
  UserCheck,
  FolderOpen,
  Heart
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { AlumniNavbar } from "@/components/AlumniNavbar";


const celebrationsData = [
  { title: "Alumni Annual Gala", date: "Dec 15, 2024", type: "Event", attendees: 250 },
  { title: "Tech Reunion 2024", date: "Jan 20, 2025", type: "Reunion", attendees: 150 },
  { title: "Career Achievement Awards", date: "Feb 10, 2025", type: "Awards", attendees: 300 }
];

const mentorshipStats = [
  { label: "Active Mentors", value: "450+", icon: Users },
  { label: "Success Stories", value: "89%", icon: Heart },
  { label: "Industries Covered", value: "25+", icon: FolderOpen }
];

const forumTopics = [
  { title: "Career Transitions", posts: 124, replies: 89, lastActivity: "2 hours ago" },
  { title: "Entrepreneurship Journey", posts: 98, replies: 156, lastActivity: "4 hours ago" },
  { title: "Technical Discussions", posts: 203, replies: 234, lastActivity: "1 hour ago" }
];

const directoryStats = [
  { company: "Google", count: 45 },
  { company: "Microsoft", count: 38 },
  { company: "Meta", count: 32 },
  { company: "Amazon", count: 41 }
];

const recentFeedback = [
  { category: "Platform Features", rating: 4.8, suggestions: 23 },
  { category: "Events & Programs", rating: 4.6, suggestions: 18 },
  { category: "Networking Tools", rating: 4.7, suggestions: 15 }
];

export default function AlumniHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AlumniNavbar/>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-indigo-200">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl md:text-6xl font-semi-bold gradient-text">
              Welcome to Asthra
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your centralized alumni platform connecting past, present, and future. 
            Build meaningful relationships, advance your career, and give back to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/career">
      <Button 
        size="lg" 
        className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
      >
        Explore Career Portal
      </Button>
    </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/directory")}
            >
              Find Alumni
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover What's Possible</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the various ways you can connect, learn, and contribute to our thriving alumni community.
            </p>
          </div>
          
          <Tabs defaultValue="celebrations" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="celebrations">Celebrations</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              <TabsTrigger value="forums">Forums</TabsTrigger>
              <TabsTrigger value="directory">Directory</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="celebrations" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PartyPopper className="h-5 w-5 mr-2" />
                    Upcoming Celebrations
                  </CardTitle>
                  <CardDescription>
                    Stay connected with events, milestones, and special occasions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {celebrationsData.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{event.type}</Badge>
                          <p className="text-sm text-muted-foreground mt-1">{event.attendees} attending</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-2" />
                    Mentorship Program
                  </CardTitle>
                  <CardDescription>
                    Connect with experienced alumni or become a mentor yourself
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mentorshipStats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="text-center p-4 border rounded-lg">
                          <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forums" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Discussion Forums
                  </CardTitle>
                  <CardDescription>
                    Engage in meaningful discussions and collaborate with fellow alumni
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {forumTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div>
                          <h4 className="font-medium">{topic.title}</h4>
                          <p className="text-sm text-muted-foreground">{topic.posts} posts • {topic.replies} replies</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {topic.lastActivity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="directory" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Alumni Directory
                  </CardTitle>
                  <CardDescription>
                    Find and connect with alumni across different industries and locations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {directoryStats.map((company, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="font-medium">{company.company}</span>
                        <Badge variant="outline">{company.count} alumni</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Community Feedback
                  </CardTitle>
                  <CardDescription>
                    Share your thoughts and help us improve the alumni experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentFeedback.map((feedback, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{feedback.category}</h4>
                          <p className="text-sm text-muted-foreground">{feedback.suggestions} suggestions received</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">{feedback.rating}/5</div>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Alumni</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}