
'use client';

import Link from 'next/link';

export default function SupportPage() {
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
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Resources</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Support Us Icon */}
              <a
                href="https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full hover:scale-110 transition-transform cursor-pointer"
                title="Support us with Amazon Gift Cards"
              >
                <i className="ri-gift-fill text-white"></i>
                <span className="text-white font-semibold whitespace-nowrap">Gift Cards</span>
              </a>
              
              <a
                href="https://youtube.com/@mindenivisa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support MindEnvisia's Mission
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Help us continue creating ad-free, agenda-free content that sparks curiosity and transforms minds
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center mb-16">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 mx-auto">
              <i className="ri-heart-line text-3xl text-white"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              No Ads, No Paywalls, Just Pure Insight
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              MindEnvisia exists to democratize wisdom and make transformative insights accessible to everyone, 
              regardless of their financial situation. We believe knowledge that can change lives shouldn't be 
              locked behind barriers or interrupted by commercial interests.
            </p>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
              <p className="text-white font-semibold text-xl">
                "When you support MindEnvisia, you're investing in a vision where curiosity has no price tag."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How You Can Support Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Amazon Gift Card Support */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mb-6 mx-auto">
                <i className="ri-gift-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Amazon Gift Cards</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Support us with Amazon gift cards - works internationally and helps fund content creation tools and resources.
              </p>
              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <p className="flex items-center justify-center">
                  <i className="ri-mail-line mr-2"></i>
                  Send codes to: mindenvisia@gmail.com
                </p>
                <p className="flex items-center justify-center">
                  <i className="ri-global-line mr-2"></i>
                  Works worldwide (Amazon.com preferred)
                </p>
              </div>
              <a
                href="https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap inline-block"
              >
                Get Gift Card
              </a>
            </div>

            {/* Contact Support */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 mx-auto">
                <i className="ri-customer-service-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Direct Support</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Need personal assistance? Send us a message and we'll get back to you within 24-48 hours.
              </p>
              <Link href="/contact">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Browse Resources */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 mx-auto">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Self-Help Resources</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore our curated collection of tools, guides, and resources to fuel your journey of discovery.
              </p>
              <Link href="/resources">
                <button className="w-full bg-black/40 border border-purple-500/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600/20 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  Browse Resources
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Your Support Makes a Difference
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mx-auto">
                  <i className="ri-research-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Deep Research</h3>
                <p className="text-gray-300">
                  Every contribution helps fund the extensive research behind each video, 
                  ensuring accuracy and depth in our content.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mb-4 mx-auto">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality Production</h3>
                <p className="text-gray-300">
                  Support helps maintain high production standards, from visuals and audio 
                  to editing and platform hosting costs.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Most importantly, your support allows us to remain completely independent. 
                No corporate sponsors, no advertiser influence, no agenda other than sparking 
                curiosity and empowering growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Card Instructions Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            How to Send Amazon Gift Cards
          </h2>
          
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-number-1 text-orange-400 mr-3"></i>
                  Purchase Gift Card
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Visit Amazon.com (preferred) or your local Amazon site
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Choose "Email" delivery for instant sending
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Any amount welcome - $10, $25, $50, or custom
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-number-2 text-orange-400 mr-3"></i>
                  Send to Us
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Email the gift card code to: mindenvisia@gmail.com
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Include "Gift Card Support" in subject line
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-line text-orange-400 mt-1 mr-2 flex-shrink-0"></i>
                    Add a note if you'd like (optional)
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/20">
              <div className="flex items-start space-x-3">
                <i className="ri-shield-check-line text-green-400 text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <h4 className="text-white font-semibold mb-2">Why Amazon Gift Cards?</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Amazon gift cards work internationally, don't require personal payment info sharing, 
                    and help us purchase legitimate business tools, books, software, and equipment for content creation. 
                    They're more flexible than platform-specific cards and easier to use for actual business expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Complete Transparency
          </h2>
          
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p>
                  <strong className="text-white">100% Voluntary:</strong> Donations are completely optional. 
                  All MindEnvisia content remains free and accessible regardless of contribution.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p>
                  <strong className="text-white">No Services Tied:</strong> Donations don't unlock special content, 
                  provide consultation, or guarantee responses. They simply support the mission.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p>
                  <strong className="text-white">Mission-Focused:</strong> Funds go directly toward research, 
                  production costs, hosting, and tools that improve content quality.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p>
                  <strong className="text-white">Independence Maintained:</strong> Donations never influence content 
                  direction, topics covered, or perspectives shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Support */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Can't Donate? No Problem!
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            There are many meaningful ways to support MindEnvisia that don't involve money
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Spread the Word</h3>
              <p className="text-gray-400">
                Share videos, recommend the channel, and help us reach other curious minds who would value this content.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Engage Thoughtfully</h3>
              <p className="text-gray-400">
                Leave meaningful comments, participate in discussions, and help create a vibrant community of seekers.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Subscribe & Follow</h3>
              <p className="text-gray-400">
                Simple actions like subscribing on YouTube and following on social media help with platform visibility.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Provide Feedback</h3>
              <p className="text-gray-400">
                Share what topics intrigue you, what questions you're exploring, and how the content impacts your thinking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Thank You for Being Part of This Journey
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Whether you support through donations, sharing, engagement, or simply by being a curious seeker, 
              you're helping create a space where wisdom flows freely and minds expand without limits.
            </p>
            <p className="text-lg text-yellow-300 font-semibold">
              Together, we're proving that in a world of noise, there's still room for depth, 
              wonder, and transformative insight.
            </p>
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
                Supporting the mission of free, transformative content for curious minds.
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
