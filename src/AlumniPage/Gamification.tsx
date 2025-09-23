
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
   Trophy,
  Star,
  Award,
  Target,
  Zap,
  Heart,
  Users,
  BookOpen,
  MessageCircle,
  DollarSign,
  Crown,
  Medal,
  Gift,
  TrendingUp,
  Calendar,
  CheckCircle,
  Sparkles,
  Clock,
  ChevronUp,
  ChevronDown,
  RefreshCw,
  Share2,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Download,
  BarChart3,
  PieChart,
  Timer,
  Flame,
  Gamepad2,
  Coins,
  ShoppingCart,
  Shield
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import gamify from "@/assets/gamify.png";
const AlumniGamification = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userPoints, setUserPoints] = useState(2850);
  const [showNotifications, setShowNotifications] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
    const [streak, setStreak] = useState(15);
    const [coins, setCoins] = useState(150);
      const [level, setLevel] = useState(12);
  // const leaderboard = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     title: "Senior Software Engineer",
  //     company: "Google",
  //     points: 2850,
  //     rank: 1,
  //     avatar: "/placeholder.svg?height=100&width=100",
  //     badges: ["Mentor Master", "Knowledge Sharer", "Community Builder"],
  //     contributions: {
  //       mentorships: 45,
  //       webinars: 12,
  //       donations: 8
  //     },
  //     mentions: ["Featured in Alumni Spotlight", "Top Donor 2024"],
  //     donationTotal: 2500,
  //     trend: "up",
  //     change: 120
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     title: "Product Manager",
  //     company: "Microsoft",
  //     points: 2720,
  //     rank: 2,
  //     avatar: "/placeholder.svg?height=100&width=100",
  //     badges: ["Webinar Hero", "Donation Champion"],
  //     contributions: {
  //       mentorships: 38,
  //       webinars: 18,
  //       donations: 15
  //     },
  //     mentions: ["Webinar of the Year Award"],
  //     donationTotal: 5000,
  //     trend: "down",
  //     change: 45
  //   },
  //   {
  //     id: 3,
  //     name: "Emily Davis",
  //     title: "Data Scientist",
  //     company: "Netflix",
  //     points: 2650,
  //     rank: 3,
  //     avatar: "/placeholder.svg?height=100&width=100",
  //     badges: ["Rising Star", "Tech Guru"],
  //     contributions: {
  //       mentorships: 42,
  //       webinars: 8,
  //       donations: 12
  //     },
  //     mentions: ["Innovation Leader"],
  //     donationTotal: 3500,
  //     trend: "up",
  //     change: 85
  //   }
  // ];



  const leaderboard = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      points: 2850,
      rank: 1,
      avatar: "/placeholder.svg?height=100&width=100",
      badges: ["Mentor Master", "Knowledge Sharer", "Community Builder"],
      contributions: {
        mentorships: 45,
        webinars: 12,
        donations: 8
      },
      mentions: ["Featured in Alumni Spotlight", "Top Donor 2024"],
      donationTotal: 2500,
      trend: "up",
      change: 120,
      level: 15,
      streak: 25
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Microsoft",
      points: 2720,
      rank: 2,
      avatar: "/placeholder.svg?height=100&width=100",
      badges: ["Webinar Hero", "Donation Champion"],
      contributions: {
        mentorships: 38,
        webinars: 18,
        donations: 15
      },
      mentions: ["Webinar of the Year Award"],
      donationTotal: 5000,
      trend: "down",
      change: 45,
      level: 14,
      streak: 18
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Data Scientist",
      company: "Netflix",
      points: 2650,
      rank: 3,
      avatar: "/placeholder.svg?height=100&width=100",
      badges: ["Rising Star", "Tech Guru"],
      contributions: {
        mentorships: 42,
        webinars: 8,
        donations: 12
      },
      mentions: ["Innovation Leader"],
      donationTotal: 3500,
      trend: "up",
      change: 85,
      level: 13,
      streak: 12
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      title: "UX Designer",
      company: "Adobe",
      points: 2480,
      rank: 4,
      avatar: "/placeholder.svg?height=100&width=100",
      badges: ["Design Master", "Mentor Plus"],
      contributions: {
        mentorships: 35,
        webinars: 6,
        donations: 10
      },
      mentions: ["Design Innovation Award"],
      donationTotal: 2000,
      trend: "up",
      change: 95,
      level: 12,
      streak: 8
    },
  ];
  const achievements = [
    {
      id: 1,
      title: "Mentor Master",
      description: "Completed 50+ mentorship sessions",
      icon: Users,
      color: "bg-primary",
      points: 500,
      unlocked: true,
      progress: 100,
      details: "This achievement recognizes your dedication to guiding the next generation of professionals."
    },
    {
      id: 2,
      title: "Knowledge Sharer",
      description: "Conducted 10+ webinars",
      icon: BookOpen,
      color: "bg-secondary",
      points: 300,
      unlocked: true,
      progress: 100,
      details: "Share your expertise and inspire others through educational sessions."
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Helped 100+ students get jobs",
      icon: Target,
      color: "bg-success",
      points: 1000,
      unlocked: true,
      progress: 100,
      details: "Build a stronger community by connecting students with opportunities."
    },
    {
      id: 4,
      title: "Donation Champion",
      description: "Donated $5000+ to institution",
      icon: Heart,
      color: "bg-warning",
      points: 800,
      unlocked: false,
      progress: 75,
      details: "Support the institution's growth through generous contributions."
    },
    {
      id: 5,
      title: "Webinar Hero",
      description: "Host 25+ webinars",
      icon: MessageCircle,
      color: "bg-destructive",
      points: 600,
      unlocked: false,
      progress: 60,
      details: "Become a hero by hosting engaging and informative webinars."
    },
    {
      id: 6,
      title: "Career Catalyst",
      description: "Help 200+ students find internships",
      icon: Zap,
      color: "bg-primary",
      points: 1200,
      unlocked: false,
      progress: 45,
      details: "Accelerate careers by facilitating internship placements."
    }
  ];

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === leaderboard.length - 1 ? 0 : prev + 1));
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, leaderboard.length]);

  const recentActivities = [
    { id: 1, action: "Mentored Sarah Williams", points: 50, time: "2 hours ago", type: "mentorship" },
    { id: 2, action: "Hosted Webinar: AI in 2024", points: 100, time: "1 day ago", type: "webinar" },
    { id: 3, action: "Referred John to Google", points: 200, time: "3 days ago", type: "referral" },
    { id: 4, action: "Donated $200", points: 50, time: "1 week ago", type: "donation" }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update points to simulate activity
      if (Math.random() > 0.7) {
        const newPoints = userPoints + Math.floor(Math.random() * 50);
        setUserPoints(newPoints);
        
        if (showNotifications) {
          toast.success(`+${newPoints - userPoints} points! Keep going!`, {
            icon: <Sparkles className="h-4 w-4" />,
          });
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [userPoints, showNotifications]);

  
  const pointsSystem = [
    {
      activity: "Mentoring a Student (1 hour)",
      points: 50,
      icon: Users,
      color: "text-primary"
    },
    {
      activity: "Conducting a Webinar",
      points: 100,
      icon: BookOpen,
      color: "text-secondary"
    },
    {
      activity: "Job Referral (Successful)",
      points: 200,
      icon: Target,
      color: "text-success"
    },
    {
      activity: "Donation ($100)",
      points: 25,
      icon: Heart,
      color: "text-warning"
    },
    {
      activity: "Student Gets Job (through your help)",
      points: 300,
      icon: Trophy,
      color: "text-destructive"
    },
    {
      activity: "Sharing Industry Insights",
      points: 30,
      icon: MessageCircle,
      color: "text-primary"
    }
  ];

  const rewards = [
    {
      id: 1,
      title: "Exclusive Alumni Badge",
      description: "Digital badge for LinkedIn profile",
      pointsRequired: 500,
      icon: Award,
      available: true,
      details: "Showcase your alumni status on professional networks."
    },
    {
      id: 2,
      title: "VIP Event Access",
      description: "Access to exclusive alumni events",
      pointsRequired: 1000,
      icon: Calendar,
      available: true,
      details: "Join premium networking events and gatherings."
    },
    {
      id: 3,
      title: "Mentorship Program Certificate",
      description: "Official recognition certificate",
      pointsRequired: 1500,
      icon: Medal,
      available: false,
      details: "Receive a formal certificate for your mentoring efforts."
    },
    {
      id: 4,
      title: "Alumni Hall of Fame",
      description: "Featured on university website",
      pointsRequired: 2500,
      icon: Crown,
      available: false,
      details: "Get eternal recognition on the official alumni page."
    }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    toast.info("Updating leaderboard...");
    
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Leaderboard updated!");
    }, 1500);
  };

  const handleShareAchievement = (achievement) => {
    toast.success(`Shared ${achievement.title} on your profile!`, {
      icon: <Share2 className="h-4 w-4" />,
    });
  };

  const handleClaimReward = (reward) => {
    toast.success(`Congratulations! You claimed ${reward.title}`, {
      icon: <Gift className="h-4 w-4" />,
      action: {
        label: "Share",
        onClick: () => handleShareAchievement(reward),
      },
    });
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <AlumniNavbar />
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            
               <div className="mb-6 text-center relative rounded-lg overflow-hidden">
              <img 
                src={gamify}
                alt="Alumni Gamification Hub" 
                className="w-full h-64 object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 px-4 py-12">
                <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
                  Alumni Gamification Hub
                </h1>
                
                {/* Enhanced User Stats */}
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-lg font-bold text-primary">
                        Level {level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-purple-500" />
                      <span className="text-lg font-bold text-primary">
                        {userPoints.toLocaleString()} XP
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      <span className="text-lg font-bold text-primary">
                        {streak} day streak
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Coins className="h-5 w-5 text-yellow-600" />
                      <span className="text-lg font-bold text-primary">
                        {coins} coins
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/90 text-lg">
                  Earn XP, unlock achievements, and make a difference in students' lives
                </p>
              </div>
            </div>

            {/* Stats Overview with animations */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: userPoints, label: "Total Points", color: "primary", icon: Trophy },
                { value: 45, label: "Students Mentored", color: "primary", icon: Users },
                { value: 28, label: "Jobs Secured", color: "success", icon: Target },
                { value: 12, label: "Badges Earned", color: "warning", icon: Award }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className={`bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/10 border-${stat.color}/30 hover:scale-105 transition-transform duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className={`h-8 w-8 text-${stat.color} mx-auto mb-2 animate-bounce`} />
                      <p className="text-2xl font-bold text-primary">{stat.value.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

           {/* Recent Activities */}
            <Card className="mb-8 bg-card/70 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activities
                  </span>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="notifications" 
                      checked={showNotifications}
                      onCheckedChange={setShowNotifications}
                    />
                    <Label htmlFor="notifications">Notifications</Label>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={activity.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/70 hover:bg-background/90 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${
                          activity.type === 'mentorship' ? 'bg-primary/20' :
                          activity.type === 'webinar' ? 'bg-secondary/20' :
                          activity.type === 'referral' ? 'bg-success/20' : 'bg-warning/20'
                        }`}>
                          {activity.type === 'mentorship' && <Users className="h-4 w-4 text-primary" />}
                          {activity.type === 'webinar' && <BookOpen className="h-4 w-4 text-secondary" />}
                          {activity.type === 'referral' && <Target className="h-4 w-4 text-success" />}
                          {activity.type === 'donation' && <Heart className="h-4 w-4 text-warning" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        +{activity.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Content */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 ">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 bg-card/70 backdrop-blur-md shadow-lg">
                  <TabsTrigger value="leaderboard" className="hover:bg-primary/10 transition-colors">
                    <Trophy className="h-4 w-4 mr-4" />
                    Leaderboard
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="hover:bg-primary/10 transition-colors">
                    <Award className="h-4 w-4 mr-2" />
                    Achievements
                  </TabsTrigger>
                  <TabsTrigger value="points" className="hover:bg-primary/10 transition-colors">
                    <Star className="h-4 w-4 mr-2" />
                    Points System
                  </TabsTrigger>
                  <TabsTrigger value="rewards" className="hover:bg-primary/10 transition-colors">
                    <Gift className="h-4 w-4 mr-2" />
                    Rewards
                  </TabsTrigger>
                </TabsList>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="ml-4"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>

              {/* Leaderboard Tab */}
              <TabsContent value="leaderboard" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Left Side: Original Leaderboard Content */}
  <div className="lg:col-span-2">
    <Card className="bg-card/70 backdrop-blur-md shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-6 w-6 text-primary " />
          <span>Top Contributors</span>
        </CardTitle>
        <CardDescription>
          Alumni making the biggest impact on student success
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboard.map((alumni, index) => (
            <Dialog key={alumni.id}>
              <DialogTrigger asChild>
                <div 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-background/70 
                             hover:bg-background/90 hover:scale-105 hover:shadow-lg 
                             transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedAlumni(alumni)}
                >
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-muted'
                    }`}>
                      <span className="text-white font-bold text-sm">#{alumni.rank}</span>
                    </div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={gamify} />
                      <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{alumni.name}</h3>
                        <p className="text-sm text-muted-foreground">{alumni.title} at {alumni.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                        <div className="flex items-center space-x-1">
                          {alumni.trend === "up" ? (
                            <ChevronUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`text-sm ${alumni.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                            {alumni.change}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-lg">{alumni.points.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {alumni.badges.map((badge) => (
                        <Tooltip key={badge}>
                          <TooltipTrigger>
                            <Badge variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                              {badge}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Earned for outstanding contributions</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                      <div className="text-center">
                        <p className="font-medium">{alumni.contributions.mentorships}</p>
                        <p className="text-muted-foreground text-xs">Mentorships</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{alumni.contributions.webinars}</p>
                        <p className="text-muted-foreground text-xs">Webinars</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{alumni.contributions.donations}</p>
                        <p className="text-muted-foreground text-xs">Donations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                {/* Dialog content remains unchanged */}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>


                  {/* Right Side: Highlighted Leaderboard */}
                  <div className="lg:col-span-1">
                    <Card className="bg-card/70 backdrop-blur-md shadow-xl">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-primary" />
                          <span>Leaderboard Highlights</span>
                        </CardTitle>
                        <CardDescription>
                          Top alumni making a difference
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative overflow-hidden">
                          <div className="flex transition-transform duration-500 ease-in-out" 
                              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {leaderboard.map((alumni, index) => (
                              <div key={alumni.id} className="w-full flex-shrink-0 px-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div 
                                      className="text-center p-4 rounded-lg bg-background/70 hover:bg-background/90 hover:scale-102 transition-all duration-300 cursor-pointer animate-fade-in"
                                      style={{ animationDelay: `${index * 200}ms` }}
                                      onClick={() => setSelectedAlumni(alumni)}
                                    >
                                      <div className="relative mb-3">
                                        <div className="relative">
                                          <img 
                                            src={gamify} 
                                            alt={alumni.name} 
                                            className="h-20 w-20 rounded-full mx-auto border-4 shadow-lg"
                                            style={{
                                              borderColor: index === 0 ? '#FFD700' : // Gold for 1st
                                                          index === 1 ? '#C0C0C0' : // Silver for 2nd
                                                          index === 2 ? '#CD7F32' : '#6B7280' // Bronze for 3rd, gray for others
                                            }}
                                          />
                                          <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                                            #{index + 1}
                                          </div>
                                        </div>
                                      </div>
                                      <h3 className="font-semibold text-base mb-1">{alumni.name}</h3>
                                      <p className="text-xs text-muted-foreground mb-2">{alumni.title} at {alumni.company}</p>
                                      <p className="font-bold text-primary text-lg mb-2">{alumni.points.toLocaleString()} points</p>
                                      
                                      {/* Trend Indicator */}
                                      <div className="flex items-center justify-center mb-2">
                                        {alumni.trend === "up" ? (
                                          <ChevronUp className="h-4 w-4 text-green-500 mr-1" />
                                        ) : (
                                          <ChevronDown className="h-4 w-4 text-red-500 mr-1" />
                                        )}
                                        <span className={`text-xs ${alumni.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                                          {alumni.change} pts
                                        </span>
                                      </div>

                                      <div className="flex flex-wrap gap-1 justify-center">
                                        {alumni.badges.slice(0, 2).map((badge) => (
                                          <Tooltip key={badge}>
                                            <TooltipTrigger>
                                              <Badge variant="secondary" className="text-[10px] hover:bg-secondary/80 transition-colors">
                                                {badge}
                                              </Badge>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>Earned for outstanding contributions</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        ))}
                                        {alumni.badges.length > 2 && (
                                          <Badge variant="outline" className="text-[10px]">
                                            +{alumni.badges.length - 2} more
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>{selectedAlumni?.name}'s Profile</DialogTitle>
                                      <DialogDescription>
                                        {selectedAlumni?.title} at {selectedAlumni?.company}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div>
                                        <h4 className="font-semibold">Donations</h4>
                                        <p>Total Donated: ${selectedAlumni?.donationTotal}</p>
                                        <p>Number of Donations: {selectedAlumni?.contributions.donations}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold">Mentions & Recognitions</h4>
                                        <ul className="list-disc pl-5">
                                          {selectedAlumni?.mentions.map((mention, idx) => (
                                            <li key={idx}>{mention}</li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold">Badges</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {selectedAlumni?.badges.map((badge) => (
                                            <Badge key={badge} variant="outline">{badge}</Badge>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            ))}
                          </div>
                          
                          {/* Navigation Arrows */}
                          <button
                            onClick={() => setCurrentSlide((prev) => (prev === 0 ? leaderboard.length - 1 : prev - 1))}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-1 rounded-full shadow-lg transition-all duration-200 z-10"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setCurrentSlide((prev) => (prev === leaderboard.length - 1 ? 0 : prev + 1))}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-1 rounded-full shadow-lg transition-all duration-200 z-10"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>

                          {/* Dots Indicator */}
                          <div className="flex justify-center space-x-1 mt-4">
                            {leaderboard.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  currentSlide === index ? 'bg-primary w-4' : 'bg-muted-foreground/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Auto-play controls */}
                        <div className="flex items-center justify-between mt-4 pt-2 border-t">
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="auto-play"
                              checked={autoPlay}
                              onCheckedChange={setAutoPlay}
                            />
                            <Label htmlFor="auto-play" className="text-xs">Auto slide</Label>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {currentSlide + 1} / {leaderboard.length}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Achievements Tab */}  
 <TabsContent value="achievements" className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {achievements.map((achievement, index) => {
      const Icon = achievement.icon;
      return (
        <Dialog key={achievement.id}>
          <DialogTrigger asChild>
            <Card
              className={`relative hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in ${
                achievement.unlocked ? 'bg-card/70 backdrop-blur-md' : 'bg-muted/50 opacity-75'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedAchievement(achievement)}
            >
              {/* 🔒 Lock Icon for locked achievements */}
              {!achievement.unlocked && (
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 z-10">
                  {/* <Lock className="h-4 w-4 text-white" /> */}
                </div>
              )}

              {/* 🔒 Overlay for locked ones */}
              {!achievement.unlocked && (
                <div className="absolute inset-0 bg-black/10 rounded-lg pointer-events-none" />
              )}

              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 relative group">
                  {/* 🎯 Achievement Icon */}
                  <div
                    className={`p-4 ${achievement.color} rounded-2xl shadow-md ${
                      achievement.unlocked ? '' : 'grayscale'
                    } hover:rotate-6 transition-transform relative`}
                  >
                    <Icon className="h-8 w-8 text-black" />
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <div className="bg-white shadow-lg rounded-md p-3 text-sm text-gray-800 border">
                      <p className="font-semibold">How to earn:</p>
                      <p>{achievement.details}</p>
                    </div>
                  </div>
                </div>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge
                    variant={achievement.unlocked ? 'default' : 'secondary'}
                    className="mb-3"
                  >
                    {achievement.points} points
                  </Badge>
                </div>

                {/* Progress bar if locked */}
                {!achievement.unlocked && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                )}

                {/* Success icon if unlocked */}
                {achievement.unlocked && (
                  <div className="flex items-center justify-center text-success animate-bounce">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Unlocked!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedAchievement?.title}</DialogTitle>
              <DialogDescription>{selectedAchievement?.description}</DialogDescription>
            </DialogHeader>

            <p>{selectedAchievement?.details}</p>

            <div className="mt-4">
              <Progress value={selectedAchievement?.progress} className="h-4" />
              <p className="text-center mt-2">{selectedAchievement?.progress}% Complete</p>
            </div>

            {selectedAchievement?.unlocked && (
              <Button
                onClick={() => handleShareAchievement(selectedAchievement)}
                className="mt-4"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Achievement
              </Button>
            )}
          </DialogContent>
        </Dialog>
      );
    })}
  </div>
</TabsContent>

              {/* Points System Tab */}
              <TabsContent value="points" className="space-y-6">
                <Card className="bg-card/70 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="h-6 w-6 text-primary" />
                      <span>How to Earn Points</span>
                    </CardTitle>
                    <CardDescription>
                      Every contribution makes a difference. Here's how you can earn points by helping students.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pointsSystem.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/70 hover:bg-background/90 hover:scale-102 transition-all duration-300 cursor-help animate-fade-in"
                                  style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="flex items-center space-x-3">
                                  <div className="p-3 bg-primary/20 rounded-lg">
                                    <Icon className={`h-6 w-6 ${item.color}`} />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold">{item.activity}</h3>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-primary text-lg">+{item.points}</p>
                                  <p className="text-xs text-muted-foreground">points</p>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to log this activity (coming soon)</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Impact Stats */}
                <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 shadow-xl">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Your Impact This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: 12, label: "Students Mentored", color: "primary" },
                        { value: 3, label: "Webinars Hosted", color: "secondary" },
                        { value: 7, label: "Job Placements", color: "success" },
                        { value: 500, label: "Donated", color: "warning", prefix: "$" }
                      ].map((stat, index) => (
                        <div 
                          key={index} 
                          className="text-center hover:scale-105 transition-transform animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                            {stat.prefix}{stat.value.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rewards Tab */}
              <TabsContent value="rewards" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rewards.map((reward, index) => {
                    const Icon = reward.icon;
                    return (
                      <Dialog key={reward.id}>
                        <DialogTrigger asChild>
                          <Card 
                            className={`hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in ${
                              reward.available ? 'bg-card/70 backdrop-blur-md' : 'bg-muted/50 opacity-75'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedReward(reward)}
                          >
                            <CardHeader>
                              <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-lg ${
                                  reward.available ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                                }`}>
                                  <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg">{reward.title}</CardTitle>
                                  <CardDescription>{reward.description}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center justify-between">
                                <Badge variant={reward.available ? "default" : "secondary"}>
                                  {reward.pointsRequired} points required
                                </Badge>
                                <Button 
                                  variant={reward.available ? "default" : "secondary"}
                                  disabled={!reward.available}
                                  className={reward.available ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : ""}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleClaimReward(reward);
                                  }}
                                >
                                  {reward.available ? "Claim Reward" : "Locked"}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{selectedReward?.title}</DialogTitle>
                            <DialogDescription>{selectedReward?.description}</DialogDescription>
                          </DialogHeader>
                          <p>{selectedReward?.details}</p>
                          <Button 
                            className="mt-4 w-full" 
                            disabled={!selectedReward?.available}
                            onClick={() => handleClaimReward(selectedReward)}
                          >
                            {selectedReward?.available ? "Claim Now" : "Not Available Yet"}
                          </Button>
                        </DialogContent>
                      </Dialog>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AlumniGamification;