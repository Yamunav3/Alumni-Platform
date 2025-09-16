import { ArrowRight, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Connect. Grow. 
            <span className="block gradient-text bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Succeed.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Asthra bridges the gap between students, alumni, and career opportunities. 
            Your journey to professional success starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
              <Link to="/career/jobs" className="flex items-center space-x-2">
                <span>Explore Opportunities</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">10,000+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;