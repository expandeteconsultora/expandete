import Image from "next/image";
import { businessCommercial, businessContact } from "@/data/business-growth";
import { BusinessIcon } from "./business-icon";
import { BusinessContactLink } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessCommercial() {
  return (
    <section className={`light-pattern ${styles.commercial}`} aria-labelledby="business-commercial-title">
      <div className={`page-container ${styles.commercialOverview}`}>
        <div className={styles.commercialCopy}>
          <p className={styles.eyebrow}>{businessCommercial.eyebrow}</p>
          <h2 id="business-commercial-title" className={styles.sectionTitle}>{businessCommercial.title} <span>{businessCommercial.highlight}</span></h2>
          <p className={styles.sectionDescription}>{businessCommercial.description}</p>
          <BusinessContactLink message={businessContact.commercialMessage} />
        </div>
        <div className={styles.commercialVisual}>
          <div className={styles.commercialPhoto}>
            <Image src={businessCommercial.image} alt={businessCommercial.imageAlt} fill sizes="(max-width: 767px) 87vw, (max-width: 1480px) 47vw, 640px" />
          </div>
          <ul className={styles.commercialBenefits}>
            {businessCommercial.benefits.map((benefit) => <li key={benefit.label}><BusinessIcon name={benefit.icon} />{benefit.label}</li>)}
          </ul>
        </div>
      </div>
      <div className={`section-container ${styles.commercialGrid}`}>
        {businessCommercial.areas.map((area, index) => (
          <article key={area.title} className={styles.commercialCard}>
            <BusinessIcon name={area.icon} className={styles.areaIcon} />
            <div>
              <h3><span>{String(index + 1).padStart(2, "0")}</span> {area.title}</h3>
              <ul>{area.features.map((feature) => <li key={feature}><BusinessIcon name="check" />{feature}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
