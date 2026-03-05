import { Cable, Camera, Wifi, Phone, ArrowRight, Mail } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { useState, useEffect } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    jobAddress: '',
    message: '',
    // Honeypot field (should remain empty)
    botcheck: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Set document title and favicon
  useEffect(() => {
    document.title = 'Omnitrix | Supporting Tomorrow\'s Infrastructure';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/favi32.png';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: "New Contact Form Submission from Omnitrix.tech",

            name: formData.name,
            email: formData.email,
            serviceType: formData.serviceType || undefined,
            jobAddress: formData.jobAddress || undefined,
            message: formData.message,

            // Web3Forms honeypot
            botcheck: formData.botcheck,
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          serviceType: "",
          jobAddress: "",
          message: "",
          botcheck: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="dark min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/omnilogometal.png"
            alt="Omnitrix Logo"
            className="mx-auto mb-6 h-24 w-24 md:h-32 md:w-32 object-contain"
          />
          <h1 className="mb-4 text-white text-4xl md:text-5xl font-bold leading-tight">
            Supporting Tomorrow's Infrastructure
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Precision low-voltage and IT solutions designed for
            the modern enterprise. From structured cabling to
            smart systems—we deliver infrastructure that scales.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-white text-3xl md:text-4xl font-bold">
            What We Do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {/* Service 1 */}
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Cable className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
              <h3 className="mb-2 text-white text-sm md:text-base font-semibold">
                Structured Cabling
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Cat5e/6/6A, fiber optic installation, patch
                panel termination, cable management systems
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Camera className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
              <h3 className="mb-2 text-white text-sm md:text-base font-semibold">
                Security Cameras
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                IP surveillance, NVR configuration, access
                control integration
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Wifi className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
              <h3 className="mb-2 text-white text-sm md:text-base font-semibold">
                Wi-Fi & Networking
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Enterprise wireless design, Ekahau site surveys,
                UniFi and Meraki deployments
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <Phone className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div>
              <h3 className="mb-2 text-white text-sm md:text-base font-semibold">
                VoIP & Phone Systems
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Cloud PBX setup, SIP trunking, handset
                provisioning
              </p>
            </div>
          </div>

          <p className="text-center text-neutral-400 text-xs md:text-sm">
            Delivering excellence across every engagement.
          </p>
        </div>
      </section>

      {/* Training Pipeline Section */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-white text-3xl md:text-4xl font-bold">
            Training Pipeline
          </h2>
          <p className="mb-8 text-center text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We don't just deploy technicians—we build them.
            Every Omnitrix tech goes through a rigorous,
            hands-on training program designed to produce
            field-ready professionals.
          </p>

          {/* Pipeline visualization */}
          <div className="mb-10 flex items-center justify-center gap-3 md:gap-6">
            <div className="text-center">
              <p className="text-white text-xs md:text-sm font-medium">
                Training
              </p>
            </div>

            <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0" />

            <div className="text-center">
              <p className="text-white text-xs md:text-sm font-medium">
                Certification
              </p>
            </div>

            <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0" />

            <div className="text-center">
              <p className="text-white text-xs md:text-sm font-medium">
                Deployment
              </p>
            </div>
          </div>

          {/* Stage descriptions */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="mb-2 text-white font-semibold text-sm md:text-base">
                Stage 1: Training
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Intensive coursework covering cabling standards,
                termination techniques, network fundamentals,
                and safety protocols.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-white font-semibold text-sm md:text-base">
                Stage 2: Certification
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Industry-recognized credentials including BICSI
                Installer 1, Fiber Optics, and vendor-specific
                certifications.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-white font-semibold text-sm md:text-base">
                Stage 3: Deployment
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Field assignments with ongoing mentorship,
                real-world problem solving, and continuous skill
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <img
                src="/omnilogometal.png"
                alt="Omnitrix Logo"
                className="h-32 w-32 md:h-40 md:w-40 object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-3 text-white text-2xl md:text-3xl font-bold">
                Built with Purpose
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Omnitrix is built on the belief that
                infrastructure work should be skilled,
                respected, and future-ready. We train and deploy
                technicians who treat every install like it
                matters—because it does. Quality over shortcuts.
                People over platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-center text-white text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>

          {/* Contact Info */}
          <div className="mb-8 flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-green-500" />
              <a
                href="mailto:info@omnitrix.tech"
                className="text-white hover:text-green-500 transition-colors"
              >
                info@omnitrix.tech
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-green-500" />
              <a
                href="tel:+13022654662"
                className="text-white hover:text-green-500 transition-colors"
              >
                (302) 265-4662
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-md border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 rounded-md border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      serviceType: e.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-md border border-neutral-800 bg-neutral-900 text-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <option value="" className="bg-neutral-900">
                    Service Type (optional)
                  </option>
                  <option value="Structured Cabling" className="bg-neutral-900">
                    Structured Cabling
                  </option>
                  <option value="Security Cameras" className="bg-neutral-900">
                    Security Cameras
                  </option>
                  <option value="Wi-Fi & Networking" className="bg-neutral-900">
                    Wi-Fi & Networking
                  </option>
                  <option value="VoIP & Phone Systems" className="bg-neutral-900">
                    VoIP & Phone Systems
                  </option>
                  <option value="Other" className="bg-neutral-900">
                    Other
                  </option>
                </select>
              </div>

              <Input
                type="text"
                placeholder="Job Address (optional)"
                name="jobAddress"
                value={formData.jobAddress}
                onChange={handleChange}
                className="h-12 rounded-md border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            />
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-black rounded-md font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}