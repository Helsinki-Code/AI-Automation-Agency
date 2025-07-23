"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Heart, Code } from "lucide-react";

const useCases = [
  {
    title: "Finance",
    description: "Smart underwriting, fraud detection, and autonomous financial advisors.",
    icon: DollarSign,
  },
  {
    title: "Retail",
    description: "Personalized recommendations, automated inventory management, and dynamic pricing.",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare",
    description: "AI-powered diagnostics, patient monitoring, and automated clinical workflows.",
    icon: Heart,
  },
  {
    title: "Engineering",
    description: "Autonomous code generation, intelligent testing, and self-healing infrastructure.",
    icon: Code,
  },
];

export function UseCases() {
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
          Highlighted Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
