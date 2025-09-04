'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TermsOfService() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 py-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-gray-300 space-y-8">
            <div className="text-center text-sm text-gray-400 mb-8">
              Last updated: January 15, 2024
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using MindEnvisia's website and services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="mb-4">
                MindEnvisia provides educational content, insights, and commentary on topics including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal growth and development</li>
                <li>Technology and artificial intelligence</li>
                <li>Financial education and psychology</li>
                <li>Scientific mysteries and theories</li>
                <li>Philosophy and consciousness exploration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">You agree to:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Provide accurate information when contacting us</li>
                    <li>Not attempt to hack, disrupt, or harm our website</li>
                    <li>Not spam or send unsolicited communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">You agree not to:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Copy, redistribute, or resell our content without permission</li>
                    <li>Use our content for commercial purposes without authorization</li>
                    <li>Attempt to reverse engineer any part of our website</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Harass other users or our team members</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content on MindEnvisia, including but not limited to text, videos, images, logos, and design elements, 
                is protected by copyright and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may view and share our content for personal, non-commercial use</li>
                <li>Attribution is required when sharing our content</li>
                <li>Commercial use requires explicit written permission</li>
                <li>Our logo and branding elements may not be used without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Content and Educational Purpose</h2>
              <p className="mb-4">
                Our content is provided for educational and informational purposes only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Financial Content:</strong> Not professional financial advice. Consult qualified advisors for investment decisions.</li>
                <li><strong>Health Content:</strong> Not medical advice. Consult healthcare professionals for health concerns.</li>
                <li><strong>Technology Content:</strong> Educational commentary, not professional technology guidance.</li>
                <li><strong>Personal Development:</strong> General insights, not personalized coaching or therapy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User-Generated Content</h2>
              <p className="mb-4">
                When you submit comments, feedback, or other content to us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of your content</li>
                <li>You grant us a license to use, display, and respond to your content</li>
                <li>You represent that your content doesn't violate any rights</li>
                <li>We reserve the right to remove inappropriate content</li>
                <li>We are not responsible for user-generated content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">
                Our website may contain links to or integrate with third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>YouTube for video content</li>
                <li>Social media platforms</li>
                <li>Analytics and tracking services</li>
                <li>Email service providers</li>
              </ul>
              <p className="mt-4">
                We are not responsible for the content, policies, or practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers and Limitations</h2>
              <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-4">
                <p className="font-semibold text-red-300 mb-2">Important Disclaimers:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Our content is provided "as is" without warranties of any kind</li>
                  <li>We do not guarantee the accuracy or completeness of information</li>
                  <li>We are not liable for any decisions made based on our content</li>
                  <li>Your use of our services is at your own risk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your information. By using our services, you also agree to our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services at any time, without prior notice, 
                for conduct that we believe violates these terms or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>
                We may modify these terms at any time. Material changes will be posted on this page with an updated 
                "Last updated" date. Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with applicable laws. Any disputes will be 
                resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg p-4">
                <p><strong>Email:</strong> mindenvisia@gmail.com</p>
                <p><strong>Website:</strong> mindenvisia.com</p>
                <p><strong>Response Time:</strong> We aim to respond within 48-72 hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white font-semibold">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            <p>&copy; 2024 MindEnvisia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}