
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  isLoading?: boolean;
  message?: string;
}

export function Loader({ isLoading = true, message = "Loading..." }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0A051E] via-[#120B2E] to-[#1A0B3A]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Agentic AI AMRO Ltd"
            width={120}
            height={120}
            className="mx-auto filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Pulsing Rings */}
        <div className="relative mb-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 2],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
              className="absolute inset-0 w-32 h-32 mx-auto border-2 border-purple-500/30 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white"
        >
          <h3 className="text-xl font-semibold mb-2">{message}</h3>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 bg-purple-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
