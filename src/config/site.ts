export const RESUME_URL = "/Abu-Sufian-Rubel-Resume.pdf";

export const siteConfig = {
  name: "Abu Sufian Rubel — Software Engineer",
  displayName: "Abu Sufian Rubel",
  role: "Senior Software Engineer, Laravel Developer",
  location: "Dhaka, Bangladesh",
  remoteAvailability: "Available for Remote Opportunities",
  experience: "5+ Years",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-vercel-domain.vercel.app",
  email: "rubel.nstu27@gmail.com",
  phone: "+8801320583389",
  whatsappUrl: "https://wa.me/8801320583389",
  githubUrl: "https://github.com/sufianrubel",
  linkedinUrl: "https://www.linkedin.com/in/sufian24/",
  resumeUrl: RESUME_URL,
  seo: {
    title: "Abu Sufian Rubel — Senior Software Engineer & Laravel Developer",
    description:
      "Abu Sufian Rubel is a Senior Software Engineer and Laravel Developer from Dhaka, Bangladesh, specializing in enterprise applications, REST APIs, payment gateway integration, ERP systems, and scalable backend architecture.",
    keywords: [
      "Abu Sufian Rubel",
      "Senior Software Engineer Bangladesh",
      "Laravel Developer Bangladesh",
      "Backend Developer Dhaka",
      "PHP Laravel Developer",
      "Enterprise Application Developer",
      "Payment Gateway Developer",
      "ERP Developer",
      "REST API Developer",
      "Remote Software Engineer"
    ]
  }
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
] as const;

export const socialLinks = [
  { label: "GitHub", href: siteConfig.githubUrl },
  { label: "LinkedIn", href: siteConfig.linkedinUrl },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "WhatsApp", href: siteConfig.whatsappUrl }
] as const;
