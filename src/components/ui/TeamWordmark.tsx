import { SITE_CONFIG } from '../../data/site';

interface TeamWordmarkProps {
  prefixClassName?: string;
}

export function TeamWordmark({
  prefixClassName = 'text-text-primary',
}: TeamWordmarkProps) {
  return (
    <>
      <span className={prefixClassName}>{SITE_CONFIG.teamNamePrefix}</span>
      <span className="text-accent-primary">{SITE_CONFIG.teamNameAccent}</span>
    </>
  );
}
