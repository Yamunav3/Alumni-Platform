import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Award,
  Users,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

const profileData = {
  name: "Alex Johnson",
  title: "Senior Software Engineer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  graduationYear: "2018",
  degree: "Computer Science",
  joinedDate: "March 2024",
  bio: "Passionate software engineer with 5+ years of experience in full-stack development. Alumni mentor and active community contributor.",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
};

const achievements = [
  { title: "Top Performer 2023", icon: Award, color: "text-yellow-600" },
  { title: "Mentor of the Year", icon: Users, color: "text-blue-600" },
  { title: "Community Contributor", icon: MessageSquare, color: "text-green-600" }
];

const experience = [
  {
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    duration: "2021 - Present",
    description: "Leading development of cloud-native applications and mentoring junior developers."
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2019 - 2021",
    description: "Built scalable web applications using React and Node.js for a growing fintech startup."
  },
  {
    company: "DevAgency",
    position: "Junior Developer",
    duration: "2018 - 2019",
    description: "Started career developing custom websites and web applications for various clients."
  }
];

const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", 
  "Docker", "GraphQL", "MongoDB", "PostgreSQL", "Git", "Agile"
];

export default function AlumniProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AlumniNavbar/>
      {/* Profile Header */}
      <section className="py-16 px-4 bg-indigo-200">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-elegant">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold gradient-text mb-2">{profileData.name}</h1>
                  <p className="text-xl text-muted-foreground mb-2">{profileData.title}</p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{profileData.company}</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>{profileData.location}</span>
                  </div>
                </div>
                <Button 
                  variant={isEditing ? "default" : "outline"} 
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {isEditing ? "Save" : "Edit Profile"}
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-6">{profileData.bio}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                      <IconComponent className={`h-3 w-3 ${achievement.color}`} />
                      <span>{achievement.title}</span>
                    </Badge>
                  );
                })}
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>Class of {profileData.graduationYear} • {profileData.degree}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Joined {profileData.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profileData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profileData.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profileData.location}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Bachelor of Science in {profileData.degree}</h4>
                      <p className="text-muted-foreground">Asthra University</p>
                      <p className="text-sm text-muted-foreground">Graduated {profileData.graduationYear}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6 mt-6">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{exp.position}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {exp.company} • {exp.duration}
                        </CardDescription>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="skills" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>
                    Programming languages, frameworks, and tools I work with
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent contributions and interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>Participated in "Career Transitions" forum discussion</span>
                      <span className="text-muted-foreground">2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Mentored 3 junior developers this month</span>
                      <span className="text-muted-foreground">1 week ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Completed "Leadership Excellence" program</span>
                      <span className="text-muted-foreground">2 weeks ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}