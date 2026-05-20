"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ExternalLink,
  Award,
  Briefcase,
  Clock,
  BrainCircuit,
  RefreshCw,
  Palette,
  Bug,
  Bot,
  Code2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const categories = ["All", "Management", "Development", "UI-UX Design", "Testing", "Ai"];

type Certificate = {
  id: number;
  CerNO: string;
  hrefLink: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  gradient: string;
  accentColor: string;
  icon: LucideIcon;
};

const certificates: Certificate[] = [
  {
    id: 0,
    CerNO : "UC-27dafd0b-f6b5-49af-a4c7-f2745b494888",
    hrefLink : "https://www.udemy.com/certificate/UC-27dafd0b-f6b5-49af-a4c7-f2745b494888/",
    title: "PMP Training Certified 35 hrs PDU",
    issuer: "Udemy",
    date: "2025",
    category: "Management",
    description: "Foundations of project management, including Agile, Waterfall, and hybrid methodologies.",
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    accentColor: "#4f46e5",
    icon: Award,
  },
  { id: 1,
    CerNO : "UC-bbd19db4-3ccd-4935-85d3-27f56158e759",
    hrefLink : "https://www.udemy.com/certificate/UC-bbd19db4-3ccd-4935-85d3-27f56158e759/",
    title: "Project Management",
    issuer: "Udemy",
    date: "2025",
    category: "Management",
    description: "Foundations of project management, including Agile, Waterfall, and hybrid methodologies.",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    accentColor: "#2563eb",
    icon: Briefcase,
  },
  {
    id: 2,
    CerNO : "UC-99d4b788-b715-49f6-86bb-486e688ad123",
    hrefLink : "https://www.udemy.com/certificate/UC-99d4b788-b715-49f6-86bb-486e688ad123/",
    title: "Time Management",
    issuer: "Udemy",
    date: "2022",
    category: "Management",
    description: "Increase productivity and get more done in less time.",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    accentColor: "#f97316",
    icon: Clock,
  },
  {
    id: 3,
    CerNO : "1e1c61cd0997932576",
    hrefLink : "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997932576",
    title: "Ai Tools",
    issuer: "Be10x",
    date: "2026",
    category: "Ai",
    description: "Varies Ai Tools utility & Increase your Productivity.",
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-700",
    accentColor: "#9333ea",
    icon: BrainCircuit,
  },
  {
    id: 4,
    CerNO : "UC-0db92c31-3afb-4340-b95c-239c299a09d5",
    hrefLink : "https://www.udemy.com/certificate/UC-0db92c31-3afb-4340-b95c-239c299a09d5/",
    title: "Scrum Master-Agile Projects",
    issuer: "Udemy",
    date: "2022",
    category: "Management",
    description: "Jira, Agile Methodology & More",
    gradient: "from-cyan-500 via-teal-600 to-emerald-700",
    accentColor: "#0d9488",
    icon: RefreshCw,
  },
  {
    id: 5,
    CerNO : "UC-e4166b88-2b1b-4f5b-988b-e7ba094b9593",
    hrefLink : "https://www.udemy.com/certificate/UC-e4166b88-2b1b-4f5b-988b-e7ba094b9593/",
    title: "Figma-UI/UX Design",
    issuer: "Udemy",
    date: "2022",
    category: "UI-UX Design",
    description: "Complete 26.5 hrs course",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    accentColor: "#db2777",
    icon: Palette,
  },
  {
    id: 6,
    CerNO : "f6a263e982",
    hrefLink : "https://www.eduonix.com/certificate/f6a263e982",
    title: "Software Testing",
    issuer: "Brilliance",
    date: "2021",
    category: "Testing",
    description: "Manual Software Testing",
    gradient: "from-rose-500 via-red-600 to-orange-600",
    accentColor: "#e11d48",
    icon: Bug,
  },
  {
    id: 7,
    CerNO : "f6a263e982",
    hrefLink : "https://cursa.app/en/verify",
    title: "Software Testing",
    issuer: "Cursa",
    date: "2021",
    category: "Testing",
    description: "Manual Software Testing",
    gradient: "from-red-500 via-rose-600 to-pink-700",
    accentColor: "#dc2626",
    icon: Bug,
  },
  {
    id: 8,
    CerNO : "Nareshit56432",
    hrefLink : "https://nareshit.com/",
    title: "Automation Software Testing",
    issuer: "Naresh IT",
    date: "2021",
    category: "Testing",
    description: "selenium Automation Software Testing",
    gradient: "from-orange-500 via-red-600 to-rose-700",
    accentColor: "#ea580c",
    icon: Bot,
  },
  {
    id: 9,
    CerNO : "Nareshit95647",
    hrefLink : "https://nareshit.com/",
    title: "Full Stuck Development",
    issuer: "Naresh IT",
    date: "2023",
    category: "Development",
    description: "Front End React Js & BackEnd Node Js",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    accentColor: "#059669",
    icon: Code2,
  }
];

export default function CertificatesPage() {
  // 1. Add state to track the active category
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. Filter the certificates based on the active category
  const filteredCertificates = certificates.filter((cert) => 
    activeCategory === "All" ? true : cert.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Certificates
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Professional certifications and training I&apos;ve completed to stay at the 
            forefront of project management and technical strategy.
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
                // 3. Update state when a button is clicked
                onClick={() => setActiveCategory(cat)}
                // 4. Update the active styling logic to match the state
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

          {/* Certificates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 5. Map over the FILTERED array instead of the original array */}
            {filteredCertificates.map((cert) => {
              const Icon = cert.icon;
              return (
              <div
                key={cert.id}
                className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 bg-white"
              >
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${cert.gradient} flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white,transparent)]" />
                  {/* Shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                  {/* Category pill */}
                  <span className="absolute top-3 left-3 bg-white/15 backdrop-blur-md text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/20">
                    {cert.category}
                  </span>
                  {/* Year pill */}
                  <span className="absolute top-3 right-3 bg-white/15 backdrop-blur-md text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/20">
                    {cert.date}
                  </span>
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Icon size={40} className="text-white" strokeWidth={1.6} />
                  </div>
                  {/* Certified badge */}
                  <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 bg-white/95 text-gray-900 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
                    <Award size={11} /> Certified
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: cert.accentColor }}
                  >
                    {cert.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5 font-medium">{cert.issuer}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                      ID: {cert.CerNO}
                    </span>
                    <Link 
                      href={cert.hrefLink} 
                      className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
          
          {/* Optional: Add an empty state if a category has no certificates yet */}
          {filteredCertificates.length === 0 && (
             <div className="text-center py-12 text-gray-500">
               No certificates found in this category.
             </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}