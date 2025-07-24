import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, GitBranch, Zap, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Framework Comparison | Agentic AI AMRO Ltd",
  description: "Comprehensive comparison of LangChain vs AutoGen vs CrewAI frameworks for AI agent development.",
};

export default function FrameworkComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-6">
            <GitBranch className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Framework Comparison
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive comparison of LangChain vs AutoGen vs CrewAI frameworks for AI agent development.
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            <Download className="w-5 h-5 mr-2" />
            Download Comparison Guide
          </Button>
        </div>

        {/* Framework Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">LangChain</h3>
              <p className="text-blue-400 font-semibold">General Purpose</p>
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>✓ Extensive tool ecosystem</li>
              <li>✓ Production-ready components</li>
              <li>✓ Strong community support</li>
              <li>✓ Enterprise integrations</li>
              <li>✓ Memory management</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-500/20">
              <p className="text-sm text-gray-400">Best for: Large-scale applications</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">AutoGen</h3>
              <p className="text-green-400 font-semibold">Multi-Agent</p>
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>✓ Multi-agent conversations</li>
              <li>✓ Role-based agent design</li>
              <li>✓ Code execution capabilities</li>
              <li>✓ Group chat coordination</li>
              <li>✓ Microsoft backing</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-green-500/20">
              <p className="text-sm text-gray-400">Best for: Collaborative workflows</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">CrewAI</h3>
              <p className="text-purple-400 font-semibold">Task-Oriented</p>
            </div>
            <ul className="text-gray-300 space-y-3">
              <li>✓ Sequential task execution</li>
              <li>✓ Hierarchical delegation</li>
              <li>✓ Built-in collaboration</li>
              <li>✓ Simple configuration</li>
              <li>✓ Process automation</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-purple-500/20">
              <p className="text-sm text-gray-400">Best for: Business processes</p>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-gray-300 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-blue-400 font-semibold">LangChain</th>
                  <th className="py-4 px-6 text-green-400 font-semibold">AutoGen</th>
                  <th className="py-4 px-6 text-purple-400 font-semibold">CrewAI</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 font-medium">Learning Curve</td>
                  <td className="py-4 px-6">Moderate</td>
                  <td className="py-4 px-6">Steep</td>
                  <td className="py-4 px-6">Easy</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 font-medium">Multi-Agent Support</td>
                  <td className="py-4 px-6">Limited</td>
                  <td className="py-4 px-6">Excellent</td>
                  <td className="py-4 px-6">Good</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 font-medium">Tool Integration</td>
                  <td className="py-4 px-6">Excellent</td>
                  <td className="py-4 px-6">Good</td>
                  <td className="py-4 px-6">Moderate</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 font-medium">Enterprise Ready</td>
                  <td className="py-4 px-6">Yes</td>
                  <td className="py-4 px-6">Yes</td>
                  <td className="py-4 px-6">Emerging</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 font-medium">Documentation</td>
                  <td className="py-4 px-6">Excellent</td>
                  <td className="py-4 px-6">Good</td>
                  <td className="py-4 px-6">Good</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Community Size</td>
                  <td className="py-4 px-6">Large</td>
                  <td className="py-4 px-6">Growing</td>
                  <td className="py-4 px-6">Small</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Case Recommendations */}
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">When to Choose Each Framework</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Choose LangChain When:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Building complex RAG systems</li>
                <li>• Need extensive tool integrations</li>
                <li>• Require production scalability</li>
                <li>• Working with enterprise data</li>
                <li>• Building custom chains</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Choose AutoGen When:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Need multi-agent collaboration</li>
                <li>• Building conversational systems</li>
                <li>• Require code generation/execution</li>
                <li>• Working on research projects</li>
                <li>• Need role-based agents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Choose CrewAI When:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Automating business processes</li>
                <li>• Need sequential task execution</li>
                <li>• Want simple configuration</li>
                <li>• Building workflow systems</li>
                <li>• Rapid prototyping needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Start Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">LangChain Example</h3>
              <div className="bg-gray-900/70 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  from langchain.agents import create_openai_functions_agent<br/>
                  from langchain.tools import DuckDuckGoSearchRun<br/><br/>
                  tools = [DuckDuckGoSearchRun()]<br/>
                  agent = create_openai_functions_agent(llm, tools, prompt)
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">AutoGen Example</h3>
              <div className="bg-gray-900/70 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  assistant = autogen.AssistantAgent("assistant")<br/>
                  user_proxy = autogen.UserProxyAgent("user")<br/><br/>
                  user_proxy.initiate_chat(assistant, message="Hello!")
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">CrewAI Example</h3>
              <div className="bg-gray-900/70 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  from crewai import Agent, Task, Crew<br/><br/>
                  researcher = Agent(role="Research Analyst")<br/>
                  task = Task(description="Research topic")<br/>
                  crew = Crew(agents=[researcher], tasks=[task])
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}