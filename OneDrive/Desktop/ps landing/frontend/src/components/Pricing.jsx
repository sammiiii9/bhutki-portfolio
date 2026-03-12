import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaClock, FaUsers } from 'react-icons/fa';

const Pricing = ({ onEnrollClick }) => {
  const features = [
    'Live Interactive Workshop',
    'Complete Space Science Curriculum',
    'Hands-on Activities & Projects',
    'Space Learning Certificate'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-background-light">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark mb-3 sm:mb-4">
            Start Your Child's Space Learning Journey
          </h2>
          <p className="text-base sm:text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Give your child an exciting introduction to space science through live interactive sessions, 
            hands-on activities, and guided exploration.
          </p>
        </motion.div>

        {/* Single Centered Pricing Card */}
        <div className="flex justify-center px-4 mt-8">
          <motion.div
            className="relative w-full max-w-[600px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge - Positioned above card on all screen sizes */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <motion.div
                className="bg-gradient-to-r from-accent-yellow to-amber-400 text-text-dark px-4 sm:px-6 py-2 rounded-full shadow-lg font-bold text-xs sm:text-sm inline-flex items-center whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-1">⭐</span> Most Popular Program
              </motion.div>
            </div>

            {/* Premium Featured Card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-primary-200 group">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-yellow to-primary-600" />

              <div className="p-6 sm:p-8 md:p-12 pt-10 sm:pt-12">
                {/* Program Title */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-2 sm:mb-3">
                    Astronaut Program
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-600">₹1,899</span>
                  </div>
                  
                  {/* Price Label */}
                  <p className="text-text-dark/60 font-medium text-sm sm:text-base">
                    Complete Space Training Program
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-6 sm:mb-8" />

                {/* Features List */}
                <div className="mb-6 sm:mb-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start space-x-2 sm:space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mt-0.5">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span className="text-text-dark font-medium text-base sm:text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={onEnrollClick}
                  className="w-full py-4 sm:py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4 sm:mb-6"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Your Child Now
                </motion.button>

                {/* Trust / Scarcity Text */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 text-text-dark/70">
                    <FaUsers className="text-primary-600" />
                    <span className="font-medium">Limited seats available</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-text-dark/20" />
                  <div className="flex items-center space-x-2 text-text-dark/70">
                    <FaClock className="text-primary-600" />
                    <span className="font-medium">Next batch starting soon</span>
                  </div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-yellow to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-accent-yellow/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-primary-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
