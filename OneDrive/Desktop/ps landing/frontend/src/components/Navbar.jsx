import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onEnrollClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-background-light/95 backdrop-blur-sm py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          {/* PebbleSteps Logo Only */}
          <img 
            src="/pebblesteps.png.png" 
            alt="PebbleSteps" 
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <button onClick={() => scrollToSection('program')} className="text-text-dark hover:text-primary-600 transition font-medium">
            Program
          </button>
          <button onClick={() => scrollToSection('outcomes')} className="text-text-dark hover:text-primary-600 transition font-medium">
            Outcomes
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-text-dark hover:text-primary-600 transition font-medium">
            Pricing
          </button>
          <button onClick={() => scrollToSection('instructor')} className="text-text-dark hover:text-primary-600 transition font-medium">
            Instructor
          </button>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={onEnrollClick}
            className="hidden md:block px-3 sm:px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition font-medium text-sm"
          >
            Book Trial
          </button>
          <button
            onClick={onEnrollClick}
            className="px-4 sm:px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105 font-medium text-sm"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-text-dark hover:text-primary-600 transition"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 space-y-3">
              <button
                onClick={() => scrollToSection('program')}
                className="block w-full text-left px-4 py-3 text-text-dark hover:bg-primary-50 hover:text-primary-600 transition rounded-lg font-medium"
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection('outcomes')}
                className="block w-full text-left px-4 py-3 text-text-dark hover:bg-primary-50 hover:text-primary-600 transition rounded-lg font-medium"
              >
                Outcomes
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-3 text-text-dark hover:bg-primary-50 hover:text-primary-600 transition rounded-lg font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('instructor')}
                className="block w-full text-left px-4 py-3 text-text-dark hover:bg-primary-50 hover:text-primary-600 transition rounded-lg font-medium"
              >
                Instructor
              </button>
              <div className="pt-3 space-y-2">
                <button
                  onClick={() => {
                    onEnrollClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition font-medium text-center"
                >
                  Book Trial
                </button>
                <button
                  onClick={() => {
                    onEnrollClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:shadow-lg transition font-medium text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
