import Image from "next/image";
import { businessServices } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import { BusinessContactLink, businessContactUrl } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessSolutions() {
  return (
    <section id="soluciones" className={`light-pattern ${styles.solutions}`} aria-labelledby="business-solutions-title">
      <div className="section-container">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Nuestras soluciones</p>
          <h2 id="business-solutions-title">Soluciones digitales <span>para tu negocio</span></h2>
          <p>Todo lo que necesitas en un solo lugar para atraer clientes calificados y hacer crecer tu negocio de forma predecible.</p>
        </div>
        <div className={styles.serviceGrid}>
          {businessServices.map((service) => (
            <article key={service.id} id={service.id} className={styles.serviceCard}>
              <div className={styles.servicePhoto}>
                <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 539px) 92vw, (max-width: 1023px) 44vw, (max-width: 1440px) 22vw, 310px" />
                <span className={`${styles.serviceIcon} ${service.accent === "green" ? styles.greenIcon : ""}`}><BusinessIcon name={service.icon} /></span>
              </div>
              <div className={styles.serviceCopy}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={businessContactUrl(service.message)} target="_blank" rel="noopener noreferrer" className={styles.serviceLink} aria-label={`Explorar servicio de ${service.title} por WhatsApp`}>
                  Explorar servicio <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
        <aside className={styles.contactBanner} aria-labelledby="business-contact-title">
          <div>
            <h2 id="business-contact-title">¿Listo para <span>impulsar tu negocio?</span></h2>
            <p>Conversemos y te ayudamos a encontrar la mejor solución técnica y comercial.</p>
          </div>
          <BusinessContactLink>Quiero impulsar mi negocio</BusinessContactLink>
        </aside>
      </div>
    </section>
  );
}
