import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
};

export type Highlight = {
  title: string;
  icon: LucideIcon;
};

export type StackCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration?: string;
};

export type Project = {
  name: string;
  type: string;
  overview: string;
  techStack: string[];
  achievements: string[];
  businessImpact: string[];
  github: string;
  liveDemo: string;
  githubLabel?: string;
  liveLabel?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hero = {
  badge: "5+ Years Experience · Laravel & Backend Specialist · Remote Ready",
  heading: "Senior Software Engineer Building Scalable Enterprise Solutions",
  intro:
    "I build secure, scalable, and business-focused backend systems, enterprise applications, payment platforms, and cloud-ready web solutions using Laravel, PHP, Golang, Vue.js, React, Next.js, and modern DevOps practices."
};

export const about = {
  summary:
    "Abu Sufian Rubel is a Software Engineer with 5+ years of hands-on experience building scalable web applications, secure backend systems, ERP modules, eCommerce platforms, REST APIs, and payment gateway solutions. He has worked with Laravel, PHP, JavaScript, Vue.js, React, Golang, MySQL, PostgreSQL, Redis, Docker, AWS, CI/CD pipelines, and modern development practices. His focus is clean architecture, performance optimization, secure integrations, and business-aligned software delivery.",
  highlights: [
    { title: "5+ Years Experience", icon: BadgeCheck },
    { title: "Enterprise Applications", icon: Building2 },
    { title: "Payment Gateway Solutions", icon: Banknote },
    { title: "ERP/HRM Development", icon: Workflow },
    { title: "Cloud & API Architecture", icon: Cloud }
  ] satisfies Highlight[],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects" },
    { value: "10+", label: "Integrations" },
    { value: "10,000+", label: "Daily Transactions / Operations Supported" }
  ] satisfies Stat[]
};

export const techStack: StackCategory[] = [
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Laravel", "PHP", "Golang", "Node.js", "REST APIs", "OAuth2", "JWT", "Microservices"]
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["Vue.js", "React.js", "Next.js", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQL Server", "Redis", "Query Optimization", "Database Design"]
  },
  {
    title: "DevOps",
    icon: Cpu,
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Bitbucket", "Linux", "Nginx", "Postman"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Adventure Dhaka Limited",
    role: "Backend Developer",
    location: "Dhaka, Bangladesh",
    duration: "Nov 2024 – Present",
    items: [
      "Designed and maintained scalable backend services for hotel management operations using Golang, Node.js, Redis, and REST APIs.",
      "Worked on Hotel Manager Panel backend systems supporting high-volume hotel operations.",
      "Integrated third-party PMS systems such as AirHost and Temairazu through REST APIs.",
      "Improved backend performance using profiling, caching, refactoring, and API optimization.",
      "Automated hotel configuration workflows to reduce manual errors and improve operational reliability."
    ]
  },
  {
    company: "TechVillage",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    duration: "Mar 2021 – Oct 2024",
    items: [
      "Developed and maintained Laravel-based enterprise applications, ERP modules, eCommerce systems, and payment gateway platforms.",
      "Worked on Martvill, a multi-vendor eCommerce ERP platform with vendor, inventory, payment, and commission management modules.",
      "Led backend development for PayMoney, a secure Laravel-based multi-currency payment gateway.",
      "Implemented RBAC, modular APIs, responsive dashboards, and integrations using Laravel and Vue.js.",
      "Optimized MySQL queries and backend workflows to improve performance and reduce server load.",
      "Collaborated on Docker, GitHub Actions, CI/CD pipelines, and AWS-based cloud deployments."
    ]
  },
  {
    company: "Uttara InfoTech",
    role: "Junior PHP Developer",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2020 – Mar 2021",
    items: [
      "Contributed to Laravel client projects by implementing MVC modules, REST APIs, and backend features.",
      "Assisted with debugging, refactoring, and page-load performance improvements.",
      "Built foundational experience in PHP, Laravel, MySQL, and production web application development."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science and Telecommunication Engineering",
    institution: "Noakhali Science & Technology University",
    location: "Sonapur, Noakhali",
    duration: "2015–2019"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sherpur Government College",
    location: "Sherpur, Bangladesh",
    duration: "2014"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bonogram Hafiz Uddin High School",
    location: "Jhinaigati, Sherpur",
    duration: "2012"
  }
];

export const projects: Project[] = [
  {
    name: "PayMoney",
    type: "Online Payment Gateway",
    overview:
      "A secure multi-currency payment gateway platform built with Laravel, OAuth2, JWT, and third-party payment integrations.",
    techStack: ["Laravel", "PHP", "MySQL", "REST API", "OAuth2", "JWT", "PayPal API", "Stripe API", "CoinPayments API"],
    achievements: [
      "Built secure backend architecture for multi-currency and crypto transactions.",
      "Integrated PayPal, Stripe, and CoinPayments.",
      "Improved transaction processing through database and API optimization."
    ],
    businessImpact: [
      "Supported 10+ currencies and served 1,000+ users.",
      "Helped businesses process secure online payments through a scalable gateway architecture."
    ],
    github: "https://github.com/sufianrubel/PayMoney", // TODO: Replace with PayMoney GitHub URL.
    liveDemo: "https://demo.paymoney.techvill.net/", // TODO: Replace with PayMoney live/demo URL.
    githubLabel: "GitHub Repository",
    liveLabel: "Live Demo"
  },
  {
    name: "Hotel Manager Panel",
    type: "Hotel Operations Backend Platform",
    overview:
      "A backend platform for hotel operations, PMS integrations, and high-volume operational workflows.",
    techStack: ["Golang", "Node.js", "PostgreSQL", "Redis", "REST API", "Microservices"],
    achievements: [
      "Built backend services for hotel management workflows.",
      "Integrated external PMS platforms via REST APIs.",
      "Improved performance through caching, profiling, and backend refactoring."
    ],
    businessImpact: [
      "Supported 10,000+ daily hotel operations.",
      "Improved data synchronization, operational reliability, and backend uptime."
    ],
    github: "#", // TODO: Private project. Replace if public URL becomes available.
    liveDemo: "#", // TODO: Replace with live URL or keep marked as Private Project.
    githubLabel: "Not Available",
    liveLabel: "Private Project"
  },
  {
    name: "MeritEye",
    type: "Vue.js Web Application",
    overview:
      "A modern frontend application built with Vue 3, Pinia, and Vue Router for structured, scalable client-side experiences.",
    techStack: ["Vue 3", "Pinia", "Vue Router", "JavaScript", "REST API"],
    achievements: [
      "Built modular frontend architecture using Vue 3 ecosystem.",
      "Implemented state management with Pinia and route-based navigation.",
      "Focused on responsive UI, maintainable components, and smooth user experience."
    ],
    businessImpact: ["Improved frontend scalability and user flow for a modern web application."],
    github: "https://github.com/MeritEye/merit", // TODO: Replace with MeritEye GitHub URL.
    liveDemo: "https://demo.meriteye.techvill.net/", // TODO: Replace with MeritEye live/demo URL.
    githubLabel: "GitHub Repository",
    liveLabel: "Live Demo"
  },
  {
    name: "Martvill",
    type: "Multi-Vendor eCommerce ERP Platform",
    overview:
      "A Laravel-based multi-vendor eCommerce ERP platform with vendor, inventory, payment, commission, and product management modules.",
    techStack: ["Laravel", "MySQL", "Vue.js", "REST API", "Bootstrap", "GitHub Actions", "Docker"],
    achievements: [
      "Designed core ERP modules for inventory, product management, commissions, and vendor workflows.",
      "Integrated 10+ payment methods via REST/OAuth APIs.",
      "Improved vendor onboarding, transaction reliability, and platform maintainability."
    ],
    businessImpact: [
      "Scaled to 1,500+ active vendors.",
      "Improved vendor onboarding by 40% and reduced transaction errors by 30%."
    ],
    github: "#", // TODO: Replace with Martvill GitHub URL if public.
    liveDemo: "https://www.demo.martvill.techvill.net/", // TODO: Replace with Martvill live/demo URL.
    githubLabel: "Private Repository",
    liveLabel: "Live Demo"
  }
];

export const services: Service[] = [
  {
    title: "API Development",
    description:
      "Secure, scalable REST API development using Laravel, PHP, Golang, OAuth2, JWT, and clean backend architecture.",
    icon: Network
  },
  {
    title: "ERP Development",
    description:
      "Enterprise-grade ERP modules for inventory, vendor management, HRM, reporting, workflows, and business operations.",
    icon: Layers3
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure integration with Stripe, PayPal, local payment gateways, crypto payments, OAuth flows, and transaction processing systems.",
    icon: LockKeyhole
  },
  {
    title: "Cloud Deployment",
    description:
      "Production-ready deployment with Docker, AWS, CI/CD pipelines, Linux, Nginx, caching, and performance optimization.",
    icon: Rocket
  },
  {
    title: "System Architecture",
    description:
      "Scalable backend architecture, database design, microservices planning, Redis caching, queue-ready systems, and API-first platforms.",
    icon: ShieldCheck
  },
  {
    title: "Technical Consulting",
    description:
      "Code review, backend performance optimization, database optimization, deployment planning, and system improvement recommendations.",
    icon: Sparkles
  }
];

export const educationIcon = GraduationCap;
export const briefcaseIcon = BriefcaseBusiness;
