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
  CheckCircle2,
  Hammer,
  Zap,
  Trash2
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageRoute } from "./types";

const EMAIL = "info@avielmanagementinc.com";
const PHONE_DISPLAY = "(917) 275-5796";
const PHONE_TEL = "+19172755796";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/JJ7TEbO5Muclhwck3Cqh/webhook-trigger/7748c1f6-e64b-4598-9c2c-3f7ef8fce246";

type Status = "idle" | "sending" | "success" | "error";

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
};

const GetQuote: React.FC = () => {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);

  const [status, setStatus] = useState<Status>("idle");

  const isValidPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);

  const projectOptions = useMemo(
    () => [
      { value: "", label: "Select…" },
      { value: "General Construction", label: "General Construction" },
      { value: "Roofing", label: "Roofing" },
      { value: "Junk Removal", label: "Junk Removal / Demo" },
      { value: "EV Charger", label: "EV Charger Installation" },
      { value: "Other", label: "Other" }
    ],
    []
  );

  const budgetOptions = useMemo(
    () => [
      { value: "", label: "Select…" },
      { value: "$1k–$5k", label: "$1k – $5k" },
      { value: "$5k–$15k", label: "$5k – $15k" },
      { value: "$15k–$50k", label: "$15k – $50k" },
      { value: "$50k+", label: "$50k+" }
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
      { value: "Flexible", label: "Flexible" }
    ],
    []
  );

  const canSubmit =
    fullName &&
    isValidPhone &&
    email &&
    address &&
    zip &&
    projectType &&
    budget &&
    timeline &&
    details &&
    consent;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const reset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setZip("");
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
        name: fullName,
        phone,
        email,
        address,
        zip,
        projectType,
        budget,
        timeline,
        details,
        source: "Website - Get Quote Page"
      };

      const res = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(payload as Record<string, string>).toString()
      });

      if (!res.ok) throw new Error("Webhook failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT SIDE */}
            <div>

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
                Tell us about your project and receive a fast estimate,
                timeline, and next steps from experienced NYC contractors.
              </p>

              {/* Trust badges */}

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

              {/* SERVICES CARDS */}

              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3">
                  <Hammer className="text-brand-gold"/>
                  General Construction
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3">
                  <Zap className="text-brand-gold"/>
                  EV Charger Install
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3">
                  <Trash2 className="text-brand-gold"/>
                  Junk Removal
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3">
                  <ShieldCheck className="text-brand-gold"/>
                  Roofing
                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="relative">

              <div className="rounded-3xl border border-white/12 bg-black/55 backdrop-blur-xl shadow-2xl overflow-hidden">

                <div className="p-6 md:p-8 border-b border-white/10">
                  <h2 className="text-2xl font-semibold">
                    Request Callback
                  </h2>
                  <p className="text-sm text-white/60">
                    Fill this out and we’ll contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">

                  <input
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <input
                    placeholder="(917) 555-1234"
                    className="w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />

                  {!isValidPhone && phone.length > 0 && (
                    <p className="text-red-400 text-xs">
                      Invalid phone number
                    </p>
                  )}

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      placeholder="Property Address"
                      className="rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />

                    <input
                      placeholder="ZIP"
                      className="rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                      value={zip}
                      maxLength={5}
                      onChange={(e) =>
                        setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
                      }
                      required
                    />

                  </div>

                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                    required
                  >
                    {projectOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>

                  <div className="grid md:grid-cols-2 gap-4">

                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                      required
                    >
                      {budgetOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>

                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="rounded-xl bg-black/45 border border-white/10 px-3 py-2"
                      required
                    >
                      {timelineOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>

                  </div>

                  <textarea
                    placeholder="Project details..."
                    className="w-full rounded-xl bg-black/45 border border-white/10 px-3 py-2 min-h-[120px]"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />

                  <label className="flex items-start gap-3 text-xs text-white/70">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    I agree to receive text messages regarding my request.
                  </label>

                  <button
                    type="submit"
                    disabled={!canSubmit || status === "sending"}
                    className="w-full rounded-xl bg-gradient-to-r from-brand-gold to-yellow-400 text-black font-bold py-3 hover:scale-[1.02] transition"
                  >
                    {status === "sending"
                      ? "Submitting..."
                      : "Get My Free Estimate"}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm justify-center mt-2">
                      <CheckCircle2 size={18}/>
                      Request submitted successfully!
                    </div>
                  )}

                  {status === "error" && (
                    <div className="text-red-400 text-sm text-center mt-2">
                      Something went wrong. Please call {PHONE_DISPLAY}.
                    </div>
                  )}

                </form>

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
