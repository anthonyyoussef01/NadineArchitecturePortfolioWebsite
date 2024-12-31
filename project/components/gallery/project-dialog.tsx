'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Project } from '@/lib/types';
import { ImageCarousel } from '@/components/gallery/image-carousel';
import { useState, useEffect } from 'react';

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (open === false) setCurrentImageIndex(0);
  }, [open]);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-grow px-6 pb-6">
          <div className="space-y-6">
            <div className="flex-none">
              <ImageCarousel
                  images={project.images}
                  currentIndex={currentImageIndex}
                  onNext={nextImage}
                  onPrevious={previousImage}
                  title={project.title}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-2 w-1.5 h-1.5 bg-primary/50 rounded-full flex-none"/>
                        <span>{detail}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.category.map((cat, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/10 rounded-full"
                    >
                  {cat}
                </span>
                ))}
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/10 rounded-full"
                    >
                  {tag}
                </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
