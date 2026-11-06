import Image from "next/image";
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
    <section id="club" aria-labelledby="club-title" className="relative isolate overflow-hidden bg-[#002958] text-white md:min-h-[56.28vw]">
      <div className="club-reference-photo absolute inset-x-0 bottom-0 -z-20 h-88 sm:h-104 md:inset-0 md:h-full">
        <Image src="/images/club-expandete.png" alt="Emprendedor aprendiendo desde su laptop en casa" fill sizes="100vw" className="object-cover object-right max-md:left-auto! max-md:w-[233%]! md:object-fill" />
      </div>
      <div aria-hidden="true" className="club-reference-shade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -left-24 -top-28 -z-10 size-60 rounded-full bg-[#0753aa]/50" />
      <div className="page-container relative pb-96 pt-9 sm:pb-112 md:pb-[8vw] md:pt-[3.2vw]">
        <div className="md:w-[58%]">
          <p className="flex items-center gap-3 text-[clamp(24px,3vw,50px)] font-bold leading-tight tracking-tight">
            <span>Club Expándete <span className="text-[#68fa1c]">+</span></span>
            <span aria-hidden="true" className="h-[2px] flex-1 bg-linear-to-r from-[#00e3ed] to-transparent" />
          </p>
          <h2 id="club-title" className="mt-6 text-[clamp(35px,5.1vw,86px)] font-extrabold leading-[1.05] tracking-[-0.04em] md:mt-[2vw]">Aprende y aplica</h2>
          <p className="mt-3 text-[clamp(23px,3.35vw,56px)] font-extrabold italic leading-[1.12] tracking-[-0.035em]">
            <span className="box-decoration-clone rounded-xl bg-[#00e1ec] px-3 py-1 text-[#00234d]">Marketing, Producción Audiovisual y Publicidad Digital</span>
          </p>
          <p className="mt-4 text-[clamp(23px,3.25vw,54px)] font-bold italic leading-[1.1] tracking-[-0.035em]">para hacer crecer tu negocio.</p>
          <div className="mt-7 grid grid-cols-3 divide-x-2 divide-white/90 md:mt-[3vw]">
            {topics.map((topic) => (
              <div key={topic.icon} className="flex flex-col justify-end px-2 text-center">
                <TopicIcon kind={topic.icon} />
                <p className="mx-auto mt-2 max-w-44 text-[clamp(13px,1.95vw,32px)] font-bold leading-[1.05] tracking-tight">{topic.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center md:mt-[2.6vw]">
            <PreviewButton preview="club" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#68fa1c] px-7 py-3 text-[clamp(21px,2.9vw,48px)] font-extrabold tracking-tight text-[#001d35] transition-colors hover:bg-[#83ff43] md:px-[3vw]">Descubre el Club <ArrowIcon className="size-6 md:size-9" /></PreviewButton>
          </div>
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1672 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-10 w-full text-background md:h-[5.7vw]" fill="currentColor"><path d="M0 55C230-60 420 45 800 73S1350 55 1672 15V100H0Z" /></svg>
    </section>
  );
}
