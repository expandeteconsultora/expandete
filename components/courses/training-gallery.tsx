"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { galleryAutoplayMs, trainingPhotos } from "@/data/marketing-courses";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronIcon, PlaybackIcon } from "./carousel-icons";
import styles from "./courses.module.css";

const count = trainingPhotos.length;
// Copies on both sides let the last/first photos slide into place seamlessly.
const slides = [...trainingPhotos, ...trainingPhotos, ...trainingPhotos];
const normalize = (position: number) => ((position % count) + count) % count;

export function TrainingGallery() {
  const [position, setPosition] = useState<number>(count);
  const [animated, setAnimated] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [paused, setPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const touchStart = useRef<number | null>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const desktop = useMediaQuery("(min-width: 1024px)");
  const tablet = useMediaQuery("(min-width: 640px)");
  const visibleCount = desktop ? 3 : tablet ? 2 : 1;
  const current = normalize(position);

  const move = useCallback((direction: number) => {
    setAnimated(!reducedMotion);
    setPosition((previous) => {
      if (reducedMotion) return count + normalize(previous + direction);
      if (previous >= count * 2 || previous < count) return count + normalize(previous) + direction;
      return previous + direction;
    });
  }, [reducedMotion]);

  useEffect(() => {
    const onVisibilityChange = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (hovered || keyboardFocus || paused || pageHidden || reducedMotion) return;
    const timer = window.setInterval(() => move(1), galleryAutoplayMs);
    return () => window.clearInterval(timer);
  }, [hovered, keyboardFocus, paused, pageHidden, reducedMotion, move, position]);

  function finishTransition() {
    if (position >= count * 2 || position < count) {
      setAnimated(false);
      setPosition(count + normalize(position));
    }
  }

  return (
    <section aria-labelledby="training-title" className={styles.trainingSection}>
      <div className={styles.container + " text-center"}>
        <h2 id="training-title" className="text-balance text-[clamp(28px,2.85vw,48px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
          Empresas y emprendedores
          <span className={styles.greenText + " block"}>
            que ya se <span className={styles.underlinedWord}>capacitaron</span>
          </span>
        </h2>
        <p className="mt-5 text-pretty text-[clamp(16px,1.25vw,22px)] leading-snug text-[#dfebfa]">
          Personas y negocios reales que hoy aplican lo aprendido para crecer.
        </p>
      </div>

      <div
        className={styles.gallery}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Fotos de las capacitaciones"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={(event) => {
          if (event.target.matches(":focus-visible")) setKeyboardFocus(true);
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setKeyboardFocus(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <button type="button" className={styles.galleryArrow + " left-2 sm:left-4"} aria-label="Ver foto anterior" onClick={() => move(-1)}>
          <ChevronIcon direction="left" className="size-6 sm:size-8" />
        </button>

        <div
          className={styles.galleryViewport}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = touchStart.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          <div
            className={styles.galleryTrack}
            style={{ "--slide-index": position, transitionDuration: animated && !reducedMotion ? "600ms" : "0ms" } as CSSProperties}
            onTransitionEnd={(event) => {
              if (event.target === event.currentTarget && event.propertyName === "transform") finishTransition();
            }}
          >
            {slides.map((photo, index) => (
              <figure
                key={index}
                className={styles.gallerySlide}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${normalize(index) + 1} de ${count}`}
                aria-hidden={index < position || index >= position + visibleCount}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 639px) 86vw, (max-width: 1023px) 43vw, 29vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <button type="button" className={styles.galleryArrow + " right-2 sm:right-4"} aria-label="Ver foto siguiente" onClick={() => move(1)}>
          <ChevronIcon className="size-6 sm:size-8" />
        </button>

        <div className="relative mt-2 flex min-h-10 items-center justify-center gap-0.5 sm:mt-3">
          {trainingPhotos.map((photo, index) => (
            <button
              key={photo.image}
              type="button"
              className="flex size-8 items-center justify-center rounded-full"
              aria-label={`Ver foto ${index + 1}`}
              aria-pressed={index === current}
              onClick={() => { setAnimated(!reducedMotion); setPosition(count + index); }}
            >
              <span className={index === current ? styles.activeDot : styles.galleryDot} />
            </button>
          ))}
          <button
            type="button"
            className="absolute right-[6%] flex size-8 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={paused ? "Reanudar carrusel de fotos" : "Pausar carrusel de fotos"}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            <PlaybackIcon paused={paused} className="size-3.5" />
          </button>
        </div>
        <p className="sr-only" aria-live={hovered || paused || keyboardFocus ? "polite" : "off"} aria-atomic="true">
          Foto {current + 1} de {count}.
        </p>
      </div>
    </section>
  );
}
