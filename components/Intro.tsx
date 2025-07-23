"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          What is Agentic AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400"
        >
          Agentic AI represents a paradigm shift from traditional AI. Instead of just performing tasks, agentic systems are autonomous, capable of reasoning, planning, and executing complex workflows to achieve high-level goals. They are the next evolution of artificial intelligence, designed to operate independently and intelligently.
        </motion.p>
      </div>
    </section>
  );
}
