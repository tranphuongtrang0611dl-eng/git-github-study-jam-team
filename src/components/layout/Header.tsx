import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS, SITE_CONFIG } from '../../data/site';
import { TeamWordmark } from '../ui/TeamWordmark';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Official DSC logo + vertical divider + fastlearning wordmark */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3.5 transition-opacity hover:opacity-90 sm:gap-4"
          aria-label={`${SITE_CONFIG.clubName} — ${SITE_CONFIG.teamName} — Home`}
        >
          <img
            src={SITE_CONFIG.dscLogoPath}
            alt={`${SITE_CONFIG.clubFullName} official logo`}
            className="h-9 w-auto object-contain sm:h-10"
          />

          <span
            aria-hidden="true"
            className="hidden h-7 w-px bg-[#273E6E] sm:block"
          />

          <span className="hidden font-display text-lg font-bold tracking-tight sm:inline-flex lg:text-xl">
            <TeamWordmark />
          </span>
        </Link>

        {/* Right: Desktop Git-node timeline navigation */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <div className="relative">
            {/* Horizontal branch track connecting the 3 commit nodes */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[16.6667%] bottom-[5.25px] left-[16.6667%] h-[1.5px] bg-[#2D4575]"
            />

            <ul className="relative grid w-[312px] grid-cols-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.to} className="flex justify-center">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      [
                        'group flex flex-col items-center gap-2 text-[13px] whitespace-nowrap transition-colors duration-200',
                        isActive
                          ? 'font-semibold text-text-primary'
                          : 'font-medium text-text-secondary hover:text-text-primary',
                      ].join(' ')
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className="relative z-10 flex h-3 w-3 items-center justify-center"
                        >
                          <span className="h-2.5 w-2.5 rounded-full border-2 border-[#556E9E] bg-bg-header transition-colors group-hover:border-accent-primary/80" />
                          {isActive && (
                            <motion.span
                              layoutId="nav-active-node"
                              transition={{
                                type: 'spring',
                                stiffness: 420,
                                damping: 32,
                              }}
                              className="absolute inset-0 rounded-full bg-accent-primary"
                            />
                          )}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center border border-border-subtle bg-surface-secondary p-2 text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary md:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border-subtle bg-bg-header md:hidden"
          >
            <ul className="space-y-1 px-4 py-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      [
                        'flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-surface-secondary text-text-primary'
                          : 'text-text-secondary hover:bg-surface-secondary/60 hover:text-text-primary',
                      ].join(' ')
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          aria-hidden="true"
                          className={[
                            'rounded-full',
                            isActive
                              ? 'h-2.5 w-2.5 bg-accent-primary'
                              : 'h-2 w-2 border border-[#556E9E]',
                          ].join(' ')}
                        />
                        <span>{item.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
