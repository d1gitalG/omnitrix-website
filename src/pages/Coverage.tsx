import { Link } from 'react-router-dom';
import { MapPin, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const regions = [
  {
    region: 'Maryland',
    status: 'Primary Operating Base',
    note: 'Core coverage area. Most scope types are evaluated on inquiry. Scope fit confirmed during intake.',
    color: 'text-green-400',
    borderColor: 'border-green-900',
    bgColor: 'bg-green-950/20',
    mapPinColor: 'text-green-500',
  },
  {
    region: 'Virginia (Northern VA)',
    status: 'Active Expansion Lane',
    note: 'Coverage evaluated per project. Scope and jurisdiction fit confirmed before commitment.',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-900',
    bgColor: 'bg-yellow-950/10',
    mapPinColor: 'text-yellow-500',
  },
  {
    region: 'Washington, DC',
    status: 'Scoped Selectively',
    note: 'Compliance and permit requirements confirmed before any commitment. May be partner-led depending on scope.',
    color: 'text-neutral-400',
    borderColor: 'border-neutral-700',
    bgColor: 'bg-neutral-900',
    mapPinColor: 'text-neutral-400',
  },
];

const scopeCategories = [
  {
    category: 'Low-Voltage Installations',
    note: 'Scope evaluated per jurisdiction. Permit requirements reviewed before commitment.',
  },
  {
    category: 'Structured Cabling',
    note: 'Standard scope in MD primary area. VA and DC evaluated per project.',
  },
  {
    category: 'Network Equipment Swaps',
    note: 'Generally available in primary coverage area. Scope confirmed per engagement.',
  },
  {
    category: 'Site Surveys & Assessments',
    note: 'Available across MD/VA/DC coverage areas. Logistics and access confirmed per project.',
  },
  {
    category: 'AV & Security Support',
    note: 'Scope confirmed per project. Licensing and permit requirements reviewed before commitment.',
  },
  {
    category: 'Rollouts & Multi-Site',
    note: 'Evaluated per program. Coverage availability confirmed for each site.',
  },
];

export default function Coverage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">
            Coverage &amp; Compliance
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Omnitrix provides project-managed field services based on confirmed scope fit,
            jurisdiction readiness, and delivery availability. Coverage, licensing, and
            permit-sensitive scope requirements are reviewed during initial scope confirmation.
          </p>
        </div>
      </section>

      {/* Regional coverage */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-white text-xl md:text-2xl font-bold">
            Regional Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {regions.map(({ region, status, note, color, borderColor, bgColor, mapPinColor }) => (
              <div key={region} className={`border ${borderColor} rounded-lg p-5 ${bgColor}`}>
                <MapPin className={`h-6 w-6 ${mapPinColor} mb-3`} />
                <h3 className="text-white font-semibold text-base mb-1">{region}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${color}`}>
                  {status}
                </p>
                <p className="text-neutral-400 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          {/* Why this matters */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-black">
            <h3 className="text-white font-semibold text-base mb-3">Why This Matters</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-3">
              Permit-sensitive, license-sensitive, and jurisdiction-specific scopes are reviewed
              before commitment. Final execution is confirmed per project. Clear scope and
              jurisdiction validation protects delivery quality, timeline reliability, and
              project compliance expectations.
            </p>
            <div className="flex items-start gap-2 mt-4 p-3 border border-neutral-700 rounded-md bg-neutral-900">
              <AlertCircle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400 text-xs leading-relaxed">
                Omnitrix does not make blanket licensing claims across all jurisdictions. Scope fit
                and compliance readiness are confirmed on a per-project basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope by category */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-white text-xl md:text-2xl font-bold">
            Scope Availability by Category
          </h2>
          <div className="border border-neutral-800 rounded-lg bg-neutral-950 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-black">
                  <th className="px-5 py-3 text-left text-neutral-400 font-semibold text-xs uppercase tracking-wide">
                    Service Category
                  </th>
                  <th className="px-5 py-3 text-left text-neutral-400 font-semibold text-xs uppercase tracking-wide">
                    Coverage Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {scopeCategories.map(({ category, note }, i) => (
                  <tr
                    key={category}
                    className={`border-b border-neutral-800 ${i % 2 === 0 ? 'bg-neutral-950' : 'bg-black'}`}
                  >
                    <td className="px-5 py-3 text-neutral-200 text-xs font-medium">{category}</td>
                    <td className="px-5 py-3 text-neutral-400 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link to="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
                Validate Scope &amp; Coverage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
