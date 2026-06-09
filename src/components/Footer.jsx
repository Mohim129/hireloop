"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0C] border-t border-neutral-800 text-neutral-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Branding & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 pb-12 border-b border-neutral-900">
          {/* Brand Presentation Column */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="Programming Hero Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-neutral-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Links Columns Layout Container */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-indigo-400 tracking-wider">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/jobs"
                    className="hover:text-white transition-colors"
                  >
                    Job discovery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/worker-ai"
                    className="hover:text-white transition-colors"
                  >
                    Worker AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies"
                    className="hover:text-white transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/salary"
                    className="hover:text-white transition-colors"
                  >
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-indigo-400 tracking-wider">
                Navigations
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/library"
                    className="hover:text-white transition-colors"
                  >
                    Career library
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-indigo-400 tracking-wider">
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/brand-guidelines"
                    className="hover:text-white transition-colors"
                  >
                    Brand Guideline
                  </Link>
                </li>
                <li>
                  <Link
                    href="/newsroom"
                    className="hover:text-white transition-colors"
                  >
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Socials & Copyright Info */}
        <div className="pt-8 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          {/* Social Icons Blocks */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-white transition-all hover:bg-neutral-800"
              aria-label="Facebook"
            >
              <svg className="h-8 w-8 fill-white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Product Hunt / Custom Circle Style */}
            <a
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5542FA] text-white transition-all hover:opacity-90"
              aria-label="Community"
            >
              <svg className="h-8 w-8 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 11h-2v2H9V9h4c1.654 0 3 1.346 3 3s-1.346 3-3 3zm0-4h-2v2h2c.552 0 1-.448 1-1s-.448-1-1-1z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-white transition-all hover:bg-neutral-800"
              aria-label="LinkedIn"
            >
              <svg className="h-8 w-8 fill-white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Legal and Registration Statements */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-neutral-500">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="hover:text-neutral-300 transition-colors"
              >
                Terms & Policy
              </Link>
              <span>-</span>
              <Link
                href="/privacy"
                className="hover:text-neutral-300 transition-colors"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;