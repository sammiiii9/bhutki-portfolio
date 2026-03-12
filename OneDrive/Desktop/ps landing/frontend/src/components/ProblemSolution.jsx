import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
  const topics = [
    { icon: '🔭', label: 'Solar System' },
    { icon: '🪐', label: 'Planets' },
    { icon: '👨‍🚀', label: 'Astronauts' },
    { icon: '🌌', label: 'Galaxies' },
    { icon: '🔬', label: 'Space Science' },
    { icon: '🌍', label: 'Universe' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-yellow-600/20 border border-yellow-600/30 px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-yellow-500 text-lg">✨</span>
            <span className="text-yellow-500 font-semibold text-sm">About the Program</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Launch Your Child Into the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              World of Space Science
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Our Space Training program helps children explore the wonders of the universe through engaging storytelling, hands-on activities, and interactive missions. Young learners will discover fascinating topics including:
          </motion.p>

          {/* Topic Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-600/20 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {topic.icon}
                </div>
                <p className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                  {topic.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
