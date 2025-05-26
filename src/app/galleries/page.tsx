'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Gallery categories and images
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'land-clearing', name: 'Land Clearing' },
  { id: 'tree-removal', name: 'Tree Removal' },
  { id: 'driveways', name: 'Driveways' },
  { id: 'excavation', name: 'Excavation' },
  { id: 'septic', name: 'Septic Installation' }
];

const galleryItems = [
  {
    id: 1,
    category: 'land-clearing',
    title: 'Commercial Land Clearing',
    description: '10-acre commercial property clearing in Cleveland, TN',
    image: '/images/placeholder.svg'
  },
  {
    id: 2,
    category: 'tree-removal',
    title: 'Emergency Tree Removal',
    description: 'Storm damage cleanup and tree removal',
    image: '/images/placeholder.svg'
  },
  {
    id: 3,
    category: 'driveways',
    title: 'Custom Driveway',
    description: 'Gravel driveway installation with proper drainage',
    image: '/images/placeholder.svg'
  },
  {
    id: 4,
    category: 'excavation',
    title: 'Pool Excavation',
    description: 'Residential pool site preparation',
    image: '/images/placeholder.svg'
  },
  {
    id: 5,
    category: 'septic',
    title: 'Septic System',
    description: 'Complete septic system installation',
    image: '/images/placeholder.svg'
  },
  {
    id: 6,
    category: 'land-clearing',
    title: 'Residential Clearing',
    description: 'Home site preparation and clearing',
    image: '/images/placeholder.svg'
  },
  {
    id: 7,
    category: 'driveways',
    title: 'Long Driveway',
    description: 'Rural property access road construction',
    image: '/images/placeholder.svg'
  },
  {
    id: 8,
    category: 'excavation',
    title: 'Foundation Prep',
    description: 'New construction foundation excavation',
    image: '/images/placeholder.svg'
  },
  {
    id: 9,
    category: 'tree-removal',
    title: 'Large Tree Removal',
    description: 'Safe removal of hazardous trees',
    image: '/images/placeholder.svg'
  }
];

export default function GalleriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-neutral-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0V0zm1 1h28v28H1V1z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
          opacity: 0.05
        }} />
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold text-white mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Browse through our portfolio of completed projects and see the quality of our work firsthand.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-neutral-900 text-gray-300 hover:bg-neutral-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
              >
                Close
              </button>
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Want Similar Results?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Let's discuss your project and create a custom solution that meets your needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 min-w-[200px]">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-600/10 transition-colors duration-200 min-w-[200px]">
              View Services
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 