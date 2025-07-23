
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "Heritage Community Bank",
    title: "Transforming Loan Processing with a Multi-Agent AI System",
    summary: "An autonomous multi-agent AI system reduced loan processing time by 86%, saved $2.4M annually, and delivered a 340% ROI in 18 months through intelligent automation and decision-making.",
    industry: "Financial Services",
    clientSize: "Mid-Market",
    projectDuration: "8 months",
    tags: ["Finance", "Loan Processing", "Automation", "Multi-Agent Systems"],
    stats: [
      { label: "Processing Time Reduction", value: "86%", icon: Clock },
      { label: "Annual Cost Savings", value: "$2.4M", icon: DollarSign },
      { label: "ROI (18 months)", value: "340%", icon: TrendingUp },
      { label: "Staff Productivity Increase", value: "75%", icon: Users }
    ],
    challenges: [
      "Manual loan processing taking 15-20 business days",
      "High error rates in document verification",
      "Inconsistent approval criteria application",
      "Limited scalability during peak periods"
    ],
    solutions: [
      "Implemented multi-agent AI system for document processing",
      "Created intelligent routing and prioritization system",
      "Developed automated compliance checking workflows",
      "Built real-time monitoring and analytics dashboard"
    ],
    results: [
      "Reduced average processing time from 18 days to 2.5 days",
      "Decreased manual errors by 94%",
      "Improved customer satisfaction scores by 65%",
      "Enabled processing of 300% more applications with same staff"
    ],
    testimonial: {
      quote: "The AI system has revolutionized our loan processing capabilities. We're now processing loans faster and more accurately than ever before, while our team can focus on customer relationships rather than paperwork.",
      author: "Sarah Mitchell",
      role: "VP of Operations",
      company: "Heritage Community Bank"
    },
    gradient: "from-blue-600 to-purple-600"
  }
];

export function CaseStudyList() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {caseStudies.map((study, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-20"
          >
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Success Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {study.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                {study.summary}
              </p>
            </div>

            {/* Main Case Study Card */}
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${study.gradient} rounded-3xl opacity-20 group-hover:opacity-30 blur transition-all duration-300`} />
              <div className="relative dark-card rounded-3xl overflow-hidden">
                
                {/* Client Info Bar */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span>Industry: {study.industry}</span>
                        <span>•</span>
                        <span>Size: {study.clientSize}</span>
                        <span>•</span>
                        <span>Duration: {study.projectDuration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="p-8 border-b border-white/10">
                  <h4 className="text-xl font-bold text-white mb-6">Key Results</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: statIndex * 0.1 }}
                        className="text-center group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${study.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Challenges */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                        Challenges
                      </h4>
                      <ul className="space-y-3">
                        {study.challenges.map((challenge, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-red-400 mr-2 mt-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                        Solutions
                      </h4>
                      <ul className="space-y-3">
                        {study.solutions.map((solution, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <ArrowRight className="text-blue-400 mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <CheckCircle className="text-green-400 mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-8 bg-gradient-to-r from-white/5 to-transparent border-t border-white/10">
                  <div className="max-w-4xl">
                    <div className="text-6xl text-purple-400 mb-4">"</div>
                    <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                      {study.testimonial.quote}
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{study.testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="dark-card p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Join successful companies who have revolutionized their operations with our AI solutions. 
              Let's discuss how we can achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-4 font-semibold text-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/agentic-ai/agentic-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white border border-white/20 rounded-full px-8 py-4 font-semibold text-lg hover:bg-white/5 transition-all duration-200"
              >
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
