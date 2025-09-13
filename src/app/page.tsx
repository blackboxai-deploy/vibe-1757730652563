"use client";

import { useState, useEffect } from "react";
import { Dashboard } from "@/components/Dashboard";
import { LearningPath } from "@/components/LearningPath";
import { CodeGenerator } from "@/components/CodeGenerator";
import { HardwareProfile } from "@/components/HardwareProfile";
import { DocumentationHub } from "@/components/DocumentationHub";
import { TroubleshootingGuide } from "@/components/TroubleshootingGuide";
import { Navigation } from "@/components/Navigation";
import { BackToTop } from "@/components/BackToTop";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const [userProgress, setUserProgress] = useState({
    currentStep: 0,
    completedSteps: [] as number[],
    totalSteps: 100
  });

  const [hardwareProfile, setHardwareProfile] = useState({
    laptopModel: "HP Pavilion Gaming 15-cx0049ne",
    cpu: "Intel i5-8300H",
    gpu: "NVIDIA GTX 1050 Ti",
    ram: "32GB (Upgraded from 8GB)",
    storage: "SSD/HDD Hybrid",
    virtualizationSupport: "Intel VT-x",
    optimizationLevel: "Gaming Performance"
  });

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem("xenProgress");
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }

    // Handle URL hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["dashboard", "learning", "generator", "hardware", "docs", "troubleshooting"].includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Set initial tab from URL hash
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // Simulate loading for smooth experience
    setTimeout(() => setIsLoading(false), 1500);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const updateProgress = (step: number, completed: boolean) => {
    const newProgress = {
      ...userProgress,
      currentStep: completed ? Math.max(userProgress.currentStep, step + 1) : userProgress.currentStep,
      completedSteps: completed 
        ? [...new Set([...userProgress.completedSteps, step])]
        : userProgress.completedSteps.filter(s => s !== step)
    };
    setUserProgress(newProgress);
    localStorage.setItem("xenProgress", JSON.stringify(newProgress));
  };

  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard userProgress={userProgress} hardwareProfile={hardwareProfile} navigateToTab={navigateToTab} />;
      case "learning":
        return <LearningPath userProgress={userProgress} updateProgress={updateProgress} />;
      case "generator":
        return <CodeGenerator hardwareProfile={hardwareProfile} userProgress={userProgress} />;
      case "hardware":
        return <HardwareProfile profile={hardwareProfile} updateProfile={setHardwareProfile} />;
      case "docs":
        return <DocumentationHub />;
      case "troubleshooting":
        return <TroubleshootingGuide />;
      default:
        return <Dashboard userProgress={userProgress} hardwareProfile={hardwareProfile} navigateToTab={navigateToTab} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation activeTab={activeTab} setActiveTab={navigateToTab} userProgress={userProgress} />
      <main className="container mx-auto px-4 py-8" id="main-content">
        {renderActiveComponent()}
      </main>
      <BackToTop />
    </div>
  );
}