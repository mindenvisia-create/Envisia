
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackEvent, trackScrollDepth, trackTimeOnPage } from '@/lib/analytics';
import SocialShare from '@/components/SocialShare';
import RelatedContent from '@/components/RelatedContent';

interface Citation {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  type: 'journal' | 'book' | 'conference' | 'report' | 'website';
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  type: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  featured: boolean;
  image: string;
  abstract?: string;
  keywords?: string[];
  content: {
    intro: string;
    sections: Array<{
      heading: string;
      content: string;
      citations?: number[];
    }>;
    conclusion: string;
  };
  citations: Citation[];
  methodology?: string;
}

interface BlogArticleClientProps {
  post: BlogPost;
}

export default function BlogArticleClient({ post }: BlogArticleClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [hasTrackedScroll, setHasTrackedScroll] = useState({
    '25': false,
    '50': false,
    '75': false,
    '100': false
  });
  const [showCitations, setShowCitations] = useState(false);

  const relatedArticles = [
    {
      id: post.id === 1 ? 2 : 1,
      title: post.id === 1 ? "The Voynich Manuscript: Medieval Mystery or Elaborate Hoax?" : "The Hidden Architecture of Habit Formation: Why Your Brain Craves Routine",
      category: post.id === 1 ? "Mystery" : "Growth",
      readTime: post.id === 1 ? "18 min read" : "12 min read"
    },
    {
      id: post.id === 3 ? 6 : 3,
      title: post.id === 3 ? "The Great Filter Theory: Are We Alone Because Intelligence is Rare?" : "What Happens When AI Dreams? Exploring Machine Consciousness",
      category: post.id === 3 ? "Mystery" : "Tech",
      readTime: post.id === 3 ? "20 min read" : "15 min read"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const startTime = Date.now();
    
    // Track time on page
    const timeInterval = setInterval(() => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000);
      setTimeOnPage(currentTime);
    }, 1000);

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      Object.keys(hasTrackedScroll).forEach(threshold => {
        const thresholdNum = parseInt(threshold);
        if (scrollPercent >= thresholdNum && !hasTrackedScroll[threshold as keyof typeof hasTrackedScroll]) {
          trackScrollDepth(thresholdNum);
          setHasTrackedScroll(prev => ({ ...prev, [threshold]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Track initial page view
    trackEvent('blog_article_view', {
      article_id: post.id,
      article_title: post.title,
      article_category: post.category
    });

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
      
      // Track final time on page
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      trackTimeOnPage(finalTime, 'blog_article');
    };
  }, [post.id, post.title, post.category]);

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

      {/* Back to Blog */}
      <div className="relative z-10 py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className={`relative z-10 py-8 px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                post.category === 'Growth' ? 'bg-green-500/20 text-green-300' :
                post.category === 'Mystery' ? 'bg-purple-500/20 text-purple-300' :
                post.category === 'Tech' ? 'bg-blue-500/20 text-blue-300' :
                'bg-yellow-500/20 text-yellow-300'
              }`}>
                {post.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-sm">{post.type}</span>
              {post.featured && (
                <>
                  <span className="text-gray-500">•</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{post.author}</div>
                  <div className="text-sm">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.citations.length} References</span>
            </div>

            {/* Keywords */}
            {post.keywords && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">Keywords:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-black/40 border border-purple-500/20 rounded-full text-xs text-gray-300">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover object-top rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Abstract Section */}
      {post.abstract && (
        <div className="relative z-10 py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="ri-file-text-line text-purple-400 mr-3"></i>
                Abstract
              </h2>
              <p className="text-gray-300 leading-relaxed font-light italic">
                {post.abstract}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <div className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              {post.content.intro}
            </div>

            {/* Content Sections */}
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </span>
                  {section.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed text-lg mb-4">
                  {section.content.split('[').map((part, partIndex) => {
                    if (partIndex === 0) return part;
                    const citationMatch = part.match(/^(\d+)\]/);
                    if (citationMatch) {
                      const citationId = parseInt(citationMatch[1]);
                      const citation = post.citations.find(c => c.id === citationId);
                      const remainingText = part.replace(/^\d+\]/, '');
                      return (
                        <span key={partIndex}>
                          <sup className="text-purple-400 hover:text-purple-300 cursor-pointer font-semibold">
                            [{citationId}]
                          </sup>
                          {remainingText}
                        </span>
                      );
                    }
                    return part;
                  })}
                </div>
                
                {/* Inline Citations */}
                {section.citations && section.citations.length > 0 && (
                  <div className="mt-4 p-4 bg-black/20 border-l-4 border-purple-500 rounded-r-lg">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Section References:</h4>
                    <div className="text-xs text-gray-400 space-y-1">
                      {section.citations.map(citationId => {
                        const citation = post.citations.find(c => c.id === citationId);
                        return citation ? (
                          <div key={citationId} className="flex">
                            <span className="text-purple-400 mr-2">[{citation.id}]</span>
                            <span>{citation.authors} ({citation.year}). {citation.title}. <em>{citation.journal}</em>.</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Methodology Section */}
            {post.methodology && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <i className="ri-flask-line text-blue-400 mr-3"></i>
                  Methodology & Research Approach
                </h2>
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {post.methodology}
                  </p>
                </div>
              </div>
            )}

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
                <i className="ri-lightbulb-line text-yellow-400 mr-3"></i>
                Conclusions & Implications
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {post.content.conclusion}
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Citations Section */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <i className="ri-book-line text-purple-400 mr-3"></i>
                References & Citations
              </h2>
              <button
                onClick={() => setShowCitations(!showCitations)}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                {showCitations ? 'Hide' : 'Show'} ({post.citations.length})
              </button>
            </div>
            
            {showCitations && (
              <div className="space-y-4">
                {post.citations.map((citation) => (
                  <div key={citation.id} className="p-4 bg-black/20 rounded-lg border border-purple-500/10">
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-400 font-semibold text-sm mt-1">[{citation.id}]</span>
                      <div className="flex-1">
                        <div className="text-gray-300 text-sm leading-relaxed mb-2">
                          <span className="font-semibold">{citation.authors}</span> ({citation.year}). 
                          <em className="mx-1">{citation.title}</em>. 
                          <span className="text-purple-300">{citation.journal}</span>.
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded-full ${
                            citation.type === 'journal' ? 'bg-blue-500/20 text-blue-300' :
                            citation.type === 'book' ? 'bg-green-500/20 text-green-300' :
                            citation.type === 'conference' ? 'bg-yellow-500/20 text-yellow-300' :
                            citation.type === 'report' ? 'bg-purple-500/20 text-purple-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {citation.type}
                          </span>
                          {citation.doi && (
                            <a 
                              href={`https://doi.org/${citation.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300 cursor-pointer"
                            >
                              DOI: {citation.doi}
                            </a>
                          )}
                          {citation.url && (
                            <a 
                              href={citation.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300 cursor-pointer"
                            >
                              <i className="ri-external-link-line mr-1"></i>
                              Access
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Citation Format Note */}
            <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <p className="text-xs text-gray-400">
                <i className="ri-information-line mr-2"></i>
                Citations follow APA format. Click on reference numbers throughout the article to see full citations. 
                DOI links provide direct access to source materials where available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">About MindEnvisia</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Exploring the intersection of science, consciousness, and human potential. I create content that bridges complex research with practical wisdom, helping curious minds navigate the mysteries of our universe and unlock their cognitive potential.
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <i className="ri-youtube-line mr-2"></i>
                    YouTube Channel
                  </a>
                  <a
                    href="https://www.instagram.com/mindenvisia?igsh=MW1kYjUzdW8yb3Jndg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <i className="ri-instagram-line mr-2"></i>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <i className="ri-links-line mr-3"></i>
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Growth' ? 'bg-green-500/20 text-green-300' :
                      article.category === 'Mystery' ? 'bg-purple-500/20 text-purple-300' :
                      article.category === 'Tech' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 leading-tight">
                    {article.title}
                  </h4>
                  <div className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center cursor-pointer whitespace-nowrap">
                    Read Article
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Blog Footer */}
      <div className="relative z-10 py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center text-lg text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
