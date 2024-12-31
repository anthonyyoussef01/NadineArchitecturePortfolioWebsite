"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileNavProps {
  onNavigate: (sectionId: string) => void;
}

export function MobileNav({ onNavigate }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (sectionId: string) => {
    setOpen(false);
    onNavigate(sectionId);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleNavigation("about")}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleNavigation("leadership")}
          >
            Leadership
          </Button>
          <Button
            variant="default"
            className="justify-start"
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}