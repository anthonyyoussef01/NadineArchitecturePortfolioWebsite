"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectGrid } from "@/components/gallery/project-grid";
import { ProjectFilters } from "@/components/gallery/project-filters";
import { FileText } from "lucide-react";
import { useState } from "react";
import { ProjectCategory, Project } from "@/lib/types";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of my architectural designs and concepts developed during my academic journey.
          </p>
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileText className="h-4 w-4" />
            View Resume
          </Button>
        </motion.div>

        <ProjectFilters 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        
        <ProjectGrid selectedCategory={selectedCategory} />
      </div>
    </section>
  );
}