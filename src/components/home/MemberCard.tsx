import { ArrowUpRight, Github, User } from 'lucide-react';
import { motion } from 'motion/react';
import type { Member } from '../../types/member';

interface MemberCardProps {
  member: Member;
  index: number;
}

export function MemberCard({ member, index }: MemberCardProps) {
  const hasImage = Boolean(member.image && member.image.trim().length > 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      className="group flex flex-col"
    >
      {/* Borderless flat 3:4 portrait frame */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-surface-light-muted">
        {hasImage ? (
          <img
            src={member.image}
            alt={`${member.name} portrait`}
            style={{ objectPosition: member.imagePosition ?? 'center top' }}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={`Portrait placeholder for ${member.name}`}
            className="flex h-full w-full items-center justify-center bg-surface-light-muted text-ink-muted/65 transition-transform duration-300 group-hover:scale-[1.03]"
          >
            <User size={54} strokeWidth={1.35} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="mt-3.5">
        <h3 className="font-display text-base font-bold tracking-tight text-ink">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs font-semibold text-accent-primary">
          {member.role}
        </p>

        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors hover:text-accent-primary"
          >
            <Github size={12} aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
