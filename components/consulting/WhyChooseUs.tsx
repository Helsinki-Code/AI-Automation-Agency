"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";

const reasons = [
  {
    title: "Deep Expertise",
    description: "Our team consists of leading experts in AI, machine learning, and agentic systems.",
    icon: Award,
  },
  {
    title: "Strategic Partnership",
    description: "We work as an extension of your team, providing strategic guidance and hands-on support.",
    icon: Users,
  },
  {
    title: "Actionable Insights",
    description: "We deliver clear, actionable recommendations that are tailored to your business objectives.",
    icon: Zap,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Why Choose Our Consulting Services?
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
