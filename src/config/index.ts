import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "YUSUF INAM — Software Engineer & HomeLAB Enthusiast",
  author: "Hikki",
  description:
    "A university student actively developing technical skills in cybersecurity while passionately advancing software development expertise.",
  lang: "en",
  siteLogo: "/web2.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/HikkiGoesPrvt" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hiks-dev/" },
    { text: "Github", href: "https://github.com/Hikki-dev" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "YUSUF INAM",
    specialty: "Full Stack Developer & HomeLAB Enthusiast",
    summary:
       "A Full Stack Developer based in Sri Lanka, specializing in maintaining aesthetically pleasing websites that deliver top performance, while nurturing a strong passion for cybersecurity.",
    email: "yusuffinam@gmail.com",
    cvLink: "/cv.pdf",
  },
  experience: [
    {
      company: "Coming Soon",
      position: "Exciting Opportunities Ahead",
      startDate: "",
      endDate: "",
      summary: [
        "Currently focusing on learning and building personal projects while looking forward to future internships or collaborations."
      ],
    },
  ],
  projects: [
    {
      name: "Hospital Website",
      summary: "A clean and user-friendly hospital website designed to deliver information effectively and perform well across all devices.",
      linkPreview: "https://hikki-dev.github.io/WDOS-Dev/",
      linkSource: "https://github.com/Hikki-dev/WDOS-Dev",
      image: "/Hospital.png",
    },
    {
      name: "Course Management System",
      summary: "This is a C# Windows Forms application demonstrating an object-oriented school management system.",
      linkPreview: "/",
      linkSource: "https://github.com/Hikki-dev/SDAM-OOP",
      image: "/shopify-clon.png",
    },
    {
      name: "Self-Hosted Media Stack",
      summary: "’ve deployed and managed a full self-hosted stack using Docker Compose and Portainer on a virtualized server. The setup includes:
      "Media apps: Sonarr, Radarr, Jellyfin, qBittorrent, Prowlarr, etc.",
      "Admin tools: FileBrowser, Heimdall, Code-Server",
      "Reverse-proxied with Caddy, remotely accessible via Tailscale",
      linkPreview: "/",
      linkSource: "https://github.com/Hikki-dev/SDAM-OOP",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
   Hi, I’m Yusuf, a freshman at APIIT currently pursuing a degree on Software Engineering. I specialize in Python, JavaScript and C#, while actively improving a HomeLAB and CyberSecurity Skills. My projects range from self-hosted media servers, to developing a Course Management System.  
    `,
    image: "/Yusuf-big.jpeg",
  },
};

// #5755ff
