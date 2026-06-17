import { Video, Wand2, Copy } from "lucide-react";
import { Eyebrow } from "./ui/primitives";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Cloud } from "./ui/Cloud";
import { communityRowA, communityRowB } from "../data/content";
import { img } from "../data/assets";

const actionMeta = {
  video: { label: "Create Video", icon: Video },
  style: { label: "Create same style image", icon: Wand2 },
  prompt: { label: "Use Prompt", icon: Copy },
} as const;

type Item = { image: string; action: keyof typeof actionMeta };

function Card({ item }: { item: Item }) {
  const meta = actionMeta[item.action];
  const Icon = meta.icon;
  return (
    <div className="group relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/30 sm:h-56 sm:w-80">
      <img src={item.image} alt="Community creation" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-1 opacity-90 transition group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-black/55 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md">
          <Icon className="h-3.5 w-3.5" /> {meta.label}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="pause-marquee flex w-max gap-4">
      <div className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`} style={{ ["--marquee-duration" as string]: "55s" }}>
        {loop.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
    </div>
  );
}

export function CommunityGallery() {
  return (
    <section id="community" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg,#bfe0f7 0%,#5aa9ec 30%,#2487da 70%,#1f7ed2 100%)" }}
      />
      <Cloud src={img.cloudPuff} className="left-[-8%] top-[6%] w-[34%] opacity-95" driftX={120} />
      <Cloud src={img.cloudPuff} className="right-[-6%] top-[2%] w-[26%] opacity-80" driftX={-100} blur={1} />
      <Cloud src={img.cloudBandB} className="bottom-[-8%] left-[-4%] w-[60%] opacity-50" driftX={80} />

      <div className="container-erie relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="justify-center">
            Created by our community
          </Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2 text-white">
            See what others are creating.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 flex flex-col gap-4">
        <MarqueeRow items={communityRowA} />
        <MarqueeRow items={communityRowB} reverse />
      </div>

      <div className="container-erie relative mt-14">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[17px] leading-relaxed text-white/90">
            Look around and find what inspires you, copy the prompt, and generate your own image with Erie.
          </p>
          <div className="mt-7">
            <Button variant="dark" href="#pricing">
              Explore creations
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
