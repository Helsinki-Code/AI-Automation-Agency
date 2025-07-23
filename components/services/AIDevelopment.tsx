"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Eye,
  Mic,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "AI Readiness Assessment, Use Case Discovery, Roadmap Development, and more.",
    icon: BrainCircuit,
  },
  {
    title: "Custom AI Development",
    description: "Machine Learning, NLP, Computer Vision, Speech Recognition, and Chatbots.",
    icon: Bot,
  },
  {
    title: "Generative AI Solutions",
    description: "RAG Pipelines, ChatGPT/Gemini Customization, and Content Generation Tools.",
    icon: Eye,
  },
  {
    title: "AI Integration & Automation",
    description: "CRM/ERP Integration, Workflow Automation, and AI + RPA Solutions.",
    icon: Mic,
  },
  {
    title: "AI Data Services",
    description: "Data Annotation, Synthetic Data Generation, and LLM Fine-Tuning.",
    icon: MessageSquare,
  },
  {
    title: "AI Infrastructure Setup",
    description: "Private LLM Deployment, Cloud AI Setup, and Vector Database Setup.",
    icon: ThumbsUp,
  },
];

export function AIDevelopment() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our AI Development Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <service.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
