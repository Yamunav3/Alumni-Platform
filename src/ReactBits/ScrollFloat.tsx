import React, { useEffect, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  innerStagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  animationDuration = 1,
  ease = "power3.out",
  scrollStart = "top 85%",
  scrollEnd = "bottom 70%",
  stagger = 0.2,
  innerStagger = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    const cards = el.children;

    // Animate each card container
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: "play none none reverse",
        },
        onEnter: () => {
          // Animate children inside each card
          Array.from(cards).forEach((card) => {
            const innerEls = (card as HTMLElement).querySelectorAll(
              "h3, p, a, button, svg"
            );
            gsap.fromTo(
              innerEls,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: innerStagger,
                ease,
              }
            );
          });
        },
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, innerStagger]);

  return (
    <div ref={containerRef} className={containerClassName}>
      {children}
    </div>
  );
};

export default ScrollFloat;
