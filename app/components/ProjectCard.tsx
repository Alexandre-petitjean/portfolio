import { ArrowRight, CheckCircle, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  iconPath: string;
  iconColor: "red" | "primary" | "blue" | "green" | "purple" | "orange";
  technologies: string[];
  isCompleted?: boolean;
  successMetric?: {
    text: string;
    icon: string;
    color: "primary" | "blue" | "green";
  };
  link?: string;
}

export function ProjectCard({
  title,
  description,
  iconPath,
  iconColor,
  technologies,
  isCompleted = false,
  successMetric,
  link,
}: ProjectCardProps) {
  // Mapping des couleurs pour les classes CSS
  const colorMap = {
    red: {
      bg: "from-red-500/20 to-red-600/20",
      hoverBg: "group-hover:from-red-400/30 group-hover:to-red-500/30",
      text: "text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300",
      badge: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-400/30",
    },
    primary: {
      bg: "from-primary-500/20 to-primary-600/20",
      hoverBg: "group-hover:from-primary-400/30 group-hover:to-primary-500/30",
      text: "text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300",
      badge:
        "bg-primary-500/20 text-primary-700 dark:text-primary-300 border-primary-400/30",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-600/20",
      hoverBg: "group-hover:from-blue-400/30 group-hover:to-blue-500/30",
      text: "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300",
      badge:
        "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-400/30",
    },
    green: {
      bg: "from-green-500/20 to-green-600/20",
      hoverBg: "group-hover:from-green-400/30 group-hover:to-green-500/30",
      text: "text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300",
      badge:
        "bg-green-500/20 text-green-700 dark:text-green-300 border-green-400/30",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-600/20",
      hoverBg: "group-hover:from-purple-400/30 group-hover:to-purple-500/30",
      text: "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300",
      badge:
        "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    },
    orange: {
      bg: "from-orange-500/20 to-orange-600/20",
      hoverBg: "group-hover:from-orange-400/30 group-hover:to-orange-500/30",
      text: "text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300",
      badge:
        "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-400/30",
    },
  };

  // Mapping des couleurs pour les technologies
  const techColorMap: { [key: string]: string } = {
    Django:
      "bg-primary-500/20 text-primary-700 dark:text-primary-300 border-primary-400/30",
    DRF: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-400/30",
    Python:
      "bg-primary-500/20 text-primary-700 dark:text-primary-300 border-primary-400/30",
    PostgreSQL:
      "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-400/30",
    MySQL:
      "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-400/30",
    Redis: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-400/30",
    Docker:
      "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    "GitLab CI":
      "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    RabbitMQ:
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-400/30",
    Flutter:
      "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-400/30",
    Prometheus:
      "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-400/30",
    Grafana:
      "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-400/30",
  };

  const getTechColor = (tech: string) => {
    return (
      techColorMap[tech] ||
      "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-400/30"
    );
  };

  const statusIconColor = isCompleted
    ? "text-primary-600 dark:text-primary-400"
    : "text-gray-600 dark:text-gray-400";

  // Couleurs pour les success metrics
  const getSuccessMetricClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "bg-primary-500/10",
        border: "border-primary-400/20",
        iconText: "text-primary-600 dark:text-primary-400",
        text: "text-primary-700 dark:text-primary-300",
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-400/20",
        iconText: "text-blue-600 dark:text-blue-400",
        text: "text-blue-700 dark:text-blue-300",
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-400/20",
        iconText: "text-green-600 dark:text-green-400",
        text: "text-green-700 dark:text-green-300",
      },
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <div className="group relative bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8 hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] h-full shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
      <div className="relative h-full flex flex-col">
        {/* Project Header */}
        <div className="flex items-center space-x-3 mb-6">
          {/* Icon */}
          <div
            className={`w-12 h-12 bg-gradient-to-br ${colorMap[iconColor].bg} rounded-2xl flex items-center justify-center ${colorMap[iconColor].hoverBg} transition-all duration-300`}
          >
            <svg
              className={`w-6 h-6 ${colorMap[iconColor].text} transition-colors`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d={iconPath}
              />
            </svg>
          </div>
          <h3
            className={`text-xl font-bold text-gray-900 dark:text-white ${colorMap[iconColor].text} transition-colors`}
          >
            {title}
          </h3>
        </div>

        {/* Contenu principal qui prend tout l'espace disponible */}
        <div className="flex-grow">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Success Metric (optionnel) */}
          {successMetric && (
            <div
              className={`mb-6 p-4 ${getSuccessMetricClasses(successMetric.color).bg} rounded-2xl border ${getSuccessMetricClasses(successMetric.color).border}`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className={`w-5 h-5 ${getSuccessMetricClasses(successMetric.color).iconText}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={successMetric.icon}
                  />
                </svg>
                <p
                  className={`${getSuccessMetricClasses(successMetric.color).text} font-semibold text-sm`}
                >
                  {successMetric.text}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 ${getTechColor(tech)} text-xs font-medium rounded-full border`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action fixée en bas */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-300/30 dark:border-gray-700/30">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            {isCompleted ? (
              <CheckCircle className={`w-4 h-4 ${statusIconColor}`} />
            ) : (
              <Calendar className={`w-4 h-4 ${statusIconColor}`} />
            )}
            <span className="text-sm">
              {isCompleted ? "Terminé" : "En cours"}
            </span>
          </div>
          {link && (
            <a
              href={link}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/btn"
            >
              <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
