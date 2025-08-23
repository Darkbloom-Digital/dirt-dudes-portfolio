import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-gray-400 mb-4">
              Professional excavation, land clearing, and site preparation services. Transforming properties with expertise and dedication.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://google.com/business" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Google Business page"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                  <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                  <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                  <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 10 20" className="translate-x-0 translate-y-[2px]">
                  <path fill="#FFFFFF" d="M6.821 20v-9.196h3.047L10 7.368H6.821V5.052c0-1.01.277-1.697 1.712-1.697h1.825V.153C10.05.107 8.925 0 7.604 0 4.897 0 3.044 1.657 3.044 4.7v2.668H0v3.436h3.044V20h3.777Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#galleries" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#land-clearing" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Land Clearing
                </Link>
              </li>
              <li>
                <Link href="#excavation" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Excavation
                </Link>
              </li>
              <li>
                <Link href="#tree-removal" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Tree Removal
                </Link>
              </li>
              <li>
                <Link href="#site-preparation" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Site Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hover:text-red-500 transition-colors duration-200">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hover:text-red-500 transition-colors duration-200">
                  info@dirtdudes.com
                </span>
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Your Location</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Dirt Dudes. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Powered by <a href="https://darkbloomdigital.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors duration-200">Darkbloom Digital</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 