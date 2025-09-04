'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

export default function SocialShare({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'MindEnvisia - Where Curiosity Meets Clarity',
  description = 'Exploring mysteries of growth, technology, finance, and cosmos',
  hashtags = ['MindEnvisia', 'Growth', 'Mystery', 'Technology'],
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=${hashtags.join(',')}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
  };

  const handleShare = (platform: string, shareUrl: string) => {
    trackEvent('social_share', {
      platform,
      content_title: title,
      content_url: url
    });
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent('content_copy', {
        content_title: title,
        content_url: url
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
        trackEvent('native_share', {
          content_title: title,
          content_url: url
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-medium text-gray-600">Share:</span>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleShare('twitter', shareData.twitter)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          title="Share on Twitter"
        >
          <i className="ri-twitter-x-line text-sm"></i>
        </button>
        
        <button
          onClick={() => handleShare('facebook', shareData.facebook)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          title="Share on Facebook"
        >
          <i className="ri-facebook-line text-sm"></i>
        </button>
        
        <button
          onClick={() => handleShare('linkedin', shareData.linkedin)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          title="Share on LinkedIn"
        >
          <i className="ri-linkedin-line text-sm"></i>
        </button>
        
        <button
          onClick={() => handleShare('reddit', shareData.reddit)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          title="Share on Reddit"
        >
          <i className="ri-reddit-line text-sm"></i>
        </button>
        
        <button
          onClick={() => handleShare('telegram', shareData.telegram)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          title="Share on Telegram"
        >
          <i className="ri-telegram-line text-sm"></i>
        </button>
        
        <button
          onClick={() => handleShare('whatsapp', shareData.whatsapp)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          title="Share on WhatsApp"
        >
          <i className="ri-whatsapp-line text-sm"></i>
        </button>
        
        <button
          onClick={copyToClipboard}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          title={copied ? 'Copied!' : 'Copy Link'}
        >
          <i className={`text-sm ${copied ? 'ri-check-line' : 'ri-link text-sm'}`}></i>
        </button>
        
        {navigator.share && (
          <button
            onClick={nativeShare}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            title="Native Share"
          >
            <i className="ri-share-line text-sm"></i>
          </button>
        )}
      </div>
    </div>
  );
}