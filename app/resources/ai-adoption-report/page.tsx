import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, TrendingUp, BarChart3, Globe, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Adoption Report 2025 | Agentic AI AMRO Ltd",
  description: "Comprehensive analysis of AI adoption trends across industries and regions for 2025.",
};

export default function AIAdoptionReportPage() {
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
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Adoption Report 2025
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive analysis of AI adoption trends, challenges, and opportunities across industries and regions.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Full Report
          </Button>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
            <p className="text-gray-300">Companies using AI</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.9T</div>
            <p className="text-gray-300">Global AI market value</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">156%</div>
            <p className="text-gray-300">YoY growth in AI investment</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
              Executive Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              AI adoption has reached a tipping point in 2025, with organizations across all sectors recognizing AI as a strategic imperative. This report analyzes adoption patterns, implementation challenges, and success factors across 15 industries and 50+ countries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-orange-400" />
                Industry Leaders
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Technology: 94% adoption rate</li>
                <li>• Financial Services: 89% adoption</li>
                <li>• Healthcare: 76% adoption</li>
                <li>• Manufacturing: 71% adoption</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                Regional Insights
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• North America: Highest investment</li>
                <li>• Asia-Pacific: Fastest growth</li>
                <li>• Europe: Strong regulatory framework</li>
                <li>• Middle East: Emerging markets</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Findings</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Acceleration in Generative AI</h3>
                <p className="text-gray-300 mb-3">
                  Generative AI has seen explosive growth, with 73% of organizations implementing or piloting generative AI solutions.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ ChatGPT and similar tools driving adoption</li>
                  <li>✓ Content creation and customer service leading use cases</li>
                  <li>✓ 45% productivity improvement reported</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Enterprise AI Maturity</h3>
                <p className="text-gray-300 mb-3">
                  Organizations are moving beyond experimentation to production-scale AI implementations.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ 42% have AI in production across multiple functions</li>
                  <li>✓ Data infrastructure investments increasing</li>
                  <li>✓ AI governance frameworks being established</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Workforce Transformation</h3>
                <p className="text-gray-300 mb-3">
                  AI is reshaping workforce dynamics with emphasis on upskilling and human-AI collaboration.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ 68% investing in AI training programs</li>
                  <li>✓ New roles emerging in AI management</li>
                  <li>✓ Focus on augmentation rather than replacement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Regulatory Landscape</h3>
                <p className="text-gray-300 mb-3">
                  Increasing regulation is shaping AI development and deployment strategies.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ EU AI Act driving compliance requirements</li>
                  <li>✓ Ethical AI frameworks being adopted</li>
                  <li>✓ Data privacy considerations paramount</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Future Outlook</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">2025 Predictions</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 95% of Fortune 500 using AI</li>
                  <li>• $500B in AI infrastructure investment</li>
                  <li>• 25% of jobs significantly augmented by AI</li>
                  <li>• Emergence of AI-first companies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">Strategic Recommendations</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Develop comprehensive AI strategy</li>
                  <li>• Invest in data infrastructure</li>
                  <li>• Prioritize talent development</li>
                  <li>• Establish governance frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}