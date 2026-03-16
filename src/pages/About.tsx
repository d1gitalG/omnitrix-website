import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const operatingPrinciples = [
  {
    title: 'Scope before scheduling',
    body: 'Nothing moves to field without confirmed scope. Ambiguities and site constraints are resolved upfront.',
  },
  {
    title: 'Communication at defined intervals',
    body: 'Clients and program managers receive updates at key phases. Issues surface through a defined escalation path.',
  },
  {
    title: 'Documentation as a standard deliverable',
    body: 'Closeout materials — photos, completion notes, issue logs — are part of every engagement, not available on request.',
  },
  {
    title: 'Jurisdiction-aware scoping',
    body: 'Permit-sensitive and license-sensitive scopes are validated before commitment. Omnitrix does not overclaim coverage.',
  },
];

export default function About() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">About Omnitrix</h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A project-managed low-voltage and field services company built on a simple standard:
            field work should be coordinated, documented, and accountable from kickoff through
            closeout.
          </p>
        </div>
      </section>

      {/* Company overview */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28">
              <img
                src="/omnilogometal.png"
                alt="Omnitrix Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-4 text-white text-2xl md:text-3xl font-bold">
                Built on Execution Discipline
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Omnitrix supports IT, telecom, AV, and security deployments through structured field
                execution, project coordination, and professional closeout documentation. We operate
                in the Maryland, Northern Virginia, and DC metro area.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                <span className="text-green-400 font-medium">Supporting Tomorrow's Infrastructure</span>{' '}
                means executing today's projects with the structure and discipline that keep systems
                stable, supportable, and ready to scale. That standard applies to a single
                service call and a fifty-site rollout program the same way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating philosophy */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-white text-xl md:text-2xl font-bold">
            Operating Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {operatingPrinciples.map(({ title, body }) => (
              <div key={title} className="border border-neutral-800 rounded-lg p-5 bg-neutral-950">
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What clients can expect */}
      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="border border-neutral-800 rounded-lg p-6 bg-black">
            <h2 className="text-white font-bold text-lg mb-5">What Clients and Partners Can Expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Clear coordination from planning through completion',
                'Professional communication and issue visibility',
                'Structured delivery model, every engagement',
                'Organized documentation and closeout',
                'Jurisdiction-aware scoping and execution',
                'Consistent standards for single-site and multi-site work',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md">
                Start a Project
              </Button>
            </Link>
            <Link to="/capability-statement">
              <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-400 px-8 py-3 rounded-md">
                View Capability Statement
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
