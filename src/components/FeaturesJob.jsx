"use client";
import {
  Magnifier,
  ChartLine,
  SquareChartColumn,
  Bookmark,
  LayoutHeaderCursor,
  FileText,
  NutHex,
  ArrowUpRight,
} from "@gravity-ui/icons";

function FeaturesJob() {
  const featuresData = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <Magnifier width={20} height={20} />,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <ChartLine width={20} height={20} />,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <SquareChartColumn width={20} height={20} />,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <Bookmark width={20} height={20} />,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: <LayoutHeaderCursor width={20} height={20} />,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FileText width={20} height={20} />,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <NutHex width={20} height={20} />,
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <ArrowUpRight width={20} height={20} />,
    },
  ];

  return (
    /* Changed section background to a lighter container grey variant to create section separation */
    <section className="w-full bg-[#0F0F11] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Title Header Block */}
        <div className="text-center max-w-3xl mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-4">
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
            Features Job
            <span className="inline-block w-1 h-1 bg-indigo-500 rounded-sm"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Everything you need <br /> to succeed
          </h2>
        </div>

        {/* Dynamic Multi-Column Grid System */}
        {/* Mobile: 1 col | Tablet: 2 cols | Large Desktop: 4 cols */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group">
              {/* Left Side: Adjusted to a slightly deeper dark background tint to pop from the section container */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#161619] border border-neutral-800/40 flex items-center justify-center text-neutral-400 group-hover:text-indigo-400 group-hover:border-neutral-700 transition-all duration-300 shadow-lg shadow-black/30">
                {feature.icon}
              </div>

              {/* Right Side: Text Information Block */}
              <div className="flex flex-col pt-1">
                <h3 className="text-base font-bold text-neutral-100 tracking-tight mb-1 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-normal max-w-[210px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesJob;
