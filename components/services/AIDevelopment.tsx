
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Layers, GitBranch, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";

const developmentServices = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your specific data and business objectives.",
    features: ["Deep Learning", "NLP Processing", "Computer Vision", "Predictive Analytics"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "AI Application Development",
    description: "Full-stack AI applications with modern interfaces and robust backends.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Integration"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    title: "AI Platform Integration",
    description: "Seamlessly integrate AI capabilities into your existing technology stack.",
    features: ["API Integration", "Database Connection", "Workflow Automation", "Real-time Processing"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GitBranch,
    title: "MLOps & Deployment",
    description: "End-to-end machine learning operations for scalable AI solutions.",
    features: ["Model Deployment", "Version Control", "Monitoring", "Continuous Integration"],
    gradient: "from-orange-500 to-red-500",
  },
];

const technologies = [
  { name: "TensorFlow", category: "ML Framework" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "OpenAI GPT", category: "Language Models" },
  { name: "LangChain", category: "AI Framework" },
  { name: "Hugging Face", category: "Model Hub" },
  { name: "AWS SageMaker", category: "Cloud ML" },
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Orchestration" },
];

export function AIDevelopment() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B3A] to-[#120B2E]" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl"
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
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Custom AI Development</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Build Intelligent Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              From Concept to Production
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our expert development team creates custom AI solutions that perfectly align with your 
            business goals, using cutting-edge technologies and industry best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {developmentServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center relative`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-30`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
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
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We leverage the latest AI frameworks, cloud platforms, and development tools 
              to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-400/40 rounded-xl p-6 text-center transition-all duration-300">
                  <div className="text-white font-semibold mb-2">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation from discovery to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and defining the AI strategy" },
              { step: "02", title: "Design", description: "Architecting the solution and choosing the right technologies" },
              { step: "03", title: "Development", description: "Building and training your custom AI models" },
              { step: "04", title: "Deployment", description: "Launching to production with monitoring and support" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{phase.title}</h4>
                <p className="text-gray-400">{phase.description}</p>
                
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Start Your AI Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
