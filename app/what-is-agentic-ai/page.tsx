import React from "react";
import { Definition } from "@/components/what-is-agentic-ai/Definition";
import { Comparison } from "@/components/what-is-agentic-ai/Comparison";
import { Components } from "@/components/what-is-agentic-ai/Components";
import { Diagrams } from "@/components/what-is-agentic-ai/Diagrams";
import { DeveloperGuideLink } from "@/components/what-is-agentic-ai/DeveloperGuideLink";

export default function WhatIsAgenticAiPage() {
  return (
    <main className="flex-1">
      <Definition />
      <Comparison />
      <Components />
      <Diagrams />
      <DeveloperGuideLink />
    </main>
  );
}
