import { useEffect, useState } from "react";
import { ErieMark } from "./ui/icons";
import { DashedLink } from "./ui/primitives";
import { navLinks } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <nav
        className={`flex w-full max-w-wide items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "bg-white/80 shadow-[0_8px_30px_rgba(8,40,80,0.10)] ring-1 ring-black/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 pl-1">
          <ErieMark className={`h-6 w-6 ${scrolled ? "text-ink" : "text-white"}`} />
          <span
            className={`font-display text-[20px] font-semibold tracking-tight ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Erie
          </span>
        </a>

        {/* Center links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-[14px] font-medium transition-colors ${
                  scrolled ? "text-ink/70 hover:text-ink" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="hidden items-center pr-1 md:flex">
          <DashedLink href="#community" className={scrolled ? "text-ink" : "text-white"}>
            Explore creations
          </DashedLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`grid h-9 w-9 place-items-center rounded-full md:hidden ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-3 top-[68px] rounded-3xl bg-white/95 p-4 shadow-card-lg ring-1 ring-black/5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-black/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-black/5 px-3 pt-3">
              <DashedLink href="#community" className="text-ink">
                Explore creations
              </DashedLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
