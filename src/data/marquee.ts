import {
  BookOpen,
  CodeXml,
  GitCommitHorizontal,
  GitMerge,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface MarqueeItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { id: 'learn-fast', label: 'Learn fast', icon: BookOpen },
  { id: 'commit-often', label: 'Commit often', icon: GitCommitHorizontal },
  { id: 'build-together', label: 'Build together', icon: Users },
  { id: 'grow-as-one', label: 'Grow as one', icon: TrendingUp },
  { id: 'think-dev', label: 'Think like a developer', icon: CodeXml },
  { id: 'five-minds', label: 'Five minds, one vision', icon: GitMerge },
];
