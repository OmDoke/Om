import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillSection from './components/SkillSection';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import NeuroChatWidget from './components/NeuroChatWidget';
import Footer from './components/Footer';

export default function App() {
  // Force the page to start at the top on every mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SkillSection />
        <ProjectCard />
        <ExperienceCard />
        <NeuroChatWidget />
      </main>
      <Footer />
    </>
  );
}
