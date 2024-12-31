"use client";

import { Button } from "@/components/ui/button";
import { ProjectCategory } from "@/lib/types";
import { motion } from "framer-motion";

interface ProjectFiltersProps {
  selectedCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
}

export function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  const categories: (ProjectCategory | "all")[] = [
    "all",
    "residential",
    "commercial",
    "sustainable",
    "conceptual"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-4 justify-center mb-8"
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
}