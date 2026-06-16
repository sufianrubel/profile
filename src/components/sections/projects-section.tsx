"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work across payments, hotel operations, eCommerce, and frontend systems."
          description="Project links are centralized in the data file, with TODO comments for unavailable GitHub or live URLs."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/40 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge>{project.type}</Badge>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{project.name}</h3>
                  </div>
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 ring-1 ring-border" />
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{project.overview}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Key achievements</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {project.achievements.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Business impact</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {project.businessImpact.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={project.github}
                    target={project.github === "#" ? undefined : "_blank"}
                    rel={project.github === "#" ? undefined : "noreferrer"}
                    aria-label={`${project.name} GitHub link`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {project.githubLabel ?? "GitHub"}
                  </a>
                  <a
                    href={project.liveDemo}
                    target={project.liveDemo === "#" ? undefined : "_blank"}
                    rel={project.liveDemo === "#" ? undefined : "noreferrer"}
                    aria-label={`${project.name} live or demo link`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {project.liveLabel ?? "Live Demo"}
                  </a>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
