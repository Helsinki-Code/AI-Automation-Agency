"use client";

import { motion } from "framer-motion";

export function ChatbotOverview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Custom Chatbot Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400"
        >
          We build intelligent, conversational chatbots tailored to your industry and business needs. Our chatbots are designed to enhance customer engagement, automate support, and drive sales.
        </motion.p>
      </div>
    </section>
  );
}
