'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            TN DIRT PROS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors duration-200">
              HOME
            </Link>
            <Link href="/services" className="text-white hover:text-red-500 transition-colors duration-200">
              SERVICES
            </Link>
            <Link href="/galleries" className="text-white hover:text-red-500 transition-colors duration-200">
              GALLERIES
            </Link>
            <Link href="/reviews" className="text-white hover:text-red-500 transition-colors duration-200">
              REVIEWS
            </Link>
            <Link href="/blog" className="text-white hover:text-red-500 transition-colors duration-200">
              BLOG
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+1234567890"
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              CALL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a
              href="tel:+1234567890"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 