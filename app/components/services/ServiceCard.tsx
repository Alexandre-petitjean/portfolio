"use client";

import { LucideIcon } from "lucide-react";
import { useIntl } from "react-intl";
import { memo } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  titleKey,
  descriptionKey,
  className = "",
  style,
}: ServiceCardProps) {
  const intl = useIntl();

  return (
    <div
      className={`group relative p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-500/30 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>

        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
          {intl.formatMessage({ id: titleKey })}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {intl.formatMessage({ id: descriptionKey })}
        </p>
      </div>
    </div>
  );
});
