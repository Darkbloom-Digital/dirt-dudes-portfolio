'use client';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

// Import services data
const services = [
  {
    id: 'land-clearing',
    title: "Land Clearing",
    description: "Professional land clearing services for residential and commercial properties. We handle everything from small lots to large acreage with precision and care.",
    image: "/images/LandClearing.jpeg",
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
    image: "/images/TreeRemoval.jpeg",
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
    image: "/images/DrivewayConstruction.jpeg",
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
    image: "/images/SepticInstallation.jpeg",
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
    image: "/images/LandGrading.jpeg",
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
    image: "/images/Excavation.jpeg",
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
            <span className="text-red-600">OUR</span> SERVICES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Professional excavation, land clearing, and site preparation services. 
            We have the expertise and equipment to handle any project size.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative min-h-56 md:min-h-80 lg:min-h-96 bg-neutral-900/50 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-red-800 transition-all duration-300 flex flex-col bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/70 z-0 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="relative z-10 p-3 md:p-6 flex flex-col h-full justify-end">
                  <div className="transition-opacity duration-300 group-hover:opacity-0">
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">{service.title}</h2>
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-6">{service.description}</p>
                    <ul className="space-y-2 md:space-y-3 mb-3 md:mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-xs md:text-base">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={`/services/${service.id}`}
                    className="block w-full px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white text-sm md:text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 text-center mt-3 md:mt-6"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-black to-neutral-900">
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
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a free consultation and quote. We&apos;ll help you transform your property with our professional services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={(e) => e.preventDefault()} 
              className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200 min-w-[200px] cursor-pointer"
            >
              Call Now
            </button>
            <button 
              onClick={(e) => e.preventDefault()} 
              className="px-8 py-4 border-2 border-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-600/10 transition-colors duration-200 min-w-[200px] cursor-pointer"
            >
              Send a Text
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 