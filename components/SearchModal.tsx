
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'page' | 'blog';
  url: string;
  excerpt: string;
  category?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample search data
  const searchData: SearchResult[] = [
    // Pages
    { id: 'home', title: 'Home', type: 'page', url: '/', excerpt: 'Welcome to MindEnvisia - Where curiosity meets clarity' },
    { id: 'about', title: 'About', type: 'page', url: '/about', excerpt: 'Learn about MindEnvisia and our mission to explore mysteries' },
    { id: 'blog', title: 'Blog', type: 'page', url: '/blog', excerpt: 'Deep dives and reflections on growth, mysteries, tech, and finance' },
    { id: 'shorts', title: 'Shorts Gallery', type: 'page', url: '/shorts', excerpt: 'Curated collection of thought-provoking short content' },
    { id: 'resources', title: 'Resources', type: 'page', url: '/resources', excerpt: 'Curated tools and resources for curious minds' },
    { id: 'contact', title: 'Contact', type: 'page', url: '/contact', excerpt: 'Get in touch with MindEnvisia' },
    { id: 'support', title: 'Support', type: 'page', url: '/support', excerpt: 'Support MindEnvisia and help us create more content' },
    
    // Blog posts
    { id: 'blog-1', title: 'The Hidden Architecture of Habit Formation', type: 'blog', url: '/blog/1', excerpt: 'What neuroscience reveals about the 21-day myth and the real timeline of lasting change', category: 'Growth' },
    { id: 'blog-2', title: 'The Voynich Manuscript: Medieval Mystery or Elaborate Hoax?', type: 'blog', url: '/blog/2', excerpt: 'After centuries of cryptanalysis and AI attempts, this 15th-century codex continues to baffle scholars', category: 'Mystery' },
    { id: 'blog-3', title: 'What Happens When AI Dreams?', type: 'blog', url: '/blog/3', excerpt: 'Exploring machine consciousness and the surprising patterns that emerge when algorithms sleep', category: 'Tech' },
    { id: 'blog-4', title: 'The Psychology of Money', type: 'blog', url: '/blog/4', excerpt: 'Why smart people make dumb financial decisions and how to overcome cognitive biases', category: 'Finance' },
    { id: 'blog-5', title: 'My Creative Process', type: 'blog', url: '/blog/5', excerpt: 'From cosmic curiosity to YouTube Shorts - how I transform abstract ideas into digestible content', category: 'Growth' },
    { id: 'blog-6', title: 'The Great Filter Theory', type: 'blog', url: '/blog/6', excerpt: 'Are we alone because intelligence is rare? Exploring the cosmic silence and humanity\'s future', category: 'Mystery' },
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    const searchTimer = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8);
      
      setResults(filteredResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="w-full max-w-2xl mx-4">
        <div className="bg-black/90 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
          {/* Search Input */}
          <div className="p-6 border-b border-purple-500/20">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
              <input
                type="text"
                placeholder="Search articles, pages, and topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isSearching ? (
              <div className="p-8 text-center">
                <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result) => (
                  <Link key={result.id} href={result.url} onClick={onClose}>
                    <div className="px-6 py-4 hover:bg-purple-500/10 transition-colors cursor-pointer border-l-4 border-transparent hover:border-purple-500">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white font-semibold">{result.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              result.type === 'blog' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
                            }`}>
                              {result.type === 'blog' ? 'Article' : 'Page'}
                            </span>
                            {result.category && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">
                                {result.category}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{result.excerpt}</p>
                        </div>
                        <i className="ri-arrow-right-line text-gray-500 ml-4 mt-1"></i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="p-8 text-center">
                <i className="ri-search-2-line text-4xl text-gray-600 mb-4"></i>
                <h3 className="text-white text-lg mb-2">No results found</h3>
                <p className="text-gray-400">Try searching for different keywords</p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <i className="ri-search-eye-line text-4xl text-purple-400 mb-4"></i>
                <h3 className="text-white text-lg mb-2">Search MindEnvisia</h3>
                <p className="text-gray-400">Find articles, pages, and explore topics that spark curiosity</p>
              </div>
            )}
          </div>

          {/* Quick Tips */}
          {!query.trim() && (
            <div className="px-6 py-4 bg-purple-500/5 border-t border-purple-500/20">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-500 text-sm">Try searching:</span>
                {['AI dreams', 'habit formation', 'Great Filter', 'money psychology', 'mysteries'].map((tip) => (
                  <button
                    key={tip}
                    onClick={() => setQuery(tip)}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full hover:bg-purple-500/30 transition-colors cursor-pointer"
                  >
                    {tip}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
