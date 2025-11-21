import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingCharacter } from '../ui/FloatingCharacter';
import { Doraemon } from '../ui/Doraemon';

const PHOTOS = [
  { src: '/IMG-20230327-WA0023.png', caption: 'Cuteness overload! 🧸' },
  { src: '/IMG-20230407-WA0000.png', caption: 'Living my best life! ✨' },
  { src: '/IMG-20230421-WA0017.jpg', caption: 'Smiles all around! 😊' },
  { src: '/IMG-20231014-WA0016.jpg', caption: 'Adventure time! 🎈' },
  { src: '/IMG-20231014-WA0017.jpg', caption: 'Making memories! 📸' },
  { src: '/IMG-20231020-WA0066.jpg', caption: 'Just being me! 💕' },
  { src: '/IMG-20240117-WA0069.jpg', caption: 'Happy moments! 🌟' },
  { src: '/WhatsApp Image 2025-11-19 at 14.01.44.jpeg', caption: 'Feeling fabulous! 👗' },
  { src: '/WhatsApp Image 2025-11-19 at 14.01.45.jpeg', caption: 'Sweet like Dorayaki! 🍩' },
];

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-section px-4 bg-gradient-to-b from-white to-doraemon-light-blue overflow-hidden"
    >
      {/* Floating decorations - bigger */}
      <FloatingCharacter element="unicorn" position={{ x: 5, y: 10 }} size="large" animationType="bounce" />
      <FloatingCharacter element="teddybear" position={{ x: 95, y: 15 }} size="large" animationType="float" />
      <FloatingCharacter element="balloon" position={{ x: 10, y: 85 }} size="medium" animationType="float" />
      <FloatingCharacter element="dolphin" position={{ x: 90, y: 80 }} size="medium" animationType="bounce" />
      
      {/* Big Realistic Doraemon */}
      <motion.div
        className="absolute left-[50%] top-[5%] z-0 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Doraemon size="medium" />
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
            My Magical Moments! 📸✨
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Click any photo to see it bigger!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="rounded-cartoon overflow-hidden shadow-lg bg-white p-3">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-comic text-gray-700 text-sm">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-4 text-5xl">
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              🎀
            </motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
              💖
            </motion.span>
            <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
              🌸
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Full-size image modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="max-w-full max-h-full object-contain rounded-cartoon shadow-2xl"
                />
                <motion.div
                  className="mt-6 bg-doraemon-blue px-8 py-4 rounded-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white text-xl font-comic text-center">{selectedPhoto.caption}</p>
                </motion.div>
              </div>
              <motion.button
                className="absolute top-4 right-4 bg-doraemon-yellow text-gray-800 w-14 h-14 rounded-full text-2xl font-bold shadow-lg z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPhoto(null)}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
