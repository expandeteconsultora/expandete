"use client";

import type { MetaEventName } from "../../components/analytics/meta-pixel-config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type PixelEvent = { name: MetaEventName; id: string };
const pendingPixelEvents: PixelEvent[] = [];

function sendPixelEvent(event: PixelEvent) {
  window.fbq?.("track", event.name, {}, { eventID: event.id });
}

export function flushMetaPixelEvents() {
  if (!window.fbq) return;
  pendingPixelEvents.splice(0).forEach(sendPixelEvent);
}

export function trackMetaEvent(name: MetaEventName) {
  const id = crypto.randomUUID();
  const event = { name, id };

  if (window.fbq) {
    sendPixelEvent(event);
  } else if (pendingPixelEvents.length < 100) {
    pendingPixelEvents.push(event);
  }

  // Send independently of Meta's browser script, including when it is blocked.
  // Neither form values nor the WhatsApp message are sent to this endpoint.
  void fetch("/api/meta/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    keepalive: true,
    body: JSON.stringify({
      event_name: name,
      event_id: id,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.origin + window.location.pathname,
      fbclid: new URLSearchParams(window.location.search).get("fbclid") ?? undefined,
    }),
  }).catch(() => {
    // Analytics must never prevent navigation or opening WhatsApp.
  });

  return id;
}
