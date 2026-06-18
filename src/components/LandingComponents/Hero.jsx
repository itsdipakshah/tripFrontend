

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-amber-50 overflow-hidden flex items-center">
      {/* Animated background elements - Travel inspired */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-gray-900"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm font-semibold text-teal-700 backdrop-blur-sm">
                🏔️ Nepal - Your Journey Awaits
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                Explore Nepal
              </span>
              {' '}
              <span className="text-slate-900">Effortlessly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              Discover the beauty of Kathmandu, Pokhara, Chitwan and the Himalayas. Plan your journey, track your budget and create unforgettable memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button className="px-8 py-6 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700 shadow-lg">
                Start Now <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-teal-300 text-teal-700 hover:bg-teal-50"
              >
                <Play size={20} className="mr-2" /> Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 mt-12 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-teal-600">10K+</div>
                <div className="text-slate-600">Active Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">75+</div>
                <div className="text-slate-600">Destinations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">5K+</div>
                <div className="text-slate-600">Plans Created</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-3xl backdrop-blur-xl border border-orange-300/30 shadow-2xl"></div>
            
            {/* Floating cards animation */}
            <motion.div
              className="absolute top-10 left-10 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-teal-100 w-48 shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-teal-700 font-semibold">✈️ Flight Booking</div>
              <div className="text-slate-600 text-sm mt-2">Kathmandu → Pokhara</div>
              <div className="text-teal-600 font-bold mt-3">March 15-22</div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-10 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-teal-100 w-48 shadow-lg"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <div className="text-teal-700 font-semibold">🏨 Hotel Reserved</div>
              <div className="text-slate-600 text-sm mt-2">Fiwa Resort, Pokhara</div>
              <div className="text-amber-500 font-bold mt-3">⭐⭐⭐⭐⭐</div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-teal-100 w-48 shadow-lg"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="text-teal-700 font-semibold">💰 Budget Track</div>
              <div className="text-slate-600 text-sm mt-2">₹1,20,000 / ₹1,50,000</div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-teal-500 to-amber-500 h-2 rounded-full w-3/4"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center ">
          <p className="text-sm mb-2 text-green-300">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
