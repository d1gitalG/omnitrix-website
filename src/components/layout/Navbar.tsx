import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-we-deliver', label: 'How We Deliver' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/about', label: 'About' },
  { to: '/capability-statement', label: 'Capability' },
];

const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <img src="/omnilogometal.png" alt="Omnitrix" className="h-10 w-10 shrink-0 object-contain" />
          <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-green-400">
            Omnitrix
          </span>
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-1 px-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded-full after:bg-neutral-400 after:content-[""]'
                      : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <Link
            to="/contact"
            className="shrink-0 whitespace-nowrap rounded bg-green-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-600"
          >
            Start a Project
          </Link>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="whitespace-nowrap rounded bg-green-500 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-green-600"
            >
              Start a Project
            </Link>
            <button
              className="inline-flex items-center justify-center rounded border border-neutral-700 p-2 text-neutral-300 transition-colors hover:text-white"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div className="border-t border-neutral-800 bg-black">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
