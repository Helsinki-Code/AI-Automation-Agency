"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Agentic-AI Ltd was founded with the vision of revolutionizing industries through autonomous AI.",
  },
  {
    year: "2024",
    title: "First Major Client",
    description: "Secured our first enterprise client in the finance sector, implementing a custom fraud detection system.",
  },
  {
    year: "2025",
    title: "Expansion into Healthcare",
    description: "Launched our first healthcare solution, an AI-powered diagnostic tool for medical imaging.",
  },
];

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-8 flex items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2"></div>
              <div className="w-1/2 px-4">
                <div className={`text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <p className="text-purple-400 font-bold">{event.year}</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
