import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";

export default function PricingPage() {
  return (
    <main className="pt-20">
      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}






























































































































































































































































import { Metadata } from 'next';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingTiers } from '@/components/pricing/PricingTiers';
import { ComparisonTable } from '@/components/pricing/ComparisonTable';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { PricingCTA } from '@/components/pricing/PricingCTA';

export const metadata: Metadata = {
  title: 'Pricing - Transparent AI Automation Solutions | Agentic-AI Ltd',
  description: 'Explore our transparent pricing for AI automation, custom development, and consulting services. Start with a free consultation.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A]">
      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
}
