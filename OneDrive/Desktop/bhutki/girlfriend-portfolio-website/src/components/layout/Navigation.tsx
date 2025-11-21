import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION_SECTIONS } from '../../utils/constants';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-doraemon-blue shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 10 }}
            onClick={() => scrollToSection('hero')}
          >
            🔔
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_SECTIONS.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-body font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-doraemon-yellow text-gray-800'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-doraemon-blue"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            {NAVIGATION_SECTIONS.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-cartoon font-body font-medium ${
                  activeSection === section.id
                    ? 'bg-doraemon-yellow text-gray-800'
                    : 'bg-white bg-opacity-10 text-white'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{section.icon}</span>
                <span>{section.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
