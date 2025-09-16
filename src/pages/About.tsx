import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to bridging the gap between education and career success."
    },
    {
      icon: Users,
      title: "Community-First",
      description: "Building lasting connections between students, alumni, and industry professionals."
    },
    {
      icon: Heart,
      title: "Inclusive",
      description: "Creating opportunities for everyone, regardless of background or experience level."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do for our community."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Asthra</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering careers through meaningful connections and opportunities
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Asthra was born from a simple observation: talented individuals often struggle to find the right opportunities, 
                    while organizations struggle to find the right talent. We saw a disconnect between education and industry, 
                    between potential and opportunity.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our platform brings together students, alumni, staff, and administrators in a unified ecosystem where 
                    career growth is not just a possibility—it's a guarantee.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we're proud to have helped thousands of individuals transform their careers and achieve their professional dreams.
                  </p>
                </div>
                <div className="bg-gradient-card rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2024</div>
                    <div className="text-muted-foreground mb-4">Founded</div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">10K+</div>
                        <div className="text-sm text-muted-foreground">Members</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">500+</div>
                        <div className="text-sm text-muted-foreground">Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Built by Passionate Innovators</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our team combines deep industry expertise with a genuine passion for helping others succeed. 
              We're educators, technologists, career coaches, and dreamers united by a common goal.
            </p>
            
            <div className="bg-gradient-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking to advance your career or help others advance theirs, 
                there's a place for you in the Asthra community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup/student" className="btn-hero px-6 py-3 rounded-lg font-medium">
                  Get Started Today
                </a>
                <a href="/contact" className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;