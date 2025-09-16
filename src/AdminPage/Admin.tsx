import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  GraduationCap, 
  Calendar, 
  DollarSign, 
  Briefcase,
  UserCheck,
  Building,
  TrendingUp,
  Activity,
  CheckCircle,
  Clock,
  AlertCircle,
  Settings,
  Shield,
  FileText,
  PlusCircle,
  Search
} from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";

const statsData = [
  {
    title: "Total Users",
    value: "5,847",
    change: "+18%",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Active Institutions",
    value: "234",
    change: "+12%",
    icon: Building,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Live Courses",
    value: "456",
    change: "+24%",
    icon: GraduationCap,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    title: "This Month Events",
    value: "89",
    change: "+8%",
    icon: Calendar,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Total Revenue",
    value: "$125,430",
    change: "+32%",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Job Listings",
    value: "167",
    change: "+15%",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const recentActivity = [
  {
    type: "verification",
    message: "User verification completed - Alex Johnson",
    time: "5 minutes ago",
    status: "completed",
    icon: CheckCircle,
    color: "text-success"
  },
  {
    type: "institution",
    message: "New institution registered - Stanford University",
    time: "1 hour ago",
    status: "active",
    icon: Building,
    color: "text-primary"
  },
  {
    type: "course",
    message: "Advanced AI Course published",
    time: "2 hours ago",
    status: "live",
    icon: GraduationCap,
    color: "text-accent"
  },
  {
    type: "event",
    message: "Tech Conference 2024 scheduled",
    time: "4 hours ago",
    status: "scheduled",
    icon: Calendar,
    color: "text-warning"
  },
  {
    type: "job",
    message: "Senior Developer position posted by Meta",
    time: "6 hours ago",
    status: "active",
    icon: Briefcase,
    color: "text-primary"
  }
];

const quickActions = [
  {
    title: "Dashboard Analytics",
    description: "View comprehensive system analytics",
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/10",
    action: "View Analytics"
  },
  {
    title: "User Verifications",
    description: "Manage user verification requests",
    icon: UserCheck,
    color: "text-success",
    bgColor: "bg-success/10",
    action: "Review Verifications",
    badge: "23"
  },
  {
    title: "Institution Management",
    description: "Add and manage educational institutions",
    icon: Building,
    color: "text-accent",
    bgColor: "bg-accent/10",
    action: "Manage Institutions"
  },
  {
    title: "Course Catalog",
    description: "Create and organize course offerings",
    icon: GraduationCap,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    action: "Manage Courses"
  },
  {
    title: "Event Planning",
    description: "Schedule and coordinate events",
    icon: Calendar,
    color: "text-warning",
    bgColor: "bg-warning/10",
    action: "Create Event"
  },
  {
    title: "Donation Tracking",
    description: "Monitor donations and fundraising",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
    action: "View Donations"
  },
  {
    title: "Job Board",
    description: "Manage job postings and applications",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
    action: "Manage Jobs"
  },
  {
    title: "User Management",
    description: "Control user accounts and permissions",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    action: "Manage Users"
  }
];

const pendingTasks = [
  {
    title: "Verification Queue",
    count: 23,
    description: "Users awaiting verification",
    priority: "high",
    icon: UserCheck
  },
  {
    title: "Institution Approvals",
    count: 8,
    description: "New institution requests",
    priority: "medium",
    icon: Building
  },
  {
    title: "Event Approvals",
    count: 12,
    description: "Events pending approval",
    priority: "medium",
    icon: Calendar
  },
  {
    title: "Job Moderation",
    count: 15,
    description: "Job posts to review",
    priority: "low",
    icon: Briefcase
  }
];

export default function Admin() {
  return (
    <div className="min-h-screen bg-background">
        <AdminNavbar/>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Asthra Admin Portal</h1>
              <p className="text-muted-foreground text-lg">
                Complete system management and control center
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                System Secure
              </Badge>
              <Button size="lg" className="shadow-lg">
                <FileText className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-success font-medium">{stat.change}</span>
                    <span className="text-muted-foreground ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Recent Activity */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <Activity className="w-6 h-6 mr-3 text-primary" />
                Recent System Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                      <div className="p-3 rounded-full bg-background border">
                        <Icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground mb-1">
                          {activity.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {activity.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Pending Tasks */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl">
                <AlertCircle className="w-6 h-6 mr-3 text-warning" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => {
                  const Icon = task.icon;
                  return (
                    <div key={index} className="p-4 rounded-xl border hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-sm">{task.title}</h4>
                        </div>
                        <Badge 
                          variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {task.count}
                        </span>
                        <Button size="sm" variant="outline" className="hover:shadow-sm">
                          Review
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Quick Actions Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${action.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${action.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold">{action.title}</CardTitle>
                    {action.badge && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
                        {action.badge}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Search and Quick Tools */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Need something specific?</h3>
                <p className="text-muted-foreground">Use our advanced search or create new entries</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="lg" className="shadow-sm">
                  <Search className="w-4 h-4 mr-2" />
                  Advanced Search
                </Button>
                <Button size="lg" className="shadow-lg">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}