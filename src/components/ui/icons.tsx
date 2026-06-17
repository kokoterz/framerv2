import type { SVGProps } from "react";

/** Erie 4-point concave star ("sparkle"). Used in buttons & badges. */
export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
      <path d="M12 0c.6 6.1 5.9 11.4 12 12-6.1.6-11.4 5.9-12 12-.6-6.1-5.9-11.4-12-12C6.1 11.4 11.4 6.1 12 0Z" />
    </svg>
  );
}

/** Erie brand mark: rounded square ring containing the sparkle. */
export function ErieMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden {...props}>
      <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="9.5" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M16 7c.4 4.4 4.6 8.6 9 9-4.4.4-8.6 4.6-9 9-.4-4.4-4.6-8.6-9-9 4.4-.4 8.6-4.6 9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
