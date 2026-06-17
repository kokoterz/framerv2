import { useState } from "react";
import { Star } from "lucide-react";
import { Eyebrow } from "./ui/primitives";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { testimonials } from "../data/content";

function Stars() {
  return (
    <div className="mb-3 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-ink" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

function Quote({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="mb-4 break-inside-avoid overflow-hidden rounded-[22px] border border-black/[0.07] bg-white shadow-card">
      {t.image && (
        <img src={t.image} alt="" className="h-52 w-full object-cover" />
      )}
      <div className="p-6">
        {t.stars && <Stars />}
        <blockquote className="text-[15.5px] leading-relaxed text-ink/85">{t.quote}</blockquote>
        {t.name && (
          <figcaption className="mt-5 flex items-center gap-3">
            {t.avatar && <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />}
            <div>
              <div className="text-[14px] font-semibold text-ink">{t.name}</div>
              <div className="text-[12.5px] text-muted">{t.role}</div>
            </div>
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, 9);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-erie">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">In Their Words</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2 text-ink">
            Stories from the people who use it every day.
          </h2>
          <div className="mt-7 flex justify-center">
            <Button variant="dark" href="#pricing">
              Start creating
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((t, i) => (
            <Quote key={i} t={t} />
          ))}
        </div>

        {!expanded && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#2a2a2c] to-[#0c0c0d] py-2 pl-5 pr-2 text-[15px] font-medium text-white shadow-btn transition hover:from-[#343436]"
            >
              See More
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.14] ring-1 ring-white/10">
                <Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
