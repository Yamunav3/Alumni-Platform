import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import StaffNavbar from "@/components/StaffNavbar"
import { 
  Search, 
  Filter, 
  Users, 
  UserCheck,
  Clock,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  Calendar,
  BookOpen,
  FileText,
  Settings,
  Bell,
  TrendingUp,
  Activity,
  Briefcase,
  GraduationCap
} from "lucide-react";

const StaffPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const activities = [
    {
      id: 1,
      staff: "Dr. John Smith",
      action: "Created new course material",
      target: "Advanced Algorithms",
      timestamp: "2 hours ago",
      type: "content"
    },
    {
      id: 2,
      staff: "Prof. Lisa Davis",
      action: "Moderated forum discussion",
      target: "Career Guidance Thread",
      timestamp: "4 hours ago",
      type: "moderation"
    },
    {
      id: 3,
      staff: "Dr. Mike Johnson",
      action: "Approved student registration",
      target: "Alumni Network",
      timestamp: "6 hours ago",
      type: "approval"
    },
    {
      id: 4,
      staff: "Prof. Sarah Chen",
      action: "Updated course curriculum",
      target: "Data Science Program",
      timestamp: "1 day ago",
      type: "content"
    }
  ];

  const feedbackQueue = [
    {
      id: 1,
      type: "Alumni Feedback",
      author: "John Doe (2020)",
      subject: "Suggestion for networking events",
      content: "I think we should have more industry-specific networking events...",
      sentiment: "positive",
      priority: "medium",
      submittedDate: "Dec 11, 2024",
      status: "pending"
    },
    {
      id: 2,
      type: "Student Feedback",
      author: "Jane Smith",
      subject: "Course content outdated",
      content: "The web development course materials need updating...",
      sentiment: "negative",
      priority: "high",
      submittedDate: "Dec 10, 2024",
      status: "in_progress"
    },
    {
      id: 3,
      type: "General Feedback",
      author: "Anonymous",
      subject: "Website usability",
      content: "The alumni portal is very user-friendly and helpful...",
      sentiment: "positive",
      priority: "low",
      submittedDate: "Dec 9, 2024",
      status: "resolved"
    }
  ];

  const staffMembers = [
    {
      id: 1,
      name: "Dr. Robert Thompson",
      email: "r.thompson@university.edu",
      department: "Engineering",
      position: "Department Head",
      joinDate: "Jan 2020",
      courses: 3,
      students: 150,
      status: "active",
      lastActive: "Online now"
    },
    {
      id: 2,
      name: "Prof. Jennifer Liu",
      email: "j.liu@university.edu",
      department: "Business",
      position: "Professor",
      joinDate: "Mar 2019",
      courses: 2,
      students: 120,
      status: "active",
      lastActive: "2 hours ago"
    },
    {
      id: 3,
      name: "Dr. Marcus Williams",
      email: "m.williams@university.edu",
      department: "Arts & Sciences",
      position: "Associate Professor",
      joinDate: "Sep 2021",
      courses: 4,
      students: 200,
      status: "inactive",
      lastActive: "1 week ago"
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      case "neutral":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "approved":
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "under_review":
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <StaffNavbar/>
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Staff Portal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Manage activities, moderate content, and oversee academic operations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
          </TabsList>

          {/* Activity Monitoring */}
          <TabsContent value="activities" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Activity Monitoring</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {activity.type === 'content' && <BookOpen className="h-5 w-5 text-blue-600" />}
                          {activity.type === 'moderation' && <MessageSquare className="h-5 w-5 text-yellow-600" />}
                          {activity.type === 'approval' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{activity.staff}</h3>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                          <p className="text-sm font-medium text-primary">{activity.target}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                        <Badge variant="outline" className="mt-1 capitalize">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Moderation */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Feedback Moderation</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Priority
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Manual Entry
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {feedbackQueue.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{feedback.subject}</h3>
                          <Badge variant="outline">{feedback.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          by {feedback.author} • {feedback.submittedDate}
                        </p>
                        <p className="text-sm">{feedback.content}</p>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Badge className={getPriorityColor(feedback.priority)}>
                          {feedback.priority}
                        </Badge>
                        <Badge className={getSentimentColor(feedback.sentiment)}>
                          {feedback.sentiment}
                        </Badge>
                        {getStatusBadge(feedback.status)}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Respond
                      </Button>
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Mark Resolved
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Staff Management */}
          <TabsContent value="staff" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Staff Management</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search staff..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {/* <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Staff
                </Button> */}
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Staff Member</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{staff.name.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-sm text-muted-foreground">{staff.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{staff.department}</TableCell>
                      <TableCell>{staff.position}</TableCell>
                      <TableCell>{staff.courses}</TableCell>
                      <TableCell>{staff.students}</TableCell>
                      <TableCell>{getStatusBadge(staff.status)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffPortal;