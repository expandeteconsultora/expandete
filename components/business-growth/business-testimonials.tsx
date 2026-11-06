import { businessTestimonials } from "@/data/business-growth";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { BusinessIcon } from "./business-icon";
import { businessContactUrl } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessTestimonials() {
  return (
    <TestimonialsSection {...businessTestimonials}>
      <div className={styles.testimonialsSchedule}>
        <a href={businessContactUrl("Información del servicio de publicidad digital (redes sociales , videos, diseños)")} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
          <BusinessIcon name="whatsapp" />
          <span>Solicitar información por WhatsApp</span>
        </a>
      </div>
    </TestimonialsSection>
  );
}
