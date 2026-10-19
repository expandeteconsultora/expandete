import Image from "next/image";
import { services } from "@/data/services";
import { ArrowIcon } from "@/components/ui/icons";
import { PreviewButton } from "@/components/ui/preview-provider";

export function SolutionsSection() {
  return (
    <section id="servicios" aria-labelledby="solutions-title" className="light-pattern py-10 md:pb-6 md:pt-6 lg:pb-9 lg:pt-9">
      <div className="section-container">
        <div className="mb-5 text-center lg:mb-8">
          <p className="text-xs font-extrabold tracking-[-0.025em] text-brand-blue lg:text-base">NUESTRAS SOLUCIONES</p>
          <span aria-hidden="true" className="mx-auto mb-2 mt-1.5 block h-[3px] w-12 rounded-full bg-brand-blue" />
          <h2 id="solutions-title" className="text-[30px] font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-4xl md:text-[clamp(30px,3.5vw,50px)]">
            Cada empresa tiene sus desafíos.<br className="hidden sm:block" /> <span className="text-brand-blue">Tenemos formas de ayudarte.</span>
          </h2>
        </div>
        <div className="mx-auto grid max-w-lg gap-6 md:gap-5 md:max-w-none md:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <article id={service.id} key={service.id} className={"group flex flex-col overflow-hidden rounded-[18px] border-b-[7px] " + service.accent + " bg-white p-[7px] shadow-[0_10px_24px_-16px_#07326833] transition-transform duration-300 hover:-translate-y-1"}>
              <div className="relative aspect-[1.77] overflow-hidden rounded-[14px]">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 92vw, (max-width: 1440px) 30vw, 420px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-2 pt-4 md:px-[clamp(20px,3.1vw,40px)] md:pb-0 lg:pb-3 lg:pt-5">
                <h3 className="text-[23px] font-extrabold leading-tight tracking-[-0.045em] md:text-[clamp(21px,2.23vw,32px)]">{service.name}</h3>
                <p className="mb-4 mt-2 md:mb-2 lg:mb-4 max-w-[290px] text-[20px] font-medium leading-[1.15] tracking-[-0.035em] text-muted lg:text-[26px]">{service.description}</p>
                <PreviewButton preview={service.id} className="mt-auto flex min-h-10 md:min-h-8 lg:min-h-10 w-fit items-center gap-3 text-[18px] font-bold tracking-[-0.035em] text-brand-blue transition-colors hover:text-navy lg:text-[23px]" aria-label={"Conocer más sobre " + service.name}>Conocer más <ArrowIcon className="transition-transform group-hover:translate-x-1" /></PreviewButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
