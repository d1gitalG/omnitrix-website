import { Link } from 'react-router-dom';
import {
  Cable,
  Camera,
  Wifi,
  ArrowRight,
  Network,
  ClipboardCheck,
  Users,
  FileText,
  CheckCircle,
  Building2,
  Layers,
} from 'lucide-react';
import { Button } from '../components/ui/button';

const services = [
  {
    icon: <Cable className="h-7 w-7 text-green-500" />,
    title: 'Field Services',
    body: 'Onsite support, smart hands, break/fix, technician dispatch, device replacement, and verification visits.',
  },
  {
    icon: <Network className="h-7 w-7 text-green-500" />,
    title: 'Low-Voltage Installations',
    body: 'Structured cabling, cable runs and terminations, patch panels, rack-and-stack, AP mounting, and camera mounting.',
  },
  {
    icon: <Wifi className="h-7 w-7 text-green-500" />,
    title: 'Network & Telecom Support',
    body: 'Switch and router swaps, AP refreshes, closet cleanup and patching, ISP handoff, VoIP, and telecom cutover support.',
  },
  {
    icon: <FileText className="h-7 w-7 text-green-500" />,
    title: 'Surveys & Assessments',
    body: 'Pre-install site surveys, post-install validation, rack and cabling audits, photo documentation surveys, and field assessments.',
  },
  {
    icon: <Layers className="h-7 w-7 text-green-500" />,
    title: 'Rollouts & Multi-Site Projects',
    body: 'Office deployments, store rollouts, equipment refreshes, multi-wave execution, after-hours install support, and punch-list closure.',
  },
  {
    icon: <Camera className="h-7 w-7 text-green-500" />,
    title: 'AV & Security Support',
    body: 'Camera and AV mounting, access control support, IP surveillance, and deployment execution within confirmed scope.',
  },
];

const differentiators = [
  {
    icon: <ClipboardCheck className="h-6 w-6 text-green-500" />,
    title: 'Project-Managed Delivery',
    body: 'Work is coordinated with defined scope, scheduling, and communication — not assigned cold and left to self-manage.',
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Clear Communication Throughout',
    body: 'Clients and PMs receive updates at key phases. Escalations are surfaced, not buried.',
  },
  {
    icon: <FileText className="h-6 w-6 text-green-500" />,
    title: 'Documentation as a Standard Deliverable',
    body: 'Closeout materials — photos, completion notes, issue logs — are delivered consistently, not provided only on request.',
  },
  {
    icon: <Building2 className="h-6 w-6 text-green-500" />,
    title: 'Scalable for Single-Site and Multi-Site Work',
    body: 'The same 5-step delivery model applies to individual service calls and multi-wave rollout programs.',
  },
];

const processSteps = [
  { step: '01', title: 'Scope Confirmation', body: 'Validate objectives, scope boundaries, site constraints, and required outputs before any scheduling.' },
  { step: '02', title: 'Scheduling & Coordination', body: 'Align timelines, access windows, site contacts, and execution sequencing with all parties.' },
  { step: '03', title: 'Field Execution', body: 'Onsite work executed per confirmed scope, with adherence to agreed standards and communication checkpoints.' },
  { step: '04', title: 'Escalation & Resolution', body: 'Issues surfaced and routed through a defined escalation path. No silent failures.' },
  { step: '05', title: 'Documentation & Closeout', body: 'Closeout package delivered — photos, completion notes, issue logs, and summaries aligned to requirements.' },
];

export default function Home() {
  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-black px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/omnilogometal.png"
            alt="Omnitrix Logo"
            className="mx-auto mb-6 h-14 w-14 md:h-16 md:w-16 object-contain"
          />
          <h1 className="mb-5 text-white text-3xl md:text-5xl font-bold leading-tight">
            Project-Managed Low-Voltage and Field Services for IT, Telecom, AV, and Security
            Deployments
          </h1>
          <p className="mb-8 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Omnitrix helps clients and partners execute installs, service calls, surveys, and
            rollouts with structured coordination, dependable field execution, and professional
            closeout documentation.
          </p>
          <p className="mb-10 text-neutral-500 text-xs md:text-sm italic">
            Supporting Tomorrow's Infrastructure — delivering today's field work with the discipline
            future operations depend on.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
                Start a Project
              </Button>
            </Link>
            <Link to="/coverage">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 px-8 py-3 rounded-md"
              >
                Validate Scope &amp; Coverage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ────────────────────────────────────────── */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-white text-2xl md:text-3xl font-bold">
            What We Do
          </h2>
          <p className="mb-10 text-center text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Omnitrix delivers project-managed field execution from scope confirmation through
            closeout. We align schedules, site requirements, technician execution, issue escalation,
            and reporting so projects move forward with fewer surprises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map(({ icon, title, body }) => (
              <div key={title} className="border border-neutral-800 rounded-lg p-5 bg-black">
                <div className="mb-3">{icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-neutral-800 rounded-lg p-5 bg-black">
            <h3 className="text-white font-semibold text-sm mb-3">Included in Every Engagement</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Scope confirmation before scheduling',
                'Site readiness and access coordination',
                'Structured field execution and status visibility',
                'Defined escalation path',
                'Documentation and closeout aligned to requirements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-400 text-xs">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-center">
            <Link to="/services">
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500">
                View Full Service Detail
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY TEAMS CHOOSE OMNITRIX ─────────────────────────── */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-white text-2xl md:text-3xl font-bold">
            Why Teams Choose Omnitrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 border border-neutral-800 rounded-lg p-5 bg-neutral-950"
              >
                <div className="flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SNAPSHOT ──────────────────────────────────── */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-white text-2xl md:text-3xl font-bold">
            How We Deliver
          </h2>
          <p className="mb-8 text-center text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed">
            A consistent 5-step operating model from scope through closeout — so clients and
            partners know what to expect at each phase.
          </p>
          <div className="flex flex-col gap-2">
            {processSteps.map(({ step, title, body }, i, arr) => (
              <div key={step}>
                <div className="flex gap-4 bg-black border border-neutral-800 rounded-lg p-5">
                  <span className="text-green-500 font-bold text-base flex-shrink-0 w-8">{step}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowRight className="h-4 w-4 text-green-500 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/how-we-deliver">
              <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500">
                Full Delivery Model
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 rounded-md">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
