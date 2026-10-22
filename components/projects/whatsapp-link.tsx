import { ProjectIcon } from "./project-icon";
import styles from "./projects.module.css";

export function WhatsAppLink({ message = "Hola, solicito información sobre asesoría para mi proyecto empresarial y la convocatoria ProInnóvate 2026.", compact = false }: { message?: string; compact?: boolean }) {
  return (
    <a className={`${styles.whatsapp} ${compact ? styles.headerContact : ""}`} href={`https://wa.me/51954989320?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={compact ? "Contactar por WhatsApp al 954 989 320" : "Escríbenos al WhatsApp al 954 989 320"}>
      <ProjectIcon name="whatsapp" />
      <span>{compact ? "954 989 320" : "Escríbenos al WhatsApp"}</span>
    </a>
  );
}
