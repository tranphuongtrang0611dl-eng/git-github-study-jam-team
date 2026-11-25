import type { MouseEvent } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { SITE_CONFIG } from '../../data/site';
import { GitBranchArtwork } from './GitBranchArtwork';

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: 'easeOut' as const },
  },
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const parallaxX = useSpring(rawX, { stiffness: 120, damping: 24 });
  const parallaxY = useSpring(rawY, { stiffness: 120, damping: 24 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(normX * 10);
    rawY.set(normY * 10);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const handleScrollToIntro = () => {
    const target = document.getElementById('team-intro');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-bg-deep pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
    >
      {/* Layer 2: Large flat diagonal geometric surfaces on the right side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] bg-bg-primary md:block"
        style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-surface-secondary/70 lg:block"
        style={{ clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 4% 100%)' }}
      />

      {/* Layer 3: Oversized outline BUILD. typography displayed cleanly near lower edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-4 hidden font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.95] font-bold tracking-[-0.04em] text-transparent select-none [-webkit-text-stroke:1.5px_rgba(36,62,115,0.52)] sm:block lg:bottom-4 lg:left-8"
      >
        BUILD.
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
          {/* Left column (52-55%): Notion-inspired bold editorial typography */}
          <motion.div
            variants={textContainerVariants}
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            animate="visible"
            className="lg:pr-4"
          >
            <motion.p
              variants={textItemVariants}
              className="font-mono text-xs font-semibold tracking-[0.22em] text-accent-primary uppercase"
            >
              {SITE_CONFIG.eyebrow}
            </motion.p>

            <motion.h1
              variants={textItemVariants}
              className="mt-5 font-display text-[clamp(2.75rem,5.4vw,5.15rem)] leading-[0.98] font-bold tracking-[-0.03em]"
            >
              <span className="block text-text-primary">Git &amp; GitHub</span>
              <span className="block text-accent-primary">Study Jam</span>
            </motion.h1>

            <motion.p
              variants={textItemVariants}
              className="mt-6 font-display text-lg font-medium tracking-wide text-text-primary/90 sm:text-xl"
            >
              {SITE_CONFIG.eventSubtitle}
            </motion.p>

            <motion.p
              variants={textItemVariants}
              className="mt-2.5 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base"
            >
              {SITE_CONFIG.heroSupportingText}
            </motion.p>

            <motion.div variants={textItemVariants} className="mt-8">
              <button
                type="button"
                onClick={handleScrollToIntro}
                className="inline-flex cursor-pointer items-center gap-2.5 bg-accent-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-accent-secondary sm:text-base"
              >
                <span>{SITE_CONFIG.ctaLabel}</span>
                <ArrowDown size={17} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right column (45-48%): Interactive Git Graph editorial illustration */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.1, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <GitBranchArtwork parallaxX={parallaxX} parallaxY={parallaxY} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
