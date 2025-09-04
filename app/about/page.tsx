
'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full border-2 border-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-2xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                MindEnvisia
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shorts" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Shorts</Link>
              <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Start Here</Link>
              <Link href="/about" className="text-white font-semibold cursor-pointer">About</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
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
      <div className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Story Behind <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">MindEnvisia</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Where curiosity meets clarity, and every question becomes a gateway to transformation
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              The Vision
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                MindEnvisia was born from a simple yet profound realization: in a world overflowing with information, 
                what we truly need is <span className="text-yellow-300 font-semibold">wisdom</span>. Not just facts, 
                but insights that transform how we see ourselves and the world around us.
              </p>
              <p>
                This channel emerged from countless late-night conversations about the mysteries that fascinate us most — 
                the nature of consciousness, the patterns that govern success, the technologies reshaping our future, 
                and the timeless principles of growth and abundance.
              </p>
              <p>
                Every piece of content is crafted with intention: to spark that <span className="text-pink-300 font-semibold">"aha moment"</span> 
                that shifts your perspective, to connect dots you never knew existed, and to empower you with knowledge 
                that actually makes a difference in your daily life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-lightbulb-line",
                title: "Curiosity First",
                description: "Every journey begins with a question. We believe the right question is more valuable than a dozen easy answers.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: "ri-compass-3-line",
                title: "Clarity Through Complexity",
                description: "We take complex ideas and make them accessible, without dumbing them down. Depth doesn't have to be dense.",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: "ri-plant-line",
                title: "Growth Mindset",
                description: "Every insight is a seed for transformation. We focus on knowledge that grows into wisdom, wisdom into action.",
                color: "from-green-400 to-teal-500"
              },
              {
                icon: "ri-community-line",
                title: "Collective Intelligence",
                description: "The best insights emerge from diverse perspectives. We're building a community of curious minds learning together.",
                color: "from-pink-400 to-purple-500"
              },
              {
                icon: "ri-star-line",
                title: "Cosmic Perspective",
                description: "We zoom out to see the bigger picture, connecting personal growth to universal patterns and principles.",
                color: "from-purple-400 to-indigo-500"
              },
              {
                icon: "ri-rocket-line",
                title: "Future-Focused",
                description: "While respecting timeless wisdom, we're always exploring the cutting edge of human potential and possibility.",
                color: "from-cyan-400 to-blue-500"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind the Scenes */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Behind the Scenes
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Creating MindEnvisia content is equal parts research, reflection, and creative synthesis. 
                Each video begins with a question that won't let go — something that makes us pause and wonder.
              </p>
              <p>
                We dive deep into scientific studies, philosophical texts, historical patterns, and emerging trends. 
                But the real magic happens in the connections — linking ancient wisdom to modern discoveries, 
                finding universal patterns in specific phenomena, translating complex concepts into memorable insights.
              </p>
              <p>
                Our commitment is to accuracy without academic stuffiness, depth without pretension, 
                and inspiration grounded in truth. Every script is carefully crafted, every visual thoughtfully chosen, 
                every claim thoroughly researched.
              </p>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 mt-8">
                <p className="text-white font-semibold text-center text-xl">
                  "The goal isn't just to inform — it's to ignite that spark of curiosity that leads to your own discoveries."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 mb-4 mx-auto">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No Ads, No Agenda</h3>
              <p className="text-gray-400">
                Pure insight without commercial interruption. Our only agenda is your growth and understanding.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mx-auto">
                <i className="ri-open-source-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Open Source Wisdom</h3>
              <p className="text-gray-400">
                Knowledge should be freely shared. We believe in making deep insights accessible to everyone.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-4 mx-auto">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community First</h3>
              <p className="text-gray-400">
                This isn't just a channel — it's a community of seekers supporting each other's growth journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to explore the intersection of curiosity and clarity? 
            Dive into our content, connect with fellow seekers, and discover insights that transform.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/shorts">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Explore Shorts
              </button>
            </Link>
            <Link href="/blog">
              <button className="bg-black/40 border border-purple-500/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Read Blog
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
            <p>&copy; 2024 MindEnvisia. All rights reserved. | Where curiosity meets clarity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
