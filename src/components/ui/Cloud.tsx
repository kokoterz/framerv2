import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type CloudProps = {
  src: string;
  /** Tailwind classes for absolute position + width. */
  className?: string;
  /** Horizontal drift in px across the cloud's journey through the viewport. */
  driftX?: number;
  /** Vertical drift in px (parallax). */
  driftY?: number;
  opacity?: number;
  flip?: boolean;
  blur?: number;
  zIndex?: number;
};

/**
 * A single decorative cloud that drifts as it scrolls through the viewport,
 * producing the "floating clouds" parallax used throughout the Erie site.
 */
export function Cloud({
  src,
  className = "",
  driftX = 80,
  driftY = -40,
  opacity = 1,
  flip = false,
  blur = 0,
  zIndex,
}: CloudProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-driftX / 2, driftX / 2]);
  const y = useTransform(scrollYProgress, [0, 1], [-driftY / 2, driftY / 2]);

  return (
    <div ref={ref} className={`pointer-events-none absolute ${className}`} style={{ zIndex }} aria-hidden>
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        style={{
          x: reduce ? 0 : x,
          y: reduce ? 0 : y,
          opacity,
          filter: blur ? `blur(${blur}px)` : undefined,
          transform: flip ? "scaleX(-1)" : undefined,
        }}
        className="w-full select-none"
      />
    </div>
  );
}
