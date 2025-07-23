"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const guides = [
  {
    title: "Enterprise-Grade Production Deployment Best Practices for AI Applications",
    description: "A comprehensive guide to deploying AI applications in production environments.",
    link: "/resources/deployment-best-practices",
  },
  {
    title: "LangChain vs AutoGen vs CrewAI: Comprehensive Framework Comparison Guide",
    description: "An in-depth comparison of the leading AI agent frameworks.",
    link: "/resources/framework-comparison",
  },
  {
    title: "Practical Framework for Ethical AI Implementation",
    description: "An end-to-end framework for operationalizing AI ethics.",
    link: "/resources/ethical-ai-framework",
  },
];

export function DeveloperGuides() {
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
          Developer Guides
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{guide.title}</h3>
              <p className="text-gray-400 mb-4">{guide.description}</p>
              <Link href={guide.link} className="text-purple-400 hover:underline">
                Read Guide
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
