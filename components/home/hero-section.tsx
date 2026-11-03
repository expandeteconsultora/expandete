import Image from "next/image";

export function HeroSection() {
  return (
    <section id="descubre" aria-labelledby="hero-title" className="relative isolate min-h-185 overflow-hidden bg-navy text-white sm:min-h-205 md:min-h-[clamp(400px,40.8vw,650px)]">
      <Image src="/images/hero.webp" alt="Emprendedor trabajando en su negocio desde una oficina moderna" fill preload sizes="100vw" className="-z-20 object-cover object-[69%_bottom] max-md:top-auto! max-md:h-[55%]! md:object-top" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -left-30 -top-56 -z-10 h-88 w-[48%] rotate-[-13deg] rounded-[50%] bg-[#064a9b]/20" />
      <div className="page-container pb-12 pt-30 sm:pt-32 md:pb-7 md:pt-[clamp(104px,10.4vw,165px)] lg:pb-8">
        <h1 id="hero-title" className="max-w-170 text-[clamp(36px,11vw,62px)] font-extrabold leading-[0.94] tracking-[-0.045em] md:text-[clamp(43px,5.12vw,80px)]">
          Tu empresa<br />tiene potencial.<br /><span className="text-brand-green">Hagamos<br />que crezca.</span>
        </h1>
        <p className="mt-5 max-w-110 text-[19px] md:max-w-[44%] lg:max-w-110 leading-[1.2] tracking-tight text-[#e1e9ff] lg:mt-6 lg:text-[26px]">
          Descubre todo lo que podemos<br className="hidden sm:block" /> hacer por tu empresa
        </p>
      </div>
    </section>
  );
}
