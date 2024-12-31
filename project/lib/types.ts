export type ProjectCategory = "Residential" | "Commercial" | "Sustainable" | "Conceptual";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory[];
  images: (string | StaticImageData)[];
  details: string[];
  tags: string[];
}