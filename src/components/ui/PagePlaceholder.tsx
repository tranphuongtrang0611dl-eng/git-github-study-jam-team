import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GitBranch } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface PagePlaceholderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: ReactNode;
}

export function PagePlaceholder({
  eyebrow,
  title,
  subtitle = 'HCM-UTE DSC 2026 · fastlearning',
  description,
  icon,
}: PagePlaceholderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Page-specific mini-hero (32-40vh) */}
      <section className="flex min-h-[34vh] items-end bg-bg-deep pt-14 pb-10 text-text-primary sm:min-h-[36vh] sm:pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs font-semibold tracking-[0.22em] text-accent-primary uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-none font-bold tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 font-mono text-xs tracking-wider text-text-secondary uppercase">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Light coming soon content block */}
      <section className="bg-surface-light py-16 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: 'easeOut' }}
            className="max-w-3xl border border-border-light bg-surface-light-muted px-6 py-10 sm:px-12 sm:py-14"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center bg-ink text-accent-primary">
              {icon ?? <GitBranch size={24} aria-hidden="true" />}
            </div>

            <p className="font-mono text-lg font-semibold text-ink">
              Coming soon...
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {description}
            </p>

            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-primary"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                <span>Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
