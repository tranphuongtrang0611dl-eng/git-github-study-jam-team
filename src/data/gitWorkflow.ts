export type WorkflowStageId = 'init' | 'branch' | 'commit' | 'merge';

export interface WorkflowStage {
  id: WorkflowStageId;
  label: string;
  command: string;
}

export interface BranchSegmentSpec {
  id: string;
  d: string;
  stroke: string;
  strokeWidth: number;
  strokeLinejoin?: 'miter' | 'round' | 'bevel';
  minStage: number;
  duration: number;
  delay?: number;
}

export interface CommitNodeSpec {
  id: string;
  cx: number;
  cy: number;
  r: number;
  stroke: string;
  strokeWidth: number;
  minStage: number;
  highlightOnStage?: number;
}

export const GRAPH_COLORS = {
  main: '#F15D24',
  feature: '#3B82F6',
  support: '#7564F0',
  activeNodeFill: '#F8FAFC',
  idleNodeFill: '#132445',
  shadowStroke: '#0C1939',
} as const;

export const WORKFLOW_STAGES: readonly WorkflowStage[] = [
  { id: 'init', label: 'Init', command: 'git init' },
  { id: 'branch', label: 'Branch', command: 'git switch -c feat' },
  { id: 'commit', label: 'Commit', command: 'git commit -m "..."' },
  { id: 'merge', label: 'Merge', command: 'git merge feat' },
] as const;

const FEATURE_DIVERGE_PATH = 'M96 242 H166 L204 204 V178';
const FEATURE_COMMITS_PATH = 'M204 178 V114';
const FEATURE_MERGE_PATH = 'M204 114 L168 78 H96';

// Coherent simplified Git DAG paths (existing commits remain anchored in place)
export const BRANCH_SEGMENTS: readonly BranchSegmentSpec[] = [
  // Stage 0: Init
  {
    id: 'main-init',
    d: 'M96 312 V242',
    stroke: GRAPH_COLORS.main,
    strokeWidth: 13,
    minStage: 0,
    duration: 0.45,
  },
  // Stage 1: Branch
  {
    id: 'main-branch',
    d: 'M96 242 V186',
    stroke: GRAPH_COLORS.main,
    strokeWidth: 13,
    minStage: 1,
    duration: 0.4,
  },
  {
    id: 'feature-diverge',
    d: FEATURE_DIVERGE_PATH,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 11,
    strokeLinejoin: 'miter',
    minStage: 1,
    duration: 0.5,
  },
  {
    id: 'support-diverge',
    d: 'M204 204 H244 L276 172 V148',
    stroke: GRAPH_COLORS.support,
    strokeWidth: 11,
    strokeLinejoin: 'miter',
    minStage: 1,
    duration: 0.5,
    delay: 0.08,
  },
  // Stage 2: Commit
  {
    id: 'main-commit',
    d: 'M96 186 V118',
    stroke: GRAPH_COLORS.main,
    strokeWidth: 13,
    minStage: 2,
    duration: 0.4,
  },
  {
    id: 'feature-commits',
    d: FEATURE_COMMITS_PATH,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 11,
    minStage: 2,
    duration: 0.45,
  },
  {
    id: 'support-commit',
    d: 'M276 148 V102',
    stroke: GRAPH_COLORS.support,
    strokeWidth: 11,
    minStage: 2,
    duration: 0.45,
    delay: 0.08,
  },
  // Stage 3: Merge
  {
    id: 'main-merge',
    d: 'M96 118 V52',
    stroke: GRAPH_COLORS.main,
    strokeWidth: 13,
    minStage: 3,
    duration: 0.4,
  },
  {
    id: 'feature-merge',
    d: FEATURE_MERGE_PATH,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 11,
    strokeLinejoin: 'miter',
    minStage: 3,
    duration: 0.5,
  },
  {
    id: 'support-merge',
    d: 'M276 102 L248 74 H168',
    stroke: GRAPH_COLORS.support,
    strokeWidth: 11,
    strokeLinejoin: 'miter',
    minStage: 3,
    duration: 0.5,
    delay: 0.08,
  },
];

export const COMMIT_NODES: readonly CommitNodeSpec[] = [
  {
    id: 'c0',
    cx: 96,
    cy: 312,
    r: 13,
    stroke: GRAPH_COLORS.main,
    strokeWidth: 7,
    minStage: 0,
  },
  {
    id: 'c1',
    cx: 96,
    cy: 242,
    r: 12,
    stroke: GRAPH_COLORS.main,
    strokeWidth: 7,
    minStage: 0,
    highlightOnStage: 0,
  },
  {
    id: 'c2',
    cx: 96,
    cy: 186,
    r: 11,
    stroke: GRAPH_COLORS.main,
    strokeWidth: 6,
    minStage: 1,
  },
  {
    id: 'f0',
    cx: 204,
    cy: 178,
    r: 11,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 6,
    minStage: 1,
    highlightOnStage: 1,
  },
  {
    id: 's0',
    cx: 276,
    cy: 148,
    r: 10,
    stroke: GRAPH_COLORS.support,
    strokeWidth: 6,
    minStage: 1,
  },
  {
    id: 'c3',
    cx: 96,
    cy: 118,
    r: 11,
    stroke: GRAPH_COLORS.main,
    strokeWidth: 6,
    minStage: 2,
  },
  {
    id: 'f1',
    cx: 204,
    cy: 146,
    r: 10,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 6,
    minStage: 2,
  },
  {
    id: 'f2',
    cx: 204,
    cy: 114,
    r: 11,
    stroke: GRAPH_COLORS.feature,
    strokeWidth: 6,
    minStage: 2,
    highlightOnStage: 2,
  },
  {
    id: 's1',
    cx: 276,
    cy: 102,
    r: 10,
    stroke: GRAPH_COLORS.support,
    strokeWidth: 6,
    minStage: 2,
    highlightOnStage: 2,
  },
  {
    id: 'm1',
    cx: 96,
    cy: 52,
    r: 15,
    stroke: GRAPH_COLORS.main,
    strokeWidth: 8,
    minStage: 3,
    highlightOnStage: 3,
  },
];

export function getFeatureTravelPath(stageLevel: number): string {
  if (stageLevel >= 3) {
    return `${FEATURE_DIVERGE_PATH} ${FEATURE_COMMITS_PATH} ${FEATURE_MERGE_PATH}`;
  }
  if (stageLevel >= 2) {
    return `${FEATURE_DIVERGE_PATH} ${FEATURE_COMMITS_PATH}`;
  }
  return FEATURE_DIVERGE_PATH;
}
