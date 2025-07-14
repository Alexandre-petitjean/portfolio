"use client";
import { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<string>("fr");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const intl = useIntl();
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) setLang(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleChange = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    setOpen(false);
    if (btnRef.current) btnRef.current.blur();
    window.dispatchEvent(new Event("languageChanged"));
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={btnRef}
        className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-all"
        aria-label={intl.formatMessage({
          id: "languageSwitcher.ariaLabel",
          defaultMessage: "Change language",
        })}
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
        type="button"
      >
        {LANGUAGES.find((l) => l.code === lang)?.flag || "🌐"}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-24 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50">
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className={`w-full flex items-center justify-center gap-2 py-2 text-xl hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors ${
                lang === code ? "font-bold" : ""
              }`}
              aria-pressed={lang === code}
              type="button"
            >
              {flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
