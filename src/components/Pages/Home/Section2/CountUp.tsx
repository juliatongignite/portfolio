"use client"
import {motion} from "motion/react"
import { animate } from "motion";
import { useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

export type CountUpProps = {
  /** Start value (default 0) */
  from?: number;
  /** End value to count up to */
  to: number;
  /** Duration in seconds (default 1.2s) */
  duration?: number;
  /** Fractional digits (default 0) */
  decimals?: number;
  /** Prefix/Suffix strings (e.g., $ …, … %) */
  prefix?: string;
  suffix?: string;
  /** Easing: any Framer easing name or cubic-bezier array */
  ease?: any;
  /** BCP 47 locale(s) for number formatting. e.g., "en-US" */
  locale?: string | string[];
  /** Re-run animation when `to` changes (default true) */
  reanimateOnChange?: boolean;
  /** Only start when the component is in view (default true) */
  startOnView?: boolean;
  /** Tailwind/class names for the number wrapper */
  className?: string;
};


export function CountUp({
  from = 0,
  to,
  duration = 1.2,
  decimals = 0,
  prefix = "",
  suffix = "",
  ease = "easeOut",
  locale,
  reanimateOnChange = true,
  startOnView = true,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  // Motion value that will be animated from `from` -> `to`.
  const mv = useMotionValue<number>(from);

  // Number formatter memoized by locale & decimals
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale as any, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [locale, decimals]);

  // Convert the raw motion value into a formatted string on every tick
  const display = useTransform(mv, (latest) => `${prefix}${formatter.format(latest)}${suffix}`);

  useEffect(() => {
    // If we only want to start when in view, skip until visible
    if (startOnView && !isInView) return;

    const controls = animate(mv, to, { duration, ease });
    return controls.stop; // cleanup on unmount or prop change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnView, isInView, to, duration, ease, mv]);

  // Rewind to `from` when "to" changes to replay the animation
  useEffect(() => {
    if (!reanimateOnChange) return;
    mv.set(from);
  }, [to, from, reanimateOnChange, mv]);

  return (
    <span ref={ref} className={className}>
      {/* Using motion.span so updates are super smooth */}
      <motion.span aria-label={`${prefix}${to}${suffix}`}>{display}</motion.span>
    </span>
  );
}