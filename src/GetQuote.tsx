import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageRoute } from "./types";

const EMAIL = "info@avielmanagementinc.com";
const PHONE_DISPLAY = "(917) 275-5796";
const PHONE_TEL = "+19172755796";

// OPTIONAL: set this in Vercel -> Settings -> Environment Variables
// Key: VITE_GHL_WEBHOOK_URL
const GHL_WEBHOOK = import.meta.env.VITE_GHL_WEBHOOK_URL as string | undefined;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");

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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Webhook failed");
      } else {
        // If webhook isn't set, we still let you test UX.
        console.warn("No VITE_GHL_WEBHOOK_URL set. Form is not sending anywhere yet.");
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/70 to-black" />
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.06),transparent_45%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                We respond fast — usually within a few hours
              </div>

              <h1 className="mt-5 font-display text-5xl md:text-6xl leading-tight">
                Get a <span className="text-brand-gold">Fast</span> Quote
              </h1>

              <p className="mt-5 text-white/70 max-w-xl">
                Share what you need and we’ll send a clear estimate and next steps. Transparent pricing,
                clean execution, and quick scheduling.
              </p>

              {/* Trust bullets */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Licensed & Insured</p>
                  <p className="text-xs text-white/60 mt-1">
                    Professional crews and clean job sites.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">NYC + Nearby</p>
                  <p className="text-xs text-white/60 mt-1">
                    Brooklyn, Queens, Manhattan, Bronx, Staten Island & more.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Up-front Pricing</p>
                  <p className="text-xs text-white/60 mt-1">
                    Clear scope, clear timeline, no confusion.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Quality Craftsmanship</p>
                  <p className="text-xs text-white/60 mt-1">
                    Built to last — not built to rush.
                  </p>
                </div>
              </div>

              {/* Contact strip */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 max-w-xl">
                <p className="text-xs uppercase tracking-widest text-white/60">Contact</p>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <a
                    className="text-sm text-brand-gold hover:opacity-80"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    className="text-sm text-brand-gold hover:opacity-80"
                    href={`mailto:${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
              <div className="p-6 md:p-8 border-b border-white/10">
                <h2 className="text-2xl font-semibold">Request a Quote</h2>
                <p className="text-sm text-white/60 mt-1">
                  Fill this out and we’ll text/call you ASAP.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/70">Full Name *</label>
                    <input
                      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                      placeholder="John Smith"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-white/70">Phone *</label>
                    <input
                      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
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
                    className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-white/70">Project Type *</label>
                  <select
                    className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
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
                      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
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
                      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
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
                    className="mt-2 w-full min-h-[120px] rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-brand-gold"
                    placeholder="What do you need done? Include borough/address (optional) and any details…"
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
                  {status === "sending" ? "Submitting..." : "Submit Quote Request"}
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
