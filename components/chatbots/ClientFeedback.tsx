"use client";

import { motion } from "framer-motion";

export function ClientFeedback() {
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
          Client Feedback
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <p className="text-lg text-gray-400 italic">"The chatbot developed by Agentic-AI has transformed our customer service. It's like having a 24/7 support agent that never sleeps."</p>
          <p className="text-white font-bold mt-4">- CEO of a happy client</p>
        </motion.div>
      </div>
    </section>
  );
}
