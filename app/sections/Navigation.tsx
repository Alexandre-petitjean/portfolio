"use client";

import { useState, memo } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { navItems } from "@/app/constants/navigation";
import { useIntl } from "react-intl";
import { cn } from "@/app/lib/utils";

export const Navigation = memo(function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const intl = useIntl();

  const renderNavItem = (item: (typeof navItems)[0], isMobileView = false) => {
    const textStyles = "text-gray-700 dark:text-white/90";
    const hoverStyles = "hover:text-primary-600 dark:hover:text-primary-400";
    const transitionStyles = "transition-all duration-200";
    const layoutStyles = "group flex items-center space-x-2";
    const commonClasses = cn(
      "relative",
      textStyles,
      hoverStyles,
      transitionStyles,
      layoutStyles,
    );

    const buttonBaseStyles =
      "group relative inline-flex items-center justify-center px-4 py-2 font-medium text-white";
    const buttonTransitionStyles = "transition-all duration-200 ease-out";
    const buttonFocusStyles =
      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900";
    const buttonBackgroundStyles =
      "bg-primary-600 hover:bg-primary-700 border border-primary-500 rounded-lg";
    const buttonClasses = cn(
      buttonBaseStyles,
      buttonTransitionStyles,
      buttonFocusStyles,
      buttonBackgroundStyles,
    );

    if (item.isButton) {
      return (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            buttonClasses,
            isMobileView ? "w-full" : "lg:w-10 lg:h-10 lg:p-0",
          )}
          onClick={() => isMobileView && setIsMobileMenuOpen(false)}
        >
          <div className="flex items-center justify-center">
            <item.icon className="w-4 h-4" />
            <span className={cn("ml-2", { "lg:hidden": !isMobileView })}>
              {intl.formatMessage({ id: item.i18nKey })}
            </span>
          </div>
        </a>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        className={cn(commonClasses, isMobileView ? "text-lg" : "text-sm")}
        onClick={() => isMobileView && setIsMobileMenuOpen(false)}
      >
        <item.icon className={cn("w-4 h-4", isMobileView && "w-5 h-5")} />
        <span>{intl.formatMessage({ id: item.i18nKey })}</span>
        {!isMobileView && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 group-hover:w-full transition-all duration-200"></span>
        )}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white/95 via-gray-50/95 to-primary-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-primary-900/95 backdrop-blur-md border-b border-primary-500/20 z-50">
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo / Titre */}
          <div className="font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            Alexandre Petitjean
          </div>

          {/* Menu de navigation (desktop) */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems
              .filter((item) => !item.isButton)
              .map((item) => renderNavItem(item))}
          </div>

          {/* Actions (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            {navItems
              .filter((item) => item.isButton)
              .map((item) => renderNavItem(item))}
          </div>

          {/* Actions (mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white/90 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-primary-500/20 mt-1">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});
