import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Shield, Scale, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ethical AI Framework | Agentic AI AMRO Ltd",
  description: "Practical framework for ethical AI implementation with guidelines, checklists, and best practices.",
};

export default function EthicalAiFrameworkPage() {
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
            Practical Framework for Ethical AI Implementation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Complete implementation framework with checklists, matrices, real-world examples, and ROI guidance to operationalize AI ethics from strategy through practice.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Framework
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why Ethical AI Matters</h2>
            <p className="text-gray-300 leading-relaxed">
              AI is transforming every sector, yet missteps around bias, privacy, and transparency have triggered global regulation and public scrutiny. This framework helps organizations operationalize AI ethics from strategy through day-to-day practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-5 h-5 mr-2 text-red-400" />
                Current Challenges
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Algorithmic bias and discrimination</li>
                <li>• Privacy and data protection concerns</li>
                <li>• Lack of transparency and explainability</li>
                <li>• Regulatory compliance complexity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-green-400" />
                Framework Benefits
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Reduced regulatory and reputational risk</li>
                <li>• Improved stakeholder trust</li>
                <li>• Better decision-making processes</li>
                <li>• Competitive advantage through ethics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Framework Components</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Ethical Principles Foundation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>✓ Fairness and non-discrimination</li>
                    <li>✓ Transparency and explainability</li>
                    <li>✓ Accountability and responsibility</li>
                    <li>✓ Privacy and data protection</li>
                  </ul>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>✓ Human autonomy and oversight</li>
                    <li>✓ Robustness and safety</li>
                    <li>✓ Beneficence and non-maleficence</li>
                    <li>✓ Sustainability and environmental impact</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Governance Structure</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ AI Ethics Committee establishment</li>
                  <li>✓ Cross-functional team formation</li>
                  <li>✓ Decision-making authority allocation</li>
                  <li>✓ Escalation procedures definition</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Risk Assessment Matrix</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="font-semibold text-purple-400">Risk Level</div>
                    <div className="font-semibold text-purple-400">Impact</div>
                    <div className="font-semibold text-purple-400">Probability</div>
                    <div className="font-semibold text-purple-400">Action Required</div>

                    <div className="text-red-400">High</div>
                    <div className="text-gray-300">Severe</div>
                    <div className="text-gray-300">Likely</div>
                    <div className="text-gray-300">Immediate mitigation</div>

                    <div className="text-yellow-400">Medium</div>
                    <div className="text-gray-300">Moderate</div>
                    <div className="text-gray-300">Possible</div>
                    <div className="text-gray-300">Planned mitigation</div>

                    <div className="text-green-400">Low</div>
                    <div className="text-gray-300">Minor</div>
                    <div className="text-gray-300">Unlikely</div>
                    <div className="text-gray-300">Monitor and review</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Implementation Checklist</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Pre-Development</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>□ Ethical impact assessment</li>
                      <li>□ Stakeholder consultation</li>
                      <li>□ Data quality and bias review</li>
                      <li>□ Legal and regulatory analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Development Phase</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>□ Bias testing and mitigation</li>
                      <li>□ Explainability implementation</li>
                      <li>□ Privacy-preserving techniques</li>
                      <li>□ Continuous monitoring setup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compliance Ready</h3>
              <p className="text-gray-300">GDPR, CCPA, EU AI Act aligned</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stakeholder Focused</h3>
              <p className="text-gray-300">Inclusive design and consultation</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Measurable</h3>
              <p className="text-gray-300">KPIs and success metrics</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Industry-Specific Guidance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Healthcare</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• HIPAA compliance requirements</li>
                  <li>• Clinical decision support ethics</li>
                  <li>• Patient consent and autonomy</li>
                  <li>• Medical device regulations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Financial Services</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Fair lending practices</li>
                  <li>• Algorithmic trading ethics</li>
                  <li>• Customer data protection</li>
                  <li>• Regulatory reporting</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Legal & Justice</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Due process protection</li>
                  <li>• Sentencing algorithm fairness</li>
                  <li>• Evidence handling standards</li>
                  <li>• Bias in legal AI tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}