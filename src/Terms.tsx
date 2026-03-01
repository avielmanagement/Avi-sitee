import React from "react";
import { Link } from "react-router-dom";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
    <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
    <div className="mt-3 text-sm md:text-base text-white/70 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <header className="mb-10">
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            Legal
          </div>

          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-3 text-white/70 leading-relaxed">
            These Terms govern your use of Aviel Management Inc.'s website and
            any service requests, communications, or agreements made through it.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
              Effective: 2026
            </span>

            <Link
              to="/privacy"
              className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs text-brand-gold hover:bg-brand-gold/15 transition"
            >
              View Privacy Policy
            </Link>
          </div>
        </header>

        <div className="space-y-6">
          <Section title="1) Services & Estimates">
            <p>
              All information provided on this website is for general
              informational purposes only. Estimates are not final until
              confirmed in writing.
            </p>
            <p>
              Pricing, materials, and scope may change based on site conditions,
              permits, inspections, and client requests.
            </p>
          </Section>

          <Section title="2) Scheduling & Site Access">
            <p>
              Project timelines depend on weather, inspections, material
              availability, and site conditions.
            </p>
            <p>
              Clients must provide safe and reasonable access to work areas.
              Unsafe conditions may result in paused work until corrected.
            </p>
          </Section>

          <Section title="3) Communications (Calls, SMS & Email)">
            <p>
              By submitting your contact information, you consent to receive
              communications related to your quote request, scheduling,
              and service updates.
            </p>
            <p>
              SMS frequency varies. Message & data rates may apply.
              Reply <strong className="text-white">STOP</strong> to opt out.
              Reply <strong className="text-white">HELP</strong> for help.
            </p>
          </Section>

          <Section title="4) Website Use">
            <p>
              You agree not to misuse this website or attempt unauthorized
              access to its systems.
            </p>
          </Section>

          <Section title="5) Limitation of Liability">
            <p>
              Aviel Management Inc. is not liable for indirect or incidental
              damages resulting from use of this website or delays outside
              of our control.
            </p>
          </Section>

          <Section title="6) Contact Information">
            <div className="space-y-2">
              <div className="text-white font-medium">
                Aviel Management Inc.
              </div>

              <div>
                Phone:{" "}
                <a
                  href="tel:9172755796"
                  className="text-brand-gold hover:underline transition"
                >
                  (917) 275-5796
                </a>
              </div>

              <div>
                Email:{" "}
                <a
                  href="mailto:info@avielmanagementinc.com"
                  className="text-brand-gold hover:underline transition"
                >
                  info@avielmanagementinc.com
                </a>
              </div>
            </div>
          </Section>
        </div>

        <div className="mt-10 text-xs text-white/40">
          This document is general website language and not legal advice.
        </div>
      </div>
    </main>
  );
}
