"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  ChevronRight,
  MessageCircle,
  BookOpen,
  Mail,
  FileQuestion,
  ExternalLink,
  Zap,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I upload a video?",
    answer:
      "Navigate to Upload Video from the sidebar. You can drag and drop your video file or click to browse. Supported formats include MP4, WebM, and Ogg up to 2GB.",
  },
  {
    question: "What video formats are supported?",
    answer:
      "Vidmox supports MP4, WebM, and Ogg formats. Videos are automatically transcoded into multiple resolutions (360p, 480p, 720p, 1080p) for adaptive streaming.",
  },
  {
    question: "How do I embed videos on my website?",
    answer:
      "Go to My Videos, click on any video, and copy the embed code from the video details page. Paste the iframe snippet into your HTML or React application.",
  },
  {
    question: "Can I customize the video player?",
    answer:
      "Yes! Go to Player Settings to customize the primary color, font, captions appearance, play button icon, and toggle individual player controls.",
  },
  {
    question: "How does billing work?",
    answer:
      "Vidmox offers Free, Pro, Business, and Enterprise plans. You can manage your subscription and payment methods through the Billing page. All payments are processed securely via Stripe.",
  },
  {
    question: "How do I generate subtitles?",
    answer:
      "When uploading a video, enable the 'Generate Subtitles' option. Vidmox uses AI to automatically generate accurate subtitles in multiple languages.",
  },
];

export default function SupportPage() {
  const { isLoaded } = useUser();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!isLoaded) return null;

  return (
    <div className="text-black dark:text-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Support Center
        </span>
      </nav>

      {/* Title */}
      <div className="space-y-1 mb-8">
        <h1 className="text-2xl font-semibold">Support Center</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Find answers, or reach out to our team.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <div className="rounded-sm bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden">
          {faqs.length === 0 && (
            <div className="px-5 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              No matching questions found.
            </div>
          )}
          {faqs.map((faq) => {
            const originalIndex = faqs.indexOf(faq);
            return (
              <div key={originalIndex}>
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === originalIndex ? null : originalIndex)
                  }
                  className="cursor-pointer w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-[#1c1f23] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileQuestion
                      size={16}
                      className="text-blue-500 shrink-0"
                    />
                    <span className="text-sm font-medium">{faq.question}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 shrink-0 ${
                      openFaq === originalIndex ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === originalIndex && (
                  <div className="px-5 pb-4 pl-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Cards */}
      <h2 className="text-lg font-semibold mb-1">Get in Touch</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Can&apos;t find what you&apos;re looking for? Reach out directly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Live Chat */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
              <MessageCircle
                size={20}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Live Chat</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Avg. response: ~5 mins
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Chat with our support team in real time for quick help.
          </p>
          <button className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            <MessageCircle size={14} />
            Start Chat
          </button>
        </div>

        {/* Email Support */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <Mail size={20} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Email Support</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Avg. response: ~24 hours
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Send us a detailed message and we&apos;ll get back to you.
          </p>
          <a
            href="mailto:support@vidmox.com"
            className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors"
          >
            <Mail size={14} />
            support@vidmox.com
          </a>
        </div>

        {/* Documentation */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
              <BookOpen
                size={20}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Documentation</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Guides, API reference & more
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Browse detailed docs, tutorials, and API references.
          </p>
          <Link
            href="/docs"
            className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors"
          >
            <ExternalLink size={14} />
            View Docs
          </Link>
        </div>
      </div>

      {/* Status Banner */}
      <div className="mt-8 rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <div>
            <p className="text-sm font-medium">All Systems Operational</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Last checked: just now
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <Zap size={12} />
          <span>99.99% uptime</span>
        </div>
      </div>
    </div>
  );
}
