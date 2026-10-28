"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { META_PIXEL_ID } from "./meta-pixel-config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [ready, setReady] = useState(false);
  const lastPageView = useRef<string | null>(null);
  const query = searchParams.toString();
  const url = pathname + (query ? `?${query}` : "");

  useEffect(() => {
    if (!ready || !window.fbq || lastPageView.current === url) return;

    window.fbq("track", "PageView");
    // Avoid duplicate events from rerenders and React Strict Mode.
    lastPageView.current = url;
  }, [ready, url]);

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    >
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
      `}
    </Script>
  );
}
