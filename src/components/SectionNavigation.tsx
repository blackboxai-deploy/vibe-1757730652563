"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface SectionNavigationProps {
  sections: Array<{
    id: string;
    title: string;
    emoji: string;
  }>;
}

export function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px"
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2 space-y-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            size="sm"
            className={`w-full justify-start transition-all duration-200 ${
              activeSection === section.id 
                ? "bg-blue-600 text-white" 
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
            onClick={() => scrollToSection(section.id)}
            title={section.title}
          >
            <span className="mr-2">{section.emoji}</span>
            <span className="hidden lg:inline text-xs">{section.title}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}