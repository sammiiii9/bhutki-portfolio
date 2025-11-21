import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-doraemon-blue text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mini photo collage */}
          <motion.div
            className="flex justify-center gap-2 mb-6 flex-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/20231123_232636-COLLAGE.jpg"
              alt="Memories"
              className="w-12 h-12 rounded-lg object-cover border-2 border-doraemon-yellow"
              whileHover={{ scale: 1.3, rotate: 5 }}
            />
            <motion.img
              src="/Screenshot 2025-11-19 232849.png"
              alt="Fun"
              className="w-12 h-12 rounded-lg object-cover border-2 border-unicorn-pink"
              whileHover={{ scale: 1.3, rotate: -5 }}
            />
            <motion.img
              src="/Screenshot_20250926_223800.jpg"
              alt="Joy"
              className="w-12 h-12 rounded-lg object-cover border-2 border-dolphin-teal"
              whileHover={{ scale: 1.3, rotate: 5 }}
            />
          </motion.div>

          <div className="text-4xl mb-4">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              🧸
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="inline-block mx-2"
            >
              🦄
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="inline-block"
            >
              🐬
            </motion.span>
          </div>
          
          <h3 className="text-2xl font-heading mb-2">Tuktuki's Magical World</h3>
          <p className="font-body text-doraemon-light-blue mb-4">
            Living life with dolls, dreams, and Dorayaki! 🍩✨
          </p>
          
          <div className="text-sm font-body opacity-80">
            Made with 💕 and lots of imagination
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
