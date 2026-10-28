import Image from "next/image";
import { businessServices } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import { businessContactUrl } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessSolutions() {
  return (
    <section id="soluciones" className={`light-pattern ${styles.solutions}`} aria-labelledby="business-solutions-title">
      <div className={`page-container ${styles.solutionsHeading}`}>
        <div>
          <p className={styles.eyebrow}>Nuestras soluciones</p>
          <h2 id="business-solutions-title" className={styles.sectionTitle}>Soluciones digitales <span>para tu empresa.</span></h2>
        </div>
        <a href="#servicios-digitales" className={styles.textLink}>Conoce nuestros servicios <ArrowIcon /></a>
        <p className={styles.sectionDescription}>Servicios que puedes contratar por separado o integrar para atraer clientes y generar oportunidades de venta.</p>
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
              <a href={businessContactUrl(service.message)} target="_blank" rel="noopener noreferrer" className={styles.serviceLink} aria-label={`Consultar sobre ${service.title} por WhatsApp`}><ArrowIcon /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
