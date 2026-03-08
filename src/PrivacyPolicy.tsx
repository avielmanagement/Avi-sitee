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

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-3 text-white/70 leading-relaxed">
            This Privacy Policy describes how <strong>Aviel Management Inc.</strong>
            collects, uses, and protects your personal information.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/terms-of-service"
              className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-400 hover:bg-yellow-400/15 transition"
            >
              View Terms of Service
            </Link>
          </div>
        </header>

        <div className="space-y-6">

          <Section title="Information We Collect">
            <p>
              When you request a quote or contact us through our website,
              we may collect your name, phone number, email address,
              ZIP code, and project details.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to quote requests</li>
              <li>Schedule services</li>
              <li>Send project updates</li>
              <li>Improve customer experience</li>
            </ul>
          </Section>

          <Section title="SMS Communications">
            <p>
              If you provide your phone number and consent,
              you may receive SMS messages from
              <strong> Aviel Management Inc.</strong>
              related to your service request.
            </p>

            <p>
              These messages may include appointment confirmations,
              estimate updates, scheduling notifications,
              or service communications.
            </p>

            <p>
              Message frequency varies depending on your request.
              Message and data rates may apply.
              Reply <strong>STOP</strong> to unsubscribe or
              <strong> HELP</strong> for assistance.
            </p>
          </Section>

          <Section title="Information Sharing">
            <p>
              We do not sell or rent your personal information.
            </p>

            <p>
              <strong>
                Mobile information will not be shared with third parties
                or affiliates for marketing or promotional purposes.
              </strong>
            </p>
          </Section>

          <Section title="Security">
            <p>
              We take reasonable measures to protect your
              personal information from unauthorized access.
            </p>
          </Section>

          <Section title="Contact Information">
            <p className="font-medium text-white">
              Aviel Management Inc.
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:9172755796"
                className="text-yellow-400 hover:underline"
              >
                (917) 275-5796
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:info@avielmanagementinc.com"
                className="text-yellow-400 hover:underline"
              >
                info@avielmanagementinc.com
              </a>
            </p>
          </Section>

        </div>

        <div className="mt-10 text-xs text-white/40">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </main>
  );
}
