import Image from "next/image";
import { projectBenefits, projectSectors, projectServices, projectSteps } from "@/data/business-projects";
import { ProjectIcon } from "./project-icon";
import { WhatsAppLink } from "./whatsapp-link";
import styles from "./projects.module.css";

export function ProjectHero() {
  return (
    <section className={styles.hero} aria-labelledby="project-title">
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.heroBadge}>Convocatoria ProInnóvate 2026</p>
          <h1 id="project-title" className={styles.heroTitle}>
            <span>¿Quieres ganar</span>
            <span>hasta</span>
            <strong>S/ 150,000</strong>
            <span className={styles.heroQuestion}>para invertir en tu empresa?</span>
          </h1>
          <p className={styles.heroDescription}>Nosotros te ayudamos a desarrollar y presentar tu proyecto.</p>
          <WhatsAppLink />
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/images/projects/entrepreneur.webp" alt="Emprendedor en un negocio de cacao y café rodeado de vegetación" fill preload sizes="(max-width: 767px) 90vw, (max-width: 1200px) 44vw, 500px" className={styles.portrait} />
          <figcaption className={styles.photoCaption}><span className={styles.statusDot} />Emprendedor agroindustrial · San Martín</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ProjectServices() {
  return (
    <section className={styles.lightSection} aria-labelledby="project-services-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2 id="project-services-title">No solo te informamos.<br /><span>Hacemos el proceso contigo.</span></h2>
          <p>Asesoría integral y personalizada en cada fase técnica.</p>
        </div>
        <div className={styles.cardGrid}>
          {projectServices.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <span className={styles.iconCircle}><ProjectIcon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.centerCta}><WhatsAppLink message="Hola, quiero solicitar más información para postular con mi proyecto empresarial." /></div>
      </div>
    </section>
  );
}

export function ProjectSupport() {
  return (
    <section className={styles.supportSection} aria-labelledby="project-support-title">
      <div className={`${styles.container} ${styles.supportGrid}`}>
        <figure className={styles.supportPhoto}>
          <Image src="/images/projects/business-owner.webp" alt="Emprendedora organizando su negocio de productos artesanales" fill sizes="(max-width: 767px) 90vw, (max-width: 1200px) 36vw, 370px" className={styles.portrait} />
          <figcaption className={styles.photoCaption}>Emprendedora de Tarapoto · San Martín</figcaption>
        </figure>
        <div className={styles.supportCopy}>
          <h2 id="project-support-title">Si quieres postular, pero no sabes por dónde empezar, <span>aquí te ayudamos.</span></h2>
          <div className={styles.benefitGrid}>
            {projectBenefits.map((benefit) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <span className={styles.iconCircle}><ProjectIcon name={benefit.icon} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
          <WhatsAppLink message="Hola, quisiera asesoría personalizada para postular con mi empresa." />
        </div>
      </div>
    </section>
  );
}

export function ProjectProcess() {
  return (
    <section className={styles.lightSection} aria-labelledby="project-process-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionBadge}>Paso a paso, hombro a hombro</p>
          <h2 id="project-process-title">Así trabajamos contigo</h2>
          <p>Un proceso ágil, directo y sin complicaciones técnicas.</p>
        </div>
        <ol className={styles.cardGrid}>
          {projectSteps.map((step, index) => (
            <li key={step.title} className={styles.stepCard}>
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
              <span className={`${styles.stepIcon} ${styles[`stepIcon${index + 1}`]}`}><ProjectIcon name={step.icon} /></span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className={styles.centerCta}><WhatsAppLink message="Hola, quiero empezar a trabajar con ustedes mi postulación a ProInnóvate." /></div>
      </div>
    </section>
  );
}

export function ProjectSectors() {
  return (
    <section className={styles.sectorsSection} aria-labelledby="project-sectors-title">
      <Image src="/images/projects/san-martin.webp" alt="" fill sizes="100vw" className={styles.sectorsBackground} />
      <div className={`${styles.container} ${styles.sectorsContent}`}>
        <h2 id="project-sectors-title">Sectores que acompañamos<br /><span>en San Martín</span></h2>
        <div className={styles.sectorsGrid}>
          {projectSectors.map((sector) => (
            <article key={sector.name} className={styles.sectorCard}>
              <Image src={`/images/projects/${sector.image}.webp`} alt={sector.alt} fill sizes="(max-width: 639px) 44vw, (max-width: 1023px) 43vw, 270px" />
              <h3><ProjectIcon name={sector.icon} /><span>{sector.name}</span></h3>
            </article>
          ))}
        </div>
        <WhatsAppLink message="Hola, mi empresa pertenece a uno de los sectores de San Martín y quiero asesoría para postular." />
      </div>
    </section>
  );
}
