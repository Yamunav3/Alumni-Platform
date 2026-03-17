import { useState,useEffect } from "react";
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

import RecommendedStudentsList from "./RecommendedStudentsList";
import ChatModal from "./ChatModel";
import FeedbackDetailsModal from "./FeedbackDetailsForm";
import { 
  Search, 
  Filter, 
  MessageSquare,
  Eye,
  Trash2,
  Plus,
  CheckCircle,
  BarChart3,
  Calendar,
  BookOpen,
  UserPlus
} from "lucide-react";
import { students, opportunities, activities, feedbackQueue, staffMembers } from "./data/staffData";
import { get } from "react-hook-form";
import { getAllStudents , getStaffDetails , getSuggestions} from "@/api/staffapi";

interface Student{
  id:number;
  username:string;
  email:string;
  collegeID:string;
  mobilenumber:number;
  interests:string[];
  yearofpassing:number;
  workingcompany:string;
 jobrole:string;
  branch:string;
  github:string;
  linkedin:string;
  fullname:string;
}

interface Staff{
  id:number;
  fullname:string;
  email:string;
  branch:string;
  jobrole:string;
  // courses:string[];
  // students:number;
  // status:string;
}

interface Suggestions{
  id:number;
  student_name:string;
  title:string;
  submittedAt:string;
  content:string;

} 

const StaffPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  const [showRecommendModal, setShowRecommendModal] = useState(false);
  const [showRecommendedStudents, setShowRecommendedStudents] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showFeedbackDetails, setShowFeedbackDetails] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  const [chatWith, setChatWith] = useState<any>(null);
  const [opportunityFilter, setOpportunityFilter] = useState("all");
  const [feedbackStatuses, setFeedbackStatuses] = useState<{[key: number]: string}>({});
 
  const[students,setStudents]=useState<Student[]>([]);

 const [staffMembers,setStaffMembers]=useState<Staff[]>([]);

 const[suggestions,setSuggestions]=useState<Suggestions[]>([]);

  useEffect(()=>{
     getAllStudents().then((data:Student[])=>{
      console.log("Fetched students:", data);
      setStudents(data);
      }).catch((error)=>{ 
        console.error("Error fetching students:", error);
      })
  },[])

  useEffect(()=>{
    getStaffDetails().then((data:Staff[])=>{
     console.log("Fetched staff members:", data);
     setStaffMembers(data);
     }).catch((error)=>{ 
       console.error("Error fetching staff members:", error);
     })
 },[])

 useEffect(()=>{
    getSuggestions().then((data:Suggestions[])=>{
     console.log("Fetched suggestions:", data);
     setSuggestions(data);
     })
 },[]);

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

  const handleViewProfile = (student:any) => {
    setSelectedStudent(student);
    setShowStudentProfile(true);
  };

  const handleRecommendStudent = (student:any) => {
    setSelectedStudent(student);
    setShowRecommendModal(true);
  };

  const handleContactAlumni = (alumniEmail: string, alumniName: string) => {
    setChatWith({ email: alumniEmail, name: alumniName, type: 'alumni' });
    setShowChat(true);
  };

  const handleViewFeedbackDetails = (feedback: any) => {
    setSelectedFeedback(feedback);
    setShowFeedbackDetails(true);
  };
  
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="students">Students</TabsTrigger>
            {/* <TabsTrigger value="opportunities">Opportunities</TabsTrigger> */}
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
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
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {students.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{student.fullname?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{student.fullname}</CardTitle>
                          <CardDescription>{student.branch} • {student.yearofpassing}</CardDescription>
                        </div>
                      </div>
                      {/* {getStatusBadge(student.status)} */}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">GPA:</span>
                      <span className="font-medium">{student.gpa}</span>
                    </div> */}
                    
                    {/* <div>
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
                    </div> */}
               
                    <div>
                      <p className="text-sm font-medium mb-2">Interests:</p>
                      <div className="flex flex-wrap gap-1">
                        {(typeof student.interests === "string"
                                               ? (student.interests as string).split(",")
                                               : student.interests
                                 )?.map((interest) => (
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
          <TabsContent value="suggestions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Feedback Moderation</h2>
             
            </div>

            <div className="space-y-4">
              {suggestions.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{feedback.title}</h3>
                          <Badge variant="outline">{"Student Suggestion"}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          by {feedback.student_name} • {feedback.submittedAt}
                        </p>
                        <p className="text-sm">{feedback.content}</p>
                      </div>
                      {/* <div className="flex flex-col space-y-2 ml-4">
                        <Badge className={getPriorityColor(feedback.priority)}>
                          {feedback.priority}
                        </Badge>
                        <Badge className={getSentimentColor(feedback.sentiment)}>
                          {feedback.sentiment}
                        </Badge>
                        {getStatusBadge(feedback.status, feedback.id)}
                      </div> */}
                    </div>
                    <div className="flex space-x-2">
                      {/* <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewFeedbackDetails(feedback)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button> */}
                      {/* <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleRespondToFeedback(feedback)}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Respond
                      </Button> */}
                      {/* <Button 
                        size="sm"
                        variant={feedbackStatuses[feedback.id] === 'resolved' ? "default" : "default"}
                        className={feedbackStatuses[feedback.id] === 'resolved' ? "bg-green-600 hover:bg-green-700" : ""}
                        onClick={() => handleMarkResolved(feedback.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {feedbackStatuses[feedback.id] === 'resolved' ? "Resolved" : "Mark Resolved"}
                      </Button> */}
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
                    {/* <TableHead>Courses</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{staff.fullname.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{staff.fullname}</p>
                            <p className="text-sm text-muted-foreground">{staff.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{staff.branch}</TableCell>
                      <TableCell>{staff.jobrole}</TableCell>
                      {/* <TableCell>{staff.courses}</TableCell>
                      <TableCell>{staff.students}</TableCell>
                      <TableCell>{getStatusBadge(staff.status)}</TableCell> */}
                      {/* <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell> */}
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
      
      {/* <OpportunityDetailsModal 
        opportunity={selectedOpportunity}
        isOpen={showOpportunityDetails}
        onClose={() => setShowOpportunityDetails(false)}
      />
       */}
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