import { businessSteps } from "@/data/business-growth";
import { BusinessIcon } from "./business-icon";
import styles from "./business-growth.module.css";

export function BusinessProcess() {
  return (
    <section id="como-trabajamos" className={styles.process} aria-labelledby="business-process-title">
      <div className="page-container">
        <div className={styles.processHeading}>
          <p className={styles.eyebrow}>Así trabajamos</p>
          <h2 id="business-process-title">Un proceso claro, <span>enfocado en resultados.</span></h2>
        </div>
        <ol className={styles.processGrid}>
          {businessSteps.map((step, index) => (
            <li key={step.title} className={styles.processStep}>
              <span className={styles.processNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <BusinessIcon name={step.icon} />
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
