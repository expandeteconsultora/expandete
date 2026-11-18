import { SocialAdsVideos } from "@/components/courses/social-ads-videos";
import { businessCreativeVideos } from "@/data/business-growth";
import styles from "./business-creativity.module.css";

export function BusinessCreativity() {
  return (
    <section id="creatividad" className={styles.section} aria-labelledby="creativity-title">
      <div className="page-container">
        <h2 id="creativity-title" className={styles.title}>LA CREATIVIDAD DETRÁS DE CADA MARCA</h2>
        <SocialAdsVideos videos={businessCreativeVideos} id="videos-de-marcas" ariaLabel="Videos publicitarios de nuestras marcas" caption="Producción audiovisual" actionLabel="Ver video publicitario" />
      </div>
    </section>
  );
}
