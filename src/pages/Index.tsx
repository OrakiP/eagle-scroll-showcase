import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CharacteristicsSection from '@/components/CharacteristicsSection';
import HabitatSection from '@/components/HabitatSection';
import BehaviorSection from '@/components/BehaviorSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);

      // Determine active section based on scroll position
      const sections = ['hero', 'characteristics', 'habitat', 'behavior'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrolled + 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const characteristicsSection = document.getElementById('characteristics');
    if (characteristicsSection) {
      characteristicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToConservation = () => {
    const habitatSection = document.getElementById('habitat');
    if (habitatSection) {
      habitatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="hero">
          <HeroSection 
            scrollProgress={scrollProgress} 
            onScrollToNext={handleScrollToNext}
            onNavigateToConservation={handleNavigateToConservation}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CharacteristicsSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <HabitatSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <BehaviorSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
