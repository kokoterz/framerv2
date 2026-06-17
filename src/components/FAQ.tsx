import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DashedLink } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { faqs } from "../data/content";
import { img } from "../data/assets";

function AwardCard() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-ink p-8 text-white shadow-card-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(31,134,216,0.35) 0%, rgba(10,10,10,0) 70%)" }}
      />
      <div className="relative flex flex-col items-center text-center">
        <div className="flex items-center justify-center">
          <img src={img.laurel} alt="" className="h-28 w-auto" />
          <div className="mx-1 flex flex-col items-center">
            <span className="font-display text-[15px] font-semibold leading-tight text-white">
              #1 Ranked
            </span>
            <span className="font-display text-[13px] font-medium leading-tight text-white/80">
              Image Generation
            </span>
            <span className="mt-1 font-display text-[26px] font-bold text-gold">2026</span>
          </div>
          <img src={img.laurel} alt="" className="h-28 w-auto -scale-x-100" />
        </div>
        <h3 className="mt-5 font-display text-[22px] font-semibold leading-tight tracking-tight">
          Voted the #1 AI creative tool of the year
        </h3>
        <div className="mt-6">
          <DashedLink href="#pricing" className="text-white">
            Start creating
          </DashedLink>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-[17px] font-semibold tracking-tight text-ink sm:text-[18px]">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
            open ? "bg-ink text-white" : "bg-black/[0.06] text-ink/60"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-6 text-[15px] leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-28">
      <div className="container-erie grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left */}
        <Reveal className="lg:sticky lg:top-28">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.03] tracking-tighter2 text-ink">
            Got questions?
          </h2>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-muted">
            Everything you need to know about Erie — from ownership and speed to models and billing.
          </p>
          <div className="mt-8">
            <AwardCard />
          </div>
        </Reveal>

        {/* Right: accordion */}
        <Reveal delay={0.05}>
          <div className="border-t border-black/[0.08]">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
