"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "Heritage Community Bank",
    title: "Transforming Loan Processing with a Multi-Agent AI System",
    summary: "An autonomous multi-agent AI system reduced loan processing time by 86%, saved $2.4M annually, and delivered a 340% ROI in 18 months.",
    tags: ["Finance", "Loan Processing", "Automation"],
    stats: [
      { label: "Processing Time Reduction", value: "86%" },
      { label: "Annual Cost Savings", value: "$2.4M" },
      { label: "ROI (18 months)", value: "340%" },
    ],
  },
];

export function CaseStudyList() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <p className="text-purple-400 font-semibold mb-2">{study.client}</p>
                <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6">{study.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="bg-gray-700/50 p-4 rounded-lg">
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
