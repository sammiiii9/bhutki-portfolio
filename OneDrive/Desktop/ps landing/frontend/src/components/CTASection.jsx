import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaRocket, FaStar, FaUsers } from 'react-icons/fa';

const CTASection = ({ onEnrollClick }) => {
  const features = [
    { icon: <FaRocket />, text: 'Live Interactive Sessions' },
    { icon: <FaStar />, text: 'Expert Instructors' },
    { icon: <FaUsers />, text: 'Small Batch Sizes' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 overflow-hidden group">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500" />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl mb-4 sm:mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaRocket className="text-white text-2xl sm:text-3xl" />
              </motion.div>

              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
                Ready to Launch Your Child's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Curiosity?
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join hundreds of families who've discovered the joy of space learning
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 px-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-800/50 border border-gray-700 px-3 sm:px-4 py-2 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#f59e0b' }}
                  >
                    <div className="text-yellow-500 text-base sm:text-lg">{feature.icon}</div>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <motion.button
                  onClick={onEnrollClick}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
                <motion.a
                  href="tel:+917471128755"
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  <span>Call Now</span>
                </motion.a>
              </div>

              {/* Phone number */}
              <motion.p
                className="text-gray-400 mt-6 flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <FaPhone className="text-yellow-500" />
                <span>+91 74711 28755</span>
              </motion.p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
