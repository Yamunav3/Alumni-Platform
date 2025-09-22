import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TextCursorProps {
  text: ReactNode;
  delay?: number;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = "⚛️",
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5, // default = 5 symbols max
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const idCounter = useRef<number>(0);
  const lastMoveTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setTrail((prev) => {
        let newTrail = [...prev];

        if (newTrail.length === 0) {
          newTrail.push({
            id: idCounter.current++,
            x: mouseX,
            y: mouseY,
            angle: 0,
            ...(randomFloat && {
              randomX: Math.random() * 10 - 5,
              randomY: Math.random() * 10 - 5,
              randomRotate: Math.random() * 10 - 5,
            }),
          });
        } else {
          const last = newTrail[newTrail.length - 1];
          const dx = mouseX - last.x;
          const dy = mouseY - last.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance >= spacing) {
            let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
            if (rawAngle > 90) rawAngle -= 180;
            else if (rawAngle < -90) rawAngle += 180;
            const computedAngle = followMouseDirection ? rawAngle : 0;

            const steps = Math.floor(distance / spacing);
            for (let i = 1; i <= steps; i++) {
              const t = (spacing * i) / distance;
              const newX = last.x + dx * t;
              const newY = last.y + dy * t;

              newTrail.push({
                id: idCounter.current++,
                x: newX,
                y: newY,
                angle: computedAngle,
                ...(randomFloat && {
                  randomX: Math.random() * 10 - 5,
                  randomY: Math.random() * 10 - 5,
                  randomRotate: Math.random() * 10 - 5,
                }),
              });
            }
          }
        }

        // ✅ Keep only latest `maxPoints` items
        if (newTrail.length > maxPoints) {
          newTrail = newTrail.slice(newTrail.length - maxPoints);
        }

        return newTrail;
      });

      lastMoveTimeRef.current = Date.now();
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [spacing, followMouseDirection, randomFloat, maxPoints]);

  // auto remove old ones if no movement
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              opacity: { duration: exitDuration, ease: "easeOut", delay },
            }}
            className="absolute select-none whitespace-nowrap text-3xl"
            style={{ left: item.x, top: item.y }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextCursor;
