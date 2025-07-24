import { Metadata } from 'next';
import BlogPost from './content';

export const metadata: Metadata = {
  title: '12 Critical Steps for Agentic Workflows Implementation | Agentic AI Blog',
  description: 'A comprehensive guide to implementing agentic workflows that can transform your business operations and boost efficiency.',
};

export default function AgenticWorkflowsImplementationPage() {
  return <BlogPost />;
}
