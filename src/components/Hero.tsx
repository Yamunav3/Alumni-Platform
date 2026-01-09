import { ArrowRight, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import TextType from "../ReactBits/TextType";
import TextCursor from "../ReactBits/TextCursor";
import CountUp from "../ReactBits/CountUp";
import ClickSpark from "../ReactBits/ClickSpark";

const Hero = () => {
  return (
    <>
      {/* Cursor Trail */}
      <TextCursor
        //  text = {<span style={{ color: "yellow" }}>{">"}</span>}
         text={""}     
        delay={0.2}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={300}
        maxPoints={10}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-#1E90FF/90 via-accent/80 to-#1E90FF/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <TextType
                text={["Connect. Grow. Succeed."]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Asthra bridges the gap between students, alumni, and career opportunities.
              Your journey to professional success starts here.
            </p>

            {/* Buttons with ClickSpark */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
                  <Link to="/explore" className="flex items-center">
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </ClickSpark>

              {/* <ClickSpark sparkColor="#fff" sparkSize={20} sparkRadius={15} sparkCount={8} duration={400}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </ClickSpark> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-card bg-black p-6 text-center">
                <Users className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp startVal={0} end={10000} duration={3} separator="," suffix="+" />
                </div>
                <div className="text-white/80">Active Members</div>
              </div>

              <div className="glass-card bg-black p-6 text-center">
                <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp startVal={0} end={95} duration={2} suffix="%" />
                </div>
                <div className="text-white/80">Success Rate</div>
              </div>

              <div className="glass-card bg-black p-6 text-center">
                <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp startVal={0} end={500} duration={2.5} suffix="+" />
                </div>
                <div className="text-white/80">Partner Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
