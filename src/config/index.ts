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
      "Always Ahead of Schedule"
    ]
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
        "Contributing to open-source projects with comprehensive documentation"
      ],
    },
  ],
  projects: [
    {
      name: "Hospital Management System",
      summary: "A complete healthcare management platform with patient appointment booking, secure data handling, and responsive design optimized for all devices.",
      linkPreview: "https://hikki-dev.github.io/WDOS-Dev/",
      linkSource: "https://github.com/Hikki-dev/WDOS-Dev",
      image: "/Hospital.png",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      name: "Production HomeLab Infrastructure",
      summary: "Enterprise-grade home infrastructure with containerized services, virtualization, and comprehensive monitoring. Maintains high uptime for development and learning.",
      linkSource: "https://github.com/Hikki-dev/docker-stacks",
      image: "/Portainer.png",
      technologies: ["Docker", "Proxmox", "Linux", "Networking"]
    },
    {
      name: "Watch App (Flutter)",
      summary: "A cross-platform Flutter application for browsing and managing luxury watches with Firebase integration, real-time updates, and a clean responsive UI.",
      linkSource: "https://github.com/Hikki-dev/Watch-final",
      linkPreview: "https://watchapp-phi.vercel.app/",
      image: "/watch-app.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Material Design"]
    },
    {
      name: "Full-Stack E-commerce Website",
      summary: "Complete web-based luxury watch store with database integration, user authentication, and modern responsive design using PHP backend and TailwindCSS frontend.",
      linkSource: "https://github.com/Hikki-dev/luxwatch",
      image: "/Watch WEbsite.jpg",
      technologies: ["PHP", "MySQL", "TailwindCSS", "JavaScript"]
    }
    {
      name: "OpalX Web Platform",
      summary: "A modern business website built with React, featuring responsive layouts, reusable UI components, and optimized performance for startup branding and product showcasing.",
      linkSource: "https://github.com/Hikki-dev/OpalX",
      linkPreview: "https://hikki-dev.github.io/OpalX/"
      image: "/opalx.jpg",
      technologies: ["HTML", "CSS", "JavaScript]
    }
{
  name: "Ascend Properties Real Estate Platform",
  summary: "A full-featured real estate listing system with property search, filtering, admin dashboard, and Firebase backend for dynamic content management.",
  linkSource: "https://github.com/Hikki-dev/ascendproperties-lk",
  linkPreview: "https://ascendproperties-lk.vercel.app/"
  image: "/ascend-properties.jpg",
  technologies: ["React", "Firebase", "JavaScript", "TailwindCSS"]
}
{
  name: "Buslink Transportation App",
  summary: "A Flutter-based bus management and live tracking system with Firestore integration, user-friendly UI, and real-time route updates for commuters and admins.",
  linkSource: "https://github.com/Hikki-dev/Buslink",
  linkPreview: "https://buslink-eta.vercel.app/"
  image: "/buslink-app.jpg",
  technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"]
}

  ],
  about: {
    description: `
    I'm not your typical student developer. While pursuing Software Engineering at APIIT, I've been building and maintaining real systems that work reliably. 
    
    My approach is simple: deliver more than expected, ahead of schedule, and always be learning. Whether it's submitting assignments weeks early or ensuring my HomeLab runs smoothly, I believe in doing things right the first time.
    
    What sets me apart isn't just technical skill—it's the mindset. I see problems as opportunities, constraints as creative challenges, and every project as a chance to prove that investing in me means investing in reliable, innovative solutions.`,
    image: "/Yusuf-big.jpeg",
  },
};
