"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { about } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Business-focused engineering with production discipline."
          description="Clean architecture, secure integrations, performance optimization, and scalable backend systems for real products."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-premium backdrop-blur-xl sm:p-8"
          >
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">{about.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/60 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-foreground">{highlight.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="p-6 hover:-translate-y-1 hover:border-primary/40">
                  <p className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
