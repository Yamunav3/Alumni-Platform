import { AdminNavbar } from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users,
  Target,
  Heart,
  Sparkles,
  Globe,
  BookOpen,
  Award,
  Handshake,
  Briefcase
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of connection and mutual support among our alumni family."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, maintaining the highest standards."
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Together we achieve more. We foster an environment of collaboration and knowledge sharing."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our alumni network spans the globe, creating opportunities for worldwide impact."
  }
];

const stats = [
  { number: "15,000+", label: "Active Alumni", icon: Users },
  { number: "85+", label: "Countries", icon: Globe },
  { number: "1,200+", label: "Companies", icon: Briefcase },
  { number: "50+", label: "Years of Excellence", icon: Award }
];

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Alumni Relations Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    description: "Leading alumni engagement and community building initiatives."
  },
  {
    name: "Michael Rodriguez",
    role: "Career Services Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description: "Connecting alumni with career opportunities and professional development."
  },
  {
    name: "Emily Thompson",
    role: "Community Programs Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description: "Organizing events, mentorship programs, and networking opportunities."
  }
];

export default function AdminAboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <AdminNavbar/>
       <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students with the tools, connections, and opportunities 
              they need to build successful careers and make a meaningful impact.
          </p>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="h-6 w-6 mr-3 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To create a vibrant, supportive ecosystem where alumni can connect, grow, and contribute 
                  to each other's success while advancing the legacy of our institution through meaningful 
                  relationships and shared experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="h-6 w-6 mr-3 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the world's most connected and impactful alumni community, where every member 
                  finds value, opportunity, and purpose through lifelong relationships that transcend 
                  geographical and professional boundaries.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-card card-hover">
                  <CardHeader>
                    <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-muted-foreground">
              The strength of our community reflected in measurable achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals working to make your alumni experience exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-card card-hover">
                <CardHeader>
                  <div className="mx-auto h-24 w-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of alumni who are already making meaningful connections and advancing their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Join the Community
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}