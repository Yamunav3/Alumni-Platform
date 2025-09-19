import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StudentNavbar from "@/components/StudentNavbar";
import { 
  Users, 
  Briefcase, 
  Video, 
  BookOpen, 
  Star, 
  Award, 
  MessageCircle,
  Calendar,
  Search,
  Filter,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Trophy,
  Target,
  Zap
} from "lucide-react";

const StudentHome = () => {
  const [activeTab, setActiveTab] = useState("mentorship");

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      expertise: ["Web Development", "React", "Node.js"],
      rating: 4.9,
      sessions: 150,
      image: "/placeholder.svg",
      price: "Free",
      availability: "Available"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Microsoft",
      expertise: ["Product Strategy", "UI/UX", "Analytics"],
      rating: 4.8,
      sessions: 89,
      image: "/placeholder.svg",
      price: "$50/hour",
      availability: "Busy"
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Data Scientist",
      company: "Netflix",
      expertise: ["Machine Learning", "Python", "Statistics"],
      rating: 4.9,
      sessions: 112,
      image: "/placeholder.svg",
      price: "Free",
      availability: "Available"
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Tesla",
      location: "Palo Alto, CA",
      duration: "3 months",
      stipend: "$3,000/month",
      skills: ["React", "Python", "Git"],
      deadline: "2024-02-15",
      applicants: 245
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Spotify",
      location: "New York, NY",
      duration: "4 months",
      stipend: "$2,500/month",
      skills: ["Digital Marketing", "Analytics", "Content"],
      deadline: "2024-02-20",
      applicants: 189
    },
    {
      id: 3,
      title: "Design Intern",
      company: "Airbnb",
      location: "San Francisco, CA",
      duration: "6 months",
      stipend: "$4,000/month",
      skills: ["Figma", "UI/UX", "Prototyping"],
      deadline: "2024-03-01",
      applicants: 312
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Building Your Tech Career",
      speaker: "John Smith",
      company: "Amazon",
      date: "2024-01-25",
      time: "2:00 PM EST",
      attendees: 1250,
      price: "Free",
      duration: "1 hour"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      speaker: "Lisa Wong",
      company: "Facebook",
      date: "2024-01-30",
      time: "3:00 PM EST",
      attendees: 890,
      price: "$29",
      duration: "2 hours"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      speaker: "David Miller",
      company: "Tesla",
      date: "2024-02-05",
      time: "1:00 PM EST",
      attendees: 567,
      price: "$49",
      duration: "3 hours"
    }
  ];

  const trainings = [
    {
      id: 1,
      title: "Full Stack Web Development",
      provider: "Tech Academy",
      duration: "12 weeks",
      level: "Beginner",
      price: "$599",
      rating: 4.8,
      students: 2340,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      provider: "AI Institute",
      duration: "8 weeks",
      level: "Intermediate",
      price: "$799",
      rating: 4.9,
      students: 1567,
      skills: ["Python", "TensorFlow", "Statistics", "Deep Learning"]
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      provider: "Marketing Pro",
      duration: "6 weeks",
      level: "Beginner",
      price: "$399",
      rating: 4.7,
      students: 3421,
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"]
    }
  ];

  return (
   <div className="min-h-screen bg-background px-4">
      <StudentNavbar />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Student Portal
          </h1>
          <p className="text-2xl text-muted-foreground">
            Connect with mentors, find internships, join webinars, and enhance your skills
          </p>
        </div>

       


        {/* Hero Section */}
      <section className="bg-gradient-hero border-b border-border  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Asthra
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your comprehensive student portal for career development, learning opportunities, 
              and professional growth. Explore mentorship, internships, and much more.
            </p>
          </div>
        </div>
      </section>
<br/>
<br/>
        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="mentorship" className="text-.9xl data-[state=active]:bg-primary  fs-20 data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4 mr-2" />
              Mentorship
            </TabsTrigger>
            <TabsTrigger value="internships" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Briefcase className="h-4 w-4 mr-2" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="webinars" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="h-4 w-4 mr-2" />
              Webinars
            </TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <BookOpen className="h-4 w-4 mr-2" />
              Training
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
              <MessageCircle className="h-4 w-4 mr-2" />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* Mentorship Tab */}
          <TabsContent value="mentorship" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search mentors by expertise..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentor.image} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.title}</p>
                        <p className="text-sm font-medium text-primary">{mentor.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{mentor.rating}</span>
                      </div>
                      <span className="text-muted-foreground">{mentor.sessions} sessions</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant={mentor.availability === "Available" ? "default" : "destructive"}>
                          {mentor.availability}
                        </Badge>
                        <span className="text-sm font-medium">{mentor.price}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search internships..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {internships.map((internship) => (
                <Card key={internship.id} className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{internship.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {internship.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{internship.stipend}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Due: {internship.deadline}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {internship.applicants} applicants
                      </span>
                      <Button className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Webinars Tab */}
          <TabsContent value="webinars" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search webinars..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">{webinar.title}</CardTitle>
                    <CardDescription>
                      by {webinar.speaker} from {webinar.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{webinar.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{webinar.duration}</Badge>
                      <Button className="bg-gradient-to-r from-success to-secondary hover:from-success/90 hover:to-secondary/90">
                        {webinar.price === "Free" ? "Register Free" : "Purchase"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search training courses..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {trainings.map((training) => (
                <Card key={training.id} className="hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{training.title}</CardTitle>
                    <CardDescription>{training.provider}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline">{training.level}</Badge>
                      <span className="text-muted-foreground">{training.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{training.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{training.students} students</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {training.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{training.price}</span>
                      <Button className="bg-gradient-to-r from-warning to-primary hover:from-warning/90 hover:to-primary/90">
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Student Feedback</h2>
              <p className="text-muted-foreground">
                Share your experience and help us improve our services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Submit Feedback</CardTitle>
                  <CardDescription>
                    Tell us about your experience with our platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedback-type">Feedback Type</Label>
                    <select id="feedback-type" className="w-full p-3 border rounded-lg">
                      <option>General Feedback</option>
                      <option>Mentorship Program</option>
                      <option>Internship Portal</option>
                      <option>Webinar Experience</option>
                      <option>Training Courses</option>
                      <option>Technical Issues</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rating">Overall Rating</Label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-6 w-6 text-yellow-500 fill-current cursor-pointer hover:scale-110 transition-transform" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback-message">Your Feedback</Label>
                    <textarea 
                      id="feedback-message"
                      className="w-full p-3 border rounded-lg" 
                      rows={4}
                      placeholder="Share your thoughts, suggestions, or concerns..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Student Feedback</CardTitle>
                  <CardDescription>See what other students are saying</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex items-center space-x-1 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm">"The mentorship program exceeded my expectations. My mentor helped me land my dream internship!"</p>
                      <p className="text-xs text-muted-foreground mt-1">- Sarah K., Computer Science</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4 py-2">
                      <div className="flex items-center space-x-1 mb-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                      <p className="text-sm">"Great webinar content, but would love more interactive sessions."</p>
                      <p className="text-xs text-muted-foreground mt-1">- Alex M., Business Administration</p>
                    </div>
                    <div className="border-l-4 border-success pl-4 py-2">
                      <div className="flex items-center space-x-1 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm">"The training courses are comprehensive and well-structured. Highly recommend!"</p>
                      <p className="text-xs text-muted-foreground mt-1">- Emily R., Engineering</p>
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

export default StudentHome;



// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import StudentNavbar from "@/components/StudentNavbar";
// import { Users, Briefcase, Video, BookOpen, MessageCircle, Star, Search, Filter, Calendar, Clock, MapPin, DollarSign } from "lucide-react";

// const StudentHome = () => {
//   const [activeTab, setActiveTab] = useState("mentorship");

//   const mentors = [ /* same mentors data */ ];
//   const internships = [ /* same internships data */ ];
//   const webinars = [ /* same webinars data */ ];
//   const trainings = [ /* same trainings data */ ];

//   return (
//     <div className="min-h-screen bg-background px-4">
//       <StudentNavbar />

//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
//             Student Portal
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Connect with mentors, find internships, join webinars, and enhance your skills
//           </p>
//         </div>

//         {/* Tabs Section (Mentorship, Internships, Webinars, Training, Feedback) */}
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
//           <TabsList className="grid w-full grid-cols-5 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
//             <TabsTrigger value="mentorship" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//               <Users className="h-4 w-4 mr-2" /> Mentorship
//             </TabsTrigger>
//             <TabsTrigger value="internships" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
//               <Briefcase className="h-4 w-4 mr-2" /> Internships
//             </TabsTrigger>
//             <TabsTrigger value="webinars" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
//               <Video className="h-4 w-4 mr-2" /> Webinars
//             </TabsTrigger>
//             <TabsTrigger value="training" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
//               <BookOpen className="h-4 w-4 mr-2" /> Training
//             </TabsTrigger>
//             <TabsTrigger value="feedback" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
//               <MessageCircle className="h-4 w-4 mr-2" /> Feedback
//             </TabsTrigger>
//           </TabsList>

//           {/* Mentorship Tab */}
//           <TabsContent value="mentorship" className="space-y-6">
//             <div className="flex flex-col sm:flex-row gap-4 mb-6">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input placeholder="Search mentors by expertise..." className="pl-10" />
//               </div>
//               <Button variant="outline" className="flex items-center gap-2">
//                 <Filter className="h-4 w-4" /> Filter
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {mentors.map((mentor) => (
//                 <Card key={mentor.id} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-card-asthra transition-all">
//                   <CardHeader className="pb-4 text-center">
//                     <h3 className="text-lg font-bold">{mentor.name}</h3>
//                     <CardDescription>{mentor.title} - {mentor.company}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-2 text-center">
//                     <div className="flex justify-center gap-2 flex-wrap">
//                       {mentor.expertise.map((skill) => (
//                         <Badge key={skill} variant="secondary">{skill}</Badge>
//                       ))}
//                     </div>
//                     <div className="flex justify-between items-center mt-2">
//                       <span>{mentor.availability}</span>
//                       <span>{mentor.price}</span>
//                     </div>
//                     <Button className="w-full bg-gradient-primary text-white mt-2">Connect</Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Internships Tab */}
//           <TabsContent value="internships" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {internships.map((internship) => (
//                 <Card key={internship.id} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-card-asthra transition-all">
//                   <CardHeader>
//                     <CardTitle>{internship.title}</CardTitle>
//                     <CardDescription>{internship.company}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span>{internship.location}</span>
//                       <span>{internship.duration}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>{internship.stipend}</span>
//                       <span>Deadline: {internship.deadline}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {internship.skills.map((skill) => (
//                         <Badge key={skill} variant="secondary">{skill}</Badge>
//                       ))}
//                     </div>
//                     <Button className="w-full bg-gradient-primary text-white mt-2">Apply Now</Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Webinars Tab */}
//           <TabsContent value="webinars" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {webinars.map((webinar) => (
//                 <Card key={webinar.id} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-card-asthra transition-all">
//                   <CardHeader>
//                     <CardTitle>{webinar.title}</CardTitle>
//                     <CardDescription>by {webinar.speaker} ({webinar.company})</CardDescription>
//                   </CardHeader>
//                   <CardContent className="text-sm space-y-2">
//                     <div className="flex justify-between">
//                       <span>{webinar.date}</span>
//                       <span>{webinar.time}</span>
//                     </div>
//                     <span>{webinar.attendees} registered</span>
//                     <Button className="w-full bg-gradient-primary text-white mt-2">
//                       {webinar.price === "Free" ? "Register Free" : "Purchase"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Training Tab */}
//           <TabsContent value="training" className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//               {trainings.map((training) => (
//                 <Card key={training.id} className="bg-gradient-card p-6 rounded-xl border border-border hover:shadow-card-asthra transition-all">
//                   <CardHeader>
//                     <CardTitle>{training.title}</CardTitle>
//                     <CardDescription>{training.provider}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <Badge variant="secondary">{training.level}</Badge>
//                       <span>{training.duration}</span>
//                     </div>
//                     <span>{training.rating} ⭐ | {training.students} students</span>
//                     <div className="flex flex-wrap gap-1">
//                       {training.skills.slice(0,3).map((skill) => (
//                         <Badge key={skill} variant="secondary">{skill}</Badge>
//                       ))}
//                     </div>
//                     <Button className="w-full bg-gradient-primary text-white mt-2">{training.price}</Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           {/* Feedback Tab */}
//           <TabsContent value="feedback" className="space-y-6 text-center">
//             <h2 className="text-2xl font-bold mb-4">Student Feedback</h2>
//             <p className="text-muted-foreground mb-6">Share your experience and help us improve our services</p>
//             <Card className="bg-gradient-card p-6 rounded-xl border border-border max-w-xl mx-auto">
//               <CardContent className="space-y-4">
//                 <Input placeholder="Your Name" />
//                 <Input placeholder="Your Feedback" />
//                 <Button className="w-full bg-gradient-primary text-white">Submit</Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default StudentHome;
