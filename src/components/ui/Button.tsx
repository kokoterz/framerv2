import type { ReactNode } from "react";
import { Sparkle } from "./icons";

type Variant = "white" | "dark" | "light";

const wrap: Record<Variant, string> = {
  white:
    "bg-white text-ink shadow-[0_1px_2px_rgba(8,40,80,0.12),0_8px_24px_rgba(8,40,80,0.12)] hover:shadow-[0_2px_4px_rgba(8,40,80,0.16),0_12px_32px_rgba(8,40,80,0.18)]",
  dark: "bg-gradient-to-b from-[#2a2a2c] to-[#0c0c0d] text-white shadow-btn hover:from-[#343436] hover:to-[#161616]",
  light:
    "bg-white text-ink ring-1 ring-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.05)] hover:ring-black/[0.1]",
};

const chip: Record<Variant, string> = {
  white: "bg-ink text-white",
  dark: "bg-white/[0.14] text-white ring-1 ring-white/10",
  light: "bg-ink text-white",
};

export function Button({
  children,
  variant = "white",
  href = "#",
  className = "",
  icon = true,
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex select-none items-center gap-2.5 rounded-full py-1.5 pl-5 pr-1.5 text-[15px] font-medium transition-all duration-300 active:scale-[0.98] ${wrap[variant]} ${className}`}
    >
      <span className="py-1.5">{children}</span>
      {icon && (
        <span
          className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-90 ${chip[variant]}`}
        >
          <Sparkle className="h-3.5 w-3.5" />
        </span>
      )}
    </a>
  );
}
