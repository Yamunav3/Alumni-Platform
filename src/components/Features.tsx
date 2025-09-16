import { Briefcase, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Job Portal",
      description: "Access thousands of career opportunities from top companies. Filter by location, experience, and industry to find your perfect match.",
      link: "/career",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "My Applications",
      description: "Track your application status, manage deadlines, and get insights on your career journey. Stay organized and never miss an opportunity.",
      link: "/career",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Success Stories",
      description: "Get inspired by alumni achievements and career transformations. Learn from real experiences and chart your own path to success.",
      link: "/career",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Career Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your career journey, all in one place.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group feature-card p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-8">
                <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}/20 to-${feature.color.split('-')[1]}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  <Button asChild variant="outline" size="lg" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Link to={feature.link} className="flex items-center space-x-2">
                      <span className="font-semibold">Explore {feature.title}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;