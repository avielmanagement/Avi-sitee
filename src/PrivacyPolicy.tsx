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

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <header className="mb-10">
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            Legal
          </div>

          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-white/70 leading-relaxed">
            This Privacy Policy explains how Aviel Management Inc.
            collects, uses, and protects your information.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
              Effective: 2026
            </span>

            <Link
              to="/terms"
              className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs text-brand-gold hover:bg-brand-gold/15 transition"
            >
              View Terms of Service
            </Link>
          </div>
        </header>

        <div className="space-y-6">
          <Section title="1) Information We Collect">
            <p>
              We may collect your name, phone number, email address,
              and project details when you request a quote or contact us.
            </p>
          </Section>

          <Section title="2) How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to quote requests</li>
              <li>Schedule services</li>
              <li>Send service updates</li>
              <li>Improve customer experience</li>
            </ul>
          </Section>

          <Section title="3) SMS Communications">
            <p>
              If you opt in, you may receive SMS messages about
              scheduling and service updates.
            </p>
            <p>
              Message frequency varies. Msg & data rates may apply.
              Reply <strong className="text-white">STOP</strong> to opt out.
              Reply <strong className="text-white">HELP</strong> for help.
            </p>
          </Section>

          <Section title="4) Information Sharing">
            <p>
              We do not sell or rent your personal information.
            </p>
          </Section>

          <Section title="5) Security">
            <p>
              We use reasonable measures to protect your information.
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
