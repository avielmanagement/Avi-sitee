import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  MapPin,
  PhoneCall,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageRoute } from "./types";

const EMAIL = "info@avielmanagementinc.com";
const PHONE_DISPLAY = "(917) 275-5796";
const PHONE_TEL = "+19172755796";

// OPTIONAL: Vercel -> Settings -> Environment Variables
// Key: VITE_GHL_WEBHOOK_URL
const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/JJ7TEbO5Muclhwck3Cqh/webhook-trigger/7748c1f6-e64b-4598-9c2c-3f7ef8fce246";
// Optional: if you want a real background image, paste its URL here
// (or keep empty to use the premium gradient background)
const HERO_BG_IMAGE_URL = "";

type Status = "idle" | "sending" | "success" | "error";

const GetQuote: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);

  const [status, setStatus] = useState<Status>("idle");

  const projectOptions = useMemo(
    () => [
      { value: "", label: "Select…" },
      { value: "General Construction", label: "General Construction" },
      { value: "Roofing", label: "Roofing" },
      { value: "Junk / Demo", label: "Junk Removal / Demo" },
      { value: "EZ EV Installation", label: "EZ EV Installation" },
      { value: "Other", label: "Other" },
    ],
    []
  );

  const budgetOptions = useMemo(
    () => [
      { value: "", label: "Select…" },
      { value: "$1k–$5k", label: "$1k – $5k" },
      { value: "$5k–$15k", label: "$5k – $15k" },
      { value: "$15k–$50k", label: "$15k – $50k" },
      { value: "$50k+", label: "$50k+" },
    ],
    []
  );

  const timelineOptions = useMemo(
    () => [
      { value: "", label: "Select…" },
      { value: "ASAP", label: "ASAP" },
      { value: "1–2 weeks", label: "1–2 weeks" },
      { value: "2–4 weeks", label: "2–4 weeks" },
      { value: "1–3 months", label: "1–3 months" },
      { value: "Flexible", label: "Flexible" },
    ],
    []
  );

  const canSubmit =
    fullName.trim() &&
    phone.trim() &&
    email.trim() &&
    projectType.trim() &&
    budget.trim() &&
    timeline.trim() &&
    details.trim() &&
    consent;

  const reset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setProjectType("");
    setBudget("");
    setTimeline("");
    setDetails("");
    setConsent(false);
  };
  if (!GHL_WEBHOOK) {
  console.warn("Webhook URL missing");
  setStatus("error");
  return;
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!canSubmit) return;

  setStatus("sending");

  try {
    const payload = {
      name: fullName,
      phone,
      email,
      projectType,
      budget,
      timeline,
      details,
      source: "Website - Get Quote Page",
    };

    if (!GHL_WEBHOOK) {
      console.warn("Webhook URL missing");
      return;
    }

    const res = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(payload as Record<string, string>).toString(),
    });

    if (!res.ok) throw new Error("Webhook failed");

    setStatus("success");
    reset();
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};
    try {
      const payload = {
        fullName,
        phone,
        email,
        projectType,
        budget,
        timeline,
        details,
        consent: true,
        source: "Website - Get Quote Page",
        page: "get-quote",
      };

      if (GHL_WEBHOOK) {
        const res = await fetch(GHL_WEBHOOK, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams(payload).toString(),
});
        if (!res.ok) throw new Error("Webhook failed");
      } else {
        // still allow UI testing
        console.warn("No VITE_GHL_WEBHOOK_URL set. Form isn't sending anywhere yet.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Optional image */}
          {HERO_BG_IMAGE_URL ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_BG_IMAGE_URL})` }}
            />
          ) : null}

          {/* Premium gradient + vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
          <div className="absolute inset-0 opacity-50">
            <div className="h-full w-full bg-[radial-gradient(circle_at_15%_25%,rgba(212,175,55,0.22),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(circle_at_60%_85%,rgba(255,255,255,0.06),transparent_50%)]" />
          </div>

          {/* Subtle “grid” texture */}
          <div className="absolute inset-0 opacity-[0.10]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          {/* Dark vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT HERO */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                No obligation • Fast response
              </div>

              <div className="mt-6">
                <div className="text-[12px] tracking-[0.35em] text-white/60 uppercase">
                  Aviel Management Inc.
                </div>

                <h1 className="mt-3 font-display leading-[0.95]">
                  <span className="block text-6xl md:text-7xl font-extrabold">
                    FREE
                  </span>
                  <span className="block text-6xl md:text-7xl font-extrabold text-brand-gold">
                    ESTIMATES
                  </span>
                </h1>

                <p className="mt-5 text-white/70 max-w-xl">
                  Ready to build? Tell us what you need and we’ll give you a clear estimate,
                  timeline, and next steps — fast, transparent, and professional.
                </p>
              </div>

              {/* Trust row */}
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                  <Clock3 className="h-4 w-4 text-emerald-400" />
                  Same-day replies
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                  <ShieldCheck className="h-4 w-4 text-brand-gold" />
                  Licensed & insured
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                  <BadgeCheck className="h-4 w-4 text-white/80" />
                  Quality craftsmanship
                </span>
              </div>

              {/* Feature list */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-2">
                      <MapPin className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">NYC + Nearby</p>
                      <p className="text-xs text-white/60 mt-1">
                        Brooklyn • Queens • Manhattan • Bronx • Staten Island
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-2">
                      <Clock3 className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Quick Scheduling</p>
                      <p className="text-xs text-white/60 mt-1">
                        Tell us your timeline — we’ll work around it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-2">
                      <ShieldCheck className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Up-front Pricing</p>
                      <p className="text-xs text-white/60 mt-1">
                        Clear scope, clear estimate, no confusion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-2">
                      <BadgeCheck className="h-5 w-5 text-white/80" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Built to Last</p>
                      <p className="text-xs text-white/60 mt-1">
                        Clean finish, solid workmanship, professional crews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact block */}
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 max-w-xl">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Start the conversation
                </p>

                <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <a
                    className="inline-flex items-center gap-2 text-sm text-brand-gold hover:opacity-80"
                    href={`tel:${PHONE_TEL}`}
                  >
                    <PhoneCall className="h-4 w-4" />
                    {PHONE_DISPLAY}
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>

                  <a
                    className="inline-flex items-center gap-2 text-sm text-brand-gold hover:opacity-80"
                    href={`mailto:${EMAIL}`}
                  >
                    <Mail className="h-4 w-4" />
                    {EMAIL}
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM CARD */}
            <div className="relative">
              {/* glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.22),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.12),transparent_55%)] blur-2xl opacity-80" />

              <div className="relative rounded-3xl border border-white/12 bg-black/55 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="p-6 md:p-8 border-b border-white/10">
                  <h2 className="text-2xl font-semibold">Request Callback</h2>
                  <p className="text-sm text-white/60 mt-1">
                    Fill this out — we’ll text/call you about your quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/70">Full Name *</label>
                      <input
                        className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                        placeholder="Your Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs text-white/70">Phone *</label>
                      <input
                        className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                        placeholder={PHONE_DISPLAY}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <p className="text-[11px] text-white/50 mt-1">
                        We’ll contact you about your request.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/70">Email *</label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-white/70">Project Type *</label>
                    <select
                      className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      required
                    >
                      {projectOptions.map((o) => (
                        <option key={o.value || "empty"} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/70">Budget *</label>
                      <select
                        className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                      >
                        {budgetOptions.map((o) => (
                          <option key={o.value || "empty"} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-white/70">Timeline *</label>
                      <select
                        className="mt-2 w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        required
                      >
                        {timelineOptions.map((o) => (
                          <option key={o.value || "empty"} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/70">Project Details *</label>
                    <textarea
                      className="mt-2 w-full min-h-[130px] rounded-xl bg-black/45 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                      placeholder="Describe what you need done, borough/address (optional), and any key details…"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      required
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 text-xs text-white/70">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    <span>
                      I agree to receive text messages from Aviel Management Inc. about my request.
                      Message & data rates may apply. Reply STOP to opt out. Reply HELP for help. See{" "}
                      <Link className="text-brand-gold hover:opacity-80" to={PageRoute.PRIVACY}>
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link className="text-brand-gold hover:opacity-80" to={PageRoute.TERMS}>
                        Terms of Service
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending" || !canSubmit}
                    className="w-full rounded-xl bg-brand-gold text-black font-semibold py-3 hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Submitting..." : "Request Callback"}
                  </button>

                  {status === "success" && (
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <p className="text-sm text-emerald-300">
                        Submitted! We’ll contact you shortly.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
                      <p className="text-sm text-red-200">
                        Something went wrong. Please call{" "}
                        <a className="underline" href={`tel:${PHONE_TEL}`}>
                          {PHONE_DISPLAY}
                        </a>{" "}
                        or email{" "}
                        <a className="underline" href={`mailto:${EMAIL}`}>
                          {EMAIL}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <p className="text-[11px] text-white/50 text-center">
                    By submitting, you agree to be contacted about your request.
                  </p>
                </form>
              </div>

              {/* small note */}
              <div className="mt-4 text-center text-xs text-white/45">
                Prefer email? Send details to{" "}
                <a className="text-brand-gold hover:opacity-80" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
