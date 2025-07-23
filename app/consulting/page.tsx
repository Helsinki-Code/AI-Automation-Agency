import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { WhyChooseUs } from "@/components/consulting/WhyChooseUs";
import { ConsultingTiers } from "@/components/consulting/ConsultingTiers";
import { BookConsultation } from "@/components/consulting/BookConsultation";

export default function ConsultingPage() {
  return (
    <main className="flex-1">
      <ConsultingHero />
      <WhyChooseUs />
      <ConsultingTiers />
      <BookConsultation />
    </main>
  );
}
