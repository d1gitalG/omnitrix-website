import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-we-deliver', label: 'How We Deliver' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/about', label: 'About' },
  { to: '/capability-statement', label: 'Capability' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/85">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-3 shrink-0 mr-2">
          <img
            src="/omnilogometal.png"
            alt="Omnitrix"
            className="h-8 w-8 shrink-0 object-contain"
          />
          <span className="truncate text-base font-semibold leading-tight text-white transition-colors group-hover:text-green-400">
            Omnitrix
          </span>
        </Link>

        <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
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

        <Link
          to="/contact"
          className="ml-auto shrink-0 whitespace-nowrap rounded bg-green-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-600"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
