import { Zap, Sparkles, Clapperboard, PenLine } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow, Badge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { ErieMark } from "./ui/icons";
import { Cloud } from "./ui/Cloud";
import { features } from "../data/content";
import { img } from "../data/assets";

const iconMap: Record<string, ReactNode> = {
  diamond: <ErieMark className="h-5 w-5" />,
  bolt: <Zap className="h-5 w-5" fill="currentColor" strokeWidth={0} />,
  star: <Sparkles className="h-5 w-5" />,
  video: <Clapperboard className="h-5 w-5" />,
  edit: <PenLine className="h-5 w-5" />,
};

function IconBox({ icon, light = false }: { icon: string; light?: boolean }) {
  return (
    <span
      className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${
        light ? "bg-white/15 ring-1 ring-white/20 backdrop-blur" : "bg-ink"
      }`}
    >
      {iconMap[icon]}
    </span>
  );
}

export function CoreFeatures() {
  const [featured, ...rest] = features;
  const subThree = rest[0];
  const bottomRow = rest.slice(1);

  return (
    <section id="features" className="bg-surface py-20 sm:py-28">
      <div className="container-erie">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Core Features</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2 text-ink">
            The most complete AI creative suite ever built.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Featured (spans 2 cols) */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[26px] p-8 sm:p-10">
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(140deg,#0e468a 0%,#1d7ed0 55%,#3ea3ee 100%)" }}
              />
              <Cloud src={img.cloudPuff} className="right-[-5%] top-[-30%] w-[28%] opacity-55" driftX={-50} />
              <Cloud src={img.cloudBandA} className="bottom-[-30%] right-[-12%] w-[60%] opacity-25" driftX={-60} />
              {/* scrim to anchor text */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a3a72]/85 via-[#0a3a72]/25 to-transparent" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <IconBox icon={featured.icon} light />
                  <Badge className="bg-white/90 text-ink/70">{featured.badge}</Badge>
                </div>
                <div className="mt-auto pt-16">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85">{featured.body}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sub-3s */}
          <Reveal delay={0.05}>
            <FeatureCard {...subThree} />
          </Reveal>

          {/* Bottom row */}
          {bottomRow.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * (i + 1)}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, badge, title, body }: (typeof features)[number]) {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[26px] bg-white p-7 shadow-card ring-1 ring-black/[0.04]">
      <div className="flex items-start justify-between">
        <IconBox icon={icon} />
        <Badge className="bg-black/[0.05] text-ink/55">{badge}</Badge>
      </div>
      <div className="mt-auto pt-16">
        <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{body}</p>
      </div>
    </div>
  );
}
