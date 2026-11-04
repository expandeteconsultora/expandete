import { businessTestimonials } from "@/data/business-growth";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { BusinessScheduleButton } from "./schedule-button";
import styles from "./business-growth.module.css";

export function BusinessTestimonials() {
  return (
    <TestimonialsSection {...businessTestimonials}>
      <div className={styles.testimonialsSchedule}>
        <BusinessScheduleButton variant="outline">Agenda una asesoría</BusinessScheduleButton>
      </div>
    </TestimonialsSection>
  );
}
