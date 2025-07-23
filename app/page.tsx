
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AIAgents } from "@/components/AIAgents";
import { Solutions } from "@/components/Solutions";
import { Process } from "@/components/Process";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { GetStarted } from "@/components/GetStarted";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <AIAgents />
      <Solutions />
      <Process />
      <WhyChooseUs />
      <UseCases />
      <Testimonials />
      <GetStarted />
    </div>
  );
}
