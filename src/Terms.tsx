// src/Terms.tsx
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
            These Terms govern your use of the Aviel Management Inc. website and
            any requests for quotes, scheduling, or service communications.
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
              Any information on this website is for general informational
              purposes. Estimates, timelines, and recommendations are not final
              until confirmed in writing.
            </p>
            <p>
              Work scopes, material selections, and pricing may change based on
              site conditions, permits, inspections, and customer requests.
            </p>
          </Section>

          <Section title="2) Scheduling & On-Site Conditions">
            <p>
              Project schedules depend on weather, inspections, material
              availability, access to the job site, and other factors outside of
              our control.
            </p>
            <p>
              Customers must provide safe and reasonable access to the work area.
              If conditions are unsafe, we may pause work until it is corrected.
            </p>
          </Section>

          <Section title="3) Communications (Calls/SMS/Email)">
            <p>
              By submitting your contact information, you consent to receive
              communications related to your request (e.g., confirmations,
              scheduling updates, service updates).
            </p>
            <p>
              <strong className="text-white">SMS:</strong> Message frequency varies.
              Msg & data rates may apply. Reply <strong>STOP</strong> to opt out.
              Reply <strong>HELP</strong> for help.
            </p>
          </Section>

          <Section title="4) Website Use">
            <p>
              You agree not to misuse this website, attempt unauthorized access,
              or interfere with its operation.
            </p>
            <p>
              Content on this website may not be copied or reused without written
              permission.
            </p>
          </Section>

          <Section title="5) Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Aviel Management Inc. is not
              liable for indirect, incidental, or consequential damages arising
              from the use of this website or delays outside of our control.
            </p>
          </Section>

          <Section title="6) Contact">
            <p className="space-y-1">
              <div className="text-white">Aviel Management Inc.</div>
              <div>Phone: (917) 275-5796</div>
              <div>Email: info@avielmanagement.com</div>
            </p>
          </Section>
        </div>

        <div className="mt-10 text-xs text-white/40">
          This template is general website language and not legal advice.
        </div>
      </div>
    </main>
  );
}
