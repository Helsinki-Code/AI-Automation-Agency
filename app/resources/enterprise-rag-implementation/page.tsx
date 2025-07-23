
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Clock, Users, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise RAG Implementation Guide | Agentic AI Resources',
  description: 'Complete guide to implementing Retrieval-Augmented Generation (RAG) systems at enterprise scale with best practices and real-world examples.',
};

export default function ResourcePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back to Resources */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/resources"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </Link>
        </motion.div>

        {/* Resource Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              Implementation Guide
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Enterprise RAG Implementation Guide
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            A comprehensive guide to implementing Retrieval-Augmented Generation (RAG) systems at enterprise scale, featuring best practices, architecture patterns, and real-world case studies.
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>45 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Enterprise Architects</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Advanced Level</span>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-2 font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </motion.header>

        {/* Resource Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What You'll Gain</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Complete RAG architecture blueprints</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Scalability patterns for 10M+ documents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Security and compliance frameworks</span>
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Performance optimization techniques</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Real-world implementation examples</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>ROI measurement frameworks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
              <p className="mb-4">
                Retrieval-Augmented Generation (RAG) represents the next evolution in enterprise AI, combining the power of large language models with your organization's proprietary knowledge base. This guide provides enterprise architects and AI leaders with a comprehensive roadmap for implementing RAG systems that scale.
              </p>
              <p>
                Based on analysis of 200+ enterprise RAG deployments, this guide distills proven patterns, architectural decisions, and implementation strategies that deliver measurable business value.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">RAG Architecture Overview</h2>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Core Components</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Document Processing</h4>
                    <p className="text-sm text-gray-400">Intelligent chunking, embedding generation, and metadata extraction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Vector Store</h4>
                    <p className="text-sm text-gray-400">High-performance similarity search and retrieval optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Generation</h4>
                    <p className="text-sm text-gray-400">Context-aware response generation with source attribution</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Implementation Phases</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Phase 1: Foundation (Weeks 1-4)</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Data audit and quality assessment</li>
                    <li>• Infrastructure provisioning and scaling strategy</li>
                    <li>• Security framework establishment</li>
                    <li>• Pilot use case selection and KPI definition</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Phase 2: Core Implementation (Weeks 5-12)</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Document processing pipeline development</li>
                    <li>• Vector database optimization and indexing</li>
                    <li>• Retrieval algorithm tuning and testing</li>
                    <li>• Generation pipeline integration and validation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Phase 3: Production Deployment (Weeks 13-16)</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Production environment configuration</li>
                    <li>• Monitoring and observability implementation</li>
                    <li>• User training and change management</li>
                    <li>• Performance optimization and scaling</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Critical Success Factors</h2>
              
              <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Considerations</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• <strong>Data Quality:</strong> 80% of RAG performance depends on document quality and preprocessing</li>
                      <li>• <strong>Chunk Strategy:</strong> Optimal chunk size varies by domain (technical: 256-512 tokens, narrative: 1024+ tokens)</li>
                      <li>• <strong>Embedding Models:</strong> Domain-specific fine-tuning improves retrieval accuracy by 25-40%</li>
                      <li>• <strong>Evaluation Framework:</strong> Implement both automated metrics and human evaluation loops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Enterprise Case Studies</h2>
              
              <div className="grid gap-6">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Fortune 500 Financial Services</h3>
                  <p className="text-gray-400 mb-4">
                    Implemented RAG for regulatory compliance documentation, processing 50M+ pages across 12 jurisdictions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">85%</div>
                      <div className="text-sm text-gray-500">Faster Research</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">92%</div>
                      <div className="text-sm text-gray-500">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">$12M</div>
                      <div className="text-sm text-gray-500">Annual Savings</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Global Manufacturing Corporation</h3>
                  <p className="text-gray-400 mb-4">
                    RAG-powered knowledge management for technical documentation and troubleshooting across 200+ facilities.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">70%</div>
                      <div className="text-sm text-gray-500">Reduced Downtime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">45%</div>
                      <div className="text-sm text-gray-500">Faster Resolution</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">$8.5M</div>
                      <div className="text-sm text-gray-500">Cost Avoidance</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">ROI Framework</h2>
              <p className="mb-4">
                Enterprise RAG implementations typically achieve ROI within 6-12 months through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reduced time to access information (60-80% improvement)</li>
                <li>Decreased dependency on subject matter experts</li>
                <li>Improved decision quality through better context</li>
                <li>Accelerated onboarding and training processes</li>
                <li>Enhanced compliance and risk management</li>
              </ul>
            </section>
          </div>
        </motion.article>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement Enterprise RAG?
            </h3>
            <p className="text-gray-400 mb-6">
              Get the complete implementation guide with architecture diagrams, code samples, and step-by-step deployment instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Guide
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center px-6 py-3 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200 border border-white/10"
              >
                Schedule Expert Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
