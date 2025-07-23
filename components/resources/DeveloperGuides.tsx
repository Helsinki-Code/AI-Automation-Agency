
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Database, Cpu, Shield, Zap, GitBranch } from "lucide-react";

const guides = [
  {
    title: "Enterprise RAG Implementation",
    description: "Complete guide to building production-ready Retrieval-Augmented Generation systems for enterprise use.",
    icon: Database,
    difficulty: "Advanced",
    readTime: "45 min",
    link: "/resources/enterprise-rag-implementation",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "AI Cost Optimization Strategies",
    description: "Comprehensive framework for optimizing AI infrastructure costs while maintaining performance.",
    icon: Zap,
    difficulty: "Intermediate",
    readTime: "30 min",
    link: "/resources/ai-cost-optimization",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "Building Your First AI Agent",
    description: "Step-by-step tutorial for creating intelligent agents from concept to deployment.",
    icon: Code,
    difficulty: "Beginner",
    readTime: "25 min",
    link: "/resources/building-first-ai-agent",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Multi-Agent Framework Comparison",
    description: "In-depth analysis of popular frameworks including AutoGen, CrewAI, and LangGraph.",
    icon: GitBranch,
    difficulty: "Intermediate",
    readTime: "35 min",
    link: "/resources/framework-comparison",
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Production Deployment Best Practices",
    description: "Enterprise-grade deployment strategies for AI applications with security and scalability focus.",
    icon: Shield,
    difficulty: "Advanced",
    readTime: "40 min",
    link: "/resources/deployment-best-practices",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "AI Governance & Ethics Framework",
    description: "Practical guide to implementing responsible AI practices in your organization.",
    icon: Cpu,
    difficulty: "Intermediate",
    readTime: "20 min",
    link: "/resources/ethical-ai-framework",
    gradient: "from-teal-600 to-blue-600"
  }
];

export function DeveloperGuides() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Developer Guides
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical guides to help you implement AI solutions with confidence. 
            From beginner tutorials to advanced enterprise patterns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${guide.gradient} rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300`} />
              <Link href={guide.link}>
                <div className="relative dark-card p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${guide.gradient} p-3 flex items-center justify-center`}>
                      <guide.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        guide.difficulty === 'Beginner' 
                          ? 'bg-green-500/20 text-green-300'
                          : guide.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-xs text-gray-400">{guide.readTime}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Read More Indicator */}
                  <div className="mt-6 flex items-center text-sm font-medium text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text group-hover:translate-x-2 transition-transform duration-300">
                    Read Guide →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="dark-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Implementation Support?
            </h3>
            <p className="text-gray-400 mb-6">
              Our expert team can help you implement these patterns in your specific environment 
              with hands-on guidance and custom solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-3 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Get Expert Help</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
