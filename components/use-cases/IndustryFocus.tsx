
"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, HeartHandshake, Factory, Car, GraduationCap, Banknote, Zap } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    description: "Fraud detection, risk assessment, algorithmic trading",
    implementations: "250+ banks worldwide"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Personalization, inventory optimization, demand forecasting",
    implementations: "180+ retailers"
  },
  {
    icon: HeartHandshake,
    name: "Healthcare",
    description: "Diagnostic imaging, drug discovery, patient monitoring",
    implementations: "95+ healthcare systems"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, supply chain",
    implementations: "120+ facilities"
  },
  {
    icon: Car,
    name: "Transportation",
    description: "Route optimization, fleet management, autonomous systems",
    implementations: "75+ logistics companies"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Adaptive learning, student assessment, curriculum design",
    implementations: "200+ institutions"
  },
  {
    icon: Banknote,
    name: "Insurance",
    description: "Claims processing, risk modeling, underwriting automation",
    implementations: "65+ insurers"
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    description: "Grid optimization, demand prediction, maintenance planning",
    implementations: "40+ utilities"
  }
];

export function IndustryFocus() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A051E] to-[#120B2E]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI solutions are battle-tested across diverse industries, 
            delivering consistent results and measurable ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {industry.description}
                </p>
                
                <div className="text-purple-400 text-xs font-medium">
                  {industry.implementations}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
