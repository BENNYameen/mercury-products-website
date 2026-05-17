export type Finish = string;
export type ProductSize = { label: string; dims: string };
export type FAQ = { q: string; a: string };
export type Spec = { label: string; value: string };

export interface Product {
  id: number;
  slug: string;
  category: "UV Print" | "Flex" | "Stickers" | "Display" | "Industrial";
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  finishes: Finish[];
  sizes: ProductSize[];
  materials: string[];
  turnaround: string;
  minQuantity: number;
  tags: string[];
  img: string;
  gallery: string[];
  faqs: FAQ[];
  specs: Spec[];
  relatedSlugs: string[];
  badge?: string;
  badgeColor?: string;
}

export const SITE_URL = "https://www.mercuryproducts.in";
export const COMPANY_NAME = "Mercury Products";
export const COMPANY_EMAIL = "hello@mercuryproducts.in";
export const COMPANY_PHONE = "+91 98765 43210";
export const COMPANY_ADDRESS = "241 Wythe Ave, Brooklyn, NY 11249";

export const DOT_COLOR: Record<string, string> = {
  "UV Print": "#f472b6",
  Flex: "#22d3ee",
  Stickers: "#4ade80",
  Display: "#818cf8",
  Industrial: "#fb923c",
};

export const CATEGORY_ACCENT: Record<string, string> = {
  "UV Print": "#f472b6",
  Flex: "#22d3ee",
  Stickers: "#4ade80",
  Display: "#818cf8",
  Industrial: "#fb923c",
};

export const products: Product[] = [
  {
    id: 1,
    slug: "sunpack-uv-direct",
    category: "UV Print",
    name: "Sunpack — UV Direct Print",
    tagline: "Bold outdoor signage with vivid, permanent colour.",
    shortDesc:
      "Rigid PVC sunpack sheets printed directly with UV inks — vibrant, weather-resistant, and built for outdoor signage.",
    longDesc:
      "Sunpack UV Direct Print delivers outstanding colour accuracy directly onto rigid PVC sheets using state-of-the-art UV flatbed printing technology. The UV-cured inks bond permanently to the substrate, producing prints that resist fading, moisture, and UV degradation for years of outdoor use. Ideal for retail POS displays, outdoor signage, hoardings, and exhibition panels. Available in custom sizes up to 8×4 ft with precise dimensional cutting.",
    features: [
      "UV flatbed direct printing on rigid PVC",
      "Weather-resistant, fade-proof UV-cured inks",
      "Custom sizes up to 8×4 ft",
      "Precision cutting to any shape or dimension",
      "High-resolution output up to 1440 dpi",
      "Lightweight yet rigid substrate",
      "Suitable for indoor and outdoor applications",
    ],
    finishes: ["Gloss", "Matte", "Satin", "Textured"],
    sizes: [
      { label: "Small", dims: "12×18 inches" },
      { label: "Medium", dims: "24×36 inches" },
      { label: "Large", dims: "48×36 inches" },
      { label: "Full Sheet", dims: "96×48 inches" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["3mm Sunpack PVC", "5mm Sunpack PVC", "8mm Sunpack PVC"],
    turnaround: "3–5 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "OUTDOOR", "RIGID", "FULL COLOUR", "WEATHER PROOF"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    ],
    faqs: [
      { q: "What is Sunpack?", a: "Sunpack is a lightweight, rigid expanded PVC sheet available in 3mm, 5mm, and 8mm thicknesses. It is the most widely used substrate for signage and display printing in India." },
      { q: "Is Sunpack suitable for outdoor use?", a: "Yes. UV-cured inks on sunpack are highly resistant to weathering, UV rays, and moisture, making it ideal for outdoor signage lasting 2–3 years." },
      { q: "Can I get custom sizes?", a: "Absolutely. We cut sunpack to any dimension you need, from small A4 panels to full 8×4 ft sheets." },
      { q: "What file format should I submit?", a: "We accept PDF, AI, EPS, and high-resolution TIFF/PNG files at 150–300 dpi at final print size." },
      { q: "Do you offer hole-drilling for mounting?", a: "Yes — corner holes, edge mounting holes, and custom hole patterns are available at no extra charge." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Resolution", value: "Up to 1440 dpi" },
      { label: "Thickness Options", value: "3mm / 5mm / 8mm" },
      { label: "Max Print Size", value: "8×4 ft (96×48 in)" },
      { label: "Ink Type", value: "UV-cured, weatherproof" },
      { label: "Turnaround", value: "3–5 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["foam-board-uv-direct", "acrylic-uv-print", "aluminium-standee"],
    badge: "POPULAR",
    badgeColor: "#f472b6",
  },
  {
    id: 2,
    slug: "foam-board-uv-direct",
    category: "UV Print",
    name: "Foam Board — UV Direct Print",
    tagline: "Lightweight precision for exhibitions and retail.",
    shortDesc:
      "Lightweight foam core with UV-printed surface — sharp imagery and clean edges for indoor displays and events.",
    longDesc:
      "Foam Board UV Direct Print combines the ultra-lightweight properties of foam core board with the sharpness and vibrancy of direct UV printing. The result is a premium display material that is easy to handle, mount, and transport, making it the go-to choice for trade exhibitions, retail POS, window displays, and presentation boards. Available with a choice of surface finishes and in thicknesses from 3mm to 10mm.",
    features: [
      "Direct UV printing on foam core board",
      "Ultra-lightweight — ideal for events and exhibitions",
      "Sharp, photo-realistic print quality",
      "Available in 3mm, 5mm, and 10mm thicknesses",
      "Precision guillotine and CNC cutting",
      "Easy mounting and handling",
      "Recyclable substrate",
    ],
    finishes: ["Gloss", "Matte", "Satin"],
    sizes: [
      { label: "A3", dims: "420×297 mm" },
      { label: "A2", dims: "594×420 mm" },
      { label: "A1", dims: "841×594 mm" },
      { label: "A0", dims: "1189×841 mm" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["3mm Foam Board", "5mm Foam Board", "10mm Foam Board"],
    turnaround: "2–4 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "INDOOR", "LIGHTWEIGHT", "EXHIBITION", "RETAIL"],
    img: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    ],
    faqs: [
      { q: "What is foam board?", a: "Foam board (also called foam core) is a lightweight sheet with a polystyrene foam core sandwiched between two smooth paper or plastic facings. It provides excellent rigidity relative to its weight." },
      { q: "Is foam board suitable for outdoor use?", a: "Foam board is primarily an indoor material. For outdoor applications, we recommend our Sunpack UV Direct Print option." },
      { q: "Can foam board be custom cut?", a: "Yes — we use precision CNC cutting to produce clean edges in any shape, including curves and complex die-cut profiles." },
      { q: "How do I mount foam board displays?", a: "Foam board can be mounted using double-sided tape, velcro strips, foam standoffs, or magnetic systems. We can add hook-and-loop backing on request." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Resolution", value: "Up to 1440 dpi" },
      { label: "Thickness Options", value: "3mm / 5mm / 10mm" },
      { label: "Max Print Size", value: "A0 (1189×841 mm)" },
      { label: "Ink Type", value: "UV-cured" },
      { label: "Turnaround", value: "2–4 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["sunpack-uv-direct", "canvas-uv-print", "product-display-stand"],
    badge: "POPULAR",
    badgeColor: "#f472b6",
  },
  {
    id: 3,
    slug: "vinyl-stickers",
    category: "Stickers",
    name: "Vinyl Stickers",
    tagline: "Die-cut precision. Colours that outlast everything.",
    shortDesc:
      "High-quality vinyl stickers with precision die-cut finishing — UV-resistant inks keep colours vivid outdoors.",
    longDesc:
      "Our vinyl stickers are produced on premium cast vinyl with UV-resistant solvent inks, delivering bold, saturated colours that survive sun, rain, and abrasion. Available in gloss or matte laminate, with kiss-cut (on backing sheet) or full die-cut to custom shapes. Perfect for product labelling, laptop branding, packaging decoration, helmet stickers, and promotional giveaways. Minimum order 10 pieces.",
    features: [
      "Premium cast vinyl substrate",
      "UV-resistant solvent inks — 5+ year outdoor durability",
      "Kiss-cut or full die-cut to any shape",
      "Gloss or matte laminate options",
      "Waterproof and scratch-resistant",
      "Repositionable adhesive available",
      "Custom shapes up to A3 size",
    ],
    finishes: ["Gloss Laminate", "Matte Laminate", "Holographic", "Transparent", "Metallic"],
    sizes: [
      { label: "Small", dims: "Up to 5×5 cm" },
      { label: "Medium", dims: "Up to 10×10 cm" },
      { label: "Large", dims: "Up to 20×20 cm" },
      { label: "A4 Sheet", dims: "21×29.7 cm" },
      { label: "Custom", dims: "Any shape/size" },
    ],
    materials: ["Cast Vinyl", "Calendered Vinyl", "Transparent Vinyl", "Metallic Vinyl"],
    turnaround: "2–3 business days",
    minQuantity: 10,
    tags: ["DIE-CUT", "GLOSSY", "MATTE", "WATERPROOF", "OUTDOOR"],
    img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    faqs: [
      { q: "How long do vinyl stickers last outdoors?", a: "With gloss or matte laminate, our cast vinyl stickers are rated 5+ years outdoors under normal UV and weather conditions." },
      { q: "Can I order different designs in one batch?", a: "Yes — gang printing allows multiple designs in a single order. Minimum 10 pieces per design applies." },
      { q: "What is the difference between kiss-cut and die-cut?", a: "Kiss-cut stickers are cut through the vinyl but not the backing, so they peel easily from a sheet. Die-cut stickers are cut all the way through to the custom shape, no backing sheet." },
      { q: "Do you offer white ink for transparent vinyl?", a: "Yes — white base layer on transparent vinyl is available for vibrant opaque areas on clear stickers." },
    ],
    specs: [
      { label: "Print Technology", value: "Solvent / UV Inkjet" },
      { label: "Resolution", value: "1440 dpi" },
      { label: "Substrate", value: "Cast / Calendered Vinyl" },
      { label: "Laminate", value: "Gloss / Matte / None" },
      { label: "Cut Type", value: "Kiss-cut or Die-cut" },
      { label: "Turnaround", value: "2–3 business days" },
      { label: "Min. Order", value: "10 pieces" },
    ],
    relatedSlugs: ["sunpack-uv-direct", "one-way-vision", "foam-board-uv-direct"],
    badge: "BESTSELLER",
    badgeColor: "#4ade80",
  },
  {
    id: 4,
    slug: "front-lit-flex",
    category: "Flex",
    name: "Front Lit Flex",
    tagline: "Maximum visibility for hoardings and signage.",
    shortDesc:
      "Durable front-lit flex banners for hoardings and illuminated signage — high-gain surface maximises brightness.",
    longDesc:
      "Front Lit Flex banners are the industry standard for outdoor hoardings, signage boards, and large-format branding. Printed on durable 440gsm front-lit flex media with solvent inks, these banners deliver vivid, UV-stable colours across massive formats. The high-gain surface reflects ambient and direct lighting for maximum daytime visibility. We print seamless panels up to 10 ft wide and join larger formats with heat welding.",
    features: [
      "440gsm premium front-lit flex media",
      "High-gain coated surface for superior brightness",
      "UV-stable solvent inks — 3+ year outdoor life",
      "Seamless print width up to 10 ft",
      "Heat-welded joins for large formats",
      "Reinforced hemming with grommets",
      "Eyelets at standard 12-inch spacing",
    ],
    finishes: ["Gloss", "Semi-Matte"],
    sizes: [
      { label: "Small Banner", dims: "4×2 ft" },
      { label: "Medium Banner", dims: "8×4 ft" },
      { label: "Large Hoarding", dims: "20×10 ft" },
      { label: "Extra Large", dims: "40×20 ft" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["440gsm Front Lit Flex", "500gsm Heavy Duty Flex"],
    turnaround: "2–4 business days",
    minQuantity: 1,
    tags: ["FRONT-LIT", "OUTDOOR", "LARGE FORMAT", "HOARDING", "UV STABLE"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1569144157591-c60f3f82f362?w=800&q=80",
    ],
    faqs: [
      { q: "What is front-lit flex?", a: "Front-lit flex is a coated polyester/PVC banner material designed for use where light falls on the front of the banner from external sources. It has an opaque white base for bold colour reproduction." },
      { q: "Can flex banners be reused?", a: "Yes — with proper storage (rolled, not folded) flex banners can be reused multiple times. Grommets prevent tearing at mounting points." },
      { q: "How are large format joins handled?", a: "Panels wider than our maximum print width are produced in strips and heat-welded or cold-laminate joined for seamless, invisible seams." },
      { q: "Do you supply mounting hardware?", a: "We supply grommets and can advise on rope, bungee, or clip mounting systems. Hardware itself is available separately." },
    ],
    specs: [
      { label: "Media Weight", value: "440gsm / 500gsm" },
      { label: "Print Technology", value: "Solvent Inkjet" },
      { label: "Max Width", value: "10 ft seamless" },
      { label: "Grommet Spacing", value: "12 inches (standard)" },
      { label: "Ink Durability", value: "3+ years outdoor" },
      { label: "Turnaround", value: "2–4 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["back-lit-flex", "one-way-vision", "aluminium-standee"],
    badge: "POPULAR",
    badgeColor: "#22d3ee",
  },
  {
    id: 5,
    slug: "back-lit-flex",
    category: "Flex",
    name: "Back Lit Flex",
    tagline: "Glowing depth for lightboxes and backlit cabinets.",
    shortDesc:
      "Translucent flex panels for lightbox and backlit cabinet applications — even light diffusion with stunning colour depth.",
    longDesc:
      "Back Lit Flex is a semi-translucent media specifically engineered for backlit signage applications such as lightboxes, illuminated cabinets, bus shelters, and airport signage. Printed with specially formulated backlit inks, the colours are calibrated to compensate for the transmitted light effect, delivering rich, accurate colour when illuminated. The media provides even light diffusion, eliminating hotspots from individual LED or fluorescent sources behind.",
    features: [
      "Premium semi-translucent backlit flex media",
      "Backlit-calibrated ink profiles for accurate colour under illumination",
      "Even light diffusion — no hotspots",
      "Suitable for LED and fluorescent backlit cabinets",
      "Available in standard and custom sizes",
      "Hem and grommet finishing",
      "Waterproof and UV-stable",
    ],
    finishes: ["Satin (standard for backlit)", "Matte"],
    sizes: [
      { label: "Lightbox Standard", dims: "A1 (594×841mm)" },
      { label: "Bus Shelter", dims: "1200×1800mm" },
      { label: "Large Cabinet", dims: "2000×3000mm" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["380gsm Back Lit Flex", "450gsm Premium Backlit Flex"],
    turnaround: "3–5 business days",
    minQuantity: 1,
    tags: ["BACK-LIT", "LIGHTBOX", "TRANSLUCENT", "LED", "LARGE FORMAT"],
    img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    faqs: [
      { q: "What is the difference between front-lit and back-lit flex?", a: "Front-lit flex has an opaque white base for use with light shining onto the banner from the front. Back-lit flex is semi-translucent for use in lightboxes where light shines through from behind." },
      { q: "Will colours look different when illuminated?", a: "We use backlit-specific ICC profiles that compensate for the colour shift caused by transmitted light, ensuring accurate colour reproduction when the cabinet is switched on." },
      { q: "Do you print for LED lightboxes specifically?", a: "Yes — our backlit flex is optimised for LED lighting, which is cooler and more even than fluorescent. It handles the blue-shifted LED spectrum correctly." },
      { q: "Can I order a replacement graphic for an existing lightbox?", a: "Absolutely. Send us the cabinet dimensions and we'll produce an exact-fit replacement graphic with correct bleed allowances." },
    ],
    specs: [
      { label: "Media Weight", value: "380gsm / 450gsm" },
      { label: "Print Technology", value: "Solvent Inkjet (backlit profiles)" },
      { label: "Light Transmission", value: "Optimised for even diffusion" },
      { label: "Compatibility", value: "LED and fluorescent backlit" },
      { label: "Ink Durability", value: "3+ years" },
      { label: "Turnaround", value: "3–5 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["front-lit-flex", "one-way-vision", "aluminium-standee"],
  },
  {
    id: 6,
    slug: "canvas-uv-print",
    category: "UV Print",
    name: "Canvas with UV Print",
    tagline: "Gallery-grade imagery with organic warmth.",
    shortDesc:
      "Gallery-quality UV prints on premium stretched canvas — rich, deep colour with a tactile texture.",
    longDesc:
      "Canvas UV Print brings the warmth and texture of traditional canvas together with the precision and vibrancy of modern UV inkjet technology. We print directly onto premium polyester-cotton blend canvas using UV-cured inks that are rated for 75+ years of indoor display without fading. Available hand-stretched over solid pine frames in standard gallery depths or rolled for your own framing. Ideal for fine art reproduction, interior decoration, hospitality, and luxury brand displays.",
    features: [
      "UV direct printing on premium polyester-cotton canvas",
      "75+ year indoor fade resistance",
      "Available stretched on pine frames or rolled",
      "Gallery-depth (38mm) and standard (18mm) stretcher bars",
      "Hand-stretched and back-stapled finish",
      "Anti-glare coating available",
      "Multiple sizes including panoramic formats",
    ],
    finishes: ["Gloss UV Coat", "Matte UV Coat", "Satin UV Coat", "No Coat (natural canvas feel)"],
    sizes: [
      { label: "Small", dims: "30×20 cm" },
      { label: "Medium", dims: "60×40 cm" },
      { label: "Large", dims: "90×60 cm" },
      { label: "Extra Large", dims: "120×80 cm" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["340gsm Polyester-Cotton Canvas", "380gsm Premium Cotton Canvas"],
    turnaround: "4–6 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "CANVAS", "GALLERY", "INTERIOR", "FINE ART"],
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    ],
    faqs: [
      { q: "Can I supply my own artwork?", a: "Yes — we accept high-resolution files at minimum 150 dpi at final print size. We'll provide a digital proof before printing." },
      { q: "Do canvas prints come ready to hang?", a: "Stretched canvas prints include a sawtooth hanger on the back, ready to hang straight out of the packaging." },
      { q: "What is the image wrap option?", a: "Image wrap extends the print around the sides of the stretcher bar (typically 3.8cm). Mirror wrap reflects the edge image. Colour wrap fills the sides with a solid colour." },
      { q: "Are canvas prints suitable for bathrooms?", a: "We recommend our UV-coated canvas option for humid environments. A gloss or satin UV coat provides moisture resistance." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Canvas Weight", value: "340–380gsm" },
      { label: "Frame Depth", value: "18mm / 38mm (gallery)" },
      { label: "Fade Resistance", value: "75+ years indoor" },
      { label: "Max Size", value: "150×100 cm" },
      { label: "Turnaround", value: "4–6 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["wood-uv-print", "glass-uv-print", "acrylic-uv-print"],
  },
  {
    id: 7,
    slug: "glass-uv-print",
    category: "UV Print",
    name: "Glass with UV Print",
    tagline: "Crystal-clear precision for architectural applications.",
    shortDesc:
      "Precision UV printing on flat glass panels for architectural, retail, and decorative applications.",
    longDesc:
      "Glass UV Print uses advanced UV flatbed technology to print directly onto glass surfaces, creating stunning decorative and functional glass panels for architecture, interior design, and retail environments. The UV inks cure instantly on the glass surface, forming a hard, durable layer that is scratch-resistant and easy to clean. Applications include decorative partitions, shower screens, splashbacks, signage panels, and branded interior features.",
    features: [
      "Direct UV printing on flat glass panels",
      "Hard-wearing UV-cured surface — scratch and chemical resistant",
      "Suitable for toughened/tempered and standard float glass",
      "Full colour with white ink support for opacity on clear glass",
      "Hygienic, easy-clean surface",
      "Bespoke sizes and shapes",
      "Indoor and sheltered outdoor applications",
    ],
    finishes: ["Gloss", "Frosted Effect", "Satin", "Full Colour"],
    sizes: [
      { label: "Small Panel", dims: "300×300 mm" },
      { label: "Medium Panel", dims: "600×400 mm" },
      { label: "Large Panel", dims: "1200×600 mm" },
      { label: "Full Panel", dims: "2400×1200 mm" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["4mm Clear Float Glass", "6mm Toughened Glass", "10mm Safety Glass"],
    turnaround: "5–7 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "GLASS", "ARCHITECTURAL", "INTERIOR", "DECORATIVE"],
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    faqs: [
      { q: "Can you print on tempered glass?", a: "Yes — we print on pre-tempered glass panels. Note: glass cannot be cut or tempered after UV printing, so dimensions must be finalised before production." },
      { q: "Is printed glass safe for kitchen splashbacks?", a: "UV-printed glass splashbacks are suitable for most kitchen environments when used with appropriate sealant around edges. We recommend toughened glass (6mm minimum) for this application." },
      { q: "How durable is the printed surface?", a: "UV-cured inks on glass form an extremely hard surface that resists most household cleaners, scratching, and moisture. Avoid abrasive cleaners." },
      { q: "Do you offer frosted or etch effects?", a: "Yes — we can simulate sandblasted or etched glass effects using UV printing on clear glass, at a fraction of the cost of actual etching." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Glass Types", value: "Float, Toughened, Safety" },
      { label: "Thickness", value: "4mm / 6mm / 10mm" },
      { label: "Max Size", value: "2400×1200 mm" },
      { label: "White Ink", value: "Available for opacity" },
      { label: "Turnaround", value: "5–7 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["acrylic-uv-print", "wood-uv-print", "canvas-uv-print"],
  },
  {
    id: 8,
    slug: "acrylic-uv-print",
    category: "UV Print",
    name: "Acrylic with UV Print",
    tagline: "Premium clarity for signage, awards and display.",
    shortDesc:
      "Sharp UV prints on clear or coloured acrylic — premium look for signage, awards, and retail displays.",
    longDesc:
      "Acrylic UV Print combines the premium transparency and rigidity of cast acrylic with the vivid colour accuracy of direct UV printing. UV-cured inks bond permanently to the acrylic surface, producing razor-sharp text and photographic-quality images. Available on clear, frosted, coloured, and mirror acrylic in thicknesses from 2mm to 20mm. Applications include premium signage, branded awards, retail display fixtures, illuminated signs (edge-lit LED), and architectural features.",
    features: [
      "Direct UV printing on cast and extruded acrylic",
      "Available in clear, frosted, coloured and mirror finishes",
      "2mm to 20mm thickness options",
      "Laser-cut edges with polished finish",
      "White ink available for opacity on clear acrylic",
      "Edge-lit LED sign compatibility",
      "Mounting holes, standoffs, and fixings available",
    ],
    finishes: ["Gloss", "Frosted", "Satin", "Mirror", "Coloured Acrylic"],
    sizes: [
      { label: "Small", dims: "200×150 mm" },
      { label: "Medium", dims: "500×400 mm" },
      { label: "Large", dims: "1000×600 mm" },
      { label: "Full Sheet", dims: "2440×1220 mm" },
      { label: "Custom", dims: "Any shape/size" },
    ],
    materials: ["2mm Cast Acrylic", "3mm Cast Acrylic", "5mm Cast Acrylic", "10mm Cast Acrylic", "20mm Cast Acrylic"],
    turnaround: "3–5 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "ACRYLIC", "PREMIUM SIGNAGE", "AWARDS", "RETAIL"],
    img: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    ],
    faqs: [
      { q: "What is the difference between cast and extruded acrylic?", a: "Cast acrylic has tighter tolerances, better optical clarity, and higher chemical resistance than extruded acrylic. We use cast acrylic as standard for UV printing for best results." },
      { q: "Can I get acrylic prints with stand-off fixings?", a: "Yes — we can drill mounting holes and supply chrome or satin stand-off fixings at standard spacings, giving a floating wall-mounted appearance." },
      { q: "Is UV-printed acrylic suitable for outdoor signage?", a: "UV-cured inks on acrylic are weather-resistant and suitable for sheltered outdoor applications. For exposed outdoor use, we recommend UV-stabilised acrylic with a protective top coat." },
      { q: "Can acrylic be used for illuminated (edge-lit) signs?", a: "Yes — clear acrylic is ideal for edge-lit LED signs. We can engrave or print on the face and supply with LED strip mounting channels." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Acrylic Type", value: "Cast / Extruded" },
      { label: "Thickness Options", value: "2 / 3 / 5 / 10 / 20mm" },
      { label: "Max Size", value: "2440×1220 mm" },
      { label: "Cut Method", value: "Laser cut / CNC routed" },
      { label: "Turnaround", value: "3–5 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["glass-uv-print", "sunpack-uv-direct", "aluminium-standee"],
    badge: "PREMIUM",
    badgeColor: "#818cf8",
  },
  {
    id: 9,
    slug: "one-way-vision",
    category: "Flex",
    name: "One Way Vision",
    tagline: "See-through graphics for windows and vehicles.",
    shortDesc:
      "Perforated window vinyl — your graphic from outside, full visibility from within. For retail windows and vehicles.",
    longDesc:
      "One Way Vision (OWV) is a perforated self-adhesive vinyl that allows full-colour graphics to be applied to glass surfaces while maintaining outward visibility from inside. The micro-perforations (typically 1.5mm holes in a 50/50 or 60/40 pattern) allow light to pass through, making the material appear opaque from outside when printed, while remaining see-through from inside. Widely used for retail window branding, vehicle wraps, transport advertising, and architectural privacy screens.",
    features: [
      "Micro-perforated self-adhesive vinyl (50/50 pattern)",
      "Full-colour UV-resistant solvent print",
      "Clear outward view from inside",
      "Suitable for flat glass surfaces and vehicle windows",
      "Easy removal without residue",
      "UV-stable inks — 2+ year outdoor life",
      "Custom cut to window dimensions",
    ],
    finishes: ["Gloss Print Surface", "Matte Print Surface"],
    sizes: [
      { label: "Small Window", dims: "500×500 mm" },
      { label: "Medium Window", dims: "1000×1500 mm" },
      { label: "Large Window", dims: "2000×3000 mm" },
      { label: "Vehicle Side", dims: "Custom vehicle template" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["OWV 50/50 Perforated Vinyl", "OWV 60/40 Perforated Vinyl"],
    turnaround: "3–4 business days",
    minQuantity: 1,
    tags: ["PERFORATED", "WINDOW VINYL", "SEE-THROUGH", "VEHICLE WRAP", "RETAIL"],
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&q=80",
    ],
    faqs: [
      { q: "How much visibility is maintained from inside?", a: "In 50/50 OWV, 50% of the surface is perforated, providing reasonable inside visibility. In bright daylight, the graphic appears fully opaque from outside while the interior view is partially maintained." },
      { q: "Is OWV easy to install?", a: "With correct surface preparation (clean, dry, oil-free glass), OWV applies using a squeegee and edge-trim technique. We recommend professional installation for large areas." },
      { q: "Can OWV be used on vehicle rear windows?", a: "Yes — OWV is a popular choice for rear vehicle windows in bus and truck advertising. Ensure the vehicle's rear window defroster is not embedded in the glass before application." },
      { q: "How is OWV removed?", a: "OWV removes cleanly from most glass surfaces without leaving adhesive residue. Heat application (heat gun) helps with older installations." },
    ],
    specs: [
      { label: "Perforation Pattern", value: "50/50 or 60/40" },
      { label: "Hole Size", value: "1.5mm diameter" },
      { label: "Print Technology", value: "Solvent Inkjet" },
      { label: "Adhesive", value: "Pressure-sensitive, removable" },
      { label: "Outdoor Life", value: "2+ years" },
      { label: "Turnaround", value: "3–4 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["vinyl-stickers", "front-lit-flex", "back-lit-flex"],
  },
  {
    id: 10,
    slug: "wood-uv-print",
    category: "UV Print",
    name: "Wood with UV Print",
    tagline: "The warmth of wood, the precision of UV print.",
    shortDesc:
      "Direct UV printing on natural and engineered wood — organic aesthetics with photo-realistic quality.",
    longDesc:
      "Wood UV Print allows brand graphics, photography, and fine art to be printed directly onto the surface of natural timber, ply, MDF, and engineered wood panels using UV-cured inks. The result is a striking fusion of organic material warmth and digital precision — perfect for interior branding, hospitality décor, retail displays, luxury gifting, and architectural feature panels. The grain of natural wood shows through lighter print areas for a uniquely tactile aesthetic.",
    features: [
      "Direct UV printing on natural and engineered wood",
      "Grain texture visible through lighter colour areas",
      "Available on solid timber, ply, MDF and bamboo",
      "UV-cured inks — permanent, hard-wearing surface",
      "CNC routing for custom shapes",
      "Mounting fixings and hanging hardware available",
      "Suitable for interior use",
    ],
    finishes: ["Uncoated (natural wood feel)", "Gloss UV Coat", "Matte UV Coat", "Varnish Top Coat"],
    sizes: [
      { label: "Small Panel", dims: "200×200 mm" },
      { label: "Medium Panel", dims: "500×400 mm" },
      { label: "Large Panel", dims: "1000×600 mm" },
      { label: "Full Sheet", dims: "2440×1220 mm" },
      { label: "Custom", dims: "Any shape" },
    ],
    materials: ["12mm MDF", "18mm MDF", "12mm Birch Ply", "18mm Birch Ply", "Solid Oak / Pine Slabs"],
    turnaround: "4–6 business days",
    minQuantity: 1,
    tags: ["UV DIRECT", "WOOD", "NATURAL", "INTERIOR DÉCOR", "LUXURY"],
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    ],
    faqs: [
      { q: "Which wood types can be printed on?", a: "We print on MDF, birch plywood, pine, oak, and bamboo panels. Oily or resinous woods (teak, cedar) may require a special primer — ask us before ordering." },
      { q: "Will the wood grain show through the print?", a: "Yes — this is part of the aesthetic. In areas with lighter or more transparent ink coverage, the natural grain pattern of the wood is visible, creating a unique texture. If you want full opacity, we can apply a white base layer first." },
      { q: "Is wood printing suitable for outdoor use?", a: "Outdoor wood UV prints are not recommended without additional weatherproof sealing and use of exterior-grade timber. We can discuss outdoor-specific solutions on enquiry." },
      { q: "Can wood prints be custom-shaped?", a: "Yes — we use CNC routing to cut timber panels to custom shapes including circles, letters, and complex contours." },
    ],
    specs: [
      { label: "Print Technology", value: "UV Flatbed Direct" },
      { label: "Wood Types", value: "MDF, Ply, Solid Timber, Bamboo" },
      { label: "Thickness", value: "12mm / 18mm standard" },
      { label: "Max Size", value: "2440×1220 mm" },
      { label: "Cut Method", value: "CNC Router" },
      { label: "Turnaround", value: "4–6 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["canvas-uv-print", "glass-uv-print", "acrylic-uv-print"],
  },
  {
    id: 11,
    slug: "aluminium-standee",
    category: "Display",
    name: "Aluminium Standee",
    tagline: "Free-standing impact for events and retail floors.",
    shortDesc:
      "Aluminium standee frames with UV-printed graphic panels — portable and perfect for retail and events.",
    longDesc:
      "Aluminium Standees are the definitive floor-standing display solution for retail environments, exhibitions, corporate events, and promotional campaigns. The lightweight aluminium frame provides a rigid, professional presentation structure for UV-printed or flex graphic panels. The snap-frame design allows rapid graphic changes without tools, making standees ideal for rotating promotions and seasonal campaigns. Available in standard portrait and landscape formats.",
    features: [
      "Lightweight extruded aluminium frame",
      "Snap-frame design for toolless graphic changes",
      "Includes UV-printed graphic panel",
      "Stable A-frame or flat-back base options",
      "Collapsible for transport and storage",
      "Portrait and landscape orientations",
      "Cable management for digital panel upgrades",
    ],
    finishes: ["Silver Anodised Frame", "Black Anodised Frame", "White Powder Coat"],
    sizes: [
      { label: "A1 Standee", dims: "594×841 mm graphic" },
      { label: "A0 Standee", dims: "841×1189 mm graphic" },
      { label: "2m Tall", dims: "700×2000 mm graphic" },
      { label: "Custom", dims: "Any dimension" },
    ],
    materials: ["Extruded Aluminium Frame", "PVC Graphic Panel", "Flex Graphic Panel"],
    turnaround: "5–7 business days",
    minQuantity: 1,
    tags: ["ALUMINIUM", "DISPLAY", "PORTABLE", "EVENT", "RETAIL"],
    img: "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    ],
    faqs: [
      { q: "Can I order replacement graphics without a new frame?", a: "Yes — replacement graphic panels are available separately. Just specify your standee model and graphic size when ordering." },
      { q: "How easy is it to change the graphic?", a: "Snap-frame standees allow graphic changes in seconds — simply press the corner release, lift the frame, swap the graphic, and close." },
      { q: "Do standees come assembled?", a: "Yes, standees are supplied fully assembled with the graphic installed, packed in a protective carry bag. No tools required." },
      { q: "Are standees stable in busy public areas?", a: "Our standees use a wide-base A-frame or weighted flat base design for stability on level floors. For outdoor use, we recommend weighted bases or ground stakes." },
    ],
    specs: [
      { label: "Frame Material", value: "Extruded Aluminium" },
      { label: "Frame Finish", value: "Silver / Black / White" },
      { label: "Graphic Types", value: "PVC, Flex, or Fabric" },
      { label: "Assembly", value: "Tool-free snap frame" },
      { label: "Transport", value: "Includes carry bag" },
      { label: "Turnaround", value: "5–7 business days" },
      { label: "Min. Order", value: "1 piece" },
    ],
    relatedSlugs: ["product-display-stand", "front-lit-flex", "sunpack-uv-direct"],
    badge: "NEW",
    badgeColor: "#818cf8",
  },
  {
    id: 12,
    slug: "product-display-stand",
    category: "Display",
    name: "Product Display Stand",
    tagline: "Retail merchandising built for brand impact.",
    shortDesc:
      "Custom-fabricated display stands for retail merchandising — engineered for product visibility.",
    longDesc:
      "Product Display Stands are custom-engineered retail fixtures combining structural fabrication with premium UV-printed branding on all visible surfaces. Designed in collaboration with your merchandising team, our display stands optimise product placement, brand visibility, and customer interaction at point of sale. We produce floor-standing gondola units, counter-top displays, and hanging merchandiser systems in acrylic, sunpack, and aluminium substrate combinations.",
    features: [
      "Custom structural design and fabrication",
      "UV-printed branding on all visible panels",
      "Floor-standing, counter-top, and hanging configurations",
      "Shelving, hooks, and product holder options",
      "Sturdy construction for heavy product loads",
      "Flat-pack delivery with assembly instructions",
      "Replacement graphic service available",
    ],
    finishes: ["Gloss UV Print", "Matte UV Print", "Soft-touch Laminate"],
    sizes: [
      { label: "Counter Display", dims: "300×300×400mm" },
      { label: "Floor Gondola", dims: "600×400×1600mm" },
      { label: "Tall Tower", dims: "400×400×2000mm" },
      { label: "Custom", dims: "Any specification" },
    ],
    materials: ["Corrugated Board", "Acrylic", "Sunpack PVC", "Aluminium Composite"],
    turnaround: "7–10 business days",
    minQuantity: 1,
    tags: ["RETAIL", "CUSTOM", "BRANDED", "FLOOR STANDING", "MERCHANDISING"],
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    ],
    faqs: [
      { q: "Do you handle the full design process?", a: "Yes — our structural design team will work with you from concept to production, including technical drawings, 3D renderings, and prototype approval." },
      { q: "What is the minimum order for display stands?", a: "We produce bespoke display stands from single prototypes to high-volume retail rollouts. Contact us with your requirements for a tailored quote." },
      { q: "How are display stands shipped?", a: "Stands are typically supplied flat-packed for efficient shipping and on-site assembly. Assembly is designed to be straightforward without specialist tools." },
      { q: "Can I get replacement graphics for an existing stand?", a: "Yes — we maintain production files and can supply replacement graphics for any stand we have produced." },
    ],
    specs: [
      { label: "Construction", value: "Custom fabrication" },
      { label: "Print", value: "UV Direct on all visible panels" },
      { label: "Configurations", value: "Floor, Counter, Hanging" },
      { label: "Materials", value: "Board / Acrylic / Sunpack / Aluminium" },
      { label: "Load Capacity", value: "By design specification" },
      { label: "Turnaround", value: "7–10 business days" },
      { label: "Min. Order", value: "1 unit (enquiry basis)" },
    ],
    relatedSlugs: ["aluminium-standee", "sunpack-uv-direct", "acrylic-uv-print"],
  },
  {
    id: 13,
    slug: "sunpack-box-tray",
    category: "Industrial",
    name: "5mm Sunpack Box & Tray",
    tagline: "Precision-fabricated rigid packaging for industry.",
    shortDesc:
      "5mm sunpack fabricated into rigid boxes and trays for industrial and commercial use — durable and dimensionally precise.",
    longDesc:
      "5mm Sunpack Box and Tray fabrication provides a cost-effective, lightweight, and chemical-resistant rigid packaging solution for industrial, pharmaceutical, electronics, and commercial applications. Cut and folded from 5mm expanded PVC (sunpack) sheet, these boxes and trays maintain dimensional precision across large production runs. The material resists moisture, most chemicals, and impact far better than paper or cardboard alternatives. Custom dimensions, dividers, lids, and branding prints are all available.",
    features: [
      "Fabricated from 5mm expanded PVC (sunpack)",
      "Moisture-proof and chemical-resistant",
      "Dimensional precision via CNC cutting and scoring",
      "Custom partitions, inserts, and lids",
      "Lightweight yet rigid and stackable",
      "Optional UV-printed branding",
      "Industrial and pharmaceutical grade options",
    ],
    finishes: ["Plain White", "Printed / Branded", "Coloured PVC"],
    sizes: [
      { label: "Small Tray", dims: "200×150×50mm" },
      { label: "Medium Box", dims: "400×300×100mm" },
      { label: "Large Box", dims: "600×400×200mm" },
      { label: "Custom", dims: "Any specification" },
    ],
    materials: ["5mm White Sunpack PVC", "5mm Coloured Sunpack PVC", "5mm Anti-static Sunpack"],
    turnaround: "5–8 business days",
    minQuantity: 10,
    tags: ["5MM", "INDUSTRIAL", "RIGID PACKAGING", "MOISTURE PROOF", "CUSTOM SIZE"],
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&q=80",
    ],
    faqs: [
      { q: "What makes sunpack better than cardboard for industrial trays?", a: "Sunpack PVC is waterproof, does not degrade when wet, resists most chemicals, and is reusable many times over. Cardboard loses structural integrity when moist and cannot be sanitised effectively." },
      { q: "Can you add dividers or inserts?", a: "Yes — custom internal partitions, slot-together dividers, and foam inserts are all available. Provide us with the product dimensions you need to accommodate." },
      { q: "Are sunpack boxes stackable?", a: "Yes — 5mm sunpack boxes are structurally rigid and can be stacked under normal warehouse loads. For very heavy loads, we can specify 8mm or 10mm material." },
      { q: "What is the minimum order quantity?", a: "Minimum order is 10 pieces. For high-volume requirements, please contact us for competitive pricing on 100+ piece orders." },
    ],
    specs: [
      { label: "Material", value: "5mm Expanded PVC (Sunpack)" },
      { label: "Fabrication", value: "CNC cut and scored" },
      { label: "Moisture Resistance", value: "Fully waterproof" },
      { label: "Chemical Resistance", value: "Resistant to dilute acids/alkalis" },
      { label: "Print Option", value: "UV Direct branding available" },
      { label: "Turnaround", value: "5–8 business days" },
      { label: "Min. Order", value: "10 pieces" },
    ],
    relatedSlugs: ["sunpack-uv-direct", "foam-board-uv-direct", "product-display-stand"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];
}

export const CATEGORIES = ["All", "UV Print", "Flex", "Stickers", "Display", "Industrial"] as const;
