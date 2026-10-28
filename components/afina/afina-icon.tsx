import type { SVGProps } from "react";

const paths = {
  whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c.8 1.7 2.3 3.2 4 4l1-1 3 2c-1 3-5 .8-7.4-1.6S5 8 8 7Z" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" /></>,
  presentation: <><rect x="3" y="3" width="18" height="13" rx="2" /><path d="M12 16v5m-4 0 4-5 4 5M7 11l3-3 3 2 4-4" /></>,
  toolkit: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 12a23 23 0 0 0 18 0M10 12h4v4h-4z" /></>,
  team: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 5a5 5 0 0 1 3 4v2" /></>,
};

export function AfinaIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
