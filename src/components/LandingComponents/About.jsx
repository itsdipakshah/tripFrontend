

import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Zap, Heart } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function About() {
  const stats = [
    { number: '10K+', label: 'Active Travelers', icon: Globe },
    { number: '75+', label: 'Destinations', icon: Zap },
    { number: '5K+', label: 'Plans Created', icon: Heart },
  ];

  const benefits = [
    'AI-powered destination recommendations tailored to your preferences',
    'Real-time collaboration with unlimited travelers on your trip',
    'Automated expense splitting and budget management',
    'Access to exclusive local deals and discounts',
    '24/7 customer support in multiple languages',
    'Offline access to your complete trip information',
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4"
            >
              Our Story
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Choose
              {' '}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Trip Navigator?
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe travel should be seamless and memorable. Founded by passionate travelers, Trip Navigator combines cutting-edge technology with deep travel expertise to make trip planning effortless.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to empower travelers to explore new destinations with confidence, whether it is your first international trip or your hundredth adventure.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Stats */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {/* Main stat card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-8 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-3xl text-white shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
              <div className="relative">
                <div className="text-6xl font-bold mb-2">5M+</div>
                <p className="text-xl text-teal-100">Trips Planned</p>
                <p className="text-teal-200 mt-4">Our community has planned over 5 million unforgettable journeys across the globe.</p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-white border border-slate-200 rounded-2xl text-center hover:shadow-lg transition-all"
                  >
                    <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {stat.number}
                    </div>
                    <p className="text-slate-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-200"
            >
              <h4 className="font-semibold text-slate-900 mb-4">Industry Recognition</h4>
              <div className="flex flex-wrap gap-3">
                {['Best Travel App 2024', 'Top 10 Startups', '⭐⭐⭐⭐⭐'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
