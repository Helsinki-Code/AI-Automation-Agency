import { siteMetadata } from './metadata';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/what-is-agentic-ai',
    '/services',
    '/services/ai-automation',
    '/services/custom-development',
    '/use-cases',
    '/case-studies',
    '/resources',
    '/contact',
    '/demo',
    '/consulting',
    '/chatbots',
    '/pricing',
    '/blog',
    '/resources/ai-cost-optimization',
    '/blog/multi-agent-systems-architecture',
    '/blog/agentic-workflows-implementation',
    '/blog/ai-agent-orchestration-framework',
    '/blog/autonomous-agent-collaboration-patterns',
    '/resources/building-first-ai-agent',
    '/resources/framework-comparison',
    '/resources/ai-adoption-report',
    '/resources/ai-governance-checklist',
    '/resources/deployment-best-practices',
    '/resources/enterprise-rag-implementation',
    '/resources/ethical-ai-framework'
  ].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes;
}