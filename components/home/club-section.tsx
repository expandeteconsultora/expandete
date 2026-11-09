import Image from "next/image";
import styles from "./club-section.module.css";
import { ArrowIcon } from "@/components/ui/icons";
import { PreviewButton } from "@/components/ui/preview-provider";

const topics = [
  { label: "Marketing", icon: "marketing" },
  { label: "Producción Audiovisual", icon: "video" },
  { label: "Publicidad Digital", icon: "social" },
] as const;

function TopicIcon({ kind }: { kind: (typeof topics)[number]["icon"] }) {
  if (kind === "social") {
    return (
      <div aria-hidden="true" className="flex items-center justify-center gap-1 py-3">
        <span className="flex size-7 items-center justify-center rounded-lg border border-white bg-[#0866ff] text-2xl font-bold lg:size-10 lg:text-4xl">f</span>
        <span className="flex size-7 items-center justify-center rounded-lg border border-white bg-linear-to-tr from-[#ffb900] via-[#ed2774] to-[#7638fa] lg:size-10">
          <svg viewBox="0 0 24 24" className="size-5 lg:size-7" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" /></svg>
        </span>
        <span className="flex size-7 items-center justify-center rounded-lg border border-white bg-black text-xl font-bold lg:size-10 lg:text-3xl">♪</span>
        <span className="flex size-7 items-center justify-center rounded-full bg-white text-xl font-bold text-[#4285f4] lg:size-10 lg:text-3xl">G</span>
      </div>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-16 w-20 lg:h-22 lg:w-28">
      {kind === "marketing" ? <><path d="M18 34 62 15l5 48-46-9a10 10 0 0 1-3-20ZM28 56l8 19h12l-9-17" /><path d="m78 21 7-8m-5 23 12-2m-12 17 10 6" stroke="#68fa1c" /></> : <><rect x="14" y="29" width="73" height="44" rx="4" /><path d="m14 29-4-14L80 2l4 14-70 13Zm10-17 12 11m8-15 12 11m8-14 12 11" /><path d="m45 41 20 10-20 12Z" fill="#68fa1c" stroke="#68fa1c" /></>}
    </svg>
  );
}

export function ClubSection() {
  return (
    <section id="club" aria-labelledby="club-title" className={styles.club}>
      <div className={styles.photo}>
        <Image src="/images/club-persona.webp" alt="Emprendedor sonriendo mientras aprende desde su laptop en casa" fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.photoImage} />
      </div>
      <div aria-hidden="true" className={styles.shade} />
      <div className={`page-container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.brand}>
            <span>Club Expándete <span className={styles.plus}>+</span></span>
            <span aria-hidden="true" className={styles.brandLine} />
          </p>
          <h2 id="club-title" className={styles.title}>Aprende y aplica</h2>
          <p className={styles.subjects}>Marketing, Producción Audiovisual y Publicidad Digital</p>
          <p className={styles.tagline}>para hacer crecer tu negocio.</p>
          <div className={styles.topics}>
            {topics.map((topic) => (
              <div key={topic.icon} className={styles.topic}>
                <div className={styles.topicIcon}><TopicIcon kind={topic.icon} /></div>
                <p>{topic.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <PreviewButton preview="club" className={styles.button}>Descubre el Club <ArrowIcon /></PreviewButton>
          </div>
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1600 120" preserveAspectRatio="none" className={styles.wave} fill="none">
        <path d="M0 20C130 130 390 130 600 105S850 20 1050 75" stroke="#1597e1" strokeOpacity=".5" fill="#0754a54d" />
      </svg>
    </section>
  );
}
