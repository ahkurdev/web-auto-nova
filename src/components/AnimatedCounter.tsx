"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value).toLocaleString("id-ID")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
