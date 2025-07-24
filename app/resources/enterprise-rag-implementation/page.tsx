import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Database, Search, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Enterprise RAG Implementation | Agentic AI AMRO Ltd",
  description: "Complete guide to implementing Retrieval Augmented Generation systems in enterprise environments.",
};

export default function EnterpriseRAGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-6">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Enterprise RAG Implementation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Complete guide to implementing Retrieval Augmented Generation systems in enterprise environments with security, scalability, and governance.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Implementation Guide
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-purple-400" />
              What is Enterprise RAG?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Retrieval Augmented Generation (RAG) combines the power of large language models with enterprise knowledge bases, enabling AI systems to provide accurate, contextual responses using your organization's proprietary data while maintaining security and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2 text-blue-400" />
                Retrieval System
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Vector database implementation</li>
                <li>• Semantic search optimization</li>
                <li>• Multi-modal content indexing</li>
                <li>• Real-time data synchronization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Enterprise Security
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Role-based access control</li>
                <li>• Data encryption at rest and transit</li>
                <li>• Audit logging and compliance</li>
                <li>• Privacy-preserving techniques</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Implementation Architecture</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Data Ingestion Layer</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-green-400">
                    # Document processing pipeline<br/>
                    from langchain.document_loaders import DirectoryLoader<br/>
                    from langchain.text_splitter import RecursiveCharacterTextSplitter<br/>
                    from langchain.embeddings import OpenAIEmbeddings
                  </code>
                </div>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Multi-format document support (PDF, DOCX, HTML)</li>
                  <li>✓ Intelligent chunking strategies</li>
                  <li>✓ Metadata extraction and enrichment</li>
                  <li>✓ Quality validation and filtering</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Vector Storage & Retrieval</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Scalable vector database (Pinecone, Weaviate, Chroma)</li>
                  <li>✓ Hybrid search (semantic + keyword)</li>
                  <li>✓ Query optimization and caching</li>
                  <li>✓ Relevance scoring and ranking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Generation & Response</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Context-aware prompt engineering</li>
                  <li>✓ Response quality evaluation</li>
                  <li>✓ Citation and source tracking</li>
                  <li>✓ Factual consistency checks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Monitoring & Governance</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Performance metrics and analytics</li>
                  <li>✓ Content freshness monitoring</li>
                  <li>✓ Usage tracking and optimization</li>
                  <li>✓ Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300">Handle millions of documents</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-300">Enterprise-grade security</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Intelligent</h3>
              <p className="text-gray-300">Context-aware responses</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Implementation Roadmap</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Assessment & Planning (Week 1-2)</h4>
                  <p className="text-gray-300">Data audit, architecture design, and infrastructure planning</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">MVP Development (Week 3-6)</h4>
                  <p className="text-gray-300">Core RAG system with basic retrieval and generation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Enterprise Features (Week 7-10)</h4>
                  <p className="text-gray-300">Security, monitoring, and governance implementation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Production Deployment (Week 11-12)</h4>
                  <p className="text-gray-300">Testing, optimization, and production rollout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}