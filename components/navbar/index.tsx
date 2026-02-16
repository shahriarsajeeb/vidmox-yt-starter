"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/svgs/logo";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, isLoaded } = useAuth();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl supports-backdrop-filter:bg-black/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#story" className="hover:text-white transition-colors">
            Why us?
          </Link>
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-white transition-colors">
            Docs
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* <Link
            href="/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Login
          </Link> */}
          <Link
            target={!isLoaded ? "_parent" : isSignedIn ? "__blank" : "_parent"}
            href={
              !isLoaded
                ? "/"
                : !isSignedIn
                  ? "/waitlist"
                  : "http://localhost:3001"
            }
          >
            <Button
              size="sm"
              className="rounded-full cursor-pointer bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
            >
              {!isLoaded ? "..." : isSignedIn ? "Dashboard" : "Sign In"}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
