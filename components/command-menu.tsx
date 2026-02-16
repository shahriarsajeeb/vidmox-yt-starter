"use client";

import * as React from "react";
import { Command } from "cmdk";
import {
  Search,
  CreditCard,
  Settings,
  LayoutGrid,
  ScrollText,
  HardDrive,
  FileVideo,
  Globe,
  Server,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-transparent text-white"
          loop
        >
          <div
            className="flex items-center border-b border-[#1F1F1F] px-4"
            cmdk-input-wrapper=""
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Search for apps and commands..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50"
              autoFocus
            />
            <div className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[#2A2A2A] bg-[#1F1F1F] px-1.5 font-mono text-[10px] font-medium text-neutral-400 opacity-100">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
          </div>
          <Command.List className="max-h-75 overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-neutral-500">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Products"
              className="text-xs font-medium text-neutral-500 px-2 py-1.5"
            >
              <CommandItem
                onSelect={() => runCommand(() => router.push("/logs"))}
              >
                <ScrollText className="mr-2 h-4 w-4" />
                <span>Logs</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/deployment"))}
              >
                <Server className="mr-2 h-4 w-4" />
                <span>OneMinute Deploy</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/redis"))}
              >
                <Zap className="mr-2 h-4 w-4" />
                <span>Redis</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/storage"))}
              >
                <HardDrive className="mr-2 h-4 w-4" />
                <span>Storage</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/media-convert"))}
              >
                <FileVideo className="mr-2 h-4 w-4" />
                <span>Media Convert</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/cdn"))}
              >
                <Globe className="mr-2 h-4 w-4" />
                <span>OneMinuteCDN</span>
              </CommandItem>
            </Command.Group>

            <Command.Separator className="my-1 h-px bg-[#1F1F1F]" />

            <Command.Group
              heading="Platform"
              className="text-xs font-medium text-neutral-500 px-2 py-1.5"
            >
              <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>Dashboard Home</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/billing"))}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing & Usage</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/settings"))}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </Command.Group>
          </Command.List>
        </Command>
      </div>

      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={() => setOpen(false)} />
    </div>
  );
}

function CommandItem({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <Command.Item
      className="relative flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none data-[selected='true']:bg-[#1F1F1F] data-[selected='true']:text-white text-neutral-400 my-0.5 transition-colors"
      onSelect={onSelect}
    >
      {children}
    </Command.Item>
  );
}
