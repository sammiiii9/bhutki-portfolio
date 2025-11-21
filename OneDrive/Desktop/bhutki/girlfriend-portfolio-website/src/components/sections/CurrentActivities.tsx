import { motion } from 'framer-motion';
import { CartoonCard } from '../ui/CartoonCard';
import { FloatingCharacter } from '../ui/FloatingCharacter';
import { Doraemon } from '../ui/Doraemon';
import { ACTIVITIES } from '../../utils/constants';

export const CurrentActivities: React.FC = () => {
  return (
    <section
      id="activities"
      className="relative py-section px-4 bg-white overflow-hidden"
    >
      {/* Floating decorations - bigger */}
      <FloatingCharacter element="dorayaki" position={{ x: 5, y: 10 }} size="large" animationType="rotate" />
      <FloatingCharacter element="dorayaki" position={{ x: 95, y: 80 }} size="large" animationType="rotate" />
      <FloatingCharacter element="doll" position={{ x: 2, y: 50 }} size="large" animationType="bounce" />
      <FloatingCharacter element="teddybear" position={{ x: 97, y: 40 }} size="large" animationType="float" />
      
      {/* Big Realistic Doraemon */}
      <motion.div
        className="absolute right-[5%] top-[20%] z-0 opacity-40"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 4.5,
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
            What I Love Doing! 🎯
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Here's what keeps me busy and happy every day!
          </p>
        </motion.div>

        {/* Featured Activity Photos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="rounded-cartoon overflow-hidden shadow-lg">
            <img src="/Screenshot 2025-11-19 015745.png" alt="Fun times" className="w-full h-48 object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="rounded-cartoon overflow-hidden shadow-lg">
            <img src="/Screenshot 2025-11-19 015811.png" alt="Happy moments" className="w-full h-48 object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="rounded-cartoon overflow-hidden shadow-lg">
            <img src="/IMG_20250908_081032.jpg" alt="Beautiful moments" className="w-full h-48 object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="rounded-cartoon overflow-hidden shadow-lg">
            <img src="/Screenshot_20250920_192100.jpg" alt="Good vibes" className="w-full h-48 object-cover" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CartoonCard
                title={activity.title}
                content={activity.description}
                icon={<span>{activity.icon}</span>}
                color={activity.color}
                animation="bounce"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
