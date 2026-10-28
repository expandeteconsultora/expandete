import type { SVGProps } from "react";

const paths = {
  target: <><circle cx="11" cy="13" r="9" /><circle cx="11" cy="13" r="5" /><path d="m11 13 9-10m-1 5 1-5-5 1" /></>,
  settings: <><path d="m10 2 4 0 .7 2.5 2.2 1.3 2.5-.6 2 3.5-1.8 1.9v2.6l1.8 1.9-2 3.5-2.5-.6-2.2 1.3L14 22h-4l-.7-2.5-2.2-1.3-2.5.6-2-3.5 1.8-1.9v-2.6L2.6 8.9l2-3.5 2.5.6 2.2-1.3L10 2Z" /><circle cx="12" cy="12" r="3" /></>,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4m2-17a3 3 0 0 1 0 6m1 4a5 5 0 0 1 4 5v2" /></>,
  workflow: <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-5h14v5" /></>,
  chart: <><path d="M3 21h19" /><rect x="4" y="13" width="3" height="8" rx="1" /><rect x="11" y="8" width="3" height="13" rx="1" /><rect x="18" y="3" width="3" height="18" rx="1" /></>,
  whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c.8 1.7 2.3 3.2 4 4l1-1 3 2c-1 3-5 .8-7.4-1.6S5 8 8 7Z" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

export function SincronizaIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
