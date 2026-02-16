import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="hidden md:block pointer-events-none min-h-[60vh] sm:min-h-[85vh] absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 80% at 70% 50%, black 0%, black 35%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 70% 50%, black 0%, black 35%, transparent 75%)",
          }}
        >
          <div
            data-us-project="3eLGLP7pmQS4ozfklmrX"
            className="absolute inset-0"
            style={{ transform: "translateX(20%)" }}
          ></div>
        </div>
      </div>

      <section className="relative flex min-h-[60vh] sm:min-h-[85vh] items-center overflow-hidden pt-20 pb-10 sm:pt-24">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 md:grid-cols-2 lg:gap-16">
          {/* Left Column - High Information Density */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-8 animate-fadeSlideIn animation-delay-100">
            {/* Version Badge */}
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-medium text-sky-400 mb-2 sm:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              v1.0.0 is now live
            </Badge>

            {/* Headline with selective gradient */}
            <h1 className="text-3xl leading-[1.15] tracking-tight font-light sm:text-5xl lg:text-6xl">
              Developer-first{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-normal">
                video infrastructure
              </span>
              .
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-white/70 max-w-lg">
              Video hosting built for SaaS teams and startups. Upload,
              transcode, and stream with a lightweight SDK — with transparent
              pricing and no hidden playback or transcoding surprises.
            </p>

            {/* Capability Bullets */}
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 text-blue-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span>One SDK to upload, encode, and stream globally</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 text-blue-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Adaptive HLS playback optimized for performance</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 text-blue-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Built-in analytics, watermarking, and protection </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 text-blue-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Transparent pricing — storage is yours, playback resets
                  monthly
                </span>
              </li>
            </ul>

            {/* CTAs - Professional & Restrained */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              {/* Primary CTA - Solid, minimal */}
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b0d12]"
              >
                Start Free
              </Link>

              {/* Secondary CTA - Ghost style */}
              <Link
                href="#docs"
                className="inline-flex justify-center md:justify-start items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                View API docs
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Space for Animation */}
          <div className="relative hidden md:flex items-center justify-center animate-fadeSlideIn animation-delay-200"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
