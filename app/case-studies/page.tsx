import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudyList } from "@/components/case-studies/CaseStudyList";

export default function CaseStudiesPage() {
  return (
    <main className="flex-1">
      <CaseStudiesHero />
      <CaseStudyList />
    </main>
  );
}
