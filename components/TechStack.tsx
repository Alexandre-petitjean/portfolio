import { Server, Cloud, GraduationCap, Sparkles } from "lucide-react"

const techStack = [
  "Django",
  "Python",
  "Celery",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "Traefik",
  "CoreDNS",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Poetry",
]

export default function TechStack() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Stack 
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              technique
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies maîtrisées pour vos projets critiques avec une expertise approfondie
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Backend & API */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mr-4 group-hover:from-primary-400/30 group-hover:to-primary-500/30 transition-all duration-300">
                  <Server className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  Backend & API
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Django, Django REST Framework</span>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-400/30">
                    Expert
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Python, SQL/PLSQL</span>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-400/30">
                    Expert
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Celery, RabbitMQ, Redis</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">PostgreSQL, MySQL/MariaDB</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps & Infra */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mr-4 group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  DevOps & Infra
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Docker, Docker Compose</span>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-400/30">
                    Expert
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">GitLab CI/CD, Jenkins</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Linux, monitoring</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Prometheus, Grafana</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Méthodologie */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mr-4 group-hover:from-purple-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  Méthodologie
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Agile/Scrum, Clean Code</span>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-400/30">
                    Expert
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">TDD, Documentation</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Git, GitLab, PyCharm</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Avancé
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/30 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Flutter, React</span>
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-600 dark:text-gray-400 text-sm font-semibold rounded-full border border-gray-400/30">
                    Notions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 relative p-8 lg:p-12 bg-gradient-to-br from-primary-50/70 to-white/70 dark:from-primary-900/30 dark:to-gray-900/30 backdrop-blur-sm border border-primary-500/30 rounded-3xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400">
              <Sparkles className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Expertise <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">approfondie</span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-gray-900 dark:text-white">Plus de 8 ans d'expérience</strong> dans le développement d'applications critiques. 
              Je maîtrise l'ensemble de la chaîne technique, de la conception à la mise en production, 
              en passant par l'optimisation des performances et la sécurité.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 