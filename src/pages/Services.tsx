import { Link } from 'react-router-dom';
import {
  Cable,
  Camera,
  Wifi,
  Network,
  FileText,
  CheckCircle,
  Layers,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/button';

const categories = [
  {
    icon: <Cable className="h-8 w-8 text-green-500" />,
    title: 'Field Services',
    intro:
      'Onsite support for IT, telecom, AV, and security environments. Engagements are dispatched with confirmed scope, site contacts, and documented expectations.',
    items: [
      'Smart hands and remote hands support',
      'Break/fix support and onsite troubleshooting',
      'Technician dispatch and verification visits',
      'Device replacement and swap support',
      'Rack verification and label audits',
    ],
  },
  {
    icon: <Network className="h-8 w-8 text-green-500" />,
    title: 'Low-Voltage Installations',
    intro:
      'Structured cabling and mounting work executed to scope. Photo documentation is standard on all installation engagements.',
    items: [
      'Structured cabling, cable runs, and terminations',
      'Patch panels, jacks, and faceplates',
      'Rack-and-stack and rack cleanup and labeling',
      'AP mounting and positioning',
      'Camera mounting within confirmed scope',
    ],
  },
  {
    icon: <Wifi className="h-8 w-8 text-green-500" />,
    title: 'Network & Telecom Support',
    intro:
      'Equipment swaps, refresh support, and cutover coordination. Scope and access requirements are confirmed before scheduling.',
    items: [
      'Switch and router swaps',
      'AP refresh and access point replacements',
      'MDF/IDF closet cleanup and patching',
      'ISP handoff and circuit support',
      'VoIP and telecom cutover coordination',
    ],
  },
  {
    icon: <FileText className="h-8 w-8 text-green-500" />,
    title: 'Surveys & Assessments',
    intro:
      'Field documentation and assessment services with defined deliverables established at engagement start.',
    items: [
      'Pre-install site surveys',
      'Post-install validation and verification',
      'Rack and cabling audits',
      'Photo documentation surveys',
      'Field assessments for planning and scoping',
    ],
  },
  {
    icon: <Layers className="h-8 w-8 text-green-500" />,
    title: 'Rollouts & Multi-Site Projects',
    intro:
      'Consistent execution across multiple sites and waves. The same delivery model applied regardless of volume.',
    items: [
      'Office deployments and technology refresh projects',
      'Retail and commercial store rollouts',
      'Multi-wave deployment execution',
      'After-hours and weekend install support',
      'Punch-list closure and sign-off coordination',
    ],
  },
  {
    icon: <Camera className="h-8 w-8 text-green-500" />,
    title: 'AV & Security Support',
    intro:
      'Mounting and deployment support for AV and security systems within confirmed and licensed scope.',
    items: [
      'Camera mounting and positioning',
      'Access control system support',
      'IP surveillance deployment support',
      'AV equipment mounting and cable management',
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: 'Partner Support',
    intro:
      'Field execution support for MSPs, integrators, and rollout partners that need structured subcontract delivery. Partner engagements follow the same coordination and closeout standards as all other work.',
    items: [
      'Scope and standards aligned before scheduling',
      'Execution coordinated to partner timelines',
      'Onsite representation to client-safe professional standards',
      'Documentation delivered in partner-required format',
      'Escalations follow agreed communication paths',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">Services</h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Omnitrix provides project-managed low-voltage and field services for IT, telecom, AV,
            and security deployments. Services are delivered through structured coordination,
            accountable field execution, and clean closeout.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          {categories.map(({ icon, title, intro, items }) => (
            <div key={title} className="border border-neutral-800 rounded-lg bg-black overflow-hidden">
              <div className="px-6 py-5 border-b border-neutral-800 flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h2 className="text-white font-bold text-lg mb-1">{title}</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">{intro}</p>
                </div>
              </div>
              <ul className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-neutral-400 text-xs">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Included in every engagement */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-lg mb-4">Included in Every Engagement</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Scope confirmation before scheduling',
                'Site readiness and access coordination',
                'Structured field execution and status visibility',
                'Defined escalation path for blockers and issues',
                'Documentation and closeout aligned to requirements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-300 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
                Start a Project
              </Button>
            </Link>
            <Link to="/coverage">
              <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 px-8 py-3 rounded-md">
                Validate Scope &amp; Coverage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
