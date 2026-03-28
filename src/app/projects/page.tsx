"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const categories = ["All", "Multi Domain", "Retails", "EdTech", "Medical", "Entertainment","AgriTech", "Banking"];

const projects = [
  {
    id: 1,
    title: "BlueEra",
    category: "Multi Domain",
    description: "CTO | Project Manager | HR",
    gradient: "from-blue-500 to-indigo-700",
    accentColor: "#4f46e5",
    tag: "Management",
  },
  {
    id: 2,
    title: "General Aeronautic",
    category: "AgriTech",
    description: "Management | QA",
    gradient: "from-rose-400 to-fuchsia-600",
    accentColor: "#db2777",
    tag: "QA",
  },
  {
    id: 3,
    title: "Edmingle",
    category: "EdTech",
    description: "Manual Software Testing",
    gradient: "from-emerald-400 to-cyan-600",
    accentColor: "#0d9488",
    tag: "QA",
  },
  {
    id: 4,
    title: "Metadella",
    category: "Retails",
    description: "Management | UI Design | QA",
    gradient: "from-sky-400 to-blue-600",
    accentColor: "#0284c7",
    tag: "Design",
  },
  {
    id: 5,
    title: "Nkindle",
    category: "Retails",
    description: "Management | UI Design | QA",
    gradient: "from-red-400 to-rose-600",
    accentColor: "#e11d48",
    tag: "Product Design",
  },
  {
    id: 6,
    title: "passbook",
    category: "Banking",
    description: "Management | UI Design | QA",
    gradient: "from-orange-400 to-amber-600",
    accentColor: "#d97706",
    tag: "QA",
  },
  {
    id: 7,
    title: "inayah",
    category: "Medical",
    description: "Management | UI Design | QA",
    gradient: "from-violet-400 to-purple-600",
    accentColor: "#7c3aed",
    tag: "Management",
  },
  {
    id: 8,
    title: "Elel",
    category: "Entertainment",
    description: "Management | Development | QA",
    gradient: "from-teal-400 to-green-600",
    accentColor: "#059669",
    tag: "Development",
  },
  {
    id: 9,
    title: "Many more",
    category: "All",
    description: "Management",
    gradient: "from-teal-400 to-green-600",
    accentColor: "#059669",
    tag: "Management",
  }
];

export default function ProjectsPage() {
  // 1. Add state to track the currently active category
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. Filter the projects based on the active category
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
                // 3. Update state when a category button is clicked
                onClick={() => setActiveCategory(cat)}
                // 4. Update styling logic to check against activeCategory state
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
            {/* 5. Map over the filtered array instead of the full array */}
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href="#"
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white,transparent)]" />
                  <span className="text-white/20 text-7xl font-black select-none">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
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

          {/* Empty state (optional, just in case) */}
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