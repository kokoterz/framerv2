import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

/** Small uppercase label above section headings. */
export function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light" | "muted";
}) {
  const color =
    tone === "light" ? "text-white/80" : tone === "muted" ? "text-muted-light" : "text-ink/55";
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${color} ${className}`}>
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

/** Pill badge (e.g. POPULAR, PERFORMANCE). */
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${className}`}
    >
      {children}
    </span>
  );
}

/** Text link with dashed underline + arrow (e.g. "Explore creations ↗"). */
export function DashedLink({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1 border-b border-dashed border-current pb-0.5 text-[15px] font-medium transition-colors ${className}`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
