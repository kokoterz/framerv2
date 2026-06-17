import { Twitter, Instagram, Youtube } from "lucide-react";
import { ErieMark } from "./ui/icons";
import { footerColumns } from "../data/content";

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/40">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-[14.5px] text-white/70 transition hover:text-white">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-erie py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <ErieMark className="h-6 w-6 text-white" />
              <span className="font-display text-[20px] font-semibold">Erie</span>
            </a>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/55">
              ERIE is the world&apos;s most powerful AI image and video generation platform — built for
              professionals, accessible to everyone.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/70 transition hover:bg-white/15 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Tutorials" items={footerColumns.tutorials} />
          <Column title="Company" items={footerColumns.company} />
          <Column title="Legal" items={footerColumns.legal} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[13px] text-white/45">© 2026 ERIE Template. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[13px] text-white/45">
            Made by <span className="text-[#3b82f6]">💙</span>
            <span className="font-semibold text-white/70">Blurr</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
