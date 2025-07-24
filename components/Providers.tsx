"use client";

import { ThemeProvider } from "next-themes";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { Loader } from "@/components/Loader";
import { useLoading } from "@/contexts/LoadingContext";

function LoaderWrapper() {
  const { isLoading, loadingMessage } = useLoading();
  return <Loader isLoading={isLoading} message={loadingMessage} />;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LoadingProvider>
        {children}
        <LoaderWrapper />
      </LoadingProvider>
    </ThemeProvider>
  );
}