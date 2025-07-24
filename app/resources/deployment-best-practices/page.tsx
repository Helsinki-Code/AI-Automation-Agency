
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Rocket, Shield, Monitor, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Deployment Best Practices | Agentic AI AMRO Ltd",
  description: "Enterprise-grade production deployment best practices for AI applications and systems.",
};

export default function DeploymentBestPracticesPage() {
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
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Deployment Best Practices
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Enterprise-grade production deployment best practices for AI applications and systems.
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
              <Rocket className="w-6 h-6 mr-3 text-blue-400" />
              Why Deployment Matters
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Proper deployment practices are crucial for AI applications. This guide covers containerization, CI/CD pipelines, monitoring, security, and scalability considerations for production AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-blue-400" />
                CI/CD Pipeline
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated testing and validation</li>
                <li>• Code quality and security scans</li>
                <li>• Gradual rollout strategies</li>
                <li>• Rollback mechanisms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-green-400" />
                Monitoring & Observability
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Real-time performance metrics</li>
                <li>• Error tracking and alerting</li>
                <li>• Resource utilization monitoring</li>
                <li>• User behavior analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Deployment Architecture</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Containerization Strategy</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-green-400">
                    # Multi-stage Docker build<br/>
                    FROM python:3.11-slim as base<br/>
                    WORKDIR /app<br/>
                    COPY requirements.txt .<br/>
                    RUN pip install --no-cache-dir -r requirements.txt
                  </code>
                </div>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Multi-stage builds for optimization</li>
                  <li>✓ Security scanning and vulnerability management</li>
                  <li>✓ Resource limits and health checks</li>
                  <li>✓ Minimal base images</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Infrastructure as Code</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Terraform or CloudFormation templates</li>
                  <li>✓ Version-controlled infrastructure</li>
                  <li>✓ Environment parity</li>
                  <li>✓ Automated provisioning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Orchestration & Scaling</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Kubernetes for container orchestration</li>
                  <li>✓ Horizontal pod autoscaling</li>
                  <li>✓ Load balancing and service mesh</li>
                  <li>✓ Zero-downtime deployments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Security & Compliance</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>✓ Network policies and segmentation</li>
                  <li>✓ Secret management (Vault, K8s secrets)</li>
                  <li>✓ RBAC and identity management</li>
                  <li>✓ Compliance monitoring and reporting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-300">End-to-end security practices</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Observable</h3>
              <p className="text-gray-300">Comprehensive monitoring setup</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300">Auto-scaling and performance</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Deployment Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Pre-Deployment</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Code review and testing</li>
                  <li>✓ Security scan and vulnerability assessment</li>
                  <li>✓ Performance benchmarking</li>
                  <li>✓ Documentation updates</li>
                  <li>✓ Backup and rollback plan</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Post-Deployment</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Health checks and smoke tests</li>
                  <li>✓ Monitor key metrics</li>
                  <li>✓ User acceptance testing</li>
                  <li>✓ Performance validation</li>
                  <li>✓ Incident response readiness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
