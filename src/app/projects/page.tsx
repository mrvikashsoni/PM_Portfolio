import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const categories = ["All", "Design Systems", "Product Design", "Website Design", "Books & Speaking", "Side Projects"];

const projects = [
  {
    id: 1,
    title: "Figma design system",
    category: "Design Systems",
    description: "A comprehensive, accessible Figma design system built for scale.",
    gradient: "from-blue-500 to-indigo-700",
    accentColor: "#4f46e5",
    tag: "Design system",
  },
  {
    id: 2,
    title: "My UI design book — Practical UI",
    category: "Books & Speaking",
    description: "A book sharing practical UI design guidelines for common interface challenges.",
    gradient: "from-rose-400 to-fuchsia-600",
    accentColor: "#db2777",
    tag: "Book",
  },
  {
    id: 3,
    title: "Creating a lean design system",
    category: "Design Systems",
    description: "How William Hill scaled their design system across global teams.",
    gradient: "from-emerald-400 to-cyan-600",
    accentColor: "#0d9488",
    tag: "Design system",
  },
  {
    id: 4,
    title: "Rethinking flight search",
    category: "Books & Speaking",
    description: "A speaking engagement on rethinking complex UI problems.",
    gradient: "from-sky-400 to-blue-600",
    accentColor: "#0284c7",
    tag: "Speaking",
  },
  {
    id: 5,
    title: "Qantas map search",
    category: "Product Design",
    description: "Redesigning the flight search experience for Australia's largest airline.",
    gradient: "from-red-400 to-rose-600",
    accentColor: "#e11d48",
    tag: "Product Design",
  },
  {
    id: 6,
    title: "Campaign Monitor iPhone app",
    category: "Product Design",
    description: "Mobile email marketing app design for Campaign Monitor.",
    gradient: "from-orange-400 to-amber-600",
    accentColor: "#d97706",
    tag: "Product Design",
  },
  {
    id: 7,
    title: "Subscriber notification emails",
    category: "Product Design",
    description: "Redesigning transactional email templates for better engagement.",
    gradient: "from-violet-400 to-purple-600",
    accentColor: "#7c3aed",
    tag: "Product Design",
  },
  {
    id: 8,
    title: "Segment builder design",
    category: "Product Design",
    description: "A powerful, intuitive segment builder for marketing automation.",
    gradient: "from-teal-400 to-green-600",
    accentColor: "#059669",
    tag: "Product Design",
  },
  {
    id: 9,
    title: "Interior design news feed",
    category: "Product Design",
    description: "A curated news feed UI for interior design enthusiasts.",
    gradient: "from-amber-300 to-orange-500",
    accentColor: "#f59e0b",
    tag: "Product Design",
  },
  {
    id: 10,
    title: "Qantas homepage refresh",
    category: "Website Design",
    description: "A full redesign of the Qantas.com homepage experience.",
    gradient: "from-red-500 to-pink-600",
    accentColor: "#dc2626",
    tag: "Website Design",
  },
  {
    id: 11,
    title: "Quest Research brand & website",
    category: "Website Design",
    description: "Brand identity and website design for a research firm.",
    gradient: "from-slate-500 to-gray-700",
    accentColor: "#475569",
    tag: "Website Design",
  },
  {
    id: 12,
    title: "Growth Giant website",
    category: "Website Design",
    description: "Marketing website design and development for a growth agency.",
    gradient: "from-lime-400 to-green-600",
    accentColor: "#65a30d",
    tag: "Website Design",
  },
  {
    id: 13,
    title: "HRHR brand & website",
    category: "Website Design",
    description: "Brand refresh and website redesign for an HR technology company.",
    gradient: "from-cyan-400 to-blue-600",
    accentColor: "#0891b2",
    tag: "Website Design",
  },
  {
    id: 14,
    title: "Petra Capital brand & website",
    category: "Website Design",
    description: "Brand identity and website for a boutique capital firm.",
    gradient: "from-stone-400 to-stone-600",
    accentColor: "#78716c",
    tag: "Website Design",
  },
  {
    id: 15,
    title: "Freelancer.com brand & UX design",
    category: "Side Projects",
    description: "Brand and UX design concept for the world's largest freelance marketplace.",
    gradient: "from-blue-400 to-sky-600",
    accentColor: "#3b82f6",
    tag: "Side Project",
  },
];

export default function ProjectsPage() {
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  cat === "All"
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
            {projects.map((project) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
