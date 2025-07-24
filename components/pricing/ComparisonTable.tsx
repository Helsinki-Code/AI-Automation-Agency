
"use client";

import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

const comparisonData = {
  features: [
    {
      category: "AI Agent Development",
      items: [
        "Custom AI Agent Creation",
        "Multi-Agent Orchestration",
        "Conversation Flow Design",
        "Integration with Existing Systems",
        "Agent Performance Optimization"
      ]
    },
    {
      category: "Technical Implementation",
      items: [
        "Model Fine-tuning",
        "Vector Database Setup",
        "API Development",
        "Cloud Infrastructure Setup",
        "Security Implementation"
      ]
    },
    {
      category: "Support & Maintenance",
      items: [
        "Initial Training & Onboarding",
        "Ongoing Technical Support",
        "Performance Monitoring",
        "Regular Updates & Improvements",
        "24/7 System Monitoring"
      ]
    },
    {
      category: "Business Value",
      items: [
        "ROI Analysis & Reporting",
        "Process Optimization Consulting",
        "Scalability Planning",
        "Change Management Support",
        "Success Metrics Tracking"
      ]
    }
  ],
  tiers: [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      highlight: false,
      features: {
        "Custom AI Agent Creation": "limited",
        "Multi-Agent Orchestration": false,
        "Conversation Flow Design": "basic",
        "Integration with Existing Systems": "basic",
        "Agent Performance Optimization": "basic",
        "Model Fine-tuning": false,
        "Vector Database Setup": "basic",
        "API Development": "basic",
        "Cloud Infrastructure Setup": "basic",
        "Security Implementation": "basic",
        "Initial Training & Onboarding": true,
        "Ongoing Technical Support": "email",
        "Performance Monitoring": "basic",
        "Regular Updates & Improvements": "quarterly",
        "24/7 System Monitoring": false,
        "ROI Analysis & Reporting": "basic",
        "Process Optimization Consulting": false,
        "Scalability Planning": false,
        "Change Management Support": false,
        "Success Metrics Tracking": "basic"
      }
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      highlight: true,
      features: {
        "Custom AI Agent Creation": true,
        "Multi-Agent Orchestration": "basic",
        "Conversation Flow Design": true,
        "Integration with Existing Systems": true,
        "Agent Performance Optimization": true,
        "Model Fine-tuning": "basic",
        "Vector Database Setup": true,
        "API Development": true,
        "Cloud Infrastructure Setup": true,
        "Security Implementation": true,
        "Initial Training & Onboarding": true,
        "Ongoing Technical Support": "priority",
        "Performance Monitoring": true,
        "Regular Updates & Improvements": "monthly",
        "24/7 System Monitoring": "basic",
        "ROI Analysis & Reporting": true,
        "Process Optimization Consulting": "basic",
        "Scalability Planning": "basic",
        "Change Management Support": "basic",
        "Success Metrics Tracking": true
      }
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      highlight: false,
      features: {
        "Custom AI Agent Creation": "advanced",
        "Multi-Agent Orchestration": true,
        "Conversation Flow Design": "advanced",
        "Integration with Existing Systems": "advanced",
        "Agent Performance Optimization": "advanced",
        "Model Fine-tuning": true,
        "Vector Database Setup": "advanced",
        "API Development": "advanced",
        "Cloud Infrastructure Setup": "advanced",
        "Security Implementation": "enterprise",
        "Initial Training & Onboarding": "comprehensive",
        "Ongoing Technical Support": "dedicated",
        "Performance Monitoring": "advanced",
        "Regular Updates & Improvements": "continuous",
        "24/7 System Monitoring": true,
        "ROI Analysis & Reporting": "comprehensive",
        "Process Optimization Consulting": true,
        "Scalability Planning": true,
        "Change Management Support": true,
        "Success Metrics Tracking": "advanced"
      }
    }
  ]
};

const renderFeatureCell = (value: any) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-400 mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-gray-500 mx-auto" />;
  }
  if (typeof value === "string") {
    return (
      <span className={`text-sm px-2 py-1 rounded-full capitalize ${
        value === "advanced" || value === "comprehensive" || value === "enterprise"
          ? "bg-purple-500/20 text-purple-300"
          : value === "basic" || value === "limited"
          ? "bg-blue-500/20 text-blue-300"
          : "bg-gray-500/20 text-gray-300"
      }`}>
        {value}
      </span>
    );
  }
  return null;
};

export function ComparisonTable() {
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
            Compare Service Tiers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect level of AI implementation support for your organization's needs and growth stage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="col-span-1"></div>
              {comparisonData.tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative group ${tier.highlight ? 'transform scale-105' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  <div className={`dark-card p-6 rounded-2xl text-center ${
                    tier.highlight 
                      ? 'border-2 border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-pink-900/20' 
                      : ''
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <a
                      href="/contact"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                        tier.highlight
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                          : 'border border-white/20 text-white hover:bg-white/5'
                      }`}
                    >
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Categories */}
            {comparisonData.features.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-8"
              >
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="col-span-1">
                    <h4 className="text-lg font-semibold text-white mb-4 sticky top-4">
                      {category.category}
                    </h4>
                  </div>
                  <div className="col-span-3"></div>
                </div>

                {category.items.map((item, itemIndex) => (
                  <div key={item} className="grid grid-cols-4 gap-4 py-3 border-b border-white/5">
                    <div className="col-span-1">
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                    {comparisonData.tiers.map((tier) => (
                      <div key={`${item}-${tier.name}`} className="flex justify-center items-center">
                        {renderFeatureCell(tier.features[item as keyof typeof tier.features])}
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? We create bespoke AI implementations tailored to your unique requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-3 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span>Discuss Custom Requirements</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
