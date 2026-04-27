'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface StatItem {
  value: number | null;
  display?: string;
  suffix?: string;
  label: string;
}

const statItems: StatItem[] = [
  { value: 55,   suffix: '%',  label: 'Manual Work Reduced' },
  { value: null, display: '3–5×',        label: 'Operational Efficiency' },
  { value: 100,  suffix: '%',  label: 'Code Ownership' },
  { value: null, display: 'End-to-End',  label: 'Strategy → Build → Deploy' },
];

// Counts from 0 → target on first viewport entry
function useCountUp(target: number | null, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    const DURATION = 1800;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return count;
}

function StatRow({
  stat,
  index,
  lineInView,
}: {
  stat: StatItem;
  index: number;
  lineInView: boolean;
}) {
  const count        = useCountUp(stat.value, lineInView);
  const displayValue = stat.value !== null ? `${count}${stat.suffix ?? ''}` : stat.display;

  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={lineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
      // Each row fades in ~150 ms after the line "passes" it
      transition={{ duration: 0.65, delay: 0.25 + index * 0.15, ease }}
      className="flex items-baseline gap-5 py-5 border-b border-black/[0.06] dark:border-white/[0.06] last:border-0"
    >
      <span
        className="min-w-[110px] text-[34px] md:text-[42px] font-bold leading-none tracking-tight text-[#1a1a2e] dark:text-[#f0f0f5]"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {displayValue}
      </span>
      <span className="text-[14px] md:text-[15px] leading-snug text-[#6b7280] dark:text-[#9ca3af]">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  const lineRef   = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#030303] py-24 md:py-36 px-6">

      {/* ── Engineering-style grid background ── */}
      {/* Light mode grid */}
      <div
        className="pointer-events-none absolute inset-0 dark:opacity-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Dark mode grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

        {/* LEFT ── vertical anchor line + animated stats */}
        <div ref={lineRef} className="flex gap-8">

          {/* Vertical orange line — draws itself via scaleY */}
          <div className="relative flex-shrink-0 w-[3px] self-stretch">
            {/* Track */}
            <div className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/[0.06]" />
            {/* Fill — scaleY from 0 → 1 as the section enters view */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #FF4800 0%, rgba(255,72,0,0.35) 100%)',
                originY: 0,
              }}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Glowing dot at top */}
            <motion.div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ background: '#FF4800', boxShadow: '0 0 10px rgba(255,72,0,0.7)' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={lineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            />
          </div>

          {/* Stat rows */}
          <div className="flex-1 min-w-0">
            {statItems.map((stat, i) => (
              <StatRow key={i} stat={stat} index={i} lineInView={lineInView} />
            ))}
          </div>
        </div>

        {/* RIGHT ── label + heading + body copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={lineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF4800]"
          >
            WHO WE ARE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={lineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mb-6 text-[32px] sm:text-[40px] md:text-[50px] font-bold leading-[1.08] tracking-[-1.5px] text-[#1a1a2e] dark:text-[#f0f0f5]"
          >
            We Get It.{' '}
            <br className="hidden sm:block" />
            Because We&apos;ve Lived&nbsp;It.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={lineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="space-y-4"
          >
            <p className="text-[16px] leading-[1.8] text-[#6b7280] dark:text-[#9ca3af]">
              A small team of operators and builders who&apos;ve been through the chaos of scaling.
              We&apos;ve felt the frustration of bloated software, long implementation timelines,
              and vendors who don&apos;t understand your business.
            </p>
            <p className="text-[16px] leading-[1.8] text-[#6b7280] dark:text-[#9ca3af]">
              So we built Straveda as the antidote — an engineering-first partner that ships fast,
              stays accountable, and measures success in operational outcomes, not slide decks.
            </p>
          </motion.div>

          {/* Decorative rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={lineInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            style={{ originX: 0 }}
            className="mt-8 h-px w-16 bg-[#FF4800]"
          />
        </div>
      </div>
    </section>
  );
}
