"use client";

import { motion } from "framer-motion";

export function Workflow() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Animated Agentic AI Workflow
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden"
        >
          {/* Placeholder for an animation or video */}
          <div className="flex items-center justify-center h-full">
            <p className="text-white text-2xl">Animation Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
