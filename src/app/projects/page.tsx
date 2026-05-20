"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Code2,
  Users,
  Briefcase,
  Plane,
  Cloud,
  Sprout,
  GraduationCap,
  BookOpen,
  PencilLine,
  Lightbulb,
  ShoppingBag,
  Tag,
  Package,
  ShoppingCart,
  Store,
  Landmark,
  Coins,
  CreditCard,
  HeartPulse,
  Stethoscope,
  Activity,
  Plus,
  Music,
  Play,
  Headphones,
  AudioLines,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const categories = ["All", "Multi Domain", "Retails", "EdTech", "Medical", "Entertainment", "AgriTech", "Banking"];

type SceneKind = "multi" | "aero" | "edu" | "retail" | "cart" | "bank" | "med" | "ent" | "more";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  accentColor: string;
  tag: string;
  scene: SceneKind;
};

const projects: Project[] = [
  {
    id: 1,
    title: "BlueEra",
    category: "Multi Domain",
    description: "CTO | Project Manager | HR",
    gradient: "from-blue-500 to-indigo-700",
    accentColor: "#4f46e5",
    tag: "Management",
    scene: "multi",
  },
  {
    id: 2,
    title: "General Aeronautic",
    category: "AgriTech",
    description: "Management | QA",
    gradient: "from-sky-500 to-emerald-600",
    accentColor: "#0ea5e9",
    tag: "QA",
    scene: "aero",
  },
  {
    id: 3,
    title: "Edmingle",
    category: "EdTech",
    description: "Manual Software Testing",
    gradient: "from-emerald-400 to-cyan-600",
    accentColor: "#0d9488",
    tag: "QA",
    scene: "edu",
  },
  {
    id: 4,
    title: "Metadella",
    category: "Retails",
    description: "Management | UI Design | QA",
    gradient: "from-sky-400 to-blue-600",
    accentColor: "#0284c7",
    tag: "Design",
    scene: "retail",
  },
  {
    id: 5,
    title: "Nkindle",
    category: "Retails",
    description: "Management | UI Design | QA",
    gradient: "from-red-400 to-rose-600",
    accentColor: "#e11d48",
    tag: "Product Design",
    scene: "cart",
  },
  {
    id: 6,
    title: "passbook",
    category: "Banking",
    description: "Management | UI Design | QA",
    gradient: "from-orange-400 to-amber-600",
    accentColor: "#d97706",
    tag: "QA",
    scene: "bank",
  },
  {
    id: 7,
    title: "inayah",
    category: "Medical",
    description: "Management | UI Design | QA",
    gradient: "from-violet-400 to-purple-600",
    accentColor: "#7c3aed",
    tag: "Management",
    scene: "med",
  },
  {
    id: 8,
    title: "Elel",
    category: "Entertainment",
    description: "Management | Development | QA",
    gradient: "from-fuchsia-500 to-pink-600",
    accentColor: "#db2777",
    tag: "Development",
    scene: "ent",
  },
  {
    id: 9,
    title: "Many more",
    category: "All",
    description: "Management",
    gradient: "from-teal-400 to-green-600",
    accentColor: "#059669",
    tag: "Management",
    scene: "more",
  },
];

// ─── Animated scenes ───────────────────────────────────────────────────────
function MultiScene() {
  const orbit = [
    { Icon: Code2, angle: 0 },
    { Icon: Users, angle: 120 },
    { Icon: Briefcase, angle: 240 },
  ];
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {orbit.map(({ Icon, angle }, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translate(58px) rotate(-${angle}deg)`,
            }}
          >
            <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <Icon size={16} className="text-white" />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <Layers size={28} className="text-white" />
      </motion.div>
    </>
  );
}

function AeroScene() {
  return (
    <>
      <motion.div
        animate={{ x: [-30, 20, -30] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-6 opacity-50"
      >
        <Cloud size={26} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ x: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-8 opacity-40"
      >
        <Cloud size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ x: ["-110%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 left-0"
      >
        <Plane size={44} className="text-white drop-shadow-lg -rotate-12" />
      </motion.div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-5 opacity-70">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          >
            <Sprout size={16} className="text-emerald-100" />
          </motion.div>
        ))}
      </div>
    </>
  );
}

function EduScene() {
  return (
    <>
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 left-6 opacity-80"
      >
        <BookOpen size={22} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [4, -4, 4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-7 opacity-80"
      >
        <PencilLine size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-10 opacity-90"
      >
        <Lightbulb size={20} className="text-yellow-200" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <GraduationCap size={30} className="text-white" />
      </motion.div>
    </>
  );
}

function RetailScene() {
  return (
    <>
      <motion.div
        animate={{ y: [-10, 6, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 left-7 opacity-80"
      >
        <Tag size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [6, -8, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-7 opacity-80"
      >
        <Package size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <ShoppingBag size={28} className="text-white" />
      </motion.div>
    </>
  );
}

function CartScene() {
  return (
    <>
      <motion.div
        animate={{ y: [-30, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
        className="absolute top-3 left-1/2 -translate-x-6"
      >
        <Package size={16} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [-30, 40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeIn", delay: 0.7 }}
        className="absolute top-3 left-1/2 translate-x-2"
      >
        <Package size={14} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ x: [-110, 110, -110] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ShoppingCart size={36} className="text-white drop-shadow-lg" />
      </motion.div>
      <div className="absolute top-5 right-6 opacity-70">
        <Store size={22} className="text-white" />
      </div>
    </>
  );
}

function BankScene() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [-30, 110], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeIn", delay: i * 0.6 }}
          className="absolute top-0"
          style={{ left: `${30 + i * 20}%` }}
        >
          <Coins size={18} className="text-yellow-200" />
        </motion.div>
      ))}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-6 opacity-90"
      >
        <CreditCard size={22} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <Landmark size={28} className="text-white" />
      </motion.div>
    </>
  );
}

function MedScene() {
  return (
    <>
      <motion.div
        animate={{ x: [-120, 120] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 left-0 opacity-60"
      >
        <Activity size={36} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 right-6 opacity-80"
      >
        <Stethoscope size={22} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-7 opacity-80"
      >
        <Plus size={20} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <HeartPulse size={30} className="text-white" />
      </motion.div>
    </>
  );
}

function EntScene() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [40, -60], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
          className="absolute bottom-4"
          style={{ left: `${20 + i * 20}%` }}
        >
          <Music size={i === 1 ? 18 : 14} className="text-white" />
        </motion.div>
      ))}
      <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 right-6 opacity-80"
      >
        <Headphones size={22} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ scaleX: [1, 1.6, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 left-6 opacity-80"
      >
        <AudioLines size={22} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <Play size={28} className="text-white fill-white ml-1" />
      </motion.div>
    </>
  );
}

function MoreScene() {
  return (
    <>
      {[
        { top: "20%", left: "20%", delay: 0 },
        { top: "30%", right: "22%", delay: 0.4 },
        { bottom: "26%", left: "26%", delay: 0.8 },
        { bottom: "22%", right: "20%", delay: 1.2 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.4, 1, 0.4], rotate: [0, 90, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: pos.delay, ease: "easeInOut" }}
          className="absolute"
          style={pos}
        >
          <Plus size={16} className="text-white" />
        </motion.div>
      ))}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="relative z-10 w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl"
      >
        <Sparkles size={28} className="text-white" />
      </motion.div>
    </>
  );
}

function ProjectScene({ kind }: { kind: SceneKind }) {
  switch (kind) {
    case "multi": return <MultiScene />;
    case "aero": return <AeroScene />;
    case "edu": return <EduScene />;
    case "retail": return <RetailScene />;
    case "cart": return <CartScene />;
    case "bank": return <BankScene />;
    case "med": return <MedScene />;
    case "ent": return <EntScene />;
    case "more": return <MoreScene />;
  }
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Check out some of my latest product design case studies. I&apos;ve worked
            for startups, agencies, corporations, and government and have led
            projects to design products used by millions of people.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href="#"
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 bg-white"
              >
                {/* Animated thumbnail */}
                <div
                  className={`relative h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white,transparent)]" />
                  {/* Shine sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12 z-20" />

                  <ProjectScene kind={project.scene} />

                  {/* ID badge */}
                  <span className="absolute top-3 right-3 z-10 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border border-white/20">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                  {/* Tag pill */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      {project.tag}
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
                  <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 group-hover:text-gray-700 transition-colors font-medium">
                    View case study <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-12 text-gray-500">
               No projects found in this category.
             </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
