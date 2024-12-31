import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectDialog } from "@/components/gallery/project-dialog";
import { useState } from "react";
import { Project, ProjectCategory } from "@/lib/types";
import { projects } from "@/lib/data";
import Image from 'next/image';

interface ProjectGridProps {
  selectedCategory: ProjectCategory | "all";
}

export function ProjectGrid({ selectedCategory }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.shortDescription}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      />
    </>
  );
}