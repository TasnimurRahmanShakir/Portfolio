import { ThemeToggle } from "@/Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { NavBar } from "@/Components/NavBar";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background */}
      <StarBackground />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};
