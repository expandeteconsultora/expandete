import Image from "next/image";
import { businessHero } from "@/data/business-growth";
import { BusinessScheduleButton } from "./schedule-button";
import styles from "./business-growth.module.css";

export function BusinessHero() {
  return (
    <section className={styles.hero} aria-labelledby="business-title">
      <Image src={businessHero.image} alt={businessHero.imageAlt} fill loading="eager" fetchPriority="high" sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={`page-container ${styles.heroContent}`}>
        <p className={styles.eyebrow}>{businessHero.eyebrow}</p>
        <h1 id="business-title">{businessHero.title} <span>{businessHero.highlight}</span></h1>
        <p className={styles.heroDescription}>{businessHero.description}</p>
        <div className={styles.contactActions}>
          <a href="#planes-publicidad" className={styles.contactButton}>Ver servicios e inversión</a>
          <BusinessScheduleButton />
        </div>
        {/* <ul className={styles.heroBenefits}>
          {businessHero.benefits.map((benefit) => <li key={benefit.label}><BusinessIcon name={benefit.icon} />{benefit.label}</li>)}
        </ul> */}
      </div>
    </section>
  );
}
