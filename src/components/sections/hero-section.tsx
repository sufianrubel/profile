"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Download,
  Rocket,
  Code2,
  Users,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { RESUME_URL } from "@/config/site";

const stats = [
  { icon: Rocket, value: "5+", label: "Years Experience" },
  { icon: Code2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "100%", label: "Commitment" },
];

const skills = [
  "Laravel",
  "PHP",
  "Vue.js",
  "React",
  "Golang",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
];

export function HeroSection() {
  return (
    //     <section id="top" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
    //       <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-grid bg-[size:64px_64px] opacity-[0.18]" />
    //  bg-slate-50 px-4 pb-16 pt-24 text-slate-950 sm:px-6 lg:min-h-screen lg:px-8 lg:pt-32

    <section
      id="top"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_86%_28%,rgba(6,182,212,0.16),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#edf6ff_100%)] dark:bg-[radial-gradient(circle_at_16%_12%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_86%_28%,rgba(6,182,212,0.15),transparent_30%),linear-gradient(180deg,#020617_0%,#0b1120_55%,#111827_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.16),transparent_66%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.22),transparent_70%)]" />
      {/* <div className="absolute right-4 top-4 z-30 md:right-8 md:top-8">
        <ThemeToggle />
      </div> */}

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/80 bg-white/80 px-4 py-2 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur dark:border-cyan-500/30 dark:bg-slate-900/70 dark:text-cyan-200 lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            5+ Years Experience · Laravel & Backend Specialist · Remote Ready
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl lg:mx-0">
            I build{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              Scalable,
            </span>
            <br />
            Secure & Business-
            <br />
            Focused Software
            <br />
            Solutions
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0">
            I help businesses grow by building secure backend systems, web
            applications, ERP modules, eCommerce platforms, and payment gateway
            solutions with clean architecture and modern technologies.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Download Resume <Download size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              Hire Me <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/10 dark:via-cyan-500/10" />
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                <Icon className="mx-auto mb-3 h-6 w-6 text-cyan-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                <div className="text-2xl font-extrabold text-slate-950 dark:text-white">
                  {value}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative mx-auto aspect-square max-w-[520px] rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-4 shadow-2xl shadow-blue-200/80 dark:from-slate-900 dark:via-blue-950/70 dark:to-indigo-950/80 dark:shadow-blue-950/30">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.95),transparent_38%)] dark:bg-[radial-gradient(circle_at_50%_35%,rgba(148,163,184,0.12),transparent_38%)]" />
            <div className="absolute inset-4 rounded-full border border-blue-300/70 dark:border-blue-500/20" />
            <div className="absolute inset-10 rounded-full border border-cyan-300/60 dark:border-cyan-400/20" />

            <div className="absolute inset-[10%] overflow-hidden rounded-full border border-white/80 bg-white shadow-inner dark:border-slate-700/80 dark:bg-slate-900">
              <Image
                src="/sufian2.png"
                alt="Abu Sufian Rubel"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 520px"
                className="scale-[1.18] object-cover object-[50%_22%]"
              />
            </div>
          </div>
          <div className="absolute right-0 top-4 hidden space-y-3 md:block">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 42, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  mass: 0.8,
                  delay: 0.25 + index * 0.065,
                }}
                whileHover={{
                  x: -10,
                  y: -2,
                  scale: 1.06,
                  transition: { type: "spring", stiffness: 420, damping: 22 },
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative cursor-default overflow-hidden rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200/70 backdrop-blur transition-colors duration-300 hover:border-cyan-300 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-200/60 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:shadow-slate-950/50 dark:hover:border-cyan-500 dark:hover:text-cyan-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-slate-900" />

                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: 0.45,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 24,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative z-20 mx-auto -mt-12 max-w-sm cursor-default overflow-hidden rounded-2xl border border-blue-200 bg-white/90 p-5 shadow-xl shadow-blue-200/60 backdrop-blur transition-colors duration-300 hover:border-cyan-300 md:absolute md:bottom-8 md:left-10 md:mx-0 dark:border-blue-500/20 dark:bg-slate-900/90 dark:shadow-blue-950/40 dark:hover:border-cyan-400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-slate-900" />

            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-400/25" />

            <div className="relative z-10 mb-3 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.65, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.16)]"
              />
              Available for
            </div>

            <div className="relative z-10 flex items-center justify-between gap-5">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-300">
                  Remote Opportunities
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Open to exciting projects and collaborations
                </p>
              </div>

              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:group-hover:bg-blue-500 dark:group-hover:text-white"
              >
                <Globe2 size={32} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
