import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, type MotionValue } from 'motion/react';
import {
  BRANCH_SEGMENTS,
  COMMIT_NODES,
  GRAPH_COLORS,
  WORKFLOW_STAGES,
  getFeatureTravelPath,
  type WorkflowStageId,
} from '../../data/gitWorkflow';

interface GitBranchArtworkProps {
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
}

const AUTO_ADVANCE_MS = 3200;
const MANUAL_PAUSE_MS = 10000;

export function GitBranchArtwork({
  parallaxX,
  parallaxY,
}: GitBranchArtworkProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<WorkflowStageId>('merge');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !isAutoPlaying) return;

    const intervalId = window.setInterval(() => {
      setActiveStage((prev) => {
        const currentIdx = WORKFLOW_STAGES.findIndex((s) => s.id === prev);
        const nextIdx = (currentIdx + 1) % WORKFLOW_STAGES.length;
        return WORKFLOW_STAGES[nextIdx].id;
      });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [isAutoPlaying, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleSelectStage = (stageId: WorkflowStageId) => {
    setActiveStage(stageId);
    setIsAutoPlaying(false);

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoPlaying(true);
    }, MANUAL_PAUSE_MS);
  };

  const stageLevel = WORKFLOW_STAGES.findIndex((s) => s.id === activeStage);
  const currentStageMeta = WORKFLOW_STAGES[stageLevel] ?? WORKFLOW_STAGES[3];
  const isActivelyAutoPlaying = !prefersReducedMotion && isAutoPlaying;

  return (
    <div className="flex w-full max-w-[440px] flex-col items-center">
      {/* Figure label above artwork */}
      <div className="mb-3 flex w-full items-center justify-between border-b border-border-subtle/80 pb-2 font-mono text-[11px] tracking-[0.18em] text-text-secondary uppercase">
        <span>FIG. 01 / COLLABORATION</span>
        <span className="text-accent-primary">{currentStageMeta.command}</span>
      </div>

      {/* Concentric circular editorial composition + Git Graph */}
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: parallaxX,
                y: parallaxY,
              }
        }
        className="relative flex aspect-square w-full max-w-[330px] items-center justify-center sm:max-w-[380px] lg:max-w-[410px]"
      >
        {/* Minimal technical guide lines */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#233A68]/50"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#233A68]/50"
        />

        {/* Concentric geometric circular layers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[92%] w-[92%] rounded-full border border-[#243C6B] bg-surface-secondary"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[74%] w-[74%] rounded-full border border-[#2C477C] bg-surface-artwork"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-[54%] w-[54%] rounded-full border border-[#243C6B]/85"
        />

        {/* Offset back/shadow SVG layer for depth */}
        <svg
          aria-hidden="true"
          viewBox="0 0 360 360"
          fill="none"
          className="pointer-events-none relative z-10 h-[86%] w-[86%] translate-x-2.5 translate-y-2.5 opacity-60"
        >
          {BRANCH_SEGMENTS.filter((seg) => stageLevel >= seg.minStage).map(
            (seg) => (
              <path
                key={`shadow-${seg.id}`}
                d={seg.d}
                stroke={GRAPH_COLORS.shadowStroke}
                strokeWidth={seg.strokeWidth}
                strokeLinecap="square"
                strokeLinejoin={seg.strokeLinejoin}
              />
            ),
          )}
        </svg>

        {/* Primary interactive Living Git Graph */}
        <motion.svg
          aria-label="Interactive Git workflow diagram: Init, Branch, Commit, and Merge"
          role="img"
          viewBox="0 0 360 360"
          fill="none"
          animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
          }
          className="pointer-events-none absolute z-20 h-[86%] w-[86%]"
        >
          {BRANCH_SEGMENTS.map((seg) => {
            const isVisible = stageLevel >= seg.minStage;
            return (
              <motion.path
                key={seg.id}
                d={seg.d}
                stroke={seg.stroke}
                strokeWidth={seg.strokeWidth}
                strokeLinecap="square"
                strokeLinejoin={seg.strokeLinejoin}
                initial={false}
                animate={{
                  pathLength: isVisible ? 1 : 0,
                  opacity: isVisible ? 1 : 0,
                }}
                transition={{
                  duration: seg.duration,
                  delay: seg.delay ?? 0,
                  ease: 'easeInOut',
                }}
              />
            );
          })}

          {/* Decorative traveling commit activity accent */}
          {!prefersReducedMotion && stageLevel >= 1 && (
            <circle
              key={`travel-${stageLevel}`}
              r="3.5"
              fill={GRAPH_COLORS.activeNodeFill}
              stroke={GRAPH_COLORS.feature}
              strokeWidth="1.5"
              opacity="0.9"
            >
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
                path={getFeatureTravelPath(stageLevel)}
              />
            </circle>
          )}

          {/* Commit nodes */}
          {COMMIT_NODES.map((node) => {
            const isVisible = stageLevel >= node.minStage;
            const isHighlighted = node.highlightOnStage === stageLevel;

            return (
              <motion.circle
                key={node.id}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={
                  isHighlighted
                    ? GRAPH_COLORS.activeNodeFill
                    : GRAPH_COLORS.idleNodeFill
                }
                stroke={node.stroke}
                strokeWidth={node.strokeWidth}
                initial={false}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: !isVisible
                    ? 0.5
                    : isHighlighted && !prefersReducedMotion
                      ? [1, 1.1, 1]
                      : 1,
                }}
                transition={
                  isHighlighted && !prefersReducedMotion
                    ? {
                        opacity: { duration: 0.25 },
                        scale: {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }
                    : { duration: 0.28, ease: 'easeOut' }
                }
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />
            );
          })}
        </motion.svg>
      </motion.div>

      {/* Caption, minimal legend, and compact stage controls */}
      <div className="mt-4 w-full space-y-3 border-t border-border-subtle/80 pt-3">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.16em] text-text-secondary uppercase">
          <span>BRANCH / COMMIT / MERGE</span>
          <div className="flex items-center gap-3 text-[10px] tracking-wider">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-accent-primary" />
              main
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-branch-blue" />
              feat
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-branch-violet" />
              sub
            </span>
          </div>
        </div>

        {/* Compact workflow stage selector */}
        <div
          role="group"
          aria-label="Select illustrative Git workflow stage"
          className="grid grid-cols-4 border border-border-subtle bg-bg-primary"
        >
          {WORKFLOW_STAGES.map((stage, idx) => {
            const active = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => handleSelectStage(stage.id)}
                aria-pressed={active}
                className={[
                  'cursor-pointer px-2 py-2 font-mono text-[11px] transition-colors',
                  idx > 0 ? 'border-l border-border-subtle' : '',
                  active
                    ? 'bg-accent-primary font-semibold text-white'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary',
                ].join(' ')}
              >
                {stage.label}
              </button>
            );
          })}
        </div>

        <p className="text-right font-mono text-[10px] tracking-wider text-text-secondary/80">
          Illustrative Git workflow ·{' '}
          {isActivelyAutoPlaying ? 'Auto' : 'Paused'}
        </p>
      </div>
    </div>
  );
}
