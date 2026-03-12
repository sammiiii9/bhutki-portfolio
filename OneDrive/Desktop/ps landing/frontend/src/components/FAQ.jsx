import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What age group is this program for?',
      answer: 'This program is designed for children aged 5-12 years. We adapt the content complexity based on the age group to ensure optimal learning.'
    },
    {
      question: 'Are sessions live or pre-recorded?',
      answer: 'All sessions are live and interactive! Children can ask questions, participate in activities, and engage with the instructor in real-time.'
    },
    {
      question: 'Will my child receive a certificate?',
      answer: 'Yes! Upon successful completion of the program, your child will receive a digital certificate of completion that can be downloaded and printed.'
    },
    {
      question: 'What if my child misses a session?',
      answer: 'All sessions are recorded and shared with enrolled families. Your child can watch the recording at their convenience.'
    },
    {
      question: 'Do I need any special equipment?',
      answer: 'You only need a computer/tablet with internet connection and a webcam. All learning materials are provided digitally.'
    },
    {
      question: 'Can I get a refund if my child doesn\'t like it?',
      answer: 'We offer a 100% money-back guarantee within the first week if you\'re not satisfied with the program.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the program
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <FaChevronDown
                  className={`text-primary-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
