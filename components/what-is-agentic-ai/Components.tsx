"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Bot, Wrench } from "lucide-react";

const components = [
  {
    title: "Agents",
    description: "The core of the system, responsible for decision-making and action.",
    icon: Bot,
  },
  {
    title: "LLMs",
    description: "Large Language Models that provide the reasoning and language understanding capabilities.",
    icon: BrainCircuit,
  },
  {
    title: "Orchestration",
    description: "The framework that manages the interaction between agents, tools, and data.",
    icon: Cpu,
  },
  {
    title: "Tools",
    description: "External APIs and functions that agents can use to interact with the world.",
    icon: Wrench,
  },
];

export function Components() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Core Components
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <component.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{component.title}</h3>
              <p className="text-gray-400">{component.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
