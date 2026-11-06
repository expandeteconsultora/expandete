import { BusinessContactLink } from "./contact-link";

export function BusinessCta() {
  return (
    <section aria-labelledby="business-cta-title" className="light-pattern px-5 py-14 text-center md:py-20">
      <div className="page-container">
        <h2 id="business-cta-title" className="mx-auto max-w-240 text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.12] tracking-[-0.04em] text-navy">
          Haz que más personas conozcan tu empresa y <span className="text-brand-green">se conviertan en clientes.</span>
        </h2>
        <div className="mt-8 flex justify-center [&>div]:w-full [&>div]:justify-center sm:[&>div]:w-auto [&_a]:w-full [&_button]:w-full sm:[&_a]:w-auto sm:[&_button]:w-auto">
          <BusinessContactLink />
        </div>
      </div>
    </section>
  );
}
