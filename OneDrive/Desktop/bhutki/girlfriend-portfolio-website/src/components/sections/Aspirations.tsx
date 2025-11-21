import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartoonCard } from '../ui/CartoonCard';
import { FloatingCharacter } from '../ui/FloatingCharacter';
import { Doraemon } from '../ui/Doraemon';
import { ASPIRATIONS } from '../../utils/constants';

export const Aspirations: React.FC = () => {
  const [selectedAspiration, setSelectedAspiration] = useState<string | null>(null);

  const selectedAspirationData = ASPIRATIONS.find(a => a.id === selectedAspiration);

  return (
    <section
      id="aspirations"
      className="relative py-section px-4 bg-gradient-to-b from-doraemon-light-blue to-white overflow-hidden"
    >
      {/* Floating Balloons - bigger */}
      <FloatingCharacter element="balloon" position={{ x: 8, y: 15 }} size="large" animationType="float" customEmoji="🎈" />
      <FloatingCharacter element="balloon" position={{ x: 92, y: 20 }} size="large" animationType="float" customEmoji="🎈" />
      <FloatingCharacter element="balloon" position={{ x: 15, y: 75 }} size="medium" animationType="float" customEmoji="🎈" />
      <FloatingCharacter element="balloon" position={{ x: 85, y: 70 }} size="medium" animationType="float" customEmoji="🎈" />
      <FloatingCharacter element="doll" position={{ x: 3, y: 45 }} size="large" animationType="bounce" />
      <FloatingCharacter element="unicorn" position={{ x: 96, y: 55 }} size="large" animationType="float" />
      
      {/* Big Realistic Doraemon */}
      <motion.div
        className="absolute left-[5%] bottom-[15%] z-0 opacity-40"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Doraemon size="large" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-doraemon-blue mb-4">
            My Dreams & Goals! ✨
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Click on any dream to see more details!
          </p>
          
          {/* Decorative photo strip - bigger images */}
          <motion.div
            className="flex justify-center gap-6 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/IMG_20250225_125414.jpg"
              alt="Dream big"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-doraemon-yellow shadow-2xl"
              whileHover={{ scale: 1.15, rotate: 10 }}
            />
            <motion.img
              src="/IMG_20250405_120301.jpg"
              alt="Aspiring"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-unicorn-pink shadow-2xl"
              whileHover={{ scale: 1.15, rotate: -10 }}
            />
            <motion.img
              src="/IMG_20250908_081032.jpg"
              alt="Goals"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-dolphin-teal shadow-2xl"
              whileHover={{ scale: 1.15, rotate: 10 }}
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {ASPIRATIONS.map((aspiration, index) => (
            <motion.div
              key={aspiration.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CartoonCard
                title={aspiration.title}
                content={aspiration.description}
                icon={<span className="text-6xl">{aspiration.illustration}</span>}
                color="#FFF5E5"
                animation="scale"
                onClick={() => setSelectedAspiration(aspiration.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Dorayaki Rewards */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-comic text-gray-700 mb-4">
            Every dream achieved gets a Dorayaki reward! 🍩
          </p>
          <div className="flex justify-center space-x-2 text-4xl">
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              🍩
            </motion.span>
            <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}>
              🍩
            </motion.span>
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}>
              🍩
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Modal for detailed description */}
      <AnimatePresence>
        {selectedAspiration && selectedAspirationData && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAspiration(null)}
          >
            <motion.div
              className="bg-white rounded-cartoon p-8 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-7xl mb-4">{selectedAspirationData.illustration}</div>
                <h3 className="text-2xl font-heading text-doraemon-blue mb-4">
                  {selectedAspirationData.title}
                </h3>
                <p className="text-gray-700 font-body mb-6">
                  {selectedAspirationData.detailedDescription}
                </p>
                <motion.button
                  className="bg-doraemon-yellow text-gray-800 px-6 py-3 rounded-full font-body font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAspiration(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
