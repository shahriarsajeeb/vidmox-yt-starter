import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0b0e1a]">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
                <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 drop-shadow-sm">
                    Ready to streamline your video workflow?
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400 mb-10">
                    Join thousands of developers building the next generation of video
                    applications with Vidmox. Start for free, upgrade as you grow.
                </p>

                <div className="flex items-center justify-center gap-x-6">
                    <Link
                        href="/signup"
                        className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 hover:shadow-blue-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
                    >
                        Get started for free
                    </Link>
                    <Link
                        href="#pricing"
                        className="group text-sm font-semibold leading-6 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                    >
                        View pricing{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section >
    );
}
