import { businessContact, businessSystem } from "@/data/business-growth";
import { ArrowIcon } from "@/components/ui/icons";
import { BusinessIcon } from "./business-icon";
import { BusinessContactLink } from "./contact-link";
import { ConnectedChannels } from "./connected-channels";
import styles from "./business-growth.module.css";

export function BusinessSystem() {
  return (
    <section className={`light-pattern ${styles.system}`} aria-labelledby="business-system-title">
      <div className={`page-container ${styles.systemOverview}`}>
        <div>
          <p className={styles.eyebrow}>{businessSystem.eyebrow}</p>
          <h2 id="business-system-title" className={styles.sectionTitle}>{businessSystem.title} <span>{businessSystem.highlight}</span></h2>
          <p className={styles.sectionDescription}>{businessSystem.description}</p>
          <BusinessContactLink message={businessContact.systemMessage}>Quiero conocer más</BusinessContactLink>
        </div>
        <ConnectedChannels />
      </div>
      <div className="page-container">
        <ol className={styles.funnelGrid}>
          {businessSystem.stages.map((stage, index) => (
            <li key={stage.title} className={styles.funnelStage}>
              <span className={styles.stageNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <BusinessIcon name={stage.icon} className={styles.stageIcon} />
              <h3>{stage.title}</h3>
              <p className={styles.stageSubtitle}>{stage.subtitle}</p>
              <p>{stage.description}</p>
              {index < businessSystem.stages.length - 1 && <ArrowIcon className={styles.stageArrow} />}
            </li>
          ))}
        </ol>
        <p className={styles.measurement}><BusinessIcon name="chart" />{businessSystem.measurement}</p>
      </div>
    </section>
  );
}
