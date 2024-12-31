export type ProjectCategory = "residential" | "commercial" | "sustainable" | "conceptual";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  images: (string | StaticImageData)[];
  details: string[];
  tags: string[];
}