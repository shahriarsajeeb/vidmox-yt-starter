"use client";

import React, { useState } from "react";
import { ChevronRight, CreditCard, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import PaymentCard from "../../components/cards/payment.card";
import AddOnCard from "../../components/cards/addon.card";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const { isLoaded } = useUser();

  const transactions = [
    {
      date: "Apr 14, 2025",
      amount: "$12.00",
      status: "Paid",
      plan: "Pro Plan",
    },
    {
      date: "Mar 14, 2025",
      amount: "$12.00",
      status: "Paid",
      plan: "Pro Plan",
    },
  ];

  const nextBillingDate = "May 15, 2025";

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="text-black dark:dark:text-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Billing
        </span>
      </nav>

      {/* Title */}
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl font-semibold">Billing Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Track your current plan and manage subscription settings.
        </p>
      </div>

      {/* Manage Billing Card */}
      <div className="flex items-center justify-between rounded-md p-5 mb-6 border border-gray-200 dark:border-[#1f2023] dark:bg-[#101217]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20">
            <CreditCard
              size={20}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Manage Billing</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Manage your payment methods and billing details through Stripe.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            // TODO: redirect to Stripe customer portal
          }}
          className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-slate-800 hover:bg-gray-100 dark:hover:bg-slate-900/50 transition-colors"
        >
          <ExternalLink size={14} />
          Open Stripe Portal
        </button>
      </div>

      {/* Current Plan */}
      <div className="dark:bg-[#101217] rounded-md p-5 mb-6 border border-gray-200 dark:border-[#1f2023]">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Choose the Plan That Fits Your Needs
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upgrade to unlock more bandwidth, storage, and premium features like{" "}
            <br />
            custom watermark, ad-free player, and real-time support.
          </p>
        </div>

        <div className="flex items-center gap-6 mb-8 border-b border-gray-200 dark:border-slate-700">
          {["monthly", "yearly"].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle as "monthly" | "yearly")}
              className={`relative pb-2 text-sm font-medium transition-all ${
                billingCycle === cycle
                  ? "text-indigo-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-indigo-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-white"
              }`}
            >
              {cycle === "monthly" ? "Monthly" : "Yearly"}
              {cycle === "yearly" && (
                <span className="ml-1 text-xs text-green-500">(Save 10%)</span>
              )}
            </button>
          ))}
        </div>

        <div className="w-full grid md:grid-cols-4 gap-5 mb-1">
          <PaymentCard
            name="Free Plan"
            price="$0"
            isCurrent
            isFree
            features={[
              "5GB storage",
              "only HD (720p) streaming",
              "1,000 playback minutes / month",
              "Advanced analytics",
              "API Access",
              "720p resolution encoding",
              { label: "Custom watermark", available: false },
              { label: "Automatic Subtitle Generations", available: false },
              {
                label: "Multi-bitrate adaptive streaming (360p–1080p)",
                available: false,
              },
              { label: "Full branding", available: false },
            ]}
          />
          <PaymentCard
            name="Pro Plan"
            price={billingCycle === "monthly" ? "$14.99" : "$12.99"}
            features={[
              "250GB storage",
              "10,000 playback minutes / month",
              "Advanced analytics",
              "API Access",
              "Multi-bitrate adaptive streaming (360p–1080p)",
              "Custom watermark",
              "Automatic Subtitle Generations",
              "Full branding",
            ]}
          />
          <PaymentCard
            name="Business Plan"
            price={billingCycle === "monthly" ? "$29.99" : "$27.99"}
            features={[
              "600GB storage",
              "22,000 playback minutes / month",
              "Advanced analytics",
              "API Access",
              "Multi-bitrate adaptive streaming (360p–1080p)",
              "Custom watermark",
              "Automatic Subtitle Generations",
              "Full branding",
            ]}
          />
          <PaymentCard
            name="Enterprise Plan"
            price={billingCycle === "monthly" ? "$64.99" : "$60.99"}
            features={[
              "2TB storage",
              "50,000 playback minutes / month",
              "Advanced analytics",
              "API Access",
              "Multi-bitrate adaptive streaming (360p–1080p)",
              "Custom watermark",
              "Automatic Subtitle Generations",
              "Full branding",
            ]}
          />
        </div>
      </div>

      <div className="dark:bg-[#101217] rounded-md mb-6 p-5 border border-gray-200 dark:border-[#1f2023]">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          Add-ons
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
          Extend your bandwidth and storage as your needs grow. Add flexibility
          with custom top-ups.
        </p>

        <div className="grid md:grid-cols-4 gap-5">
          <AddOnCard
            title="100GB Bandwidth"
            price="$5"
            description="Extend your bandwidth limit"
          />
          <AddOnCard
            title="200GB Bandwidth"
            price="$10"
            description="Extend your bandwidth limit"
          />
          <AddOnCard
            title="300GB Bandwidth"
            price="$15"
            description="Extend your bandwidth limit"
          />

          {/* Custom Add-on Card */}
          <div className="rounded-md border border-slate-300 dark:border-slate-800/50 p-4 bg-white dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
              Extra Playback Minutes
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              $5 = 2000 Minutes Playback Add as many Playback Minutes as you
              want.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                min={5}
                step={5}
                placeholder="Enter $ amount"
                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                Add Playback Minutes
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="grid md:grid-cols-4 gap-5">
          <AddOnCard
            title="100GB Storage"
            price="$5"
            description="Extend your storage limit"
          />
          <AddOnCard
            title="200GB Storage"
            price="$10"
            description="Extend your storage limit"
          />
          <AddOnCard
            title="300GB Storage"
            price="$15"
            description="Extend your storage limit"
          />

          {/* Custom Add-on Card */}
          <div className="rounded-md border border-slate-300 dark:border-slate-800/50 p-4 bg-white dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
              Custom Storage
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              $5 = 200GB. Add as much storage as you want.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                min={5}
                step={5}
                placeholder="Enter $ amount"
                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200"
              />
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                Add Storage
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="dark:bg-[#101217] rounded-md p-5 border border-gray-200 dark:border-[#1f2023]">
        <h3 className="text-sm font-medium dark:text-white mb-4">
          Transaction History
        </h3>
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-gray-500 border-b border-gray-200 dark:border-slate-800">
            <tr>
              <th className="py-2 font-medium">Date</th>
              <th className="py-2 font-medium">Plan</th>
              <th className="py-2 font-medium">Amount</th>
              <th className="py-2 font-medium">Status</th>
              <th className="py-2 font-medium">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 dark:border-[#1f2023] hover:bg-gray-100 dark:hover:bg-[#0e0f13] text-gray-700 dark:text-gray-300"
              >
                <td className="py-3">{txn.date}</td>
                <td className="py-3">{txn.plan}</td>
                <td className="py-3">{txn.amount}</td>
                <td
                  className={`py-3 font-medium ${
                    txn.status.toLowerCase() === "paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {txn.status}
                </td>
                <td className="py-3">
                  <button
                    onClick={() => alert("TODO: Download invoice")}
                    className="inline-flex cursor-pointer items-center gap-1 text-blue-500 hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
