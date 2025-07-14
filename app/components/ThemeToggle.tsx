"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-primary-600" />
      </button>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        if (btnRef.current) btnRef.current.blur();
      }}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-primary-600 transition-all duration-200" />
      ) : (
        <Sun className="w-5 h-5 text-primary-600 transition-all duration-200" />
      )}
    </button>
  );
}
