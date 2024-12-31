"use client";

import { Button } from "@/components/ui/button";

interface DesktopNavProps {
  onNavigate: (sectionId: string) => void;
}

export function DesktopNav({ onNavigate }: DesktopNavProps) {
  return (
    <div className="hidden md:flex gap-6">
      <Button
        variant="ghost"
        onClick={() => onNavigate("about")}
      >
        About
      </Button>
      <Button
        variant="ghost"
        onClick={() => onNavigate("projects")}
      >
        Projects
      </Button>
      <Button
        variant="ghost"
        onClick={() => onNavigate("leadership")}
      >
        Leadership
      </Button>
      <Button
        variant="default"
        onClick={() => onNavigate("contact")}
      >
        Contact
      </Button>
    </div>
  );
}