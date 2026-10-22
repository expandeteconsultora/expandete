import type { SVGProps } from "react";

const paths = {
  idea: <><path d="M9 18h6m-5 3h4M8.5 13.5a6 6 0 1 1 7 0c-1 .7-1.5 1.5-1.5 2.5h-4c0-1-.5-1.8-1.5-2.5Z" /><path d="m10 8 2 2 2-2m-2 2v6" /></>,
  document: <><path d="M14 3H6v18h12V7l-4-4Z" /><path d="M14 3v5h4M9 12h6m-6 3h6m-6 3h4" /></>,
  rocket: <><path d="M14 5c2-2 4-2 7-2 0 3 0 5-2 7l-7 7-5-5 7-7Z" /><path d="m9 10-5 1-2 4h5m7 0-1 5-4 2v-5m-4 1-2 3 3-1" /><circle cx="16" cy="8" r="1.5" /></>,
  time: <><path d="M6 3h12M6 21h12M7 3c0 5 1 6 5 9-4 3-5 4-5 9m10-18c0 5-1 6-5 9 4 3 5 4 5 9M8 6h8M8 18h8" /></>,
  chart: <><path d="M4 20V12h3v8m4 0V4h3v16m4 0V8h3v12" /></>,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4m3-16a3 3 0 0 1 0 6m0 3a5 5 0 0 1 4 5v2" /></>,
  plant: <><path d="M12 21v-9C12 5 18 4 22 4c0 7-4 10-10 10M12 17C5 17 2 13 2 7c6 0 10 3 10 8m0-1 6-6" /></>,
  mountain: <><path d="m2 20 8-13 8 13H2Zm12-6 4-6 5 12h-5M7 12l3 2 3-2" /><circle cx="17" cy="4" r="2" /></>,
  food: <><path d="M5 3v7m3-7v7m3-7v7m-6 0h6m-3 0v11M20 3c-4 3-5 7-5 11h5m0-11v18" /></>,
  fish: <><path d="M3 12C7 5 15 5 19 12c-4 7-12 7-16 0Zm16 0 4-5v10l-4-5ZM9 7l3-4 3 4M9 17l3 4 3-4" /><path d="M7 11h.01" /></>,
  whatsapp: <path d="M20.4 3.6a11.7 11.7 0 0 0-18.5 14L.3 23.7l6.3-1.6a11.7 11.7 0 0 0 5.6 1.4h.1A11.7 11.7 0 0 0 20.4 3.6Zm-8.2 18a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 1 1 8.3 4.6Zm5.3-7.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-2.3-1.4A8.5 8.5 0 0 1 9.5 11c-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5L9.5 7c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.6 1.2 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z" />,
};

export type ProjectIconName = keyof typeof paths;

export function ProjectIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: ProjectIconName }) {
  const isWhatsApp = name === "whatsapp";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={isWhatsApp ? "currentColor" : "none"} stroke={isWhatsApp ? "none" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
