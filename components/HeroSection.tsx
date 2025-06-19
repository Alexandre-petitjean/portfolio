"use client"

import { MessageSquare, ArrowRight, Eye, ChevronDown } from "lucide-react"
import { Terminal } from "./Terminal"
import { StatsCard } from "./StatsCard"

export function HeroSection() {
  const stats = [
    { value: "5+", label: "Années d'expérience" },
    { value: "20+", label: "Projets livrés" },
    { value: "100%", label: "Satisfaction client" }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-gray-900 dark:text-white space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 dark:bg-primary-500/30 backdrop-blur-sm text-primary-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-primary-400/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 dark:bg-primary-400 opacity-100"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600 dark:bg-primary-300"></span>
              </span>
              <span className="font-semibold">Disponible pour nouveaux projets</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Expert</span>
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent whitespace-nowrap">
                  Django & DevOps
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Développeur fullstack indépendant, je conçois et maintiens des applications critiques 
                prêtes pour la production avec une approche DevOps moderne.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" 
                 className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-700 dark:bg-primary-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-primary-600 border-2 border-primary-500 group-hover:bg-primary-500 rounded-lg"></span>
                <span className="relative flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>Discutons de votre projet</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#projets" 
                 className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-gray-700 dark:text-white transition-all duration-200 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-200 dark:bg-gray-800 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-gray-300 dark:border-gray-600 group-hover:border-primary-500 group-hover:bg-primary-500/10 rounded-lg"></span>
                <span className="relative flex items-center space-x-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <Eye className="w-5 h-5" />
                  <span>Voir mes réalisations</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative hidden lg:block">
            {/* Terminal Window */}
            <Terminal />

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-500 dark:text-white/50" />
      </div>
    </section>
  )
} 