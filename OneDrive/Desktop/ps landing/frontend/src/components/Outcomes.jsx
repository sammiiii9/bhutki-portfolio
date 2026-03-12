import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaGlobeAmericas, FaLightbulb, FaPalette, FaUsers, FaHeart } from 'react-icons/fa';

const OutcomeCard = memo(({ outcome, index }) => (
  <motion.div
    className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 cursor-pointer group overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700/20 group-hover:text-primary-500/20 transition-colors duration-300">
      {outcome.number}
    </div>
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        {outcome.icon}
      </div>
      <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors">
        {outcome.title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
        {outcome.description}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </motion.div>
));

OutcomeCard.displayName = 'OutcomeCard';

const Outcomes = () => {
  const outcomes = [
    {
      icon: <FaBrain />,
      number: '01',
      title: 'Confident Science Vocabulary',
      description: 'Kids will be able to name and describe planets, stars, and key space phenomena using correct scientific terms.'
    },
    {
      icon: <FaGlobeAmericas />,
      number: '02',
      title: 'Understanding of the Solar System',
      description: 'Children will accurately recall the order of planets, the role of the Sun, and how celestial bodies interact.'
    },
    {
      icon: <FaLightbulb />,
      number: '03',
      title: 'Critical Thinking & Curiosity',
      description: 'Through activities and discussion, kids develop the habit of asking questions and forming hypotheses about the world around them.'
    },
    {
      icon: <FaPalette />,
      number: '04',
      title: 'Creativity & Imagination',
      description: 'Hands-on activities encourage children to imagine, design, and create — boosting both artistic and scientific thinking.'
    },
    {
      icon: <FaUsers />,
      number: '05',
      title: 'Team Collaboration Skills',
      description: 'Group missions and games teach children how to communicate, cooperate, and celebrate shared discoveries.'
    },
    {
      icon: <FaHeart />,
      number: '06',
      title: 'Inspired Love for STEM',
      description: 'Children leave with a sense of wonder and excitement for science, technology, and future learning adventures.'
    },
  ];

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Outcomes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Skills and knowledge your child will gain from this program
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {outcomes.map((outcome, index) => (
            <OutcomeCard key={index} outcome={outcome} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
