'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const pageview = (url: string) => {
  if (typeof window.gtag !== 'function' || !GA_TRACKING_ID) {
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);

  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
