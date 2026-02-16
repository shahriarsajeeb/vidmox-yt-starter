import { useState } from "react";
import { ChevronRight, CircleUser, ShieldCheck } from "lucide-react";
import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

const SecuritySection = () => {
  const { resolvedTheme } = useTheme();
  const [openSection, setOpenSection] = useState<null | "manage" | "domains">(
    null,
  );

  const toggleSection = (section: any) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="md:w-[60%] space-y-2">
      {/* Update Password */}
      <div>
        <div
          className="flex items-center justify-between px-3 py-3 cursor-pointer"
          onClick={() => toggleSection("manage")}
        >
          <div className="flex items-start gap-3">
            <CircleUser size={22} className="text-indigo-500 mt-1" />
            <div>
              <div className="text-base font-medium">Manage Account</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Change your current account password.
              </p>
            </div>
          </div>
          <ChevronRight
            size={16}
            className={`text-gray-500 transition-transform ${openSection === "manage" ? "rotate-90" : ""
              }`}
          />
        </div>
      </div>

      {/* Whitelisted Domains */}
      <div>
        <div
          className="flex items-center justify-between px-3 py-3 cursor-pointer"
          onClick={() => toggleSection("domains")}
        >
          <div className="flex items-start gap-3">
            <ShieldCheck size={22} className="text-green-500 mt-1" />
            <div>
              <div className="text-base font-medium">Whitelisted Domains</div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Only allow video plays from specific domains to prevent
                unauthorized access.
              </p>
            </div>
          </div>
          <ChevronRight
            size={16}
            className={`text-gray-500 transition-transform ${openSection === "domains" ? "rotate-90" : ""
              }`}
          />
        </div>

        {openSection === "manage" && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setOpenSection(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <UserProfile
                appearance={{
                  baseTheme: resolvedTheme === "dark" ? dark : undefined,
                  elements: {
                    card: "shadow-xl border border-gray-200 dark:border-gray-800",
                    navbar: "hidden",
                    navbarMobileMenuButton: "hidden",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                  }
                }}
              />
            </div>
          </div>
        )}

        {openSection === "domains" && (
          <div className="border-t border-slate-700 px-4 py-4 space-y-4">
            <input
              type="text"
              placeholder="e.g. mywebsite.com"
              className="w-full px-3 py-2 rounded bg-slate-800/50 border border-slate-700 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-sm px-4 py-2 rounded text-white">
              Add Domain
            </button>

            {/* Placeholder for domain list */}
            <div className="pt-4 space-y-2 text-sm">
              <div className="flex justify-between items-center border border-slate-800 px-3 py-2 rounded">
                <span className="text-white">example.com</span>
                <button className="text-red-400 cursor-pointer hover:underline text-xs">
                  Remove
                </button>
              </div>
              <div className="flex justify-between items-center border border-slate-800 px-3 py-2 rounded">
                <span className="text-white">vidmox.dev</span>
                <button className="text-red-400 hover:underline cursor-pointer text-xs">
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecuritySection;
