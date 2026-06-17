import { Check, X, Crosshair } from "lucide-react";
import { Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { ErieMark } from "./ui/icons";
import { comparisonRows } from "../data/content";

type Cell = boolean | string;

function CellValue({ value, erie = false }: { value: Cell; erie?: boolean }) {
  if (value === true)
    return (
      <span
        className={`grid h-7 w-7 place-items-center rounded-full ${
          erie ? "bg-white/20 text-white" : "bg-ink text-white"
        }`}
      >
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  if (value === false)
    return (
      <span className="grid h-7 w-7 place-items-center rounded-full bg-black/[0.06] text-ink/30">
        <X className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className={`text-[14px] font-medium ${erie ? "text-white" : "text-ink/70"}`}>{value}</span>
  );
}

export function Comparison() {
  return (
    <section id="why-erie" className="bg-surface py-20 sm:py-28">
      <div className="container-erie">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Why creators choose ERIE.</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2 text-ink">
            There&apos;s ERIE. Then there&apos;s everything else.
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-14 max-w-4xl">
          <div className="relative">
            {/* Erie highlight column backdrop */}
            <div
              className="absolute bottom-0 right-0 top-[-18px] w-1/4 rounded-[24px] shadow-[0_20px_60px_rgba(20,90,160,0.35)]"
              style={{ background: "linear-gradient(170deg,#1f7ed2 0%,#2f96e6 60%,#56b0f0 100%)" }}
            />

            <div className="relative">
              {/* Header */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center pb-2">
                <span />
                <span className="text-center text-[14px] font-semibold text-ink/55 sm:text-[15px]">Gemini</span>
                <span className="text-center text-[14px] font-semibold text-ink/55 sm:text-[15px]">Midjourney</span>
                <span className="flex items-center justify-center gap-1.5 pt-2 text-white">
                  <ErieMark className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-display text-[15px] font-semibold sm:text-[17px]">Erie</span>
                </span>
              </div>

              {/* Rows */}
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-t border-black/[0.07] py-4"
                >
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-ink sm:text-[15px]">
                    <Crosshair className="h-4 w-4 shrink-0 text-ink/35" />
                    {row.label}
                  </span>
                  <span className="flex justify-center">
                    <CellValue value={row.gemini} />
                  </span>
                  <span className="flex justify-center">
                    <CellValue value={row.midjourney} />
                  </span>
                  <span className="flex justify-center">
                    <CellValue value={row.erie} erie />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
