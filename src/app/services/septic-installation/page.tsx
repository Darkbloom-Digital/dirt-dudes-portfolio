'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function SepticInstallationPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-0 py-6 sm:py-10 pt-36 sm:pt-28 flex items-start justify-center bg-gradient-to-b from-black to-neutral-900 px-2 sm:px-4">
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
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6"
          >
            <span className="text-red-600">SEPTIC</span> INSTALLATION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4"
          >
            Professional septic system installation for homes and businesses
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Expert Septic Installation</h2>
              <p className="text-gray-300 mb-2 sm:mb-4">
                We design and install reliable septic systems tailored to your property and needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  New system installation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System replacement
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drain field installation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Permitting & inspections
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[220px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/SepticInstallation.jpeg"
                alt="Septic Installation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Need a New Septic System?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a free septic consultation and quote. We&apos;ll ensure your system is installed right the first time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button 
              onClick={(e) => e.preventDefault()} 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-red-700 transition-colors duration-200 min-w-[160px] sm:min-w-[200px] cursor-pointer"
            >
              Get a Quote
            </button>
            <button 
              onClick={(e) => e.preventDefault()} 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-red-700 transition-colors duration-200 min-w-[160px] sm:min-w-[200px] cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 