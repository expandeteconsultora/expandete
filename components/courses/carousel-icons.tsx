import type { SVGProps } from "react";

export function ChevronIcon({ direction = "right", ...props }: SVGProps<SVGSVGElement> & { direction?: "left" | "right" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d={direction === "left" ? "m14 5-7 7 7 7" : "m10 5 7 7-7 7"} />
    </svg>
  );
}

export function PlaybackIcon({ paused, ...props }: SVGProps<SVGSVGElement> & { paused: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {paused ? <path d="m7 4 14 8-14 8V4Z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
    </svg>
  );
}
