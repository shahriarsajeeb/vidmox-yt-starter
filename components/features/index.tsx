import {
  Eye,
  FileJson,
  Globe,
  Search,
  Subtitles,
  Zap,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Zap,
    color: "text-sky-400 bg-sky-500/10",
    title: "Upload & Transcode",
    desc: "Upload once. Vidmox handles encoding, adaptive HLS, and optimization for fast global playback.",
  },
  {
    icon: Search,
    color: "text-emerald-400 bg-emerald-500/10",
    title: "Customizable Player",
    desc: "Match your brand. Control UI, colors, watermark, and playback behavior.",
  },
  {
    icon: Eye,
    color: "text-pink-400 bg-pink-500/10",
    title: "Advanced Analytics",
    desc: "Understand watch time, drop-offs, viewer engagement, and performance trends.",
  },
  {
    icon: FileJson,
    color: "text-cyan-400 bg-cyan-500/10",
    title: "Built-in Protection",
    desc: "Custom watermark, piracy protection, OTP security — no extra setup.",
  },
  {
    icon: Globe,
    color: "text-violet-400 bg-violet-500/10",
    title: "Global CDN Delivery",
    desc: "Stream from edge servers worldwide with low latency and adaptive bitrate.",
  },
  {
    icon: Subtitles,
    color: "text-amber-400 bg-amber-500/10",
    title: "AI-Powered Captions",
    desc: "Auto-generate accurate subtitles and transcriptions for every video.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-3">
            Features
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Powerful video infrastructure without the infrastructure overhead.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-xl border border-slate-800/60 bg-slate-900/20 p-6 transition-colors hover:border-slate-700/80 hover:bg-slate-900/40"
            >
              <div
                className={`h-9 w-9 rounded-lg flex items-center justify-center mb-4 ${f.color}`}
              >
                <f.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1.5">
                {f.title}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
