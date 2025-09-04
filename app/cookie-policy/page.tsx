
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookiePolicy() {
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
                        <div className="absolute inset-0 border border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
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
              <Link href="/shorts" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Shorts
              </Link>
              <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Start Here
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Contact
              </Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Cookie Policy</h1>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-gray-300 space-y-8">
            <div className="text-center text-sm text-gray-400 mb-8">Last updated: January 15, 2024</div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit websites. They help
                websites remember your preferences, improve your browsing experience, and provide analytics to
                website owners. MindEnvisia uses cookies to enhance your experience and understand how our
                content is being used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Essential Cookies</h3>
                  <p className="mb-2">These cookies are necessary for the website to function properly:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Session management and security</li>
                    <li>Form submission and error handling</li>
                    <li>Basic website functionality</li>
                    <li>Accessibility preferences</li>
                  </ul>
                  <p className="text-sm mt-2 text-green-200">Duration: Session or 1 year maximum</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Analytics Cookies</h3>
                  <p className="mb-2">These help us understand how visitors interact with our website:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Page views and popular content</li>
                    <li>User journey and behavior patterns</li>
                    <li>Traffic sources and referrers</li>
                    <li>Performance monitoring</li>
                  </ul>
                  <p className="text-sm mt-2 text-blue-200">Duration: Up to 2 years</p>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Preference Cookies</h3>
                  <p className="mb-2">These remember your choices and personalize your experience:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Theme and display preferences</li>
                    <li>Language settings</li>
                    <li>Content filter preferences</li>
                    <li>Accessibility settings</li>
                  </ul>
                  <p className="text-sm mt-2 text-purple-200">Duration: Up to 1 year</p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Third-Party Cookies</h3>
                  <p className="mb-2">These are set by external services we use:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>YouTube embedded videos</li>
                    <li>Google Analytics tracking</li>
                    <li>Social media sharing buttons</li>
                    <li>Content delivery networks</li>
                  </ul>
                  <p className="text-sm mt-2 text-yellow-200">Duration: Varies by service provider</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-purple-500/20 rounded-lg">
                  <thead className="bg-purple-900/30">
                    <tr>
                      <th className="p-3 text-left">Cookie Name</th>
                      <th className="p-3 text-left">Purpose</th>
                      <th className="p-3 text-left">Duration</th>
                      <th className="p-3 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/20">
                    <tr>
                      <td className="p-3 font-mono">_ga</td>
                      <td className="p-3">Google Analytics user identification</td>
                      <td className="p-3">2 years</td>
                      <td className="p-3">Analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">_ga_*</td>
                      <td className="p-3">Google Analytics session data</td>
                      <td className="p-3">2 years</td>
                      <td className="p-3">Analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">mindenvisia_prefs</td>
                      <td className="p-3">User preferences and settings</td>
                      <td className="p-3">1 year</td>
                      <td className="p-3">Preference</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">session_id</td>
                      <td className="p-3">Session management</td>
                      <td className="p-3">Session</td>
                      <td className="p-3">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">YouTube Cookies</h2>
              <p className="mb-4">
                When you watch embedded YouTube videos on our site, YouTube may set cookies. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>VISITOR_INFO1_LIVE:</strong> Estimates bandwidth and improves video playback
                </li>
                <li>
                  <strong>YSC:</strong> Registers a unique ID for session data
                </li>
                <li>
                  <strong>PREF:</strong> Stores user preferences for YouTube
                </li>
                <li>
                  <strong>GPS:</strong> Registers location data for mobile devices
                </li>
              </ul>
              <p className="mt-4">
                These cookies are governed by YouTube's privacy policy. We use YouTube's privacy-enhanced mode
                when possible to minimize tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookies</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Browser Settings</h3>
                  <p className="mb-4">You can control cookies through your browser settings:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data
                    </li>
                    <li>
                      <strong>Firefox:</strong> Preferences &gt; Privacy &amp; Security &gt; Cookies and Site Data
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data
                    </li>
                    <li>
                      <strong>Edge:</strong> Settings &gt; Cookies and site permissions
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Cookie Preferences</h3>
                  <p className="mb-4">You can choose which types of cookies to accept:</p>
                  <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Essential Cookies</span>
                        <span className="text-green-300 text-sm">Always Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Analytics Cookies</span>
                        <span className="text-gray-400 text-sm">Can be disabled in browser</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Preference Cookies</span>
                        <span className="text-gray-400 text-sm">Can be disabled in browser</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Impact of Disabling Cookies</h2>
              <p className="mb-4">Disabling cookies may affect your experience on our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some features may not work properly</li>
                <li>Your preferences won't be remembered</li>
                <li>We won't be able to improve the site based on usage data</li>
                <li>Some embedded content may not function correctly</li>
              </ul>
              <p className="mt-4">
                Essential cookies cannot be disabled without affecting website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or
                applicable laws. We will post any changes on this page and update the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="mb-4">If you have questions about our use of cookies, please contact us:</p>
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg p-4">
                <p>
                  <strong>Email:</strong> mindenvisia@gmail.com
                </p>
                <p>
                  <strong>Website:</strong> mindenvisia.com
                </p>
                <p>
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-white font-semibold">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            <p>&copy; 2024 MindEnvisia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
