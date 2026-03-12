import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/pebblesteps.png.png" 
                alt="PebbleSteps" 
                className="h-12 w-12 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering young minds through innovative learning experiences in space science and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('program')} className="hover:text-white transition">
                  Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curriculum')} className="hover:text-white transition">
                  Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('outcomes')} className="hover:text-white transition">
                  Outcomes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('instructor')} className="hover:text-white transition">
                  Instructor
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <FaPhone className="mt-1 flex-shrink-0" />
                <span>+91 74711 28755</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 flex-shrink-0" />
                <span>info@pebblesteps.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pebble Steps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
