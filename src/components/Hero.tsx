import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { DashedLink } from "./ui/primitives";
import { Sparkle } from "./ui/icons";
import { Cloud } from "./ui/Cloud";
import { heroGallery } from "../data/content";
import { img } from "../data/assets";

function GenerationCard() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = heroGallery[active];

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroGallery.length), 4200);
    return () => clearInterval(t);
  }, []);

  const copy = () => {
    navigator.clipboard?.writeText(current.prompt).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="w-full max-w-[440px]">
      <div className="glass rounded-[28px] p-2.5 shadow-[0_20px_70px_rgba(8,40,80,0.30)]">
        {/* Image frame */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-sky-dark">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={current.image}
              src={current.image}
              alt="AI generated artwork"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* top badges */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              <span className="text-[13px]">🖼</span> 4k
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
              <Sparkle className="h-3 w-3" /> Video Model v7
            </span>
          </div>

          {/* bottom prompt overlay */}
          <div className="absolute inset-x-2.5 bottom-2.5 rounded-2xl bg-black/45 p-3 backdrop-blur-md">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                <Sparkle className="h-3.5 w-3.5" />
              </span>
              <p className="line-clamp-3 text-[12.5px] leading-snug text-white/90">{current.prompt}</p>
            </div>
            <div className="mt-2.5 flex justify-end">
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-ink transition hover:bg-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* thumbnails */}
      <div className="mt-2.5 grid grid-cols-4 gap-2.5">
        {heroGallery.map((g, i) => (
          <button
            key={g.image}
            onClick={() => setActive(i)}
            className={`aspect-square overflow-hidden rounded-2xl ring-2 transition ${
              i === active ? "ring-white" : "ring-white/0 hover:ring-white/50"
            }`}
          >
            <img src={g.image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Sky gradient backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(168deg, #0c3a6e 0%, #134f97 36%, #2287d9 66%, #4aa6ec 86%, #9fcef4 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 82% 12%, rgba(130,195,248,0.40) 0%, rgba(130,195,248,0) 52%)",
        }}
      />
      {/* Left-side vignette to keep the headline crisp over the sky */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(95deg, rgba(7,34,68,0.45) 0%, rgba(7,34,68,0.12) 38%, rgba(7,34,68,0) 60%)" }}
      />

      {/* Decorative clouds — wispy behind the card only; the headline zone stays clear */}
      <Cloud src={img.cloudBandA} className="right-[-16%] top-[1%] w-[58%] opacity-45" driftX={-120} driftY={14} />
      <Cloud src={img.cloudPuff} className="right-[-8%] top-[46%] w-[22%] opacity-65" driftX={-80} driftY={-14} blur={1} />

      <div className="container-erie relative grid items-center gap-12 pb-40 pt-36 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:pb-48 lg:pt-48">
        {/* Left column */}
        <div className="relative z-10 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <Sparkle className="h-3.5 w-3.5" />
            Video Model v7
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-[clamp(2.9rem,6vw,5.2rem)] font-semibold leading-[0.98] tracking-tightest text-white"
          >
            Create anything you can imagine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-[17px] leading-relaxed text-white/85"
          >
            The most powerful AI image and video generation engine. Turn words or sketches into
            photorealistic visuals in seconds. No design skills needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Button variant="white" href="#pricing">
              Start creating
            </Button>
            <DashedLink href="#use-cases" className="text-white">
              See use cases
            </DashedLink>
          </motion.div>
        </div>

        {/* Right column — generation card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <GenerationCard />
        </motion.div>
      </div>

      {/* Bottom cloud bank — fluffy clouds rising from the bottom, blending into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-72">
        <Cloud src={img.cloudPuff} className="bottom-[-38%] left-[-7%] w-[24%] opacity-95" driftX={70} driftY={-8} />
        <Cloud src={img.cloudPuff} className="bottom-[-48%] left-[19%] w-[20%] opacity-90" driftX={50} driftY={-8} blur={0.5} />
        <Cloud src={img.cloudPuff} className="bottom-[-46%] right-[16%] w-[18%] opacity-88" driftX={-50} driftY={-8} blur={1} />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
      </div>
    </section>
  );
}
