"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Professional capability areas for high-trust delivery."
          description="Job-focused engineering services without pricing, positioned around backend strength, architecture, and deployment readiness."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Card className="group h-full p-6 hover:-translate-y-1 hover:border-accent/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
