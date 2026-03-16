import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-we-deliver', label: 'How We Deliver' },
  { to: '/coverage', label: 'Coverage & Compliance' },
  { to: '/about', label: 'About' },
  { to: '/capability-statement', label: 'Capability Statement' },
  { to: '/contact', label: 'Start a Project' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src="/omnilogometal.png"
            alt="Omnitrix"
            className="h-8 w-8 object-contain flex-shrink-0"
          />
          <span className="text-white font-semibold text-base leading-tight group-hover:text-green-400 transition-colors">
            Omnitrix
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, -1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? 'text-green-400 bg-green-950'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-black text-sm font-semibold transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-neutral-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-neutral-800 px-6 py-4 space-y-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded text-sm transition-colors ${
                  isActive
                    ? 'text-green-400 bg-green-950'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
