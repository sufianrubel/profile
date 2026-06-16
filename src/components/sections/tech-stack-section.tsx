"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { techStack } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Modern tools for secure, scalable application delivery."
          description="A practical stack shaped by enterprise applications, payment platforms, APIs, and production deployments."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="group h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground transition group-hover:border-accent/30 group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
