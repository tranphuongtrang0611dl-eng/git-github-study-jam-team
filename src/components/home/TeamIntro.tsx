import { Users } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../../data/site';
import { TeamWordmark } from '../ui/TeamWordmark';

export function TeamIntro() {
  const hasTeamPhoto = SITE_CONFIG.teamPhotoPath.trim().length > 0;

  return (
    <section
      id="team-intro"
      className="scroll-mt-16 bg-surface-light pt-16 pb-12 text-ink sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
        >
          {/* Left column: Flat 16:10 Group Photo */}
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] w-full overflow-hidden bg-surface-light-muted">
              {hasTeamPhoto ? (
                <img
                  src={SITE_CONFIG.teamPhotoPath}
                  alt={SITE_CONFIG.teamPhotoAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Group photograph placeholder for team fastlearning"
                  className="flex h-full w-full flex-col items-center justify-center gap-3 border border-border-light bg-surface-light-muted p-6 text-center"
                >
                  <Users
                    size={36}
                    strokeWidth={1.5}
                    className="text-ink-muted"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs font-semibold tracking-[0.22em] text-ink-muted uppercase">
                    Group Photo
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right column: Editorial team identity */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent-primary uppercase">
              01 / Who We Are
            </p>

            <p className="mt-5 font-mono text-xs font-medium tracking-[0.2em] text-ink-muted uppercase">
              Hello, we are
            </p>

            <h2 className="mt-1.5 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              <TeamWordmark prefixClassName="text-ink" />
            </h2>

            <p className="mt-5 font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
              {SITE_CONFIG.sloganLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <p className="mt-4 text-sm font-medium text-ink-muted">
              {SITE_CONFIG.teamStats}
            </p>

            <div className="mt-6 inline-block border border-border-light bg-surface-light-muted px-3 py-1.5 font-mono text-xs text-ink">
              {SITE_CONFIG.gitCommitNote}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
