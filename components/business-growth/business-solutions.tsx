import Image from "next/image";
import { businessServices } from "@/data/business-growth";
import { BusinessIcon } from "./business-icon";
import { businessContactUrl } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessSolutions() {
  return (
    <section id="soluciones" className={styles.solutions} aria-labelledby="business-solutions-title">
      <div className={`page-container ${styles.solutionsHeading}`}>
        <h2 id="business-solutions-title" className={styles.solutionsTitle}>¿Solo necesitas un <span>servicio</span>?</h2>
      </div>
      <div id="servicios-digitales" className={`section-container ${styles.serviceGrid}`}>
        {businessServices.map((service) => (
          <article key={service.id} id={service.id} className={styles.serviceCard}>
            <div className={styles.servicePhoto}>
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 92vw, (max-width: 1440px) 30vw, 425px" />
            </div>
            <div className={styles.serviceCopy}>
              <h3>{service.title}</h3>
              <ul className={styles.serviceBenefits}>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className={styles.serviceCheck}><BusinessIcon name="check" /></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href={businessContactUrl(`Interesado en el servicio de ${service.title}`)} target="_blank" rel="noopener noreferrer" className={styles.serviceLink} aria-label={`Cotizar servicio de ${service.title} por WhatsApp`}>
                <BusinessIcon name="whatsapp" />
                <span>Cotizar servicio</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
