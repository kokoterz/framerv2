import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { stats } from "../data/content";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((target * eased).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(target.toFixed(decimals));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-surface pb-20 pt-4 sm:pb-28">
      <div className="container-erie">
        <div className="grid gap-y-12 rounded-[26px] border border-black/[0.07] bg-white px-6 py-12 shadow-card sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:divide-x lg:divide-black/[0.07]">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="lg:px-8 lg:first:pl-0">
              <div className="font-display text-[clamp(2.6rem,4vw,3.6rem)] font-semibold tracking-tighter2 text-ink">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 text-[16px] font-semibold text-ink">{s.label}</div>
              <p className="mt-1.5 text-[13.5px] leading-snug text-muted">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
