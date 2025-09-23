// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ParticleBackground = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   if (!init) {
//     return null;
//   }

//   return (
//     <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-800">
//       <Particles
//         id="tsparticles"
//         options={{
//           background: {
//             color: "transparent",
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: {
//                 enable: true,
//               },
//             },
//             modes: {
//               repulse: {
//                 distance: 100,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#1d4ed8",
//             },
//             links: {
//               color: "#ff0000",
//               distance: 150,
//               enable: true,
//               opacity: 0.6,
//               width: 1.5,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 2,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 width: 800,
//               },
//               value: 60,
//             },
//             opacity: {
//               value: 0.8,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 2, max: 6 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };

// export default ParticleBackground;





import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#1d4ed8",
            },
            links: {
              color: "#ff0000",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
export default ParticleBackground;