"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCountersReturn {
  projectsCount: number;
  yearsCount: number;
  clientsCount: number;
  ref: React.RefObject<HTMLDivElement | null>;
}

export function useAnimatedCounters(): AnimatedCountersReturn {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const animateValue = (
      start: number,
      end: number,
      duration: number,
      callback: (value: number) => void,
    ) => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;

        callback(Math.floor(current));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateValue(0, 50, 2000, setProjectsCount);
    animateValue(0, 8, 2000, setYearsCount);
    animateValue(0, 100, 2000, setClientsCount);
  }, [isInView]);

  return { projectsCount, yearsCount, clientsCount, ref };
}
