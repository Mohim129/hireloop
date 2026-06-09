"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a route is currently active
  const isActive = (path) => pathname === path;

  // Dynamic class generator for Desktop Links
  const getNavLinkClass = (path) =>
    `text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? "text-white font-semibold scale-105"
        : "text-neutral-400 hover:text-neutral-200"
    }`;

  // Dynamic class generator for Mobile Links
  const getMobileNavLinkClass = (path) =>
    `block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
      isActive(path)
        ? "bg-neutral-800 text-white font-semibold"
        : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#0B0B0C]/90 text-white backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Programming Hero Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Right Section: Links + Actions in unified container */}
          <div className="hidden items-center gap-6 md:flex">
            {/* Nav Links Capsule */}
            <div className="flex items-center gap-6 rounded-full bg-[#18181B] px-6 py-2.5 border border-neutral-800/60 shadow-inner">
              <Link href="/jobs" className={getNavLinkClass("/jobs")}>
                Browse Jobs
              </Link>
              <Link href="/company" className={getNavLinkClass("/company")}>
                Company
              </Link>
              <Link href="/pricing" className={getNavLinkClass("/pricing")}>
                Pricing
              </Link>
              <span className="h-4 w-[1px] bg-neutral-700" aria-hidden="true" />
              <Link href="/sign-in" className={getNavLinkClass("/sign-in")}>
                Sign In
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-neutral-200 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="border-t border-neutral-800 bg-[#0B0B0C] md:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 py-4 sm:px-6">
            <Link
              href="/jobs"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass("/jobs")}
            >
              Browse Jobs
            </Link>
            <Link
              href="/company"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass("/company")}
            >
              Company
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass("/pricing")}
            >
              Pricing
            </Link>

            <hr className="my-3 border-neutral-800" />

            <Link
              href="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass("/sign-in")}
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 block w-full rounded-xl bg-white px-3 py-2.5 text-center text-base font-semibold text-black hover:bg-neutral-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
