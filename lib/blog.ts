export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  img: string;
  tags: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "uv-printing-vs-digital-printing",
    title: "UV Printing vs Digital Printing: What's the Difference?",
    excerpt:
      "UV printing cures inks instantly with ultraviolet light, producing vivid, durable results on almost any substrate. Digital printing uses water or solvent-based inks that dry by evaporation. Here's how to choose.",
    category: "Print Knowledge",
    readTime: "6 min read",
    date: "2026-04-12",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["UV Print", "Technology", "Guide"],
  },
  {
    slug: "choosing-the-right-material-for-signage",
    title: "Choosing the Right Material for Your Signage",
    excerpt:
      "Sunpack, foam board, acrylic, aluminium composite — each material has specific strengths for different environments and applications. This guide helps you pick the right substrate every time.",
    category: "Material Guide",
    readTime: "8 min read",
    date: "2026-03-28",
    img: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80",
    tags: ["Materials", "Sunpack", "Acrylic", "Guide"],
  },
  {
    slug: "complete-guide-flex-banners",
    title: "The Complete Guide to Flex Banners",
    excerpt:
      "Front-lit, back-lit, mesh, blockout — flex banner media comes in many varieties. We break down the differences, applications, and specification tips for getting the best results from your flex print.",
    category: "Product Guide",
    readTime: "7 min read",
    date: "2026-03-15",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Flex", "Banners", "Outdoor", "Guide"],
  },
  {
    slug: "vinyl-stickers-branding-guide",
    title: "Vinyl Stickers: The Underrated Branding Powerhouse",
    excerpt:
      "From product labels to laptop stickers, vinyl stickers punch well above their weight for brand visibility. Here's how to spec, design, and use vinyl stickers for maximum brand impact.",
    category: "Branding",
    readTime: "5 min read",
    date: "2026-02-20",
    img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    tags: ["Stickers", "Branding", "Vinyl"],
  },
  {
    slug: "designing-for-uv-print-file-prep",
    title: "Designing for UV Print: File Preparation Guide",
    excerpt:
      "UV print rewards good file preparation. Learn the correct colour mode, resolution, bleed, and file format requirements to ensure your design prints exactly as you intended — every time.",
    category: "Design Guide",
    readTime: "9 min read",
    date: "2026-02-05",
    img: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    tags: ["Design", "File Prep", "Technical"],
  },
  {
    slug: "one-way-vision-window-graphics",
    title: "One Way Vision: Turning Glass Into a Billboard",
    excerpt:
      "OWV window graphics let you brand glass surfaces without blocking the view from inside. Retail, transport, hospitality — here's everything you need to know about specifying and installing OWV.",
    category: "Product Guide",
    readTime: "6 min read",
    date: "2026-01-18",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
    tags: ["OWV", "Window Graphics", "Retail"],
  },
];

export const blogCategories = [
  "All",
  "Print Knowledge",
  "Material Guide",
  "Product Guide",
  "Branding",
  "Design Guide",
];
