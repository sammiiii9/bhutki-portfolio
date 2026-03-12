import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaCertificate, FaGamepad } from 'react-icons/fa';

const Hero = ({ onEnrollClick }) => {
  const highlights = [
    { icon: <FaRocket />, text: 'Live interactive sessions' },
    { icon: <FaGamepad />, text: 'Hands-on activities' },
    { icon: <FaStar />, text: 'Space missions & games' },
    { icon: <FaCertificate />, text: 'Certificate of completion' },
  ];

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-background-light via-background-cream to-amber-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-card mb-4 sm:mb-6 text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-text-dark/70">Pebble Steps · Six Bricks & Gillingham</span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-4 sm:mb-6 leading-tight">
              Space Training <br />
              <span className="text-gradient">for Kids</span>
            </h1>

            <p className="text-base sm:text-lg text-text-dark/80 mb-6 sm:mb-8 leading-relaxed">
              A fun and interactive learning adventure where children explore planets, astronauts, 
              galaxies, and the mysteries of space.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary-600 text-lg sm:text-xl">{item.icon}</div>
                  <span className="text-xs sm:text-sm text-text-dark/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <motion.button
                onClick={onEnrollClick}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-xl transition transform hover:scale-105 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
              <motion.button
                onClick={onEnrollClick}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Trial Session
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative order-first md:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-900 rounded-2xl sm:rounded-3xl">
              {/* Background stars */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3
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

              {/* Sun at center */}
              <motion.div
                className="absolute w-16 h-16 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, #FDB813 0%, #FF8C00 50%, #FF4500 100%)',
                  boxShadow: '0 0 40px rgba(253, 184, 19, 0.8), 0 0 80px rgba(255, 140, 0, 0.5), inset 0 0 20px rgba(255, 69, 0, 0.3)'
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 40px rgba(253, 184, 19, 0.8), 0 0 80px rgba(255, 140, 0, 0.5)',
                    '0 0 50px rgba(253, 184, 19, 1), 0 0 100px rgba(255, 140, 0, 0.7)',
                    '0 0 40px rgba(253, 184, 19, 0.8), 0 0 80px rgba(255, 140, 0, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Mercury - smallest, gray */}
              <motion.div
                className="absolute w-40 h-40 border border-gray-400/20 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-40 h-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #8C8C8C 0%, #5A5A5A 100%)',
                    boxShadow: '0 0 4px rgba(140, 140, 140, 0.5)'
                  }}
                />
              </motion.div>

              {/* Venus - yellowish */}
              <motion.div
                className="absolute w-56 h-56 border border-yellow-400/20 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-56 h-56"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #FFC649 0%, #E8A317 100%)',
                    boxShadow: '0 0 6px rgba(255, 198, 73, 0.6)'
                  }}
                />
              </motion.div>

              {/* Earth - blue with atmosphere glow */}
              <motion.div
                className="absolute w-72 h-72 border border-blue-400/20 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-72 h-72"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div 
                    className="w-4 h-4 rounded-full relative"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, #4A90E2 0%, #2E5C8A 50%, #1E3A5F 100%)',
                      boxShadow: '0 0 8px rgba(74, 144, 226, 0.7), inset -2px -2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Moon */}
                    <motion.div
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #D3D3D3 0%, #A9A9A9 100%)',
                        top: '-8px',
                        left: '50%'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <div style={{ transform: 'translate(12px, 0)' }} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Mars - red planet */}
              <motion.div
                className="absolute w-[340px] h-[340px] border border-red-400/20 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-[340px] h-[340px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #E27B58 0%, #C1440E 50%, #8B2500 100%)',
                    boxShadow: '0 0 6px rgba(226, 123, 88, 0.6)'
                  }}
                />
              </motion.div>

              {/* Jupiter - largest, with bands */}
              <motion.div
                className="absolute w-[400px] h-[400px] border border-orange-400/15 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-[400px] h-[400px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full relative overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #F4D6A5 0%, #E8B878 30%, #D4A574 60%, #C19A6B 100%)',
                    boxShadow: '0 0 12px rgba(228, 184, 120, 0.7), inset -3px -3px 6px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Jupiter's bands */}
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-0.5 bg-orange-800/30 top-1/4" />
                    <div className="absolute w-full h-0.5 bg-orange-900/40 top-1/2" />
                    <div className="absolute w-full h-0.5 bg-orange-800/30 top-3/4" />
                    {/* Great Red Spot */}
                    <div className="absolute w-2 h-1.5 bg-red-400/60 rounded-full top-1/2 left-1/3 -translate-y-1/2" />
                  </div>
                </div>
              </motion.div>

              {/* Saturn - with prominent rings */}
              <motion.div
                className="absolute w-[460px] h-[460px] border border-yellow-400/15 rounded-full"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                className="absolute w-[460px] h-[460px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    {/* Saturn's rings (behind) */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-3 rounded-full -z-10"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(210, 180, 140, 0.4), rgba(210, 180, 140, 0.7), rgba(210, 180, 140, 0.4))',
                        transform: 'translate(-50%, -50%) perspective(100px) rotateX(75deg)',
                        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                    {/* Saturn body */}
                    <div 
                      className="w-6 h-6 rounded-full relative"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, #F4E7C3 0%, #E8D4A0 40%, #D4C090 100%)',
                        boxShadow: '0 0 10px rgba(228, 212, 160, 0.6), inset -2px -2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    {/* Saturn's rings (front) */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-3 rounded-full"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(210, 180, 140, 0.6), rgba(210, 180, 140, 0.9), rgba(210, 180, 140, 0.6))',
                        transform: 'translate(-50%, -50%) perspective(100px) rotateX(75deg)',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shooting star */}
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: '20%',
                  left: '-10%',
                  boxShadow: '0 0 4px white, 2px 0 20px rgba(255, 255, 255, 0.5)'
                }}
                animate={{
                  x: ['0vw', '120vw'],
                  y: ['0vh', '40vh'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 8,
                  ease: "easeIn"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
