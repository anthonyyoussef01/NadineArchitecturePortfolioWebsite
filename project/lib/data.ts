import { Project } from "./types";

import playgroundImage1 from "@/lib/images/playground/A3.1_PlaygroundComposition.jpeg";
import playgroundImage2 from "@/lib/images/playground/A3.8_Playground1&2-Point.jpeg";
import playgroundImage3 from "@/lib/images/playground/A3.9_SmartBridgeModel.jpg";
import farnsworthHouseImage1 from "@/lib/images/farnsworth/A2.3_FarnsworthHouseIsometric.jpeg";
import farnsworthHouseImage2 from "@/lib/images/farnsworth/A2.4_FarnsworthComposite.jpg";

export const projects: Project[] = [
  {
    id: "playground-design",
    title: "Playground Design (Smart Bridge)",
    shortDescription: "A conceptual playground design for early childhood education",
    description: "Smart Bridge is a conceptual playground design that merges education and play for " +
        "children aged 2-5, situated outside a library. This project showcases my ability to design " +
        "thoughtful, user-centric spaces that prioritize safety, engagement, and functionality. Key " +
        "features include a suspension bridge to challenge balance, educational pathways " +
        "integrating letters and numbers, and thermoplastic rubber matting for safety. My design " +
        "process reflects attention to site context, solar orientation, and interactive experiences, " +
        "demonstrating my capacity for innovative problem-solving and creating meaningful " +
        "spaces that foster community and growth.",
    category: ["conceptual"],
    images: [
      playgroundImage1,
      playgroundImage2,
      playgroundImage3,
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c",
    ],
    details: [
      "Interactive play structures",
      "Educational elements",
      "Safety surfacing",
      "Site-specific design",
      "User-centric approach",
      "Community engagement"
    ],
    tags: ["Playground", "Conceptual", "Educational", "Community", "Urban", "Park", "Sustainable", "Public Space"]
  },
  {
    id: "farnsworth-house",
    title: "Farnsworth House",
    shortDescription: "A modern interpretation of a classic architectural icon",
    description: "Inspired by Ludwig Mies van der Rohe, the Farnsworth House project allowed me to " +
        "refine my drafting abilities while embracing the challenge of representing a renowned " +
        "architectural icon. Using my creativity, I focused on enhancing the house’s transparency " +
        "and tying it seamlessly to its site context, creating a nature-reflecting masterpiece. By " +
        "identifying its most prominent element, I emphasized its harmony with the " +
        "surroundings, elevating its appeal while preserving its architectural essence.",
    category: ["conceptual", "residential"],
    images: [
      farnsworthHouseImage1,
      farnsworthHouseImage2,
    ],
    details: [
      "Architectural drafting",
      "Site integration",
      "Material selection",
      "Transparency and light",
      "Iconic design elements"
    ],
    tags: ["Residential", "Conceptual", "Modern", "Iconic"]
  },
  {
    id: "cubic-exploration",
    title: "Cubic Exploration",
    shortDescription: "A conceptual project exploring interconnected forms and spaces",
    description: "This Cubic Exploration project, featuring my design Interlocked, emphasizes symmetry " +
        "and balance, showcasing my ability to approach design with a refined architectural eye. " +
        "It helped me enhance my drafting skills through precise and detail-oriented work, " +
        "resulting in interconnected forms that are both harmonious and visually striking. This " +
        "project reflects my aim to create thoughtful, well-executed designs.",
    category: ["conceptual"],
    images: [
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    ],
    details: [
      "Multi-purpose event spaces",
      "Exhibition areas",
      "Performance venue",
      "Educational facilities",
      "Cultural preservation elements"
    ],
    tags: ["Cultural", "Commercial", "Modern", "Heritage"]
  },
  {
    id: "eco-housing",
    title: "Eco-Housing Development",
    shortDescription: "Sustainable living spaces with minimal environmental impact",
    description: "An innovative housing development that prioritizes environmental sustainability through smart design and renewable energy integration.",
    category: ["sustainable"],
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc"
    ],
    details: [
      "Net-zero energy design",
      "Green roof systems",
      "Natural ventilation",
      "Sustainable materials",
      "Smart home technology"
    ],
    tags: ["Residential", "Eco-Friendly", "Smart Home", "Sustainable"]
  },
  {
    id: "future-office",
    title: "Future Office Concept",
    shortDescription: "Reimagining the post-pandemic workplace",
    description: "A conceptual design for future-focused office spaces that prioritize flexibility, collaboration, and employee wellbeing.",
    category: ["commercial"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1600607687101-9f2b182b7209",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b"
    ],
    details: [
      "Flexible workspaces",
      "Biophilic design elements",
      "Advanced air filtration",
      "Collaborative zones",
      "Wellness areas"
    ],
    tags: ["Commercial", "Office", "Innovation", "Wellness"]
  }
];