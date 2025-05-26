'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Review data
const reviews = [
  {
    id: 1,
    name: "John Smith",
    location: "Cleveland, TN",
    service: "Land Clearing",
    rating: 5,
    date: "2024-03-15",
    image: "/images/placeholder.svg",
    review: "TN Dirt Pros did an amazing job clearing our 5-acre property. They were professional, efficient, and left the site clean. Highly recommend their services!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Chattanooga, TN",
    service: "Tree Removal",
    rating: 5,
    date: "2024-03-10",
    image: "/images/placeholder.svg",
    review: "Had several large trees that needed removal after a storm. The team was quick to respond and handled the job safely and professionally.",
    verified: true
  },
  {
    id: 3,
    name: "Mike Williams",
    location: "Athens, TN",
    service: "Driveway Construction",
    rating: 5,
    date: "2024-03-05",
    image: "/images/placeholder.svg",
    review: "Excellent work on our new driveway. The team was knowledgeable and made sure everything was properly graded for drainage.",
    verified: true
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Cleveland, TN",
    service: "Septic Installation",
    rating: 5,
    date: "2024-02-28",
    image: "/images/placeholder.svg",
    review: "Very pleased with the septic system installation. They handled all the permits and inspections, making the process stress-free.",
    verified: true
  },
  {
    id: 5,
    name: "David Wilson",
    location: "Ooltewah, TN",
    service: "Land Clearing",
    rating: 5,
    date: "2024-02-20",
    image: "/images/placeholder.svg",
    review: "Great experience working with TN Dirt Pros. They cleared our lot for new construction and did an excellent job preserving the trees we wanted to keep.",
    verified: true
  },
  {
    id: 6,
    name: "Lisa Thompson",
    location: "Cleveland, TN",
    service: "Excavation",
    rating: 5,
    date: "2024-02-15",
    image: "/images/placeholder.svg",
    review: "Professional excavation work for our new pool. The team was careful around existing utilities and finished on schedule.",
    verified: true
  }
];

const services = [
  { id: 'all', name: 'All Services' },
  { id: 'land-clearing', name: 'Land Clearing' },
  { id: 'tree-removal', name: 'Tree Removal' },
  { id: 'driveway-construction', name: 'Driveway Construction' },
  { id: 'septic-installation', name: 'Septic Installation' },
  { id: 'excavation', name: 'Excavation' }
];

export default function ReviewsPage() {
  const [selectedService, setSelectedService] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');

  const filteredReviews = selectedService === 'all'
    ? reviews
    : reviews.filter(review => review.service.toLowerCase().replace(' ', '-') === selectedService);

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-neutral-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          opacity: 0.15
        }} />
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold text-white mb-6"
          >
            Customer Reviews
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center">
              <span className="text-4xl font-bold text-white">4.9</span>
              <div className="ml-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Based on {reviews.length} reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-red-600 text-white'
                      : 'bg-neutral-900 text-gray-300 hover:bg-neutral-800'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
                className="bg-neutral-900 text-white border border-neutral-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="date">Most Recent</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {sortedReviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                        {review.verified && (
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{review.location}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-300">{review.review}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-neutral-800 text-sm text-gray-300 rounded-full">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Share Your Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Had a great experience with TN Dirt Pros? We'd love to hear about it!
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            Write a Review
          </motion.button>
        </div>
      </section>
    </main>
  );
} 