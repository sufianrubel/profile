"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Loader2, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";
import { contactSchema, type ContactInput } from "@/lib/validations";

export function ContactSection() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      company: "",
      sourcePage: typeof window !== "undefined" ? window.location.href : siteConfig.url
    }
  });

  const onSubmit = async (values: ContactInput) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const result = (await response.json()) as { ok?: boolean; message?: string };

    if (!response.ok || !result.ok) {
      toast({
        title: "Message not sent",
        description: result.message ?? "Please try again later.",
        variant: "error"
      });
      return;
    }

    toast({ title: "Message sent", description: "Thank you. Rubel will get back to you soon.", variant: "success" });
    reset({ name: "", email: "", message: "", company: "", sourcePage: window.location.href });
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Available for remote engineering opportunities."
          description="For senior backend, Laravel, API, ERP, payment integration, and production deployment work, send a direct inquiry."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">Let’s build reliable systems.</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Based in Dhaka, Bangladesh and available for remote opportunities with international teams, startups, and product companies.
            </p>
            <div className="mt-8 space-y-4">
              <ContactItem icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactItem icon={Phone} label="Phone / WhatsApp" value={siteConfig.phone} href={siteConfig.whatsappUrl} />
              <ContactItem icon={MapPin} label="Location" value="Dhaka, Bangladesh · Available for Remote Opportunities" />
              <ContactItem icon={MessageCircle} label="WhatsApp" value="Start a conversation" href={siteConfig.whatsappUrl} />
            </div>
          </Card>
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
              </div>
              <input type="hidden" {...register("sourcePage")} />

              <FieldError id="name-error" error={errors.name?.message}>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
                />
              </FieldError>

              <FieldError id="email-error" error={errors.email?.message}>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
              </FieldError>

              <FieldError id="message-error" error={errors.message?.message}>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about the role, project, or opportunity..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                />
              </FieldError>

              <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex gap-3 rounded-2xl border border-border bg-background/60 p-4 transition hover:border-primary/40">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden={true} />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        {content}
      </a>
    );
  }

  return content;
}

function FieldError({ children, id, error }: { children: ReactNode; id: string; error?: string }) {
  return (
    <div className="space-y-2">
      {children}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            id={id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm text-destructive"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
