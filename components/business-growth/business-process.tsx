import Image from "next/image";
import { businessSteps } from "@/data/business-growth";
import styles from "./business-growth.module.css";

export function BusinessProcess() {
  return (
    <section className={styles.process} aria-labelledby="business-process-title">
      <div className="section-container">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Así trabajamos</p>
          <h2 id="business-process-title">Cada empresa <span>es diferente.</span></h2>
          <p>Por eso, adaptamos nuestra estrategia y herramientas de manera personalizada a tus objetivos comerciales.</p>
        </div>
        <ol className={styles.processGrid}>
          {businessSteps.map((step, index) => (
            <li key={step.title} className={styles.processCard}>
              <div className={styles.processPhoto}>
                <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 767px) 82vw, (max-width: 1440px) 27vw, 390px" />
              </div>
              <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title} <span>{step.highlight}</span></h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
