import { Star } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { img } from "../data/assets";

export function WiredQuote() {
  return (
    <section className="bg-surface pb-24 pt-4 sm:pb-28">
      <div className="container-erie">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-ink" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="mt-7 font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-tighter2 text-ink">
            “The gap between what we can imagine and what exists just closed.”
          </blockquote>
          <div className="mt-9 flex justify-center">
            <img src={img.wired} alt="WIRED" className="h-6 w-auto opacity-90 sm:h-7" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
