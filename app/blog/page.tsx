
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Agentic AI Insights | Latest AI Automation Trends',
  description: 'Stay updated with the latest insights on agentic AI, automation trends, and cutting-edge developments in artificial intelligence.',
};

const blogPosts = [
  {
    slug: 'agentic-workflows-implementation',
    title: '12 Critical Steps for Agentic Workflows Implementation',
    excerpt: 'A comprehensive guide to implementing agentic workflows that can transform your business operations and boost efficiency.',
    date: '2025-01-15',
    readTime: '8 min read',
    author: 'AI Research Team',
    category: 'Implementation',
    featured: true,
  },
  {
    slug: 'autonomous-agent-collaboration-patterns',
    title: '8 Proven Autonomous Agent Collaboration Patterns',
    excerpt: 'Discover the most effective patterns for autonomous agent collaboration that leading enterprises are using.',
    date: '2025-01-12',
    readTime: '6 min read',
    author: 'Dr. Sarah Chen',
    category: 'Architecture',
    featured: true,
  },
  {
    slug: 'multi-agent-systems-architecture',
    title: 'Multi-Agent Systems Architecture: Comprehensive Guide 2025',
    excerpt: 'Learn how to design and implement robust multi-agent systems that scale with your business needs.',
    date: '2025-01-10',
    readTime: '12 min read',
    author: 'Engineering Team',
    category: 'Architecture',
    featured: false,
  },
  {
    slug: 'ai-agent-orchestration-framework',
    title: 'Which AI Agent Orchestration Framework Saves You 60% Development Time?',
    excerpt: 'Compare the top AI agent orchestration frameworks and find the one that fits your development workflow.',
    date: '2025-01-08',
    readTime: '10 min read',
    author: 'Tech Analysis Team',
    category: 'Tools',
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A051E] via-[#120B2E] to-[#1A0B3A] pt-32 pb-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span> Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead with the latest insights on agentic AI, automation trends, and breakthrough developments in artificial intelligence.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-green-400 text-sm font-medium">Featured</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-white transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          
          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="text-green-400 text-sm font-medium">Featured</span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 lg:mb-0">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="lg:ml-8 flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-white transition-colors group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
