"use client";

import { motion } from "framer-motion";

const technologies = [
  "LangChain",
  "AWS Lambda",
  "Retrieval-Augmented Generation (RAG)",
  "Next.js",
  "Vercel",
  "Pinecone",
];

export function Technologies() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Technologies We Use
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 text-white py-2 px-4 rounded-full"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
