import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import SkillSection from './components/SkillSection';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import Education from './components/Education';
import NeuroChatWidget from './components/NeuroChatWidget';
import Footer from './components/Footer';
import { SketchDefs } from './components/Sketch';

export default function App() {
  // Force the page to start at the top on every mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <>
      <SketchDefs />
      <Navbar />
      <main>
        <Hero />
        <div className="container">
          <Stats />
          <SkillSection />
          <ProjectCard />
          <ExperienceCard />
          <Education />
        </div>
        <NeuroChatWidget />
      </main>
      <Footer />
    </>
  );
}
