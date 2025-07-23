"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const downloads = [
  {
    title: "Building Your First AI Agent: A Complete Beginner's Guide",
    description: "A comprehensive tutorial to guide you through building your first intelligent agent from scratch.",
    icon: FileText,
    link: "/resources/building-first-ai-agent",
  },
  {
    title: "AI Cost Optimization Strategies: A Comprehensive Guide",
    description: "Actionable strategies, tools, and frameworks to optimize AI costs.",
    icon: FileText,
    link: "/resources/ai-cost-optimization",
  },
  {
    title: "Enterprise RAG Implementation Guide",
    description: "A guide for enterprise architects, data scientists, and engineering teams to successfully deploy production-ready RAG systems.",
    icon: FileText,
    link: "/resources/enterprise-rag-implementation",
  },
  {
    title: "AI Governance Checklist & Templates",
    description: "A comprehensive toolkit for responsible AI implementation.",
    icon: FileText,
    link: "/resources/ai-governance-checklist",
  },
];

export function Downloads() {
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
          Downloads
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((download, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <download.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{download.title}</h3>
              <p className="text-gray-400 mb-4">{download.description}</p>
              <a href={download.link} className="inline-flex items-center text-purple-400 hover:underline">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
