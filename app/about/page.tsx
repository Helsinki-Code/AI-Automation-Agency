import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { WhatIsAgenticAI } from "@/components/about/WhatIsAgenticAI";
import { Team } from "@/components/about/Team";
import { Timeline } from "@/components/about/Timeline";
import { SocialProof } from "@/components/about/SocialProof";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <MissionVision />
      <WhatIsAgenticAI />
      <Team />
      <Timeline />
      <SocialProof />
    </main>
  );
}
