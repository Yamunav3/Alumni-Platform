import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
  startVal?: number;
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  separator?: string;
  prefix?: string;
  suffix?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  startVal = 0,
  end,
  duration = 2,
  delay = 0,
  className = "",
  separator = "",
  prefix = "",
  suffix = "",
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startVal);

  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(startVal);
    }
  }, [startVal]);

  useEffect(() => {
    if (isInView) {
      onStart?.();
      const timeoutId = setTimeout(() => {
        motionValue.set(end);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        onEnd?.();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, motionValue, end, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // ✅ round to integer only
        const rounded = Math.round(latest);

        const formatted = Intl.NumberFormat("en-US", {
          useGrouping: !!separator,
          maximumFractionDigits: 0,
        }).format(rounded);

        ref.current.textContent =
          prefix + (separator ? formatted.replace(/,/g, separator) : formatted) + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, prefix, suffix]);

  return <span className={className} ref={ref} />;
}
