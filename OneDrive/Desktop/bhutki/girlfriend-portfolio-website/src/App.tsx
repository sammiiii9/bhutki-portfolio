import { useState, useEffect } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CurrentActivities } from './components/sections/CurrentActivities';
import { PhotoGallery } from './components/sections/PhotoGallery';
import { Aspirations } from './components/sections/Aspirations';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'activities', 'gallery', 'aspirations'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <CurrentActivities />
        <PhotoGallery />
        <Aspirations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
