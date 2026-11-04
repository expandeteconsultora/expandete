import { businessContact } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import styles from "./business-growth.module.css";

export function businessContactUrl(message = businessContact.message) {
  return `https://wa.me/${businessContact.number}?text=${encodeURIComponent(message)}`;
}

export function BusinessContactLink({ children = "Consultar nuestros servicios", message }: { children?: React.ReactNode; message?: string }) {
  return (
    <div className={styles.contactActions}>
      <a href={businessContactUrl(message)} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
        <BusinessIcon name="whatsapp" />
        <span>{children}</span>
        <ArrowIcon />
      </a>
      <a href={businessContact.schedulingUrl || undefined} role="link" aria-disabled={!businessContact.schedulingUrl} tabIndex={businessContact.schedulingUrl ? undefined : -1} target="_blank" rel="noopener noreferrer" className={`${styles.contactButton} ${styles.scheduleButton}`}>
        <BusinessIcon name="calendar" />
        <span>Agendar una asesoría</span>
      </a>
    </div>
  );
}
