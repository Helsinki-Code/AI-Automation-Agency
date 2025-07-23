import { ServicesHero } from "@/components/services/ServicesHero";
import { AIDevelopment } from "@/components/services/AIDevelopment";
import { AIAutomation } from "@/components/services/AIAutomation";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesHero />
      <AIDevelopment />
      <AIAutomation />
      <WhyChooseUs />
      <ServicesCTA />
    </main>
  );
}
