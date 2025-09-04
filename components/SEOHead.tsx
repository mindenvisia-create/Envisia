import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'video';
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://readdy.ai/api/search-image?query=MindEnvisia%20cosmic%20eye%20logo%20with%20neural%20pathways%20and%20galaxies%20dark%20purple%20background%20with%20golden%20accents%20mystical%20and%20scientific%20atmosphere&width=1200&height=630&seq=og-default&orientation=landscape",
  ogType = 'website',
  keywords = [],
  publishedTime,
  modifiedTime,
  author = 'MindEnvisia',
  section,
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('MindEnvisia') ? title : `${title} | MindEnvisia`;
  const keywordString = keywords.length > 0 ? keywords.join(', ') : 'personal development, mysteries, technology, finance, consciousness, neuroscience, AI, space, philosophy, mindset';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordString} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MindEnvisia" />
      <meta property="og:locale" content="en_US" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Article specific tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
        </>
      )}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@mindenvisia" />
      <meta name="twitter:site" content="@mindenvisia" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ogType === 'article' ? 'Article' : 'WebPage',
            "headline": title,
            "description": description,
            "image": ogImage,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "MindEnvisia",
              "logo": {
                "@type": "ImageObject",
                "url": "https://readdy.ai/api/search-image?query=MindEnvisia%20cosmic%20eye%20logo%20with%20neural%20pathways%20mystical%20scientific%20atmosphere&width=400&height=400&seq=logo-schema&orientation=squarish"
              }
            },
            ...(publishedTime && { "datePublished": publishedTime }),
            ...(modifiedTime && { "dateModified": modifiedTime }),
            ...(canonical && { "url": canonical })
          })
        }}
      />
    </Head>
  );
}