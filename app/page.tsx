
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import SearchModal from '../components/SearchModal';
import AccessibilityMenu from '../components/AccessibilityMenu';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Keyboard shortcut for search
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/2 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="relative">
                    {/* Eye Shape */}
                    <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
                      {/* Eye pupil with spiral */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center relative">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                          {/* Spiral effect */}
                          <div className="absolute inset-0 border border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                        </div>
                      </div>
                    </div>
                    {/* Radiating lines */}
                    <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                    <div className="absolute -top-0.5 left-3/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                    <div className="absolute -top-0.5 left-1/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                  </div>
                </div>
                <span className="text-2xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  MindEnvisia
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/shorts" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Shorts</Link>
                <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Start Here</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Resources</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
                
                {/* Search Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-full transition-all cursor-pointer"
                  title="Search (Ctrl+K)"
                >
                  <i className="ri-search-line text-lg"></i>
                </button>
              </div>

              <a
                href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="relative">
                  {/* Large Eye Shape */}
                  <div className="w-20 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden animate-pulse">
                    {/* Eye pupil with spiral */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative">
                        <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                        {/* Spiral effect */}
                        <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                        <div className="absolute inset-1 border border-pink-400/20 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                      </div>
                    </div>
                  </div>
                  {/* Radiating lines */}
                  <div className="absolute -top-2 left-1/2 w-1 h-4 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                  <div className="absolute -top-1.5 left-3/4 w-1 h-3 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                  <div className="absolute -top-1.5 left-1/4 w-1 h-3 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                  <div className="absolute top-1/2 -right-2 w-1 h-3 bg-gradient-to-r from-yellow-400 to-pink-500 transform -translate-y-1/2 rotate-90"></div>
                  <div className="absolute top-1/2 -left-2 w-1 h-3 bg-gradient-to-r from-yellow-400 to-pink-500 transform -translate-y-1/2 -rotate-90"></div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-4">
                MindEnvisia
              </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl text-white mb-6 font-light">
              Where curiosity meets clarity
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to a visionary space where seekers and thinkers explore the mysteries of growth, technology, finance, and the cosmos. 
              Join our community of curious minds on a journey of insight and transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Link href="/shorts">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer whitespace-nowrap">
                  Explore Shorts
                </button>
              </Link>
              <Link href="/support">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Support Us
                </button>
              </Link>
            </div>

            {/* Search Hint */}
            <div className="mb-8">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-400 hover:text-gray-300 transition-colors text-sm cursor-pointer"
              >
                <i className="ri-search-line mr-2"></i>
                Press Ctrl+K to search anything
              </button>
            </div>

            {/* Scroll Down Arrow */}
            <div className="mt-16 animate-bounce">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Explore Our Universe
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Growth",
                  description: "Personal development and mindset mastery",
                  icon: "ri-plant-line",
                  color: "from-green-400 to-blue-500",
                  href: "/blog?category=Growth"
                },
                {
                  title: "Mysteries",
                  description: "Unexplained phenomena and cosmic wonders",
                  icon: "ri-question-mark",
                  color: "from-purple-400 to-pink-500",
                  href: "/blog?category=Mystery"
                },
                {
                  title: "Tech",
                  description: "Future innovations and digital transformation",
                  icon: "ri-robot-line",
                  color: "from-blue-400 to-cyan-500",
                  href: "/blog?category=Tech"
                },
                {
                  title: "Finance",
                  description: "Wealth building and economic insights",
                  icon: "ri-coins-line",
                  color: "from-yellow-400 to-orange-500",
                  href: "/blog?category=Finance"
                }
              ].map((category, index) => (
                <Link key={index} href={category.href}>
                  <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${category.color} mb-4 mx-auto`}>
                      <i className={`${category.icon} text-2xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-2">
                      {category.title}
                    </h4>
                    <p className="text-gray-400 text-center text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Content Preview */}
        <div className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Explorations
              </h3>
              <p className="text-gray-400 text-lg">
                Fresh insights and deep dives into the mysteries that shape our world
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Hidden Architecture of Habit Formation",
                  category: "Growth",
                  readTime: "12 min read",
                  excerpt: "What neuroscience reveals about the 21-day myth and the real timeline of lasting change.",
                  href: "/blog/1"
                },
                {
                  title: "What Happens When AI Dreams?",
                  category: "Tech", 
                  readTime: "15 min read",
                  excerpt: "Exploring machine consciousness and the surprising patterns that emerge when algorithms 'sleep'.",
                  href: "/blog/3"
                },
                {
                  title: "The Great Filter Theory",
                  category: "Mystery",
                  readTime: "20 min read", 
                  excerpt: "Are we alone because intelligence is rare? Exploring the cosmic silence and humanity's future.",
                  href: "/blog/6"
                }
              ].map((post, index) => (
                <Link key={index} href={post.href}>
                  <article className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'Growth' ? 'bg-green-500/20 text-green-300' :
                        post.category === 'Tech' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span className="text-purple-400 hover:text-purple-300 flex items-center">
                        Read More <i className="ri-arrow-right-line ml-1"></i>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/blog">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Explore All Articles
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-black rounded-full flex items-center justify-center relative">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-0.5 left-1/2 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                      <div className="absolute -top-0.5 left-3/4 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                      <div className="absolute -top-0.5 left-1/4 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                    </div>
                  </div>
                  <span className="text-xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                    MindEnvisia
                  </span>
                </Link>
                <p className="text-gray-400 mb-4">
                  Building bridges between curiosity and understanding. Let's explore the mysteries together.
                </p>
                <div className="flex space-x-4">
                  <a href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                    <i className="ri-youtube-line text-white"></i>
                  </a>
                  <a href="https://www.instagram.com/mindenvisia?igsh=MW1kYjUzdW8yb3Jndg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                    <i className="ri-twitter-line text-white"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h5 className="text-white font-semibold mb-4">Explore</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/shorts" className="hover:text-white transition-colors cursor-pointer">Shorts Gallery</Link></li>
                  <li><Link href="/start-here" className="hover:text-white transition-colors cursor-pointer">Start Here</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
                  <li><Link href="/resources" className="hover:text-white transition-colors cursor-pointer">Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-semibold mb-4">Connect</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
                  <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Support</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 MindEnvisia. All rights reserved. | Let's keep the conversation going.</p>
            </div>
          </div>
        </footer>

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        
        {/* Accessibility Menu */}
        <AccessibilityMenu />
      </div>
    </PageTransition>
  );
}
