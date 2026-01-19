import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "YUSUF INAM — Reliable Developer Ready for Growth",
  author: "Yusuf Inam",
  description:
    "Software Engineering student with proven ability to deliver results ahead of schedule. Full-stack capability from frontend to infrastructure. Ready to contribute value from day one.",
  lang: "en",
  siteLogo: "/web2.jpg",
  navLinks: [
    { text: "What I Bring", href: "#experience" },
    { text: "My Work", href: "#projects" },
    { text: "About Me", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/HikkiGoesPrvt" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hiks-dev/" },
    { text: "Github", href: "https://github.com/Hikki-dev" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://hik-dev.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "YUSUF INAM",
    specialty: "Software Engineer Ready for Impact",
    summary:
      "Currently pursuing Software Engineering at APIIT, I bring more than academic knowledge—I deliver production-ready solutions, maintain live systems, and consistently exceed expectations. Looking for a company that values reliability, growth, and fresh perspectives.",
    email: "yusuffinam@gmail.com",
    cvLink: "/cv.pdf",
    highlights: [
      "Software Engineering Student",
      "Full-Stack Developer",
      "Infrastructure Experience",
      "Always Ahead of Schedule",
    ],
  },

  experience: [
    {
      company: "Self-Directed Projects & Learning",
      position: "Building Real-World Experience",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "Managing production infrastructure using Proxmox and Docker",
        "Delivering all academic assignments 1-2 weeks ahead of deadlines",
        "Built and deployed multiple full-stack applications from concept to production",
        "Contributing to open-source projects with comprehensive documentation",
      ],
    },
  ],

  projects: [
    {
      name: "BusLink Transportation Ecosystem",
      summary:
        "A complex mobility platform featuring three distinct user roles (Admin, Conductor, Commuter). Engineered with real-time location tracking via Google Maps, QR code ticket validation for conductors, and automated refund handling. Includes a comprehensive admin dashboard for route management and revenue analytics.",
      linkSource: "https://github.com/Hikki-dev/Buslink",
      linkPreview: "https://buslink-eta.vercel.app/",
      image: "/buslink-app.jpg",
      technologies: ["Flutter", "Firebase Cloud Functions", "Stripe Payments", "Google Maps API"],
    },
    {
      name: "Chronos Luxury Marketplace",
      summary:
        "A scalable multi-vendor e-commerce platform built with Laravel 11 and Jetstream. Features a sophisticated backend with Stripe Connect for seller payouts, real-time product search using Livewire, and role-based access control. Implements a hybrid architecture serving both web users and a mobile API.",
      linkPreview: "https://laravel-watch-production.up.railway.app",
      linkSource: "https://github.com/Hikki-dev/Laravel-Watch",
      image: "/Watch WEbsite.jpg",
      technologies: ["Laravel 11", "Livewire", "Stripe Connect", "MySQL", "TailwindCSS"],
    },
    {
      name: "Chronos Mobile (Flutter)",
      summary:
        "The mobile companion to the Chronos platform. A high-performance Flutter application that consumes a custom REST API to display real-time inventory. Features complex state management for cart synchronization and utilizes cached network images for optimal performance on low-bandwidth connections.",
      linkSource: "https://github.com/Hikki-dev/Watch-final",
      linkPreview: "https://watchapp-phi.vercel.app/",
      image: "/watch-app.jpg",
      technologies: ["Flutter", "REST API Integration", "Provider", "Cached Network Image"],
    },
    {
      name: "Production HomeLab Infrastructure",
      summary:
        "Enterprise-grade home infrastructure with containerized services, virtualization, and comprehensive monitoring. Maintains high uptime for development and learning.",
      linkSource: "https://github.com/Hikki-dev/docker-stacks",
      image: "/Portainer.png",
      technologies: ["Docker", "Proxmox", "Linux", "Networking"],
    },
    {
      name: "Ascend Properties Real Estate",
      summary:
        "A full-featured real estate listing system with property search, filtering, admin dashboard, and Firebase backend for dynamic content management.",
      linkSource: "https://github.com/Hikki-dev/ascendproperties-lk",
      linkPreview: "https://ascendproperties-lk.vercel.app/",
      image: "/ascend-properties.jpg",
      technologies: ["React", "Firebase", "JavaScript", "TailwindCSS"],
    },
    {
      name: "Hospital Management System",
      summary:
        "A complete healthcare management platform with patient appointment booking, secure data handling, and responsive design optimized for all devices.",
      linkPreview: "https://hikki-dev.github.io/WDOS-Dev/",
      linkSource: "https://github.com/Hikki-dev/WDOS-Dev",
      image: "/Hospital.png",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      name: "OpalX Web Platform",
      summary:
        "A modern business website built with React, featuring responsive layouts, reusable UI components, and optimized performance for startup branding and product showcasing.",
      linkSource: "https://github.com/Hikki-dev/OpalX",
      linkPreview: "https://hikki-dev.github.io/OpalX/",
      image: "/opalx.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],

  about: {
    description: `
    I'm not your typical student developer. While pursuing Software Engineering at APIIT, I've been building and maintaining real systems that work reliably.

    My approach is simple: deliver more than expected, ahead of schedule, and always be learning. Whether it's submitting assignments weeks early or ensuring my HomeLab runs smoothly, I believe in doing things right the first time.

    What sets me apart isn't just technical skill—it's the mindset. I see problems as opportunities, constraints as creative challenges, and every project as a chance to prove that investing in me means investing in reliable, innovative solutions.
    `,
    image: "/Yusuf-big.jpeg",
  },
};
