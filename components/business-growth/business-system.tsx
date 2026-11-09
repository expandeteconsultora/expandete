import Image from "next/image";
import { businessSystem } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import styles from "./business-system.module.css";

export function BusinessSystem() {
  return (
    <section className={styles.system} aria-labelledby="business-system-title">
      <div className={`section-container ${styles.overview}`}>
        <div className={styles.copy}>
          <span aria-hidden="true" className={styles.accent} />
          <h2 id="business-system-title">Sistema <span>IMPULSA</span></h2>
          <p>{businessSystem.description} <strong>{businessSystem.highlight}</strong></p>
        </div>
        <div className={styles.computer}>
          <Image src={businessSystem.image} alt={businessSystem.imageAlt} width={1536} height={1024} sizes="(max-width: 767px) 92vw, 48vw" />
        </div>
      </div>
      <div className={styles.flow}>
        <svg className={styles.topWave} viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true"><path fill="var(--color-brand-green)" d="M0 60C350-80 850 200 1600 5V100H0Z" /><path fill="#edf6ff" d="M0 60C350-80 850 200 1600 28V100H0Z" /></svg>
        <div className="section-container">
          <ol className={styles.stages}>
            {businessSystem.stages.map((stage, index) => (
              <li key={stage.title} className={`${styles.step} ${index === 3 ? styles.branch : ""}`}>
                {"alternatives" in stage ? <>
                  <span className={styles.branchConnector} aria-hidden="true" />
                  <ul className={styles.alternatives}>
                    {stage.alternatives.map((alternative) => <li key={alternative.title} className={`${styles.stage} ${styles.green}`}>
                      <span className={styles.number}>04</span>
                      <BusinessIcon name={alternative.icon} className={styles.icon} />
                      <h3>{alternative.title}</h3>
                    </li>)}
                  </ul>
                </> : <div className={`${styles.stage} ${index % 2 ? styles.green : ""}`}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <BusinessIcon name={stage.icon} className={styles.icon} />
                  <h3>{stage.title}</h3>
                </div>}
                {index < businessSystem.stages.length - 1 && <ArrowIcon className={styles.arrow} />}
              </li>
            ))}
          </ol>
        </div>
        <svg className={styles.bottomWave} viewBox="0 0 1600 100" preserveAspectRatio="none" aria-hidden="true"><path fill="var(--color-brand-green)" d="M0 20C600 180 1050-60 1600 45V100H0Z" /><path fill="#064b9f" d="M0 50C600 180 1050-60 1600 45V100H0Z" /><path fill="#073469" d="M0 50C700 220 1000-30 1600 70V100H0Z" /></svg>
      </div>
    </section>
  );
}
