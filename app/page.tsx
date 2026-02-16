"use client";

import { useMemo } from "react";
import { BookText, GraduationCap } from "lucide-react";
import GeographicalMap from "../components/charts/geoMap";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { user, isLoaded } = useUser();
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  const topURLs = [
    { pathname: "/portfolio", requests: 21 },
    { pathname: "/projects", requests: 19 },
    { pathname: "/course/javascript", requests: 18 },
    { pathname: "/blog/how-to-host-video", requests: 12 },
    { pathname: "/", requests: 10 },
  ];

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="text-black dark:text-white">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          {greeting},{" "}
          {user?.fullName?.split(" ")[0] ||
            user?.emailAddresses[0]?.emailAddress?.split("@")[0] ||
            "User"}{" "}
          👋
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Here&apos;s what&apos;s happening with your video infrastructure
          today.
        </p>

        {/* Onboarding Panel - Only shown when stats are zero */}
        {/* <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            🚀 Getting Started
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Complete these steps to get started with vidmox.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-400 font-semibold text-sm transition-colors group-hover:border-blue-500 group-hover:text-blue-500">
                1
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Upload your first video
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Drag and drop a video file to get started
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100 dark:bg-slate-800 ml-4 hidden md:block" />

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 font-semibold text-sm transition-colors group-hover:border-purple-500 group-hover:text-purple-500">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Copy embed code
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Paste the snippet into your application
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100 dark:bg-slate-800 ml-4 hidden md:block" />

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 font-semibold text-sm transition-colors group-hover:border-green-500 group-hover:text-green-500">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Watch analytics update in real-time
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Monitor views and engagement instantly
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Bandwidth Card */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Minutes Streamed
              </p>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                Monthly
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              129{" "}
              <span className="text-lg text-gray-400 font-normal">/ 1K</span>
            </h2>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mb-2">
              <span>Usage</span>
              <span>12.9%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: "12.9%" }}
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span>• 871 mins remaining</span>
            </div>
          </div>
        </div>

        {/* Requests Card */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Requests
              </p>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
                Real-time
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              129
            </h2>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Total times your videos were requested or played across all
              regions.
            </p>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-2 flex gap-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  96
                </span>
                <span>Avg / Day</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-green-500">+12%</span>
                <span>Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Storage Card */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Storage Used
              </p>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                Allocated
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              3.2 <span className="text-lg text-gray-400 font-normal">GB</span>
            </h2>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mb-2">
              <span>64% Used</span>
              <span>5 GB Total</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-purple-500 rounded-full"
                style={{ width: "64%" }}
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span>• 2 Videos</span>
              <span>• 1.8 GB Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Geo map */}
      <div className="mt-10 w-full flex items-center justify-between flex-wrap">
        <div className="md:w-[60%]">
          <h2 className="text-lg font-semibold mb-1">Top Visitor Countries</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Based on requests served in the last 28 days.
          </p>
          <div className="w-full max-w-full overflow-hidden p-4">
            <GeographicalMap />
          </div>
        </div>

        {/* Top URLs Table */}
        <div className="md:w-[40%]">
          <h2 className="text-lg font-semibold mb-1">Top Requested URLs</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Pathnames where your videos were most frequently requested in the
            last 28 days.
          </p>
          <div className="rounded! border border-gray-200 dark:border-[#1f2023] bg-white dark:bg-[#101217] shadow-sm">
            <table className="min-w-full min-h-75 divide-y divide-gray-100 dark:divide-gray-800">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                    #
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                    Pathname
                  </th>
                  <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                    Requests
                  </th>
                </tr>
              </thead>
              <tbody>
                {topURLs?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-4">
                      No requests yet
                    </td>
                  </tr>
                )}

                {topURLs?.map((row, index) => (
                  <tr
                    key={index}
                    className="group hover:bg-blue-50 dark:hover:bg-[#1c1f23] transition-colors"
                  >
                    {/* Rank */}
                    <td className="px-5 py-3 text-sm font-bold text-gray-400 dark:text-gray-500">
                      {["🥇", "🥈", "🥉"][index] || `${index + 1}`}
                    </td>

                    {/* Path with icon */}
                    <td className="px-5 py-3 font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                        {row.pathname.charAt(1).toUpperCase() || "/"}
                      </div>
                      <span className="truncate">{row.pathname}</span>
                    </td>

                    {/* Requests */}
                    <td className="px-5 py-3 text-right font-semibold text-blue-600 dark:text-blue-400">
                      {row.requests.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Learn Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Docs Card */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] p-6 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3 text-orange-500">
            <BookText size={20} />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Documentation
            </h3>
          </div>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>
              <a href="/docs" className="hover:underline">
                Documentation ↗
              </a>
            </li>
            <li>
              <a href="/api" className="hover:underline">
                API Reference ↗
              </a>
            </li>
            <li>
              <a href="/kb" className="hover:underline">
                Knowledge Base ↗
              </a>
            </li>
            <li>
              <a href="/status" className="hover:underline">
                Service Status ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Tutorials Card */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] p-6 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3 text-red-500">
            <GraduationCap size={20} />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Tutorials / Guides
            </h3>
          </div>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>
              <a href="/tutorials/first-upload" className="hover:underline">
                How to upload your first video ↗
              </a>
            </li>
            <li>
              <a href="/tutorials/embed" className="hover:underline">
                How to embed videos in your app ↗
              </a>
            </li>
            <li>
              <a href="/tutorials/analytics" className="hover:underline">
                Understanding analytics ↗
              </a>
            </li>
            <li>
              <a
                href="/tutorials/player-customization"
                className="hover:underline"
              >
                Player customization tips ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
