import Image from "next/image";

export function HeroSection() {
  return (
    <section id="descubre" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#00234d] text-white md:min-h-[max(420px,33.17vw)]">
      <div className="hero-reference absolute inset-x-0 bottom-0 -z-20 h-80 sm:h-96 md:inset-0 md:h-full">
        <Image src="/images/cabecera.png" alt="Empresario en una oficina moderna de Expándete Más" fill preload sizes="100vw" className="object-cover object-[65%_bottom] md:object-fill" />
      </div>
      <div aria-hidden="true" className="hero-reference-shade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -left-24 -top-44 -z-10 h-64 w-[55%] rotate-[-17deg] rounded-[50%] bg-[#064a9b]/25 md:-top-52 md:h-80 md:w-[35%]" />
      <div className="mx-auto w-[86.5%] max-w-[1160px] pb-80 pt-28 sm:pb-96 sm:pt-32 md:pb-14 md:pt-[max(112px,7.8vw)]">
        <h1 id="hero-title" className="text-[clamp(38px,10.5vw,58px)] font-extrabold leading-[0.94] tracking-[-0.045em] md:text-[clamp(40px,3.95vw,72px)]">
          Tu empresa<br />tiene potencial.<br /><span className="text-[#49c711]">Hagamos<br />que crezca.</span>
        </h1>
        <p className="mt-5 max-w-80 text-[18px] leading-[1.25] tracking-tight text-[#f1f4ff] md:max-w-[30%] md:text-[clamp(16px,1.4vw,24px)]">
          Descubre todo lo que podemos hacer por tu empresa
        </p>
      </div>
    </section>
  );
}
