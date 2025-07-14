import { Navigation } from "@/app/sections/Navigation";
import TechStack from "@/app/sections/TechStack";
import { Footer } from "@/app/sections/Footer";
import { HeroSection } from "@/app/sections/Hero";
import ServicesSection from "@/app/sections/Services";
import ProjectsSection from "@/app/sections/Projects";
import AboutSection from "@/app/sections/About";
import ContactSection from "@/app/sections/Contact";

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
  );
}
