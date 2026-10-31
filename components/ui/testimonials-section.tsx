"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/ui/icons";
import styles from "./testimonials-section.module.css";

type Testimonial = {
  id: string;
  company: string;
  service: string;
  youtubeUrl: string;
  thumbnail: string;
  thumbnailAlt: string;
  isDemo: boolean;
};

type TestimonialsSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  items: readonly Testimonial[];
};

function youtubeVideoId(videoUrl: string) {
  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^(www\.|m\.)/, "");
    const parts = url.pathname.split("/").filter(Boolean);
    const id = host === "youtu.be"
      ? parts[0]
      : ["youtube.com", "youtube-nocookie.com"].includes(host)
        ? ["embed", "shorts", "live"].includes(parts[0]) ? parts[1] : url.searchParams.get("v")
        : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export function TestimonialsSection({ id = "testimonios", title, subtitle, items }: TestimonialsSectionProps) {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoId = selected ? youtubeVideoId(selected.youtubeUrl) : null;
  const headingId = `${id}-title`;
  const dialogTitleId = `${id}-video-title`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [selected]);

  return (
    <section id={id} className={`light-pattern ${styles.section}`} aria-labelledby={headingId}>
      <div className="page-container">
        <div className={styles.heading}>
          <h2 id={headingId}>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={`${styles.grid} ${items.length === 1 ? styles.singleGrid : ""}`}>
          {items.map((testimonial) => (
            <article key={testimonial.id} className={styles.card}>
              <button type="button" className={styles.thumbnail} aria-label={`Reproducir video de ${testimonial.company}`} aria-haspopup="dialog" onClick={() => setSelected(testimonial)}>
                <Image src={testimonial.thumbnail} alt={testimonial.thumbnailAlt} fill sizes={items.length === 1 ? "(max-width: 639px) 87vw, 540px" : "(max-width: 639px) 87vw, (max-width: 1200px) 42vw, 540px"} />
                <span className={styles.play} aria-hidden="true">
                  <svg width="30" height="34" viewBox="0 0 30 34" fill="currentColor"><path d="M4 1.5a2.5 2.5 0 0 0-4 2v27a2.5 2.5 0 0 0 4 2l24-13.5a2.3 2.3 0 0 0 0-4L4 1.5Z" /></svg>
                </span>
              </button>
              <h3>{testimonial.company}</h3>
              <p className={styles.serviceLabel}>{testimonial.service}</p>
            </article>
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={dialogTitleId} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelected(null);
      }}>
        <div className={styles.dialogHeader}>
          <h2 id={dialogTitleId}>{selected?.isDemo ? "Video de prueba" : "Testimonio"} · {selected?.company}</h2>
          <button type="button" className={styles.close} aria-label="Cerrar video" onClick={() => setSelected(null)}><CloseIcon /></button>
        </div>
        {selected && (
          <>
            <div className={styles.player}>
              {videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={`Video de ${selected.company}`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : <p className={styles.unavailable}>Este video no está disponible por el momento.</p>}
            </div>
            {videoId && <a className={styles.youtubeLink} href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>}
          </>
        )}
      </dialog>
    </section>
  );
}
