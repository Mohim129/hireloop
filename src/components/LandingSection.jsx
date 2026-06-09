"use client";
import { useState } from "react";
import {
  Magnifier,
  Pin,
  Briefcase,
  Layers,
  Person,
  Star,
} from "@gravity-ui/icons";

function LandingSection() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const statsData = [
    {
      id: 1,
      metric: "50K",
      label: "Active Jobs",
      icon: <Briefcase width={20} height={20} />,
    },
    {
      id: 2,
      metric: "12K",
      label: "Companies",
      icon: <Layers width={20} height={20} />,
    },
    {
      id: 3,
      metric: "2M",
      label: "Job Seekers",
      icon: <Person width={20} height={20} />,
    },
    {
      id: 4,
      metric: "97%",
      label: "Satisfaction Rate",
      icon: <Star width={20} height={20} />,
    },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full bg-[#0B0B0C] text-white min-h-screen overflow-hidden flex flex-col justify-between">
      {/* 1. Shared Global Background Image Layer with Adaptive Mobile Adjustments */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-[center_46%] sm:bg-[center_52%] bg-[length:1400px_auto] sm:bg-[length:1600px_auto] lg:bg-[length:100%_auto] pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* 2. Soft Lighting Vignettes */}
      {/* Darkens the bottom edge to blend into your footer section */}
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-transparent pointer-events-none z-10" />
      {/* Darkens the top edge to smoothly ease down from the header navigation */}
      <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#0B0B0C] to-transparent pointer-events-none z-10" />

      {/* 3. Core Component Content Wrapper */}
      <div className="relative w-full z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-28 flex flex-col items-center justify-between flex-grow">
        {/* ================= HERO SUB-SECTION ================= */}
        <div className="w-full max-w-4xl text-center flex flex-col items-center mb-16 sm:mb-24">
          {/* Top Mini Tag Capsule */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/60 bg-[#121214]/90 backdrop-blur-sm px-4 py-1.5 text-xs text-neutral-400 tracking-wide mb-8">
            <span>💼</span>
            <span className="font-mono text-neutral-200 font-semibold">
              50,000+
            </span>{" "}
            NEW JOBS THIS MONTH
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15] mb-6 px-2">
            Find Your Dream Job Today
          </h1>

          {/* Subheading Description */}
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10 px-4">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          {/* Unified Custom Search Bar Pill */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-2 sm:gap-0 rounded-2xl sm:rounded-full bg-[#121214]/90 backdrop-blur-sm border border-neutral-800/80 p-2 shadow-2xl focus-within:border-neutral-700/60 transition-colors"
          >
            {/* Input 1: Job Title */}
            <div className="w-full flex items-center gap-3 px-4 py-2.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-neutral-800">
              <Magnifier
                className="text-neutral-500 flex-shrink-0"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Job title, skill or company"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none"
              />
            </div>

            {/* Input 2: Location */}
            <div className="w-full flex items-center gap-3 px-4 py-2.5 sm:py-0">
              <Pin
                className="text-neutral-500 flex-shrink-0"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Location or Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none"
              />
            </div>

            {/* Search CTA Trigger Button */}
            <button
              type="submit"
              className="w-full sm:w-auto p-3.5 rounded-xl sm:rounded-full bg-[#3B38B4] hover:bg-[#4338ca] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md shadow-indigo-900/30 flex-shrink-0"
              aria-label="Submit search query"
            >
              <Magnifier width={18} height={18} strokeWidth={2.5} />
            </button>
          </form>

          {/* Trending Categories Section */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 px-2 text-xs">
            <span className="text-neutral-500 font-medium">
              Trending Position
            </span>
            {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map(
              (role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSearch(role)}
                  className="rounded-full bg-[#18181B]/90 backdrop-blur-sm px-3.5 py-1.5 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  {role}
                </button>
              ),
            )}
          </div>
        </div>

        {/* ================= STATS SUB-SECTION ================= */}
        <div className="w-full flex flex-col items-center mt-8 sm:mt-12">
          {/* Overlap Typography Container */}
          <div className="text-center max-w-2xl mb-12 sm:mb-16 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-snug text-neutral-200">
              Assisting over{" "}
              <span className="font-bold text-white">15,000 job seekers</span>{" "}
              <br className="hidden sm:inline" />
              find their dream positions.
            </h2>
          </div>

          {/* Dashboard Grid Metric Blocks Container */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-1 sm:px-0">
            {statsData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 sm:p-8 h-40 sm:h-44 rounded-2xl bg-[#0F0F11]/60 border border-neutral-800/40 backdrop-blur-md hover:border-neutral-700/50 transition-all duration-300 shadow-2xl shadow-black/50 group"
              >
                {/* Card Header Icon */}
                <div className="text-neutral-500 group-hover:text-indigo-400 transition-colors">
                  {item.icon}
                </div>

                {/* Statistical Value Output Elements */}
                <div className="space-y-0.5 sm:space-y-1">
                  <span className="block text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    {item.metric}
                  </span>
                  <span className="block text-[11px] sm:text-sm text-neutral-500 tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
