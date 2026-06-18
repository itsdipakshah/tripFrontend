
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const faqData = [
  {
    id: 1,
    question: 'How do I get started with TravelHub?',
    answer:
      'Getting started is simple! Sign up for a free account, create your first trip, and start adding flights, hotels, and activities. You can invite friends to collaborate in real-time.',
  },
  {
    id: 2,
    question: 'Is TravelHub free to use?',
    answer:
      'Yes! TravelHub offers a free plan with all core features. We also offer Premium and Pro plans with advanced features like unlimited travelers and priority support.',
  },
  {
    id: 3,
    question: 'Can I share my trip with others?',
    answer:
      'Absolutely! You can invite family and friends by sharing a unique link. They can view, edit, and contribute to your trip in real-time without needing to create an account.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer:
      'Yes, security is our top priority. We use end-to-end encryption, secure servers, and comply with GDPR and other privacy regulations. Your data is always protected.',
  },
  {
    id: 5,
    question: 'Can I access TravelHub offline?',
    answer:
      'Our Premium and Pro plans include offline access. Once downloaded, you can view and edit your trips without an internet connection. Changes sync when you go back online.',
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. For annual subscriptions, we also offer special discounts and flexible payment options.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            {' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {faqData.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={fadeInUp}
              custom={idx}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left"
              >
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }}
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  </div>
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === faq.id ? 'auto' : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-t-0 border-gray-200 rounded-b-xl text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 text-blue-100">
            Our support team is available 24/7 to help you get the most out of TravelHub.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
