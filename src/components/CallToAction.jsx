"use client";

function CallToAction() {
  return (
    <section className="relative w-full bg-[#0B0B0C] text-white py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 1. Ambient Background Layer Glow Projection */}
      {/* Creates the soft deep blue/indigo lighting radius right behind the wireframe dome */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-r from-blue-700/30 via-indigo-600/40 to-purple-800/20 blur-[100px] pointer-events-none z-0" />

      {/* 2. Structured Wireframe Graphic Component Overlay Layer */}
      {/* Uses cta-bg.png with responsive scaling overrides so it flows beyond edge screens on mobile layout */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-[center_top] bg-[length:1200px_auto] sm:bg-[length:1400px_auto] lg:bg-cover opacity-60 mix-blend-screen pointer-events-none z-10"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
        }}
      />

      {/* 3. Dark Edge Vignette Masking */}
      {/* Ensures the bottom and sides fade smoothly into your adjacent layout pitch-black segments */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent pointer-events-none z-20" />

      {/* 4. Core Component Text Foreground Content Block */}
      <div className="relative mx-auto max-w-4xl text-center flex flex-col items-center z-30">
        {/* Main Section Header Catchphrase Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6 px-2">
          Your next role is <br /> already looking for you
        </h2>

        {/* Section Sub-headline Descriptions */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-10 px-4">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Action Trigger Interactive Options Frame Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          {/* Primary Action Button: Account Creation */}
          <button
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm shadow-md hover:bg-neutral-200 active:scale-[0.98] transition-all"
          >
            Create a free account
          </button>

          {/* Secondary Action Button: Pricing Navigation */}
          <button
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#121214]/60 text-neutral-300 font-medium text-sm border border-neutral-800 hover:border-neutral-700 hover:text-white backdrop-blur-sm active:scale-[0.98] transition-all"
          >
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
