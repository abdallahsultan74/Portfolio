"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function PinCard({ className, children }: Props) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const rotate = useMotionTemplate`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  return (
    <motion.div
      onPointerMove={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry.set((px - 0.5) * 10);
        rx.set((0.5 - py) * 10);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ transform: rotate }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,35,0.92),rgba(4,7,29,0.84))]",
        "shadow-[0_0_0_1px_rgba(203,172,249,0.08),0_28px_90px_rgba(0,0,0,0.55)]",
        "overflow-hidden",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(203,172,249,0.22),transparent_55%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_70%_10%,rgba(125,211,252,0.14),transparent_55%)]" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

