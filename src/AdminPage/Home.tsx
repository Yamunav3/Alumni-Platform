{// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Badge } from "@/components/ui/badge";
// // import { 
// //   Calendar,
// //   Users,
// //   MessageSquare,
// //   BookOpen,
// //   MessageCircle,
// //   Sparkles,
// //   PartyPopper,
// //   UserCheck,
// //   FolderOpen,
// //   Heart
// // } from "lucide-react";
// // import { useNavigate } from "react-router-dom";

// // const celebrationsData = [
// //   { title: "Alumni Annual Gala", date: "Dec 15, 2024", type: "Event", attendees: 250 },
// //   { title: "Tech Reunion 2024", date: "Jan 20, 2025", type: "Reunion", attendees: 150 },
// //   { title: "Career Achievement Awards", date: "Feb 10, 2025", type: "Awards", attendees: 300 }
// // ];

// // const mentorshipStats = [
// //   { label: "Active Mentors", value: "450+", icon: Users },
// //   { label: "Success Stories", value: "89%", icon: Heart },
// //   { label: "Industries Covered", value: "25+", icon: FolderOpen }
// // ];

// // const forumTopics = [
// //   { title: "Career Transitions", posts: 124, replies: 89, lastActivity: "2 hours ago" },
// //   { title: "Entrepreneurship Journey", posts: 98, replies: 156, lastActivity: "4 hours ago" },
// //   { title: "Technical Discussions", posts: 203, replies: 234, lastActivity: "1 hour ago" }
// // ];

// // const directoryStats = [
// //   { company: "Google", count: 45 },
// //   { company: "Microsoft", count: 38 },
// //   { company: "Meta", count: 32 },
// //   { company: "Amazon", count: 41 }
// // ];

// // const recentFeedback = [
// //   { category: "Platform Features", rating: 4.8, suggestions: 23 },
// //   { category: "Events & Programs", rating: 4.6, suggestions: 18 },
// //   { category: "Networking Tools", rating: 4.7, suggestions: 15 }
// // ];

// // export default function Home() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Hero Section */}
// //       <section className="relative py-20 px-4 bg-gradient-hero">
// //         <div className="container mx-auto text-center">
// //           <div className="flex items-center justify-center mb-6">
// //             <Sparkles className="h-8 w-8 text-primary mr-3" />
// //             <h1 className="text-4xl md:text-6xl font-bold gradient-text">
// //               Welcome to Asthra
// //             </h1>
// //           </div>
// //           <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
// //             Your centralized alumni platform connecting past, present, and future. 
// //             Build meaningful relationships, advance your career, and give back to your community.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Button 
// //               size="lg" 
// //               className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
// //               onClick={() => navigate("/career-portal")}
// //             >
// //               Explore Career Portal
// //             </Button>
// //             <Button 
// //               variant="outline" 
// //               size="lg"
// //               onClick={() => navigate("/directory")}
// //             >
// //               Find Alumni
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-16 px-4">
// //         <div className="container mx-auto max-w-6xl">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold mb-4">Discover What's Possible</h2>
// //             <p className="text-muted-foreground max-w-2xl mx-auto">
// //               Explore the various ways you can connect, learn, and contribute to our thriving alumni community.
// //             </p>
// //           </div>
          
// //           <Tabs defaultValue="celebrations" className="w-full">
// //             <TabsList className="grid w-full grid-cols-5">
// //               <TabsTrigger value="celebrations">Celebrations</TabsTrigger>
// //               <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
// //               <TabsTrigger value="forums">Forums</TabsTrigger>
// //               <TabsTrigger value="directory">Directory</TabsTrigger>
// //               <TabsTrigger value="feedback">Feedback</TabsTrigger>
// //             </TabsList>

// //             <TabsContent value="celebrations" className="space-y-6 mt-6">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center">
// //                     <PartyPopper className="h-5 w-5 mr-2" />
// //                     Upcoming Celebrations
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Stay connected with events, milestones, and special occasions
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     {celebrationsData.map((event, index) => (
// //                       <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
// //                         <div>
// //                           <h4 className="font-medium">{event.title}</h4>
// //                           <p className="text-sm text-muted-foreground">{event.date}</p>
// //                         </div>
// //                         <div className="text-right">
// //                           <Badge variant="secondary">{event.type}</Badge>
// //                           <p className="text-sm text-muted-foreground mt-1">{event.attendees} attending</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </TabsContent>

// //             <TabsContent value="mentorship" className="space-y-6 mt-6">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center">
// //                     <UserCheck className="h-5 w-5 mr-2" />
// //                     Mentorship Program
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Connect with experienced alumni or become a mentor yourself
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                     {mentorshipStats.map((stat, index) => {
// //                       const IconComponent = stat.icon;
// //                       return (
// //                         <div key={index} className="text-center p-4 border rounded-lg">
// //                           <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
// //                           <div className="text-2xl font-bold text-primary">{stat.value}</div>
// //                           <div className="text-sm text-muted-foreground">{stat.label}</div>
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </TabsContent>

// //             <TabsContent value="forums" className="space-y-6 mt-6">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center">
// //                     <MessageSquare className="h-5 w-5 mr-2" />
// //                     Discussion Forums
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Engage in meaningful discussions and collaborate with fellow alumni
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     {forumTopics.map((topic, index) => (
// //                       <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
// //                         <div>
// //                           <h4 className="font-medium">{topic.title}</h4>
// //                           <p className="text-sm text-muted-foreground">{topic.posts} posts • {topic.replies} replies</p>
// //                         </div>
// //                         <div className="text-sm text-muted-foreground">
// //                           {topic.lastActivity}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </TabsContent>

// //             <TabsContent value="directory" className="space-y-6 mt-6">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center">
// //                     <BookOpen className="h-5 w-5 mr-2" />
// //                     Alumni Directory
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Find and connect with alumni across different industries and locations
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     {directoryStats.map((company, index) => (
// //                       <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
// //                         <span className="font-medium">{company.company}</span>
// //                         <Badge variant="outline">{company.count} alumni</Badge>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </TabsContent>

// //             <TabsContent value="feedback" className="space-y-6 mt-6">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center">
// //                     <MessageCircle className="h-5 w-5 mr-2" />
// //                     Community Feedback
// //                   </CardTitle>
// //                   <CardDescription>
// //                     Share your thoughts and help us improve the alumni experience
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     {recentFeedback.map((feedback, index) => (
// //                       <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
// //                         <div>
// //                           <h4 className="font-medium">{feedback.category}</h4>
// //                           <p className="text-sm text-muted-foreground">{feedback.suggestions} suggestions received</p>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="text-lg font-semibold text-primary">{feedback.rating}/5</div>
// //                           <div className="text-xs text-muted-foreground">Rating</div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </TabsContent>
// //           </Tabs>
// //         </div>
// //       </section>

// //       {/* Quick Stats */}
// //       <section className="py-16 px-4 bg-muted/50">
// //         <div className="container mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //             <div>
// //               <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
// //               <div className="text-muted-foreground">Active Alumni</div>
// //             </div>
// //             <div>
// //               <div className="text-3xl font-bold text-primary mb-2">500+</div>
// //               <div className="text-muted-foreground">Companies</div>
// //             </div>
// //             <div>
// //               <div className="text-3xl font-bold text-primary mb-2">50+</div>
// //               <div className="text-muted-foreground">Countries</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Progress } from "@/components/ui/progress";
// import { 
//   Search, 
//   Filter, 
//   Users, 
//   UserCheck,
//   UserX,
//   Building,
//   Calendar,
//   BookOpen,
//   Briefcase,
//   Heart,
//   BarChart3,
//   Eye,
//   Edit,
//   Trash2,
//   Plus,
//   CheckCircle,
//   XCircle,
//   Clock,
//   AlertTriangle,
//   TrendingUp,
//   DollarSign,
//   Award,
//   GraduationCap
// } from "lucide-react";
// import { AdminNavbar } from "@/components/AdminNavbar";

// const AdminHome = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const pendingVerifications = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@email.com",
//       type: "Alumni",
//       batch: "2020",
//       course: "Computer Science",
//       submittedDate: "Dec 10, 2024",
//       documents: ["Degree Certificate", "ID Proof"],
//       status: "pending"
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane.smith@email.com",
//       type: "Staff",
//       department: "Engineering",
//       position: "Assistant Professor",
//       submittedDate: "Dec 9, 2024",
//       documents: ["Employment Letter", "ID Proof"],
//       status: "pending"
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       email: "mike.j@email.com",
//       type: "Alumni",
//       batch: "2019",
//       course: "Business Administration",
//       submittedDate: "Dec 8, 2024",
//       documents: ["Degree Certificate", "Experience Letter"],
//       status: "under_review"
//     }
//   ];

//   const institutions = [
//     {
//       id: 1,
//       name: "School of Engineering",
//       established: "1985",
//       students: 2500,
//       faculty: 180,
//       courses: 15,
//       status: "active"
//     },
//     {
//       id: 2,
//       name: "Business School",
//       established: "1990",
//       students: 1800,
//       faculty: 120,
//       courses: 8,
//       status: "active"
//     },
//     {
//       id: 3,
//       name: "Arts & Sciences",
//       established: "1988",
//       students: 3200,
//       faculty: 220,
//       courses: 25,
//       status: "active"
//     }
//   ];

//   const courses = [
//     {
//       id: 1,
//       name: "Computer Science",
//       duration: "4 years",
//       department: "Engineering",
//       students: 450,
//       alumni: 1200,
//       status: "active"
//     },
//     {
//       id: 2,
//       name: "Business Administration",
//       duration: "2 years",
//       department: "Business",
//       students: 320,
//       alumni: 890,
//       status: "active"
//     },
//     {
//       id: 3,
//       name: "Data Science",
//       duration: "4 years",
//       department: "Engineering",
//       students: 180,
//       alumni: 45,
//       status: "new"
//     }
//   ];

//   const donations = [
//     {
//       id: 1,
//       donor: "Sarah Johnson",
//       amount: "$5,000",
//       purpose: "Scholarship Fund",
//       date: "Dec 12, 2024",
//       status: "completed",
//       method: "Bank Transfer"
//     },
//     {
//       id: 2,
//       donor: "Microsoft Corp",
//       amount: "$50,000",
//       purpose: "Infrastructure Development",
//       date: "Dec 10, 2024",
//       status: "completed",
//       method: "Corporate Donation"
//     },
//     {
//       id: 3,
//       donor: "Alex Rivera",
//       amount: "$1,500",
//       purpose: "General Fund",
//       date: "Dec 8, 2024",
//       status: "pending",
//       method: "Credit Card"
//     }
//   ];

//   const events = [
//     {
//       id: 1,
//       name: "Annual Alumni Meet",
//       date: "Jan 15, 2025",
//       location: "Main Campus",
//       organizer: "Alumni Committee",
//       attendees: 450,
//       status: "upcoming"
//     },
//     {
//       id: 2,
//       name: "Tech Conference 2024",
//       date: "Dec 20, 2024",
//       location: "Virtual",
//       organizer: "Engineering Dept",
//       attendees: 890,
//       status: "active"
//     },
//     {
//       id: 3,
//       name: "Career Fair",
//       date: "Nov 30, 2024",
//       location: "Exhibition Hall",
//       organizer: "Career Services",
//       attendees: 650,
//       status: "completed"
//     }
//   ];

//   const jobPostings = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       company: "Tech Corp",
//       postedBy: "John Smith",
//       applications: 45,
//       date: "Dec 10, 2024",
//       status: "active"
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       company: "Innovation Labs",
//       postedBy: "Sarah Chen",
//       applications: 23,
//       date: "Dec 8, 2024",
//       status: "active"
//     },
//     {
//       id: 3,
//       title: "Data Analyst",
//       company: "Analytics Inc",
//       postedBy: "Mike Davis",
//       applications: 18,
//       date: "Dec 5, 2024",
//       status: "expired"
//     }
//   ];

//   const dashboardStats = [
//     { label: "Total Alumni", value: "15,240", change: "+12%", icon: Users, color: "text-blue-600" },
//     { label: "Active Staff", value: "245", change: "+5%", icon: UserCheck, color: "text-green-600" },
//     { label: "Pending Verifications", value: "23", change: "-8%", icon: Clock, color: "text-yellow-600" },
//     { label: "Total Donations", value: "$127K", change: "+25%", icon: Heart, color: "text-red-600" },
//   ];

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "active":
//       case "completed":
//         return <Badge className="bg-green-100 text-green-800">Active</Badge>;
//       case "pending":
//         return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
//       case "expired":
//       case "inactive":
//         return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
//       case "under_review":
//         return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>;
//       case "new":
//         return <Badge className="bg-purple-100 text-purple-800">New</Badge>;
//       default:
//         return <Badge variant="outline">{status}</Badge>;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <AdminNavbar/>
//       {/* Header */}
//       <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-foreground mb-4">Admin Panel</h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Comprehensive system management and oversight dashboard
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Tabs defaultValue="dashboard" className="w-full">
//           <TabsList className="grid w-full grid-cols-7">
//             <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
//             <TabsTrigger value="verifications">Verifications</TabsTrigger>
//             <TabsTrigger value="institutions">Institutions</TabsTrigger>
//             <TabsTrigger value="courses">Courses</TabsTrigger>
//             <TabsTrigger value="events">Events</TabsTrigger>
//             <TabsTrigger value="donations">Donations</TabsTrigger>
//             <TabsTrigger value="jobs">Jobs</TabsTrigger>
//           </TabsList>

//           {/* Dashboard Overview */}
//           <TabsContent value="dashboard" className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {dashboardStats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <Card key={index}>
//                     <CardContent className="pt-6">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
//                           <p className="text-3xl font-bold">{stat.value}</p>
//                           <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
//                             {stat.change} from last month
//                           </p>
//                         </div>
//                         <Icon className={`h-8 w-8 ${stat.color}`} />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recent Activity</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <CheckCircle className="h-5 w-5 text-green-600" />
//                       <div>
//                         <p className="text-sm font-medium">Alumni verification approved</p>
//                         <p className="text-xs text-muted-foreground">John Doe - 2 hours ago</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <DollarSign className="h-5 w-5 text-blue-600" />
//                       <div>
//                         <p className="text-sm font-medium">New donation received</p>
//                         <p className="text-xs text-muted-foreground">$5,000 - 4 hours ago</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Calendar className="h-5 w-5 text-purple-600" />
//                       <div>
//                         <p className="text-sm font-medium">Event created</p>
//                         <p className="text-xs text-muted-foreground">Tech Conference - 6 hours ago</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
// //               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>System Health</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between text-sm mb-2">
//                         <span>Database Performance</span>
//                         <span>98%</span>
//                       </div>
//                       <Progress value={98} className="h-2" />
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm mb-2">
//                         <span>User Engagement</span>
//                         <span>87%</span>
//                       </div>
//                       <Progress value={87} className="h-2" />
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-sm mb-2">
//                         <span>System Uptime</span>
//                         <span>99.9%</span>
//                       </div>
//                       <Progress value={99.9} className="h-2" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           {/* User Verifications */}
//           <TabsContent value="verifications" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Pending Verifications</h2>
//               <div className="flex space-x-2">
//                 <Button variant="outline">
//                   <Filter className="h-4 w-4 mr-2" />
//                   Filter
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {pendingVerifications.map((verification) => (
//                 <Card key={verification.id}>
//                   <CardContent className="pt-6">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center space-x-4">
//                         <Avatar>
//                           <AvatarFallback>{verification.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <h3 className="font-semibold">{verification.name}</h3>
//                           <p className="text-sm text-muted-foreground">{verification.email}</p>
//                           <div className="flex items-center space-x-2 mt-1">
//                             <Badge variant="outline">{verification.type}</Badge>
//                             {verification.batch && <span className="text-xs text-muted-foreground">Batch {verification.batch}</span>}
//                             {verification.course && <span className="text-xs text-muted-foreground">{verification.course}</span>}
//                             {verification.department && <span className="text-xs text-muted-foreground">{verification.department}</span>}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {getStatusBadge(verification.status)}
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4 mr-1" />
//                           Review
//                         </Button>
//                         <Button size="sm" className="bg-green-600 hover:bg-green-700">
//                           <CheckCircle className="h-4 w-4 mr-1" />
//                           Approve
//                         </Button>
//                         <Button size="sm" variant="destructive">
//                           <XCircle className="h-4 w-4 mr-1" />
//                           Reject
//                         </Button>
//                       </div>
//                     </div>
//                     <div className="mt-4 text-xs text-muted-foreground">
//                       <p>Submitted: {verification.submittedDate}</p>
//                       <p>Documents: {verification.documents.join(', ')}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Institutions Management */}
//           <TabsContent value="institutions" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Institution Management</h2>
//               <Button>
//                 <Plus className="h-4 w-4 mr-2" />
//                 Add Institution
//               </Button>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Institution</TableHead>
//                   <TableHead>Established</TableHead>
//                   <TableHead>Students</TableHead>
//                   <TableHead>Faculty</TableHead>
//                   <TableHead>Courses</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {institutions.map((institution) => (
//                   <TableRow key={institution.id}>
//                     <TableCell className="font-medium">{institution.name}</TableCell>
//                     <TableCell>{institution.established}</TableCell>
//                     <TableCell>{institution.students.toLocaleString()}</TableCell>
//                     <TableCell>{institution.faculty}</TableCell>
//                     <TableCell>{institution.courses}</TableCell>
//                     <TableCell>{getStatusBadge(institution.status)}</TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         <Button size="sm" variant="outline">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>

//           {/* Courses Management */}
//           <TabsContent value="courses" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Course Management</h2>
//               <Button>
//                 <Plus className="h-4 w-4 mr-2" />
//                 Add Course
//               </Button>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Course Name</TableHead>
//                   <TableHead>Duration</TableHead>
//                   <TableHead>Department</TableHead>
//                   <TableHead>Current Students</TableHead>
//                   <TableHead>Alumni</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {courses.map((course) => (
//                   <TableRow key={course.id}>
//                     <TableCell className="font-medium">{course.name}</TableCell>
//                     <TableCell>{course.duration}</TableCell>
//                     <TableCell>{course.department}</TableCell>
//                     <TableCell>{course.students}</TableCell>
//                     <TableCell>{course.alumni}</TableCell>
//                     <TableCell>{getStatusBadge(course.status)}</TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         <Button size="sm" variant="outline">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>

//           {/* Events Management */}
//           <TabsContent value="events" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Event Management</h2>
//               <Button>
//                 <Plus className="h-4 w-4 mr-2" />
//                 Create Event
//               </Button>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Event Name</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Location</TableHead>
//                   <TableHead>Organizer</TableHead>
//                   <TableHead>Attendees</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {events.map((event) => (
//                   <TableRow key={event.id}>
//                     <TableCell className="font-medium">{event.name}</TableCell>
//                     <TableCell>{event.date}</TableCell>
//                     <TableCell>{event.location}</TableCell>
//                     <TableCell>{event.organizer}</TableCell>
//                     <TableCell>{event.attendees}</TableCell>
//                     <TableCell>{getStatusBadge(event.status)}</TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         <Button size="sm" variant="outline">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>

//           {/* Donations Monitoring */}
//           <TabsContent value="donations" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Donation Monitoring</h2>
//               <Button variant="outline">
//                 <BarChart3 className="h-4 w-4 mr-2" />
//                 Generate Report
//               </Button>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Donor</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Purpose</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Method</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {donations.map((donation) => (
//                   <TableRow key={donation.id}>
//                     <TableCell className="font-medium">{donation.donor}</TableCell>
//                     <TableCell>{donation.amount}</TableCell>
//                     <TableCell>{donation.purpose}</TableCell>
//                     <TableCell>{donation.date}</TableCell>
//                     <TableCell>{donation.method}</TableCell>
//                     <TableCell>{getStatusBadge(donation.status)}</TableCell>
//                     <TableCell>
//                       <Button size="sm" variant="outline">
//                         <Eye className="h-4 w-4" />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>

//           {/* Job Postings Management */}
//           <TabsContent value="jobs" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Job Postings Management</h2>
//               <Button variant="outline">
//                 <BarChart3 className="h-4 w-4 mr-2" />
//                 View Analytics
//               </Button>
//             </div>

//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Job Title</TableHead>
//                   <TableHead>Company</TableHead>
//                   <TableHead>Posted By</TableHead>
//                   <TableHead>Applications</TableHead>
//                   <TableHead>Date Posted</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {jobPostings.map((job) => (
//                   <TableRow key={job.id}>
//                     <TableCell className="font-medium">{job.title}</TableCell>
//                     <TableCell>{job.company}</TableCell>
//                     <TableCell>{job.postedBy}</TableCell>
//                     <TableCell>{job.applications}</TableCell>
//                     <TableCell>{job.date}</TableCell>
//                     <TableCell>{getStatusBadge(job.status)}</TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
}

import React, { useState } from 'react';
import { Menu, X, Home, Users, Settings, BarChart3, FileText, Bell, Search, ChevronDown, Badge, PartyPopper,ArrowRight } from 'lucide-react';
import { TabsContent } from '@radix-ui/react-tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('Dashboard');

  const navItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
    // { icon: <Users size={20} />, label: 'Users', path: '/users' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/admin/analytics' },
    { icon: <FileText size={20} />, label: 'Reports', path: '/reports' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeNav === item.label
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                  <Link to="{item.path}"></Link>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">AD</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800">{activeNav}</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">AD</span>
                </div>
                <ChevronDown size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { label: 'Total Users', value: '1,234', change: '+12%', color: 'blue' },
                { label: 'Revenue', value: '$45,678', change: '+8%', color: 'green' },
                { label: 'Active Sessions', value: '892', change: '+23%', color: 'purple' },
                { label: 'Conversion', value: '3.2%', change: '-2%', color: 'orange' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                    <span
                      className={`text-sm font-medium ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
         
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PartyPopper size={20} className="text-purple-600" />
                    Welcome to the Admin Dashboard!
                  </CardTitle>
                  <CardDescription>Manage users, view analytics, and configure settings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Use the sidebar to navigate through different sections of the admin panel. Here you can manage users, monitor site analytics, generate reports, and adjust system settings to ensure smooth operation.
                  </p>
                </CardContent>
              </Card>
              {/* Alumni card Direction*/}
              <Card>
                <CardHeader>
                   <Link to={'/admin/alumnisection'}><CardTitle>ALUMNI SECTION</CardTitle>
                  <ArrowRight /></Link>
                </CardHeader>
              </Card>
              {/* Staff section Direction */}
              <Card>
                <CardHeader>
                  <Link to={'/admin/staffsection'} >
                  <CardTitle>STAFF SECTION</CardTitle> <ArrowRight /></Link>
                </CardHeader>
              </Card>
              {/* Students Section Direction */}
          <Card>
            <CardHeader>
              <Link to={'/admin/studentsection'}>
              <CardTitle>STUDENTS SECTION</CardTitle> <ArrowRight /></Link>
              
            </CardHeader>
          </Card>
           <Card>
            <CardHeader>
              <Link to={'/admin/EventS'}>
              <CardTitle>EVENTS SECTION</CardTitle> <ArrowRight /></Link>
            </CardHeader>
           </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;