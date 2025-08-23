import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Essential Land Clearing Tips for Property Development",
    excerpt: "Learn the key considerations and best practices for clearing land effectively and sustainably for your next development project.",
    image: "/images/LandClearing.jpeg",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Land Clearing"
  },
  {
    id: 2,
    title: "The Impact of Professional Tree Removal on Property Value",
    excerpt: "Discover how strategic tree removal can enhance your property&apos;s value and create more usable space.",
    image: "/images/TreeRemoval.jpeg",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Tree Removal"
  },
  {
    id: 3,
    title: "Modern Techniques in Driveway Construction",
    excerpt: "Explore the latest methods and materials being used in driveway construction for durability and aesthetics.",
    image: "/images/DrivewayConstruction.jpeg",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Construction"
  }
];

export default function Blog() {
  return (
    <div className="relative py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">


        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base flex-1">
                  {post.excerpt}
                </p>
                <button className="text-red-500 font-semibold inline-flex items-center group-hover:text-red-400 transition-colors duration-200 mt-auto">
                  Read More
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white text-base sm:text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              View All Articles
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
} 