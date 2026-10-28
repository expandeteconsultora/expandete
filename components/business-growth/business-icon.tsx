import type { SVGProps } from "react";

const paths = {
  megaphone: <><path d="m3 10 13-5v14L3 14v-4Zm13-1 4-2v10l-4-2M6 15l1 6h4l-2-5M3 11H1v2h2" /></>,
  video: <><rect x="3" y="6" width="12" height="12" rx="3" /><path d="m15 10 6-3v10l-6-3" /></>,
  monitor: <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8m-4-4v4M3 13h18" /></>,
  whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c.8 1.7 2.3 3.2 4 4l1-1 3 2c-1 3-5 .8-7.4-1.6S5 8 8 7Z" /></>,
  trend: <><path d="m3 17 6-6 4 4 8-10m-6 0h6v6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chart: <path d="M4 20v-6h3v6m4 0V9h3v11m4 0V3h3v17" />,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4m2-17a3 3 0 0 1 0 6m1 4a5 5 0 0 1 4 5v2" /></>,
  settings: <><path d="m10 2 4 0 .7 2.5 2.2 1.3 2.5-.6 2 3.5-1.8 1.9v2.6l1.8 1.9-2 3.5-2.5-.6-2.2 1.3L14 22h-4l-.7-2.5-2.2-1.3-2.5.6-2-3.5 1.8-1.9v-2.6L2.6 8.9l2-3.5 2.5.6 2.2-1.3L10 2Z" /><circle cx="12" cy="12" r="3" /></>,
  cursor: <path d="m5 3 15 11-7 1 4 6-3 2-4-7-5 5V3Z" />,
  document: <><path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h8" /></>,
  bulb: <><path d="M9 18h6m-5 3h4M8.5 14a6 6 0 1 1 7 0c-1 .7-1.5 1.5-1.5 2.5h-4c0-1-.5-1.8-1.5-2.5ZM3 5 1 3m20 2 2-2M2 12H0m22 0h2" /></>,
  target: <><circle cx="11" cy="13" r="9" /><circle cx="11" cy="13" r="5" /><path d="m11 13 9-10m-1 5 1-5-5 1" /></>,
};

export function BusinessIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
