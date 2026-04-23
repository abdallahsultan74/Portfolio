"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Spotlight({ className }: Props) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useSpring(mx, { stiffness: 220, damping: 30 });
  const y = useSpring(my, { stiffness: 220, damping: 30 });

  const bg = useTransform([x, y], ([lx, ly]) => {
    return `radial-gradient(500px circle at ${lx}px ${ly}px, rgba(203,172,249,0.18), transparent 55%)`;
  });

  return (
    <motion.div
      aria-hidden="true"
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className={cn("pointer-events-auto absolute inset-0", className)}
      style={{ backgroundImage: bg as unknown as string }}
    />
  );
}

