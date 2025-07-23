"use client";

import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { companyInfo } from "@/app/metadata";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
];

const services = [
  { href: "/services#ai-automation", label: "AI Automation" },
  { href: "/services#custom-development", label: "Custom Development" },
  { href: "/consulting", label: "AI Consulting" },
  { href: "/chatbots", label: "Chatbot Development" },
];

const resources = [
  { href: "/resources", label: "Developer Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/what-is-agentic-ai", label: "What is Agentic AI?" },
  { href: "/use-cases", label: "Use Cases" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Agentic AI"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Agentic AI AMRO
                  </span>
                  <span className="text-sm text-purple-400 font-medium">Ltd</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses with intelligent automation and cutting-edge AI solutions. 
                We build autonomous agents that revolutionize how companies operate.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <Link
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{companyInfo.email}</span>
                </Link>

                <Link
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{companyInfo.phone}</span>
                </Link>

                <div className="flex items-center space-x-3 text-gray-400">
                  <div className="p-2 rounded-full bg-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{companyInfo.address.city}, {companyInfo.address.county}, {companyInfo.address.country}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <Link
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>



        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Agentic AI AMRO Ltd. All rights reserved. | Empowering the Future with Autonomous Intelligence
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Instagram, href: "#", label: "Instagram" }
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="group relative"
                aria-label={social.label}
              >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-200" />
                <div className="relative p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}