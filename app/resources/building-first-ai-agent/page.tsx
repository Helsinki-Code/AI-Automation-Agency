import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Bot, Code, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Building Your First AI Agent | Agentic AI AMRO Ltd",
  description: "Complete beginner's guide to building your first AI agent from scratch with practical examples.",
};

export default function BuildingFirstAIAgentPage() {
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
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Building Your First AI Agent
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Complete beginner's guide to building your first AI agent from scratch with practical examples and step-by-step instructions.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Complete Guide
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-400" />
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-gray-300 space-y-2">
                <li>• AI agent fundamentals and architecture</li>
                <li>• Setting up your development environment</li>
                <li>• Choosing the right frameworks and tools</li>
                <li>• Building your first simple agent</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li>• Adding memory and context management</li>
                <li>• Integrating with external APIs and tools</li>
                <li>• Testing and debugging strategies</li>
                <li>• Deployment and monitoring</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Beginner Friendly</h3>
              <p className="text-gray-300">No prior AI experience required</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Practical Examples</h3>
              <p className="text-gray-300">Real-world agent implementations</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Step by Step</h3>
              <p className="text-gray-300">Detailed instructions and code</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Course Outline</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Introduction to AI Agents</h3>
                  <p className="text-gray-300">Understanding what AI agents are, their capabilities, and real-world applications.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Development Environment Setup</h3>
                  <p className="text-gray-300">Installing Python, setting up virtual environments, and configuring necessary libraries.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Building a Simple Agent</h3>
                  <p className="text-gray-300">Creating your first AI agent that can respond to basic queries and perform simple tasks.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Adding Memory and Context</h3>
                  <p className="text-gray-300">Implementing conversation memory and context management for more intelligent interactions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Tool Integration</h3>
                  <p className="text-gray-300">Connecting your agent to external APIs, databases, and web services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Testing and Deployment</h3>
                  <p className="text-gray-300">Best practices for testing your agent and deploying it to production environments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              What You'll Build
            </h2>
            <p className="text-gray-300 mb-6">
              By the end of this guide, you'll have built a fully functional AI agent that can:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li>✓ Understand and respond to natural language</li>
                <li>✓ Maintain conversation context</li>
                <li>✓ Access and retrieve information from APIs</li>
                <li>✓ Perform multi-step reasoning</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Handle errors gracefully</li>
                <li>✓ Log interactions for analysis</li>
                <li>✓ Scale to handle multiple users</li>
                <li>✓ Integrate with popular platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}