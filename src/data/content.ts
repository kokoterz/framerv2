import { img } from "./assets";

/* ----------------------------- Navigation ----------------------------- */
export const navLinks = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "Why Erie", href: "#why-erie" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Tutorials", href: "#tutorials" },
];

/* ------------------------------- Hero ---------------------------------- */
export const heroGallery = [
  {
    image: img.helmetWoman,
    prompt:
      "a surreal, hyper-realistic portrait of a young woman wearing a glossy retro futuristic helmet with a transparent visor. Inside the visor, several small orange goldfish are floating as if swimming in water.",
  },
  {
    image: img.jungleWoman,
    prompt:
      "A portrait of a woman with red curly hair, bright green cat-like eyes, and freckles, wearing a flowing brown dress amidst lush green jungle foliage, warm golden hour sunlight, shot with a Canon EOS R5, 85mm f/1.2 lens.",
  },
  {
    image: img.mustang,
    prompt:
      "a vintage red muscle car parked on a sunlit empty street, cinematic reflections, golden hour, ultra-detailed automotive photography, shallow depth of field.",
  },
  {
    image: img.skincareOrchid,
    prompt:
      "cosmetic product arrangement on a glossy blue platform with fresh white orchids, soft studio lighting, indoor product photography, front view, hyper-realistic.",
  },
];

/* --------------------------- Core features ----------------------------- */
export const features = [
  {
    badge: "POPULAR",
    title: "Omni-Model Architecture",
    body: "Five specialized generative models work in concert — VOID-Ultra for photorealism, Photon v3 for portraits, AnimaX for illustration, Render3D for spatial design, and Cinematic for film-grade outputs. Each fine-tuned to maximum quality in its domain.",
    icon: "diamond",
    featured: true,
  },
  {
    badge: "PERFORMANCE",
    title: "Sub-3s Generation",
    body: "Our distillation pipeline produces stunning 1024px images in under 3 seconds. Iterate fast, ship faster.",
    icon: "bolt",
  },
  {
    badge: "AI TRAINING",
    title: "Style DNA™",
    body: "Upload 3–5 reference images to train a personal style fingerprint in under 5 minutes. Consistent aesthetics, every time.",
    icon: "star",
  },
  {
    badge: "EXCLUSIVE",
    title: "Image → Video",
    body: "Animate any image with motion prompts. Cinematic camera moves, physics-aware dynamics, up to 60 seconds of 4K output.",
    icon: "video",
  },
  {
    badge: "EDITING",
    title: "Inpainting Canvas",
    body: "Surgically edit any region with natural language. Replace, extend, or refine — non-destructive, infinite history.",
    icon: "edit",
  },
];

/* --------------------------- Community grid ---------------------------- */
type GalleryItem = { image: string; action: "video" | "style" | "prompt" };
export const communityRowA: GalleryItem[] = [
  { image: img.twins, action: "video" },
  { image: img.tennisRed, action: "video" },
  { image: img.catDaisies, action: "style" },
  { image: img.frecklesFace, action: "prompt" },
  { image: img.womanPoppies, action: "style" },
  { image: img.cyberWoman, action: "video" },
];
export const communityRowB: GalleryItem[] = [
  { image: img.catFlowers, action: "style" },
  { image: img.tennisYellow, action: "video" },
  { image: img.bedroomOcean, action: "prompt" },
  { image: img.womanWhiteSuit, action: "style" },
  { image: img.glassMan, action: "video" },
  { image: img.diamondRing, action: "prompt" },
];

/* ----------------------------- Use cases ------------------------------- */
export const useCases = [
  {
    title: "Product Photography",
    body: "Product photography at scale, background variations, product shots without a photoshoot, and photorealistic imagery.",
    image: img.skincareOrchid,
    caption:
      "White and gold background, platform covered with water, two rocks placed, green seaweed around the rocks, two brown bottles of shampoo on top of the rocks, indoor product photography, front view.",
  },
  {
    title: "Photography & Photoshoot",
    body: "Generate hero shots, editorial portraits, and lifestyle imagery that looks like it cost ten times more to produce.",
    image: img.jungleWoman,
    caption:
      "A portrait of a woman with red curly hair, bright green cat-like eyes, and freckles across her face, wearing a flowing long brown dress, standing amidst lush green jungle foliage, warm golden hour sunlight.",
  },
  {
    title: "Film & Media",
    body: "Pre-visualization, VFX concept art, creature design, animatics, and sci-fi concepts.",
    image: img.phoenix,
    caption:
      "A mythological phoenix rising in human form, sweeping crimson feathered wings, dramatic volumetric clouds, cinematic concept art, film-grade lighting and atmosphere.",
  },
  {
    title: "Architecture Renders",
    body: "Photorealistic renders from sketches, interior visualization, material studies, environmental lighting variations, urban planning aerials, and client presentation decks.",
    image: img.houseNight,
    caption:
      "Modern house design, a two-story villa with wooden cladding and concrete walls, front view, overhanging roof above the entrance, wall lighting, plants under the eaves, night-time lighting, ultra-realistic.",
  },
];

/* ---------------------------- Comparison ------------------------------- */
type Cell = boolean | string;
export const comparisonRows: { label: string; gemini: Cell; midjourney: Cell; erie: Cell }[] = [
  { label: "Image Generation", gemini: true, midjourney: true, erie: true },
  { label: "Native Image → Video", gemini: false, midjourney: "Max 1080p", erie: "4K Native" },
  { label: "Sub-3s Generation", gemini: "~60s", midjourney: "~60s", erie: true },
  { label: "Style DNA™ Training", gemini: false, midjourney: false, erie: "Exclusive" },
  { label: "Inpainting Canvas", gemini: "Limited", midjourney: "Limited", erie: true },
  { label: "Free Tier", gemini: false, midjourney: false, erie: "50 imgs/day" },
];

/* ------------------------------- Stats --------------------------------- */
export const stats = [
  { value: "2.4B+", label: "Images Generated", sub: "The largest AI-generated image library on the planet" },
  { value: "2.3s", label: "Average Generation Speed", sub: "The fastest AI image engine on the market" },
  { value: "4.98", label: "Average User Rating", sub: "Based on 18,400+ verified reviews" },
  { value: "99.9%", label: "Platform Uptime", sub: "Always on, always ready when you are" },
];

/* ------------------------------ Pricing -------------------------------- */
export const pricingBadges = ["99.9% UPTIME", "SOC 2 COMPLIANT", "NO HIDDEN FEES", "CANCEL ANYTIME"];

export const pricingPlans = [
  {
    name: "Basic Plan",
    price: "Free",
    oldPrice: null as string | null,
    period: null as string | null,
    dark: false,
    badge: null as string | null,
    features: [
      "200 image generations/mo",
      "SD video generation",
      "3 concurrent Fast image jobs",
      "2 concurrent Fast video job",
      "10 SD video generations",
    ],
  },
  {
    name: "Standard Plan",
    price: "$15",
    oldPrice: null,
    period: "/ mo",
    dark: false,
    badge: "POPULAR",
    features: [
      "15h Fast generations",
      "SD and HD video generation",
      "5 concurrent Fast image jobs",
      "3 concurrent Fast video jobs",
      "50 SD video generations",
    ],
  },
  {
    name: "Pro Plan",
    price: "$25",
    oldPrice: "$32",
    period: "/ mo",
    dark: true,
    badge: "VALUE FOR MONEY",
    features: [
      "30h Fast generations",
      "4K video generation",
      "15 concurrent Fast image jobs",
      "6 concurrent Fast video jobs",
      "100 SD video generations",
      "Optional Fast hours top ups",
    ],
  },
];

/* ---------------------------- Testimonials ----------------------------- */
type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
  avatar?: string;
  image?: string;
  stars?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The image-to-video feature alone is worth the subscription. I animated a client's product shot and closed a $40K deal on the spot.",
    name: "Natasha Voss",
    role: "Creative Director, Amsterdam",
    avatar: img.womanTeal,
    stars: true,
  },
  { quote: "I've recommended ERIE to every creative I know. All of them stayed." },
  {
    quote:
      "The image-to-video feature is simply magic. I shot one reference photo and ERIE turned it into a 30-second cinematic sequence that blew my client away.",
    image: img.mustang,
  },
  {
    quote:
      "Our social team used to spend 3 days producing assets for a single campaign. With ERIE, we're done before lunch.",
    name: "James Okafor",
    role: "Lead Concept Artist, Riot Games",
    avatar: img.manCurlySky,
    stars: true,
  },
  { quote: "ERIE didn't replace my creativity. It multiplied it." },
  { quote: "We shipped twice as many projects this quarter using ERIE." },
  {
    quote:
      "We're a startup with no design budget. ERIE is the reason our pitch deck looked like it came from a top-tier agency.",
    name: "Priya Nair",
    role: "Head of E-Commerce, Glossier",
    avatar: img.womanYellow,
    stars: true,
  },
  { quote: "I don't explain ERIE to clients. I just show them the results." },
  {
    quote:
      "We cut our product photography budget by 70% using ERIE. Style DNA™ means every image looks like it came from the same studio shoot.",
    image: img.skincareRock2,
  },
  {
    quote:
      "I run a one-person Etsy shop. I used to spend weekends manually editing product photos. ERIE gave me those weekends back — and my sales went up 40% because the images are just better.",
  },
  {
    quote:
      "I've tried every tool out there. ERIE is 3 years ahead of the competition. The speed alone puts it in a different league & quality is unmatched.",
    name: "Sebastián Ruiz",
    role: "Film Director, US",
    avatar: img.smilingMan,
    stars: true,
  },
  { quote: "It's not AI-generated. It's ERIE-generated. There's a difference." },
  {
    quote:
      "I've been a concept artist for 14 years. ERIE is the first AI that actually understands what I mean, not just what I type.",
    name: "Yuki Tanaka",
    role: "Brand Designer, Spotify Tokyo",
    avatar: img.womanBlackTurtleneck,
    stars: true,
  },
  {
    quote:
      "ERIE has completely transformed my concept art workflow. What used to take 3 hours now takes 20 minutes, and the quality is genuinely breathtaking.",
    name: "Mia Hoffmann",
    role: "Senior Art Director, Berlin",
    avatar: img.womanWhiteSuit,
    stars: true,
  },
  { quote: "Our clients think we hired a full visual team. We didn't." },
];

/* ----------------------------- Tutorials ------------------------------- */
export const tutorials = [
  {
    duration: "4:58",
    title: "Your First Image in 5 Minutes",
    body: "Open ERIE for the first time and generate your first stunning image from scratch. Learn the basic interface, how to write your first prompt, and how to download your result.",
    image: img.frecklesFace,
  },
  {
    duration: "9:45",
    title: "How to Write Better Prompts",
    body: "The difference between a good image and a great one is almost always the prompt. Learn the anatomy of a strong prompt — style, subject, lighting, mood, and camera — and see the results in real time.",
    image: img.cyberWoman,
  },
  {
    duration: "11:30",
    title: "How to Train Your Personal Style",
    body: "Upload 3 to 5 reference images and train a style fingerprint that makes every generation feel unmistakably yours. Learn how to pick the right references and apply your style across all five models.",
    image: img.blueFlower,
  },
  {
    duration: "12:15",
    title: "Animating a Still Image into Video",
    body: "Take any image — yours or ERIE-generated — and turn it into a cinematic video clip using motion prompts. Learn camera movements, physics settings, duration controls, and export formats.",
    image: img.airplane,
  },
  {
    duration: "8:40",
    title: "How to Edit Any Part of an Image",
    body: "Use ERIE's inpainting canvas to surgically edit specific regions of any image using natural language. Replace backgrounds, fix details, swap objects, and extend edges non-destructively.",
    image: img.arGlasses,
  },
  {
    duration: "6:18",
    title: "Learn Negative Prompting",
    body: "One of the most underused tools in AI generation. Learn how negative prompts work, when to use them, and the exact phrases that remove blur, distortion, bad lighting, and unwanted elements.",
    image: img.womanBlackTurtleneck,
  },
];

/* -------------------------------- FAQ ---------------------------------- */
export const faqs = [
  {
    q: "Do I own the images and videos I generate?",
    a: "Yes, completely. Everything you generate on a paid plan is yours — full intellectual property, no asterisks. You can use it commercially, sell it, publish it, put it on a billboard.",
  },
  {
    q: "How fast does ERIE actually generate?",
    a: "Fast. Most images are ready in under 3 seconds at 1024px. 4K upscaling takes an additional 3–5 seconds. Video generation ranges from 30 seconds for short clips to around 4 minutes for a full 60-second 4K output — depending on complexity and server load.",
  },
  {
    q: "Which AI models does ERIE use?",
    a: "All of them are ours. ERIE runs on a proprietary suite of five specialized models — VOID-Ultra for photorealism, Photon v3 for portraits, AnimaX for illustration and anime, Render3D for spatial and product design, and Cinematic for film-grade outputs. We build everything in-house and don't resell third-party models.",
  },
  {
    q: "What makes Style DNA™ different from other style training tools?",
    a: "Most style training tools require hours of GPU time, technical knowledge, and dozens of images. Style DNA™ trains in under 5 minutes from just 3 to 5 reference images, entirely in our cloud. No setup, no technical skill, no waiting. And unlike LoRA models that are locked to one checkpoint, your Style DNA™ works across all five of our generation models.",
  },
  {
    q: "Is there an API? Can I build with ERIE?",
    a: "Yes. All paid plans include full API access — REST endpoints, Python and Node.js SDKs, webhook support, and thorough documentation. Studio plans get dedicated endpoints with higher rate limits and priority throughput. If you're building something interesting on ERIE, we'd love to hear about it.",
  },
  {
    q: "What happens if I want to cancel?",
    a: "No drama. You can cancel any time from your account settings — it takes about 10 seconds. Your plan stays active until the end of your current billing period, then it simply stops. No surprise charges, no retention emails, no hassle. We'll be here if you ever want to come back.",
  },
];

/* ------------------------------ Footer --------------------------------- */
export const footerColumns = {
  tutorials: [
    "Your First Image in 5 Minutes",
    "How to Write Better Prompts",
    "How to Train Your Personal Style",
    "Animating a Still Image into Video",
    "How to Edit Any Part of an Image",
    "Learn Negative Prompting",
  ],
  company: ["Home", "Features", "Use cases", "Comparison", "Pricing", "FAQ", "Explore", "Tutorials"],
  legal: ["Terms & Conditions", "Privacy Policy"],
};

/* --------------------------- Final CTA marquee ------------------------- */
export const ctaMarquee = [
  img.villaPool,
  img.doorField,
  img.archInterior,
  img.arGlasses,
  img.airplane,
  img.tennisYellow,
  img.tigerGarden,
  img.koiPond,
  img.womanPoppies,
  img.sneaker,
];
