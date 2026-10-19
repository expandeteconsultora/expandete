import Image from "next/image";
import { getCourseWhatsappUrl, marketingCourses } from "@/data/marketing-courses";
import styles from "./courses.module.css";

export function CoursesHero() {
  return (
    <section aria-labelledby="courses-title" className={styles.hero}>
      <div className={styles.container}>
        <h1
          id="courses-title"
          className="text-balance text-[clamp(30px,4.55vw,74px)] font-extrabold leading-[1.04] tracking-[-0.035em]"
        >
          Cursos prácticos para
          <span className={styles.greenText + " block"}>emprendedores</span>
        </h1>
        <p className="mx-auto mt-3 max-w-5xl text-pretty text-[clamp(18px,1.95vw,32px)] leading-snug tracking-[-0.02em] text-[#e0ecfa]">
          Videos, inteligencia artificial y publicidad para tu negocio.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 min-[1100px]:grid-cols-4 min-[1400px]:gap-6">
          {marketingCourses.map((course, index) => (
            <a
              key={course.id}
              href={getCourseWhatsappUrl(course.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.courseCard}
              aria-label={`Consultar por WhatsApp: ${course.title}. ${course.modality}. Abre en una nueva pestaña.`}
            >
              <div className={styles.courseImage}>
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="(max-width: 479px) 88vw, (max-width: 1099px) 44vw, (max-width: 1636px) 22vw, 340px"
                  preload={index === 0}
                  loading={index > 0 ? "eager" : undefined}
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-6 pt-1 sm:px-4">
                <h2 className="flex-1 text-[clamp(20px,1.58vw,26px)] font-bold leading-[1.18] tracking-[-0.025em]">
                  {course.titleLines.map((line) => <span key={line} className="block">{line}</span>)}
                </h2>
                <p className="mt-3 text-[clamp(16px,1.22vw,21px)] leading-snug text-[#dfecfa]">
                  {course.modality}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[970px] text-pretty text-[clamp(17px,1.45vw,24px)] leading-[1.4] text-[#dce9f8] lg:mt-9">
          Cursos prácticos para emprendedores que ya utilizan herramientas digitales
          <br className="hidden lg:block" /> y quieren aprovecharlas mejor en sus negocios.
        </p>
      </div>
    </section>
  );
}
