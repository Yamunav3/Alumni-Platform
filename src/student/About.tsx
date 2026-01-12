import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import StudentNavbar from "./StudentNavbar";
import LogoLoop from "../ReactBits/LogoLoop";
import CountUp from "../ReactBits/CountUp";
import ClickSpark from "../ReactBits/ClickSpark";
import ScrollFloat from "@/ReactBits/ScrollFloat";
import GradientText from "../ReactBits/GradientText";

const values = [
  {
    title: "Innovation",
    description: "We foster creativity and innovative thinking to solve real-world challenges.",
    icon: <Lightbulb className="h-6 w-6 text-white" />,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from education to career development.",
    icon: <Award className="h-6 w-6 text-white" />,
  },
  {
    title: "Community",
    description: "We build strong communities that support and empower each other's growth.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    title: "Purpose",
    description: "We are driven by the purpose of creating meaningful impact in students' lives.",
    icon: <Target className="h-6 w-6 text-white" />,
  },
];

const valueLogos = values.map(value => ({
  node: (
    <div className="text-center p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 h-full flex flex-col items-center justify-center">
      <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-3">
        {value.icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs">{value.description}</p>
    </div>
  )
}));

export default function StudentAbout() {
  return (
    <ClickSpark sparkColor="#9c40ff" sparkCount={12} duration={800}>
      <div className="min-h-screen bg-background">
        <StudentNavbar/>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e6c01bb7c9c459f8c5d6f6d/5e6ffa6b7c9c456f285d8017_stars.svg')] bg-cover opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                About{" "}
                <GradientText colors={['#ffaa40', '#9c40ff', '#ff6b6b']} className="text-5xl md:text-7xl">
                  Asthra
                </GradientText>
              </h1>
              <p className="text-xl text-white text-muted-foreground max-w-3xl mx-auto">
                Empowering students with the tools, connections, and opportunities 
                they need to build successful careers and make a meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-950/10 -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At Asthra, we believe every student deserves access to world-class mentorship, 
                career opportunities, and learning experiences. Our platform bridges the gap 
                between academic learning and professional success, creating a comprehensive 
                ecosystem for student development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What We Do</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-asthra-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Connect students with industry professionals for personalized mentorship
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-asthra-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Provide access to exclusive internship and job opportunities
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-asthra-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Offer comprehensive training programs and skill development workshops
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-950/30 dark:to-purple-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-asthra-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      Create networking opportunities through events and community building
                    </p>
                  </div>
                </div>
              </div>

              <ScrollFloat>
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-5 rounded-2xl border border-purple-500/30 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">
                        <CountUp end={500} duration={3} suffix="+" />
                      </div>
                      <p className="text-xs text-purple-100">Students Mentored</p>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">
                        <CountUp end={200} duration={3} suffix="+" />
                      </div>
                      <p className="text-xs text-purple-100">Job Placements</p>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">
                        <CountUp end={150} duration={3} suffix="+" />
                      </div>
                      <p className="text-xs text-purple-100">Partner Companies</p>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">
                        <CountUp end={50} duration={3} suffix="+" />
                      </div>
                      <p className="text-xs text-purple-100">Training Programs</p>
                    </div>
                  </div>
                </div>
              </ScrollFloat>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <LogoLoop 
              logos={valueLogos} 
              speed={40} 
              direction="right"
              logoHeight={100}
              gap={20}
              pauseOnHover={true}
              fadeOut={true}
              className="mb-8"
            />

            <LogoLoop 
              logos={valueLogos} 
              speed={40} 
              direction="left"
              logoHeight={100}
              gap={20}
              pauseOnHover={true}
              fadeOut={true}
              className="mb-8"
            />

            {/* REMOVED THE STATIC CARDS SECTION */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-base max-w-2xl mx-auto mb-6 opacity-90">
              Be part of a growing community of students, mentors, and professionals 
              dedicated to excellence and mutual growth.
            </p>
            <div className="bg-white/10 p-1 rounded-xl inline-block backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-700 to-blue-700 px-5 py-2 rounded-xl">
                <p className="text-white font-medium text-sm">
                  Ready to transform your career journey?
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-3">
                  {/* <button className="bg-white text-purple-700 px-4 py-1.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-xs">
                    Get Started Today
                  </button> */}
                  {/* <button className="border border-white/30 px-4 py-1.5 rounded-lg font-medium hover:bg-white/10 transition-colors text-xs" >
                    Contact Us
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClickSpark>
  );
}