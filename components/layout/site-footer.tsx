import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { PreviewButton } from "@/components/ui/preview-provider";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy pb-6 pt-10 text-white md:pb-4 md:pt-8 lg:pb-7 lg:pt-12">
      <div className="page-container grid gap-9 pb-9 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] md:gap-0 md:pb-7 lg:pb-11">
        <div className="sm:col-span-2 md:col-span-1 md:pr-10">
          <Link href="/#descubre" aria-label="Expándete Más, inicio"><Brand className="text-[40px] lg:text-[54px]" /></Link>
          <p className="mt-5 max-w-[450px] text-base leading-[1.4] tracking-[-0.02em] lg:text-[22px]">Servicios especializados para empresas<br className="hidden lg:block" /> y formación práctica para emprendedores.</p>
        </div>
        <div className="md:mt-2 md:border-l md:border-[#7796bc66] md:pl-10 lg:pl-20">
          <h2 className="mb-3 text-lg font-bold lg:text-[23px]">Servicios</h2>
          <ul className="space-y-2 text-sm lg:text-[19px]">
            {services.map((service) => <li key={service.id}><Link href={service.href} className="text-left transition-colors hover:text-green-300">{service.name}</Link></li>)}
          </ul>
        </div>
        <div className="md:mt-2 md:border-l md:border-[#7796bc66] md:pl-10 lg:pl-20">
          <h2 className="mb-3 text-lg font-bold lg:text-[23px]">Formación</h2>
          <Link href="/#club" className="text-sm transition-colors hover:text-green-300 lg:text-[19px]">Club Expándete Más</Link>
        </div>
      </div>
      <div className="section-container border-t border-[#7796bc55] px-3 pt-5 text-xs leading-6 md:pt-3 md:leading-[18px] lg:pt-5 lg:leading-6 text-[#96aaca] lg:text-base">
        <p className="flex flex-wrap items-center gap-x-1"><span>© 2026 Expándete Más</span><span aria-hidden="true">·</span><PreviewButton preview="privacy" className="transition-colors hover:text-white">Política de privacidad</PreviewButton><span aria-hidden="true">·</span><PreviewButton preview="terms" className="transition-colors hover:text-white">Términos y condiciones</PreviewButton></p>
      </div>
    </footer>
  );
}
