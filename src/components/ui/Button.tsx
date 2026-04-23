"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function GlowButton({ href, onClick, children, className }: Props) {
  const Comp: any = href ? Link : "button";
  const props: any = href ? { href } : { type: "button", onClick };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn("inline-flex", className)}
    >
      <Comp
        {...props}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium",
          "text-white/90 ring-1 ring-white/10",
          "bg-[linear-gradient(180deg,rgba(12,14,35,0.9),rgba(4,7,29,0.85))]",
          "shadow-[0_0_0_1px_rgba(203,172,249,0.12),0_20px_80px_rgba(0,0,0,0.55)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(203,172,249,0.35)]"
        )}
      >
        <span className="absolute -inset-px rounded-xl bg-[linear-gradient(90deg,rgba(203,172,249,0.55),rgba(125,211,252,0.35),rgba(109,40,217,0.55))] opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-85" />
        <span className="absolute -inset-px rounded-xl bg-[linear-gradient(90deg,rgba(203,172,249,0.55),rgba(125,211,252,0.35),rgba(109,40,217,0.55))]" />
        <span className="absolute inset-[1px] rounded-[11px] bg-[#05081f]" />
        <span className="relative z-10">{children}</span>
      </Comp>
    </motion.div>
  );
}

