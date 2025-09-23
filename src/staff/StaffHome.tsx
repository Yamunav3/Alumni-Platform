// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // import { Textarea } from "@/components/ui/textarea";
// // import StaffNavbar from "@/components/StaffNavbar"
// // import { 
// //   Search, 
// //   Filter, 
// //   Users, 
// //   UserCheck,
// //   Clock,
// //   MessageSquare,
// //   Eye,
// //   Edit,
// //   Trash2,
// //   Plus,
// //   CheckCircle,
// //   XCircle,
// //   AlertTriangle,
// //   BarChart3,
// //   Calendar,
// //   BookOpen,
// //   FileText,
// //   Settings,
// //   Bell,
// //   TrendingUp,
// //   Activity,
// //   Briefcase,
// //   GraduationCap
// // } from "lucide-react";

// // const StaffPortal = () => {
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const activities = [
// //     {
// //       id: 1,
// //       staff: "Dr. John Smith",
// //       action: "Created new course material",
// //       target: "Advanced Algorithms",
// //       timestamp: "2 hours ago",
// //       type: "content"
// //     },
// //     {
// //       id: 2,
// //       staff: "Prof. Lisa Davis",
// //       action: "Moderated forum discussion",
// //       target: "Career Guidance Thread",
// //       timestamp: "4 hours ago",
// //       type: "moderation"
// //     },
// //     {
// //       id: 3,
// //       staff: "Dr. Mike Johnson",
// //       action: "Approved student registration",
// //       target: "Alumni Network",
// //       timestamp: "6 hours ago",
// //       type: "approval"
// //     },
// //     {
// //       id: 4,
// //       staff: "Prof. Sarah Chen",
// //       action: "Updated course curriculum",
// //       target: "Data Science Program",
// //       timestamp: "1 day ago",
// //       type: "content"
// //     }
// //   ];

// //   const feedbackQueue = [
// //     {
// //       id: 1,
// //       type: "Alumni Feedback",
// //       author: "John Doe (2020)",
// //       subject: "Suggestion for networking events",
// //       content: "I think we should have more industry-specific networking events...",
// //       sentiment: "positive",
// //       priority: "medium",
// //       submittedDate: "Dec 11, 2024",
// //       status: "pending"
// //     },
// //     {
// //       id: 2,
// //       type: "Student Feedback",
// //       author: "Jane Smith",
// //       subject: "Course content outdated",
// //       content: "The web development course materials need updating...",
// //       sentiment: "negative",
// //       priority: "high",
// //       submittedDate: "Dec 10, 2024",
// //       status: "in_progress"
// //     },
// //     {
// //       id: 3,
// //       type: "General Feedback",
// //       author: "Anonymous",
// //       subject: "Website usability",
// //       content: "The alumni portal is very user-friendly and helpful...",
// //       sentiment: "positive",
// //       priority: "low",
// //       submittedDate: "Dec 9, 2024",
// //       status: "resolved"
// //     }
// //   ];

// //   const staffMembers = [
// //     {
// //       id: 1,
// //       name: "Dr. Robert Thompson",
// //       email: "r.thompson@university.edu",
// //       department: "Engineering",
// //       position: "Department Head",
// //       joinDate: "Jan 2020",
// //       courses: 3,
// //       students: 150,
// //       status: "active",
// //       lastActive: "Online now"
// //     },
// //     {
// //       id: 2,
// //       name: "Prof. Jennifer Liu",
// //       email: "j.liu@university.edu",
// //       department: "Business",
// //       position: "Professor",
// //       joinDate: "Mar 2019",
// //       courses: 2,
// //       students: 120,
// //       status: "active",
// //       lastActive: "2 hours ago"
// //     },
// //     {
// //       id: 3,
// //       name: "Dr. Marcus Williams",
// //       email: "m.williams@university.edu",
// //       department: "Arts & Sciences",
// //       position: "Associate Professor",
// //       joinDate: "Sep 2021",
// //       courses: 4,
// //       students: 200,
// //       status: "inactive",
// //       lastActive: "1 week ago"
// //     }
// //   ];

// //   const getSentimentColor = (sentiment: string) => {
// //     switch (sentiment) {
// //       case "positive":
// //         return "text-green-600 bg-green-100";
// //       case "negative":
// //         return "text-red-600 bg-red-100";
// //       case "neutral":
// //         return "text-gray-600 bg-gray-100";
// //       default:
// //         return "text-gray-600 bg-gray-100";
// //     }
// //   };

// //   const getPriorityColor = (priority: string) => {
// //     switch (priority) {
// //       case "high":
// //         return "text-red-600 bg-red-100";
// //       case "medium":
// //         return "text-yellow-600 bg-yellow-100";
// //       case "low":
// //         return "text-green-600 bg-green-100";
// //       default:
// //         return "text-gray-600 bg-gray-100";
// //     }
// //   };

// //   const getStatusBadge = (status: string) => {
// //     switch (status) {
// //       case "active":
// //       case "approved":
// //       case "resolved":
// //         return <Badge className="bg-green-100 text-green-800">Active</Badge>;
// //       case "pending":
// //         return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
// //       case "inactive":
// //         return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
// //       case "under_review":
// //       case "in_progress":
// //         return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
// //       default:
// //         return <Badge variant="outline">{status}</Badge>;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Header */}
// //       <StaffNavbar/>
// //       <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl font-bold text-foreground mb-4">Staff Portal</h1>
// //             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //               Manage activities, moderate content, and oversee academic operations
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         <Tabs defaultValue="activities" className="w-full">
// //           <TabsList className="grid w-full grid-cols-3">
// //             <TabsTrigger value="activities">Activities</TabsTrigger>
// //             <TabsTrigger value="feedback">Feedback</TabsTrigger>
// //             <TabsTrigger value="staff">Staff Management</TabsTrigger>
// //           </TabsList>

// //           {/* Activity Monitoring */}
// //           <TabsContent value="activities" className="space-y-6">
// //             <div className="flex items-center justify-between">
// //               <h2 className="text-2xl font-semibold">Activity Monitoring</h2>
// //               <div className="flex space-x-2">
// //                 <Button variant="outline">
// //                   <Calendar className="h-4 w-4 mr-2" />
// //                   Date Range
// //                 </Button>
// //                 <Button variant="outline">
// //                   <BarChart3 className="h-4 w-4 mr-2" />
// //                   Export Report
// //                 </Button>
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               {activities.map((activity) => (
// //                 <Card key={activity.id}>
// //                   <CardContent className="pt-6">
// //                     <div className="flex items-start justify-between">
// //                       <div className="flex items-start space-x-4">
// //                         <div className="flex-shrink-0 mt-1">
// //                           {activity.type === 'content' && <BookOpen className="h-5 w-5 text-blue-600" />}
// //                           {activity.type === 'moderation' && <MessageSquare className="h-5 w-5 text-yellow-600" />}
// //                           {activity.type === 'approval' && <CheckCircle className="h-5 w-5 text-green-600" />}
// //                         </div>
// //                         <div>
// //                           <h3 className="font-semibold">{activity.staff}</h3>
// //                           <p className="text-sm text-muted-foreground">{activity.action}</p>
// //                           <p className="text-sm font-medium text-primary">{activity.target}</p>
// //                         </div>
// //                       </div>
// //                       <div className="text-right">
// //                         <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
// //                         <Badge variant="outline" className="mt-1 capitalize">
// //                           {activity.type}
// //                         </Badge>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </TabsContent>

// //           {/* Feedback Moderation */}
// //           <TabsContent value="feedback" className="space-y-6">
// //             <div className="flex items-center justify-between">
// //               <h2 className="text-2xl font-semibold">Feedback Moderation</h2>
// //               <div className="flex space-x-2">
// //                 <Button variant="outline">
// //                   <Filter className="h-4 w-4 mr-2" />
// //                   Filter by Priority
// //                 </Button>
// //                 <Button>
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Manual Entry
// //                 </Button>
// //               </div>
// //             </div>

// //             <div className="space-y-4">
// //               {feedbackQueue.map((feedback) => (
// //                 <Card key={feedback.id}>
// //                   <CardContent className="pt-6">
// //                     <div className="flex items-start justify-between mb-4">
// //                       <div className="flex-1">
// //                         <div className="flex items-center space-x-2 mb-2">
// //                           <h3 className="font-semibold">{feedback.subject}</h3>
// //                           <Badge variant="outline">{feedback.type}</Badge>
// //                         </div>
// //                         <p className="text-sm text-muted-foreground mb-2">
// //                           by {feedback.author} • {feedback.submittedDate}
// //                         </p>
// //                         <p className="text-sm">{feedback.content}</p>
// //                       </div>
// //                       <div className="flex flex-col space-y-2 ml-4">
// //                         <Badge className={getPriorityColor(feedback.priority)}>
// //                           {feedback.priority}
// //                         </Badge>
// //                         <Badge className={getSentimentColor(feedback.sentiment)}>
// //                           {feedback.sentiment}
// //                         </Badge>
// //                         {getStatusBadge(feedback.status)}
// //                       </div>
// //                     </div>
// //                     <div className="flex space-x-2">
// //                       <Button size="sm" variant="outline">
// //                         <Eye className="h-4 w-4 mr-1" />
// //                         View Details
// //                       </Button>
// //                       <Button size="sm" variant="outline">
// //                         <MessageSquare className="h-4 w-4 mr-1" />
// //                         Respond
// //                       </Button>
// //                       <Button size="sm">
// //                         <CheckCircle className="h-4 w-4 mr-1" />
// //                         Mark Resolved
// //                       </Button>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </TabsContent>

// //           {/* Staff Management */}
// //           <TabsContent value="staff" className="space-y-6">
// //             <div className="flex items-center justify-between">
// //               <h2 className="text-2xl font-semibold">Staff Management</h2>
// //               <div className="flex space-x-2">
// //                 <div className="relative">
// //                   <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
// //                   <Input
// //                     placeholder="Search staff..."
// //                     value={searchQuery}
// //                     onChange={(e) => setSearchQuery(e.target.value)}
// //                     className="pl-10"
// //                   />
// //                 </div>
// //                 {/* <Button>
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Add Staff
// //                 </Button> */}
// //               </div>
// //             </div>

// //             <Card>
// //               <Table>
// //                 <TableHeader>
// //                   <TableRow>
// //                     <TableHead>Staff Member</TableHead>
// //                     <TableHead>Department</TableHead>
// //                     <TableHead>Position</TableHead>
// //                     <TableHead>Courses</TableHead>
// //                     <TableHead>Students</TableHead>
// //                     <TableHead>Status</TableHead>
// //                     <TableHead>Actions</TableHead>
// //                   </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                   {staffMembers.map((staff) => (
// //                     <TableRow key={staff.id}>
// //                       <TableCell>
// //                         <div className="flex items-center space-x-3">
// //                           <Avatar>
// //                             <AvatarFallback>{staff.name.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
// //                           </Avatar>
// //                           <div>
// //                             <p className="font-medium">{staff.name}</p>
// //                             <p className="text-sm text-muted-foreground">{staff.email}</p>
// //                           </div>
// //                         </div>
// //                       </TableCell>
// //                       <TableCell>{staff.department}</TableCell>
// //                       <TableCell>{staff.position}</TableCell>
// //                       <TableCell>{staff.courses}</TableCell>
// //                       <TableCell>{staff.students}</TableCell>
// //                       <TableCell>{getStatusBadge(staff.status)}</TableCell>
// //                       <TableCell>
// //                         <div className="flex space-x-2">
// //                           <Button size="sm" variant="outline">
// //                             <Eye className="h-4 w-4" />
// //                           </Button>
// //                           <Button size="sm" variant="outline">
// //                             <Edit className="h-4 w-4" />
// //                           </Button>
// //                           <Button size="sm" variant="outline">
// //                             <Trash2 className="h-4 w-4" />
// //                           </Button>
// //                         </div>
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </Card>
// //           </TabsContent>
// //         </Tabs>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StaffPortal;





// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Textarea } from "@/components/ui/textarea";
// import StaffNavbar from "@/components/StaffNavbar";
// import { 
//   Search, 
//   Filter, 
//   Users, 
//   UserCheck,
//   Clock,
//   MessageSquare,
//   Eye,
//   Edit,
//   Trash2,
//   Plus,
//   CheckCircle,
//   XCircle,
//   AlertTriangle,
//   BarChart3,
//   Calendar,
//   BookOpen,
//   FileText,
//   Settings,
//   Bell,
//   TrendingUp,
//   Activity,
//   Briefcase,
//   GraduationCap,
//   Send,
//   Star,
//   MapPin,
//   Award,
//   Building,
//   Phone,
//   Mail,
//   ExternalLink,
//   UserPlus
// } from "lucide-react";

// const StaffPortal = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedStudent, setSelectedStudent] = useState<any>(null);
//   const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

//   // Dummy data for activities and feedbackQueue
//   const activities = [
//     {
//       id: 1,
//       staff: "Dr. John Smith",
//       action: "Created new course material",
//       target: "Advanced Algorithms",
//       timestamp: "2 hours ago",
//       type: "content"
//     },
//     {
//       id: 2,
//       staff: "Prof. Lisa Davis",
//       action: "Moderated forum discussion",
//       target: "Career Guidance Thread",
//       timestamp: "4 hours ago",
//       type: "moderation"
//     },
//     {
//       id: 3,
//       staff: "Dr. Mike Johnson",
//       action: "Approved student registration",
//       target: "Alumni Network",
//       timestamp: "6 hours ago",
//       type: "approval"
//     },
//     {
//       id: 4,
//       staff: "Prof. Sarah Chen",
//       action: "Updated course curriculum",
//       target: "Data Science Program",
//       timestamp: "1 day ago",
//       type: "content"
//     }
//   ];

//   const feedbackQueue = [
//     {
//       id: 1,
//       type: "Alumni Feedback",
//       author: "John Doe (2020)",
//       subject: "Suggestion for networking events",
//       content: "I think we should have more industry-specific networking events...",
//       sentiment: "positive",
//       priority: "medium",
//       submittedDate: "Dec 11, 2024",
//       status: "pending"
//     },
//     {
//       id: 2,
//       type: "Student Feedback",
//       author: "Jane Smith",
//       subject: "Course content outdated",
//       content: "The web development course materials need updating...",
//       sentiment: "negative",
//       priority: "high",
//       submittedDate: "Dec 10, 2024",
//       status: "in_progress"
//     },
//     {
//       id: 3,
//       type: "General Feedback",
//       author: "Anonymous",
//       subject: "Website usability",
//       content: "The alumni portal is very user-friendly and helpful...",
//       sentiment: "positive",
//       priority: "low",
//       submittedDate: "Dec 9, 2024",
//       status: "resolved"
//     }
//   ];

//   // New dummy data for students
//   const students = [
//     {
//       id: 1,
//       name: "Alice Johnson",
//       email: "alice.johnson@student.edu",
//       studentId: "CS001",
//       major: "Computer Science",
//       year: "Final Year",
//       gpa: 3.8,
//       skills: ["React", "Python", "Machine Learning", "JavaScript"],
//       interests: ["AI/ML", "Web Development", "Data Science"],
//       portfolio: "https://alice-portfolio.com",
//       resume: "alice_resume.pdf",
//       status: "Seeking Internship",
//       projects: [
//         { name: "E-commerce Platform", tech: "React, Node.js", description: "Full-stack web application" },
//         { name: "ML Prediction Model", tech: "Python, TensorFlow", description: "Stock price prediction" }
//       ],
//       mentorshipStatus: "Available",
//       lastActive: "2 hours ago"
//     },
//     {
//       id: 2,
//       name: "Bob Chen",
//       email: "bob.chen@student.edu",
//       studentId: "EE002",
//       major: "Electrical Engineering",
//       year: "3rd Year",
//       gpa: 3.6,
//       skills: ["C++", "MATLAB", "Circuit Design", "Embedded Systems"],
//       interests: ["IoT", "Robotics", "Hardware Design"],
//       portfolio: "https://bob-projects.com",
//       resume: "bob_resume.pdf",
//       status: "Open to Work",
//       projects: [
//         { name: "Smart Home System", tech: "Arduino, IoT", description: "Automated home control" },
//         { name: "Robot Navigation", tech: "C++, Sensors", description: "Autonomous navigation system" }
//       ],
//       mentorshipStatus: "In Mentorship",
//       lastActive: "1 day ago"
//     },
//     {
//       id: 3,
//       name: "Carol Davis",
//       email: "carol.davis@student.edu",
//       studentId: "BM003",
//       major: "Business Management",
//       year: "2nd Year", 
//       gpa: 3.9,
//       skills: ["Business Analysis", "Project Management", "Marketing", "Finance"],
//       interests: ["Consulting", "Marketing", "Entrepreneurship"],
//       portfolio: "https://carol-business.com",
//       resume: "carol_resume.pdf",
//       status: "Seeking Mentorship",
//       projects: [
//         { name: "Market Research Study", tech: "Analytics, Excel", description: "Consumer behavior analysis" },
//         { name: "Startup Business Plan", tech: "Financial Modeling", description: "Tech startup proposal" }
//       ],
//       mentorshipStatus: "Available",
//       lastActive: "5 hours ago"
//     }
//   ];

//   // Alumni opportunities data
//   const opportunities = [
//     {
//       id: 1,
//       title: "Software Engineering Intern",
//       company: "TechCorp Inc.",
//       alumniContact: "Michael Zhang (2018)",
//       alumniEmail: "m.zhang@techcorp.com",
//       description: "Summer internship program for computer science students",
//       requirements: ["React", "Node.js", "Git", "Team player"],
//       location: "San Francisco, CA",
//       type: "Internship",
//       duration: "3 months",
//       stipend: "$2000/month",
//       deadline: "Jan 15, 2025",
//       status: "Open",
//       applicants: 12,
//       matchedStudents: ["Alice Johnson", "Bob Chen"],
//       postedDate: "Dec 1, 2024"
//     },
//     {
//       id: 2,
//       title: "Marketing Mentorship Program",
//       company: "Global Marketing Solutions",
//       alumniContact: "Sarah Williams (2017)",
//       alumniEmail: "s.williams@globalmkt.com",
//       description: "One-on-one mentorship for business students interested in marketing",
//       requirements: ["Interest in marketing", "Communication skills", "Analytical thinking"],
//       location: "Remote",
//       type: "Mentorship",
//       duration: "6 months",
//       stipend: "Unpaid",
//       deadline: "Dec 31, 2024",
//       status: "Open",
//       applicants: 8,
//       matchedStudents: ["Carol Davis"],
//       postedDate: "Nov 28, 2024"
//     },
//     {
//       id: 3,
//       title: "Data Science Fellowship",
//       company: "DataTech Analytics",
//       alumniContact: "David Kim (2019)",
//       alumniEmail: "d.kim@datatech.com",
//       description: "Full-time fellowship program with project-based learning",
//       requirements: ["Python", "Machine Learning", "Statistics", "Research experience"],
//       location: "Austin, TX",
//       type: "Fellowship",
//       duration: "12 months",
//       stipend: "$3500/month",
//       deadline: "Jan 30, 2025",
//       status: "Open",
//       applicants: 6,
//       matchedStudents: ["Alice Johnson"],
//       postedDate: "Dec 5, 2024"
//     }
//   ];

//   const staffMembers = [
//     {
//       id: 1,
//       name: "Dr. Robert Thompson",
//       email: "r.thompson@university.edu",
//       department: "Engineering",
//       position: "Department Head",
//       joinDate: "Jan 2020",
//       courses: 3,
//       students: 150,
//       status: "active",
//       lastActive: "Online now"
//     },
//     {
//       id: 2,
//       name: "Prof. Jennifer Liu",
//       email: "j.liu@university.edu",
//       department: "Business",
//       position: "Professor",
//       joinDate: "Mar 2019",
//       courses: 2,
//       students: 120,
//       status: "active",
//       lastActive: "2 hours ago"
//     },
//     {
//       id: 3,
//       name: "Dr. Marcus Williams",
//       email: "m.williams@university.edu",
//       department: "Arts & Sciences",
//       position: "Associate Professor",
//       joinDate: "Sep 2021",
//       courses: 4,
//       students: 200,
//       status: "inactive",
//       lastActive: "1 week ago"
//     }
//   ];

//   const getSentimentColor = (sentiment: string) => {
//     switch (sentiment) {
//       case "positive":
//         return "text-green-600 bg-green-100";
//       case "negative":
//         return "text-red-600 bg-red-100";
//       case "neutral":
//         return "text-gray-600 bg-gray-100";
//       default:
//         return "text-gray-600 bg-gray-100";
//     }
//   };

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "high":
//         return "text-red-600 bg-red-100";
//       case "medium":
//         return "text-yellow-600 bg-yellow-100";
//       case "low":
//         return "text-green-600 bg-green-100";
//       default:
//         return "text-gray-600 bg-gray-100";
//     }
//   };

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "active":
//       case "approved":
//       case "resolved":
//       case "Open":
//         return <Badge className="bg-green-100 text-green-800">Active</Badge>;
//       case "pending":
//       case "Seeking Internship":
//       case "Seeking Mentorship":
//         return <Badge className="bg-yellow-100 text-yellow-800">Seeking</Badge>;
//       case "inactive":
//         return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
//       case "under_review":
//       case "in_progress":
//       case "In Mentorship":
//         return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
//       case "Open to Work":
//         return <Badge className="bg-purple-100 text-purple-800">Available</Badge>;
//       default:
//         return <Badge variant="outline">{status}</Badge>;
//     }
//   };

//   const recommendStudent = (studentId: number, opportunityId: number) => {
//     // Mock function - in real app would make API call
//     console.log(`Recommending student ${studentId} for opportunity ${opportunityId}`);
//   };

//   const contactAlumni = (alumniEmail: string, opportunityId: number) => {
//     // Mock function - in real app would open email client or messaging system
//     console.log(`Contacting alumni ${alumniEmail} for opportunity ${opportunityId}`);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <StaffNavbar/>
//       <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-foreground mb-4">Staff Portal</h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Manage activities, moderate content, and oversee academic operations
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Tabs defaultValue="students" className="w-full">
//           <TabsList className="grid w-full grid-cols-5">
//             <TabsTrigger value="students">Students</TabsTrigger>
//             <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
//             <TabsTrigger value="activities">Activities</TabsTrigger>
//             <TabsTrigger value="feedback">Feedback</TabsTrigger>
//             <TabsTrigger value="staff">Staff</TabsTrigger>
//           </TabsList>

//           {/* Student Management */}
//           <TabsContent value="students" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Student Profiles</h2>
//               <div className="flex space-x-2">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     placeholder="Search students..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//                 <Button variant="outline">
//                   <Filter className="h-4 w-4 mr-2" />
//                   Filter by Major
//                 </Button>
//               </div>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {students.map((student) => (
//                 <Card key={student.id} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center space-x-3">
//                         <Avatar>
//                           <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <CardTitle className="text-lg">{student.name}</CardTitle>
//                           <CardDescription>{student.major} • {student.year}</CardDescription>
//                         </div>
//                       </div>
//                       {getStatusBadge(student.status)}
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-muted-foreground">GPA:</span>
//                       <span className="font-medium">{student.gpa}</span>
//                     </div>
                    
//                     <div>
//                       <p className="text-sm font-medium mb-2">Skills:</p>
//                       <div className="flex flex-wrap gap-1">
//                         {student.skills.slice(0, 3).map((skill) => (
//                           <Badge key={skill} variant="outline" className="text-xs">
//                             {skill}
//                           </Badge>
//                         ))}
//                         {student.skills.length > 3 && (
//                           <Badge variant="outline" className="text-xs">
//                             +{student.skills.length - 3} more
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     <div>
//                       <p className="text-sm font-medium mb-2">Interests:</p>
//                       <div className="flex flex-wrap gap-1">
//                         {student.interests.map((interest) => (
//                           <Badge key={interest} variant="secondary" className="text-xs">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex space-x-2 pt-2">
//                       <Button size="sm" variant="outline" className="flex-1">
//                         <Eye className="h-4 w-4 mr-1" />
//                         View Profile
//                       </Button>
//                       <Button size="sm" className="flex-1">
//                         <UserPlus className="h-4 w-4 mr-1" />
//                         Recommend
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Opportunities Management */}
//           <TabsContent value="opportunities" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Alumni Opportunities</h2>
//               <div className="flex space-x-2">
//                 <Button variant="outline">
//                   <Filter className="h-4 w-4 mr-2" />
//                   Filter by Type
//                 </Button>
//                 <Button>
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add Opportunity
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {opportunities.map((opportunity) => (
//                 <Card key={opportunity.id}>
//                   <CardContent className="pt-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <h3 className="text-lg font-semibold">{opportunity.title}</h3>
//                           <Badge variant="outline">{opportunity.type}</Badge>
//                           {getStatusBadge(opportunity.status)}
//                         </div>
//                         <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
//                           <span className="flex items-center">
//                             <Building className="h-4 w-4 mr-1" />
//                             {opportunity.company}
//                           </span>
//                           <span className="flex items-center">
//                             <MapPin className="h-4 w-4 mr-1" />
//                             {opportunity.location}
//                           </span>
//                           <span className="flex items-center">
//                             <Clock className="h-4 w-4 mr-1" />
//                             {opportunity.duration}
//                           </span>
//                         </div>
//                         <p className="text-sm mb-3">{opportunity.description}</p>
                        
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <p className="text-sm font-medium mb-1">Requirements:</p>
//                             <div className="flex flex-wrap gap-1">
//                               {opportunity.requirements.map((req) => (
//                                 <Badge key={req} variant="outline" className="text-xs">
//                                   {req}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium mb-1">Matched Students:</p>
//                             <div className="flex flex-wrap gap-1">
//                               {opportunity.matchedStudents.map((student) => (
//                                 <Badge key={student} variant="secondary" className="text-xs">
//                                   {student}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="ml-4 text-right">
//                         <p className="text-sm text-muted-foreground mb-1">Alumni Contact</p>
//                         <p className="font-medium text-sm">{opportunity.alumniContact}</p>
//                         <p className="text-xs text-muted-foreground">{opportunity.alumniEmail}</p>
//                         <div className="mt-2">
//                           <Badge className="bg-blue-100 text-blue-800">
//                             {opportunity.applicants} applicants
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex space-x-2 pt-4 border-t">
//                       <Button size="sm" variant="outline">
//                         <Eye className="h-4 w-4 mr-1" />
//                         View Details
//                       </Button>
//                       <Button 
//                         size="sm" 
//                         variant="outline"
//                         onClick={() => contactAlumni(opportunity.alumniEmail, opportunity.id)}
//                       >
//                         <Mail className="h-4 w-4 mr-1" />
//                         Contact Alumni
//                       </Button>
//                       <Button size="sm">
//                         <Send className="h-4 w-4 mr-1" />
//                         Recommend Students
//                       </Button>
//                       <Button size="sm" variant="outline">
//                         <Edit className="h-4 w-4 mr-1" />
//                         Edit
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Activities Management */}
//           <TabsContent value="activities" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Activity Monitoring</h2>
//               <div className="flex space-x-2">
//                 <Button variant="outline">
//                   <Calendar className="h-4 w-4 mr-2" />
//                   Date Range
//                 </Button>
//                 <Button variant="outline">
//                   <BarChart3 className="h-4 w-4 mr-2" />
//                   Export Report
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {activities.map((activity) => (
//                 <Card key={activity.id}>
//                   <CardContent className="pt-6">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-start space-x-4">
//                         <div className="flex-shrink-0 mt-1">
//                           {activity.type === 'content' && <BookOpen className="h-5 w-5 text-blue-600" />}
//                           {activity.type === 'moderation' && <MessageSquare className="h-5 w-5 text-yellow-600" />}
//                           {activity.type === 'approval' && <CheckCircle className="h-5 w-5 text-green-600" />}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">{activity.staff}</h3>
//                           <p className="text-sm text-muted-foreground">{activity.action}</p>
//                           <p className="text-sm font-medium text-primary">{activity.target}</p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
//                         <Badge variant="outline" className="mt-1 capitalize">
//                           {activity.type}
//                         </Badge>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="feedback" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Feedback Moderation</h2>
//               <div className="flex space-x-2">
//                 <Button variant="outline">
//                   <Filter className="h-4 w-4 mr-2" />
//                   Filter by Priority
//                 </Button>
//                 <Button>
//                   <Plus className="h-4 w-4 mr-2" />
//                   Manual Entry
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {feedbackQueue.map((feedback) => (
//                 <Card key={feedback.id}>
//                   <CardContent className="pt-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-2 mb-2">
//                           <h3 className="font-semibold">{feedback.subject}</h3>
//                           <Badge variant="outline">{feedback.type}</Badge>
//                         </div>
//                         <p className="text-sm text-muted-foreground mb-2">
//                           by {feedback.author} • {feedback.submittedDate}
//                         </p>
//                         <p className="text-sm">{feedback.content}</p>
//                       </div>
//                       <div className="flex flex-col space-y-2 ml-4">
//                         <Badge className={getPriorityColor(feedback.priority)}>
//                           {feedback.priority}
//                         </Badge>
//                         <Badge className={getSentimentColor(feedback.sentiment)}>
//                           {feedback.sentiment}
//                         </Badge>
//                         {getStatusBadge(feedback.status)}
//                       </div>
//                     </div>
//                     <div className="flex space-x-2">
//                       <Button size="sm" variant="outline">
//                         <Eye className="h-4 w-4 mr-1" />
//                         View Details
//                       </Button>
//                       <Button size="sm" variant="outline">
//                         <MessageSquare className="h-4 w-4 mr-1" />
//                         Respond
//                       </Button>
//                       <Button size="sm">
//                         <CheckCircle className="h-4 w-4 mr-1" />
//                         Mark Resolved
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="staff" className="space-y-6">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold">Staff Management</h2>
//               <div className="flex space-x-2">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     placeholder="Search staff..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//               </div>
//             </div>

//             <Card>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Staff Member</TableHead>
//                     <TableHead>Department</TableHead>
//                     <TableHead>Position</TableHead>
//                     <TableHead>Courses</TableHead>
//                     <TableHead>Students</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {staffMembers.map((staff) => (
//                     <TableRow key={staff.id}>
//                       <TableCell>
//                         <div className="flex items-center space-x-3">
//                           <Avatar>
//                             <AvatarFallback>{staff.name.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <p className="font-medium">{staff.name}</p>
//                             <p className="text-sm text-muted-foreground">{staff.email}</p>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell>{staff.department}</TableCell>
//                       <TableCell>{staff.position}</TableCell>
//                       <TableCell>{staff.courses}</TableCell>
//                       <TableCell>{staff.students}</TableCell>
//                       <TableCell>{getStatusBadge(staff.status)}</TableCell>
//                       <TableCell>
//                         <div className="flex space-x-2">
//                           <Button size="sm" variant="outline">
//                             <Eye className="h-4 w-4" />
//                           </Button>
//                           <Button size="sm" variant="outline">
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button size="sm" variant="outline">
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default StaffPortal;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StaffNavbar from "@/components/StaffNavbar";
import StudentProfileModal from "./StudentProfileModel";
import RecommendStudentModal from "./RecommendStudentModel";
import OpportunityDetailsModal from "./OpportunityDetailsModel";
import RecommendedStudentsList from "./RecommendedStudentsList";
import ChatModal from "./ChatModel";
import FeedbackDetailsModal from "./FeedbackDetailsForm";
import { 
  Search, 
  Filter, 
  Users, 
  UserCheck,
  Clock,
  MessageSquare,
  Eye,
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
  GraduationCap,
  Send,
  Star,
  MapPin,
  Award,
  Building,
  Phone,
  Mail,
  ExternalLink,
  UserPlus
} from "lucide-react";
import { students, opportunities, activities, feedbackQueue, staffMembers } from "./data/staffData";

const StaffPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  const [showRecommendModal, setShowRecommendModal] = useState(false);
  const [showOpportunityDetails, setShowOpportunityDetails] = useState(false);
  const [showRecommendedStudents, setShowRecommendedStudents] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showFeedbackDetails, setShowFeedbackDetails] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  const [chatWith, setChatWith] = useState<any>(null);
  const [opportunityFilter, setOpportunityFilter] = useState("all");
  const [feedbackStatuses, setFeedbackStatuses] = useState<{[key: number]: string}>({});

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

  const getStatusBadge = (status: string, feedbackId?: number) => {
    const resolvedStatus = feedbackId && feedbackStatuses[feedbackId] ? feedbackStatuses[feedbackId] : status;
    
    switch (resolvedStatus) {
      case "active":
      case "approved":
      case "resolved":
      case "Open":
        return <Badge className="bg-green-100 text-green-800">{resolvedStatus === "resolved" ? "Resolved" : "Active"}</Badge>;
      case "pending":
      case "Seeking Internship":
      case "Seeking Mentorship":
        return <Badge className="bg-yellow-100 text-yellow-800">Seeking</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "under_review":
      case "in_progress":
      case "In Mentorship":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "Open to Work":
        return <Badge className="bg-purple-100 text-purple-800">Available</Badge>;
      default:
        return <Badge variant="outline">{resolvedStatus}</Badge>;
    }
  };

  const handleViewProfile = (student: any) => {
    setSelectedStudent(student);
    setShowStudentProfile(true);
  };

  const handleRecommendStudent = (student: any) => {
    setSelectedStudent(student);
    setShowRecommendModal(true);
  };

  const handleViewOpportunityDetails = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setShowOpportunityDetails(true);
  };

  const handleRecommendStudents = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setShowRecommendedStudents(true);
  };

  const handleContactAlumni = (alumniEmail: string, alumniName: string) => {
    setChatWith({ email: alumniEmail, name: alumniName, type: 'alumni' });
    setShowChat(true);
  };

  const handleMarkResolved = (feedbackId: number) => {
    setFeedbackStatuses(prev => ({
      ...prev,
      [feedbackId]: 'resolved'
    }));
  };

  const handleViewFeedbackDetails = (feedback: any) => {
    setSelectedFeedback(feedback);
    setShowFeedbackDetails(true);
  };

  const handleRespondToFeedback = (feedback: any) => {
    setChatWith({ 
      email: feedback.authorEmail || `${feedback.author.toLowerCase().replace(' ', '.')}@email.com`, 
      name: feedback.author, 
      type: feedback.type.includes('Alumni') ? 'alumni' : 'student' 
    });
    setShowChat(true);
  };

  const filteredOpportunities = opportunityFilter === "all" 
    ? opportunities 
    : opportunities.filter(opp => opp.type.toLowerCase() === opportunityFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
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
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
          </TabsList>

          {/* Student Management */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Student Profiles</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Major
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {students.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{student.name}</CardTitle>
                          <CardDescription>{student.major} • {student.year}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(student.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">GPA:</span>
                      <span className="font-medium">{student.gpa}</span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {student.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{student.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Interests:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.interests.map((interest) => (
                          <Badge key={interest} variant="secondary" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleViewProfile(student)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Profile
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleRecommendStudent(student)}
                      >
                        <UserPlus className="h-4 w-4 mr-1" />
                        Recommend
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Opportunities Management */}
          <TabsContent value="opportunities" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Alumni Opportunities</h2>
              <div className="flex space-x-2">
                <select 
                  value={opportunityFilter} 
                  onChange={(e) => setOpportunityFilter(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="internship">Internships</option>
                  <option value="job">Jobs</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="fellowship">Fellowship</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredOpportunities.map((opportunity) => (
                <Card key={opportunity.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{opportunity.title}</h3>
                          <Badge variant="outline">{opportunity.type}</Badge>
                          {getStatusBadge(opportunity.status)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {opportunity.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {opportunity.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {opportunity.duration}
                          </span>
                        </div>
                        <p className="text-sm mb-3">{opportunity.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium mb-1">Requirements:</p>
                            <div className="flex flex-wrap gap-1">
                              {opportunity.requirements.map((req) => (
                                <Badge key={req} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Matched Students:</p>
                            <div className="flex flex-wrap gap-1">
                              {opportunity.matchedStudents.map((student) => (
                                <Badge key={student} variant="secondary" className="text-xs">
                                  {student}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-4 text-right">
                        <p className="text-sm text-muted-foreground mb-1">Alumni Contact</p>
                        <p className="font-medium text-sm">{opportunity.alumniContact}</p>
                        <p className="text-xs text-muted-foreground">{opportunity.alumniEmail}</p>
                        <div className="mt-2">
                          <Badge className="bg-blue-100 text-blue-800">
                            {opportunity.applicants} applicants
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewOpportunityDetails(opportunity)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleContactAlumni(opportunity.alumniEmail, opportunity.alumniContact)}
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Contact Alumni
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleRecommendStudents(opportunity)}
                      >
                        <Send className="h-4 w-4 mr-1" />
                        Recommend Students
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Management */}
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

          {/* Feedback Management */}
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
                        {getStatusBadge(feedback.status, feedback.id)}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewFeedbackDetails(feedback)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleRespondToFeedback(feedback)}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Respond
                      </Button>
                      <Button 
                        size="sm"
                        variant={feedbackStatuses[feedback.id] === 'resolved' ? "default" : "default"}
                        className={feedbackStatuses[feedback.id] === 'resolved' ? "bg-green-600 hover:bg-green-700" : ""}
                        onClick={() => handleMarkResolved(feedback.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {feedbackStatuses[feedback.id] === 'resolved' ? "Resolved" : "Mark Resolved"}
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

      {/* Modals */}
      <StudentProfileModal 
        student={selectedStudent}
        isOpen={showStudentProfile}
        onClose={() => setShowStudentProfile(false)}
      />
      
      <RecommendStudentModal 
        student={selectedStudent}
        opportunities={opportunities}
        isOpen={showRecommendModal}
        onClose={() => setShowRecommendModal(false)}
      />
      
      <OpportunityDetailsModal 
        opportunity={selectedOpportunity}
        isOpen={showOpportunityDetails}
        onClose={() => setShowOpportunityDetails(false)}
      />
      
      <RecommendedStudentsList 
        opportunity={selectedOpportunity}
        isOpen={showRecommendedStudents}
        onClose={() => setShowRecommendedStudents(false)}
      />
      
      <ChatModal 
        chatWith={chatWith}
        isOpen={showChat}
        onClose={() => setShowChat(false)}
      />
      
      <FeedbackDetailsModal 
        feedback={selectedFeedback}
        isOpen={showFeedbackDetails}
        onClose={() => setShowFeedbackDetails(false)}
      />
    </div>
  );
};

export default StaffPortal;