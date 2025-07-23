import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "AI Automation Agency | Empowering Businesses with AI & Automation",
  description: "Transform your business with cutting-edge AI automation solutions. We help companies implement intelligent workflows, reduce costs, and boost productivity.",
  keywords: ["AI automation", "artificial intelligence", "business automation", "AI agents", "machine learning"],
  authors: [{ name: "AI Automation Agency" }],
  openGraph: {
    title: "AI Automation Agency | Empowering Businesses with AI & Automation",
    description: "Transform your business with cutting-edge AI automation solutions.",
    images: ["/AI Automation Agency.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}