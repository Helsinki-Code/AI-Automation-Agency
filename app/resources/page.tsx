import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { DeveloperGuides } from "@/components/resources/DeveloperGuides";
import { Downloads } from "@/components/resources/Downloads";
import { Blog } from "@/components/resources/Blog";
import { ResearchReports } from "@/components/resources/ResearchReports";

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      <ResourcesHero />
      <DeveloperGuides />
      <Downloads />
      <Blog />
      <ResearchReports />
    </main>
  );
}
