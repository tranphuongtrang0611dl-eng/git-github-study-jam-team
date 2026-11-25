import { MARQUEE_ITEMS, type MarqueeItem } from '../../data/marquee';

// 1 primary list + 5 visual duplicates = 6 total sets (3 sets per -50% loop half)
const DUPLICATE_TRACK_COPIES = [1, 2, 3, 4, 5] as const;
const TRACK_LIST_CLASS =
  'flex shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12';

function MarqueeItemNode({ item }: { item: MarqueeItem }) {
  const Icon = item.icon;
  return (
    <li className="flex shrink-0 items-center gap-2 whitespace-nowrap">
      <Icon
        size={16}
        strokeWidth={1.75}
        className="shrink-0 text-marquee-icon"
        aria-hidden="true"
      />
      <span className="font-sans text-[13px] font-medium tracking-[-0.01em] text-marquee-text sm:text-sm">
        {item.label}
      </span>
    </li>
  );
}

export function TeamMarquee() {
  return (
    <section
      aria-label="Team engineering values"
      className="w-full overflow-hidden bg-surface-light"
    >
      <div className="group relative flex min-h-11 w-full items-center py-2.5 sm:min-h-12 sm:py-3">
        {/* Left & right viewport edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-light to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-light to-transparent sm:w-24"
        />

        {/* Scrolling track (pauses on hover or prefers-reduced-motion) */}
        <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
          <ul className={TRACK_LIST_CLASS}>
            {MARQUEE_ITEMS.map((item) => (
              <MarqueeItemNode key={`primary-${item.id}`} item={item} />
            ))}
          </ul>

          {DUPLICATE_TRACK_COPIES.map((copyIndex) => (
            <ul
              key={`copy-${copyIndex}`}
              aria-hidden="true"
              className={`marquee-duplicate ${TRACK_LIST_CLASS}`}
            >
              {MARQUEE_ITEMS.map((item) => (
                <MarqueeItemNode
                  key={`copy-${copyIndex}-${item.id}`}
                  item={item}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
