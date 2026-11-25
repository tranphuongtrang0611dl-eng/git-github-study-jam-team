export interface NavItem {
  label: string;
  to: string;
}

export const SITE_CONFIG = {
  clubName: 'HCM-UTE DSC',
  clubFullName: 'HCMUTE Developer Student Club',
  eventTitle: 'Git & GitHub Study Jam',
  eventSubtitle: 'HCM-UTE DSC 2026',
  heroSupportingText: 'Five minds. One team. A shared journey.',
  eyebrow: 'GIT & GITHUB / WEEK 01',
  ctaLabel: 'Explore the Team',
  teamName: 'fastlearning',
  teamNamePrefix: 'fast',
  teamNameAccent: 'learning',
  slogan: 'Learn fast. Build together.',
  sloganLines: ['Learn fast.', 'Build together.'] as const,
  teamStats: '5 members · 1 team',
  gitCommitNote: 'git commit -m "grow together"',
  githubRepoUrl:
    'https://github.com/tranphuongtrang0611dl-eng/git-github-study-jam-team',
  dscLogoPath: './images/dsc-logo.png',
  // Set teamPhotoPath to './images/team-photo.jpg' once the real group photo is added.
  teamPhotoPath: '' as string,
  teamPhotoAlt: 'fastlearning team group photograph — HCM-UTE DSC 2026',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];
