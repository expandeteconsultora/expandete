import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PreviewProvider } from "@/components/ui/preview-provider";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expándete Más | Hagamos que tu negocio crezca",
  description: "Publicidad, estrategia, contenido y formación para llevar tu empresa al siguiente nivel. Conoce las soluciones de Expándete Más.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable + " antialiased"}>
      <body className="min-h-screen font-sans">
        <PreviewProvider>
          <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-navy">Saltar al contenido</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </PreviewProvider>
      </body>
    </html>
  );
}
