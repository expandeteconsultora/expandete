import { businessSystem } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import { ConnectedChannels } from "./connected-channels";
import styles from "./business-system.module.css";

export function BusinessSystem() {
  return (
    <section className={`light-pattern ${styles.system}`} aria-labelledby="business-system-title">
      <div className={`page-container ${styles.overview}`}>
        <div className={styles.copy}>
          <span aria-hidden="true" className={styles.accent} />
          <h2 id="business-system-title">Sistema <span>IMPULSA</span></h2>
          <h3>{businessSystem.title}<br /><span>{businessSystem.highlight}</span></h3>
          <p>{businessSystem.description}</p>
        </div>
        <ConnectedChannels />
      </div>
      <div className="section-container">
        <ol className={styles.stages}>
          {businessSystem.stages.map((stage, index) => (
            <li key={stage.title} className={`${styles.stage} ${index === 3 ? styles.featured : ""}`}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.icons}>
                <BusinessIcon name={stage.icon} />
                {index === 3 && <BusinessIcon name="whatsapp" />}
              </div>
              <h3>{stage.title}</h3>
              {index < businessSystem.stages.length - 1 && <ArrowIcon className={styles.arrow} />}
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.result}>
        <p>Más clientes. Más ventas. <span>Más crecimiento.</span></p>
        <span aria-hidden="true" className={styles.accent} />
      </div>
    </section>
  );
}
