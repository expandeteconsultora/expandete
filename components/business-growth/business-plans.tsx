import type { ReactNode } from "react";
import { BusinessIcon } from "./business-icon";
import { businessContactUrl } from "./contact-link";
import styles from "./business-plans.module.css";

type Channel = "facebook" | "instagram" | "tiktok" | "google" | "web" | "calendar";

const alignment = <><strong>Reunión de alineación estratégica comercial</strong> y fijación de metas</>;
const tracking = <>Plantilla de seguimiento de clientes potenciales</>;
const report = <>Reporte mensual de rendimiento de campañas y clientes generados</>;
const videos = <>Guionización, grabación y edición de <strong>2 videos profesionales en alta calidad</strong></>;
const photography = <><strong>1 sesión fotográfica comercial</strong> en tu empresa</>;
const posts = <><strong>10 publicaciones estratégicas</strong> mensuales</>;
const catalog = <><strong>10 diseños de productos optimizados</strong> para catálogo de WhatsApp</>;
const campaigns = <>Gestión, segmentación y optimización diaria de campañas publicitarias</>;
const consulting = <><strong>1 asesoría mensual</strong> en gestión de personal, procesos y liderazgo</>;

const plans: {
  id: string; title: string; description: string; monthly: string;
  channelCount?: number; channels: Channel[]; features: ReactNode[];
  bonuses: ReactNode[]; message: string; recommended?: boolean;
}[] = [
  {
    id: "opcion-1", title: "Para comenzar",
    description: "Si tu negocio necesita empezar a tener presencia digital y atraer nuevos clientes.",
    monthly: "600", channelCount: 2,
    channels: ["facebook", "instagram", "tiktok"],
    features: [alignment, <>Creación y configuración profesional de canales digitales seleccionados</>,
      <>Guionización, grabación y edición de <strong>1 video profesional en alta calidad</strong></>,
      <><strong>8 publicaciones estratégicas</strong> mensuales</>,
      <>Gestión, segmentación y optimización diaria de campañas</>, tracking, report],
    bonuses: [], message: "Interesado en la opción 1 de Publicidad",
  },
  {
    id: "opcion-2", title: "Fortalece tu marca", recommended: true,
    description: "Si ya tienes presencia digital y quieres mejorar tu publicidad y la imagen de tu negocio.",
    monthly: "950", channelCount: 3,
    channels: ["facebook", "instagram", "tiktok", "google"],
    features: [alignment, <>Creación y configuración profesional de canales digitales seleccionados</>,
      videos, photography, posts, catalog, campaigns, tracking, report],
    bonuses: [consulting], message: "Interesado en la opción 2 de Publicidad",
  },
  {
    id: "sistema-impulsa", title: "Sistema Impulsa",
    description: "Si tu negocio está creciendo y necesitas mejorar tus procesos de marketing, ventas y atención comercial.",
    monthly: "1,600",
    channels: ["facebook", "instagram", "tiktok", "google", "web", "calendar"],
    features: [alignment, <>Creación y configuración profesional de <strong>todos los canales digitales</strong></>,
      videos, photography, posts, catalog, campaigns,
      <>Creación y optimización continua de <strong>página de aterrizaje (Landing Page)</strong></>,
      <>Instalación y configuración del píxel de Meta &amp; tracking de conversión</>,
      <>Reporte mensual de rendimiento comercial y retorno de inversión</>],
    bonuses: [consulting, <><strong>1 capacitación trimestral al personal</strong> en ventas, liderazgo y gestión organizacional</>],
    message: "Interesado en el Sistema Impulsa",
  },
];

const channelNames: Record<Channel, string> = {
  facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok", google: "Google",
  web: "Página web", calendar: "Calendario de citas",
};

function ChannelIcon({ channel }: { channel: Channel }) {
  return (
    <span className={`${styles.channel} ${styles[channel]}`} role="img" aria-label={channelNames[channel]}>
      {channel === "facebook" && <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-9h3l.5-3.5h-3.5v-2c0-1 .3-1.7 1.7-1.7H17V2.7c-.6-.1-1.6-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8v2.2H6.4V13h3.1v9Z" /></svg>}
      {channel === "instagram" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>}
      {channel === "tiktok" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M14 3v12a4 4 0 1 1-4-4M14 3c0 4 3 6 6 6" /></svg>}
      {channel === "google" && <span aria-hidden="true">G</span>}
      {channel === "web" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>}
      {channel === "calendar" && <BusinessIcon name="calendar" />}
    </span>
  );
}

export function BusinessPlans() {
  return (
    <section id="planes-publicidad" className={styles.section} aria-labelledby="business-plans-title">
      <div className={styles.heading}>
        <h2 id="business-plans-title">Elige cómo atraer más clientes.</h2>
      </div>
      <div className={`section-container ${styles.grid}`}>
        {plans.map((plan, index) => (
          <article key={plan.id} className={`${styles.card} ${plan.recommended ? styles.recommended : ""} ${index === 2 ? styles.system : ""}`} aria-labelledby={`${plan.id}-title`}>
            {plan.recommended && <p className={styles.ribbon}><span aria-hidden="true">★</span> Más popular · Recomendado <span aria-hidden="true">★</span></p>}
            <div className={styles.cardBody}>
              <header className={styles.intro}>
                <p className={styles.option}>Opción {index + 1}</p>
                <h3 id={`${plan.id}-title`}>{plan.title}</h3>
                <p className={styles.description}>{plan.description}</p>
              </header>
              <div className={styles.pricing}>
                <p className={styles.monthly}><strong>S/ {plan.monthly}</strong><span>/mes</span></p>
              </div>
              <div className={styles.channels}>
                <p>{plan.channelCount ? <>Hasta <strong>{plan.channelCount} canales digitales</strong> a elegir:</> : <>Todos los <strong>canales digitales</strong> incluidos:</>}</p>
                <div className={styles.channelIcons}>{plan.channels.map((channel) => <ChannelIcon key={channel} channel={channel} />)}</div>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <BusinessIcon name="check" /><span>{feature}</span>
                    {featureIndex === 1 && <div className={styles.whatsapp}><BusinessIcon name="whatsapp" /><span>Configuración y optimización profesional de <strong>WhatsApp Business para ventas</strong></span></div>}
                  </li>
                ))}
              </ul>
              {plan.bonuses.length > 0 && <ul className={styles.bonuses}>{plan.bonuses.map((bonus, bonusIndex) => (
                <li key={bonusIndex}><span aria-hidden="true">🎁</span><p><span className={styles.bonusLabel}>{plan.recommended ? "Bono exclusivo:" : `Bono ${bonusIndex + 1}:`}</span> {bonus}</p></li>
              ))}</ul>}
              <div className={styles.actions}>
                <a href={businessContactUrl(plan.message)} target="_blank" rel="noopener noreferrer" className={styles.choose} aria-label={`Elegir ${plan.title} por WhatsApp`}>Elegir esta opción</a>
                <a href={businessContactUrl("Información de servicio de publicidad")} target="_blank" rel="noopener noreferrer" className={styles.advisor} aria-label={`Conversar con un asesor sobre ${plan.title}`}><BusinessIcon name="whatsapp" />Conversar con un asesor</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.note}>* Precios mensuales sujetos a términos y condiciones del servicio. Asesorías previa coordinación.</p>
    </section>
  );
}
