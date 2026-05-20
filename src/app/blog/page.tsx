import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const posts = [
  {
    id: 1,
    title: "My story: how I became a designer and developer",
    excerpt:
      "A look back at my career in design and development, the lessons I've learned, and how I got to where I am today.",
    date: "March 2026",
    category: "Career",
    readTime: "8 min read",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Why every designer should learn to code",
    excerpt:
      "Learning to code changed how I design. Here's why I think every designer should have at least a basic understanding of front-end development.",
    date: "February 2026",
    category: "Design",
    readTime: "6 min read",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    id: 3,
    title: "How to build a design system from scratch",
    excerpt:
      "A step-by-step guide to building a design system that scales with your product and team.",
    date: "January 2026",
    category: "Design Systems",
    readTime: "12 min read",
    gradient: "from-orange-400 to-amber-600",
  },
  {
    id: 4,
    title: "The art of UI design: lessons from 20 years",
    excerpt:
      "After two decades of designing interfaces, here are the most important lessons I've learned about making great UIs.",
    date: "December 2025",
    category: "UI Design",
    readTime: "10 min read",
    gradient: "from-purple-400 to-violet-600",
  },
  {
    id: 5,
    title: "Accessible design is just good design",
    excerpt:
      "Accessibility isn't an afterthought — it's a fundamental part of good UI design. Here's how to think about it.",
    date: "November 2025",
    category: "Accessibility",
    readTime: "7 min read",
    gradient: "from-rose-400 to-pink-600",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-gray-500 text-lg">
            Thoughts on design, development, and everything in between.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8 last:border-0"
              >
                {/* Thumbnail */}
                <div
                  className={`w-full md:w-48 h-32 shrink-0 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-white/20 text-6xl font-black select-none">
                    {post.id.toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-[#1c3d5e] bg-blue-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors leading-snug">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-[#1c3d5e] font-medium hover:underline"
                  >
                    Read more <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
