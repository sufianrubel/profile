"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in computer science and telecommunications."
          description="Education content is kept in a single editable data file for easy correction before final launch."
        />
        <div className="mx-auto grid max-w-4xl gap-5">
          {education.map((item, index) => (
            <motion.div
              key={`${item.degree}-${item.institution}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card className="group p-6 hover:-translate-y-1 hover:border-accent/40 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:scale-105">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">{item.degree}</h3>
                    <p className="mt-2 text-lg font-medium text-primary">{item.institution}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                      {item.duration ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5">
                          <CalendarDays className="h-4 w-4" aria-hidden="true" />
                          {item.duration}
                        </span>
                      ) : null}
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
