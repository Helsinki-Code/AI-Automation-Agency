
"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Shield, TrendingUp, Clock, Users, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Deploy intelligent agents that work 24/7, handling complex tasks with human-like decision making.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Zap,
    title: "Lightning Fast Implementation",
    description: "Get up and running in weeks, not months. Our rapid deployment methodology ensures quick ROI.",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, compliance monitoring, and audit trails.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Solutions that grow with your business. From startup to enterprise, we scale seamlessly.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.4,
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Never miss an opportunity with round-the-clock automated workflows and monitoring.",
    gradient: "from-red-500 to-rose-500",
    delay: 0.5,
  },
  {
    icon: Users,
    title: "Human-AI Collaboration",
    description: "Seamless integration between human expertise and AI capabilities for optimal results.",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.6,
  },
  {
    icon: Brain,
    title: "Advanced Learning",
    description: "Self-improving systems that learn from data and adapt to changing business conditions.",
    gradient: "from-teal-500 to-blue-500",
    delay: 0.7,
  },
  {
    icon: Sparkles,
    title: "Innovation Engine",
    description: "Continuous innovation with cutting-edge AI research applied to real-world challenges.",
    gradient: "from-pink-500 to-violet-500",
    delay: 0.8,
  },
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120B2E] to-[#1A0B3A]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Advanced Capabilities</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Why Choose Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business automation with our comprehensive AI platform
            designed to transform every aspect of your operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-30`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-8 py-6">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 bg-gradient-to-br ${features[i].gradient} rounded-full border-2 border-gray-800`}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ready to transform your business?</div>
              <div className="text-gray-400 text-sm">Join 500+ companies already using our AI solutions</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
