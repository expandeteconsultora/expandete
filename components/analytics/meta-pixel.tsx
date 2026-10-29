"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { META_PIXEL_ID } from "./meta-pixel-config";
import { flushMetaPixelEvents, trackMetaEvent } from "@/lib/analytics/meta-client";

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPageView = useRef<string | null>(null);
  const query = searchParams.toString();
  const url = pathname + (query ? `?${query}` : "");

  useEffect(() => {
    if (lastPageView.current === url) return;

    trackMetaEvent("PageView");
    // Avoid duplicate events from rerenders and React Strict Mode.
    lastPageView.current = url;
  }, [url]);

  useEffect(() => {
    function handleWhatsAppClick(event: MouseEvent) {
      if (event.button !== 0 && event.button !== 1) return;
      const target = event.target;
      const link = target instanceof Element ? target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const destination = new URL(link.href);
      if (destination.protocol === "https:" && ["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(destination.hostname)) {
        trackMetaEvent("Contact");
      }
    }
    // Delegation covers every WhatsApp link, including course cards and dynamic links.
    document.addEventListener("click", handleWhatsAppClick);
    document.addEventListener("auxclick", handleWhatsAppClick);
    return () => {
      document.removeEventListener("click", handleWhatsAppClick);
      document.removeEventListener("auxclick", handleWhatsAppClick);
    };
  }, []);

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      onReady={() => queueMicrotask(flushMetaPixelEvents)}
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
