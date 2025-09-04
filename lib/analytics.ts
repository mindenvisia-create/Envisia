
export const GA_MEASUREMENT_ID = 'G-2ESYPSC7XC';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      // Add timestamp for better tracking
      timestamp: Date.now(),
      // Add page information
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Enhanced tracking functions
export const trackPageView = (url?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url || window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const trackUserEngagement = (engagementType: string, details?: Record<string, any>) => {
  trackEvent('user_engagement', {
    engagement_type: engagementType,
    ...details
  });
};

export const trackContentInteraction = (contentType: string, action: string, contentId?: string) => {
  trackEvent('content_interaction', {
    content_type: contentType,
    action: action,
    content_id: contentId,
  });
};

export const trackYouTubeInteraction = (action: string, videoId?: string, channelName?: string) => {
  trackEvent('youtube_interaction', {
    action: action,
    video_id: videoId,
    channel_name: channelName || 'MindEnvisia',
    platform: 'youtube'
  });
};

export const trackSocialShare = (platform: string, contentTitle?: string, contentUrl?: string) => {
  trackEvent('social_share', {
    platform: platform,
    content_title: contentTitle,
    content_url: contentUrl,
    share_method: 'button_click'
  });
};

export const trackSearchEvent = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

export const trackFormSubmission = (formName: string, success: boolean, errorMessage?: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
    error_message: errorMessage,
  });
};

export const trackNewsletterSignup = (source: string, success: boolean) => {
  trackEvent('newsletter_signup', {
    source: source,
    success: success,
    conversion_type: 'email_subscription'
  });
};

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    engagement_type: 'scroll'
  });
};

export const trackTimeOnPage = (timeSpent: number, pageType: string) => {
  trackEvent('time_on_page', {
    time_spent_seconds: timeSpent,
    page_type: pageType,
    engagement_level: timeSpent > 300 ? 'high' : timeSpent > 120 ? 'medium' : 'low'
  });
};

// YouTube conversion tracking
export const trackYouTubeConversion = (conversionType: 'subscribe' | 'video_view' | 'channel_visit', additionalData?: Record<string, any>) => {
  trackEvent('youtube_conversion', {
    conversion_type: conversionType,
    channel_name: 'MindEnvisia',
    ...additionalData
  });
};
