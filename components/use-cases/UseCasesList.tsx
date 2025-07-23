
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, ShoppingCart, HeartHandshake, DollarSign, Car, Factory, GraduationCap, Shield } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    icon: Building2,
    industry: "Financial Services",
    title: "Automated Fraud Detection & Risk Assessment",
    description: "Real-time transaction monitoring and risk scoring that reduced fraud losses by 94% for a major bank.",
    results: [
      "94% reduction in fraud losses",
      "85% faster decision making",
      "99.7% accuracy in risk scoring",
      "$12M annual savings"
    ],
    gradient: "from-blue-500 to-cyan-500",
    case: "A leading European bank implemented our AI fraud detection system processing 10M+ transactions daily, identifying suspicious patterns in real-time and reducing manual review by 90%."
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    title: "Intelligent Customer Support & Personalization",
    description: "AI-powered chatbots and recommendation engines that increased sales by 180% and reduced support costs by 75%.",
    results: [
      "180% increase in conversion rates",
      "75% reduction in support costs",
      "95% customer satisfaction score",
      "24/7 multilingual support"
    ],
    gradient: "from-purple-500 to-pink-500",
    case: "Global fashion retailer deployed our AI system handling 50K+ customer queries daily, providing personalized recommendations and reducing response time from hours to seconds."
  },
  {
    icon: HeartHandshake,
    industry: "Healthcare",
    title: "Predictive Patient Care & Drug Discovery",
    description: "AI systems for early disease detection and accelerated pharmaceutical research, improving patient outcomes by 65%.",
    results: [
      "65% improvement in early detection",
      "40% faster drug discovery",
      "90% reduction in diagnostic errors",
      "3x faster clinical trials"
    ],
    gradient: "from-green-500 to-emerald-500",
    case: "Leading hospital network uses our AI for radiology analysis, predicting patient deterioration 6 hours before traditional methods, preventing 2,500+ emergency interventions annually."
  },
  {
    icon: Factory,
    industry: "Manufacturing",
    title: "Predictive Maintenance & Quality Control",
    description: "IoT-integrated AI systems that eliminated 98% of unplanned downtime and improved product quality by 45%.",
    results: [
      "98% reduction in unplanned downtime",
      "45% improvement in product quality",
      "60% lower maintenance costs",
      "$8M annual operational savings"
    ],
    gradient: "from-orange-500 to-red-500",
    case: "Automotive manufacturer implemented our predictive maintenance AI across 15 facilities, monitoring 10,000+ sensors and preventing critical equipment failures through early intervention."
  },
  {
    icon: Car,
    industry: "Transportation",
    title: "Route Optimization & Fleet Management",
    description: "AI-driven logistics optimization reducing fuel costs by 35% and improving delivery times by 50%.",
    results: [
      "35% reduction in fuel costs",
      "50% faster delivery times",
      "92% on-time delivery rate",
      "25% increase in fleet utilization"
    ],
    gradient: "from-indigo-500 to-purple-500",
    case: "International logistics company optimized 5,000+ delivery routes daily using our AI, reducing carbon emissions by 40% while improving customer satisfaction scores to 98%."
  },
  {
    icon: GraduationCap,
    industry: "Education",
    title: "Personalized Learning & Assessment",
    description: "Adaptive AI tutoring systems that improved student performance by 78% and engagement by 85%.",
    results: [
      "78% improvement in test scores",
      "85% increase in engagement",
      "95% completion rates",
      "60% reduction in dropout rates"
    ],
    gradient: "from-teal-500 to-blue-500",
    case: "University system deployed our AI tutoring platform for 50,000+ students, providing personalized learning paths and real-time feedback, improving graduation rates by 23%."
  }
];

export function UseCasesList() {
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
            Industry Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how our AI solutions transform businesses across industries, 
            delivering measurable results and competitive advantages.
          </p>
        </motion.div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 rounded-3xl p-8 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-medium uppercase tracking-wide">
                          {useCase.industry}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {useCase.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
                      <h4 className="text-white font-semibold mb-4">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {useCase.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <Button
                        className={`group bg-gradient-to-r ${useCase.gradient} hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105`}
                      >
                        Get Similar Results
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Case Study */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl p-6 border border-purple-500/20">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-400" />
                        Case Study
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {useCase.case}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already benefiting from our AI solutions. 
              Let's discuss your specific use case and build a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
