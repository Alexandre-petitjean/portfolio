import { Clock, Users, Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Parlons de votre 
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              projet
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Disponible pour de nouvelles missions freelance ou en régie.
            <br className="hidden sm:block"/>
            <span className="text-primary-700 dark:text-primary-300 font-medium">Je vous répondrai sous 24h.</span>
          </p>
        </div>

        {/* Contact Content */}
        <div className="relative bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8 lg:p-12 hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative text-center">
            
            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="mailto:petitjean.alexandre.pro@gmail.com"
                 className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white dark:text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-primary-600 border-2 border-primary-500 group-hover:bg-primary-500 rounded-lg"></span>
                <span className="relative flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>Me contacter par email</span>
                </span>
              </a>
              
              <a href="https://www.linkedin.com/in/petitjeana/"
                 className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white dark:text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-blue-600 border-2 border-blue-500 group-hover:bg-blue-500 rounded-lg"></span>
                <span className="relative flex items-center space-x-3">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-300/30 dark:border-gray-700/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Réponse rapide</h3>
                <p className="text-gray-600 dark:text-gray-400">Réponse garantie sous 24h pour toute demande de projet</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Disponibilité</h3>  
                <p className="text-gray-600 dark:text-gray-400">Missions freelance & régie - Démarrage rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 