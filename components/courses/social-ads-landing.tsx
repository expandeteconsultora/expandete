import Image from "next/image";
import { BusinessIcon } from "@/components/business-growth/business-icon";
import { GraduationIcon } from "@/components/ui/icons";
import { courseTools } from "@/data/marketing-courses";
import { socialAdsCourses, socialAdsLearning, socialAdsWhatsappUrl } from "@/data/social-ads-courses";
import { SocialAdsVideos } from "./social-ads-videos";
import { LearningCarousel } from "./learning-carousel";
import styles from "./social-ads.module.css";

function InvestmentLink() {
  return (
    <a href="#cursos-e-inversion" className={styles.primaryButton}>
      <BusinessIcon name="calendar" />
      Ver cursos e inversión
      <span aria-hidden="true">↓</span>
    </a>
  );
}

function CoursePricing() {
  return (
    <section id="cursos-e-inversion" className={styles.pricing} aria-labelledby="investment-title">
      <div className="page-container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}><BusinessIcon name="calendar" /> Fechas, horarios e inversión</span>
          <h2 id="investment-title">Elige el curso que <span>prefieras</span></h2>
          <p>Selecciona el curso y la temática que mejor se adapten a los objetivos de tu negocio.</p>
        </div>

        <div className={styles.pricingGrid}>
          {socialAdsCourses.map((course) => (
            <article key={course.id} className={`${styles.priceCard} ${course.featured ? styles.featuredCard : ""}`} aria-labelledby={`${course.id}-title`}>
              <div className={styles.cardBadges}>
                <span className={styles.durationBadge}><GraduationIcon /> {course.classes} clases · {course.hours} horas</span>
                <span className={styles.courseBadge}>{course.badge}</span>
              </div>
              <h3 id={`${course.id}-title`}>Publicidad en Redes Sociales:<span>{course.specialty}</span></h3>
              <p className={styles.courseDescription}>{course.description}</p>

              <div className={styles.schedule}>
                <div><span className={styles.detailIcon}><ClockIcon /></span><dl><dt>Duración</dt><dd>{course.classes} clases ({course.hours} horas)</dd></dl></div>
                <div><span className={styles.detailIcon}><BusinessIcon name="calendar" /></span><dl><dt>Inicios</dt><dd>Quincenales</dd></dl></div>
                <div className={styles.scheduleFull}><span className={styles.detailIcon}><BusinessIcon name="calendar" /></span><dl><dt>Días y horario</dt><dd>{course.schedule}</dd></dl></div>
              </div>

              <div className={styles.learningList}>
                <h4>Todo lo que aprenderás</h4>
                <ul>{course.learning.map((item) => <li key={item}><span className={styles.checkIcon}><BusinessIcon name="check" /></span><span>{item}</span></li>)}</ul>
              </div>

              <div className={styles.bonus}>
                <BusinessIcon name="bulb" />
                <div><h4>¡Bono incluido!</h4><p><strong>Plantillas profesionales de marketing:</strong> herramientas listas para lanzar y medir tus campañas.</p></div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.investmentOptions}>
                  <div className={styles.investmentTier}>
                    <h4>Inversión total</h4>
                    <div className={styles.tierPrice}><strong><span>S/</span> {course.price}</strong></div>
                  </div>
                  <div className={`${styles.investmentTier} ${styles.reservationTier}`}>
                    <div className={styles.reservationInfo}>
                      <h4>Separa tu lugar</h4>
                      <span className={styles.limitedBadge}>Cupos limitados</span>
                    </div>
                    <div className={styles.tierPrice}><strong><span>S/</span> {course.reservation}</strong></div>
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <a href={socialAdsWhatsappUrl(course.name, "reserve")} target="_blank" rel="noopener noreferrer" className={styles.primaryButton} aria-label={`Reservar mi vacante: ${course.name}`}><BusinessIcon name="whatsapp" /> Reservar mi vacante</a>
                  <a href={socialAdsWhatsappUrl(course.name, "consult")} target="_blank" rel="noopener noreferrer" className={styles.consultButton} aria-label={`Consultar: ${course.name}`}><MessageIcon /> Consultar con un asesor</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}><span className={styles.checkIcon}><BusinessIcon name="check" /></span>Aprende con especialistas de Expándete Más que gestionan campañas publicitarias a diario.</p>
      </div>
    </section>
  );
}

function ClockIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg>;
}

function MessageIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11a8 8 0 0 1-8 8H8l-5 3 1.5-5A8 8 0 1 1 21 11Z" /><path d="M8 10h8m-8 4h5" /></svg>;
}

export function SocialAdsLanding() {
  return (
    <main id="contenido" className={styles.landing}>
      <section className={styles.hero} aria-labelledby="course-title">
        <div className={`page-container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}><GraduationIcon /> Cursos presenciales en Tarapoto</span>
            <h1 id="course-title">Cursos de Publicidad en Redes Sociales</h1>
            <p className={styles.heroDescription}>Crea anuncios, genera videos con IA y lanza campañas publicitarias de manera profesional.</p>
            <p className={styles.smallGroups}><BusinessIcon name="check" /> Grupos reducidos para acompañar tu aprendizaje</p>
            <div className={styles.heroTools}>
              <p>Aprende con las herramientas líderes</p>
              <ul>{courseTools.filter((tool) => ["meta", "tiktok", "whatsapp", "chatgpt", "canva", "google-ads"].includes(tool.id)).map((tool) => <li key={tool.id} title={tool.name}><Image src={tool.image} alt={tool.name} width={24} height={24} unoptimized /></li>)}</ul>
            </div>
            <InvestmentLink />
          </div>
          <figure className={styles.heroPhoto}>
            <Image src="/images/courses/banner-publicidad-redes.webp" alt="Equipo de Expándete Más y herramientas de publicidad digital, redes sociales y creación con inteligencia artificial" fill sizes="(max-width: 767px) 100vw, 50vw" preload />
          </figure>
        </div>
      </section>

      <section className={styles.learning} aria-labelledby="learning-title">
        <div className="page-container">
          <div className={styles.sectionHeading}>
            <h2 id="learning-title">Lo que <span>aprenderás</span></h2>
            <p>Una metodología 100% práctica y en vivo para crear y optimizar tus campañas desde cero.</p>
          </div>
          <LearningCarousel count={socialAdsLearning.length}>
            {socialAdsLearning.map((step) => (
              <article key={step.title} className={styles.learningCard}>
                <h3>{step.title}</h3>
                <div className={styles.learningImage}><Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 767px) 87vw, 29vw" /></div>
              </article>
            ))}
          </LearningCarousel>
          <div className={styles.centeredCta}><InvestmentLink /></div>
        </div>
      </section>

      <section className={styles.experiences} aria-labelledby="experiences-title">
        <div className="page-container">
          <div className={styles.sectionHeading}>
            <span className={styles.videoSectionIcon} aria-hidden="true">▶</span>
            <h2 id="experiences-title">Experiencia de alumnos</h2>
            <p>Conoce de cerca cómo se vive el aprendizaje en Expándete Más.</p>
          </div>
          <SocialAdsVideos />
          <div className={styles.centeredCta}><InvestmentLink /><p className={styles.limitedNote}><BusinessIcon name="check" /> Cupos limitados · Elige tu curso</p></div>
        </div>
      </section>

      <CoursePricing />
    </main>
  );
}
