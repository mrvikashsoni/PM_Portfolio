import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const chapters = [
  "Visual Hierarchy",
  "Colour Theory",
  "Typography",
  "Spacing & Layout",
  "Alignment",
  "Contrast",
  "Accessibility",
  "Responsive Design",
];

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1c3d5e] to-[#1a2f4a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <BookOpen size={12} /> New book
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Practical UI
          </h1>
          <p className="text-blue-100/80 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            A book that shares UI design guidelines for solving common interface
            problems. Learn practical, proven techniques to create beautiful,
            functional, and accessible interfaces.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#e07b2e] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#c9691a] transition-colors shadow-lg"
          >
            Get the book <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* What you'll learn */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What you&apos;ll learn
            </h2>
            <p className="text-gray-500 mb-8">
              Practical UI covers the fundamentals of good interface design,
              distilled into clear, actionable guidelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chapters.map((chapter, i) => (
                <div
                  key={chapter}
                  className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
                >
                  <span className="text-[#1c3d5e] font-bold text-sm w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 font-medium text-sm">{chapter}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What people are saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "This is the UI design book I wish I had when I started. Clear, practical and beautifully written.",
                  author: "Sarah L.",
                  role: "Product Designer",
                },
                {
                  quote: "Adham's approach to teaching UI design is refreshingly practical. Each guideline has a clear reason.",
                  author: "Marcus T.",
                  role: "Front-end Developer",
                },
              ].map((t) => (
                <div
                  key={t.author}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#e07b2e] to-[#c9691a] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to level up your UI?</h2>
            <p className="text-orange-50/80 mb-6 max-w-sm mx-auto text-sm">
              Join thousands of designers and developers who have improved their
              UI skills with Practical UI.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#e07b2e] px-7 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Get the book <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
