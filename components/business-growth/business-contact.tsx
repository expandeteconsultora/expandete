import { BusinessContactLink } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessContact() {
  return (
    <section className={styles.contact} aria-labelledby="business-contact-title">
      <div className={`page-container ${styles.contactGrid}`}>
        <div>
          <p className={styles.eyebrow}>Conversemos</p>
          <h2 id="business-contact-title">¿Listo para impulsar <span>tu empresa?</span></h2>
        </div>
        <p>Cuéntanos tus objetivos y encontremos la mejor manera de ayudarte.</p>
        <BusinessContactLink />
      </div>
    </section>
  );
}
