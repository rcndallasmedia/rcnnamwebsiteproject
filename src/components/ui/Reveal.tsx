"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:duration-0 motion-reduce:transition-none ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0 motion-reduce:translate-y-0"
      } ${className}`}
      style={{ transitionTimingFunction: "var(--ease-out)" }}
    >
      {children}
    </div>
  );
}
