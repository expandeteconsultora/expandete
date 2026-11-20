"use client";

import { useRef, useState, type ReactNode } from "react";
import { ChevronIcon } from "./carousel-icons";
import styles from "./social-ads.module.css";

export function LearningCarousel({ children, count }: { children: ReactNode; count: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  function moveTo(index: number) {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!track || !first || !second) return;
    const target = Math.max(0, Math.min(index, count - 1));
    track.scrollTo({ left: target * (second.offsetLeft - first.offsetLeft), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <>
      <div id="pasos-de-aprendizaje" ref={trackRef} className={styles.learningGrid} role="region" aria-label="Pasos de aprendizaje. Desliza para ver los demás pasos" tabIndex={0} onScroll={() => {
        const track = trackRef.current;
        const first = track?.children[0] as HTMLElement | undefined;
        const second = track?.children[1] as HTMLElement | undefined;
        if (!track || !first || !second) return;
        const step = second.offsetLeft - first.offsetLeft;
        if (step > 0) setCurrent(Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / step))));
      }}>
        {children}
      </div>
      <div className={styles.learningControls}>
        <button type="button" className={styles.learningArrow} aria-label="Paso anterior" aria-controls="pasos-de-aprendizaje" disabled={current === 0} onClick={() => moveTo(current - 1)}><ChevronIcon direction="left" /></button>
        <div className={styles.learningDots}>
          {Array.from({ length: count }, (_, index) => <button key={index} type="button" className={styles.learningDot} aria-label={`Ver paso ${index + 1}`} aria-current={current === index ? "true" : undefined} aria-controls="pasos-de-aprendizaje" onClick={() => moveTo(index)}><span /></button>)}
        </div>
        <button type="button" className={styles.learningArrow} aria-label="Paso siguiente" aria-controls="pasos-de-aprendizaje" disabled={current === count - 1} onClick={() => moveTo(current + 1)}><ChevronIcon /></button>
        <span className="sr-only" aria-live="polite" aria-atomic="true">Paso {current + 1} de {count}</span>
      </div>
    </>
  );
}
