'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ LoadingScreen ~ loading:', loading);
  const [fadingOut, setFadingOut] = useState(false);
  console.log('🚀 ~ LoadingScreen ~ fadingOut:', fadingOut);

  useEffect(() => {
    const handleLoad = () => {
      // Start fading out
      setFadingOut(true);
      // Remove from DOM after transition
      setTimeout(() => {
        setLoading(false);
      }, 500); // This should match the transition duration
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-accent-foreground transition-opacity duration-500',
        fadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="relative animate-pulse">
        {/* <Image
          src="/logo-l.svg"
          alt="loading logo"
          width={150}
          height={150}
          className="dark:hidden"
          priority
        /> */}
        <Image
          src="/logo.png"
          alt="loading logo"
          width={150}
          height={150}
          priority
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
