"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { socialAdsVideos } from "@/data/social-ads-courses";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronIcon } from "./carousel-icons";
import styles from "./social-ads.module.css";

type Video = { id: string; label: string };

type SocialAdsVideosProps = {
  videos?: readonly Video[];
  id?: string;
  ariaLabel?: string;
  caption?: string;
  actionLabel?: string;
};

export function SocialAdsVideos({ videos = socialAdsVideos, id = "videos-de-alumnos", ariaLabel = "Videos de experiencias de alumnos", caption = "En sus propias palabras", actionLabel = "Ver testimonio" }: SocialAdsVideosProps = {}) {
  const viewport = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState<Video | null>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const tablet = useMediaQuery("(min-width: 640px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const visible = desktop ? 4 : tablet ? 2 : 1;
  const lastPosition = Math.max(0, videos.length - visible);
  const current = Math.min(position, lastPosition);

  function moveTo(index: number) {
    const track = viewport.current;
    const firstSlide = track?.children[0] as HTMLElement | undefined;
    const nextSlide = track?.children[1] as HTMLElement | undefined;
    if (!track || !firstSlide || !nextSlide) return;
    const nextPosition = Math.max(0, Math.min(index, lastPosition));
    track.scrollTo({ left: nextPosition * (nextSlide.offsetLeft - firstSlide.offsetLeft), behavior: reducedMotion ? "instant" : "smooth" });
  }

  useEffect(() => {
    const playerDialog = dialog.current;
    if (!selected || !playerDialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    playerDialog.showModal();
    return () => {
      playerDialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selected]);

  return (
    <>
      <div role="region" aria-roledescription="carrusel" aria-label={ariaLabel} className={styles.carousel}>
        <div
          id={id}
          ref={viewport}
          className={styles.videoTrack}
          tabIndex={0}
          aria-label="Desliza o usa las flechas para ver los videos"
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            moveTo(event.key === "Home" ? 0 : event.key === "End" ? lastPosition : current + (event.key === "ArrowRight" ? 1 : -1));
          }}
          onScroll={() => {
            const track = viewport.current;
            const firstSlide = track?.children[0] as HTMLElement | undefined;
            const nextSlide = track?.children[1] as HTMLElement | undefined;
            if (track && firstSlide && nextSlide) setPosition(Math.round(track.scrollLeft / (nextSlide.offsetLeft - firstSlide.offsetLeft)));
          }}
        >
          {videos.map((video, index) => (
            <div key={video.id} role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${videos.length}`} className={styles.videoSlide}>
              <button type="button" className={styles.videoPoster} aria-label={`Reproducir ${video.label}`} aria-haspopup="dialog" onClick={() => setSelected(video)}>
                <Image src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" fill sizes="(max-width: 639px) 87vw, (max-width: 1023px) 43vw, 22vw" unoptimized />
                <span className={styles.youtubeBadge}><span aria-hidden="true">▶</span> YouTube</span>
                <span className={styles.videoPlay} aria-hidden="true">▶</span>
                <span className={styles.videoCaption}><span>{caption}</span><strong>{video.label}</strong><span>{actionLabel} <span aria-hidden="true">↗</span></span></span>
              </button>
            </div>
          ))}
        </div>
        <div className={styles.carouselControls}>
          <button type="button" className={styles.carouselArrow} aria-label="Ver video anterior" aria-controls={id} disabled={current === 0} onClick={() => moveTo(current - 1)}><ChevronIcon direction="left" /></button>
          <div className={styles.carouselDots}>{Array.from({ length: lastPosition + 1 }, (_, index) => <button key={index} type="button" className={styles.carouselDot} aria-label={`Ver video ${index + 1}`} aria-current={index === current ? "true" : undefined} aria-controls={id} onClick={() => moveTo(index)}><span /></button>)}</div>
          <button type="button" className={styles.carouselArrow} aria-label="Ver video siguiente" aria-controls={id} disabled={current === lastPosition} onClick={() => moveTo(current + 1)}><ChevronIcon /></button>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">Mostrando videos {current + 1} a {Math.min(current + visible, videos.length)} de {videos.length}.</p>
      </div>

      <dialog ref={dialog} className={styles.videoDialog} aria-labelledby={`${id}-title`} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelected(null);
      }}>
        <div className={styles.dialogHeader}><h2 id={`${id}-title`}>{selected?.label}</h2><button type="button" aria-label="Cerrar video" onClick={() => setSelected(null)}><CloseIcon /></button></div>
        {selected && <><div className={styles.videoPlayer}><iframe src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1&rel=0&playsinline=1`} title={selected.label} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><a className={styles.youtubeLink} href={`https://www.youtube.com/shorts/${selected.id}`} target="_blank" rel="noopener noreferrer">Ver en YouTube <span aria-hidden="true">↗</span></a></>}
      </dialog>
    </>
  );
}
