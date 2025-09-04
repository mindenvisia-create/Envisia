
'use client';

import Link from 'next/link';
import { useState } from 'react';

const beginnerVideos = [
  {
    id: 1,
    title: "Welcome to MindEnvisia",
    description: "Your guide to navigating the cosmic intersection of curiosity and growth",
    thumbnail: "https://readdy.ai/api/search-image?query=welcoming%20cosmic%20portal%20with%20glowing%20eye%20symbol%20surrounded%20by%20stars%20and%20galaxies%20purple%20golden%20lighting&width=400&height=300&seq=welcome1&orientation=landscape",
    duration: "5:24",
    category: "Introduction",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
  },
  {
    id: 2,
    title: "The Power of Questions",
    description: "Why asking the right question is more valuable than having all the answers",
    thumbnail: "https://readdy.ai/api/search-image?query=question%20mark%20symbols%20floating%20in%20cosmic%20space%20with%20bright%20energy%20emanating%20mystery%20and%20wonder%20purple%20background&width=400&height=300&seq=questions1&orientation=landscape",
    duration: "4:17",
    category: "Philosophy",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
  },
  {
    id: 3,
    title: "Your Growth Operating System",
    description: "The fundamental framework for continuous learning and transformation",
    thumbnail: "https://readdy.ai/api/search-image?query=human%20brain%20with%20glowing%20neural%20pathways%20connecting%20to%20cosmic%20symbols%20growth%20mindset%20visualization%20purple%20gold%20energy&width=400&height=300&seq=growth1&orientation=landscape",
    duration: "6:45",
    category: "Growth",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
  },
  {
    id: 4,
    title: "Patterns in the Chaos",
    description: "How to recognize the hidden order in seemingly random events",
    thumbnail: "https://readdy.ai/api/search-image?query=geometric%20patterns%20emerging%20from%20chaotic%20swirling%20energy%20cosmic%20fractals%20purple%20and%20gold%20mathematical%20beauty&width=400&height=300&seq=patterns1&orientation=landscape",
    duration: "5:33",
    category: "Mysteries",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
  }
];

const faqs = [
  {
    question: "What makes MindEnvisia different from other channels?",
    answer: "MindEnvisia bridges the gap between ancient wisdom and cutting-edge discoveries. We don't just share information — we connect dots across disciplines to reveal deeper patterns and practical insights that actually transform how you think and act."
  },
  {
    question: "What topics do you cover?",
    answer: "Our four main pillars are Growth (personal development and mindset), Mysteries (unexplained phenomena and consciousness), Tech (future innovations and AI), and Finance (wealth building and economic patterns). But we explore the fascinating intersections between all these areas."
  },
  {
    question: "How often do you post new content?",
    answer: "We prioritize quality over quantity. New Shorts are released 2-3 times per week, with longer deep-dive content monthly. Each piece is thoroughly researched and crafted to provide genuine value rather than just filling a content calendar."
  },
  {
    question: "Is the content suitable for beginners?",
    answer: "Absolutely! While we tackle complex topics, we make them accessible without dumbing them down. The 'Start Here' playlist is specifically designed for newcomers, and every video stands alone — no prerequisite knowledge required."
  },
  {
    question: "How can I engage with the community?",
    answer: "Join discussions in the comments, participate in our Community Wall, connect with fellow seekers in our Discord, and share your own insights. The best learning happens when curious minds collaborate."
  },
  {
    question: "Do you have a particular worldview or bias?",
    answer: "Our approach is evidence-based and philosophically curious rather than dogmatic. We present multiple perspectives, cite our sources, and encourage critical thinking. Our 'bias' is toward growth, truth, and empowering human potential."
  }
];

export default function StartHerePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [playingIntro, setPlayingIntro] = useState(false);

  const openYouTube = (video: any) => {
    window.open(video.youtubeUrl, '_blank');
  };

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
              <Link href="/start-here" className="text-white font-semibold cursor-pointer">Start Here</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
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
            Start Your Journey Here
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            New to MindEnvisia? Perfect. These carefully curated insights will introduce you 
            to our cosmic approach to growth, curiosity, and transformation.
          </p>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/20">
            <p className="text-lg text-white">
              🌌 <strong>Pro Tip:</strong> Watch these in order for the best experience, 
              but feel free to explore whatever sparks your curiosity first.
            </p>
          </div>
        </div>
      </div>

      {/* Beginner Playlist */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Essential Viewing for New Seekers
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Your curated introduction to the MindEnvisia universe
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beginnerVideos.map((video, index) => (
              <div
                key={video.id}
                className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300 flex items-center justify-center group">
                    <div 
                      onClick={() => openYouTube(video)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    >
                      <i className="ri-play-fill text-2xl text-white ml-1"></i>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-300 font-semibold bg-purple-500/20 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-yellow-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What is MindEnvisia */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is MindEnvisia?
            </h2>
            
            <div className="aspect-video rounded-xl mb-8 flex items-center justify-center border border-purple-500/20 relative cursor-pointer overflow-hidden" onClick={() => window.open('https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs', '_blank')}>
              <img
                src="https://readdy.ai/api/search-image?query=MindEnvisia%20brand%20introduction%20cosmic%20eye%20symbol%20surrounded%20by%20four%20pillars%20of%20growth%20mysteries%20technology%20finance%20with%20purple%20golden%20aurora%20background%20professional%20channel%20intro%20thumbnail&width=800&height=450&seq=mindenvisiaintro2025&orientation=landscape"
                alt="What is MindEnvisia Introduction Video"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="ri-play-fill text-3xl text-white ml-1"></i>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                7:42
              </div>
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                Introduction
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              This comprehensive introduction explains our mission, approach, and the four pillars 
              that guide everything we create. Consider it your roadmap to the MindEnvisia universe.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Guide */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How to Navigate MindEnvisia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-4 mx-auto">
                <i className="ri-seedling-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Growth</h3>
              <p className="text-gray-400 text-sm">
                Personal development, mindset mastery, and transformation strategies
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mb-4 mx-auto">
                <i className="ri-question-mark text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Mysteries</h3>
              <p className="text-gray-400 text-sm">
                Consciousness, unexplained phenomena, and cosmic wonders
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mb-4 mx-auto">
                <i className="ri-robot-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Tech</h3>
              <p className="text-gray-400 text-sm">
                AI, future innovations, and digital transformation
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 mx-auto">
                <i className="ri-coins-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Finance</h3>
              <p className="text-gray-400 text-sm">
                Wealth building, economic patterns, and financial wisdom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between text-white hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <i className={`ri-arrow-${expandedFaq === index ? 'up' : 'down'}-s-line text-xl`}></i>
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Now that you understand what MindEnvisia is about, dive deeper into the topics that fascinate you most.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/shorts">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
                <i className="ri-video-line text-xl mb-2 block"></i>
                Browse All Shorts
              </button>
            </Link>
            
            <Link href="/blog">
              <button className="w-full bg-black/40 border border-purple-500/20 text-white px-6 py-4 rounded-xl font-semibold hover:bg-purple-600/20 transition-all duration-300 cursor-pointer">
                <i className="ri-article-line text-xl mb-2 block"></i>
                Read Deep Dives
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
                Your guide to navigating the cosmic intersection of curiosity and growth.
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
