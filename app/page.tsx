import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Workflow } from "@/components/Workflow";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Intro />
      <Workflow />
      <UseCases />
      <Testimonials />
    </main>
  );
}
