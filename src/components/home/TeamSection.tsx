import { TEAM_MEMBERS } from '../../data/members';
import { MemberCard } from './MemberCard';

export function TeamSection() {
  return (
    <section className="bg-surface-light pt-12 pb-16 text-ink sm:pt-16 sm:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent-primary uppercase">
            02 / Our Team
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            Meet the fastlearners.
          </h2>
          <p className="mt-3 text-base text-ink-muted">
            Five minds. One shared journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {TEAM_MEMBERS.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
