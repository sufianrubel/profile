"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise backend, payments, eCommerce, and hotel operations."
          description="A focused timeline of production engineering experience across Laravel, Golang, APIs, ERP, and cloud-ready systems."
        />
        <div className="relative mx-auto max-w-5xl">
          <div aria-hidden="true" className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.duration}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative md:pl-12"
              >
                <span aria-hidden="true" className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(20,184,166,.12)] md:block" />
                <Card className="overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/40 sm:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <Badge>{experience.duration}</Badge>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{experience.role}</h3>
                      <p className="mt-2 text-lg font-medium text-primary">{experience.company}</p>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {experience.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
