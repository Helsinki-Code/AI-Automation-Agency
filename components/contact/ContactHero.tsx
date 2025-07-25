"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, MapPin, Clock, Users, ArrowRight, Sparkles, Calendar } from "lucide-react";
import { companyInfo } from "@/data/company";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our AI experts",
    action: companyInfo.phone,
    gradient: "from-green-600 to-emerald-600",
    onClick: () => window.open(`tel:${companyInfo.phone}`),
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed responses to your queries",
    action: `mailto:${companyInfo.email}`,
    gradient: "from-blue-600 to-cyan-600",
    onClick: () => window.open(`mailto:${companyInfo.email}`),
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a consultation that fits your schedule",
    action: "/contact#meeting",
    gradient: "from-purple-600 to-pink-600",
    onClick: () => {
      document.getElementById('meeting')?.scrollIntoView({ behavior: 'smooth' });
    },
  },
];

export function ContactHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how AI can revolutionize your operations. Our experts are ready 
              to provide personalized solutions for your unique challenges.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { icon: Users, number: "500+", label: "Projects" },
                { icon: Clock, number: "24/7", label: "Support" },
                { icon: MapPin, number: "50+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 hover:border-purple-400 bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative cursor-pointer"
                  onClick={method.onClick}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 rounded-2xl p-6 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {method.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                      {method.description}
                    </p>

                    <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      {method.action} →
                    </div>
                  </div>
                </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center"
            >
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Emergency AI Support
              </h3>
              <p className="text-gray-400 mb-4">
                Critical issues? Our emergency response team is available 24/7 for enterprise clients.
              </p>
              <div className="text-purple-400 font-semibold">
                +1 (555) AI-EMERGENCY
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}