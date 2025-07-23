"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reports = [
  {
    title: "Future of Work with AI Agents",
    description: "Implications, Strategies and Frameworks for HR Leaders.",
    link: "/resources/future-of-work",
  },
  {
    title: "Industry AI Adoption Report 2025",
    description: "A comprehensive analysis of AI adoption across industries and regions.",
    link: "/resources/ai-adoption-report",
  },
];

export function ResearchReports() {
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
          Research Reports
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{report.title}</h3>
              <p className="text-gray-400 mb-4">{report.description}</p>
              <Link href={report.link} className="text-purple-400 hover:underline">
                Read Report
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
