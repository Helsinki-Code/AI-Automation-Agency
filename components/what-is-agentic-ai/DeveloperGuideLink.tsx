"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Book } from "lucide-react";

export function DeveloperGuideLink() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Ready to Dive Deeper?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/resources" className="inline-flex items-center bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
            <Book className="w-6 h-6 mr-2" />
            Check out our Developer Guides
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
