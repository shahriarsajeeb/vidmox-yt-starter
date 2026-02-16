"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronRight, Eye, Clock, Users, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import GeographicalMap from "../../components/charts/geoMap";
import { useUser } from "@clerk/nextjs";

// ── Mock Data ────────────────────────────────────────────────────────────────

const viewsData = [
  { date: "Jun 1", views: 420 },
  { date: "Jun 3", views: 380 },
  { date: "Jun 5", views: 510 },
  { date: "Jun 7", views: 640 },
  { date: "Jun 9", views: 590 },
  { date: "Jun 11", views: 720 },
  { date: "Jun 13", views: 810 },
  { date: "Jun 15", views: 760 },
  { date: "Jun 17", views: 930 },
  { date: "Jun 19", views: 870 },
  { date: "Jun 21", views: 1020 },
  { date: "Jun 23", views: 980 },
  { date: "Jun 25", views: 1100 },
  { date: "Jun 27", views: 1050 },
  { date: "Jun 29", views: 1240 },
  { date: "Jul 1", views: 1180 },
];

const topVideos = [
  {
    title: "Getting Started with Vidmox",
    views: 12840,
    watchTime: "4h 32m",
    avgDuration: "3:14",
  },
  {
    title: "How to Embed Videos in React",
    views: 9310,
    watchTime: "3h 11m",
    avgDuration: "2:45",
  },
  {
    title: "Advanced Transcoding Options",
    views: 7650,
    watchTime: "5h 04m",
    avgDuration: "5:01",
  },
  {
    title: "Live Streaming with Vidmox",
    views: 6100,
    watchTime: "2h 48m",
    avgDuration: "4:22",
  },
  {
    title: "Player Customization Deep Dive",
    views: 4870,
    watchTime: "1h 59m",
    avgDuration: "3:47",
  },
];

const deviceData = [
  { name: "Desktop", value: 58, color: "#3b82f6" },
  { name: "Mobile", value: 31, color: "#10b981" },
  { name: "Tablet", value: 11, color: "#a855f7" },
];

const browserData = [
  { browser: "Chrome", share: 61 },
  { browser: "Safari", share: 21 },
  { browser: "Firefox", share: 10 },
  { browser: "Edge", share: 8 },
];

const overviewStats = [
  {
    label: "Total Views",
    value: "48,291",
    change: "+14.2%",
    positive: true,
    icon: Eye,
    badge: "blue" as const,
  },
  {
    label: "Watch Time",
    value: "1,823h",
    change: "+8.7%",
    positive: true,
    icon: Clock,
    badge: "green" as const,
  },
  {
    label: "Unique Viewers",
    value: "11,540",
    change: "-2.1%",
    positive: false,
    icon: Users,
    badge: "purple" as const,
  },
  {
    label: "Avg Duration",
    value: "3m 48s",
    change: "+5.3%",
    positive: true,
    icon: TrendingUp,
    badge: "blue" as const,
  },
];

const badgeClasses: Record<string, string> = {
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  purple:
    "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
};

const rangeLabels = {
  "7d": "Last 7 Days",
  "30d": "Last 30 Days",
  "90d": "Last 90 Days",
};

// ── Component ────────────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [range, setRange] = useState<"7d" | "30d" | "90d">("30d");
  const { isLoaded } = useUser();

  const axisColor = isDark ? "#6b7280" : "#9ca3af";
  const gridColor = isDark ? "#1f2023" : "#e5e7eb";
  const tooltipBg = isDark ? "#101217" : "#ffffff";
  const tooltipBorder = isDark ? "#1f2023" : "#e5e7eb";
  const tooltipText = isDark ? "#ffffff" : "#111827";

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
          Analytics
        </span>
      </nav>

      {/* Title */}
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track views, engagement, and audience insights across your video
          library.
        </p>
      </div>

      {/* Date Range Selector */}
      <div className="flex items-center gap-2 mb-8">
        {(["7d", "30d", "90d"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`cursor-pointer px-3 py-1.5 text-sm font-medium rounded-lg border transition-colors ${
              range === r
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white dark:bg-[#101217] border-gray-200 dark:border-[#1f2023] text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-600"
            }`}
          >
            {rangeLabels[r]}
          </button>
        ))}
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {overviewStats.map(
          ({ label, value, change, positive, icon: Icon, badge }) => (
            <div
              key={label}
              className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {label}
                </p>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeClasses[badge]}`}
                >
                  <Icon size={12} className="inline mr-1" />
                  {label.split(" ")[0]}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {value}
              </h2>
              <p
                className={`text-xs font-medium ${positive ? "text-green-500" : "text-red-400"}`}
              >
                {change} vs last period
              </p>
            </div>
          ),
        )}
      </div>

      {/* Views Over Time — Area Chart */}
      <div className="mt-10 rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Views Over Time</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Daily views for the {rangeLabels[range].toLowerCase()}
          </p>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={viewsData}
            margin={{ top: 4, right: 16, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: axisColor, fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: axisColor, fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                border: `1px solid ${tooltipBorder}`,
                borderRadius: "8px",
                fontSize: "12px",
                color: tooltipText,
              }}
              cursor={{ stroke: gridColor }}
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#viewsGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#3b82f6", stroke: "none" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Top Videos Table */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-1">Top Videos</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Best performing videos in the selected period.
        </p>
        <div className="rounded-xl border border-gray-200 dark:border-[#1f2023] bg-white dark:bg-[#101217] shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
            <thead>
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  #
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  Video Title
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  Views
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  Watch Time
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  Avg Duration
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {topVideos.map((row, index) => (
                <tr
                  key={index}
                  className="group hover:bg-blue-50 dark:hover:bg-[#1c1f23] transition-colors"
                >
                  <td className="px-5 py-3 text-sm font-bold text-gray-400 dark:text-gray-500">
                    {["🥇", "🥈", "🥉"][index] ?? index + 1}
                  </td>
                  <td className="px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {row.title}
                  </td>
                  <td className="px-5 py-3 text-right text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {row.views.toLocaleString()}
                  </td>
                  <td className="px-5 py-3 text-right text-sm text-gray-500 dark:text-gray-400">
                    {row.watchTime}
                  </td>
                  <td className="px-5 py-3 text-right text-sm text-gray-500 dark:text-gray-400">
                    {row.avgDuration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Device & Browser Breakdown */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Device Breakdown — Donut Chart */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-1">Device Breakdown</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Share by device type
          </p>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {deviceData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: tooltipText,
                  }}
                  formatter={(value: number | undefined) => [
                    `${value ?? 0}%`,
                    "",
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3">
              {deviceData.map(({ name, value, color }) => (
                <div key={name} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {name}
                  </span>
                  <span className="ml-auto text-sm font-semibold text-gray-800 dark:text-white pl-4">
                    {value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Browser Breakdown — Horizontal Bar */}
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-1">Browser Breakdown</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Share by browser
          </p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={browserData}
              layout="vertical"
              margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={gridColor}
                horizontal={false}
              />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: axisColor, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="browser"
                tick={{ fill: axisColor, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={56}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  border: `1px solid ${tooltipBorder}`,
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: tooltipText,
                }}
                formatter={(value: number | undefined) => [
                  `${value ?? 0}%`,
                  "Share",
                ]}
                cursor={{ fill: isDark ? "#1c1f23" : "#f0f7ff" }}
              />
              <Bar
                dataKey="share"
                fill="#3b82f6"
                radius={[0, 4, 4, 0]}
                maxBarSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-1">Geographic Distribution</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Viewer locations based on the last 28 days of data.
        </p>
        <div className="rounded-xl bg-white dark:bg-[#101217] border border-gray-200 dark:border-[#1f2023] shadow-sm p-5 overflow-hidden">
          <GeographicalMap />
        </div>
      </div>
    </div>
  );
}
