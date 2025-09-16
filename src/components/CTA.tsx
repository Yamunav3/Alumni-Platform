import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Ready to Transform Your Career?</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join thousands of professionals who found their dream careers through Asthra
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you're a student starting your journey or an experienced professional looking for growth, 
          we're here to connect you with the right opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Link to="/signup/student" className="flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
            <Link to="/career/success-stories">View Success Stories</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-white/80 text-sm">Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-white/80 text-sm">Free to Join</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">1000+</div>
            <div className="text-white/80 text-sm">New Jobs Weekly</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Global</div>
            <div className="text-white/80 text-sm">Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;