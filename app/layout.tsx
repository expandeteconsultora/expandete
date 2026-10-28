import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { META_PIXEL_ID } from "@/components/analytics/meta-pixel-config";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expándete Más | Hagamos que tu negocio crezca",
  description: "Publicidad, estrategia, contenido y formación para llevar tu empresa al siguiente nivel. Conoce las soluciones de Expándete Más.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={geist.variable + " antialiased"}>
      <body className="min-h-screen font-sans">
          <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-navy">Saltar al contenido</a>
          {children}
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
          <noscript>
            {/* Meta requires a direct image request for browsers without JavaScript. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
      </body>
    </html>
  );
}
