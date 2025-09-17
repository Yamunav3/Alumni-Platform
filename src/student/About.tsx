import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import StudentNavbar from "@/components/StudentNavbar";
const values = [
  {
    title: "Innovation",
    description: "We foster creativity and innovative thinking to solve real-world challenges.",
    icon: <Lightbulb className="h-8 w-8 text-white" />,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from education to career development.",
    icon: <Award className="h-8 w-8 text-white" />,
  },
  {
    title: "Community",
    description: "We build strong communities that support and empower each other's growth.",
    icon: <Users className="h-8 w-8 text-white" />,
  },
  {
    title: "Purpose",
    description: "We are driven by the purpose of creating meaningful impact in students' lives.",
    icon: <Target className="h-8 w-8 text-white" />,
  },
];

export default function StudentAbout() {
  return (
   
    <div className="min-h-screen bg-background">
      {/* Header Section */}
    <StudentNavbar/>
      <section className="bg-gradient-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Asthra
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students with the tools, connections, and opportunities 
              they need to build successful careers and make a meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Asthra, we believe every student deserves access to world-class mentorship, 
              career opportunities, and learning experiences. Our platform bridges the gap 
              between academic learning and professional success, creating a comprehensive 
              ecosystem for student development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-asthra-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Connect students with industry professionals for personalized mentorship
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-asthra-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Provide access to exclusive internship and job opportunities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-asthra-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Offer comprehensive training programs and skill development workshops
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-asthra-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Create networking opportunities through events and community building
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <p className="text-sm text-muted-foreground">Students Mentored</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    200+
                  </div>
                  <p className="text-sm text-muted-foreground">Job Placements</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    150+
                  </div>
                  <p className="text-sm text-muted-foreground">Partner Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <p className="text-sm text-muted-foreground">Training Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-card border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border border-border/50 hover:shadow-card-asthra transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Be part of a growing community of students, mentors, and professionals 
              dedicated to excellence and mutual growth.
            </p>
            <div className="bg-gradient-primary p-1 rounded-lg inline-block">
              <div className="bg-background px-8 py-4 rounded-lg">
                <p className="text-foreground font-medium">
                  Ready to transform your career journey?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}