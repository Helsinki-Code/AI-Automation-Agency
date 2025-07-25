"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  TrendingUp,
  Settings,
  Users,
  Sparkles,
  HeadphonesIcon
} from "lucide-react";

const benefits = [
  {
    title: "Bespoke AI Solutions",
    description: "Every business is unique, and so are its challenges. Our team of AI experts crafts customized automation and AI solutions that seamlessly integrate with your workflows, empowering you to achieve your goals faster and more efficiently.",
    icon: Brain,
    metric: "100+ Custom Solutions Delivered"
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest advancements in AI, including large language models and automation tools, to deliver state-of-the-art solutions that keep your business ahead of the competition.",
    icon: Sparkles,
    metric: "15+ AI Models Integrated"
  },
  {
    title: "Scalable and Secure",
    description: "Our AI solutions are designed to grow with your business. With a focus on robust security protocols, we ensure your data is protected while enabling seamless scalability as your needs evolve.",
    icon: Shield,
    metric: "99.9% Uptime Guaranteed"
  },
  {
    title: "Real Results, Proven Success",
    description: "From enhancing customer experiences to streamlining operations, our AI-driven strategies have helped businesses reduce costs, improve productivity, and unlock new opportunities for revenue growth.",
    icon: TrendingUp,
    metric: "30% Average Cost Reduction"
  },
  {
    title: "Expert Team You Can Trust",
    description: "With years of experience and a deep understanding of AI, our team is committed to delivering reliable, transparent, and ethical solutions that make a tangible difference.",
    icon: Users,
    metric: "50+ AI Experts"
  },
  {
    title: "End-to-End Support",
    description: "We're with you every step of the way—from strategy and development to implementation and ongoing optimization. Our dedicated support team ensures your AI solutions deliver maximum value and adapt seamlessly to your evolving business needs.",
    icon: HeadphonesIcon,
    metric: "24/7 Support Available"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
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
            Why Choose AI Automation Agency?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driving Innovation, Efficiency, and Growth for Your Business with Tailored AI Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
                <div className="relative dark-card rounded-2xl p-8 h-full transition-all duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-purple-600/10 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <span className="text-sm text-purple-500 font-medium">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-[128px] pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-600/30 rounded-full filter blur-[128px] pointer-events-none" />
      </div>
    </section>
  );
}