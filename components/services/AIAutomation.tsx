"use client";

import { motion } from "framer-motion";
import {
  Book,
  Heart,
  Briefcase,
  GraduationCap,
  Building,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Documentation & Training",
    description: "User Training, Enterprise AI Governance, and Technical Documentation.",
    icon: Book,
  },
  {
    title: "AI for Specific Industries",
    description: "Healthcare, Finance, Retail, Legal, Real Estate, and Education.",
    icon: Heart,
  },
  {
    title: "AI Productization",
    description: "AI SaaS MVPs, White-label Solutions, and Custom Copilot Workflows.",
    icon: Briefcase,
  },
  {
    title: "Agentic AI Services (2025+)",
    description: "Multi-Agent AI Systems, Autonomous AI Agents, and AI + API Orchestration.",
    icon: GraduationCap,
  },
];

export function AIAutomation() {
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
          Our AI Automation Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href="/services/ai-automation">
                <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}