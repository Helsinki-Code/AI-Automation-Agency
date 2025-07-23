"use client";

import React from "react";
import { motion } from "framer-motion";

export function Definition() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">What is Agentic AI?</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Definition</h2>
          <p className="text-lg text-gray-400">
            Agentic AI refers to artificial intelligence systems that are autonomous and proactive. Unlike traditional AI models that simply respond to prompts, agentic systems can set their own goals, make plans, and take actions in a persistent and stateful manner to achieve complex objectives. They are designed to operate with a degree of independence, learning and adapting as they go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
