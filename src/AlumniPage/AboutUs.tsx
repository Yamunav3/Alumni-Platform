// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { 
//   Users,
//   Target,
//   Heart,
//   Sparkles,
//   Globe,
//   BookOpen,
//   Award,
//   Handshake,
//   Briefcase
// } from "lucide-react";

// const values = [
//   {
//     icon: Heart,
//     title: "Community First",
//     description: "We believe in the power of connection and mutual support among our alumni family."
//   },
//   {
//     icon: Target,
//     title: "Excellence",
//     description: "We strive for excellence in everything we do, maintaining the highest standards."
//   },
//   {
//     icon: Handshake,
//     title: "Collaboration",
//     description: "Together we achieve more. We foster an environment of collaboration and knowledge sharing."
//   },
//   {
//     icon: Globe,
//     title: "Global Impact",
//     description: "Our alumni network spans the globe, creating opportunities for worldwide impact."
//   }
// ];

// const stats = [
//   { number: "15,000+", label: "Active Alumni", icon: Users },
//   { number: "85+", label: "Countries", icon: Globe },
//   { number: "1,200+", label: "Companies", icon: Briefcase },
//   { number: "50+", label: "Years of Excellence", icon: Award }
// ];

// const teamMembers = [
//   {
//     name: "Sarah Chen",
//     role: "Alumni Relations Director",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
//     description: "Leading alumni engagement and community building initiatives."
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Career Services Manager",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
//     description: "Connecting alumni with career opportunities and professional development."
//   },
//   {
//     name: "Emily Thompson",
//     role: "Community Programs Lead",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
//     description: "Organizing events, mentorship programs, and networking opportunities."
//   }
// ];

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="py-20 px-4 bg-gradient-hero">
//         <div className="container mx-auto text-center">
//           <div className="flex items-center justify-center mb-6">
//             <Sparkles className="h-8 w-8 text-primary mr-3" />
//             <h1 className="text-4xl md:text-6xl font-bold gradient-text">About Asthra</h1>
//           </div>
//           <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//             Building bridges between past, present, and future. Asthra is more than an alumni network—
//             it's a thriving community dedicated to lifelong connection, growth, and impact.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-2xl">
//                   <Target className="h-6 w-6 mr-3 text-primary" />
//                   Our Mission
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   To create a vibrant, supportive ecosystem where alumni can connect, grow, and contribute 
//                   to each other's success while advancing the legacy of our institution through meaningful 
//                   relationships and shared experiences.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="shadow-card">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-2xl">
//                   <BookOpen className="h-6 w-6 mr-3 text-primary" />
//                   Our Vision
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   To be the world's most connected and impactful alumni community, where every member 
//                   finds value, opportunity, and purpose through lifelong relationships that transcend 
//                   geographical and professional boundaries.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Values */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               These principles guide everything we do and shape the culture of our community.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//             {values.map((value, index) => {
//               const IconComponent = value.icon;
//               return (
//                 <Card key={index} className="text-center shadow-card card-hover">
//                   <CardHeader>
//                     <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
//                       <IconComponent className="h-6 w-6 text-white" />
//                     </div>
//                     <CardTitle className="text-lg">{value.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground text-sm">{value.description}</p>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="py-16 px-4 bg-muted/50">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
//             <p className="text-muted-foreground">
//               The strength of our community reflected in measurable achievements
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center">
//                   <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                     <IconComponent className="h-8 w-8 text-primary" />
//                   </div>
//                   <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
//                   <div className="text-muted-foreground">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Dedicated professionals working to make your alumni experience exceptional
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="text-center shadow-card card-hover">
//                 <CardHeader>
//                   <div className="mx-auto h-24 w-24 rounded-full overflow-hidden mb-4">
//                     <img 
//                       src={member.image} 
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <CardTitle className="text-xl">{member.name}</CardTitle>
//                   <CardDescription className="text-primary font-medium">
//                     {member.role}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground text-sm">{member.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16 px-4 bg-gradient-hero">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Join thousands of alumni who are already making meaningful connections and advancing their careers.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
//               Join the Community
//             </Button>
//             <Button variant="outline" size="lg">
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Calendar,
  Users,
  MessageSquare,
  UserPlus,
  Heart,
  Trophy,
  Star,
  Globe,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Building
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const AlumniAboutUs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const congratulatoryPosts = [
    {
      id: 1,
      student: "Alex Rivera",
      company: "Meta",
      position: "Software Engineer",
      batch: "2024",
      congratulations: 47,
      comments: 12,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      student: "Priya Sharma",
      company: "Goldman Sachs",
      position: "Investment Analyst",
      batch: "2024",
      congratulations: 62,
      comments: 18,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 3,
      student: "David Kim",
      company: "Netflix",
      position: "Product Manager",
      batch: "2024",
      congratulations: 35,
      comments: 8,
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior VP Engineering",
      company: "Stripe",
      batch: "2015",
      expertise: ["Engineering Leadership", "Startups", "Career Growth"],
      mentees: 12,
      rating: 4.9,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "Chief Marketing Officer",
      company: "Uber",
      batch: "2012",
      expertise: ["Marketing Strategy", "Brand Building", "Growth Hacking"],
      mentees: 8,
      rating: 4.8,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 3,
      name: "Lisa Wang",
      title: "Investment Director",
      company: "Sequoia Capital",
      batch: "2010",
      expertise: ["Venture Capital", "Investment Strategy", "Entrepreneurship"],
      mentees: 15,
      rating: 5.0,
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Breaking into Tech Industry - Tips and Strategies",
      author: "John Smith",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Career Advice",
      isHot: true
    },
    {
      id: 2,
      title: "MBA vs Working Experience - What's better?",
      author: "Emily Davis",
      replies: 18,
      lastActivity: "4 hours ago",
      category: "Education",
      isHot: false
    },
    {
      id: 3,
      title: "Networking Events in San Francisco - December 2024",
      author: "Mike Chen",
      replies: 12,
      lastActivity: "6 hours ago",
      category: "Networking",
      isHot: false
    },
    {
      id: 4,
      title: "Remote Work vs Office - Industry Perspectives",
      author: "Sarah Johnson",
      replies: 31,
      lastActivity: "8 hours ago",
      category: "Work Culture",
      isHot: true
    }
  ];

  const alumniDirectory = [
    {
      id: 1,
      name: "Robert Thompson",
      title: "Principal Engineer",
      company: "Apple",
      batch: "2018",
      location: "Cupertino, CA",
      skills: ["iOS Development", "Machine Learning", "System Design"],
      connections: 250,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      name: "Jennifer Liu",
      title: "Product Director",
      company: "Google",
      batch: "2016",
      location: "Mountain View, CA",
      skills: ["Product Strategy", "User Research", "Data Analytics"],
      connections: 180,
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 3,
      name: "Marcus Williams",
      title: "Head of Design",
      company: "Airbnb",
      batch: "2017",
      location: "San Francisco, CA",
      skills: ["UX/UI Design", "Design Systems", "Leadership"],
      connections: 320,
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AlumniNavbar/>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Alumni Network</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow alumni, find mentors, celebrate achievements, and grow together
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="celebrations" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="celebrations">Celebrations</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="directory">Directory</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Congratulatory Board */}
          <TabsContent value="celebrations" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Achievements</h2>
              <Button>
                <Trophy className="h-4 w-4 mr-2" />
                Share Achievement
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {congratulatoryPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{post.student}</h3>
                          <p className="text-sm text-muted-foreground">Batch of {post.batch}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">New Placement</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-primary">{post.position}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {post.company}
                        </p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between text-sm">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.congratulations} Congratulations
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments} Comments
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mentorship */}
          <TabsContent value="mentorship" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Find a Mentor</h2>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Become a Mentor
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">Batch of {mentor.batch}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">{mentor.title}</p>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Expertise:</p>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {mentor.mentees} mentees
                        </span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {mentor.rating}
                        </span>
                      </div>

                      <Button className="w-full">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Forums */}
          <TabsContent value="forums" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Discussion Forum</h2>
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
            </div>

            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium hover:text-primary cursor-pointer">
                            {topic.title}
                          </h3>
                          {topic.isHot && (
                            <Badge variant="destructive" className="text-xs">Hot</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span>by {topic.author}</span>
                          <Badge variant="outline" className="text-xs">
                            {topic.category}
                          </Badge>
                          <span>{topic.replies} replies</span>
                          <span>Last active {topic.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Alumni Directory */}
          <TabsContent value="directory" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alumni by name, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniDirectory.map((alumni) => (
                <Card key={alumni.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={alumni.avatar} />
                        <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{alumni.name}</h3>
                        <p className="text-sm text-muted-foreground">Batch of {alumni.batch}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">{alumni.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {alumni.company}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {alumni.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {alumni.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {alumni.connections} connections
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Feedback */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Alumni Feedback</h2>
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Experience</CardTitle>
                  <CardDescription>
                    Help us improve by sharing your feedback about our alumni services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What would you like to share?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>General Feedback</option>
                      <option>Website Improvement</option>
                      <option>Event Suggestion</option>
                      <option>Networking Issues</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea 
                      className="w-full p-2 border rounded-md" 
                      rows={4}
                      placeholder="Please share your detailed feedback..."
                    />
                  </div>
                  <Button className="w-full">Submit Feedback</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Feedback</CardTitle>
                  <CardDescription>See what other alumni are saying</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm">"Great networking opportunities! The mentorship program has been invaluable."</p>
                      <p className="text-xs text-muted-foreground mt-1">- Alex R., Class of 2018</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-sm">"Love the new alumni directory feature. Makes it easy to connect with peers."</p>
                      <p className="text-xs text-muted-foreground mt-1">- Sarah M., Class of 2015</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="text-sm">"The career portal helped me find amazing job opportunities. Thank you!"</p>
                      <p className="text-xs text-muted-foreground mt-1">- David K., Class of 2020</p>
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

export default AlumniAboutUs;