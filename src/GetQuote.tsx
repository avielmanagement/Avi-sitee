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

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/JJ7TEbO5Muclhwck3Cqh/webhook-trigger/7748c1f6-e64b-4598-9c2c-3f7ef8fce246";

type Status = "idle" | "sending" | "success" | "error";

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
    6,
    10
  )}`;
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

  const isValidPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);

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
        source: "Website - Get Quote Page",
      };

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight">
            FREE <span className="text-yellow-400">ESTIMATES</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl">
            Tell us about your project and we’ll provide a clear estimate,
            timeline, and next steps.
          </p>

          <div className="mt-10 space-y-3 text-sm text-white/70">
            <div className="flex gap-2">
              <Clock3 size={16} /> Same-day replies
            </div>
            <div className="flex gap-2">
              <ShieldCheck size={16} /> Licensed & insured
            </div>
            <div className="flex gap-2">
              <BadgeCheck size={16} /> Professional crews
            </div>
          </div>

          <div className="mt-10 flex gap-6 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
              <PhoneCall size={16} />
              {PHONE_DISPLAY}
            </a>

            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-xl">

          <h2 className="text-2xl font-semibold mb-6">Request Callback</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              placeholder="Full Name"
              className="w-full rounded-xl bg-black border border-white/10 px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              placeholder="(917) 555-1234"
              className="w-full rounded-xl bg-black border border-white/10 px-3 py-2"
              value={phone}
              onChange={handlePhoneChange}
              required
            />

            {!isValidPhone && phone.length > 0 && (
              <p className="text-red-400 text-xs">Enter a valid phone number</p>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-black border border-white/10 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Property Address"
                className="rounded-xl bg-black border border-white/10 px-3 py-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <input
                placeholder="ZIP"
                className="rounded-xl bg-black border border-white/10 px-3 py-2"
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
              className="w-full rounded-xl bg-black border border-white/10 px-3 py-2"
              required
            >
              {projectOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-2 gap-4">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="rounded-xl bg-black border border-white/10 px-3 py-2"
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
                className="rounded-xl bg-black border border-white/10 px-3 py-2"
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
              className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 min-h-[120px]"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />

            <label className="flex gap-2 text-xs text-white/70">
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
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition"
            >
              {status === "sending" ? "Submitting..." : "Get My Free Estimate"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                Submitted! We will contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Something went wrong. Please call {PHONE_DISPLAY}.
              </p>
            )}

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
