import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Governance Checklist | Agentic AI AMRO Ltd",
  description: "Essential checklist for implementing robust AI governance frameworks in your organization.",
};

export default function AIGovernanceChecklistPage() {
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Governance Checklist
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Essential checklist for implementing robust AI governance frameworks in your organization.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Checklist
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              Executive Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              AI governance is critical for organizations deploying artificial intelligence systems. This comprehensive checklist covers strategic planning, risk management, ethical considerations, compliance requirements, and operational oversight necessary for responsible AI implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Strategic Planning
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• AI strategy alignment with business objectives</li>
                <li>• Stakeholder identification and engagement</li>
                <li>• Resource allocation and budgeting</li>
                <li>• Timeline and milestone definition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
                Risk Management
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Risk assessment framework</li>
                <li>• Bias detection and mitigation</li>
                <li>• Security and privacy controls</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Governance Areas</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Ethical AI Framework</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Establish ethical principles and values</li>
                  <li>✓ Define fairness and bias criteria</li>
                  <li>✓ Implement transparency requirements</li>
                  <li>✓ Create accountability mechanisms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Compliance & Legal</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Regulatory requirement mapping</li>
                  <li>✓ Data protection compliance (GDPR, CCPA)</li>
                  <li>✓ Industry-specific regulations</li>
                  <li>✓ Legal review processes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Technical Oversight</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Model validation and testing</li>
                  <li>✓ Performance monitoring</li>
                  <li>✓ Version control and documentation</li>
                  <li>✓ Security architecture review</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Organizational Structure</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ AI governance committee establishment</li>
                  <li>✓ Roles and responsibilities definition</li>
                  <li>✓ Training and awareness programs</li>
                  <li>✓ Decision-making processes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Implementation Roadmap</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Foundation</h4>
                <p className="text-gray-300">Establish governance structure and policies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                <p className="text-gray-300">Deploy processes and controls</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
                <p className="text-gray-300">Monitor, measure, and improve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}