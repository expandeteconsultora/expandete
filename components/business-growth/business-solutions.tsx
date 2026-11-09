import Image from "next/image";
import { businessServices } from "@/data/business-growth";
import { BusinessIcon } from "./business-icon";
import { businessContactUrl } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessSolutions() {
  return (
    <section id="soluciones" className={`light-pattern ${styles.solutions}`} aria-labelledby="business-solutions-title">
      <div className={`page-container ${styles.solutionsHeading}`}>
        <div>
          <h2 id="business-solutions-title" className={styles.sectionTitle}>Servicios <span>para tu empresa.</span></h2>
        </div>
        <p className={styles.sectionDescription}>Contrátalos por separado o intégralos para atraer más clientes y generar oportunidades de venta.</p>
      </div>
      <div id="servicios-digitales" className={`section-container ${styles.serviceGrid}`}>
        {businessServices.map((service) => (
          <article key={service.id} id={service.id} className={styles.serviceCard}>
            <div className={styles.servicePhoto}>
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 539px) 92vw, (max-width: 1023px) 44vw, (max-width: 1440px) 22vw, 310px" />
            </div>
            <div className={styles.serviceCopy}>
              <span className={styles.serviceIcon}><BusinessIcon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={businessContactUrl(service.message)} target="_blank" rel="noopener noreferrer" className={styles.serviceLink} aria-label={`Conversar con un asesor sobre ${service.title} por WhatsApp`}>
                <BusinessIcon name="whatsapp" />
                <span>Consultar este servicio</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className={`page-container ${styles.servicesIntegration}`}>
        <p className={styles.sectionTitle}>¿Y si integráramos todo para <span>hacer crecer tu empresa?</span></p>
        <svg className={styles.integrationArrow} width="90" height="70" viewBox="0 0 90 70" fill="currentColor" aria-hidden="true">
          <path d="M8 12C35 1 64 8 71 37l13-7-13 34-27-23 15 1C55 21 33 12 8 17Z" />
        </svg>
      </div>
    </section>
  );
}
