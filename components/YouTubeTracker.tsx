'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

interface YouTubeTrackerProps {
  videoId?: string;
  channelName?: string;
  videoTitle?: string;
}

export default function YouTubeTracker({ 
  videoId, 
  channelName = 'MindEnvisia',
  videoTitle = 'MindEnvisia Content'
}: YouTubeTrackerProps) {
  
  useEffect(() => {
    const handleYouTubeClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const youtubeLink = target.closest('a[href*="youtube.com"], a[href*="youtu.be"]') as HTMLAnchorElement;
      
      if (youtubeLink) {
        const href = youtubeLink.href;
        let trackingData: any = {
          link_url: href,
          link_domain: 'youtube.com',
          outbound: true
        };

        if (href.includes('/channel/') || href.includes('/c/') || href.includes('/@')) {
          trackEvent('youtube_channel_click', {
            ...trackingData,
            channel_name: channelName,
            action: 'visit_channel'
          });
        } else if (href.includes('/subscribe')) {
          trackEvent('youtube_subscribe_click', {
            ...trackingData,
            channel_name: channelName,
            action: 'subscribe'
          });
        } else if (href.includes('watch?v=') || href.includes('youtu.be/')) {
          const videoIdMatch = href.match(/(?:watch\?v=|youtu\.be\/)([^&\n?#]+)/);
          const extractedVideoId = videoIdMatch ? videoIdMatch[1] : videoId;
          
          trackEvent('youtube_video_click', {
            ...trackingData,
            video_id: extractedVideoId,
            video_title: videoTitle,
            channel_name: channelName,
            action: 'watch_video'
          });
        } else {
          trackEvent('youtube_link_click', {
            ...trackingData,
            channel_name: channelName,
            action: 'external_link'
          });
        }
      }
    };

    document.addEventListener('click', handleYouTubeClick);
    
    return () => {
      document.removeEventListener('click', handleYouTubeClick);
    };
  }, [videoId, channelName, videoTitle]);

  const trackSubscription = () => {
    trackEvent('youtube_subscribe_intent', {
      channel_name: channelName,
      source: 'cta_button',
      action: 'subscribe_click'
    });
  };

  const trackChannelVisit = () => {
    trackEvent('youtube_channel_visit', {
      channel_name: channelName,
      source: 'navigation_link',
      action: 'visit_channel'
    });
  };

  return (
    <div className="hidden">
      <button onClick={trackSubscription} id="youtube-subscribe-tracker" />
      <button onClick={trackChannelVisit} id="youtube-channel-tracker" />
    </div>
  );
}