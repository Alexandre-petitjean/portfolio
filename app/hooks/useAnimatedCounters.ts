"use client";

import { useState, useEffect } from "react";

export function useAnimatedCounters() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: (value: number) => void,
      duration = 2000,
    ) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(50, setProjectsCount);
      animateCounter(8, setYearsCount);
      animateCounter(25, setClientsCount);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { projectsCount, yearsCount, clientsCount };
}
