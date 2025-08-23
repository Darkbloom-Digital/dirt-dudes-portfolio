'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Blog data
const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'tree-removal', name: 'Tree Removal' },
  { id: 'construction', name: 'Construction' }
];

const blogPosts = [
  {
    id: 1,
    title: "Essential Land Clearing Tips for Property Development",
    excerpt: "Learn the key considerations and best practices for clearing land effectively and sustainably for your next development project.",
    content: "Full article content here...",
    image: "/images/LandClearing.jpeg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "land-clearing",
    featured: true,
    author: {
      name: "John Smith",
      role: "Land Clearing Expert",
      image: "/images/placeholder.svg"
    }
  },
  {
    id: 2,
    title: "The Impact of Professional Tree Removal on Property Value",
    excerpt: "Discover how strategic tree removal can enhance your property's value and create more usable space.",
    content: "Full article content here...",
    image: "/images/TreeRemoval.jpeg",
    date: "2024-03-10",
    readTime: "4 min read",
    category: "tree-removal",
    featured: false,
    author: {
      name: "Sarah Johnson",
      role: "Arborist",
      image: "/images/placeholder.svg"
    }
  },
  {
    id: 3,
    title: "Modern Techniques in Driveway Construction",
    excerpt: "Explore the latest methods and materials being used in driveway construction for durability and aesthetics.",
    content: "Full article content here...",
    image: "/images/DrivewayConstruction.jpeg",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "construction",
    featured: true,
    author: {
      name: "Mike Williams",
      role: "Construction Specialist",
      image: "/images/placeholder.svg"
    }
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );



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
            <span className="text-red-600">OUR</span> BLOG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            Stay updated with our latest articles, tips, and industry insights.
          </motion.p>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="w-full md:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-900 text-white border border-neutral-700 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
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
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                      {post.category === 'land-clearing' ? 'Land Clearing' : 
                       post.category === 'tree-removal' ? 'Tree Removal' : 
                       post.category === 'construction' ? 'Construction' : 
                       post.category || 'Unknown Category'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div>
                      <p className="text-base font-semibold text-red-500">{post.author.name}</p>
                      <p className="text-xs text-white">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Get the latest articles, tips, and industry news delivered straight to your inbox.
          </motion.p>
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-900 text-white border border-neutral-700 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button 
                onClick={(e) => e.preventDefault()} 
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
} 