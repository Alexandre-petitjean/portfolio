"use client";

import { MessageSquare, ArrowRight, Eye, ChevronDown } from "lucide-react";
import { StatsCard } from "@/app/components/hero/StatsCard";
import HeroTerminal from "@/app/components/hero/HeroTerminal";
import { useIntl, FormattedMessage } from "react-intl";
import { useAnimatedCounters } from "@/app/hooks/useAnimatedCounters";

export function HeroSection() {
  const intl = useIntl();
  const { projectsCount, yearsCount, clientsCount, ref } =
    useAnimatedCounters();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 hero-bg-pattern"></div>
      </div>
      <div className="relative max-w-screen-2xl mx-auto px-2 px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-gray-900 dark:text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 dark:bg-primary-500/30 backdrop-blur-sm text-primary-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-primary-400/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 dark:bg-primary-400 opacity-100"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600 dark:bg-primary-300"></span>
              </span>
              <span className="font-semibold">
                <FormattedMessage id="hero.available" />
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">
                  <FormattedMessage id="hero.primaryTitle" />
                </span>
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent whitespace-nowrap">
                  <FormattedMessage id="hero.secondaryTitle" />
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                <FormattedMessage id="hero.description" />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-700 dark:bg-primary-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-primary-600 border-2 border-primary-500 group-hover:bg-primary-500 rounded-lg"></span>
                <span className="relative flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>
                    <FormattedMessage id="hero.contact" />
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#projets"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 dark:text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-200 dark:bg-gray-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary-500 group-hover:bg-primary-500/10 rounded-lg"></span>
                <span className="relative flex items-center space-x-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <Eye className="w-5 h-5" />
                  <span>
                    <FormattedMessage id="hero.projects" />
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
              ref={ref}
            >
              <StatsCard
                value={`${yearsCount}+`}
                label={intl.formatMessage({ id: "hero.stats.years" })}
              />
              <StatsCard
                value={`${projectsCount}+`}
                label={intl.formatMessage({ id: "hero.stats.projects" })}
              />
              <StatsCard
                value={`${clientsCount}%`}
                label={intl.formatMessage({ id: "hero.stats.satisfaction" })}
              />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <HeroTerminal />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-500 dark:text-white/50" />
      </div>
    </section>
  );
}
