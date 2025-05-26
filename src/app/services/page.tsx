'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import services data
const services = [
  {
    id: 'land-clearing',
    title: "Land Clearing",
    description: "Professional land clearing services for residential and commercial properties. We handle everything from small lots to large acreage with precision and care.",
    features: [
      "Brush & undergrowth removal",
      "Tree removal & stump grinding",
      "Site preparation",
      "Debris removal & cleanup"
    ]
  },
  {
    id: 'tree-removal',
    title: "Tree Removal",
    description: "Expert tree removal and trimming services with safety guaranteed. Our team has the equipment and expertise to handle trees of any size.",
    features: [
      "Emergency tree removal",
      "Hazardous tree assessment",
      "Complete stump removal",
      "Professional cleanup"
    ]
  },
  {
    id: 'driveway-construction',
    title: "Driveway Construction",
    description: "Custom driveway construction and grading services. We create durable, well-designed driveways that enhance your property's value and accessibility.",
    features: [
      "Custom design & layout",
      "Proper drainage solutions",
      "Multiple material options",
      "Professional grading"
    ]
  },
  {
    id: 'septic-installation',
    title: "Septic Installation",
    description: "Complete septic system installation and maintenance. Our experienced team ensures proper installation and function of your septic system.",
    features: [
      "Site evaluation",
      "System design",
      "Permit assistance",
      "Full installation"
    ]
  },
  {
    id: 'land-grading',
    title: "Land Grading",
    description: "Professional land grading and leveling services. We ensure proper drainage and prepare your site for construction or landscaping.",
    features: [
      "Site analysis",
      "Erosion control",
      "Drainage solutions",
      "Foundation preparation"
    ]
  },
  {
    id: 'excavation',
    title: "Excavation",
    description: "Comprehensive excavation services for any project size. From small residential jobs to large commercial projects, we have the equipment and expertise.",
    features: [
      "Site preparation",
      "Basement excavation",
      "Utility trenching",
      "Pool excavation"
    ]
  }
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Professional land clearing and site preparation services in Cleveland, TN. 
            We have the expertise and equipment to handle any project size.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="relative h-64 bg-neutral-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a 
                      href={`/services/${service.id}`}
                      className="block w-full px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Contact us today for a free consultation and quote. We'll help you transform your property with our professional services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 min-w-[200px]">
              Call Now
            </button>
            <button className="px-8 py-4 border-2 border-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-600/10 transition-colors duration-200 min-w-[200px]">
              Send a Text
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 