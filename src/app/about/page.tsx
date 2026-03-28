import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const leadershipSkills = [
  "Project Lifecycle Management",
  "Agile / Scrum (JIRA)",
  "Team Building & Mentorship",
  "HR & Talent Acquisition",
  "Business Process Optimization",
  "Risk Assessment & Mitigation",
];

const techSkills = [
  "React.js & Node.js",
  "Flutter Development",
  "UI/UX Design (Figma)",
  "QA Testing & UAT",
  "API Integrations",
  "System Architecture",
];

const skillBars = [
  { label: "Tech Project Management", value: 95, color: "bg-[#1c3d5e]" },
  { label: "React & Node.js", value: 50, color: "bg-[#e07b2e]" },
  { label: "UI/UX & Figma", value: 85, color: "bg-purple-500" },
  { label: "HR & Talent Acquisition", value: 80, color: "bg-emerald-500" },
  { label: "QA & Testing", value: 85, color: "bg-rose-500" },
];

const randomFacts = [
  "5+ years of experience in the Non-tech industry",
  "4.5 years of experience in the tech industry",
  "Currently CTO & Tech Project Manager at BlueCS Limited",
  "Hold a B.Tech. in Mechanical Engineering",
  "Passionate about optimizing systems for 99% uptime",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            About me
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            CTO, Tech Project Manager, and multi-disciplinary tech leader.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Bio */}
          <section className="mb-16 flex flex-col md:flex-row gap-12 items-start">
            {/* Avatar */}
            <div className="shrink-0 w-36 h-36 rounded-full bg-gradient-to-br from-[#1c3d5e] to-[#e07b2e] flex items-center justify-center shadow-xl">
              <span className="text-5xl font-black text-white">VK</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hi, I&apos;m Vikash Kumar
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 text-base leading-relaxed space-y-4">
                <p>
                  I am a dynamic CTO and Project Manager with 4.5 years of experience spearheading end-to-end technical strategy, architecture, and product delivery for scalable digital solutions. 
                </p>
                <p>
                  I have a proven track record of bridging business objectives with technical execution, driving agile development lifecycles from initial requirements gathering to the successful deployment of mobile and web applications. I am highly skilled at optimizing technical operations, defining scalable data structures, and aligning product roadmaps with overarching business goals to drive user engagement and revenue growth.
                </p>
                <p>
                  Beyond technical execution, I am adept at recruiting, mentoring, and leading high-performing engineering teams. I direct end-to-end recruitment pipelines for critical technical roles, managing sourcing, interviewing, onboarding, and continuous team development.
                </p>
              </div>
            </div>
          </section>

          {/* Skills split */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What I do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Leader card */}
              <div className="rounded-2xl bg-[#1c3d5e] p-8 text-white">
                <div className="text-3xl font-extrabold mb-2 tracking-tight">
                  leader
                </div>
                <p className="text-blue-100/75 text-sm mb-6">
                  Strategic technical leader focusing on agile project management, HR, and business alignment.
                </p>
                <ul className="space-y-2">
                  {leadershipSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-blue-100/90 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech card */}
              <div className="rounded-2xl bg-[#e07b2e] p-8 text-white">
                <div className="text-3xl font-extrabold mb-2 tracking-tight font-mono">
                  &lt;architect&gt;
                </div>
                <p className="text-orange-50/75 text-sm mb-6">
                  Hands-on expertise across Web Dev, UI Design, and Quality Assurance.
                </p>
                <ul className="space-y-2">
                  {techSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-orange-50/90 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-200 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Skill bars */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Skill level
            </h2>
            <div className="space-y-5">
              {skillBars.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.label}
                    </span>
                    <span className="text-sm text-gray-400">{skill.value}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Random facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Quick facts
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {randomFacts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
                >
                  <span className="text-[#e07b2e] mt-0.5">★</span>
                  <span className="text-gray-700 text-sm">{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Product CTA */}
          <section className="bg-gradient-to-br from-[#1c3d5e] to-[#1a2f4a] rounded-2xl p-10 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Current Project
            </div>
            <h2 className="text-2xl font-bold mb-3">BlueEra</h2>
            <p className="text-blue-100/75 max-w-md mx-auto mb-6 text-sm leading-relaxed">
              Spearheading the architecture and delivery of scalable e-commerce and service-based platforms using Node.js and Flutter.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white text-[#1c3d5e] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              View projects <ArrowRight size={13} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}