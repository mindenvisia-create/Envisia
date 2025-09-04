
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Please select a subject');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    if (formData.message.length > 500) {
      setError('Message must be 500 characters or less');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }

    setIsLoading(false);
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
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

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black/90 border border-purple-500/20 rounded-2xl p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Message Sent Successfully!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out. I'll get back to you within 24-48 hours.
            </p>
            <button
              onClick={resetForm}
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Resources</Link>
              <Link href="/contact" className="text-white font-semibold cursor-pointer">Contact</Link>
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
        <h1 className="text-4xl md:text-6xl font-bold font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-6">
          Let's Connect
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Have a question, insight, or just want to chat about the mysteries of existence? I'd love to hear from you.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-400 mr-2"></i>
                    <p className="text-red-300">{error}</p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 transition-colors pr-8"
                  >
                    <option value="">Select a topic...</option>
                    <option value="Collaboration">Collaboration Opportunity</option>
                    <option value="Content Suggestion">Content Suggestion</option>
                    <option value="Speaking Request">Speaking/Interview Request</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                    placeholder="Share your thoughts, questions, or ideas..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-400">{formData.message.length}/500 characters</span>
                    {formData.message.length > 450 && (
                      <span className="text-sm text-yellow-400">
                        {500 - formData.message.length} characters remaining
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact Info */}
              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <i className="ri-youtube-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">YouTube Channel</h4>
                      <a
                        href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        @mindenvisia
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <i className="ri-instagram-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Instagram</h4>
                      <a
                        href="https://www.instagram.com/mindenvisia?igsh=MW1kYjUzdW8yb3Jndg%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        @mindenvisia
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email Support</h4>
                      <p className="text-purple-400">Use the contact form for inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-pink-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="ri-time-line text-yellow-400 mr-3"></i>
                  Response Time
                </h3>
                <p className="text-gray-300 mb-4">
                  I personally read and respond to every message. You can expect a reply within 24-48 hours.
                </p>
                <div className="flex items-center text-sm text-yellow-400">
                  <i className="ri-check-circle-line mr-2"></i>
                  Usually faster for collaboration inquiries
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Questions?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <i className="ri-question-line text-purple-400 mt-1"></i>
                    <div>
                      <p className="text-white font-medium">How often do you post?</p>
                      <p className="text-gray-400 text-sm">New content every week across all platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-book-line text-purple-400 mt-1"></i>
                    <div>
                      <p className="text-white font-medium">Can you recommend resources?</p>
                      <p className="text-gray-400 text-sm">Check out our curated <Link href="/resources" className="text-purple-400 hover:text-purple-300 cursor-pointer">Resources page</Link></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-group-line text-purple-400 mt-1"></i>
                    <div>
                      <p className="text-white font-medium">Want to connect with others?</p>
                      <p className="text-gray-400 text-sm">Follow us on social media for updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-12 px-6 mt-16">
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
    </div>
  );
}
