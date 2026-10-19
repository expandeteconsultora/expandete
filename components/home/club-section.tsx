import Image from "next/image";
import { ArrowIcon, GraduationIcon } from "@/components/ui/icons";
import { PreviewButton } from "@/components/ui/preview-provider";

export function ClubSection() {
  return (
    <section id="club" aria-labelledby="club-title" className="relative isolate min-h-[760px] overflow-hidden bg-navy text-white sm:min-h-[850px] md:min-h-[clamp(400px,39.2vw,610px)]">
      <Image src="/images/club.webp" alt="Vista de prueba de la plataforma de formación Club Expándete Más en una laptop" fill sizes="100vw" className="-z-20 object-cover object-[72%_center] max-md:top-auto! max-md:h-[52%]! md:object-[center_10%]" />
      <div className="club-shade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-60 -z-10 size-100 rounded-full bg-[#0753aa]/25" />
      <div className="page-container py-10 md:py-7 lg:py-11">
        <p className="flex items-center gap-2 text-[13px] font-medium tracking-wide lg:text-base"><GraduationIcon className="text-brand-green" /> CLUB EXPÁNDETE MÁS</p>
        <span aria-hidden="true" className="mb-3 mt-1 block h-[3px] w-24 rounded-full bg-brand-blue" />
        <h2 id="club-title" className="max-w-[650px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:max-w-[53%] md:text-[clamp(38px,4.05vw,62px)]">Aprende hoy lo que<br className="hidden md:block" /> <span className="text-brand-green">tu negocio necesita<br className="hidden md:block" /> mañana.</span></h2>
        <p className="mt-4 max-w-[440px] text-[19px] leading-[1.25] tracking-[-0.02em] text-[#e1e9ff] md:max-w-[43%] lg:text-[26px]">Formaciones prácticas, encuentros en vivo y una comunidad para emprendedores que quieren seguir creciendo.</p>
        <PreviewButton preview="club" className="action-button mt-7 bg-brand-green hover:bg-[#359c25] lg:mt-8 lg:min-h-[74px] lg:px-12 lg:text-[23px]">Descubre el Club <ArrowIcon /></PreviewButton>
      </div>
    </section>
  );
}
