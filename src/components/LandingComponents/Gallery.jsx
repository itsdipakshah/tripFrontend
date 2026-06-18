

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hills view, Kathmandu',
    description: 'The iconic symbol of love and romance',
    category: 'landmarks',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sunset view,Shree Antu',
    description: 'Paradise awaits in crystal clear waters',
    category: 'beaches',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1530943463362-c57a092542a3?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'sky view, Pokhara',
    description: 'An architectural marvel spanning centuries',
    category: 'landmarks',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1570264878711-8500505a92db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mountains view',
    description: 'Float above otherworldly landscapes',
    category: 'adventures',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'landmarks', 'beaches', 'adventures'];

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Visual Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inspiration From Around the
            {' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Globe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore stunning destinations that our travelers have experienced
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              custom={idx}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer h-64 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedImage ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setSelectedImage(null)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
          selectedImage ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {selectedImage && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />

            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
