"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mrvikashkr/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mrvikashkrsoni",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vikashprofile/?hl=en",
    icon: Instagram,
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors shrink-0"
        >
          Vikash Kumar
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium text-base py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
