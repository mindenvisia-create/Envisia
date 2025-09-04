
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ['All', 'Growth', 'Mystery', 'Tech', 'Finance'];

  const blogPosts = [
    {
      id: 1,
      title: "The Hidden Architecture of Habit Formation: Why Your Brain Craves Routine",
      category: "Growth",
      type: "Expanded Short",
      excerpt: "What neuroscience reveals about the 21-day myth and the real timeline of lasting change. A deep dive into the neuroplasticity research that's revolutionizing how we think about personal transformation.",
      readTime: "12 min read",
      date: "2024-01-15",
      author: "MindEnvisia",
      featured: true,
      image: "https://readdy.ai/api/search-image?query=Neural%20pathways%20forming%20beautiful%20glowing%20connections%20in%20the%20brain%20abstract%20visualization%20of%20habit%20formation%20with%20golden%20synapses%20firing%20dark%20cosmic%20background%20with%20purple%20accents%20scientific%20yet%20artistic&width=600&height=300&seq=blog1fixed&orientation=landscape"
    },
    {
      id: 2,
      title: "The Voynich Manuscript: Medieval Mystery or Elaborate Hoax?",
      category: "Mystery",
      type: "Curiosity Essay",
      excerpt: "After centuries of cryptanalysis and AI attempts, this 15th-century codex continues to baffle scholars. We explore the latest theories and why some mysteries resist even our most advanced decoding technologies.",
      readTime: "18 min read",
      date: "2024-01-12",
      author: "MindEnvisia",
      featured: false,
      image: "https://readdy.ai/api/search-image?query=Ancient%20mysterious%20manuscript%20with%20undecipherable%20symbols%20and%20illustrations%20medieval%20parchment%20with%20strange%20botanical%20drawings%20mystical%20atmosphere%20with%20candlelight%20and%20ancient%20library%20setting%20dark%20amber%20tones&width=600&height=300&seq=blog2fixed&orientation=landscape"
    },
    {
      id: 3,
      title: "What Happens When AI Dreams? Exploring Machine Consciousness",
      category: "Tech",
      type: "Behind-the-Scenes",
      excerpt: "From my recent collaboration with OpenAI researchers, here's what we discovered about neural network visualization and the surprising patterns that emerge when algorithms 'sleep'. The implications for AGI are profound.",
      readTime: "15 min read",
      date: "2024-01-10",
      author: "MindEnvisia",
      featured: true,
      image: "https://readdy.ai/api/search-image?query=Artificial%20intelligence%20dreaming%20with%20flowing%20digital%20neural%20networks%20forming%20surreal%20patterns%20electric%20blue%20and%20purple%20data%20streams%20creating%20dream-like%20imagery%20futuristic%20visualization%20of%20machine%20consciousness&width=600&height=300&seq=blog3fixed&orientation=landscape"
    },
    {
      id: 4,
      title: "The Psychology of Money: Why Smart People Make Dumb Financial Decisions",
      category: "Finance",
      type: "Expanded Short",
      excerpt: "Behavioral economics reveals the cognitive biases that sabotage our wealth-building efforts. From loss aversion to the endowment effect, understanding these mental traps is the first step to financial freedom.",
      readTime: "14 min read",
      date: "2024-01-08",
      author: "MindEnvisia",
      featured: false,
      image: "https://readdy.ai/api/search-image?query=Human%20brain%20overlaid%20with%20financial%20charts%20and%20golden%20coins%20psychological%20representation%20of%20money%20decisions%20dark%20background%20with%20purple%20and%20gold%20accents%20concept%20of%20cognitive%20biases%20in%20investing&width=600&height=300&seq=blog4fixed&orientation=landscape"
    },
    {
      id: 5,
      title: "My Creative Process: From Cosmic Curiosity to YouTube Shorts",
      category: "Growth",
      type: "Behind-the-Scenes",
      excerpt: "How I transform abstract ideas into digestible content. A transparent look at my research methods, storytelling frameworks, and the tools that help me distill complex concepts into compelling narratives.",
      readTime: "10 min read",
      date: "2024-01-05",
      author: "MindEnvisia",
      featured: false,
      image: "https://readdy.ai/api/search-image?query=Creative%20workspace%20with%20cosmic%20elements%20notebooks%20filled%20with%20ideas%20connecting%20to%20digital%20screens%20artistic%20representation%20of%20the%20creative%20process%20with%20stars%20and%20galaxies%20inspiring%20dark%20purple%20atmosphere&width=600&height=300&seq=blog5fixed&orientation=landscape"
    },
    {
      id: 6,
      title: "The Great Filter Theory: Are We Alone Because Intelligence is Rare?",
      category: "Mystery",
      type: "Curiosity Essay",
      excerpt: "The Fermi Paradox suggests we should see evidence of alien civilizations everywhere. The Great Filter hypothesis offers a chilling explanation for the cosmic silence—and raises questions about humanity's future.",
      readTime: "20 min read",
      date: "2024-01-03",
      author: "MindEnvisia",
      featured: true,
      image: "https://readdy.ai/api/search-image?query=Vast%20cosmic%20space%20with%20distant%20galaxies%20and%20stars%20representation%20of%20the%20Great%20Filter%20theory%20with%20barriers%20blocking%20civilizations%20mysterious%20deep%20space%20with%20purple%20nebulae%20and%20cosmic%20barriers&width=600&height=300&seq=blog6fixed&orientation=landscape"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center relative">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                        <div className="absolute inset-0 border border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                  <div className="absolute -top-0.5 left-3/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                  <div className="absolute -top-0.5 left-1/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                </div>
              </div>
              <span className="text-2xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                MindEnvisia
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shorts" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Shorts</Link>
              <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Start Here</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
              <Link href="/blog" className="text-white font-semibold cursor-pointer">Blog</Link>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Resources</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
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
      <div className="relative z-10 py-20 px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Deep Dives & Reflections
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Where ideas unfold, mysteries deepen, and insights transform into wisdom
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The intellectual extension of our Shorts—long-form explorations that complement our videos with deeper context, analysis, and storytelling for minds that crave more depth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/40 border border-purple-500/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-black/40 text-gray-300 hover:text-white border border-purple-500/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {selectedCategory === 'All' && (
        <div className="relative z-10 py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <i className="ri-star-line text-yellow-400 mr-3"></i>
              Editor's Picks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.category === 'Growth' ? 'bg-green-500/20 text-green-300' :
                          post.category === 'Mystery' ? 'bg-purple-500/20 text-purple-300' :
                          post.category === 'Tech' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-400 text-xs">{post.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.readTime}</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Articles */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-600 mb-4"></i>
              <h3 className="text-xl text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover object-top"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                              FEATURED
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.category === 'Growth' ? 'bg-green-500/20 text-green-300' :
                            post.category === 'Mystery' ? 'bg-purple-500/20 text-purple-300' :
                            post.category === 'Tech' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{post.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span>{post.readTime}</span>
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center cursor-pointer whitespace-nowrap">
                          Read More
                          <i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reader's Picks Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              <i className="ri-heart-line text-pink-400 mr-3"></i>
              Reader's Picks
            </h3>
            <p className="text-gray-300 mb-6">
              Articles chosen by our community as the most thought-provoking and transformative
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-black/40 text-gray-300 px-4 py-2 rounded-full text-sm border border-purple-500/20">
                "The Hidden Architecture of Habit Formation" - 94% loved it
              </span>
              <span className="bg-black/40 text-gray-300 px-4 py-2 rounded-full text-sm border border-purple-500/20">
                "What Happens When AI Dreams?" - 89% found it mind-bending
              </span>
              <span className="bg-black/40 text-gray-300 px-4 py-2 rounded-full text-sm border border-purple-500/20">
                "The Great Filter Theory" - 92% couldn't stop thinking about it
              </span>
            </div>
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
                Deep dives into the mysteries that shape our world and the insights that transform our minds.
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
            <p>&copy; 2024 MindEnvisia. All rights reserved. | Where curiosity meets clarity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}