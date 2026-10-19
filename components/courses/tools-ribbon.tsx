"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { courseTools } from "@/data/marketing-courses";
import { ChevronIcon, PlaybackIcon } from "./carousel-icons";
import styles from "./courses.module.css";

export function ToolsRibbon() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function move(direction: number) {
    const animation = trackRef.current?.getAnimations()[0];
    if (!animation || typeof animation.currentTime !== "number") return;
    const duration = Number(animation.effect?.getTiming().duration) || 40000;
    animation.currentTime = (animation.currentTime + direction * 3500 + duration) % duration;
  }

  return (
    <section className={styles.toolsRibbon} aria-label="Herramientas que aprenderás a utilizar">
      <div className={styles.ribbonGlow} aria-hidden="true" />
      <button
        type="button"
        className={styles.ribbonArrow + " left-3 sm:left-5"}
        aria-label="Mover herramientas a la izquierda"
        onClick={() => move(-1)}
      >
        <ChevronIcon direction="left" />
      </button>
      <div className={styles.ribbonViewport}>
        <div
          ref={trackRef}
          className={styles.toolsTrack}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[0, 1, 2, 3].map((copy) => (
            <ul key={copy} className={styles.toolsGroup} aria-hidden={copy > 0 ? true : undefined}>
              {courseTools.map((tool) => (
                <li key={tool.id} className={styles.toolItem}>
                  <div className={styles.toolPill}>
                    <span className={styles.toolIcon + " " + styles["icon_" + tool.id]}>
                      <Image src={tool.image} alt="" width={34} height={34} unoptimized />
                    </span>
                    <span className="text-left text-sm font-semibold leading-tight sm:text-base">
                      {tool.name === "WhatsApp Business" ? <>WhatsApp<br />Business</> : tool.name}
                    </span>
                  </div>
                  <span className={styles.toolDot} aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.ribbonArrow + " right-3 sm:right-5"}
        aria-label="Mover herramientas a la derecha"
        onClick={() => move(1)}
      >
        <ChevronIcon />
      </button>
      <button
        type="button"
        className="absolute bottom-2 right-5 flex size-7 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
        aria-label={paused ? "Reanudar cinta de herramientas" : "Pausar cinta de herramientas"}
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        <PlaybackIcon paused={paused} className="size-3" />
      </button>
    </section>
  );
}
