
import { AboutHero } from "@/components/about/AboutHero";
import { AboutVision } from "@/components/about/AboutVision";
import { MissionVision } from "@/components/about/MissionVision";
import { AboutApproach } from "@/components/about/AboutApproach";
import { Team } from "@/components/about/Team";
import { Timeline } from "@/components/about/Timeline";
import { SocialProof } from "@/components/about/SocialProof";
import { AboutPartnerships } from "@/components/about/AboutPartnerships";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutVision />
      <MissionVision />
      <AboutApproach />
      <Team />
      <Timeline />
      <SocialProof />
      <AboutPartnerships />
      <AboutCTA />
    </div>
  );
}
