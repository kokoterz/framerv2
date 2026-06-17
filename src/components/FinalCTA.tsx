import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Cloud } from "./ui/Cloud";
import { ctaMarquee } from "../data/content";
import { img } from "../data/assets";

const offsets = [24, 0, 40, 12, 56, 4, 32, 8, 48, 20];

export function FinalCTA() {
  const loop = [...ctaMarquee, ...ctaMarquee];
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(155deg,#0a386f 0%,#1670c2 42%,#2f96e6 72%,#73bef2 100%)" }}
      />
      <Cloud src={img.cloudPuff} className="left-[-6%] top-[6%] w-[28%] opacity-90" driftX={120} />
      <Cloud src={img.cloudPuff} className="right-[8%] top-[2%] w-[18%] opacity-70" driftX={-90} blur={1} />

      <div className="container-erie relative">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-semibold leading-[1.0] tracking-tightest text-white">
            The future of creativity is here
          </h2>
          <div className="max-w-sm">
            <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
              <span>· Start for free</span>
              <span>· No credit card required</span>
            </div>
            <p className="mb-6 text-[16px] leading-relaxed text-white/85">
              Join 12 million creators who&apos;ve made Erie their primary visual tool. Generate your first image
              in 60 seconds.
            </p>
            <Button variant="dark" href="#pricing">
              Start creating
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Floating image marquee */}
      <div className="pause-marquee relative mt-16 flex w-max gap-5 pb-2">
        <div className="flex animate-marquee gap-5" style={{ ["--marquee-duration" as string]: "70s" }}>
          {loop.map((src, i) => (
            <div
              key={i}
              className="h-44 w-64 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/30 sm:h-52 sm:w-72"
              style={{ marginTop: offsets[i % offsets.length] }}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="h-16" />
    </section>
  );
}
