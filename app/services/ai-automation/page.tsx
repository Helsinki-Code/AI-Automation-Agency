
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Settings, BarChart3, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services | Streamline Your Business Operations",
  description: "Transform your business with intelligent automation solutions. Reduce costs, improve efficiency, and scale operations with our AI automation services.",
};

const automationFeatures = [
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and complex workflows with intelligent decision-making capabilities.",
    benefits: ["80% reduction in manual tasks", "24/7 automated operations", "Error reduction by 95%"]
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Optimize existing business processes using AI-driven analytics and machine learning.",
    benefits: ["Identify bottlenecks", "Predictive maintenance", "Resource optimization"]
  },
  {
    icon: BarChart3,
    title: "Data Processing",
    description: "Automate data collection, processing, and analysis for real-time business insights.",
    benefits: ["Real-time analytics", "Automated reporting", "Data quality assurance"]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Implement AI-powered quality control and compliance monitoring systems.",
    benefits: ["Automated testing", "Compliance monitoring", "Risk assessment"]
  }
];

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {automationFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://calendly.com/agentic-ai/agentic-ai" target="_blank">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
