"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Trash2,
  AlertTriangle,
  Activity,
  Mail,
  Plus,
  X,
  Check,
  Copy,
} from "lucide-react";
import Link from "next/link";
import SecuritySection from "@/components/security";
import DeleteAccountModal from "@/components/modals/delete-account.modal";
import { useUser } from "@clerk/nextjs";

const tabs = ["General", "Developer Access", "Security"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [usageThreshold, setUsageThreshold] = useState(80);
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const { user, isLoaded } = useUser();

  const handleCopy = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateSecretKey = async () => {
    setShowKeyModal(!showKeyModal);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="text-black dark:text-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Settings
        </span>
      </nav>

      {/* Title */}
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Manage your account preferences, access control, and security options.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-300 dark:border-slate-700 mb-6">
        <div className="flex gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="rounded-md space-y-6">
        {activeTab === "General" && (
          <>
            {/* Plan Usage Alert */}
            <div className="md:w-[60%]">
              <div className="flex items-center justify-between px-3 pb-1">
                <div className="flex items-start gap-3">
                  <Activity size={22} className="text-purple-500 mt-1" />
                  <div>
                    <div className="text-base font-medium">
                      Plan Usage Alert
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      Get notified when usage exceeds your set threshold
                      (default: 80%).
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleDropdown("usage")}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  {openDropdown === "usage" ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              </div>

              {openDropdown === "usage" && (
                <div className="px-5 py-3">
                  <label className="text-sm mb-1 block">
                    Alert Threshold (%):
                  </label>
                  <input
                    type="number"
                    min={20}
                    max={80}
                    value={usageThreshold}
                    onChange={(e) =>
                      setUsageThreshold(parseInt(e.target.value))
                    }
                    className="w-24 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Must be between 20% and 80%.
                  </p>
                </div>
              )}
            </div>

            {/* Video Upload Email Alert */}
            <div className="md:w-[60%]">
              <div className="flex items-center justify-between px-3 pb-1">
                <div className="flex items-start gap-3">
                  <Mail size={22} className="text-green-500 mt-1" />
                  <div>
                    <div className="text-base font-medium">
                      Upload Completion Email
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      Email{" "}
                      <span className="font-medium text-indigo-500">
                        {user?.emailAddresses[0]?.emailAddress}
                      </span>{" "}
                      when a video processing is completed.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleDropdown("upload")}
                  className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  {openDropdown === "upload" ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              </div>

              {openDropdown === "upload" && (
                <div className="px-5 py-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Email notifications:
                  </span>
                  <button
                    onClick={() => setEmailAlertsEnabled(!emailAlertsEnabled)}
                    className={`w-10 h-5 rounded-full relative transition ${
                      emailAlertsEnabled
                        ? "bg-green-500"
                        : "bg-gray-400 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition ${
                        emailAlertsEnabled ? "left-5" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              )}
            </div>

            {/* Danger Zone */}
            <div className="pt-4 md:w-[60%] border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl text-red-500 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle size={22} className="text-red-500" />
                Danger Zone
              </h3>
              <div
                className="flex items-center justify-between p-3"
                onClick={() => setShowDeleteModal(true)}
              >
                <div className="flex items-start gap-3">
                  <Trash2 size={22} className="mt-1" />
                  <div>
                    <div className="text-base font-medium">Delete Account</div>
                    <p className="text-sm text-red-400 mt-0.5">
                      Permanently delete your Vidmox account. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
                <button className="w-7 h-7 flex items-center justify-center rounded-full border border-red-400 hover:bg-red-100 dark:hover:bg-red-900 transition cursor-pointer">
                  <ChevronRight size={16} className="text-red-400" />
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "Developer Access" && (
          <div className="md:w-[60%] space-y-6">
            {/* Guidelines */}
            <div className="text-base text-gray-400 leading-relaxed space-y-3">
              <p>
                Developer secret keys are used to programmatically access the
                Vidmox API and embed secured videos. Do{" "}
                <span className="text-white font-medium">not share</span> your
                secret key publicly or with third parties.
              </p>
              <p>
                If any suspicious or unauthorized activity is detected using
                your key, we may notify you via email. However, it is solely
                your responsibility to keep your keys secure.
              </p>
              <p>
                If you suspect your key is compromised, you can immediately{" "}
                <span className="text-yellow-400 font-medium">regenerate</span>{" "}
                it below.
              </p>
              <p>
                To further protect your content, you can configure{" "}
                <span className="text-white font-medium">
                  whitelisted domains
                </span>{" "}
                that are allowed to access your embedded videos. Requests from
                any other domain will be blocked.
              </p>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-base font-semibold text-slate-600 dark:text-white">
                Developer Secret Keys
              </h2>
            </div>
            {/* Key List */}

            {/* <div className="bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs dark:text-slate-400">
                    Key ID: dev_sk_1234...abcd
                  </p>
                  <p className="mt-1 font-mono dark:text-white tracking-wider">
                    ********************
                  </p>
                  <p className="mt-1 text-sm dark:text-gray-200">
                    Last used:{" "}
                    <span className="dark:text-white">Not use yet!</span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    {cooldownOver ? (
                      <button
                        className="text-xs px-2 py-1 rounded-md border border-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-700/40"
                        onClick={handleGenerateSecretKey}
                      >
                        Regenerate Key
                      </button>
                    ) : (
                      <p className="text-xs text-gray-400 italic">
                        Please wait 5 minutes before regenerating.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
            <>
              <button
                onClick={handleGenerateSecretKey}
                className="flex items-center cursor-pointer gap-2 mt-3! text-xs px-3 py-2 rounded-md border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                <Plus size={16} />
                Generate Secret Key
              </button>
            </>
          </div>
        )}

        {activeTab === "Security" && <SecuritySection />}
      </div>

      <DeleteAccountModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />

      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-md bg-[#0E1525] text-white rounded-md p-6 shadow-xl border border-blue-700/30">
            {/* Close */}
            <button
              onClick={() => setShowKeyModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Glowing Lock Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 blur-xl opacity-30 bg-blue-600 rounded-full w-14 h-14 z-0" />
                <div className="relative z-10 p-3 bg-blue-600/10 border border-blue-600 rounded-full text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m0-6h.01M12 9v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-center mb-2">
              Your new secret key
            </h2>
            <div className="text-sm text-slate-400 space-y-3 text-center mb-6">
              <p>
                Use this key to access Vidmox APIs, authenticate your app, and
                embed secured videos across your platform.
              </p>
              <p className="text-yellow-400 font-medium">
                This key is visible only once. Please store it securely — it
                cannot be retrieved again.
              </p>
              <p>
                If it’s ever compromised, you can regenerate it from this
                dashboard. The previous key will be immediately revoked.
              </p>
              <p className="text-xs text-gray-400 italic">
                For security reasons, a new key can only be generated once every
                5 minutes.
              </p>
            </div>

            {/* Key Box */}
            <div className="relative bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg font-mono text-sm mb-6 text-white">
              {secretKey.slice(0, 24)}********
              <button
                onClick={handleCopy}
                title={copied ? "Copied!" : "Copy to clipboard"}
                className="absolute right-3 top-3 text-xs text-blue-400 hover:text-blue-500 transition"
              >
                {copied ? (
                  <Check size={16} className="text-green-500 scale-110" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-green-500 text-center -mt-2! mb-3">
                Copied Successfully!
              </p>
            )}

            {/* Footer CTA */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowKeyModal(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-md transition"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
