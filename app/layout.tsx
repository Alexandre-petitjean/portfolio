import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ClientIntlProvider from "@/app/components/ClientIntlProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandre Petitjean - Expert Django & DevOps",
  description:
    "Développeur fullstack indépendant spécialisé en Django et DevOps. Applications critiques prêtes pour la production.",
  metadataBase: new URL("https://alexandrepetitjean.dev"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Alexandre Petitjean - Expert Django & DevOps",
    description:
      "Développeur fullstack indépendant spécialisé en Django et DevOps",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 dark:text-white`}
      >
        <ClientIntlProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientIntlProvider>
      </body>
    </html>
  );
}
