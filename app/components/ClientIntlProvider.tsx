"use client";
import { IntlProvider } from "react-intl";
import messagesFr from "@/app/constants/messages_fr";
import messagesEn from "@/app/constants/messages_en";

export default function ClientIntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Détection de la langue utilisateur (fr par défaut, en si préférence utilisateur)
  let locale = "fr";
  if (typeof window !== "undefined") {
    const userLang = navigator.language || navigator.languages[0] || "fr";
    if (userLang.startsWith("en")) locale = "en";
  }
  const messages = locale === "en" ? messagesEn : messagesFr;
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="fr">
      {children}
    </IntlProvider>
  );
}
