'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('mindenvisia-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
    setIsLoading(false);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mindenvisia-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('mindenvisia-cookie-consent', 'essential-only');
    setShowBanner(false);
  };

  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2 flex items-center">
              <i className="ri-shield-check-line text-yellow-400 mr-2"></i>
              We value your privacy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
              Essential cookies are required for basic functionality, while optional cookies help us improve our service.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
              <Link href="/cookie-policy" className="hover:text-yellow-300 transition-colors underline">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-yellow-300 transition-colors underline">
                Privacy Policy
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={handleAcceptEssential}
              className="px-4 py-2 text-sm text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm text-black bg-gradient-to-r from-yellow-400 to-pink-500 hover:scale-105 rounded-lg font-semibold transition-transform whitespace-nowrap"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}