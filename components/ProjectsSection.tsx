import { ProjectCard } from "./ProjectCard"
import { Lightbulb, MessageSquare, ArrowRight } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projets" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Projets 
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              récents
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Applications critiques en production avec un impact métier mesurable
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          
          {/* Project 1: CRM Opérateur Télécom */}
          <ProjectCard 
            title="CRM Opérateur Télécom"
            description="Projet legacy critique (10+ ans) avec forts enjeux métier. Développement de nouvelles fonctionnalités, corrections de bugs critiques, et montée de version progressive."
            iconPath="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            iconColor="red"
            technologies={["Django", "DRF", "MySQL", "Docker", "RabbitMQ"]}
            isCompleted={false}
          />

          {/* Project 2: CRM Gestion de Patrimoine */}
          <ProjectCard 
            title="CRM Gestion de Patrimoine"
            description="Développement fullstack solo avec rôle de dev, PO et lead technique. Mise en production complète avec monitoring et scaling."
            iconPath="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3z M9 8.25h6M9 11.25h6M9 14.25h6M9 17.25h6"
            iconColor="primary"
            technologies={["Django", "PostgreSQL", "Redis", "GitLab CI"]}
            isCompleted={true}
            successMetric={{
              text: "70% du business migré sur l'outil",
              icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              color: "primary"
            }}
          />

          {/* Project 3: Application Logistique Multisite */}
          <ProjectCard 
            title="Logistique Multisite"
            description="Refonte complète d'un outil de gestion de stock legacy + développement d'APIs + applications mobiles Flutter."
            iconPath="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m14.25 4.5v-4.5a1.125 1.125 0 00-1.125-1.125h-9.375m12 6.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V18a.75.75 0 00.75.75z"
            iconColor="blue"
            technologies={["Django", "DRF", "Flutter", "MySQL", "Prometheus", "Grafana"]}
            isCompleted={true}
            successMetric={{
              text: "Déploiement sur 20+ sites industriels",
              icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
              color: "blue"
            }}
          />

        </div>

        {/* Call to Action */}
        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary-50/70 to-white/70 dark:from-primary-900/30 dark:to-gray-900/30 backdrop-blur-sm border border-primary-500/30 rounded-3xl text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 text-primary-600 dark:text-primary-400">
                <Lightbulb className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Vous avez un 
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">projet en tête ?</span>
              </h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Ces projets reflètent mon approche : <strong className="text-gray-900 dark:text-white">comprendre les enjeux métier</strong>, 
              concevoir des solutions robustes et assurer une mise en production sans accroc.
            </p>
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-700 dark:bg-primary-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-primary-600 border-2 border-primary-500 group-hover:bg-primary-500 rounded-lg"></span>
              <span className="relative flex items-center space-x-3">
                <MessageSquare className="w-5 h-5" />
                <span>Parlons de votre projet</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 