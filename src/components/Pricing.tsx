import { Check } from "lucide-react";
import { Eyebrow, Badge } from "./ui/primitives";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Cloud } from "./ui/Cloud";
import { ErieMark } from "./ui/icons";
import { pricingBadges, pricingPlans } from "../data/content";
import { img } from "../data/assets";

function FeatureItem({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-grass/15 text-grass">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className={`text-[14.5px] leading-snug ${dark ? "text-white/85" : "text-ink/80"}`}>{children}</span>
    </li>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(150deg,#0c3e7a 0%,#1a73c4 45%,#2e96e6 75%,#5fb4f1 100%)" }}
      />
      <Cloud src={img.cloudPuff} className="left-[-7%] top-[8%] w-[30%] opacity-90" driftX={110} />
      <Cloud src={img.cloudPuff} className="right-[-5%] top-[3%] w-[22%] opacity-70" driftX={-90} blur={1} />
      <Cloud src={img.cloudBandA} className="bottom-[-14%] right-[-8%] w-[62%] opacity-45" driftX={-70} />

      <div className="container-erie relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="justify-center">
            Pricing
          </Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-tighter2 text-white">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-[17px] text-white/85">Start free. Scale when ready.</p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {pricingBadges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-white"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <div
                className={`flex h-full flex-col rounded-[26px] p-7 sm:p-8 ${
                  plan.dark
                    ? "bg-ink text-white shadow-[0_24px_60px_rgba(6,30,60,0.4)]"
                    : "bg-white/70 text-ink shadow-[0_18px_50px_rgba(8,40,80,0.18)] ring-1 ring-white/50 backdrop-blur-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-[18px] font-semibold ${plan.dark ? "text-white" : "text-ink"}`}>
                    {plan.name}
                  </span>
                  {plan.badge === "POPULAR" && (
                    <Badge className="bg-white text-ink/75 shadow-sm">
                      <ErieMark className="mr-1 h-3 w-3" /> {plan.badge}
                    </Badge>
                  )}
                  {plan.badge === "VALUE FOR MONEY" && (
                    <Badge className="bg-gold text-ink">{plan.badge}</Badge>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  {plan.oldPrice && (
                    <span className="font-display text-[34px] font-semibold leading-none text-white/35 line-through">
                      {plan.oldPrice}
                    </span>
                  )}
                  <span
                    className={`font-display text-[52px] font-semibold leading-none tracking-tighter2 ${
                      plan.dark ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`pb-1.5 text-[14px] ${plan.dark ? "text-white/60" : "text-ink/50"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    plan.dark ? "text-white/45" : "text-ink/40"
                  }`}
                >
                  What&apos;s included
                </p>
                <ul className="mt-4 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <FeatureItem key={f} dark={plan.dark}>
                      {f}
                    </FeatureItem>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button variant={plan.dark ? "white" : "dark"} href="#" className="w-full justify-between">
                    Get started
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
