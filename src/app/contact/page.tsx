"use client";

import { useState, useEffect, FormEvent } from "react";
import { ArrowRight, Mail, Phone, Linkedin, CheckCircle2, AlertCircle, Loader2, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// ⚠️ Replace this with the access key emailed to you by https://web3forms.com
// All messages submitted via this form will be delivered to the email address
// associated with this key (configured on web3forms when you generated it).
const WEB3FORMS_ACCESS_KEY: string = "c9d339ec-0c7f-4732-b6e7-fe107d0c00d2";

const COOLDOWN_MS = 3 * 60 * 1000;
const COOLDOWN_STORAGE_KEY = "contact-form-cooldown-until";

const formatRemaining = (ms: number) => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

type SubmitStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; msg: string }
  | { kind: "error"; msg: string };

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [now, setNow] = useState(0);

  const contactEmail = "Vikashjobprofile@gmail.com";
  const phone = "7764827252";

  // Hydrate cooldown from localStorage on mount (client-only)
  useEffect(() => {
    const stored = Number(localStorage.getItem(COOLDOWN_STORAGE_KEY) || 0);
    if (stored > Date.now()) {
      setCooldownUntil(stored);
    } else if (stored) {
      localStorage.removeItem(COOLDOWN_STORAGE_KEY);
    }
    setNow(Date.now());
  }, []);

  // Tick `now` every second while cooldown is active
  useEffect(() => {
    if (cooldownUntil <= Date.now()) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [cooldownUntil]);

  const remainingMs = Math.max(0, cooldownUntil - now);
  const inCooldown = remainingMs > 0;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus({
        kind: "error",
        msg: "Form is not configured yet. Please add the Web3Forms access key.",
      });
      return;
    }

    if (Date.now() < cooldownUntil) {
      setStatus({
        kind: "error",
        msg: `Please wait ${formatRemaining(cooldownUntil - Date.now())} before sending another message.`,
      });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio enquiry from ${name}`,
          from_name: "Portfolio Contact Form",
          name,
          email,
          message,
          botcheck: "",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          kind: "success",
          msg: "Thanks! Your message has been sent. I'll reply soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
        const until = Date.now() + COOLDOWN_MS;
        setCooldownUntil(until);
        setNow(Date.now());
        localStorage.setItem(COOLDOWN_STORAGE_KEY, String(until));
      } else {
        setStatus({
          kind: "error",
          msg: data.message || "Couldn't send the message. Please try again or email directly.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        msg: "Network error. Please check your connection and try again.",
      });
    }
  };

  const isLoading = status.kind === "loading";

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
            Get in touch — let&apos;s discuss technical strategy, project management, or your next big idea.
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
                    href={`mailto:${contactEmail}`}
                    className="text-[#1c3d5e] font-medium hover:underline flex items-center gap-2 break-all"
                  >
                    <Mail size={16} className="shrink-0" />
                    {contactEmail}
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading}
                    placeholder="How can I help you?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1c3d5e]/30 focus:border-[#1c3d5e] transition resize-none disabled:opacity-60"
                  />
                </div>

                {status.kind === "success" && (
                  <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-4 py-3 text-sm">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <span>{status.msg}</span>
                  </div>
                )}
                {status.kind === "error" && (
                  <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl px-4 py-3 text-sm">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{status.msg}</span>
                  </div>
                )}

                {inCooldown && status.kind !== "success" && (
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl px-4 py-3 text-sm">
                    <Clock size={16} className="shrink-0 mt-0.5" />
                    <span>
                      You can send another message in{" "}
                      <span className="font-mono font-semibold">{formatRemaining(remainingMs)}</span>.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || inCooldown}
                  className="w-full bg-[#1c3d5e] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#162f49] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#1c3d5e]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Sending...
                    </>
                  ) : inCooldown ? (
                    <>
                      <Clock size={14} /> Wait {formatRemaining(remainingMs)}
                    </>
                  ) : (
                    <>
                      Send message <ArrowRight size={14} />
                    </>
                  )}
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
