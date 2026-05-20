"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Users, Award, CheckCircle2, TrendingUp, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const featuredProjects = [
  {
    id: 1,
    title: "BlueEra",
    category: "Multi Domain",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    accentColor: "#4f46e5",
    href: "/projects",
  },
  {
    id: 2,
    title: "passbook",
    category: "Banking",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
    accentColor: "#db2777",
    href: "/projects",
  },
  {
    id: 3,
    title: "Nkindle",
    category: "Retails",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    accentColor: "#0d9488",
    href: "/projects",
  },
];

const stats = [
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: CheckCircle2, value: "95%", label: "On-Time Delivery" },
  { icon: TrendingUp, value: "15%", label: "Engineering Velocity Boost" },
  { icon: Users, value: "18+", label: "Team Members Led" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="relative overflow-hidden"
      >
        {/* Split background bands (navy left, orange right) */}
        <div aria-hidden className="absolute inset-0 flex">
          <div className="flex-1 bg-linear-to-br from-[#1c3d5e] via-[#1c3d5e] to-[#0f2438]" />
          <div className="flex-1 bg-linear-to-bl from-[#e07b2e] via-[#e07b2e] to-[#c4651f]" />
        </div>

        {/* Decorative grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Animated background blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-linear-to-br from-blue-400/30 to-cyan-300/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full bg-linear-to-br from-orange-400/30 to-pink-300/20 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center" style={{ minHeight: "640px" }}>
          {/* ── Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 text-[#6dafd4] text-xs font-semibold tracking-widest uppercase mb-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15"
            >
              <Sparkles size={12} className="animate-pulse" /> Hi, I&apos;m Vikash Kumar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            >
              Delivering{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Scalable IT Solutions
              </span>
              , Driven by{" "}
              <span className="bg-linear-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent">
                Data &amp; Agile
              </span>{" "}
              Frameworks.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-50/85 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              An Enterprising Tech Project Manager &amp; Agile Scrum Master with{" "}
              <span className="font-semibold text-white">5+ years of experience</span>{" "}
              leading cross-functional teams (
              <span className="font-semibold text-white">18+ members</span>) to ship SaaS and E-commerce platforms on time and within budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="group/btn inline-flex items-center gap-2 bg-white text-[#1c3d5e] px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Case Studies
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={14} /> Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Avatar column ── */}
          <motion.div
            style={{ y: avatarY }}
            className="relative flex items-center justify-center"
          >
            {/* Glow ring */}
            <motion.div
              aria-hidden
              className="absolute w-72 h-72 rounded-full bg-white/15 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating gradient ring */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full bg-linear-to-br from-cyan-300/40 via-transparent to-orange-300/40 blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 w-64 lg:w-72 aspect-square"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/80 shadow-2xl shadow-black/40"
              >
                <Image
                  src="/profile.png"
                  alt="Vikash Kumar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 288px, 256px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-6 -left-2 lg:left-0 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-xl border border-white/50"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#1c3d5e]">Scrum Master</div>
              <div className="text-[10px] text-gray-500">Certified Agile</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute top-6 -right-2 lg:right-0 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-xl border border-white/50"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#e07b2e]">PMP</div>
              <div className="text-[10px] text-gray-500">Project Mgmt Pro</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-10 -left-2 lg:left-0 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-xl border border-white/50"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#1c3d5e]">JIRA Expert</div>
              <div className="text-[10px] text-gray-500">Workflow &amp; Sprints</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 -right-2 lg:right-0 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-xl border border-white/50"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#e07b2e]">SaaS &amp; E-commerce</div>
              <div className="text-[10px] text-gray-500">Specialist</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Stats strip ── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="bg-linear-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100 py-10 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#1c3d5e] to-[#e07b2e] flex items-center justify-center shadow-md shrink-0">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
                  {value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Latest work ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#e07b2e] mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Recent Projects Delivered
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Product launches, process optimizations, and cross-functional team successes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link
                  href={project.href}
                  className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative h-56 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white,transparent)]" />
                    {/* Shine sweep on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                    <span className="relative text-white/30 text-8xl font-black select-none group-hover:scale-110 group-hover:text-white/40 transition-all duration-500">
                      0{project.id}
                    </span>
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30">
                      <span className="text-white text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6 bg-white">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: project.accentColor }}
                    >
                      {project.category}
                    </span>
                    <h3 className="mt-1.5 text-xl font-bold text-gray-900 group-hover:text-[#1c3d5e] transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm text-gray-500 group-hover:text-gray-900 font-semibold transition-colors">
                      View case study
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-14"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              View all work{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="relative py-20 px-6 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="shrink-0 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full bg-linear-to-br from-[#1c3d5e] via-purple-500 to-[#e07b2e] opacity-60 blur-md"
            />
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/profile.png"
                alt="Vikash Kumar"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              A little about me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              An enterprising and results-driven Senior Project Manager with over 5 years of experience orchestrating full-lifecycle SDLC delivery for scalable SaaS and E-commerce platforms. Adept at deconstructing complex operational roadblocks into streamlined, high-velocity engineering workflows. Proven expertise in rigorous budget optimization, proactive risk mitigation, and cultivating cross-functional synergy to consistently deliver 95% of contracted milestones on time while exceeding stakeholder expectations.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#1c3d5e] font-semibold"
            >
              <span className="relative">
                Learn more about my background
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-[#1c3d5e] transition-all duration-300" />
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Workflow / Process CTA ── */}
      <section className="relative py-24 px-6 bg-white border-t border-gray-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-blue-100 shadow-sm"
          >
            <Sparkles size={12} /> Methodology
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Mastering{" "}
            <span className="bg-linear-to-r from-[#1c3d5e] to-[#e07b2e] bg-clip-text text-transparent">
              Delivery
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Curious about how I keep cross-functional teams aligned? Read my deep dive into practical Agile workflows, resource allocation, and maintaining momentum throughout the software development lifecycle.
          </p>
          <Link
            href="/learn"
            className="group relative inline-flex items-center gap-2 bg-[#1c3d5e] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-[#1c3d5e] via-[#e07b2e] to-[#1c3d5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-[200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <span className="relative">Explore</span>
            <ArrowRight
              size={14}
              className="relative group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
