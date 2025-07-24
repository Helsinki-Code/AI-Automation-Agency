import { Metadata } from 'next';
import BlogPage from './content';

export const metadata: Metadata = {
  title: 'Blog - Agentic AI Insights | Latest AI Automation Trends',
  description: 'Stay updated with the latest insights on agentic AI, automation trends, and cutting-edge developments in artificial intelligence.',
};

export default function Blog() {
  return <BlogPage />;
}
