
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Play, Zap, Bot, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Demo | Agentic AI AMRO Ltd",
  description: "See our AI solutions in action with interactive demos and real-world examples.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Solutions</span> in Action
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore interactive demos and real-world examples of how our AI solutions transform businesses.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Chatbot Demo */}
          <div className="dark-card rounded-2xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Chatbot</h3>
            <p className="text-gray-400 mb-4">
              Experience our intelligent chatbot that handles customer queries with 95% accuracy.
            </p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
              <Play className="w-4 h-4 mr-2" />
              Try Demo
            </Button>
          </div>

          {/* Process Automation Demo */}
          <div className="dark-card rounded-2xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Process Automation</h3>
            <p className="text-gray-400 mb-4">
              Watch how we automate complex business workflows with intelligent decision-making.
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
              <Play className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>

          {/* AI Analytics Demo */}
          <div className="dark-card rounded-2xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Analytics</h3>
            <p className="text-gray-400 mb-4">
              See how our AI analyzes data patterns to provide actionable business insights.
            </p>
            <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600">
              <Play className="w-4 h-4 mr-2" />
              Explore Demo
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI solutions can specifically benefit your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Schedule Your Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
