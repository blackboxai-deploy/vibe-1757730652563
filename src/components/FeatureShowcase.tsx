"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeatureShowcaseProps {
  navigateToTab: (tab: string) => void;
}

export function FeatureShowcase({ navigateToTab }: FeatureShowcaseProps) {
  const features = [
    {
      icon: "🎯",
      title: "100-Step Learning Path",
      description: "Meticulously crafted progression from absolute beginner to Xen expert",
      highlights: ["No knowledge gaps", "Progressive difficulty", "Validation gates", "Achievement system"],
      action: "Start Learning",
      tab: "learning",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: "⚡",
      title: "AI Code Generator", 
      description: "Generate optimized Xen configurations and scripts for your specific hardware",
      highlights: ["HP Pavilion optimized", "Intel i5-8300H tuning", "32GB RAM strategies", "GPU passthrough"],
      action: "Generate Code",
      tab: "generator", 
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🖥️",
      title: "Hardware Optimization",
      description: "Complete analysis and tuning guide for your gaming laptop setup",
      highlights: ["BIOS configuration", "Performance tuning", "Thermal management", "Resource allocation"],
      action: "Optimize Hardware",
      tab: "hardware",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: "📚",
      title: "Complete Documentation",
      description: "Comprehensive Xen reference with searchable knowledge base",
      highlights: ["Command reference", "Configuration examples", "Architecture deep-dive", "Best practices"],
      action: "Browse Docs",
      tab: "docs",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: "🔧",
      title: "Expert Troubleshooting",
      description: "Advanced problem-solving guide with HP Pavilion specific solutions",
      highlights: ["Installation issues", "Performance problems", "Hardware conflicts", "Recovery procedures"],
      action: "Get Help",
      tab: "troubleshooting",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: "🎮",
      title: "Gaming VM Setup",
      description: "Configure high-performance gaming VMs with GPU passthrough",
      highlights: ["NVIDIA GTX 1050 Ti", "Near-native performance", "Audio passthrough", "Optimization guides"],
      action: "Setup Gaming",
      tab: "hardware",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-transparent to-slate-100/50 dark:to-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            🌟 Comprehensive Learning Platform
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Everything you need to master Xen virtualization, optimized specifically for your HP Pavilion Gaming laptop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Premium
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${feature.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  onClick={() => navigateToTab(feature.tab)}
                >
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://placehold.co/1200x400?text=Xen+Project+Hypervisor+Architecture+Diagram')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Ready to Become a Xen Expert?</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Join the ranks of hypervisor specialists with our comprehensive, hardware-optimized learning platform. 
                Master Type-1 virtualization with hands-on experience tailored to your HP Pavilion Gaming laptop.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => navigateToTab("learning")}
                >
                  🚀 Start Your Journey
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                  onClick={() => navigateToTab("docs")}
                >
                  📖 Explore Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "100", label: "Learning Steps", icon: "📚" },
            { number: "7", label: "Learning Phases", icon: "🎯" },
            { number: "50+", label: "Code Templates", icon: "⚡" },
            { number: "32GB", label: "RAM Optimized", icon: "💾" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}