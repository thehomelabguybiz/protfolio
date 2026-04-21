export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  titleLines: string[]
  subtitle: string
}

export interface ManifestoConfig {
  headingText: string
  bodyText: string
  videoPath: string
}

export interface ExhibitionArticleSection {
  heading: string
  body: string
}

export interface ExhibitionItem {
  slug: string
  title: string
  image: string
  year: string
  eyebrow: string
  intro: string
  sections: ExhibitionArticleSection[]
}

export interface ExhibitionsConfig {
  sectionLabel: string
  countLabel: string
  detailBackText: string
  items: ExhibitionItem[]
}

export interface PavilionVideoItem {
  src: string
  caption: string
}

export interface PavilionsConfig {
  sectionLabel: string
  videos: PavilionVideoItem[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterConfig {
  visitLabel: string
  visitLines: string[]
  connectLabel: string
  connectLinks: FooterLink[]
  brandName: string
  rightsText: string
  coordinatesText: string
}

// ─── SITE CONFIG ───
export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "TheHomeLabGuy — Web Development Agency",
  siteDescription: "Premium web development, design, and digital experiences for modern businesses. We build brands, e-commerce platforms, WebGL experiences, and web applications that drive growth.",
}

// ─── NAVIGATION ───
export const navigationConfig: NavigationConfig = {
  brandName: "THEHOMELABGUY",
  links: [
    { label: "Services", href: "#exhibitions" },
    { label: "About", href: "#manifesto" },
    { label: "Tech Stack", href: "#pavilions" },
    { label: "Contact", href: "#contact" },
  ],
}

// ─── HERO ───
export const heroConfig: HeroConfig = {
  titleLines: [
    "WEB DEVELOPMENT",
    "FOR THE MODERN",
    "AGE",
  ],
  subtitle: "// CRAFTING DIGITAL ARCHITECTURE SINCE 2020",
}

// ─── MANIFESTO / ABOUT ───
export const manifestoConfig: ManifestoConfig = {
  headingText: "We Build Digital Futures",
  bodyText:
    "Every business deserves a web presence that commands attention. We are a full-service development agency that transforms ideas into immersive digital experiences. From high-converting e-commerce platforms to cutting-edge WebGL experiences, we blend technical precision with creative vision. Our approach is simple: understand your goals, architect the solution, and deliver beyond expectations. No templates. No shortcuts. Just handcrafted digital excellence that scales with your ambition.",
  videoPath: "/videos/manifesto.mp4",
}

// ─── SERVICES / EXHIBITIONS ───
export const exhibitionsConfig: ExhibitionsConfig = {
  sectionLabel: "Our Services",
  countLabel: "4 Core Disciplines",
  detailBackText: "← Back to Services",
  items: [
    {
      slug: "brand-systems",
      title: "Brand Systems",
      image: "/images/service-brand-systems.jpg",
      year: "Identity",
      eyebrow: "Visual Identity & Design Systems",
      intro:
        "Your brand is more than a logo — it's a visual language that speaks before you do. We craft comprehensive brand systems that establish recognition, trust, and emotional connection across every digital touchpoint.",
      sections: [
        {
          heading: "Strategic Brand Foundation",
          body:
            "We begin every brand project with deep discovery — understanding your market position, audience psychology, and competitive landscape. This research phase informs every visual decision, ensuring your brand doesn't just look good, it performs. We define color psychology, typographic hierarchy, and spatial language that resonates with your target demographic and differentiates you from competitors.",
        },
        {
          heading: "Design Systems & Guidelines",
          body:
            "Consistency builds trust. We develop comprehensive design systems with reusable components, detailed guidelines, and living documentation. From color tokens and typography scales to component libraries and motion principles, your team gets a complete toolkit for maintaining brand cohesion across all channels — web, mobile, social, and print.",
        },
        {
          heading: "Digital-First Implementation",
          body:
            "Your brand comes to life in the digital space. We implement brand systems directly into web environments, ensuring every interaction — from hover states to page transitions — reinforces your brand personality. The result is a cohesive, memorable experience that turns visitors into advocates.",
        },
      ],
    },
    {
      slug: "webgl-experiences",
      title: "WebGL Experiences",
      image: "/images/service-webgl.jpg",
      year: "Immersive",
      eyebrow: "3D Web & Interactive Experiences",
      intro:
        "Push the boundaries of what's possible on the web. Our WebGL experiences combine Three.js, shaders, and real-time 3D to create immersive digital environments that captivate audiences and leave lasting impressions.",
      sections: [
        {
          heading: "Procedural 3D Environments",
          body:
            "We architect custom 3D scenes using Three.js and WebGPU — from interactive product configurators to immersive storytelling environments. Every scene is optimized for performance, with adaptive quality scaling, efficient geometry, and smart texture management. The result runs at 60fps on desktop and gracefully degrades on mobile.",
        },
        {
          heading: "Custom Shader Development",
          body:
            "Our shader work spans fragment shaders for atmospheric backgrounds, vertex shaders for organic mesh deformation, and compute shaders for GPU-accelerated particle systems. Whether you need a cinematic hero section or a full-screen interactive experience, we write shader code that performs.",
        },
        {
          heading: "Interactive Installations",
          body:
            "From scroll-driven 3D narratives to mouse-reactive particle fields, we build experiences that respond to user input in meaningful ways. These projects often blend WebGL with GSAP animations, physics simulations, and real-time data visualization to create truly unique digital moments.",
        },
      ],
    },
    {
      slug: "e-commerce",
      title: "E-Commerce",
      image: "/images/service-ecommerce.jpg",
      year: "Commerce",
      eyebrow: "Online Stores & Marketplaces",
      intro:
        "Transform browsers into buyers with high-converting e-commerce experiences. We build online stores that balance stunning visual design with seamless functionality — driving revenue while delighting customers at every step.",
      sections: [
        {
          heading: "Conversion-Focused Design",
          body:
            "Every design decision is backed by e-commerce psychology. We optimize product discovery, streamline checkout flows, and implement persuasive micro-interactions that reduce cart abandonment. Our stores aren't just beautiful — they're built to sell, with A/B-tested layouts and performance-tuned user journeys.",
        },
        {
          heading: "Headless Commerce Architecture",
          body:
            "We specialize in headless e-commerce architectures that separate the frontend presentation layer from backend commerce logic. This approach enables sub-second page loads, omnichannel content delivery, and complete design freedom. Integrations include Shopify Plus, Stripe, PayPal, and custom payment gateways.",
        },
        {
          heading: "Scalable Product Management",
          body:
            "From 10 SKUs to 10,000, we build product catalogs that scale. Features include advanced filtering, AI-powered search, inventory synchronization, and automated fulfillment workflows. Your operations team gets powerful management tools while customers enjoy frictionless browsing.",
        },
      ],
    },
    {
      slug: "web-applications",
      title: "Web Applications",
      image: "/images/service-webapps.jpg",
      year: "SaaS",
      eyebrow: "Custom Apps & Dashboards",
      intro:
        "From internal tools to customer-facing platforms, we build web applications that solve real business problems. Our full-stack expertise spans React frontends, robust APIs, database design, and cloud infrastructure.",
      sections: [
        {
          heading: "Frontend Architecture",
          body:
            "We build reactive, component-driven frontends using React, TypeScript, and modern state management. Every application features responsive layouts, optimistic UI updates, offline capability, and accessibility compliance. The codebase is typed, tested, and documented — built for long-term maintainability.",
        },
        {
          heading: "Backend & API Development",
          body:
            "Our backend expertise includes RESTful and GraphQL API design, database architecture (PostgreSQL, MongoDB, Redis), authentication systems, and real-time data pipelines. We implement security best practices, rate limiting, and comprehensive logging from day one.",
        },
        {
          heading: "Cloud Infrastructure",
          body:
            "We deploy on AWS, Vercel, and Netlify with CI/CD pipelines, automated testing, and monitoring. Infrastructure-as-code ensures reproducible environments. Auto-scaling, CDN distribution, and database optimization keep your application fast and reliable under any load.",
        },
      ],
    },
  ],
}

// ─── TECH STACK / PAVILIONS ───
export const pavilionsConfig: PavilionsConfig = {
  sectionLabel: "Our Tech Stack",
  videos: [
    {
      src: "/videos/techshowcase.mp4",
      caption: "Modern development workflow — React, Three.js, TypeScript, and cloud-native architecture",
    },
  ],
}

// ─── FOOTER / CONTACT ───
export const footerConfig: FooterConfig = {
  visitLabel: "Start a Project",
  visitLines: [
    "Ready to build something extraordinary?",
    "Email us at purchese@thehomelabguy.in",
    "or reach out through any channel below.",
    "We respond to every inquiry within 24 hours.",
  ],
  connectLabel: "Connect",
  connectLinks: [
    { label: "Email Us", href: "mailto:purchese@thehomelabguy.in" },
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
  ],
  brandName: "THEHOMELABGUY",
  rightsText: "© 2025 TheHomeLabGuy. All rights reserved.",
  coordinatesText: "PURCHESE@THEHOMELABGUY.IN",
}
