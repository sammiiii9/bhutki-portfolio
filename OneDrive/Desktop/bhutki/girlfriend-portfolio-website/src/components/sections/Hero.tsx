import { motion } from 'framer-motion';
import { FloatingCharacter } from '../ui/FloatingCharacter';
import { Doraemon } from '../ui/Doraemon';
import { SITE_CONFIG } from '../../utils/constants';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-doraemon-light-blue to-white"
    >
      {/* Floating Characters - Bigger and more animated */}
      <FloatingCharacter element="balloon" position={{ x: 10, y: 20 }} size="large" animationType="float" />
      <FloatingCharacter element="unicorn" position={{ x: 85, y: 15 }} size="large" animationType="bounce" />
      <FloatingCharacter element="teddybear" position={{ x: 15, y: 70 }} size="large" animationType="float" />
      <FloatingCharacter element="dolphin" position={{ x: 80, y: 65 }} size="large" animationType="bounce" />
      <FloatingCharacter element="dorayaki" position={{ x: 5, y: 45 }} size="medium" animationType="rotate" />
      <FloatingCharacter element="toy" position={{ x: 90, y: 40 }} size="medium" animationType="float" />
      <FloatingCharacter element="doll" position={{ x: 3, y: 10 }} size="large" animationType="bounce" />
      <FloatingCharacter element="doll" position={{ x: 93, y: 85 }} size="large" animationType="float" />
      
      {/* Big Realistic Doraemon characters */}
      <motion.div
        className="absolute left-[2%] bottom-[10%] z-0 opacity-80"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Doraemon size="large" />
      </motion.div>
      
      <motion.div
        className="absolute right-[2%] top-[15%] z-0 opacity-80"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Doraemon size="large" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          >
            <div className="relative">
              <img
                src="/IMG_20250908_081032.jpg"
                alt="Tuktuki"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-doraemon-yellow shadow-2xl"
              />
              <motion.div
                className="absolute -top-4 -right-4 text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👑
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-heading text-doraemon-blue mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi I am Tuktuki Don! 👋
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-body text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Also known as <span className="text-unicorn-pink font-bold">Bhutki</span> and{' '}
            <span className="text-doraemon-red font-bold">Chhota Don</span>
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-comic text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {SITE_CONFIG.owner.tagline}
          </motion.p>

          <motion.div
            className="text-6xl mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🦄✨🧸
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="text-4xl">⬇️</div>
        </motion.div>
      </div>
    </section>
  );
};
