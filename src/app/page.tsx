'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import MediaCarousel from '@/components/MediaCarousel';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';

// Define services array
const services = [
  {
    id: 'land-clearing',
    title: "Land Clearing",
    description: "Professional land clearing services for residential and commercial properties.",
    image: "/images/placeholder.svg"
  },
  {
    id: 'tree-removal',
    title: "Tree Removal",
    description: "Expert tree removal and trimming services with safety guaranteed.",
    image: "/images/placeholder.svg"
  },
  {
    id: 'driveway-construction',
    title: "Driveway Construction",
    description: "Custom driveway construction and grading services.",
    image: "/images/placeholder.svg"
  },
  {
    id: 'septic-installation',
    title: "Septic Installation",
    description: "Complete septic system installation and maintenance.",
    image: "/images/placeholder.svg"
  },
  {
    id: 'land-grading',
    title: "Land Grading",
    description: "Professional land grading and leveling services.",
    image: "/images/placeholder.svg"
  },
  {
    id: 'excavation',
    title: "Excavation",
    description: "Comprehensive excavation services for any project size.",
    image: "/images/placeholder.svg"
  }
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-neutral-900 px-2 sm:px-4">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-neutral-900 z-20" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            TN Dirt Pros
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10">
            Professional land clearing services in Cleveland, TN provided by TN Dirt Pros. 
            Dependable experts for all your land clearing needs, ensuring top-quality results every time.
          </p>
          <div className="flex flex-row items-center justify-center space-x-6">
            <button className="w-auto px-4 py-2.5 lg:px-6 lg:py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 text-base lg:text-lg whitespace-nowrap">
              Get a Free Quote
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white hover:bg-white/90 transition-all duration-200 hover:scale-110 cursor-pointer p-0 lg:ml-16"
              style={{ aspectRatio: '1 / 1' }}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <polygon points="6,4 16,10 6,16" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Subtle dot pattern */}
      <section className="relative py-10 sm:py-14 md:py-20 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
          opacity: 0.05
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Credentials Row */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-20 space-y-4 md:space-y-0 mb-8 md:mb-20">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.4 9.36-7 10.6-3.6-1.24-7-5.77-7-10.6V6.3l7-3.12z"/>
              </svg>
              <span className="text-white text-lg md:text-xl font-bold">INSURED</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-white text-lg md:text-xl font-bold">FAMILY OWNED</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-white text-lg md:text-xl font-bold">LOCALLY OWNED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
                  ABOUT US
                </h2>
                <div className="h-[2px] bg-red-600 flex-grow ml-4 md:ml-8"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-10">
                At TN DIRT PROS, we are a trusted land-clearing company serving Cleveland, TN. 
                Our skilled team specializes in excavation, tree removal, and site preparation 
                to help you transform your property. With our expertise and top-notch equipment, 
                we ensure efficient and reliable service for all your land-clearing needs
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://google.com/business" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Google Business page"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="md:w-6 md:h-6">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                    <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                    <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                    <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/tndirtpros" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 10 20" className="md:w-4 md:h-8 translate-x-0 translate-y-[2px]">
                    <path fill="#FFFFFF" d="M6.821 20v-9.196h3.047L10 7.368H6.821V5.052c0-1.01.277-1.697 1.712-1.697h1.825V.153C10.05.107 8.925 0 7.604 0 4.897 0 3.044 1.657 3.044 4.7v2.668H0v3.436h3.044V20h3.777Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="h-[300px] md:h-[600px] bg-gray-800 rounded-lg overflow-hidden relative">
              <Image 
                src="/images/placeholder.svg" 
                alt="Excavator working on site" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Diagonal lines pattern */}
      <section className="relative py-10 sm:py-14 md:py-20 bg-gradient-to-r from-neutral-900 via-[#0a0a0a] to-neutral-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          opacity: 0.05
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
                OUR SERVICES
              </h2>
              <div className="h-[2px] bg-red-600 flex-grow ml-4 md:ml-8"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="relative h-[260px] sm:h-[300px] md:h-[400px] group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-all duration-300 group-hover:-translate-y-20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    <svg 
                      className="w-5 h-5 md:w-6 md:h-6 text-red-600 animate-pulse"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-black/80 transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
                  <p className="text-sm md:text-base text-white">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 via-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          opacity: 0.15
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
              Ready to Transform Your Land?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              From concept to completion, we&apos;re here to help you achieve your vision. 
              Get a free consultation and quote for your project today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm shadow-lg p-6 md:p-8 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-all duration-300">
              <div className="text-red-500 mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts about your project needs</p>
              <a href="tel:+1234567890" className="text-red-600 hover:text-red-500 font-semibold inline-flex items-center">
                (123) 456-7890
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-black/30 backdrop-blur-sm shadow-lg p-6 md:p-8 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-all duration-300">
              <div className="text-red-500 mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Text Us</h3>
              <p className="text-gray-300 mb-4">Send us a message anytime for quick responses</p>
              <a href="sms:+1234567890" className="text-red-600 hover:text-red-500 font-semibold inline-flex items-center">
                Send Message
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-black/30 backdrop-blur-sm shadow-lg p-6 md:p-8 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-all duration-300">
              <div className="text-red-500 mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send detailed project requirements and questions</p>
              <a href="mailto:info@tndirtpros.com" className="text-red-600 hover:text-red-500 font-semibold inline-flex items-center">
                info@tndirtpros.com
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white text-base md:text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 transform hover:scale-105">
              Get Your Free Quote Today
            </button>
          </div>
        </div>
      </section>

      {/* Media Carousel Section - Grid pattern */}
      <section className="relative bg-gradient-to-b from-neutral-900 to-[#0a0a0a]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0V0zm1 1h28v28H1V1z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
          opacity: 0.05
        }} />
        <MediaCarousel />
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#0a0a0a] via-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                TESTIMONIALS
              </h2>
              <div className="h-[2px] bg-red-600 flex-grow ml-4 md:ml-8"></div>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-black via-neutral-900 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                LATEST NEWS
              </h2>
              <div className="h-[2px] bg-red-600 flex-grow ml-4 md:ml-8"></div>
            </div>
          </div>
          <Blog />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#0a0a0a] via-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                CONTACT US
              </h2>
              <div className="h-[2px] bg-red-600 flex-grow ml-4 md:ml-8"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mt-4 md:mt-6">
              Have questions? We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
            >
              Close
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}