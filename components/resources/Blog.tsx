"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "8 Proven Autonomous Agent Collaboration Patterns That Scale to 1000+ Agents",
    description: "Learn the foundational collaboration patterns that deliver exceptional performance at enterprise scale.",
    link: "/blog/autonomous-agent-collaboration-patterns",
  },
  {
    title: "12 Critical Steps for Agentic Workflows Implementation That Actually Work in Production",
    description: "Our proven methodology for implementing agentic workflows that deliver results.",
    link: "/blog/agentic-workflows-implementation",
  },
  {
    title: "Multi-Agent Systems Architecture: Comprehensive Content Strategy 2025",
    description: "A deep dive into the architecture of multi-agent systems and a content strategy for 2025.",
    link: "/blog/multi-agent-systems-architecture",
  },
  {
    title: "Which AI Agent Orchestration Framework Saves You 6 Months of Development Time?",
    description: "An analysis of the top AI agent orchestration frameworks and their impact on development timelines.",
    link: "/blog/ai-agent-orchestration-framework",
  },
];

export function Blog() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          From the Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.description}</p>
              <Link href={post.link} className="text-purple-400 hover:underline">
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
