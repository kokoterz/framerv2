import { Play } from "lucide-react";
import { Eyebrow } from "./ui/primitives";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Cloud } from "./ui/Cloud";
import { tutorials } from "../data/content";
import { img } from "../data/assets";

export function Tutorials() {
  return (
    <section id="tutorials" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(160deg,#0c3e7a 0%,#1873c4 48%,#2e96e6 80%,#62b6f1 100%)" }}
      />
      <Cloud src={img.cloudPuff} className="left-[-6%] top-[10%] w-[26%] opacity-85" driftX={100} />
      <Cloud src={img.cloudPuff} className="right-[-6%] top-[4%] w-[24%] opacity-75" driftX={-90} blur={1} />

      <div className="container-erie relative">
        <Reveal className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <Eyebrow tone="light" className="justify-center md:justify-start">
              Erie Academy — Tutorials
            </Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.04] tracking-tighter2 text-white">
              Learn to generate stunning visuals with expert tutorials.
            </h2>
          </div>
          <Button variant="light" href="#">
            View all tutorials
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.06}>
              <article className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-[20px] ring-1 ring-white/30">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-semibold text-white backdrop-blur-md">
                    {t.duration}
                  </span>
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5" fill="currentColor" strokeWidth={0} />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[19px] font-semibold tracking-tight text-white">{t.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/80">{t.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
