import React from 'react';
import { motion } from 'framer-motion';

const ProgramOverview = () => {
  const programs = [
    { 
      icon: '🌍', 
      title: 'Solar System Basics', 
      description: 'Each session is carefully structured to take children on a progressive journey from our solar neighbourhood all the way to the edges of the cosmos.',
      topics: [
        'The Sun :- our star',
        'Eight planets & their order',
        'Moons, asteroids & comets',
        'What holds the solar system together'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: '⭐', 
      title: 'Planets & Stars', 
      description: 'Discover the fascinating differences between planets and learn about the life cycle of stars.',
      topics: [
        'Rocky vs. gas giant planets',
        'Unique features of each planet',
        'How stars are born & die',
        'Constellations kids can spot'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    { 
      icon: '🔬', 
      title: 'Space Facts & Fun Science', 
      description: 'Explore mind-blowing space phenomena and understand the science behind everyday wonders.',
      topics: [
        'What is gravity & zero-gravity?',
        'How rockets launch into space',
        'Black holes explained simply',
        'Day vs. night & the seasons'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    { 
      icon: '👨‍🚀', 
      title: 'Astronauts & Space Missions', 
      description: 'Step into the shoes of real astronauts and explore historic space missions.',
      topics: [
        'Who astronauts are & what they do',
        'Living on the International Space Station',
        'Famous missions: Moon landing, Mars rovers',
        'Could YOU become an astronaut?'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    },
    { 
      icon: '🌌', 
      title: 'Galaxies & Beyond', 
      description: 'Journey beyond our solar system to explore the vast universe and its mysteries.',
      topics: [
        'The Milky Way :- our home galaxy',
        'Types of galaxies',
        'The Big Bang in simple words',
        'Is there life beyond Earth?'
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    { 
      icon: '🎮', 
      title: 'Interactive Activities', 
      description: 'Hands-on projects and games that make learning space science fun and memorable.',
      topics: [
        'Build a model solar system',
        'Astronaut role-play challenges',
        'Space quiz & trivia games',
        'Creative drawing: design your planet!'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
  ];

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Cover
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each session is carefully structured to take children on a progressive journey — from our solar neighbourhood all the way to the edges of the cosmos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${program.gradient}`} />
              
              <div className="relative p-6 sm:p-8">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${program.gradient} mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl sm:text-4xl">{program.icon}</span>
                </div>
                
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Topics list with custom bullets */}
                <ul className="space-y-2 sm:space-y-2.5">
                  {program.topics.map((topic, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-gray-700 text-xs sm:text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient} mr-2 sm:mr-3 mt-1.5 flex-shrink-0`} />
                      <span className="leading-relaxed">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom decorative element */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
