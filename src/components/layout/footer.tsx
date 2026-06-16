import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { RESUME_URL, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircle }
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">© 2026 Abu Sufian Rubel. All rights reserved.</p>
          {/* <p className="mt-2 text-sm text-muted-foreground">Built with Next.js, TypeScript, Tailwind CSS, and Vercel.</p> */}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            );
          })}
          <a href={RESUME_URL} download className={cn(buttonVariants({ variant: "outline", size: "sm" }), "ml-0 md:ml-2")}>
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
