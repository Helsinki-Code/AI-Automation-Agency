
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Code, Brain, Layers, GitBranch } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom AI Development | Tailored AI Solutions",
  description: "Get custom AI solutions built specifically for your business needs. From ML models to full-stack AI applications.",
};

const developmentServices = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your specific data and business objectives.",
    features: ["Deep Learning", "NLP Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting from £5,000"
  },
  {
    icon: Code,
    title: "AI Application Development",
    description: "Full-stack AI applications with modern interfaces and robust backends.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Integration"],
    pricing: "Starting from £8,000"
  },
  {
    icon: Layers,
    title: "AI Platform Integration",
    description: "Seamlessly integrate AI capabilities into your existing technology stack.",
    features: ["API Integration", "Database Connection", "Workflow Automation", "Real-time Processing"],
    pricing: "Starting from £3,000"
  },
  {
    icon: GitBranch,
    title: "MLOps & Deployment",
    description: "End-to-end machine learning operations for scalable AI solutions.",
    features: ["Model Deployment", "Version Control", "Monitoring", "Continuous Integration"],
    pricing: "Starting from £4,000"
  }
];

export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Custom AI <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Build cutting-edge AI solutions tailored to your unique business requirements with our expert development team.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {developmentServices.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-blue-400 font-semibold">{service.pricing}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Design", desc: "Creating architecture and technical specifications" },
              { step: "03", title: "Development", desc: "Building and testing your AI solution" },
              { step: "04", title: "Deployment", desc: "Launching and monitoring your solution" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your AI Solution?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom AI solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://calendly.com/agentic-ai/agentic-ai" target="_blank">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
