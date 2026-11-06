import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "@/components/business-growth/business-icon";
import { businessContactUrl } from "@/components/business-growth/contact-link";
import { BusinessScheduleButton } from "@/components/business-growth/schedule-button";
import styles from "./contact-section.module.css";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className={styles.section}>
      <div className={styles.content}>
        <h2 id="contact-title">¿Listo para <span>hacer crecer tu empresa?</span></h2>
        <p>Conversemos sobre cómo impulsar su crecimiento.</p>
        <div className={styles.actions}>
          <BusinessScheduleButton className={`${styles.button} ${styles.schedule}`}>
            Agendar una reunión <ArrowIcon />
          </BusinessScheduleButton>
          <a href={businessContactUrl("¿Que servicios brindan?")} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.whatsapp}`}>
            <BusinessIcon name="whatsapp" />
            <span>Consultar por WhatsApp <ArrowIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
