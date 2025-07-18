"use client";

import { Settings, Lightbulb, Rocket, Users } from "lucide-react";
import { useIntl } from "react-intl";
import { ServiceCard } from "@/app/components/services/ServiceCard";

export default function ServicesSection() {
  const intl = useIntl();

  const services = [
    {
      icon: Settings,
      titleKey: "services.django.title",
      descriptionKey: "services.django.description",
    },
    {
      icon: Rocket,
      titleKey: "services.devops.title",
      descriptionKey: "services.devops.description",
    },
    {
      icon: Lightbulb,
      titleKey: "services.consulting.title",
      descriptionKey: "services.consulting.description",
    },
    {
      icon: Users,
      titleKey: "services.cto.title",
      descriptionKey: "services.cto.description",
    },
  ];

  return (
    <section id="offers" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/50 to-primary-50/80 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-primary-900/80" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {intl.formatMessage({ id: "services.badge" })}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {intl.formatMessage({ id: "services.title" })}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              {intl.formatMessage({ id: "services.description" })}
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {intl.formatMessage({ id: "services.subtitle" })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl opacity-50" />
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-500/10 dark:bg-primary-500/20">
                <Settings className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {intl.formatMessage({ id: "services.approach.title" })}
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {intl.formatMessage({ id: "services.approach.description" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
