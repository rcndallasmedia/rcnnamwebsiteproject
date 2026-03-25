"use client";

import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

export function MetricCounter({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) {
  const { ref, inView } = useInView<HTMLParagraphElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <p ref={ref} className="my-3 text-3xl font-extrabold tracking-tight text-ink">
      {display}
      {suffix}
    </p>
  );
}
