"use client";
import { useState } from "react";
import {
  CrownDiamond,
  ChartLineArrowUp,
  ThunderboltFill,
  Plus,
  ArrowRight,
} from "@gravity-ui/icons";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: "Starter",
      price: "0",
      icon: <CrownDiamond className="text-magenta-400" width={16} height={16} />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isHighlighted: false,
    },
    {
      name: "Growth",
      price: "17",
      icon: (
        <ChartLineArrowUp className="text-indigo-400" width={16} height={16} />
      ),
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isHighlighted: true, // Middle card highlight matching image_1b1de1.png
    },
    {
      name: "Premium",
      price: "99",
      icon: <ThunderboltFill className="text-fuchsia-400" width={16} height={16} />,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-full bg-[#0B0B0C] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-4">
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
            Pricing
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Billing Toggle Control Pill */}
        <div className="inline-flex items-center gap-1 rounded-full bg-[#121214] border border-neutral-800/80 p-1 mb-16 relative">
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              !isYearly
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsYearly(true)}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              isYearly
                ? "bg-white text-black font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#E61E80] text-white tracking-wide scale-95">
              -25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 rounded-[24px] border transition-all duration-300 ${
                tier.isHighlighted
                  ? "bg-[#121214] border-neutral-800 shadow-2xl shadow-black/80 ring-1 ring-neutral-800"
                  : "bg-[#0B0B0C] border-neutral-900"
              }`}
            >
              {/* Header Info Area */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Left Label Tag */}
                  <div className="inline-flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#18181B] border border-neutral-800/60 flex items-center justify-center">
                      {tier.icon}
                    </div>
                    <span className="text-lg font-bold text-neutral-200 tracking-tight">
                      {tier.name}
                    </span>
                  </div>

                  {/* Right Pricing Frame */}
                  <div className="flex items-baseline text-white">
                    <span className="text-3xl font-bold tracking-tight">$</span>
                    <span className="text-4xl font-extrabold tracking-tight">
                      {isYearly ? Math.floor(tier.price * 0.75) : tier.price}
                    </span>
                    <span className="text-[11px] text-neutral-500 tracking-wide ml-1">
                      /month
                    </span>
                  </div>
                </div>

                <div className="border-t border-neutral-900/60 my-6" />

                {/* Features Structure Checklist Container */}
                <p className="text-xs font-semibold tracking-wide text-neutral-400 mb-5">
                  Start building your insights hub:
                </p>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-xs text-neutral-400"
                    >
                      <div className="flex-shrink-0 w-4 h-4 rounded bg-[#18181B] border border-neutral-800/80 flex items-center justify-center text-neutral-500">
                        <Plus width={10} height={10} strokeWidth={2.5} />
                      </div>
                      <span className="leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Call To Action Buttons */}
              <div>
                <button
                  type="button"
                  className={`w-full inline-flex items-center justify-between px-5 py-4 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 active:scale-[0.98] ${
                    tier.isHighlighted
                      ? "bg-white text-black hover:bg-neutral-200 shadow-xl shadow-white/5"
                      : "bg-[#1C1C1E] text-neutral-200 hover:bg-neutral-800 border border-neutral-800/40"
                  }`}
                >
                  <span>Choose This Plan</span>
                  <ArrowRight width={14} height={14} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
