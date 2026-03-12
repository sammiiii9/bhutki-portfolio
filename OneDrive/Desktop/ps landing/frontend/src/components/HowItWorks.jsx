import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Enroll',
      description: 'Fill out the enrollment form and secure your spot',
      icon: '📝'
    },
    {
      number: '2',
      title: 'Attend Workshop',
      description: 'Join the interactive one-day workshop with expert instructors',
      icon: '💻'
    },
    {
      number: '3',
      title: 'Complete Activities',
      description: 'Participate in hands-on projects and space missions',
      icon: '🎯'
    },
    {
      number: '4',
      title: 'Get Certificate',
      description: 'Receive a certificate of completion for your achievement',
      icon: '🏆'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark mb-3 sm:mb-4">
            How the Workshop Works
          </h2>
          <p className="text-base sm:text-lg text-text-dark/70 max-w-2xl mx-auto px-4">
            Simple 4-step process to start your child's space adventure
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-center">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 text-3xl sm:text-4xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-dark mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-text-dark/70 text-sm sm:text-base">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
