import { Metadata } from 'next';
import BlogPost from './content';

export const metadata: Metadata = {
  title: 'Multi-Agent Systems Architecture Guide | Agentic AI Blog',
  description: 'Learn how to design and implement robust multi-agent systems that scale with your business needs.',
};

export default function MultiAgentSystemsArchitecturePage() {
  return <BlogPost />;
}
