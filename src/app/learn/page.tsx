import Link from "next/link";
import { ArrowRight, BookOpen, Star, Code2, ArrowDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Existing chapters for the book
const chapters = [
  "Personal Interests & Passion",
  "Current Skills & Strengths",
  "Market Demand & Future Scope",
  "Earning Potential & Salary",
  "Work-Life Balance",
  "Learning & Growth Opportunities",
  "Job Security & Stability",
  "Work Environment & Culture",
];

// NAYA: Tech careers ki list aur unke blog links
const careerPaths = [
  // Existing 6 Paths
  {
    id: "react",
    title: "React JS",
    description: "Learn to build interactive, component-based user interfaces.",
    href: "/blog/learn-react-js",
  },
  {
    id: "node",
    title: "Node JS",
    description: "Master backend development and scalable server-side apps.",
    href: "/blog/learn-node-js",
  },
  {
    id: "pm",
    title: "Project Management",
    description: "Learn Agile, Scrum, and how to lead successful IT teams.",
    href: "/blog/project-management",
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate deployments, CI/CD pipelines, and cloud infrastructure.",
    href: "/blog/learn-devops",
  },
  {
    id: "qa",
    title: "QA & Testing",
    description: "Ensure software quality through manual and automated testing.",
    href: "/blog/qa-testing",
  },
  {
    id: "ui",
    title: "UI & UX Design",
    description: "Design beautiful, user-centric wireframes and prototypes.",
    href: "/blog/ui-ux-design",
  },

  // 14 New IT Career Paths
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Master both frontend and backend technologies to build end-to-end apps.",
    href: "/blog/full-stack-development",
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Extract actionable insights from complex data using analytics and statistics.",
    href: "/blog/data-science",
  },
  {
    id: "ml-ai",
    title: "AI & Machine Learning",
    description: "Build intelligent systems that learn from data and automate complex tasks.",
    href: "/blog/ai-machine-learning",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect systems, networks, and programs from digital attacks and threats.",
    href: "/blog/cybersecurity",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description: "Design and manage scalable cloud architectures on AWS, Azure, or GCP.",
    href: "/blog/cloud-computing",
  },
  {
    id: "python",
    title: "Python Development",
    description: "Write versatile code for web apps, automation, and data analysis.",
    href: "/blog/python-development",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Create native or cross-platform applications for iOS and Android.",
    href: "/blog/mobile-development",
  },
  {
    id: "dba",
    title: "Database Administration",
    description: "Manage, optimize, and secure enterprise database systems.",
    href: "/blog/database-administration",
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    description: "Bridge the gap between IT and business using data-driven insights.",
    href: "/blog/business-analysis",
  },
  {
    id: "game-dev",
    title: "Game Development",
    description: "Design and code interactive gaming experiences and 3D worlds.",
    href: "/blog/game-development",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description: "Build secure, decentralized applications (dApps) and smart contracts.",
    href: "/blog/blockchain",
  },
  {
    id: "architecture",
    title: "Systems Architecture",
    description: "Design the high-level structures of complex software systems and networks.",
    href: "/blog/systems-architecture",
  },
  {
    id: "tech-writing",
    title: "Technical Writing",
    description: "Communicate complex technical concepts through clear, concise documentation.",
    href: "/blog/technical-writing",
  },
  {
    id: "sre",
    title: "Site Reliability Engineering",
    description: "Apply software engineering practices to IT operations for high availability.",
    href: "/blog/site-reliability-engineering",
  }
];

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
     <div className="bg-gradient-to-br from-[#1c3d5e] to-[#1a2f4a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            {/* Tag/Badge ka text change kiya */}
            <BookOpen size={12} /> Career Guide 
          </div>
          
          {/* Main Heading update ki */}
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Build Your Dream Career in IT
          </h1>
          
          {/* Description update kiya jo IT roles ko highlight karta hai */}
          <p className="text-blue-100/80 text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the perfect software development path for you. From Frontend and Backend engineering to DevOps, QA, and UI/UX design, learn the exact skills needed to succeed in the modern tech industry.
          </p>
          
          {/* Call to Action (Button) ka text change kiya */}
          <Link
            href="#explore-careers"
            className="inline-flex items-center gap-2 bg-[#e07b2e] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#c9691a] transition-colors shadow-lg"
          >
            Start Exploring <ArrowDown size={14} />
          </Link>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* NAYA SECTION: Explore Tech Careers */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="text-[#e07b2e]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">
                Explore Software IT Careers
              </h2>
            </div>
            <p className="text-gray-500 mb-8">
              Want to build a career in tech? Read our comprehensive guides on these popular domains and start learning today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerPaths.map((path) => (
                <Link
                  key={path.id}
                  href={path.href}
                  className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1c3d5e] hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#1c3d5e] flex items-center justify-between">
                    {path.title}
                    <ArrowRight 
                      size={16} 
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#e07b2e]" 
                    />
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {path.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
          {/* END NAYA SECTION */}

          {/* What you'll learn */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Things to Consider Before Choosing a Career
            </h2>
            <p className="text-gray-500 mb-8">
              Finding the right path in tech isn't just about coding. Evaluate these 8 crucial factors to make an informed decision for your future.
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
          {/* <section className="mb-16">
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
          </section> */}

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#e07b2e] to-[#c9691a] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to level up your career?</h2>
            <p className="text-orange-50/80 mb-6 max-w-sm mx-auto text-sm">
              Join me on Linkdin.
            </p>
            <Link
              href="https://www.linkedin.com/in/mrvikashkr/"
              target="_blank"  
            className="inline-flex items-center gap-2 bg-white text-[#e07b2e] px-7 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Connect Me<ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}