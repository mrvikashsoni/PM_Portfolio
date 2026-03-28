"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const featuredProjects = [
  {
    id: 1,
    title: "My Figma design system",
    category: "Design system",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    accentColor: "#4f46e5",
    href: "/projects",
  },
  {
    id: 2,
    title: "My UI design book",
    category: "Book",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
    accentColor: "#db2777",
    href: "/projects",
  },
  {
    id: 3,
    title: "Creating a lean design system",
    category: "Design system",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    accentColor: "#0d9488",
    href: "/projects",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative flex overflow-hidden" style={{ minHeight: "560px" }}>
        {/* Left panel – Project Management */}
        <div className="flex-1 bg-[#1c3d5e] flex items-center justify-end pr-6 lg:pr-36 pl-8 lg:pl-16 py-16 group hover:brightness-110 transition-all duration-300">
          <div className="max-w-xs text-right">
            <p className="text-[#6dafd4] text-xs font-semibold tracking-widest uppercase mb-3">
              I am a
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-none mb-5 tracking-tight">
              Project Manager
            </h1>
            <p className="text-blue-100/75 text-base lg:text-lg leading-relaxed mb-7">
              Experienced leader specializing in Agile methodologies, team alignment, and end-to-end delivery.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-[#1c3d5e] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors shadow-md"
            >
              View my projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Center – profile photo column */}
        <div className="relative w-48 lg:w-64 shrink-0 flex items-end justify-center z-10">
          {/* Split bg behind photo */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-[#1c3d5e]" />
            <div className="flex-1 bg-[#e07b2e]" />
          </div>
          {/* Avatar placeholder (real-site would have the actual photo) */}
          <div className="relative z-10 w-full">
            <svg
              viewBox="0 0 200 260"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Body */}
              <ellipse cx="100" cy="220" rx="70" ry="50" fill="#2d5a8a" />
              {/* Shirt */}
              <path
                d="M55 200 Q100 185 145 200 L150 260 L50 260 Z"
                fill="#1c3d5e"
              />
              {/* Neck */}
              <rect x="88" y="160" width="24" height="30" rx="8" fill="#d4956a" />
              {/* Head */}
              <ellipse cx="100" cy="140" rx="42" ry="48" fill="#d4956a" />
              {/* Hair */}
              <ellipse cx="100" cy="98" rx="42" ry="22" fill="#3d2b1f" />
              <rect x="58" y="98" width="84" height="20" fill="#3d2b1f" />
              {/* Eyes */}
              <ellipse cx="85" cy="138" rx="6" ry="7" fill="white" />
              <ellipse cx="115" cy="138" rx="6" ry="7" fill="white" />
              <ellipse cx="85" cy="139" rx="3.5" ry="4" fill="#2c1810" />
              <ellipse cx="115" cy="139" rx="3.5" ry="4" fill="#2c1810" />
              {/* Nose */}
              <ellipse cx="100" cy="152" rx="4" ry="3" fill="#c47d5a" />
              {/* Smile */}
              <path
                d="M89 162 Q100 170 111 162"
                stroke="#c47d5a"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Right panel – Strategy/Problem Solving */}
        <div className="flex-1 bg-[#e07b2e] flex items-center justify-start pl-6 lg:pl-36 pr-8 lg:pr-16 py-16 hover:brightness-110 transition-all duration-300">
          <div className="max-w-xs">
            <p className="text-orange-200 text-xs font-semibold tracking-widest uppercase mb-3">
              I also
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-none mb-5 tracking-tight font-sans">
              Strategize
            </h1>
            <p className="text-orange-50/80 text-base lg:text-lg leading-relaxed mb-7">
              Problem solver who translates business goals into clear, actionable technical execution.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white text-[#e07b2e] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors shadow-md"
            >
              See my process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Latest work ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Recent Projects Delivered
            </h2>
            <p className="text-gray-500 text-lg">
              Product launches, process optimizations, and cross-functional team successes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Thumbnail */}
                <div
                  className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white,transparent)]" />
                  <span className="text-white/30 text-8xl font-bold select-none">
                    {project.id}
                  </span>
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5 bg-white">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-gray-400 group-hover:text-gray-700 transition-colors font-medium">
                    View case study <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              View all work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Avatar badge */}
          <div className="shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#1c3d5e] to-[#e07b2e] flex items-center justify-center shadow-xl">
            <span className="text-4xl font-black text-white">PM</span>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              A little about me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a results-driven Project Manager with 4.5 years of experience turning complex roadblocks into streamlined workflows. I excel at managing budgets, mitigating risks, and fostering collaborative environments to ensure products ship on time and exceed stakeholder expectations.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1c3d5e] font-semibold hover:underline"
            >
              Learn more about my background <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Workflow / Process CTA ── */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            Methodology
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mastering Delivery
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Curious about how I keep cross-functional teams aligned? Read my deep dive into practical Agile workflows, resource allocation, and maintaining momentum throughout the software development lifecycle.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-[#1c3d5e] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#162f49] transition-colors shadow-lg"
          >
            Explore my process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
