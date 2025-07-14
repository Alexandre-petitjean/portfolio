"use client";
import { useEffect } from "react";

export default function HtmlLangSync() {
  useEffect(() => {
    const updateLang = () => {
      const lang =
        localStorage.getItem("lang") ||
        (navigator.language?.startsWith("en") ? "en" : "fr");
      document.documentElement.lang = lang;
    };
    updateLang();
    window.addEventListener("languageChanged", updateLang);
    window.addEventListener("storage", updateLang);
    return () => {
      window.removeEventListener("languageChanged", updateLang);
      window.removeEventListener("storage", updateLang);
    };
  }, []);
  return null;
}
