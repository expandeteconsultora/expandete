import { businessContact } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import styles from "./business-growth.module.css";

export function businessContactUrl(message = businessContact.message) {
  return `https://wa.me/${businessContact.number}?text=${encodeURIComponent(message)}`;
}

export function BusinessContactLink({ children = "Conversar con un asesor", message }: { children?: React.ReactNode; message?: string }) {
  return (
    <a href={businessContactUrl(message)} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
      <BusinessIcon name="whatsapp" />
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}
