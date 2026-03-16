import { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const initialForm = {
  name: '',
  company: '',
  role: '',
  email: '',
  phone: '',
  engagementType: '',
  serviceCategory: '',
  locations: '',
  siteCount: '',
  timeline: '',
  scopeSummary: '',
  siteConstraints: '',
  documentationRequirements: '',
  message: '',
  botcheck: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Project Inquiry from Omnitrix.tech',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialForm);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'h-12 rounded-md border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500';
  const selectClass =
    'h-12 w-full rounded-md border border-neutral-800 bg-neutral-900 text-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black';
  const textareaClass =
    'w-full rounded-md border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  return (
    <div>
      {/* Page header */}
      <section className="bg-black px-6 py-12 md:py-16 border-b border-neutral-900">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-white text-3xl md:text-4xl font-bold">Start a Project</h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Tell us what you're deploying, where it needs to happen, and how your team wants
            communication, reporting, and closeout handled. Qualified requests receive a follow-up
            to confirm scope, coverage, and next-step planning.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">

          {/* Contact info */}
          <div className="mb-8 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:info@omnitrix.tech"
              className="flex items-center justify-center gap-2 text-white hover:text-green-400 transition-colors text-sm"
            >
              <Mail className="h-4 w-4 text-green-500" />
              info@omnitrix.tech
            </a>
            <a
              href="tel:+13022654662"
              className="flex items-center justify-center gap-2 text-white hover:text-green-400 transition-colors text-sm"
            >
              <Phone className="h-4 w-4 text-green-500" />
              (302) 265-4662
            </a>
          </div>

          {/* What happens next */}
          <div className="mb-8 border border-neutral-800 rounded-lg p-5 bg-black">
            <h3 className="text-white font-semibold text-xs mb-3 uppercase tracking-wide">
              What Happens After You Submit
            </h3>
            <ol className="space-y-1">
              {[
                'Scope and service alignment review',
                'Coverage and jurisdiction fit check',
                'Timeline and coordination assessment',
                'Documentation and closeout requirement confirmation',
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-2 text-neutral-400 text-sm">
                  <span className="text-green-500 font-bold flex-shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Name + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
              <Input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
            </div>

            {/* Role */}
            <Input type="text" placeholder="Role / Title" name="role" value={formData.role} onChange={handleChange} className={inputClass} />

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
              <Input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>

            {/* Engagement type + Service category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="engagementType" value={formData.engagementType} onChange={handleChange} className={selectClass}>
                <option value="" className="bg-neutral-900">Engagement Type</option>
                <option value="Direct Client" className="bg-neutral-900">Direct Client</option>
                <option value="Partner / White-Label" className="bg-neutral-900">Partner / White-Label</option>
                <option value="Not Sure" className="bg-neutral-900">Not Sure</option>
              </select>
              <select name="serviceCategory" value={formData.serviceCategory} onChange={handleChange} className={selectClass}>
                <option value="" className="bg-neutral-900">Service Category</option>
                <option value="Field Services" className="bg-neutral-900">Field Services</option>
                <option value="Low-Voltage Installations" className="bg-neutral-900">Low-Voltage Installations</option>
                <option value="Network & Telecom Support" className="bg-neutral-900">Network &amp; Telecom Support</option>
                <option value="Surveys & Assessments" className="bg-neutral-900">Surveys &amp; Assessments</option>
                <option value="Rollouts & Multi-Site Projects" className="bg-neutral-900">Rollouts &amp; Multi-Site Projects</option>
                <option value="AV & Security" className="bg-neutral-900">AV &amp; Security</option>
                <option value="Other / Multiple" className="bg-neutral-900">Other / Multiple</option>
              </select>
            </div>

            {/* Locations + Site count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="Location(s) / State(s)" name="locations" value={formData.locations} onChange={handleChange} className={inputClass} />
              <Input type="text" placeholder="Site Count (e.g. 1, 5, 20+)" name="siteCount" value={formData.siteCount} onChange={handleChange} className={inputClass} />
            </div>

            {/* Timeline */}
            <Input type="text" placeholder="Timeline / Target Window" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass} />

            {/* Scope summary */}
            <textarea
              placeholder="Scope Summary — describe the work, what needs to happen, and expected outputs"
              rows={4}
              name="scopeSummary"
              value={formData.scopeSummary}
              onChange={handleChange}
              className={textareaClass}
            />

            {/* Site constraints */}
            <Input type="text" placeholder="Site Constraints (access windows, escorts, safety requirements)" name="siteConstraints" value={formData.siteConstraints} onChange={handleChange} className={inputClass} />

            {/* Documentation requirements */}
            <Input type="text" placeholder="Documentation & Closeout Requirements" name="documentationRequirements" value={formData.documentationRequirements} onChange={handleChange} className={inputClass} />

            {/* Additional notes */}
            <textarea
              placeholder="Additional Notes (optional)"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={textareaClass}
            />

            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-black rounded-md font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
            </Button>

            {submitStatus === 'success' && (
              <div className="flex items-start gap-2 p-4 rounded-md border border-green-800 bg-green-950/40">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-green-400 text-sm">
                  Inquiry received. We'll follow up to confirm scope, coverage, and next steps.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Submission failed. Please try again or email us directly at{' '}
                <a href="mailto:info@omnitrix.tech" className="underline">
                  info@omnitrix.tech
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
