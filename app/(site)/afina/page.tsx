import type { Metadata } from "next";
import Image from "next/image";
import { afinaImages, afinaPrograms, afinaProposal, afinaSteps, afinaWhatsAppUrl } from "@/data/afina";
import { ArrowIcon } from "@/components/ui/icons";
import { AfinaIcon } from "@/components/afina/afina-icon";
import { AfinaContactForm } from "@/components/afina/afina-contact-form";
import styles from "@/components/afina/afina.module.css";

export const metadata: Metadata = {
  title: "Afina | Capacitación y desarrollo de equipos | Expándete Más",
  description: "Desarrolla el potencial de tu equipo con Afina. Capacitación práctica en ventas, experiencia del cliente, comunicación y liderazgo, adaptada a tu empresa.",
};

function WhatsAppButton({ children, message }: { children: React.ReactNode; message?: string }) {
  return <a className={styles.whatsappButton} href={afinaWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer"><AfinaIcon name="whatsapp" /><span>{children}</span><ArrowIcon /></a>;
}

export default function AfinaPage() {
  return (
    <main id="contenido">
      <section className={styles.hero} aria-labelledby="afina-title">
        <div className={`page-container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}><span />Afina · Capacitación y desarrollo</p>
            <h1 id="afina-title">Tu equipo tiene <span>potencial.</span><br />Ayúdalo a dar lo mejor.</h1>
            <p className={styles.heroDescription}>Perfeccionamos habilidades.<br className="sm:hidden" /> Elevamos el desempeño.</p>
            <div className={styles.heroActions}>
              <a href="#solicitar-informacion" className={styles.primaryButton}>Enviar información <ArrowIcon /></a>
              <a href="#capacitaciones" className={styles.secondaryButton}>Conocer capacitaciones <ArrowIcon /></a>
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <Image src={afinaImages.hero} alt="Facilitador compartiendo una capacitación práctica con un equipo de profesionales" fill preload sizes="(max-width: 767px) 87vw, 40vw" />
            <div className={styles.heroPhotoLabel}><span className={styles.liveDot} />Aprender. Aplicar. Crecer.</div>
          </div>
        </div>
      </section>

      <section id="capacitaciones" className={`light-pattern ${styles.programs}`} aria-labelledby="programs-title">
        <div className="section-container">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Habilidades que impulsan a tu equipo</p>
            <h2 id="programs-title">Programas de <span>formación</span></h2>
            <p>Desarrollamos las habilidades que tu equipo necesita.</p>
          </div>
          <div className={styles.programGrid}>
            {afinaPrograms.map((program) => (
              <article key={program.id} className={styles.programCard}>
                <div className={styles.programPhoto}><Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 539px) 92vw, (max-width: 1023px) 45vw, 23vw" /></div>
                <div className={styles.programCopy}>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className={styles.programTags}><span>{program.category}</span><small>{program.benefit}</small></div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.centeredContact}>
            <WhatsAppButton>Cotizar por WhatsApp</WhatsAppButton>
            <p>Te asesoramos sobre el programa ideal para tu equipo en minutos.</p>
          </div>
        </div>
      </section>

      <section className={styles.methodology} aria-labelledby="methodology-title">
        <div className="section-container">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Nuestra metodología</p>
            <h2 id="methodology-title">De la formación a la <span>práctica.</span></h2>
          </div>
          <ol className={styles.stepsGrid}>
            {afinaSteps.map((step, index) => (
              <li key={step.title} className={styles.stepCard}>
                <div className={styles.stepTop}><span>{String(index + 1).padStart(2, "0")}</span><small>Paso {index + 1}</small></div>
                <h3>{step.title}</h3><p>{step.description}</p>
                <div className={styles.stepOutcome}><AfinaIcon name="check" />{step.outcome}</div>
              </li>
            ))}
          </ol>
          <div className={styles.centeredContact}>
            <p className={styles.methodPromise}><span className={styles.liveDot} />Equipos más preparados. Mejores resultados.</p>
            <WhatsAppButton message="Hola, me gustaría conocer la metodología de Afina y diseñar un plan de formación para mi equipo.">Consultar metodología por WhatsApp</WhatsAppButton>
            <p>Diseñamos el plan de formación adaptado a la dinámica de tu negocio.</p>
          </div>
        </div>
      </section>

      <section id="solicitar-informacion" className={`light-pattern ${styles.contact}`} aria-labelledby="afina-contact-title">
        <div className={`page-container ${styles.contactGrid}`}>
          <div>
            <div className={styles.contactHeading}>
              <h2 id="afina-contact-title">¿Qué habilidad necesita <span>fortalecer tu equipo?</span></h2>
              <p>Definamos juntos la capacitación y el acompañamiento que tu equipo necesita.</p>
            </div>
            <AfinaContactForm />
          </div>
          <div className={styles.contactAside}>
            <div className={styles.contactPhoto}>
              <Image src={afinaImages.accompaniment} alt="Participantes aplicando lo aprendido durante un taller práctico" fill sizes="(max-width: 767px) 87vw, 34vw" />
              <p><AfinaIcon name="check" />Acompañamiento personalizado para tu empresa</p>
            </div>
            <div className={styles.proposal}>
              <div className={styles.proposalHeading}><span><AfinaIcon name="whatsapp" /></span><div><h3>Lo que incluye tu propuesta personalizada</h3><p>Sin compromisos de contratación.</p></div></div>
              <ul>{afinaProposal.map((item) => <li key={item.title}><span><AfinaIcon name={item.icon} /></span><div><h4>{item.title}</h4><p>{item.description}</p></div></li>)}</ul>
              <div className={styles.proposalHighlight}><strong>A tu medida.</strong><p>Formación que se adapta a tu equipo, tus retos y tus objetivos.</p></div>
              <p className={styles.proposalNote}><AfinaIcon name="check" />Formación práctica · Acompañamiento cercano</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
