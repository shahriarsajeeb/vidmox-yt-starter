"use client";

import { Eye, EyeOff, Crown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/common/logo";
import LogoLight from "@/components/common/logolight";

const Page = () => {
  const isProUser = false;
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState("bottom-right");
  const [opacity, setOpacity] = useState(50);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="text-black dark:text-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <ChevronRight className="mx-2" size={16} />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Watermark & Branding
        </span>
      </nav>

      {/* Header */}
      <div className="space-y-1 mb-8">
        <h1 className="text-2xl font-semibold">Watermark & Branding</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-125">
          Personalize your videos by uploading a custom watermark and
          configuring its appearance.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900/50 rounded-md p-6 border border-slate-200 dark:border-slate-900 max-w-3xl space-y-6">
        {/* Enable/Disable */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold">Watermark Visibility</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              The Vidmox watermark will be applied by default for free users.
            </p>
          </div>
          <button
            onClick={() => setEnabled(!enabled)}
            disabled={!isProUser}
            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 ${
              enabled
                ? "bg-green-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
            }`}
          >
            {enabled ? <Eye size={16} /> : <EyeOff size={16} />}
            {enabled ? "On" : "Off"}
          </button>
        </div>

        {/* Preview */}
        <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-md flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            {isProUser
              ? "Current Watermark Preview"
              : "Vidmox Watermark (Default)"}
          </div>
          <div className="dark:hidden md:w-25 opacity-[.50] inline-block">
            <LogoLight />
          </div>
          <div className="hidden md:w-25 opacity-[.50] dark:inline-block">
            <Logo />
          </div>
        </div>

        {/* Pro-only settings */}
        <div
          className={`space-y-5 transition-opacity ${
            isProUser ? "opacity-100" : "opacity-50 pointer-events-none"
          }`}
        >
          {/* Upload */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Upload Custom Watermark
            </label>
            <input
              type="file"
              accept="image/png,image/svg+xml"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="block text-sm text-gray-600 dark:text-gray-400"
            />
          </div>

          {/* Position */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Watermark Position
            </label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm"
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="center">Center</option>
            </select>
          </div>

          {/* Opacity */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Opacity: {opacity}%
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Pro Prompt */}
        {!isProUser && (
          <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 p-4 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Crown size={16} />
              Upgrade to Pro to customize your watermark and branding.
            </div>
            <button className="text-sm font-semibold text-blue-500 cursor-pointer hover:underline">
              Upgrade
            </button>
          </div>
        )}

        {/* Save Button */}
        {isProUser && (
          <div className="flex justify-end">
            <button className="px-5 py-2 text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
