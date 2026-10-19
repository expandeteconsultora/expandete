import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PreviewProvider } from "@/components/ui/preview-provider";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PreviewProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
    </PreviewProvider>
  );
}
