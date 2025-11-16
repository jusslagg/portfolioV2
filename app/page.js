import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsConstellation } from "../components/SkillsConstellation";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-24 pt-8 text-white md:px-6 lg:px-8">
      <div className="starfield -z-10" />
      <div className="stardust -z-10" />
      <div className="wormhole-glow -z-20" />
      <div className="pointer-events-none absolute inset-0 -z-30 opacity-40">
        <div className="cosmic-grid absolute inset-6 rounded-[46px] border border-white/5" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <NavBar />
        <Hero />
        <AboutSection />
        <SkillsConstellation />
        <ProjectsShowcase />
        <ContactSection />
      </div>
    </main>
  );
}
