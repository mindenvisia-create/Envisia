'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface RelatedItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
}

interface RelatedContentProps {
  currentId?: string;
  category?: string;
  className?: string;
}

export default function RelatedContent({ currentId, category, className = '' }: RelatedContentProps) {
  const allContent: RelatedItem[] = [
    {
      id: '1',
      title: 'The Quantum Mind: Where Consciousness Meets Physics',
      excerpt: 'Exploring the mysterious connection between quantum mechanics and human consciousness...',
      category: 'Mysteries',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=quantum%20consciousness%20visualization%20with%20neural%20networks%20and%20quantum%20particles%20mystical%20cosmic%20background%20golden%20pink%20gradient%20enlightenment%20third%20eye%20spiritual%20awakening%20mind%20expansion&width=400&height=240&seq=related1quantum&orientation=landscape',
      href: '/blog/1'
    },
    {
      id: '2',
      title: 'Cryptocurrency Revolution: The Future of Digital Finance',
      excerpt: 'Understanding blockchain technology and its impact on traditional financial systems...',
      category: 'Finance',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=cryptocurrency%20blockchain%20digital%20finance%20visualization%20with%20golden%20coins%20floating%20holographic%20displays%20futuristic%20technology%20network%20connections%20cosmic%20purple%20background&width=400&height=240&seq=related2crypto&orientation=landscape',
      href: '/blog/2'
    },
    {
      id: '3',
      title: 'AI and the Evolution of Human Intelligence',
      excerpt: 'How artificial intelligence is reshaping our understanding of cognition and creativity...',
      category: 'Technology',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20human%20brain%20merge%20visualization%20neural%20pathways%20digital%20circuits%20cosmic%20background%20golden%20pink%20gradient%20futuristic%20technology%20consciousness%20evolution&width=400&height=240&seq=related3ai&orientation=landscape',
      href: '/blog/3'
    },
    {
      id: '4',
      title: 'The Psychology of Wealth: Mindset and Money',
      excerpt: 'Discovering the mental patterns that separate the financially successful from the struggling...',
      category: 'Finance',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=wealth%20psychology%20mindset%20visualization%20golden%20brain%20with%20money%20symbols%20flowing%20energy%20cosmic%20background%20spiritual%20abundance%20manifestation%20consciousness&width=400&height=240&seq=related4wealth&orientation=landscape',
      href: '/blog/4'
    },
    {
      id: '5',
      title: 'Ancient Wisdom Meets Modern Science',
      excerpt: 'How timeless spiritual practices are being validated by contemporary research...',
      category: 'Mysteries',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=ancient%20wisdom%20modern%20science%20fusion%20mystical%20symbols%20scientific%20formulas%20cosmic%20background%20golden%20pink%20gradient%20spiritual%20enlightenment%20knowledge%20consciousness&width=400&height=240&seq=related5wisdom&orientation=landscape',
      href: '/blog/5'
    },
    {
      id: '6',
      title: 'The Future of Space Exploration and Human Consciousness',
      excerpt: 'What space travel and cosmic discoveries reveal about the nature of reality...',
      category: 'Technology',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=space%20exploration%20consciousness%20astronaut%20floating%20in%20cosmic%20void%20with%20galaxies%20neural%20pathways%20starfield%20mystical%20third%20eye%20awakening%20cosmic%20awareness&width=400&height=240&seq=related6space&orientation=landscape',
      href: '/blog/6'
    }
  ];

  const getRelatedContent = (): RelatedItem[] => {
    let filtered = allContent.filter(item => item.id !== currentId);
    
    if (category) {
      const categoryItems = filtered.filter(item => item.category === category);
      const otherItems = filtered.filter(item => item.category !== category);
      
      return [...categoryItems.slice(0, 2), ...otherItems.slice(0, 1)];
    }
    
    return filtered.slice(0, 3);
  };

  const relatedItems = getRelatedContent();

  const handleContentClick = (item: RelatedItem) => {
    trackEvent('related_content_click', {
      content_id: item.id,
      content_title: item.title,
      content_category: item.category,
      source_content_id: currentId || 'unknown'
    });
  };

  return (
    <div className={`bg-white ${className}`}>
      <div className="border-t border-gray-200 pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Content</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleContentClick(item)}
                className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-800 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}