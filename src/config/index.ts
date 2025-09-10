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
  canonicalURL: "https://hik-dev.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "YUSUF INAM",
    specialty: "Full Stack Developer & HomeLAB Enthusiast",
    summary:
       "I’m a Full Stack Developer from Sri Lanka, experienced in building web and mobile applications using Flutter, PHP, and MySQL. I also work with Docker for containerized deployments and Proxmox for virtualization, bringing performance and scalability into my projects.",
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
      name: "Self-Hosted Media Stack",
      summary: "I’ve deployed and managed a full self-hosted stack using Docker Compose and Portainer on a virtualized server.",
      linkSource: "https://github.com/Hikki-dev/docker-stacks",
      image: "/Portainer.png",
    },
    {
      name: "Proxmox Virtual Lab",
      summary: "My home lab is powered by Proxmox VE, where I manage multiple VMs and containers across different OS platforms",
      image: "/Proxmox.png",
    },
    {
      name: "Luxury Watch Website",
      summary: "A website thats built using PHP, Tailwind CSS and MySQL, imitating a luxury watch store.",
      linkSource: "https://github.com/Hikki-dev/luxwatch",
      image: "/Watch WEbsite.jpg",
    },
    {
      name: "Luxury Watch App",
      summary: "A flutter based mobile application imitating a luxury watch store.",
      linkSource: "https://github.com/Hikki-dev/WatchApp",
      image: "/WatchApp1.png",
    },
  ],
  about: {
    description: `
   Hi, I’m Yusuf, a freshman at APIIT currently pursuing a degree on Software Engineering. I specialize in Flutter, Python, JavaScript and C#, while actively improving a HomeLAB and CyberSecurity Skills. My projects range from self-hosted media servers, to developing a Mobile App.  
    `,
    image: "/Yusuf-big.jpeg",
  },
};

// #5755ff
