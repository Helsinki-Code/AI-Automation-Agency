
"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do you determine pricing for custom AI solutions?",
    answer: "Our pricing is based on project complexity, timeline, required resources, and ongoing support needs. We provide detailed quotes after understanding your specific requirements through our consultation process."
  },
  {
    question: "What's included in the implementation timeline?",
    answer: "Each timeline includes discovery, design, development, testing, deployment, and training phases. We provide regular progress updates and maintain transparent communication throughout the entire process."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive post-deployment support including monitoring, optimization, updates, and scaling assistance. Support packages are customized based on your operational requirements."
  },
  {
    question: "Can you work with our existing systems and infrastructure?",
    answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing systems, APIs, databases, and workflows. We conduct thorough compatibility assessments during the planning phase."
  },
  {
    question: "What makes your approach different from other AI agencies?",
    answer: "We focus on practical, production-ready solutions that deliver measurable business value. Our team combines deep technical expertise with industry experience to ensure successful implementations."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We implement enterprise-grade security measures and comply with relevant regulations (GDPR, HIPAA, SOC 2). All solutions include comprehensive security auditing and compliance documentation."
  }
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our AI solutions and implementation process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <div className="relative dark-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-3 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span>Contact Our Team</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
