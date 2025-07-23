"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";

const reasons = [
  {
    title: "Expertise in Agentic AI",
    description: "We are pioneers in building and deploying autonomous AI agents that can reason, plan, and execute complex tasks.",
    icon: Award,
  },
  {
    title: "Custom-Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is designed to meet your specific business needs and goals.",
    icon: Users,
  },
  {
    title: "Focus on Tangible Results",
    description: "Our primary goal is to deliver measurable business outcomes, whether it's increased efficiency, reduced costs, or new revenue streams.",
    icon: Zap,
  },
];

export function WhyChooseUs() {
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
          Why Choose Agentic-AI Ltd?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <reason.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
