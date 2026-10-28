import { sincronizaContactUrl } from "@/data/sincroniza";
import { ArrowIcon } from "@/components/ui/icons";
import { SincronizaIcon } from "./sincroniza-icon";
import styles from "./sincroniza.module.css";

export function SincronizaContactLink({ message, label = "Conversar con un asesor" }: { message?: string; label?: string }) {
  return <a href={sincronizaContactUrl(message)} target="_blank" rel="noopener noreferrer" className={styles.contactButton} aria-label={label}><SincronizaIcon name="whatsapp" /><span>Conversar con un asesor</span><ArrowIcon /></a>;
}
