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
      name: "E-commerce Mobile App",
      summary: "Cross-platform luxury watch store app built with Flutter. Features smooth animations, intuitive navigation, and premium shopping experience across iOS and Android.",
      linkSource: "https://github.com/Hikki-dev/WatchApp",
      image: "/WatchApp1.png",
      technologies: ["Flutter", "Dart", "Mobile Development"]
    },
    {
      name: "Full-Stack E-commerce Website",
      summary: "Complete web-based luxury watch store with database integration, user authentication, and modern responsive design using PHP backend and TailwindCSS frontend.",
      linkSource: "https://github.com/Hikki-dev/luxwatch",
      image: "/Watch WEbsite.jpg",
      technologies: ["PHP", "MySQL", "TailwindCSS", "JavaScript"]
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