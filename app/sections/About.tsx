import { Monitor, Code, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            À 
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              propos
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Développeur backend passionné par les solutions robustes et scalables
          </p>
        </div>

        {/* About Content */}
        <div className="relative bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8 lg:p-12 hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">Développeur backend indépendant</span> spécialisé en 
                <span className="text-primary-700 dark:text-primary-300 font-medium"> Django depuis plus de 5 ans</span>,
                mon expertise couvre l&apos;intégralité du cycle de vie d&apos;une application :
                <span className="text-gray-900 dark:text-white font-medium"> architecture, développement, CI/CD, mise en production et supervision</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                Je travaille avec des <span className="text-primary-700 dark:text-primary-300 font-medium">startups, des PME</span> et des 
                <span className="text-gray-900 dark:text-white font-medium"> environnements techniques exigeants</span>.
                Mon approche se concentre sur la production de code 
                <span className="text-primary-600 dark:text-primary-400 font-semibold"> maintenable, documenté, testé</span> et 
                <span className="text-gray-900 dark:text-white font-medium"> prêt pour la production</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                À l&apos;aise aussi bien <span className="text-primary-700 dark:text-primary-300 font-medium">en équipe qu&apos;en autonomie complète</span>, 
                j&apos;aime comprendre les <span className="text-gray-900 dark:text-white font-medium">enjeux métier</span>
                pour proposer des solutions techniques 
                <span className="text-primary-600 dark:text-primary-400 font-semibold"> pertinentes et scalables</span>.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5+ ans d&apos;expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Django, Python, architectures complexes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Code de qualité</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Maintenable, testé, documenté</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solutions scalables</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Architecture pensée pour la croissance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 