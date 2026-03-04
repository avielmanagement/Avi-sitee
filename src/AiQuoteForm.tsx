import React, { useMemo, useState } from "react";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

const normalizePhone = (raw: string) => {
  // Keep digits only
  const digits = raw.replace(/[^\d]/g, "");
  // If user typed 1 + 10 digits, keep last 10
  const ten = digits.length > 10 ? digits.slice(-10) : digits;
  // Format as (XXX) XXX-XXXX for display
  if (ten.length <= 3) return ten;
  if (ten.length <= 6) return `(${ten.slice(0, 3)}) ${ten.slice(3)}`;
  return `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6, 10)}`;
};

const isValidEmail = (email: string) => {
  // Simple, practical validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

const digitsOnly = (s: string) => s.replace(/[^\d]/g, "");

const AiQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const phoneDigits = useMemo(() => digitsOnly(formData.phone), [formData.phone]);

  const canSubmit = useMemo(() => {
    const nameOk = formData.fullName.trim().length >= 2;
    const phoneOk = phoneDigits.length >= 10; // US 10 digits
    const emailOk = isValidEmail(formData.email);
    const projectOk = formData.projectType.trim().length > 0;
    const budgetOk = formData.budget.trim().length > 0;
    const timelineOk = formData.timeline.trim().length > 0;
    const descOk = formData.description.trim().length >= 5;

    return nameOk && phoneOk && emailOk && projectOk && budgetOk && timelineOk && descOk;
  }, [formData, phoneDigits]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Let user type freely but store formatted phone
      setFormData((prev) => ({ ...prev, phone: normalizePhone(value) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Hard guard
    if (!canSubmit) {
      setError("Please fill out all required fields (Name, Phone, Email, Project, Budget, Timeline, Details).");
      return;
    }

    setLoading(true);
    try {
      // Split name for cleaner CRM mapping (optional but helpful)
      const full = formData.fullName.trim();
      const parts = full.split(/\s+/);
      const first_name = parts[0] || "";
      const last_name = parts.slice(1).join(" ") || "";

      const payload = {
        // Contact fields (GHL-friendly)
        full_name: full,
        first_name,
        last_name,
        phone: phoneDigits, // send digits only to CRM
        email: formData.email.trim(),

        // Quote details
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,

        // Metadata (optional but useful)
        source: "Website Quote Form",
        submitted_at: new Date().toISOString(),
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      setSuccess("✅ Quote request submitted! We’ll contact you shortly.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Get a Quote</h2>
      <p className="text-sm text-white/70 mb-6">
        Tell us a bit about your project and we’ll get back to you fast.
      </p>

      {/* CONTACT INFO (added) */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-white/80 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(917) 275-5796"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
            required
          />
          <p className="text-xs text-white/50 mt-1">We’ll text/call you about your quote.</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-white/80 mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
          required
        />
      </div>

      {/* EXISTING FIELDS (kept same layout) */}
      <div className="mb-4">
        <label className="block text-sm text-white/80 mb-2">Project Type *</label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
          required
        >
          <option value="" className="bg-black">Select...</option>
          <option value="Residential Renovation" className="bg-black">Residential Renovation</option>
          <option value="Commercial Build-out" className="bg-black">Commercial Build-out</option>
          <option value="Roofing" className="bg-black">Roofing</option>
          <option value="Junk Removal / Demo" className="bg-black">Junk Removal / Demo</option>
          <option value="EV Charger Installation" className="bg-black">EV Charger Installation</option>
          <option value="General Construction" className="bg-black">General Construction</option>
          <option value="Other" className="bg-black">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-white/80 mb-2">Budget *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
            required
          >
            <option value="" className="bg-black">Select...</option>
            <option value="Under $5,000" className="bg-black">Under $5,000</option>
            <option value="$5,000 - $15,000" className="bg-black">$5,000 - $15,000</option>
            <option value="$15,000 - $50,000" className="bg-black">$15,000 - $50,000</option>
            <option value="$50,000+" className="bg-black">$50,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-2">Timeline *</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
            required
          >
            <option value="" className="bg-black">Select...</option>
            <option value="ASAP" className="bg-black">ASAP</option>
            <option value="1-2 Weeks" className="bg-black">1-2 Weeks</option>
            <option value="1 Month" className="bg-black">1 Month</option>
            <option value="2-3 Months" className="bg-black">2-3 Months</option>
            <option value="Not Sure Yet" className="bg-black">Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm text-white/80 mb-2">Project Details *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us what you need, address/borough (optional), and any key details..."
          rows={5}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
          required
        />
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-300 bg-red-900/20 border border-red-500/20 rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 text-sm text-green-300 bg-green-900/20 border border-green-500/20 rounded-xl px-4 py-3">
          {success}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !canSubmit}
        className="w-full bg-brand-gold text-black font-bold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Quote Request"}
      </button>

      <p className="text-xs text-white/50 mt-3 text-center">
        By submitting, you agree to be contacted about your request.
      </p>
    </form>
  );
};

export default AiQuoteForm;
