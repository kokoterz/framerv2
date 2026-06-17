import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow } from "./ui/primitives";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { useCases } from "../data/content";

export function UseCases() {
  const [open, setOpen] = useState(0);
  const active = useCases[open];

  return (
    <section id="use-cases" className="bg-surface py-20 sm:py-28">
      <div className="container-erie grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: heading + accordion */}
        <div>
          <Reveal>
            <Eyebrow>Use Cases</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.03] tracking-tighter2 text-ink">
              Built for every creative workflow.
            </h2>
            <div className="mt-7">
              <Button variant="dark" href="#community">
                Explore creations
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {useCases.map((uc, i) => {
              const isOpen = i === open;
              return (
                <div key={uc.title}>
                  <button
                    onClick={() => setOpen(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-[19px] font-semibold tracking-tight transition-colors sm:text-[21px] ${
                        isOpen ? "text-ink" : "text-ink/55"
                      }`}
                    >
                      {uc.title}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        isOpen ? "bg-ink text-white" : "bg-black/[0.06] text-ink/60"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">{uc.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-sky-dark shadow-card-lg sm:aspect-[5/5]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/45 p-3.5 backdrop-blur-md">
              <p className="line-clamp-2 text-[12.5px] leading-snug text-white/85">{active.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
