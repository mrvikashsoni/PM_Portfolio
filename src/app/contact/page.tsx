"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const email = "Vikashjobprofile@gmail.com";
  const phone = "7764827252";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Contact
          </h1>
          <p className="text-gray-500 text-lg">
            Get in touch — let's discuss technical strategy, project management, or your next big idea.
          </p>
        </div>
      </div>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Say hello
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a project in mind, a question about my work as a CTO & Tech Project Manager, or just want to connect — I&apos;m always happy to chat. Feel free to reach out via email, phone, or LinkedIn.
              </p>

              {/* Email */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Email
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-[#1c3d5e] font-medium hover:underline flex items-center gap-2 break-all"
                  >
                    <Mail size={16} className="shrink-0" />
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 rounded px-2 py-0.5 transition-colors shrink-0"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Social / Phone */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Connect
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    <Phone size={16} />
                    <span className="text-sm font-medium">+91 {phone}</span>
                    <ArrowRight
                      size={12}
                      className="text-gray-300 group-hover:text-gray-500 transition-colors"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mrvikashkr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    <Linkedin size={16} />
                    <span className="text-sm font-medium">
                      linkedin.com/in/mrvikashkr
                    </span>
                    <ArrowRight
                      size={12}
                      className="text-gray-300 group-hover:text-gray-500 transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send a message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1c3d5e] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#162f49] transition-colors flex items-center justify-center gap-2"
                >
                  Send message <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}