import { partnerLogos } from "../data/assets";

export function LogosStrip() {
  return (
    <section className="relative z-10 bg-surface pb-6 pt-2">
      <div className="container-erie">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-light">
          Backed by industry leaders
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {partnerLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Partner logo"
              className="h-6 w-auto opacity-45 grayscale transition hover:opacity-70 sm:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
