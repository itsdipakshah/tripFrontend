

import { motion } from 'framer-motion';
import {
  Share2,
  Send,
  Heart,
  Star,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Team', href: '#team' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  Resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Guides', href: '#guides' },
    { label: 'Community', href: '#community' },
    { label: 'Support', href: '#support' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'GDPR', href: '#gdpr' },
  ],
};

const socialLinks = [
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: Heart, href: '#', label: 'Community' },
  { icon: Star, href: '#', label: 'Reviews' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-teal-900 to-slate-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-bold text-2xl">TravelHub</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted companion for planning unforgettable journeys around the world.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-200">
                  Subscribe to our newsletter
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 hover:bg-teal-500/30 rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([ section, links ], sectionIdx) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIdx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-6">{section}</h4>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: sectionIdx * 0.1 + idx * 0.05,
                        duration: 0.4,
                      }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-300 transition-colors inline-flex items-center gap-2 group"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 border-t border-white/10"
        >
          <h3 className="text-lg font-semibold mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'support@ghumphir.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+977 980123-4567',
              },
              {
                icon: MapPin,
                label: 'Office',
                value: 'Biratnagar ,Roadcess Chowk',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx} variants={fadeInUp} custom={idx}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 rounded-lg flex items-center justify-center border border-teal-400/50">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">{item.label}</p>
                      <p className="font-semibold text-gray-100">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-300 text-sm text-center md:text-left">
            &copy; 2024 TravelHub. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-teal-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-teal-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-teal-300 transition-colors">
              Cookies
            </a>
          </div>

          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Back to top"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient line at bottom */}
      <div className="h-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400" />
    </footer>
  );
}
