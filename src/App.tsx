import React from 'react';
import { MouseFollower } from './components/MouseFollower';
import { Menu } from './components/Menu';
import { HeroSection } from './components/HeroSection';
import { ScrollingText } from './components/ScrollingText';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ResourcesSection } from './components/ResourcesSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <MouseFollower />
      <Menu />
      <HeroSection />
      <ScrollingText />
      <ProjectsSection />
      <PhilosophySection />
      <ResourcesSection />
      <SocialSection />
      <ContactSection />
    </div>
  );
}

export default App;