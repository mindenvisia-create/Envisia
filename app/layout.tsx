
import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import OfflineIndicator from "@/components/OfflineIndicator";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: 'MindEnvisia - Where Curiosity Meets Clarity',
    template: '%s | MindEnvisia'
  },
  description: 'Exploring the mysteries of growth, technology, finance, and the cosmos. Join our community of curious minds on a journey of insight and transformation.',
  keywords: ['mindenvisia', 'personal growth', 'technology', 'finance', 'mysteries', 'consciousness', 'education', 'youtube', 'shorts'],
  authors: [{ name: 'MindEnvisia' }],
  creator: 'MindEnvisia',
  publisher: 'MindEnvisia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mindenvisia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindenvisia.com',
    siteName: 'MindEnvisia',
    title: 'MindEnvisia - Where Curiosity Meets Clarity',
    description: 'Exploring the mysteries of growth, technology, finance, and the cosmos. Join our community of curious minds.',
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=MindEnvisia%20Where%20Curiosity%20Meets%20Clarity%20social%20media%20banner%20mystical%20cosmic%20background%20with%20golden%20pink%20gradient%20text%20spiritual%20enlightenment%20third%20eye%20consciousness%20exploration%20mysteries%20growth%20technology%20finance%20cosmos%20starfield&width=1200&height=630&seq=ogimage2025mindenvisia&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'MindEnvisia - Where Curiosity Meets Clarity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindEnvisia - Where Curiosity Meets Clarity',
    description: 'Exploring the mysteries of growth, technology, finance, and the cosmos.',
    images: ['https://readdy.ai/api/search-image?query=MindEnvisia%20Where%20Curiosity%20Meets%20Clarity%20social%20media%20banner%20mystical%20cosmic%20background%20with%20golden%20pink%20gradient%20text%20spiritual%20enlightenment%20third%20eye%20consciousness%20exploration%20mysteries%20growth%20technology%20finance%20cosmos%20starfield&width=1200&height=630&seq=ogimage2025mindenvisia&orientation=landscape'],
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
  verification: {
    google: 'your-google-verification-code-here',
  },
  icons: {
    icon: [
      { url: 'https://readdy.ai/api/search-image?query=MindEnvisia%20tiny%20mystical%20eye%20favicon%20micro%20icon%20cosmic%20spiritual%20third%20eye%20golden%20pink%20gradient%20simple%20minimalist%20enlightenment%20symbol%20black%20background%20small%20browser%20icon&width=16&height=16&seq=favicon16mindenvisia2025&orientation=squarish', sizes: '16x16' },
      { url: 'https://readdy.ai/api/search-image?query=MindEnvisia%20mystical%20eye%20favicon%20small%20icon%20cosmic%20spiritual%20third%20eye%20golden%20yellow%20pink%20gradient%20enlightenment%20consciousness%20simple%20clean%20design%20black%20background%20browser%20favicon&width=32&height=32&seq=favicon32mindenvisia2025&orientation=squarish', sizes: '32x32' }
    ],
    apple: [
      { url: 'https://readdy.ai/api/search-image?query=MindEnvisia%20logo%20mystical%20eye%20with%20golden%20yellow%20and%20pink%20gradient%20cosmic%20spiritual%20third%20eye%20consciousness%20awareness%20with%20radiating%20light%20beams%20sacred%20geometry%20enlightenment%20symbol%20simple%20clean%20design%20app%20icon%20style%20black%20background&width=180&height=180&seq=appletouchicon2025&orientation=squarish', sizes: '180x180' }
    ]
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://readdy.ai/api/search-image?query=MindEnvisia%20mystical%20eye%20favicon%20small%20icon%20cosmic%20spiritual%20third%20eye%20golden%20yellow%20pink%20gradient%20enlightenment%20consciousness%20simple%20clean%20design%20black%20background%20browser%20favicon&width=32&height=32&seq=favicon32mindenvisia2025&orientation=squarish" sizes="32x32" />
        <link rel="icon" href="https://readdy.ai/api/search-image?query=MindEnvisia%20tiny%20mystical%20eye%20favicon%20micro%20icon%20cosmic%20spiritual%20third%20eye%20golden%20pink%20gradient%20simple%20minimalist%20enlightenment%20symbol%20black%20background%20small%20browser%20icon&width=16&height=16&seq=favicon16mindenvisia2025&orientation=squarish" sizes="16x16" />
        <link rel="apple-touch-icon" href="https://readdy.ai/api/search-image?query=MindEnvisia%20logo%20mystical%20eye%20with%20golden%20yellow%20and%20pink%20gradient%20cosmic%20spiritual%20third%20eye%20consciousness%20awareness%20with%20radiating%20light%20beams%20sacred%20geometry%20enlightenment%20symbol%20simple%20clean%20design%20app%20icon%20style%20black%20background&width=180&height=180&seq=appletouchicon2025&orientation=squarish" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://readdy.ai" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MindEnvisia",
              "description": "Exploring the mysteries of growth, technology, finance, and the cosmos. Join our community of curious minds on a journey of insight and transformation.",
              "url": "https://mindenvisia.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mindenvisia.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "author": {
                "@type": "Person",
                "name": "MindEnvisia"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MindEnvisia",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://readdy.ai/api/search-image?query=MindEnvisia%20logo%20mystical%20eye%20with%20golden%20yellow%20and%20pink%20gradient%20cosmic%20spiritual%20third%20eye%20consciousness%20awareness%20with%20radiating%20light%20beams%20sacred%20geometry%20enlightenment%20symbol%20simple%20clean%20design%20app%20icon%20style%20black%20background&width=180&height=180&seq=appletouchicon2025&orientation=squarish"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://mindenvisia.com"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageTransition>{children}</PageTransition>
        <PerformanceMonitor />
        <OfflineIndicator />
        <CookieConsent />
      </body>
    </html>
  );
}
