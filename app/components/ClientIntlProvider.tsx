"use client";
import { IntlProvider } from "react-intl";
import { useState, useEffect, memo } from "react";
import messagesFr from "@/app/constants/messages_fr";
import messagesEn from "@/app/constants/messages_en";
import HtmlLangSync from "@/app/components/HtmlLangSync";
import ErrorBoundary from "@/app/components/ErrorBoundary";

const ClientIntlProvider = memo(function ClientIntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("fr");
  useEffect(() => {
    function detectLang() {
      let detected = "fr";
      const stored = localStorage.getItem("lang");
      if (stored) {
        detected = stored;
      } else {
        const userLang = navigator.language || navigator.languages[0] || "fr";
        if (userLang.startsWith("en")) detected = "en";
      }
      setLocale(detected);
    }

    detectLang();
    setMounted(true);

    const onLangChange = () => detectLang();
    window.addEventListener("languageChanged", onLangChange);
    window.addEventListener("storage", onLangChange);

    return () => {
      window.removeEventListener("languageChanged", onLangChange);
      window.removeEventListener("storage", onLangChange);
    };
  }, []);
  if (!mounted) return null;
  const messages = locale === "en" ? messagesEn : messagesFr;
  return (
    <ErrorBoundary>
      <HtmlLangSync />
      <IntlProvider locale={locale} messages={messages} defaultLocale="fr">
        {children}
      </IntlProvider>
    </ErrorBoundary>
  );
});

export default ClientIntlProvider;
