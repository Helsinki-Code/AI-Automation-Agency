"use client";

import { motion } from "framer-motion";

export function Comparison() {
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
          Comparison with Traditional AI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Traditional AI (e.g., LLMs)</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Reactive: Responds to specific inputs or prompts.</li>
              <li>Stateless: Lacks memory of past interactions.</li>
              <li>Task-Specific: Trained for a narrow set of tasks.</li>
              <li>Human-in-the-loop: Requires constant human guidance.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Agentic AI</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Proactive: Initiates actions to achieve goals.</li>
              <li>Stateful: Maintains memory and context over time.</li>
              <li>General-Purpose: Can tackle a wide range of complex tasks.</li>
              <li>Autonomous: Operates independently with minimal human intervention.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
