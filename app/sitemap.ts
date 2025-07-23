
import { siteMetadata } from './metadata';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/demo',
    '/case-studies', 
    '/use-cases',
    '/what-is-agentic-ai',
    '/chatbots',
    '/consulting',
    '/blog',
    '/blog/multi-agent-systems-architecture',
    '/blog/agentic-workflows-implementation',
    '/blog/ai-agent-orchestration-framework',
    '/blog/autonomous-agent-collaboration-patterns',
    '/resources',
    '/resources/ai-cost-optimization',
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
