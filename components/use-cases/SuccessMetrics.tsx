
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Award, Target, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "847%",
    label: "Average ROI",
    description: "Within 18 months of implementation"
  },
  {
    icon: Clock,
    value: "6.8",
    label: "Months",
    description: "Average payback period"
  },
  {
    icon: Users,
    value: "2.3M+",
    label: "People",
    description: "Empowered by our AI solutions"
  },
  {
    icon: Award,
    value: "99.2%",
    label: "Success Rate",
    description: "Projects delivered on time and budget"
  },
  {
    icon: Target,
    value: "95%",
    label: "Cost Reduction",
    description: "Average operational cost savings"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Uptime",
    description: "Autonomous system availability"
  }
];

export function SuccessMetrics() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B3A] to-[#0A051E]" />
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
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers don't lie. Our AI solutions consistently deliver exceptional results 
            across industries and company sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 rounded-3xl p-8 text-center transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {metric.label}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
