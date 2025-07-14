"use client";

import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { navItems } from "@/app/constants/navigation";
import { useIntl } from "react-intl";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const intl = useIntl();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white/95 via-gray-50/95 to-primary-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-primary-900/95 backdrop-blur-md border-b border-primary-500/20 z-50">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-gray-900/5 dark:bg-white/5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo / Titre */}
          <div className="font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            Alexandre Petitjean
          </div>
          {/* Menu de navigation (desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group flex items-center space-x-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{intl.formatMessage({ id: item.i18nKey })}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </div>
          {/* Switch langue + thème + bouton contact */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 bg-primary-600 hover:bg-primary-700 border border-primary-500"
            >
              <span className="relative flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-primary-500/20 mt-1">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{intl.formatMessage({ id: item.i18nKey })}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-primary-600 dark:text-primary-400 font-medium py-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
