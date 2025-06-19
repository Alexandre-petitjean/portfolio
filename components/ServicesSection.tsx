import { Settings, Lightbulb, Rocket, Users } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="offers" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ce que je 
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              propose
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des solutions techniques adaptées à vos enjeux business avec une expertise Django et DevOps
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Service 1: Développement Django */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 mb-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                <Settings className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Développement Django
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Applications web robustes, APIs REST performantes et intégrations complexes
              </p>
            </div>
          </div>

          {/* Service 2: Conseil technique */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 mb-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                <Lightbulb className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Conseil technique
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Architecture logicielle, clean code et résolution de dette technique
              </p>
            </div>
          </div>

          {/* Service 3: DevOps & CI/CD */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 mb-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                <Rocket className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                DevOps & CI/CD
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Docker, monitoring avancé et déploiements automatisés
              </p>
            </div>
          </div>

          {/* Service 4: CTO as a Service */}
          <div className="group relative p-8 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="w-12 h-12 mb-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                <Users className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                CTO as a Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Direction technique stratégique pour startups et PME
              </p>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary-50/70 to-white/70 dark:from-primary-900/30 dark:to-gray-900/30 backdrop-blur-sm border border-primary-500/30 rounded-3xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400">
              <Settings className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Mon <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">approche</span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Je peux travailler seul ou en collaboration avec vos équipes existantes. 
              Mon objectif est toujours le même : <strong className="text-gray-900 dark:text-white">livrer du code robuste, compréhensible, 
              bien intégré</strong> dans vos processus métier et technique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 