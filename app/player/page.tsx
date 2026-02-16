"use client";

import {
  Check,
  ChevronRight,
  ImageIcon,
  Play,
  PlayCircle,
  PlaySquare,
  UploadCloud,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const languages = ["English (en)", "Spanish (es)", "French (fr)"];
const fonts = ["Rubik", "Inter", "Poppins"];
const controls = [
  "Play / Pause",
  "10s Backward",
  "10s Forward",
  "Full Screen",
  "Captions",
  "Volume",
  "Mute",
  "Progress",
  "Settings",
  "AirPlay",
  "Chromecast",
  "Current Time",
  "Duration",
];

const presetColors = [
  "#3b82f6",
  "#2563eb",
  "#06b6d4",
  "#10b981",
  "#facc15",
  "#f97316",
  "#f87171",
  "#fb7185",
  "#c084fc",
  "#a855f7",
  "#ec4899",
  "#14b8a6",
  "#64748b",
  "#6b7280",
  "#1e293b",
  "#fbbf24",
  "#e2e8f0",
  "#e5e7eb",
  "#ff7755",
];

export default function PlayerSettingsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English (en)");
  const [selectedFont, setSelectedFont] = useState("Rubik");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(20);
  const [primaryColor, setPrimaryColor] = useState("#3b82f6");
  const [enabledControls, setEnabledControls] = useState<string[]>(controls);
  const [useCustomIcon, setUseCustomIcon] = useState(false);
  const [selectedPlayIcon, setSelectedPlayIcon] = useState("Classic ▶️");
  const [customIconFile, setCustomIconFile] = useState<File | null>(null);

  const toggleControl = (control: string) => {
    setEnabledControls((prev) =>
      prev.includes(control)
        ? prev.filter((c) => c !== control)
        : [...prev, control],
    );
  };

  return (
    <div className="text-black dark:text-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Player Settings
        </span>
      </nav>

      {/* Title */}
      <div className="space-y-1 mb-8">
        <h1 className="text-2xl font-semibold">Player Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[500px]">
          Customize your video player’s appearance and behavior for a seamless
          brand experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player Language */}
        <div className="bg-white dark:bg-slate-900/50 rounded-md p-4 border border-slate-200 dark:border-slate-900">
          <label className="text-sm font-semibold mb-1 block">
            Player UI Language
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Select the UI language that will be displayed in the video player.
          </p>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-800/50 text-sm px-3 py-2 rounded-md"
          >
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Player Font */}
        <div className="bg-white dark:bg-slate-900/50 rounded-md p-4 border border-slate-200 dark:border-slate-900">
          <label className="text-sm font-semibold mb-1 block">
            Font Family
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Select the font family that will be used in the video player.
          </p>
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-800/50 text-sm px-3 py-2 rounded-md"
          >
            {fonts.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </div>

        {/* Primary Colors */}
        <div className="bg-white dark:bg-slate-900/50 rounded-md p-4 border border-slate-200 dark:border-slate-900">
          <label className="text-sm font-semibold mb-1 block">
            Primary Player Colors
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            Primary color will be displayed for the controls.
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setPrimaryColor(color)}
                className={`w-6 h-6 rounded-full ${
                  primaryColor === color
                    ? "ring-2 ring-indigo-500"
                    : "ring-1 ring-gray-300"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
          <div className="flex mt-2 items-center gap-2">
            {/* Custom trigger */}
            <label
              htmlFor="color-input"
              className="w-8 h-8 rounded-full cursor-pointer border-2 border-slate-400"
              style={{ backgroundColor: primaryColor }}
            />

            {/* Hidden native color input */}
            <input
              id="color-input"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="sr-only"
            />

            {/* HEX code input */}
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-24 text-sm px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600"
            />
          </div>
        </div>

        {/* Captions Appearance */}
        <div className="bg-white dark:bg-slate-900/50 rounded-md p-4 border border-slate-200 dark:border-slate-900">
          <label className="text-sm font-semibold mb-1 block">
            Captions Appearance
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            Configure the captions appearance.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm">Font Color</label>
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Background Color</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Font Size</label>
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-20 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex w-full justify-between flex-wrap">
        <div className="md:w-[49%] md:h-52.5 bg-white dark:bg-slate-900/50 rounded-md p-5 border border-slate-200 dark:border-slate-900 mt-10">
          <h3 className="text-sm font-semibold mb-2">Play Button Icon</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Personalize your video player&apos;s play button. Use a preset or
            upload your own SVG/logo.
          </p>

          {/* Toggle Preset vs Upload */}
          <div className="inline-flex rounded-md bg-slate-100 dark:bg-slate-900 p-1 mb-4">
            <button
              onClick={() => setUseCustomIcon(false)}
              className={`text-sm px-4 py-1.5 rounded-md transition-all ${
                !useCustomIcon
                  ? "bg-white dark:bg-slate-800 dark:shadow dark:text-gray-200 text-slate-800 font-semibold"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-500"
              }`}
            >
              Preset Icons
            </button>
            <button
              onClick={() => setUseCustomIcon(true)}
              className={`text-sm px-4 py-1.5 rounded-md transition-all ${
                useCustomIcon
                  ? "bg-white dark:bg-slate-700 dark:shadow dark:text-gray-200 text-slate-800 font-semibold"
                  : "text-gray-500 dark:text-gray-300 hover:text-indigo-500"
              }`}
            >
              Upload SVG/Image
            </button>
          </div>

          {/* Preset Options */}
          {!useCustomIcon && (
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Classic", icon: <PlayCircle size={20} /> },
                { label: "Minimal", icon: <Play size={20} /> },
                { label: "Block", icon: <PlaySquare size={20} /> },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => setSelectedPlayIcon(label)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md border transition-all ${
                    selectedPlayIcon === label
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-100 dark:bg-slate-800/50 border-slate-300 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Upload */}
          {useCustomIcon && (
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1">
                <UploadCloud size={16} />
                Upload SVG or transparent PNG
              </label>
              <input
                type="file"
                accept="image/svg+xml,image/png"
                onChange={(e) => setCustomIconFile(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-500 dark:text-gray-400"
              />
              {customIconFile && (
                <div className="mt-3 flex items-center gap-3">
                  <ImageIcon
                    size={20}
                    className="text-gray-400 dark:text-gray-500"
                  />
                  <img
                    src={URL.createObjectURL(customIconFile)}
                    alt="Custom Play Icon"
                    className="w-10 h-10 object-contain border border-gray-300 dark:border-gray-600 rounded"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Player Controls */}
        <div className="md:w-[49%] mt-10 bg-white dark:bg-slate-900/50 rounded-md p-4 border border-slate-200 dark:border-slate-900">
          <label className="text-sm font-semibold mb-1 block">
            Player Controls
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Select the UI controls that will be displayed on the player.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {controls.map((control) => (
              <button
                key={control}
                onClick={() => toggleControl(control)}
                className={`px-3 flex items-center gap-1.5 py-2 text-sm rounded-md border transition-all ${
                  enabledControls.includes(control)
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-slate-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 border-slate-300 dark:border-slate-700"
                }`}
              >
                {enabledControls.includes(control) ? (
                  <Check size={14} className="shrink-0 text-green-500" />
                ) : (
                  <X size={14} className="shrink-0 text-red-500" />
                )}
                {control}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="w-full flex justify-end mt-8">
        <button
          onClick={() => {
            console.log("Settings saved!");
          }}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 transition text-white rounded-md text-sm font-semibold shadow-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
