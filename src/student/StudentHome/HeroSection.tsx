// import { useState, useEffect } from "react";
// import PracticleBackGround from "@/components/BackGround";

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="relative py-20 overflow-hidden">
//       {/* Background Particles */}
//       <div className="absolute inset-0 -z-10">
//         <PracticleBackGround />
//       </div>

//       {/* Optional subtle grid overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-5"></div>

//       {/* Hero Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
//           Student Portal
//         </h1>

//         <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
//           Where <span className="text-primary">ambition meets opportunity.</span>
//           {" "}Connect with industry leaders, secure dream internships, and
//           accelerate your career journey.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { useState, useEffect } from "react";
import ParticleBackground from "@/components/BackGround";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-200">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Optional subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-5"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          Student Portal
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
          Where <span className="text-primary">ambition meets opportunity.</span>
          {" "}Connect with industry leaders, secure dream internships, and
          accelerate your career journey.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
