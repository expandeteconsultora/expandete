import type { SVGProps } from "react";

const paths = {
  megaphone: <><path d="m3 10 13-5v14L3 14v-4Zm13-1 4-2v10l-4-2M6 15l1 6h4l-2-5M3 11H1v2h2" /></>,
  video: <><rect x="3" y="6" width="12" height="12" rx="3" /><path d="m15 10 6-3v10l-6-3" /></>,
  monitor: <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8m-4-4v4M3 13h18" /></>,
  whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c.8 1.7 2.3 3.2 4 4l1-1 3 2c-1 3-5 .8-7.4-1.6S5 8 8 7Z" /></>,
  trend: <><path d="m3 17 6-6 4 4 8-10m-6 0h6v6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

export function BusinessIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
