"use client";
import { Pin, Briefcase, CircleDollar, ArrowRight } from "@gravity-ui/icons";

function JobDiscovery() {
  // Mock data array representing the cards in the grid
  const jobsData = Array(6).fill({
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–40/hour",
  });

  return (
    <section className="w-full bg-[#0B0B0C] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Header Labels */}
        <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-4">
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
            Smart Job Discovery
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The roles you would never
            <br />
            find by searching
          </h2>
        </div>

        {/* 3-Column Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {jobsData.map((job, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 rounded-[24px] bg-[#121214] border border-neutral-900 hover:border-neutral-800/80 transition-all duration-300 group"
            >
              {/* Upper Text Elements */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-100 tracking-tight mb-3">
                  {job.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-normal mb-8">
                  {job.description}
                </p>
              </div>

              {/* Badges and CTA Action Items */}
              <div className="space-y-6">
                {/* Information Metadata Badges Array */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Location Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1E] border border-neutral-800/50 text-xs text-neutral-400">
                    <Pin className="text-indigo-400" width={13} height={13} />
                    <span>{job.location}</span>
                  </div>

                  {/* Environment Setup Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1E] border border-neutral-800/50 text-xs text-neutral-400">
                    <Briefcase
                      className="text-indigo-400"
                      width={13}
                      height={13}
                    />
                    <span>{job.type}</span>
                  </div>

                  {/* Hourly Compensation Rate Tag */}
                  <div className="w-full sm:w-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1E] border border-neutral-800/50 text-xs text-neutral-400 mt-1 sm:mt-0">
                    <CircleDollar
                      className="text-indigo-400"
                      width={13}
                      height={13}
                    />
                    <span>{job.salary}</span>
                  </div>
                </div>

                {/* Card Direct Interactive Footer Link */}
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors"
                  >
                    Apply Now
                    <ArrowRight
                      className="text-neutral-500 group-hover:translate-x-1 transition-transform"
                      width={14}
                      height={14}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Navigation Secondary Block Action Trigger Button */}
        <button
          type="button"
          className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 active:scale-95 transition-all"
        >
          View all job open
        </button>
      </div>
    </section>
  );
}

export default JobDiscovery;
