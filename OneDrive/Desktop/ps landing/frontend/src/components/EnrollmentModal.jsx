import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLock } from 'react-icons/fa';
import axios from 'axios';

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (leadId) => {
    try {
      setPaymentLoading(true);
      
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      // Create payment order
      const orderResponse = await axios.post('http://localhost:5000/api/payments/create-order', {
        leadId: leadId,
        amount: 189900 // ₹1,899 in paise
      });

      const { orderId, amount, currency, keyId } = orderResponse.data;

      // Razorpay options
      const options = {
        key: keyId,
        amount: amount,
        currency: currency,
        name: 'PebbleSteps',
        description: 'Space Training for Kids - Astronaut Program',
        order_id: orderId,
        handler: async (response) => {
          try {
            // Verify payment
            const verifyResponse = await axios.post('http://localhost:5000/api/payments/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verifyResponse.data.success) {
              setSuccess(true);
              setFormData({
                parentName: '',
                childName: '',
                childAge: '',
                phone: '',
                email: '',
                message: ''
              });
              setTimeout(() => {
                setSuccess(false);
                onClose();
              }, 4000);
            }
          } catch (error) {
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.parentName,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          child_name: formData.childName,
          child_age: formData.childAge
        },
        theme: {
          color: '#B8703E'
        },
        modal: {
          ondismiss: () => {
            setPaymentLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      setError(error.response?.data?.message || 'Payment failed. Please try again.');
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // First create the lead
      const response = await axios.post('http://localhost:5000/api/leads', formData);
      
      if (response.data.success) {
        const leadId = response.data.lead._id;
        // Proceed to payment
        await handlePayment(leadId);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-500 p-6 text-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Enroll Now</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition"
                >
                  <FaTimes />
                </button>
              </div>
              <p className="text-white/90 mt-2">Start your child's space adventure today!</p>
            </div>

            <div className="p-6">
              {success ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="font-display text-2xl font-bold text-text-dark mb-2">
                    Payment Successful!
                  </h4>
                  <p className="text-text-dark/70 mb-4">
                    Welcome to the Space Training Program!
                  </p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-text-dark">
                      📧 Confirmation email sent<br/>
                      📞 We'll contact you with program details
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Child Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                      placeholder="Enter child's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Child Age *
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      min="3"
                      max="15"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                      placeholder="Age (3-15)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[6-9][0-9]{9}"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none bg-white"
                      placeholder="Any questions or special requirements?"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || paymentLoading}
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <FaLock className="text-sm" />
                    <span>
                      {loading ? 'Processing...' : paymentLoading ? 'Opening Payment...' : 'Proceed to Payment'}
                    </span>
                    {!loading && !paymentLoading && <span className="text-xl">→</span>}
                  </button>

                  <div className="text-center text-sm text-text-dark/60 mt-2 space-y-1">
                    <p>🔒 Secure payment gateway • ₹1,899 one-time fee</p>
                    <p className="text-xs">Powered by Razorpay • 100% Safe & Secure</p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
