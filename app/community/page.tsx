'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CommunityRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Redirecting...</p>
      </div>
    </div>
  );
}