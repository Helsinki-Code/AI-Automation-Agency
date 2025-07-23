"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$",
    features: [
      "AI Readiness Assessment",
      "Use Case Discovery",
      "High-Level Roadmap",
    ],
  },
  {
    name: "Pro",
    price: "$$",
    features: [
      "Everything in Basic",
      "Detailed AI Roadmap",
      "Vendor Selection Support",
      "PoC Development",
    ],
  },
  {
    name: "Enterprise",
    price: "$$$",
    features: [
      "Everything in Pro",
      "Full Implementation Support",
      "Change Management",
      "Ongoing Advisory",
    ],
  },
];

export function ConsultingTiers() {
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
          Consulting Tiers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold text-purple-400 mb-4">{tier.price}</p>
              <ul className="space-y-2 text-gray-400 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
