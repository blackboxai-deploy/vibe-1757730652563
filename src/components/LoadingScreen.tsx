"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("Initializing Xen Project Mastery...");

  const loadingMessages = [
    "Initializing Xen Project Mastery...",
    "Detecting hardware capabilities...",
    "Optimizing for HP Pavilion Gaming...",
    "Loading Intel i5-8300H profiles...",
    "Configuring 32GB RAM strategies...",
    "Preparing NVIDIA GTX 1050 Ti support...",
    "Setting up VMware integration...",
    "Loading learning curriculum...",
    "Finalizing AI code generator...",
    "Ready to master Xen!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress <= 100) {
          const messageIndex = Math.floor(newProgress / 10) - 1;
          if (messageIndex >= 0 && messageIndex < loadingMessages.length) {
            setCurrentMessage(loadingMessages[messageIndex]);
          }
        }
        return Math.min(newProgress, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center space-y-8 p-8 max-w-md mx-auto">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-4xl">X</span>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl animate-ping"></div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Xen Project Mastery
          </h1>
          <p className="text-blue-200">
            From Zero to Expert Hypervisor
          </p>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <Progress value={progress} className="w-full h-3" />
          <p className="text-sm text-blue-100 animate-pulse">
            {currentMessage}
          </p>
        </div>

        {/* Hardware Info */}
        <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm border border-blue-500/20">
          <p className="text-xs text-blue-200 mb-2">Optimized for:</p>
          <div className="space-y-1 text-xs text-white">
            <div>🖥️ HP Pavilion Gaming 15-cx0049ne</div>
            <div>⚡ Intel i5-8300H + 32GB RAM</div>
            <div>🎮 NVIDIA GTX 1050 Ti</div>
          </div>
        </div>
      </div>
    </div>
  );
}