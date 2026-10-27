import Image from "next/image";
import { courseLocation, getCourseWhatsappUrl, marketingCourses } from "@/data/marketing-courses";
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

        <div className={styles.locationBanner}>
          <span className={styles.locationHeading}>
            <span className={styles.locationPin} aria-hidden="true">📍</span>
            {courseLocation.name} · {courseLocation.format}
          </span>
          <span className={styles.capacityBadge}>
            Máximo {courseLocation.maxStudents} alumnos por curso
          </span>
        </div>

        <div className={styles.courseGrid + " mt-8 grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1400px]:gap-6"}>
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
                  sizes="(max-width: 639px) 88vw, (max-width: 1099px) 44vw, (max-width: 1636px) 29vw, 464px"
                  preload={index === 0}
                  loading={index > 0 ? "eager" : undefined}
                  className="object-cover transition-transform duration-500"
                />
              </div>
              <div className={styles.courseContent}>
                <div className={styles.courseBadges}>
                  <span className={styles.modalityBadge}>
                    <span aria-hidden="true">📍</span> {course.modality}
                  </span>
                  <span className={styles.levelBadge}>
                    <span aria-hidden="true">🌱</span> Nivel: {course.level}
                  </span>
                </div>
                <h2 className="text-[clamp(20px,1.58vw,26px)] font-bold leading-[1.25] tracking-[-0.025em]">{course.title}</h2>
                <p className={styles.courseDescription}>
                  {course.description}
                </p>
                <span className={styles.courseCta}>
                  <Image src="/icons/tools/whatsapp.svg" alt="" width={19} height={19} unoptimized />
                  Más información
                </span>
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
