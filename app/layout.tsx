import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import ThemeWrapper from "@/providers/theme-provider";
import { Toaster } from "sonner";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard - Vidmox",
  description:
    "Modern APIs for ingesting, transcoding, and streaming video at scale. Ship upload flows, on-demand playback, and live pipelines without building your own media stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeWrapper>
            <QueryProvider>
              <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-6 min-w-0 bg-white dark:bg-[#0A0C10] text-black dark:text-white">
                  {children}
                </main>
              </div>
              <Toaster
                position="top-right"
                theme="system"
                toastOptions={{
                  className:
                    "bg-[#0A0C10] text-white border border-[#23262e]",
                  closeButton: true,
                }}
              />
            </QueryProvider>
          </ThemeWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
