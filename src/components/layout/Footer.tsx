import { ArrowUpRight, Github } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { TeamWordmark } from '../ui/TeamWordmark';

export function Footer() {
  return (
    <footer className="bg-bg-deep text-text-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-border-subtle pb-10 sm:flex-row sm:items-end">
          <div className="font-display text-4xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <TeamWordmark />
          </div>

          <a
            href={SITE_CONFIG.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border-subtle px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
          >
            <Github size={15} aria-hidden="true" />
            <span>GitHub Repository</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 font-mono text-xs text-text-secondary sm:flex-row sm:items-center">
          <span>{SITE_CONFIG.eventSubtitle}</span>
          <span>{SITE_CONFIG.eventTitle}</span>
        </div>
      </div>
    </footer>
  );
}
