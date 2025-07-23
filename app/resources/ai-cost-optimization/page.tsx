import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, DollarSign, TrendingDown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Cost Optimization Strategies | Agentic AI AMRO Ltd",
  description: "Comprehensive guide to reducing AI implementation costs while maximizing ROI and business value.",
};

export default function AICostOptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Cost Optimization Strategies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive guide to reducing AI implementation costs while maximizing ROI and business value.
          </p>
          <Button className="mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Full Guide
          </Button>
        </div>

        {/* Content */}
        <div className="dark-card rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <TrendingDown className="w-6 h-6 mr-3 text-green-400" />
              Cost Reduction Strategies
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">1. Infrastructure Optimization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud resource right-sizing and auto-scaling implementations</li>
                <li>GPU utilization optimization for training and inference workloads</li>
                <li>Multi-cloud strategies to leverage competitive pricing</li>
                <li>Reserved instance planning for predictable workloads</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">2. Model Efficiency Techniques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Model compression and quantization strategies</li>
                <li>Knowledge distillation for lightweight models</li>
                <li>Pruning techniques to reduce model complexity</li>
                <li>Transfer learning to reduce training time and costs</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">3. Data Management Optimization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data pipeline automation and optimization</li>
                <li>Intelligent data sampling and synthetic data generation</li>
                <li>Storage tier optimization for different data types</li>
                <li>Data lifecycle management policies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
              ROI Measurement Framework
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Key Performance Indicators</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cost per Prediction:</strong> Track inference costs over time</li>
                <li><strong>Training Efficiency:</strong> Cost per epoch and time to convergence</li>
                <li><strong>Resource Utilization:</strong> CPU, GPU, and memory efficiency metrics</li>
                <li><strong>Business Impact:</strong> Revenue generated per AI dollar invested</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">Cost Monitoring Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud cost management dashboards and alerts</li>
                <li>ML experiment tracking and cost attribution</li>
                <li>Real-time resource monitoring and optimization</li>
                <li>Automated cost anomaly detection systems</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Implementation Best Practices</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Phase 1: Assessment and Planning</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive cost audit of existing AI infrastructure</li>
                <li>Identification of optimization opportunities and quick wins</li>
                <li>Development of cost optimization roadmap and timeline</li>
                <li>Establishment of governance and monitoring frameworks</li>
              </ul>

              <h3 className="text-lg font-semibold text-white">Phase 2: Implementation and Optimization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gradual rollout of optimization strategies with A/B testing</li>
                <li>Continuous monitoring and adjustment of cost parameters</li>
                <li>Team training on cost-conscious AI development practices</li>
                <li>Integration of cost considerations into ML development lifecycle</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl p-6 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40-60%</div>
                <div className="text-gray-300">Infrastructure Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3-5x</div>
                <div className="text-gray-300">Improved Model Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25-35%</div>
                <div className="text-gray-300">Faster Time to Market</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your AI Costs?</h2>
          <p className="text-gray-300 mb-6">Let our experts help you implement these strategies in your organization.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}