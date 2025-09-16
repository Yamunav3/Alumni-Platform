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
  CheckCircle
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const AlumniGamification = () => {
  const leaderboard = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      points: 2850,
      rank: 1,
      avatar: "/placeholder.svg",
      badges: ["Mentor Master", "Knowledge Sharer", "Community Builder"],
      contributions: {
        mentorships: 45,
        webinars: 12,
        donations: 8
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Microsoft",
      points: 2720,
      rank: 2,
      avatar: "/placeholder.svg",
      badges: ["Webinar Hero", "Donation Champion"],
      contributions: {
        mentorships: 38,
        webinars: 18,
        donations: 15
      }
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Data Scientist",
      company: "Netflix",
      points: 2650,
      rank: 3,
      avatar: "/placeholder.svg",
      badges: ["Rising Star", "Tech Guru"],
      contributions: {
        mentorships: 42,
        webinars: 8,
        donations: 12
      }
    }
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
      progress: 100
    },
    {
      id: 2,
      title: "Knowledge Sharer",
      description: "Conducted 10+ webinars",
      icon: BookOpen,
      color: "bg-secondary",
      points: 300,
      unlocked: true,
      progress: 100
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Helped 100+ students get jobs",
      icon: Target,
      color: "bg-success",
      points: 1000,
      unlocked: true,
      progress: 100
    },
    {
      id: 4,
      title: "Donation Champion",
      description: "Donated $5000+ to institution",
      icon: Heart,
      color: "bg-warning",
      points: 800,
      unlocked: false,
      progress: 75
    },
    {
      id: 5,
      title: "Webinar Hero",
      description: "Host 25+ webinars",
      icon: MessageCircle,
      color: "bg-destructive",
      points: 600,
      unlocked: false,
      progress: 60
    },
    {
      id: 6,
      title: "Career Catalyst",
      description: "Help 200+ students find internships",
      icon: Zap,
      color: "bg-primary",
      points: 1200,
      unlocked: false,
      progress: 45
    }
  ];

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
      available: true
    },
    {
      id: 2,
      title: "VIP Event Access",
      description: "Access to exclusive alumni events",
      pointsRequired: 1000,
      icon: Calendar,
      available: true
    },
    {
      id: 3,
      title: "Mentorship Program Certificate",
      description: "Official recognition certificate",
      pointsRequired: 1500,
      icon: Medal,
      available: false
    },
    {
      id: 4,
      title: "Alumni Hall of Fame",
      description: "Featured on university website",
      pointsRequired: 2500,
      icon: Crown,
      available: false
    }
  ];

  return (
   <div className="min-h-screen bg-background">
      <AlumniNavbar/>
       <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Alumni Gamification Hub
          </h1>
          <p className="text-muted-foreground">
            Earn points, unlock achievements, and make a difference in students' lives
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">2,850</p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold text-secondary">45</p>
              <p className="text-sm text-muted-foreground">Students Mentored</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-success">28</p>
              <p className="text-sm text-muted-foreground">Jobs Secured</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-warning">12</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leaderboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="leaderboard">
              <Trophy className="h-4 w-4 mr-2" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="achievements">
              <Award className="h-4 w-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="points">
              <Star className="h-4 w-4 mr-2" />
              Points System
            </TabsTrigger>
            <TabsTrigger value="rewards">
              <Gift className="h-4 w-4 mr-2" />
              Rewards
            </TabsTrigger>
          </TabsList>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span>Top Contributors</span>
                </CardTitle>
                <CardDescription>
                  Alumni making the biggest impact on student success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((alumni, index) => (
                    <div key={alumni.id} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-muted'
                        }`}>
                          <span className="text-white font-bold text-sm">#{alumni.rank}</span>
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={alumni.avatar} />
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
                            <div className="text-right">
                              <p className="font-bold text-primary text-lg">{alumni.points.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">points</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {alumni.badges.map((badge) => (
                            <Badge key={badge} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <Card key={achievement.id} className={`hover:shadow-lg transition-all duration-300 ${
                    achievement.unlocked ? 'bg-card/50 backdrop-blur-sm' : 'bg-muted/50 opacity-75'
                  }`}>
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-4 ${achievement.color} rounded-2xl ${
                          achievement.unlocked ? 'shadow-lg' : 'grayscale'
                        }`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <Badge variant={achievement.unlocked ? "default" : "secondary"} className="mb-3">
                          {achievement.points} points
                        </Badge>
                      </div>
                      {!achievement.unlocked && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                      {achievement.unlocked && (
                        <div className="flex items-center justify-center text-success">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Unlocked!</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Points System Tab */}
          <TabsContent value="points" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
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
                      <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
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
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Your Impact This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Webinars Hosted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Job Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning mb-2">$500</div>
                    <div className="text-sm text-muted-foreground">Donated</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewards.map((reward) => {
                const Icon = reward.icon;
                return (
                  <Card key={reward.id} className={`hover:shadow-lg transition-all duration-300 ${
                    reward.available ? 'bg-card/50 backdrop-blur-sm' : 'bg-muted/50 opacity-75'
                  }`}>
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
                        >
                          {reward.available ? "Claim Reward" : "Locked"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default AlumniGamification;