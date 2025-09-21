import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin,
  Briefcase,
  GraduationCap,
  Building,
  Award,
  Heart,
  MessageSquare,
  Calendar,
  Download,
  Filter,
  Globe,
  Target,
  Star,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";

const Analytics = () => {
  const keyMetrics = [
    { 
      label: "Total Alumni", 
      value: "15,240", 
      change: 12, 
      changeType: "increase",
      icon: Users, 
      color: "text-blue-600" 
    },
    { 
      label: "Placement Rate", 
      value: "94.5%", 
      change: 8, 
      changeType: "increase",
      icon: TrendingUp, 
      color: "text-green-600" 
    },
    { 
      label: "Avg. Starting Salary", 
      value: "₹85K", 
      change: 15, 
      changeType: "increase",
      icon: Briefcase, 
      color: "text-purple-600" 
    },
    { 
      label: "Alumni Engagement", 
      value: "78%", 
      change: -3, 
      changeType: "decrease",
      icon: Heart, 
      color: "text-red-600" 
    }
  ];

  const alumniDistribution = [
    { location: "San Francisco Bay Area", count: 3450, percentage: 22.6 },
    { location: "New York City", count: 2890, percentage: 19.0 },
    { location: "Seattle", count: 1820, percentage: 11.9 },
    { location: "Boston", count: 1650, percentage: 10.8 },
    { location: "Los Angeles", count: 1430, percentage: 9.4 },
    { location: "Austin", count: 980, percentage: 6.4 },
    { location: "Chicago", count: 890, percentage: 5.8 },
    { location: "Other", count: 2130, percentage: 14.1 }
  ];

  const industryDistribution = [
    { industry: "Technology", count: 5890, percentage: 38.6, growth: 18 },
    { industry: "Finance", count: 2340, percentage: 15.4, growth: 12 },
    { industry: "Healthcare", count: 1890, percentage: 12.4, growth: 25 },
    { industry: "Consulting", count: 1560, percentage: 10.2, growth: 8 },
    { industry: "Education", count: 1290, percentage: 8.5, growth: 15 },
    { industry: "Manufacturing", count: 980, percentage: 6.4, growth: -5 },
    { industry: "Government", count: 780, percentage: 5.1, growth: 3 },
    { industry: "Other", count: 510, percentage: 3.4, growth: 10 }
  ];

  const placementTrends = [
    { year: "2019", placed: 450, total: 480, rate: 93.8 },
    { year: "2020", placed: 425, total: 465, rate: 91.4 },
    { year: "2021", placed: 480, total: 510, rate: 94.1 },
    { year: "2022", placed: 520, total: 545, rate: 95.4 },
    { year: "2023", placed: 575, total: 600, rate: 95.8 },
    { year: "2024", placed: 590, total: 625, rate: 94.4 }
  ];

  const topCompanies = [
    { name: "Google", hires: 145, avgSalary: "₹165K", retention: "92%" },
    { name: "Microsoft", hires: 132, avgSalary: "₹155K", retention: "89%" },
    { name: "Apple", hires: 98, avgSalary: "₹170K", retention: "94%" },
    { name: "Amazon", hires: 89, avgSalary: "₹145K", retention: "87%" },
    { name: "Meta", hires: 76, avgSalary: "₹180K", retention: "91%" },
    { name: "Netflix", hires: 54, avgSalary: "₹190K", retention: "95%" },
    { name: "Tesla", hires: 43, avgSalary: "₹140K", retention: "88%" },
    { name: "Uber", hires: 38, avgSalary: "₹135K", retention: "85%" }
  ];

  const engagementMetrics = [
    { metric: "Profile Completion Rate", value: 87, target: 90 },
    { metric: "Event Attendance", value: 65, target: 70 },
    { metric: "Job Portal Usage", value: 78, target: 80 },
    { metric: "Mentorship Participation", value: 42, target: 50 },
    { metric: "Alumni Directory Activity", value: 59, target: 65 }
  ];

  const sentimentAnalysis = [
    { category: "Overall Experience", positive: 82, neutral: 15, negative: 3 },
    { category: "Career Services", positive: 78, neutral: 18, negative: 4 },
    { category: "Networking Events", positive: 85, neutral: 12, negative: 3 },
    { category: "Platform Usability", positive: 73, neutral: 22, negative: 5 },
    { category: "Alumni Support", positive: 88, neutral: 10, negative: 2 }
  ];

  const getChangeIcon = (changeType: string) => {
    if (changeType === "increase") return <ArrowUp className="h-3 w-3 text-green-600" />;
    if (changeType === "decrease") return <ArrowDown className="h-3 w-3 text-red-600" />;
    return <Minus className="h-3 w-3 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar/>
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
           Analytics Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insights into alumni performance, engagement, and institutional impact
            </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="placement">Placement</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Key Metrics</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                          <p className="text-3xl font-bold">{metric.value}</p>
                          <div className="flex items-center mt-1">
                            {getChangeIcon(metric.changeType)}
                            <p className={`text-sm ml-1 ${
                              metric.changeType === 'increase' ? 'text-green-600' : 
                              metric.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {Math.abs(metric.change)}% from last year
                            </p>
                          </div>
                        </div>
                        <Icon className={`h-8 w-8 ${metric.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Hiring Companies</CardTitle>
                  <CardDescription>Companies that hire most of our alumni</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCompanies.slice(0, 5).map((company, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {company.hires} hires • Avg. {company.avgSalary}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{company.retention} retention</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Latest milestones and accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">Highest Placement Rate</p>
                        <p className="text-sm text-muted-foreground">Achieved 95.8% in 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Salary Growth</p>
                        <p className="text-sm text-muted-foreground">15% increase in avg. starting salary</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Global Reach</p>
                        <p className="text-sm text-muted-foreground">Alumni in 45+ countries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium">Industry Leaders</p>
                        <p className="text-sm text-muted-foreground">280+ alumni in C-suite positions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Placement Analytics */}
          <TabsContent value="placement" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Placement Statistics</h2>
              <Button variant="outline">View Detailed Report</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Trends (6 Years)</CardTitle>
                  <CardDescription>Year-over-year placement performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {placementTrends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium">{trend.year}</span>
                          <Progress value={trend.rate} className="w-32 h-2" />
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{trend.rate}%</p>
                          <p className="text-sm text-muted-foreground">
                            {trend.placed}/{trend.total}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Hiring Companies</CardTitle>
                  <CardDescription>Most popular employers for recent graduates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCompanies.slice(0, 8).map((company, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Average: {company.avgSalary}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{company.hires}</p>
                          <p className="text-xs text-muted-foreground">hires</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Distribution Analytics */}
          <TabsContent value="distribution" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Alumni Distribution</h2>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                View Map
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Where our alumni are located globally</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alumniDistribution.map((location, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{location.location}</span>
                          <span className="text-sm">{location.percentage}%</span>
                        </div>
                        <Progress value={location.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {location.count.toLocaleString()} alumni
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Distribution</CardTitle>
                  <CardDescription>Alumni distribution across different industries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {industryDistribution.map((industry, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{industry.industry}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{industry.percentage}%</span>
                            <Badge 
                              variant={industry.growth > 0 ? "default" : "secondary"}
                              className={`text-xs ${
                                industry.growth > 0 ? "bg-green-100 text-green-800" : 
                                industry.growth < 0 ? "bg-red-100 text-red-800" : 
                                "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {industry.growth > 0 ? '+' : ''}{industry.growth}%
                            </Badge>
                          </div>
                        </div>
                        <Progress value={industry.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {industry.count.toLocaleString()} alumni
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Engagement Analytics */}
          <TabsContent value="engagement" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Alumni Engagement</h2>
              <Button variant="outline">Engagement Strategy</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Key performance indicators for alumni engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {engagementMetrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{metric.metric}</span>
                          <span className="text-sm">{metric.value}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={metric.value} className="h-3" />
                          <div 
                            className="absolute top-0 h-3 w-0.5 bg-red-500"
                            style={{ left: `${metric.target}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Current: {metric.value}%</span>
                          <span>Target: {metric.target}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Heatmap</CardTitle>
                  <CardDescription>Alumni platform usage patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-4">
                      <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            Math.random() > 0.7 ? 'bg-primary' :
                            Math.random() > 0.4 ? 'bg-primary/60' :
                            Math.random() > 0.2 ? 'bg-primary/30' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Low activity</span>
                      <span>High activity</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Analytics */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Feedback Analysis</h2>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                View All Feedback
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Analysis</CardTitle>
                  <CardDescription>AI-powered analysis of alumni feedback sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sentimentAnalysis.map((item, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="font-medium">{item.category}</h4>
                        <div className="flex space-x-2">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Positive</span>
                              <span>{item.positive}%</span>
                            </div>
                            <Progress value={item.positive} className="h-2 bg-green-100">
                              <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.positive}%` }} />
                            </Progress>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Neutral</span>
                              <span>{item.neutral}%</span>
                            </div>
                            <Progress value={item.neutral} className="h-2 bg-gray-100">
                              <div className="h-full bg-gray-400 rounded-full" style={{ width: `${item.neutral}%` }} />
                            </Progress>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Negative</span>
                              <span>{item.negative}%</span>
                            </div>
                            <Progress value={item.negative} className="h-2 bg-red-100">
                              <div className="h-full bg-red-500 rounded-full" style={{ width: `${item.negative}%` }} />
                            </Progress>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feedback Summary</CardTitle>
                  <CardDescription>Key insights from alumni feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">Top Strengths</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Strong alumni network connections</li>
                        <li>• Excellent career placement support</li>
                        <li>• High-quality networking events</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Areas for Improvement</span>
                      </div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Platform usability enhancements</li>
                        <li>• More frequent communication</li>
                        <li>• Expanded mentorship programs</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Recent Trends</span>
                      </div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Increased demand for virtual events</li>
                        <li>• Growing interest in tech industry roles</li>
                        <li>• Higher engagement with mobile platform</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;