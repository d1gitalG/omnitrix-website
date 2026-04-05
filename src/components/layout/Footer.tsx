import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-6 py-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:items-start md:text-left">
          <div>
            <p className="text-neutral-300 text-xs font-semibold uppercase tracking-[0.18em]">Pages</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/how-we-deliver" className="hover:text-white transition-colors">How We Deliver</Link>
              <Link to="/coverage" className="hover:text-white transition-colors">Coverage &amp; Compliance</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/capability-statement" className="hover:text-white transition-colors">Capability Statement</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Start a Project</Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/omnilogometal.png"
              alt="Omnitrix"
              className="h-14 w-14 object-contain"
            />
            <p className="mt-2 text-white text-xl font-bold tracking-tight">Omnitrix</p>
            <p className="mt-1 text-neutral-400 text-xs leading-relaxed max-w-[180px]">Supporting Tomorrow's Infrastructure</p>
          </div>

          <div>
            <p className="text-neutral-300 text-xs font-semibold uppercase tracking-[0.18em]">Contact &amp; Coverage</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-neutral-400">
              <a
                href="mailto:info@omnitrix.tech"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors md:justify-start"
              >
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                info@omnitrix.tech
              </a>
              <a
                href="tel:+13022654662"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors md:justify-start"
              >
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                (302) 265-4662
              </a>
              <div className="pt-1 space-y-1 text-neutral-400">
                <p>Maryland</p>
                <p>Northern Virginia</p>
                <p>Washington, DC</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-4 flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-neutral-400 text-xs">
            Scope and coverage are confirmed per project and jurisdiction.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 md:justify-end">
            <Link to="/coverage" className="hover:text-white transition-colors">Coverage</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-neutral-500">© Omnitrix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
