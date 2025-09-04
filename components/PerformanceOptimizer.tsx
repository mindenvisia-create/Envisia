'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        'https://readdy.ai/api/search-image?query=MindEnvisia%20logo%20mystical%20eye%20with%20golden%20yellow%20and%20pink%20gradient%20cosmic%20spiritual%20third%20eye%20consciousness%20awareness%20with%20radiating%20light%20beams%20sacred%20geometry%20enlightenment%20symbol%20simple%20clean%20design%20app%20icon%20style%20black%20background&width=180&height=180&seq=appletouchicon2025&orientation=squarish'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Implement lazy loading for non-critical content
    const observeImages = () => {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Track performance metrics
    const trackPerformanceMetrics = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            trackEvent('performance_metrics', {
              load_time: navigation.loadEventEnd - navigation.loadEventStart,
              dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              first_paint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
              first_contentful_paint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
              connection_type: (navigator as any).connection?.effectiveType || 'unknown'
            });
          }, 0);
        });
      }
    };

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    preloadCriticalResources();
    observeImages();
    trackPerformanceMetrics();
    registerServiceWorker();

    // Cleanup
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return null;
}