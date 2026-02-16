import React from "react";

const StorySection = () => {
  return (
    <section id="story" className="border-y border-slate-800/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-4">
          Why Vidmox Exists
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug mb-6">
          Video hosting shouldn&apos;t get more expensive — or more confusing —
          as you grow.
        </h2>

        <div className="space-y-4 text-[15px] text-slate-400 leading-relaxed">
          <p>
            Most platforms make video easy at first — upload a file, copy an
            embed, it works. But once your product gains traction,{" "}
            <span className="text-white font-medium">everything changes</span>:
            playback multipliers, transcoding fees, storage tiers, and add-ons
            that should&apos;ve been included.
          </p>

          <p>
            Suddenly your monthly invoice feels harder to understand than{" "}
            <span className="text-slate-200 font-medium">
              your own codebase
            </span>
            . For modern SaaS teams, video infrastructure shouldn&apos;t feel
            like a separate business model.
          </p>

          <p>It should be:</p>

          <ul className="space-y-2 pl-1">
            {[
              ["Predictable", "flat pricing that scales with you"],
              ["Transparent", "no hidden fees, ever"],
              ["Effortless", "scale without being punished for growth"],
            ].map(([bold, rest]) => (
              <li key={bold} className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                <span>
                  <span className="text-white font-medium">{bold}</span>
                  <span className="text-slate-500"> — {rest}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="text-white font-medium pt-2">
            Vidmox is built to make video hosting simple, smart, and
            predictable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
