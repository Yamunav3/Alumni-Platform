import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
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
  { title: "Career Transitions", posts: 124, replies: 89, lastActivity: "" },
  { title: "Entrepreneurship Journey", posts: 98, replies: 156, lastActivity: "" },
  { title: "Technical Discussions", posts: 203, replies: 234, lastActivity: "" }
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
  return (
    <div className="alumni-shell">
      <AlumniNavbar/>
      {/* Hero Section */}
      <section className="alumni-hero px-4 py-20 md:py-28">
        <div className="container mx-auto text-center relative z-10">
          <div className="alumni-hero-chip mx-auto mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-yellow-200" />
            Your alumni community hub
          </div>
          <h1 className="alumni-hero-title mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-yellow-100">Asthra</span>
          </h1>
          <p className="alumni-hero-sub mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Your centralized alumni platform connecting past, present, and future. 
            Build meaningful relationships, advance your career, and give back to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* <Link to="/alumni/career">
      <Button 
        size="lg" 
        className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
      >
        Explore Career Portal
      </Button>
    </Link> */}
            {/* <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/directory")}
            >
              Find Alumni
            </Button> */}
          </div>
        </div>
      </section>

{/* Features Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="alumni-pill mx-auto mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Community hub
            </div>
            <h2 className="alumni-section-title mb-4">
              Discover What's <span className="alumni-gradient-text">Possible</span>
            </h2>
            <p className="alumni-section-subtitle max-w-2xl mx-auto">
              Explore the various ways you can connect, learn, and contribute to your thriving alumni community.
            </p>
          </div>
          
          <Tabs defaultValue="celebrations" className="w-full">
            <TabsList className="alumni-tab-list grid w-full grid-cols-5">
              <TabsTrigger value="celebrations">Celebrations</TabsTrigger>
              <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              <TabsTrigger value="forums">Forums</TabsTrigger>
              <TabsTrigger value="directory">Directory</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="celebrations" className="space-y-6 mt-6">
              <Card className="alumni-card overflow-hidden">
                <CardHeader className="border-b border-slate-100/80 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center text-lg">
                    <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                      <PartyPopper className="h-5 w-5" />
                    </span>
                    Upcoming Celebrations
                  </CardTitle>
                  <CardDescription>
                    Stay connected with events, milestones, and special occasions
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    {celebrationsData.map((event, index) => (
                      <div key={index} className="alumni-list-row">
                        <div>
                          <h4 className="font-medium text-slate-800">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/15">{event.type}</Badge>
                          <p className="text-sm text-muted-foreground mt-1">{event.attendees} attending</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mentorship" className="space-y-6 mt-6">
              <Card className="alumni-card overflow-hidden">
                <CardHeader className="border-b border-slate-100/80 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center text-lg">
                    <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                      <UserCheck className="h-5 w-5" />
                    </span>
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
                        <div key={index} className="alumni-stat-card text-center">
                          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                            <IconComponent className="h-7 w-7" />
                          </div>
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
              <Card className="alumni-card overflow-hidden">
                <CardHeader className="border-b border-slate-100/80 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center text-lg">
                    <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                      <MessageSquare className="h-5 w-5" />
                    </span>
                    Discussion Forums
                  </CardTitle>
                  <CardDescription>
                    Engage in meaningful discussions and collaborate with fellow alumni
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    {forumTopics.map((topic, index) => (
                      <div key={index} className="alumni-list-row">
                        <div>
                          <h4 className="font-medium text-slate-800">{topic.title}</h4>
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
              <Card className="alumni-card overflow-hidden">
                <CardHeader className="border-b border-slate-100/80 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center text-lg">
                    <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    Alumni Directory
                  </CardTitle>
                  <CardDescription>
                    Find and connect with alumni across different industries and locations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {directoryStats.map((company, index) => (
                      <div key={index} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/60 p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md">
                        <span className="font-medium text-slate-800">{company.company}</span>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{company.count} alumni</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6 mt-6">
              <Card className="alumni-card overflow-hidden">
                <CardHeader className="border-b border-slate-100/80 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="flex items-center text-lg">
                    <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    Community Feedback
                  </CardTitle>
                  <CardDescription>
                    Share your thoughts and help us improve the alumni experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    {recentFeedback.map((feedback, index) => (
                      <div key={index} className="alumni-list-row">
                        <div>
                          <h4 className="font-medium text-slate-800">{feedback.category}</h4>
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
      <section className="py-16 md:py-20 px-4 bg-white/60 backdrop-blur-sm border-t border-white/70">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 text-center shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-muted-foreground font-medium">Active Alumni</div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 text-center shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Companies</div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 text-center shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
