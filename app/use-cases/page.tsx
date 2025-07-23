
import { Metadata } from "next";
import { UseCasesHero } from "@/components/use-cases/UseCasesHero";
import { UseCasesList } from "@/components/use-cases/UseCasesList";
import { IndustryFocus } from "@/components/use-cases/IndustryFocus";
import { ROICalculator } from "@/components/use-cases/ROICalculator";
import { SuccessMetrics } from "@/components/use-cases/SuccessMetrics";

export const metadata: Metadata = {
  title: "AI Use Cases - Real-World Applications | Agentic AI AMRO Ltd",
  description: "Discover proven AI use cases across industries. See how businesses achieve 95% cost reduction and 10x productivity gains with our AI solutions.",
  keywords: "AI use cases, business automation, AI applications, industry solutions, ROI calculator",
};

export default function UseCasesPage() {
  return (
    <div className="overflow-hidden">
      <UseCasesHero />
      <UseCasesList />
      <IndustryFocus />
      <ROICalculator />
      <SuccessMetrics />
    </div>
  );
}
