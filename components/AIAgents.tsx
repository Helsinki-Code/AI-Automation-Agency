
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, BarChart3, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const agents = [
  {
    icon: MessageSquare,
    title: "Customer Service Agent",
    description: "24/7 intelligent customer support with natural language processing and sentiment analysis.",
    features: ["Multi-language support", "Sentiment analysis", "Ticket routing", "Knowledge base integration"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Analytics Agent",
    description: "Real-time data analysis and predictive insights to drive business decisions.",
    features: ["Predictive analytics", "Real-time dashboards", "Anomaly detection", "Automated reporting"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Security Agent",
    description: "Proactive threat detection and automated security response systems.",
    features: ["Threat detection", "Automated response", "Compliance monitoring", "Risk assessment"],
    gradient: "from-red-500 to-orange-500",
    delay: 0.3,
  },
  {
    icon: Brain,
    title: "Decision Agent",
    description: "Complex decision-making with machine learning and business rule engines.",
    features: ["Rule-based decisions", "ML recommendations", "Workflow automation", "Process optimization"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.4,
  },
];

const benefits = [
  "Reduce operational costs by up to 60%",
  "Increase productivity by 300%",
  "24/7 autonomous operations",
  "Seamless human-AI collaboration",
  "Scalable across departments",
  "Enterprise-grade security",
];

export function AIAgents() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B3A] to-[#0A051E]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-3xl"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Intelligent Automation</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Empower Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent AI Agents
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionize the way you work with AI agents tailored to your business needs. 
            Automate tasks, enhance customer experiences, and make smarter decisions faster.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: agent.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-br ${agent.gradient} rounded-2xl flex items-center justify-center relative`}
                    >
                      <agent.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} rounded-2xl blur-xl opacity-30`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {agent.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {agent.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    {agent.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: agent.delay + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Transform Your Business Operations
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our AI agents work seamlessly together to create a comprehensive automation ecosystem 
                that adapts to your specific business needs and scales with your growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Interactive Agent Network Visualization */}
              <div className="relative w-full h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                  {/* Central Hub */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Agents */}
                  {agents.map((agent, index) => (
                    <motion.div
                      key={index}
                      animate={{ 
                        rotate: 360,
                        x: [0, 40, 0, -40, 0],
                        y: [0, -30, 0, 30, 0],
                      }}
                      transition={{ 
                        duration: 15 + index * 2, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br ${agent.gradient} rounded-full flex items-center justify-center`}
                      style={{
                        transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateY(-80px) rotate(-${index * 90}deg)`,
                      }}
                    >
                      <agent.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Deploy Your AI Agent Team?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start with a free consultation to discover how our AI agents can transform your specific business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 hover:border-purple-400 bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-300"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
