import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidmox — Developer-first Video Infrastructure",
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
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#08090e] text-white antialiased`}
        >
          {children}

          {/* Iconify for icons */}
          <Script
            src="https://code.iconify.design/3/3.1.0/iconify.min.js"
            strategy="lazyOnload"
          />

          {/* UnicornStudio for animated background */}
          <Script id="unicorn-studio" strategy="lazyOnload">
            {`
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
          `}
          </Script>

          {/* Scroll animation observer */}
          <Script id="scroll-observer" strategy="lazyOnload">
            {`
            (function () {
              const once = true;
              if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("animate");
                      if (once) window.__inViewIO.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
              }
              window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                  window.__inViewIO.observe(el);
                });
              };
              document.addEventListener("DOMContentLoaded", () => window.initInViewAnimations());
            })();
          `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
