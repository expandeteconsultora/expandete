import Image from "next/image";
import { BusinessIcon } from "./business-icon";
import styles from "./business-system.module.css";

export function ConnectedChannels() {
  return (
    <figure className={styles.visual} aria-label="Sistema IMPULSA: marketing, WhatsApp y CRM conectados para aumentar las ventas">
      <div aria-hidden="true" className={styles.orbit} />
      <div aria-hidden="true" className={styles.leftTools}>
        <span><Image src="/icons/tools/meta.svg" alt="" width={40} height={40} /></span>
        <span className={styles.instagram}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" /></svg></span>
        <span><Image src="/icons/tools/tiktok.svg" alt="" width={40} height={40} /></span>
      </div>
      <div className={styles.laptop} aria-hidden="true">
        <div className={styles.screen}>
          <strong>Sistema<br />IMPULSA</strong>
          <div className={styles.bars}><i /><i /><i /><i /><i /><i /></div>
          <svg className={styles.growth} viewBox="0 0 300 180" fill="none"><path d="M10 160C110 140 190 95 275 15m-29 5 30-7-6 30" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className={styles.base} />
      </div>
      <div className={styles.phone} aria-hidden="true"><span /><Image src="/icons/tools/whatsapp.svg" alt="" width={65} height={65} /></div>
      <div aria-hidden="true" className={styles.rightTools}>
        <span className={styles.google}>G</span>
        <span className={styles.crm}><BusinessIcon name="people" /><b>CRM</b></span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h3l3 12h11l3-9H6M9 10h11M11 6v9m5-9v9" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg></span>
      </div>
    </figure>
  );
}
