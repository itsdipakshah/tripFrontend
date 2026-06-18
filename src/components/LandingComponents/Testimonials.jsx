
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Traveler',
    image: '👩‍🦰',
    content:
      'TravelHub completely transformed how I plan my trips. The itinerary feature is intuitive, and the budget tracking saved me hundreds of dollars!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Business Traveler',
    image: '👨‍💼',
    content:
      'As someone who travels weekly for work, TravelHub is a lifesaver. Everything is organized in one place, and the team collaboration features are fantastic.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Family Trip Planner',
    image: '👩‍👧‍👦',
    content:
      'Planning family vacations used to be chaotic. Now with TravelHub, everyone can see the itinerary and contribute ideas. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Digital Nomad',
    image: '🧑‍💻',
    content:
      'Perfect for digital nomads like me who are constantly on the move. The offline access feature is a game-changer. Love this platform!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            What Our Travelers Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by Travelers
            {' '}
            <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative h-80 md:h-64 mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0"
            >
              <div className="h-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-12 flex flex-col justify-between hover:bg-white/15 transition-all">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg text-white font-light leading-relaxed italic">
                  {`"${testimonials[current].content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonials[current].image}</div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-cyan-200 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation and Indicators */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                animate={{
                  width: idx === current ? 32 : 8,
                  backgroundColor: idx === current ? '#06B6D4' : 'rgba(255,255,255,0.2)',
                }}
                className="h-2 rounded-full transition-all"
              />
            ))}
          </div>

          {/* Right Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-white/60 mb-6">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['⭐ 4.9/5 on TrustPilot', '⭐ App Store Featured', '⭐ 50K+ Reviews'].map(
              (badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-white/80 font-semibold"
                >
                  {badge}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
