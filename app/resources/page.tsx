'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ['All', 'Growth', 'Mystery', 'Tech', 'Finance', 'Books', 'Tools'];

  const resources = [
    {
      id: 1,
      title: "Atomic Habits by James Clear",
      description: "The definitive guide to habit formation and behavior change. Essential reading for anyone looking to transform their life through small, consistent actions.",
      category: "Books",
      type: "Book Recommendation",
      url: "https://jamesclear.com/atomic-habits",
      image: "https://readdy.ai/api/search-image?query=atomic%20habits%20book%20cover%20with%20molecular%20structure%20golden%20gears%20and%20transformation%20symbols%20cosmic%20purple%20lighting%20personal%20development%20theme%20self%20improvement%20book&width=400&height=300&seq=resource1fixed&orientation=landscape",
      featured: true,
      tags: ["Habits", "Psychology", "Self-Improvement"]
    },
    {
      id: 2,
      title: "Notion - Ultimate Productivity System",
      description: "All-in-one workspace for notes, tasks, databases, and project management. Perfect for organizing your learning journey and tracking personal growth.",
      category: "Tools",
      type: "Productivity Tool",
      url: "https://notion.so",
      image: "https://readdy.ai/api/search-image?query=modern%20digital%20workspace%20with%20organized%20notes%20databases%20and%20productivity%20tools%20clean%20interface%20design%20purple%20and%20blue%20gradient%20background%20productivity%20system&width=400&height=300&seq=resource2fixed&orientation=landscape",
      featured: false,
      tags: ["Productivity", "Organization", "Note-taking"]
    },
    {
      id: 3,
      title: "The Mystery of Consciousness",
      description: "Comprehensive research compilation on consciousness studies, including latest neuroscience findings and philosophical perspectives on the hard problem of consciousness.",
      category: "Mystery",
      type: "Research Collection",
      url: "https://www.consciousnessresearch.org",
      image: "https://readdy.ai/api/search-image?query=human%20brain%20with%20glowing%20neural%20networks%20and%20mystical%20consciousness%20symbols%20abstract%20representation%20of%20awareness%20cosmic%20purple%20background%20consciousness%20research%20neuroscience&width=400&height=300&seq=resource3fixed&orientation=landscape",
      featured: true,
      tags: ["Consciousness", "Neuroscience", "Philosophy"]
    },
    {
      id: 4,
      title: "Anki - Spaced Repetition System",
      description: "Powerful flashcard system using spaced repetition algorithm. Perfect for memorizing complex information and accelerating learning retention.",
      category: "Tools",
      type: "Learning Tool",
      url: "https://apps.ankiweb.net",
      image: "https://readdy.ai/api/search-image?query=brain%20with%20memory%20pathways%20and%20flashcards%20floating%20around%20spaced%20repetition%20visualization%20educational%20technology%20theme%20blue%20and%20purple%20lighting%20learning%20system&width=400&height=300&seq=resource4fixed&orientation=landscape",
      featured: false,
      tags: ["Learning", "Memory", "Study"]
    },
    {
      id: 5,
      title: "Thinking, Fast and Slow",
      description: "Daniel Kahneman's masterpiece on cognitive biases and decision-making. Explores System 1 vs System 2 thinking and how our minds really work.",
      category: "Books",
      type: "Book Recommendation", 
      url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
      image: "https://readdy.ai/api/search-image?query=dual%20brain%20concept%20showing%20fast%20and%20slow%20thinking%20processes%20cognitive%20psychology%20visualization%20split%20brain%20with%20different%20pathways%20academic%20theme%20psychology%20book&width=400&height=300&seq=resource5fixed&orientation=landscape",
      featured: true,
      tags: ["Psychology", "Decision-Making", "Cognitive Science"]
    },
    {
      id: 6,
      title: "AI Safety Research Papers",
      description: "Curated collection of the most important research papers on AI alignment, safety, and the future of artificial intelligence development.",
      category: "Tech",
      type: "Research Collection",
      url: "https://www.aisafety.info",
      image: "https://readdy.ai/api/search-image?query=artificial%20intelligence%20safety%20concept%20with%20protective%20shields%20around%20AI%20systems%20futuristic%20technology%20with%20safety%20protocols%20blue%20and%20green%20lighting%20AI%20research&width=400&height=300&seq=resource6fixed&orientation=landscape",
      featured: false,
      tags: ["AI Safety", "Research", "Future Tech"]
    },
    {
      id: 7,
      title: "Meditation Timer & Tracker",
      description: "Simple, elegant meditation app with various timer options, progress tracking, and guided sessions for developing mindfulness practice.",
      category: "Growth",
      type: "Mobile App",
      url: "https://insighttimer.com",
      image: "https://readdy.ai/api/search-image?query=peaceful%20meditation%20scene%20with%20timer%20interface%20zen%20garden%20with%20flowing%20water%20mindfulness%20and%20serenity%20theme%20soft%20purple%20and%20gold%20lighting%20meditation%20app&width=400&height=300&seq=resource7fixed&orientation=landscape",
      featured: false,
      tags: ["Meditation", "Mindfulness", "Mental Health"]
    },
    {
      id: 8,
      title: "The Bitcoin Standard",
      description: "Saifedean Ammous explains the historical context of money, the flaws of modern monetary systems, and Bitcoin's role as digital gold.",
      category: "Finance",
      type: "Book Recommendation",
      url: "https://saifedean.com/thebitcoinstandard/",
      image: "https://readdy.ai/api/search-image?query=bitcoin%20golden%20coin%20with%20traditional%20monetary%20symbols%20fading%20away%20digital%20currency%20revolution%20concept%20financial%20transformation%20theme%20cryptocurrency%20book%20economics&width=400&height=300&seq=resource8fixed&orientation=landscape",
      featured: true,
      tags: ["Bitcoin", "Economics", "Monetary System"]
    },
    {
      id: 9,
      title: "Obsidian - Knowledge Management",
      description: "Powerful note-taking app that creates a knowledge graph of your ideas. Perfect for connecting concepts and building a second brain system.",
      category: "Tools",
      type: "Knowledge Tool",
      url: "https://obsidian.md",
      image: "https://readdy.ai/api/search-image?query=interconnected%20knowledge%20graph%20with%20nodes%20and%20connections%20digital%20brain%20network%20visualization%20note-taking%20and%20learning%20concept%20knowledge%20management%20system&width=400&height=300&seq=resource9fixed&orientation=landscape",
      featured: false,
      tags: ["Note-taking", "Knowledge Management", "Learning"]
    },
    {
      id: 10,
      title: "The Phenomenon Documentary",
      description: "Compelling documentary examining UFO encounters and government disclosure. Features credible witnesses and declassified evidence.",
      category: "Mystery",
      type: "Documentary",
      url: "https://thephenomenon-movie.com",
      image: "https://readdy.ai/api/search-image?query=UFO%20phenomena%20with%20mysterious%20lights%20in%20night%20sky%20documentary%20style%20composition%20unexplained%20aerial%20phenomena%20cosmic%20mystery%20theme%20government%20disclosure%20UFO&width=400&height=300&seq=resource10fixed&orientation=landscape",
      featured: false,
      tags: ["UFOs", "Government Disclosure", "Mystery"]
    },
    {
      id: 11,
      title: "Compound Interest Calculator",
      description: "Interactive tool for visualizing the power of compound growth over time. Essential for understanding long-term wealth building strategies.",
      category: "Finance",
      type: "Financial Tool",
      url: "https://investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
      image: "https://readdy.ai/api/search-image?query=compound%20interest%20growth%20visualization%20with%20exponential%20curves%20and%20golden%20coins%20multiplying%20over%20time%20wealth%20building%20concept%20financial%20calculator%20tool&width=400&height=300&seq=resource11fixed&orientation=landscape",
      featured: false,
      tags: ["Investing", "Compound Interest", "Wealth Building"]
    },
    {
      id: 12,
      title: "Sapiens by Yuval Noah Harari",
      description: "Fascinating exploration of human history, from hunter-gatherers to the digital age. Challenges assumptions about progress and civilization.",
      category: "Books",
      type: "Book Recommendation",
      url: "https://www.ynharari.com/book/sapiens/",
      image: "https://readdy.ai/api/search-image?query=human%20evolution%20timeline%20from%20ancient%20times%20to%20modern%20digital%20age%20anthropological%20journey%20through%20history%20educational%20illustration%20history%20book%20civilization&width=400&height=300&seq=resource12fixed&orientation=landscape",
      featured: true,
      tags: ["History", "Anthropology", "Human Evolution"]
    },
    {
      id: 13,
      title: "Forest - Focus & Productivity",
      description: "Gamified productivity app that plants virtual trees while you focus. Combines environmental consciousness with time management.",
      category: "Growth",
      type: "Mobile App",
      url: "https://forestapp.cc",
      image: "https://readdy.ai/api/search-image?query=growing%20forest%20with%20timer%20interface%20productivity%20and%20focus%20concept%20green%20trees%20and%20natural%20growth%20theme%20environmental%20consciousness%20productivity%20app%20gamification&width=400&height=300&seq=resource13fixed&orientation=landscape",
      featured: false,
      tags: ["Focus", "Productivity", "Gamification"]
    },
    {
      id: 14,
      title: "Quantum Computing Explained",
      description: "Comprehensive course breaking down quantum mechanics principles and their applications in computing. From qubits to quantum algorithms.",
      category: "Tech",
      type: "Online Course",
      url: "https://quantum-computing.ibm.com",
      image: "https://readdy.ai/api/search-image?query=quantum%20computer%20with%20glowing%20qubits%20and%20quantum%20entanglement%20visualization%20futuristic%20technology%20concept%20blue%20and%20purple%20quantum%20effects%20quantum%20computing%20course&width=400&height=300&seq=resource14fixed&orientation=landscape",
      featured: false,
      tags: ["Quantum Computing", "Physics", "Technology"]
    },
    {
      id: 15,
      title: "The Voynich Manuscript Analysis",
      description: "Latest research and analysis attempts on history's most mysterious book. Includes AI decryption efforts and linguistic studies.",
      category: "Mystery",
      type: "Research Collection",
      url: "https://voynich.nu",
      image: "https://readdy.ai/api/search-image?query=ancient%20mysterious%20manuscript%20with%20undecipherable%20symbols%20and%20strange%20illustrations%20medieval%20cryptography%20and%20linguistic%20mystery%20theme%20historical%20mystery%20research&width=400&height=300&seq=resource15fixed&orientation=landscape",
      featured: true,
      tags: ["Cryptography", "Ancient Mysteries", "Linguistics"]
    },
    {
      id: 16,
      title: "Waking Up Meditation App",
      description: "Sam Harris's approach to secular meditation and consciousness exploration. Deep philosophical insights combined with practical techniques.",
      category: "Growth",
      type: "Mobile App",
      url: "https://wakingup.com",
      image: "https://readdy.ai/api/search-image?query=consciousness%20expansion%20with%20meditation%20and%20philosophical%20contemplation%20awakening%20mind%20concept%20serene%20cosmic%20background%20meditation%20app%20spiritual%20practice&width=400&height=300&seq=resource16fixed&orientation=landscape",
      featured: false,
      tags: ["Meditation", "Philosophy", "Consciousness"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const openResource = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Growth': return 'ri-plant-line';
      case 'Mystery': return 'ri-question-line';
      case 'Tech': return 'ri-robot-line';
      case 'Finance': return 'ri-coins-line';
      case 'Books': return 'ri-book-line';
      case 'Tools': return 'ri-tools-line';
      default: return 'ri-star-line';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Growth': return 'bg-green-500/20 text-green-300';
      case 'Mystery': return 'bg-purple-500/20 text-purple-300';
      case 'Tech': return 'bg-blue-500/20 text-blue-300';
      case 'Finance': return 'bg-yellow-500/20 text-yellow-300';
      case 'Books': return 'bg-pink-500/20 text-pink-300';
      case 'Tools': return 'bg-cyan-500/20 text-cyan-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

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
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
              <Link href="/resources" className="text-white font-semibold cursor-pointer">Resources</Link>
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
      <div className={`relative z-10 py-20 px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Curated Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Handpicked tools, books, and insights to accelerate your journey of growth and discovery
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every resource has been personally tested and recommended. No affiliate spam—just genuine recommendations that can transform your learning experience.
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
                    placeholder="Search resources, tags, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/40 border border-purple-500/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                  />
                </div>
              </div>

              {/* Category Filters */ }
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap hover:scale-105 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-black/40 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={`${getCategoryIcon(category)} text-sm`}></i>
                    </div>
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      {activeCategory === 'All' && (
        <div className="relative z-10 py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <i className="ri-star-line text-yellow-400 mr-3"></i>
              Editor's Picks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div
                  key={resource.id}
                  onClick={() => openResource(resource.url)}
                  className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-black/60 rounded-full">
                        <i className="ri-external-link-line text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                        <div className="w-3 h-3 flex items-center justify-center inline-block mr-1">
                          <i className={`${getCategoryIcon(resource.category)} text-xs`}></i>
                        </div>
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="bg-black/40 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Resources */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {activeCategory === 'All' ? 'All Resources' : `${activeCategory} Resources`}
          </h2>
          
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-600 mb-4"></i>
              <h3 className="text-xl text-gray-400 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  onClick={() => openResource(resource.url)}
                  className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    {resource.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <i className="ri-external-link-line text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                        <div className="w-3 h-3 flex items-center justify-center inline-block mr-1">
                          <i className={`${getCategoryIcon(resource.category)} text-xs`}></i>
                        </div>
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-black/40 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="text-gray-500 text-xs self-center">
                          +{resource.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center group-hover:text-yellow-300 transition-colors">
                      Explore Resource
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Resource Categories Overview */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Explore by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-6 rounded-xl border transition-all cursor-pointer hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 border-purple-500/50'
                    : 'bg-black/40 border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className={`${getCategoryIcon(category)} text-2xl text-purple-400`}></i>
                </div>
                <div className="text-white font-medium text-sm">{category}</div>
                <div className="text-gray-400 text-xs mt-1">
                  {resources.filter(r => r.category === category).length} resources
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Submission CTA */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Know a Great Resource?
            </h3>
            <p className="text-gray-300 mb-6">
              Help the community discover amazing tools, books, and resources that have helped your growth journey
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Submit a Resource
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-40"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>

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
                Curated resources to accelerate your journey of growth and discovery.
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
            <p>&copy; 2024 MindEnvisia. All rights reserved. | Curated with care for curious minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}