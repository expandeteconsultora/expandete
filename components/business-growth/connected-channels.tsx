import Image from "next/image";
import { BusinessIcon } from "./business-icon";
import styles from "./business-growth.module.css";

// Ilustración en HTML/CSS: se adapta al ancho sin añadir imágenes grandes.
export function ConnectedChannels() {
  return (
    <figure className={styles.channelsFigure} aria-label="Publicidad, páginas web y WhatsApp conectados en un mismo sistema">
      <div className={styles.channelBrands} aria-hidden="true">
        <Image src="/icons/tools/meta.svg" alt="" width={28} height={28} />
        <Image src="/icons/tools/google-ads.svg" alt="" width={28} height={28} />
        <Image src="/icons/tools/whatsapp.svg" alt="" width={28} height={28} />
      </div>
      <div className={styles.devices} aria-hidden="true">
        <div className={`${styles.browserDevice} ${styles.adDevice}`}>
          <div className={styles.browserBar}><i /><i /><i /></div>
          <div className={styles.adScreen}>
            <p>EXPÁNDETE<span>+</span></p>
            <strong>Tu negocio también puede <span>crecer.</span></strong>
            <div className={styles.adImage}><Image src="/images/marketing.webp" alt="" fill sizes="220px" /></div>
            <span className={styles.miniButton}>Más información <BusinessIcon name="trend" /></span>
          </div>
          <div className={styles.laptopBase} />
        </div>
        <div className={`${styles.browserDevice} ${styles.webDevice}`}>
          <div className={styles.browserBar}><i /><i /><i /></div>
          <div className={styles.webScreen}>
            <span className={styles.miniBrand}>expándete<span>+</span></span>
            <strong>Soluciones<br />para tu negocio</strong>
            <p>Conectamos ideas con oportunidades.</p>
            <span className={styles.miniButton}>Contáctanos</span>
            <div className={styles.miniChart}><i /><i /><i /><i /><BusinessIcon name="trend" /></div>
          </div>
          <div className={styles.laptopBase} />
        </div>
        <div className={styles.phoneDevice}>
          <div className={styles.phoneNotch} />
          <div className={styles.chatHeader}><BusinessIcon name="whatsapp" /><span>Tu empresa<small>En línea</small></span></div>
          <div className={styles.chatBody}>
            <p>Hola, estoy interesado en sus servicios. ¿Podrían darme más información?</p>
            <p>¡Hola! Con gusto te ayudamos.<BusinessIcon name="check" /></p>
          </div>
          <span className={styles.chatInput}>Escribe un mensaje <BusinessIcon name="cursor" /></span>
        </div>
      </div>
      <figcaption>Publicidad + contenido + web + WhatsApp</figcaption>
    </figure>
  );
}
