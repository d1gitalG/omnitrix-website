import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const steps = [
  {
    step: '01',
    title: 'Scope Confirmation',
    body: 'Validate objectives, scope boundaries, site constraints, access requirements, and expected deliverables before any scheduling occurs. Ambiguities are resolved at this stage — not during field execution.',
  },
  {
    step: '02',
    title: 'Scheduling & Coordination',
    body: 'Align timelines, access windows, site contacts, and execution sequencing with all relevant parties. Documentation requirements and communication expectations are confirmed here.',
  },
  {
    step: '03',
    title: 'Field Execution',
    body: 'Onsite work executed per confirmed scope, with adherence to agreed standards and communication checkpoints. Site contacts and PM points of contact are maintained throughout.',
  },
  {
    step: '04',
    title: 'Escalation & Resolution',
    body: 'Issues surfaced and routed promptly through a defined escalation path. No silent failures. Blockers are communicated with context so decisions can be made at the right level.',
  },
  {
    step: '05',
    title: 'Documentation & Closeout',
    body: 'Structured closeout package delivered for every engagement — photos, completion notes, issue logs, and summaries aligned to client or program requirements. Handoff is clean and traceable.',
  },
];

const commStandards = [
  'Clear pre-work confirmations before any scheduling',
  'In-progress status updates based on project needs',
  'Escalation notifications for material blockers',
  'Completion reporting with required documentation',
];

const closeoutItems = [
  'Photo evidence of work completed',
  'Completion notes per site or scope area',
  'Issue logs and resolution summaries',
  'Punch-list status and sign-off materials',
  'Summary documentation for handoff and records',
];

export default function HowWeDeliver() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">How We Deliver</h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A structured delivery model built for reliable field execution. Omnitrix runs projects
            through a clear operating model so clients and partners know what to expect at each
            phase.
          </p>
        </div>
      </section>

      {/* 5-step model */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-white text-xl md:text-2xl font-bold">
            The 5-Step Delivery Model
          </h2>
          <div className="space-y-3">
            {steps.map(({ step, title, body }, i, arr) => (
              <div key={step}>
                <div className="flex gap-5 bg-black border border-neutral-800 rounded-lg p-6">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0 w-10 pt-0.5">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
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
        </div>
      </section>

      {/* Communication & Closeout standards */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Communication */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-lg mb-4">Communication Standards</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Clients and program managers receive communication at defined intervals — not only
              when something goes wrong.
            </p>
            <ul className="space-y-2">
              {commStandards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-300 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Closeout */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950">
            <h2 className="text-white font-bold text-lg mb-4">Closeout Expectations</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Every engagement ends with organized documentation. Closeout deliverables are defined
              at scope confirmation — not assembled after the fact.
            </p>
            <ul className="space-y-2">
              {closeoutItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-300 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Escalation discipline */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="border border-neutral-800 rounded-lg p-6 bg-black">
            <h2 className="text-white font-bold text-lg mb-3">Escalation Discipline</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Field issues do not stay in the field. When blockers arise — access problems,
              scope deviations, site conditions that don't match expectations — they are
              communicated quickly with context. Decision-makers receive relevant information
              in time to act, not after the window has closed.
            </p>
            <p className="text-neutral-500 text-sm italic">
              Escalation paths are confirmed during scope setup. No silent failures.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
