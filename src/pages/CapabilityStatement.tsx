import { Link } from 'react-router-dom';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const coreCapabilities = [
  { title: 'Field Execution & Onsite Support', body: 'Smart hands, break/fix, technician dispatch, device replacement, and verification — dispatched with confirmed scope and site contacts.' },
  { title: 'Project & Site Coordination', body: 'Schedule coordination, site readiness management, access window alignment, and structured status communication throughout each engagement.' },
  { title: 'Technician & Vendor Coordination', body: 'Coordination of technician dispatch and any partner or vendor activity required to complete the scope.' },
  { title: 'Low-Voltage Installations', body: 'Structured cabling, patch panels, rack-and-stack, AP mounting, and camera mounting executed to scope with photo documentation as standard.' },
  { title: 'Network & Telecom Support', body: 'Switch and router swaps, AP refreshes, closet patching, ISP handoff, VoIP, and telecom cutover coordination.' },
  { title: 'Surveys & Assessments', body: 'Pre-install surveys, post-install validation, rack and cabling audits, and photo documentation surveys with defined deliverables.' },
  { title: 'Rollout & Multi-Site Execution', body: 'Office and retail deployments, multi-wave rollouts, after-hours install support, and punch-list closure across multiple sites.' },
  { title: 'Structured Documentation & Closeout', body: 'Closeout package delivered on every engagement — photos, completion notes, issue logs, and summaries aligned to client or program requirements.' },
];

const clientProfiles = [
  'Managed Service Providers (MSPs) managing distributed client infrastructure',
  'Telecom providers and channel partners requiring regional field coverage',
  'AV companies and security integrators needing subcontract field execution',
  'Commercial clients with infrastructure deployment or refresh requirements',
  'General contractors coordinating low-voltage scopes within larger builds',
  'Facility and property management organizations',
  'Multi-site operators and rollout program managers',
];

const differentiators = [
  {
    title: 'Managed execution, not ticket dispatch',
    body: 'Projects are coordinated with defined scope, scheduling, and communication — not assigned and left to self-manage.',
  },
  {
    title: 'Communication at defined intervals',
    body: 'Clients and PMs receive updates at key phases. Escalations are surfaced, not buried.',
  },
  {
    title: 'Documentation as a standard deliverable',
    body: 'Closeout materials are organized and delivered consistently, not provided only on request.',
  },
  {
    title: 'Process consistency at scale',
    body: 'Single-site service calls and multi-wave rollout programs follow the same 5-step delivery model.',
  },
  {
    title: 'Jurisdiction-aware operations',
    body: 'Coverage, licensing, and permit requirements are reviewed and confirmed before commitment.',
  },
];

const coverageRows = [
  { geo: 'Maryland', status: 'Primary operating base' },
  { geo: 'Virginia (Northern)', status: 'Active expansion lane; evaluated per project' },
  { geo: 'Washington, DC', status: 'Scoped selectively; compliance confirmed before commitment' },
];

export default function CapabilityStatement() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">Capability Statement</h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-2">
            <strong className="text-white">Supporting Tomorrow's Infrastructure</strong>
          </p>
          <p className="text-neutral-500 text-sm italic mb-6">
            Structured Field Execution. Reliable Closeout. Every Engagement.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Omnitrix is a project-managed low-voltage and field services company operating in the
            Maryland/DC/Northern Virginia region. We provide structured, coordinated field execution
            for IT, telecom, AV, and security deployments — from scope confirmation through
            documented closeout.
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-white text-xl md:text-2xl font-bold">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreCapabilities.map(({ title, body }) => (
              <div key={title} className="border border-neutral-800 rounded-lg p-5 bg-black">
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model summary */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-lg mb-4">Delivery Model</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Every engagement follows a consistent 5-step delivery model:
            </p>
            <ol className="space-y-3">
              {[
                ['Scope Confirmation', 'Validate objectives, site constraints, access requirements, and expected deliverables before any scheduling.'],
                ['Scheduling and Coordination', 'Align timelines, access windows, site contacts, and sequencing with all relevant parties.'],
                ['Field Execution', 'Onsite work executed per confirmed scope, with communication checkpoints.'],
                ['Escalation and Resolution', 'Issues surfaced and routed through a defined escalation path — no silent failures.'],
                ['Documentation and Closeout', 'Structured closeout package delivered for every engagement.'],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-3">
                  <span className="text-green-500 font-bold text-sm flex-shrink-0 w-5 pt-0.5">{i + 1}.</span>
                  <div>
                    <span className="text-white text-sm font-medium">{title}</span>
                    <span className="text-neutral-400 text-sm"> — {desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-white text-xl md:text-2xl font-bold">
            Differentiators
          </h2>
          <div className="space-y-3">
            {differentiators.map(({ title, body }) => (
              <div key={title} className="flex gap-3 border border-neutral-800 rounded-lg p-4 bg-black">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white text-sm font-medium">{title}</span>
                  <span className="text-neutral-400 text-sm"> — {body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client profiles + coverage */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client profiles */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-base mb-4">Qualified Client & Partner Types</h2>
            <ul className="space-y-2">
              {clientProfiles.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-400 text-xs">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-base mb-4">Primary Coverage Area</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="pb-2 text-left text-neutral-400 font-medium text-xs">Geography</th>
                  <th className="pb-2 text-left text-neutral-400 font-medium text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {coverageRows.map(({ geo, status }) => (
                  <tr key={geo} className="border-b border-neutral-800">
                    <td className="py-2.5 text-neutral-200 text-xs font-medium">{geo}</td>
                    <td className="py-2.5 text-neutral-400 text-xs">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-neutral-500 text-xs italic">
              Coverage availability and permit-sensitive scope requirements are reviewed during
              initial scope confirmation.
            </p>
          </div>
        </div>

        {/* Engagement process */}
        <div className="mx-auto max-w-4xl mt-6">
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-base mb-4">To Initiate a Scope Review</h2>
            <ol className="space-y-2">
              {[
                'Describe the project type, location(s), and site count',
                'Note documentation, reporting, or closeout requirements',
                'Indicate timeline constraints or program dependencies',
                'Specify whether engagement is direct client or partner-program context',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-2 text-neutral-400 text-sm">
                  <span className="text-green-500 font-bold flex-shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
              Start a Project
            </Button>
          </Link>
          <a href="mailto:info@omnitrix.tech?subject=Capability Statement Request">
            <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 px-8 py-3 rounded-md gap-2">
              <Download className="h-4 w-4" />
              Request Capability Statement
            </Button>
          </a>
        </div>

        <div className="mx-auto max-w-4xl mt-6 text-center">
          <p className="text-neutral-600 text-xs italic">
            Omnitrix — Supporting Tomorrow's Infrastructure · Maryland / DC / Northern Virginia
          </p>
        </div>
      </section>
    </div>
  );
}
