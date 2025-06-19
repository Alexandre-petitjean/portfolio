"use client"

import { Navigation } from "../components/Navigation"
import { HeroSection } from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import TechStack from "../components/TechStack"
import ProjectsSection from "../components/ProjectsSection"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="mx-auto">
        <HeroSection />
        <ServicesSection />
        <TechStack />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
