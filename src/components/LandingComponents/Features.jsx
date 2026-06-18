

import { motion } from 'framer-motion';
import {
  Plane,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Shield,
} from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const features = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Search and book flights to Kathmandu, Pokhara, Chitwan and various destinations at the best rates.',
  },
  {
    icon: MapPin,
    title: 'Destination Guide',
    description: 'Explore 75+ destinations in Nepal with detailed information, local tips and hidden attractions.',
  },
  {
    icon: Calendar,
    title: 'Daily Itinerary',
    description: 'Create detailed day-by-day travel plans with activities, dining and transportation management.',
  },
  {
    icon: DollarSign,
    title: 'Budget Tracking',
    description: 'Track your expenses in real-time and get detailed budget analysis for better planning.',
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Invite friends and family to collaborate on trip planning and split expenses easily.',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Protect your trips with comprehensive insurance options tailored to your needs.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need for
            {' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Perfect Trips
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            All the tools you need to plan, organize and execute your dream vacations with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Icon container */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl mb-6 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 mb-6">
            Ready to start planning your next adventure?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Get Started Free →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
