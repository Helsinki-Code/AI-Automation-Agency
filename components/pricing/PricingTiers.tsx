
"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses starting their AI journey",
    price: "Custom",
    period: "Based on scope",
    features: [
      "Basic AI automation setup",
      "Simple chatbot integration",
      "Email support",
      "Basic analytics dashboard",
      "1 month support included",
      "Small-scale deployment"
    ],
    limitations: ["Limited to 1,000 monthly interactions", "Basic customization options"],
    cta: "Get Started",
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    icon: Star,
    description: "Ideal for growing businesses with advanced AI needs",
    price: "Custom",
    period: "Tailored to requirements",
    features: [
      "Advanced AI agent development",
      "Multi-channel automation",
      "Priority support",
      "Advanced analytics & insights",
      "3 months support included",
      "Custom integrations",
      "Performance optimization",
      "Training sessions included"
    ],
    limitations: ["Setup time: 2-4 weeks"],
    cta: "Most Popular",
    popular: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    icon: Crown,
    description: "Complete AI transformation for large organizations",
    price: "Custom",
    period: "Enterprise agreement",
    features: [
      "Full AI ecosystem development",
      "Dedicated AI research team",
      "24/7 premium support",
      "Advanced security features",
      "6+ months ongoing support",
      "Custom model training",
      "White-label solutions",
      "Dedicated account manager",
      "SLA guarantees",
      "On-premise deployment options"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-amber-500 to-orange-500"
  }
];

export function PricingTiers() {
  return (
    <section className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every project is unique. Our pricing is tailored to your specific needs, ensuring you get maximum value from your AI investment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-50 blur animate-pulse" />
              )}
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/50">
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${tier.gradient} bg-opacity-20`}>
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                </div>

                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{tier.period}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}

                  {tier.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 border border-gray-500 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
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
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored AI solution that fits your budget and goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
