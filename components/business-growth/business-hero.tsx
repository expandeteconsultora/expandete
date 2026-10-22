import Image from "next/image";
import { businessHero } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import { BusinessContactLink } from "./contact-link";
import styles from "./business-growth.module.css";

export function BusinessHero() {
  return (
    <section className={styles.hero} aria-labelledby="business-title">
      <div className={`page-container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.badge}><span />Impulsa tu negocio</p>
          <h1 id="business-title">Haz que más personas conozcan tu negocio y <span>se conviertan en clientes.</span></h1>
          <div className={styles.heroActions}>
            <BusinessContactLink />
            <a href="#soluciones" className={styles.secondaryButton}>Conocer más <ArrowIcon /></a>
          </div>
          <ul className={styles.benefits}>
            {businessHero.benefits.map((benefit) => <li key={benefit}><BusinessIcon name="check" />{benefit}</li>)}
          </ul>
        </div>
        <figure className={styles.heroPhoto}>
          <Image src={businessHero.image} alt={businessHero.imageAlt} fill loading="eager" fetchPriority="high" sizes="(max-width: 767px) 87vw, (max-width: 1480px) 36vw, 530px" />
          <figcaption className={styles.photoCaption}>
            <div><p>Conectamos tu negocio con más personas</p><strong>Más oportunidades de venta.</strong></div>
            <span className={styles.trendIcon}><BusinessIcon name="trend" /></span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
