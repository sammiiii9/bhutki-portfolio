import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGraduationCap, FaAward, FaStar, FaUsers } from 'react-icons/fa';

const Instructor = () => {
  const achievements = [
    { icon: <FaGraduationCap />, label: 'M.Ed in Science Education', sublabel: 'B.Sc in Physics' },
    { icon: <FaAward />, label: 'Certified Six Bricks Trainer', sublabel: '10+ Years Experience' },
    { icon: <FaUsers />, label: '500+ Students Taught', sublabel: 'Across 50+ Batches' },
    { icon: <FaStar />, label: '4.9/5 Average Rating', sublabel: 'From Parents' },
  ];

  return (
    <section id="instructor" className="py-20 bg-gradient-to-b from-white to-background-light">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">
            Learn from an experienced educator passionate about space science
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-100">
            {/* Mobile & Tablet: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row">
              {/* Profile Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-primary-600 to-primary-500 p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <motion.div
                  className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center text-6xl md:text-7xl mb-4 md:mb-6 shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  👩‍🏫
                </motion.div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  Purnima Banerji
                </h3>
                <p className="text-white/90 font-semibold mb-4 md:mb-6 text-sm md:text-base">Lead Space Educator</p>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm md:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-lg md:text-xl" />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>

              {/* Details Section */}
              <div className="lg:w-3/5 p-6 md:p-8 lg:p-12">
                <div className="mb-6 md:mb-8">
                  <h4 className="font-display text-xl md:text-2xl font-bold text-text-dark mb-3 md:mb-4">
                    About the Instructor
                  </h4>
                  <p className="text-text-dark/80 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    With over 10 years of experience in early childhood education and a passion for 
                    space science, Purnima has helped hundreds of children discover the wonders of 
                    the universe.
                  </p>
                  <p className="text-text-dark/80 leading-relaxed text-sm md:text-base">
                    She specializes in making complex concepts simple and fun, using interactive 
                    storytelling and hands-on activities that spark curiosity and inspire young minds.
                  </p>
                </div>

                {/* Achievements Grid - 2 columns on all screen sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-primary-50 to-background-light p-3 md:p-4 rounded-2xl border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform text-sm md:text-base">
                          {achievement.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-text-dark text-xs md:text-sm leading-tight mb-1">
                            {achievement.label}
                          </p>
                          <p className="text-text-dark/60 text-xs">
                            {achievement.sublabel}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;
