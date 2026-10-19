import { ArrowIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="light-pattern px-5 py-10 text-center md:py-5 lg:py-9">
      <h2 id="contact-title" className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.05em] md:text-[28px] lg:text-[39px]">¿Listo para <span className="text-brand-blue">hacer crecer tu negocio?</span></h2>
      <p className="mx-auto mt-2 md:mt-1 lg:mt-2 max-w-[800px] text-base font-medium leading-snug tracking-[-0.025em] text-muted lg:text-[21px]">Conoce nuestras soluciones y encuentra la que mejor se adapta a tu empresa.</p>
      <a href="#servicios" className="action-button mt-4 md:mt-3 md:min-h-11 md:py-3 lg:mt-4 lg:py-4 bg-[#0067ff] hover:bg-[#0055d4] lg:min-h-16 lg:px-12 lg:text-xl">Conocer servicios <ArrowIcon /></a>
    </section>
  );
}
