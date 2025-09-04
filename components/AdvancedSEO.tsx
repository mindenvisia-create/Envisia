import { Metadata } from 'next';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'video';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  readingTime?: number;
  wordCount?: number;
}

export function generateAdvancedMetadata(seoData: SEOData): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = "https://readdy.ai/api/search-image?query=MindEnvisia%20cosmic%20eye%20logo%20with%20neural%20pathways%20and%20galaxies%20dark%20purple%20background%20with%20golden%20accents%20mystical%20and%20scientific%20atmosphere&width=1200&height=630&seq=seo-default&orientation=landscape",
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author = 'MindEnvisia',
    section,
    readingTime,
    wordCount
  } = seoData;

  const fullTitle = title.includes('MindEnvisia') ? title : `${title} | MindEnvisia`;
  const baseUrl = 'https://mindenvisia.vercel.app';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : [
      'personal development', 'mysteries', 'technology', 'finance', 
      'consciousness', 'neuroscience', 'AI', 'space', 'philosophy', 'mindset'
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: 'MindEnvisia',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: fullCanonical,
      siteName: 'MindEnvisia',
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@mindenvisia',
      site: '@mindenvisia',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      ...(readingTime && { 'reading-time': readingTime.toString() }),
      ...(wordCount && { 'word-count': wordCount.toString() }),
    },
  };
}

export function generateStructuredData(seoData: SEOData) {
  const {
    title,
    description,
    canonical,
    ogImage,
    ogType,
    publishedTime,
    modifiedTime,
    author = 'MindEnvisia',
    section,
    readingTime,
    wordCount
  } = seoData;

  const baseUrl = 'https://mindenvisia.vercel.app';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": ogType === 'article' ? 'Article' : 'WebPage',
    "headline": title,
    "description": description,
    "image": ogImage,
    "url": fullCanonical,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://mindenvisia.vercel.app/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindEnvisia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://readdy.ai/api/search-image?query=MindEnvisia%20logo%20mystical%20eye%20with%20golden%20yellow%20and%20pink%20gradient%20cosmic%20spiritual%20third%20eye%20consciousness%20awareness%20with%20radiating%20light%20beams%20sacred%20geometry%20enlightenment%20symbol%20simple%20clean%20design%20app%20icon%20style%20black%20background&width=180&height=180&seq=appletouchicon2025&orientation=squarish"
      },
      "url": "https://mindenvisia.vercel.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonical
    }
  };

  if (ogType === 'article') {
    return {
      ...baseSchema,
      "@type": "Article",
      ...(publishedTime && { "datePublished": publishedTime }),
      ...(modifiedTime && { "dateModified": modifiedTime }),
      ...(section && { "articleSection": section }),
      ...(readingTime && { 
        "timeRequired": `PT${readingTime}M`,
        "readingTime": `${readingTime} minutes`
      }),
      ...(wordCount && { "wordCount": wordCount }),
      "isPartOf": {
        "@type": "WebSite",
        "name": "MindEnvisia",
        "url": "https://mindenvisia.vercel.app"
      }
    };
  }

  return baseSchema;
}