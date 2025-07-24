
"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "8 Proven Autonomous Agent Collaboration Patterns That Scale to 1000+ Agents",
    description: "Learn the foundational collaboration patterns that deliver exceptional performance at enterprise scale with real-world case studies.",
    link: "/blog/autonomous-agent-collaboration-patterns",
    category: "Architecture",
    readTime: "12 min read",
    publishDate: "Dec 15, 2024",
    author: "Dr. Sarah Chen",
    featured: true,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "12 Critical Steps for Agentic Workflows Implementation That Actually Work in Production",
    description: "Our proven methodology for implementing agentic workflows that deliver results, based on 500+ successful deployments.",
    link: "/blog/agentic-workflows-implementation",
    category: "Implementation",
    readTime: "15 min read",
    publishDate: "Dec 10, 2024",
    author: "Marcus Rodriguez",
    featured: true,
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Multi-Agent Systems Architecture: Comprehensive Content Strategy 2025",
    description: "A deep dive into the architecture of multi-agent systems and a comprehensive content strategy for the upcoming year.",
    link: "/blog/multi-agent-systems-architecture",
    category: "Strategy",
    readTime: "20 min read",
    publishDate: "Dec 5, 2024",
    author: "Alex Thompson",
    featured: false,
    gradient: "from-green-600 to-blue-600"
  },
  {
    title: "Which AI Agent Orchestration Framework Saves You 6 Months of Development Time?",
    description: "An in-depth analysis of the top AI agent orchestration frameworks and their impact on development timelines and ROI.",
    link: "/blog/ai-agent-orchestration-framework",
    category: "Tools",
    readTime: "18 min read",
    publishDate: "Nov 28, 2024",
    author: "Jamie Park",
    featured: false,
    gradient: "from-orange-600 to-red-600"
  },
];

export function Blog() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From the Blog
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert insights, implementation guides, and industry analysis to keep you ahead 
            in the rapidly evolving AI landscape.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300`} />
              <Link href={post.link}>
                <div className="relative dark-card p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-300">
                      Featured
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-6 flex items-center text-sm font-medium text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-white" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300`} />
              <Link href={post.link}>
                <div className="relative dark-card p-6 rounded-2xl h-full hover:transform hover:scale-102 transition-all duration-300 cursor-pointer">
                  {/* Category */}
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${post.gradient} text-white mb-4`}>
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-3 font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
