import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Hammer, Users, Phone, Mail, ArrowRight } from "lucide-react";
import { PageRoute } from "./types";

const PHONE_DISPLAY = "(917) 275-5796";
const PHONE_TEL = "9172755796";
const EMAIL = "info@avielmanagementinc.com";

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
    {children}
  </span>
);

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:bg-white/[0.05] transition">
    <div className="w-11 h-11 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
      {icon}
    </div>
    <h3 className="mt-4 text-lg md:text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
  </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
    <div className="text-2xl md:text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">{label}</div>
  </div>
);

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              Our Story
            </div>

            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
              Building NYC <span className="text-brand-gold">the right way</span>
            </h1>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
              Aviel Management Inc. was built on a simple standard: <span className="text-white font-semibold">do it right, do it once</span>.
              We run organized crews, keep communication clear, and deliver high-quality results —
              whether it's a renovation, build-out, roofing project, or EV infrastructure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Transparency</Pill>
              <Pill>Precision</Pill>
              <Pill>Clean Finishes</Pill>
              <Pill>Fast Scheduling</Pill>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white hover:bg-white/[0.06] transition"
              >
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>

              <Link
                to={PageRoute.GET_QUOTE}
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-gold hover:bg-brand-gold/15 transition"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat value="NYC + Nearby" label="Service Coverage" />
            <Stat value="Licensed Crews" label="Quality Standard" />
            <Stat value="Fast Response" label="Project Scheduling" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              What Makes Us Different
            </h2>
            <p className="mt-2 text-white/65 max-w-2xl">
              We focus on predictable execution: clear scope, clean scheduling,
              and professional results with minimal surprises.
            </p>
          </div>

          <Link
            to={PageRoute.SERVICE_AREAS}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm text-white hover:bg-white/[0.06] transition"
          >
            View Service Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon={<Hammer className="w-5 h-5" />}
            title="Dedicated Crews"
            desc="We manage our own teams of skilled tradespeople to maintain quality control and consistency from start to finish."
          />
          <Feature
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Safety & Standards"
            desc="We follow strict safety practices and professional build standards — especially for structural and EV-related work."
          />
          <Feature
            icon={<Users className="w-5 h-5" />}
            title="Client-First Communication"
            desc="Clear updates, realistic timelines, and a smooth process. We keep you in the loop so your project stays on track."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            Our Process
          </div>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Simple, fast, and organized
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-brand-gold text-xs uppercase tracking-[0.25em]">
                Step 1
              </div>
              <div className="mt-2 font-semibold text-white">Request a Quote</div>
              <div className="mt-2 text-white/70 text-sm">
                Tell us what you need. We'll ask the right questions and gather details.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-brand-gold text-xs uppercase tracking-[0.25em]">
                Step 2
              </div>
              <div className="mt-2 font-semibold text-white">Site Visit / Planning</div>
              <div className="mt-2 text-white/70 text-sm">
                We confirm scope, timeline, and materials — no surprises.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-brand-gold text-xs uppercase tracking-[0.25em]">
                Step 3
              </div>
              <div className="mt-2 font-semibold text-white">Execution & Delivery</div>
              <div className="mt-2 text-white/70 text-sm">
                Clean job sites, professional crews, and consistent updates until completion.
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={PageRoute.GET_QUOTE}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white hover:bg-white/[0.06] transition"
            >
              <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-gold hover:bg-brand-gold/15 transition"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
