import type { Metadata } from "next";
import Image from "next/image";
import { sincronizaBenefits, sincronizaContactBenefits, sincronizaImages, sincronizaSolutions, sincronizaTools } from "@/data/sincroniza";
import { ArrowIcon } from "@/components/ui/icons";
import { SincronizaContactLink } from "@/components/sincroniza/contact-link";
import { SincronizaIcon } from "@/components/sincroniza/sincroniza-icon";
import styles from "@/components/sincroniza/sincroniza.module.css";

export const metadata: Metadata = {
  title: "Sincroniza | Gestión, procesos y equipos | Expándete Más",
  description: "Fortalece la gestión de tu empresa con Sincroniza. Objetivos claros, mejores procesos y equipos con mayor autonomía, con acompañamiento práctico y resultados medibles.",
};

export default function SincronizaPage() {
  return (
    <main id="contenido">
      <section className={styles.hero} aria-labelledby="sincroniza-title">
        <div className={styles.heroVisual}><Image src={sincronizaImages.hero} alt="Asesor acompañando a dos profesionales para organizar el trabajo de su empresa" fill preload sizes="(max-width: 767px) 100vw, 65vw" /></div>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={`page-container ${styles.heroContent}`}>
          <p className={styles.heroBadge}>Sincroniza</p>
          <h1 id="sincroniza-title">Haz que tu empresa funcione con mayor <span>orden, control y autonomía.</span></h1>
          <p className={styles.heroDescription}>Fortalecemos la gestión de tu empresa con objetivos claros, mejores procesos y equipos con mayor autonomía.</p>
          <SincronizaContactLink />
          <ul className={styles.heroBenefits}>{sincronizaBenefits.map((benefit) => <li key={benefit.label}><SincronizaIcon name={benefit.icon} />{benefit.label}</li>)}</ul>
        </div>
      </section>

      <section className={`light-pattern ${styles.solutions}`} aria-labelledby="sincroniza-solutions-title">
        <div className={`page-container ${styles.solutionsHeading}`}>
          <div><p className={styles.eyebrow}>Nuestras soluciones</p><h2 id="sincroniza-solutions-title" className={styles.sectionTitle}>Tres soluciones <span>para fortalecer tu empresa.</span></h2></div>
          <a className={styles.textLink} href="#soluciones-sincroniza">Conoce nuestros servicios <ArrowIcon /></a>
          <p className={styles.sectionDescription}>Dirección, procesos y equipos para una gestión más sólida.</p>
        </div>
        <div id="soluciones-sincroniza" className={`section-container ${styles.solutionGrid}`}>
          {sincronizaSolutions.map((solution) => (
            <article key={solution.id} className={styles.solutionCard}>
              <div className={styles.solutionPhoto}><Image src={solution.image} alt={solution.imageAlt} fill sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 31vw" /></div>
              <div className={styles.solutionCopy}>
                <span className={styles.solutionIcon}><SincronizaIcon name={solution.icon} /></span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <p className={styles.solutionTools}>{solution.tools}</p>
                <SincronizaContactLink message={solution.message} label={`Conversar con un asesor sobre ${solution.title.toLowerCase()}`} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.implementation} aria-labelledby="sincroniza-tools-title">
        <div className="section-container">
          <div className={styles.implementationHeading}>
            <p className={styles.sectionBadge}>Lo que ayudamos a implementar</p>
            <h2 id="sincroniza-tools-title" className={styles.sectionTitle}>Mejor gestión, <span>mejores decisiones.</span></h2>
            <p className={styles.sectionDescription}>Herramientas y prácticas adaptadas a tu empresa.</p>
          </div>
          <ul className={styles.toolsGrid}>{sincronizaTools.map((tool) => <li key={tool.title} className={styles.toolCard}><span className={styles.toolIcon}><SincronizaIcon name={tool.icon} /></span><h3>{tool.title}</h3><p>{tool.description}</p></li>)}</ul>
        </div>
      </section>

      <section className={`light-pattern ${styles.contact}`} aria-labelledby="sincroniza-contact-title">
        <div className={styles.contactVisual}><Image src={sincronizaImages.contact} alt="Asesor presentando un plan de trabajo y acompañando a un equipo en su implementación" fill sizes="(max-width: 767px) 100vw, 57vw" /></div>
        <div className={styles.contactShade} aria-hidden="true" />
        <div className={`page-container ${styles.contactContent}`}>
          <h2 id="sincroniza-contact-title" className={styles.sectionTitle}>¿Tu empresa depende <span>demasiado de ti</span> para funcionar?</h2>
          <p className={styles.sectionDescription}>Conversemos sobre cómo fortalecer su organización, procesos y equipos.</p>
          <SincronizaContactLink message="Hola, mi empresa depende mucho de mí para funcionar. Quiero conversar sobre cómo Sincroniza puede ayudarme a fortalecer su organización, procesos y equipos." />
          <ul className={styles.contactBenefits}>{sincronizaContactBenefits.map((benefit) => <li key={benefit}><span><SincronizaIcon name="check" /></span>{benefit}</li>)}</ul>
        </div>
      </section>
    </main>
  );
}
