import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function HomePage() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
