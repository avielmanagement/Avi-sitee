import React from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        {title}
      </h2>

      <div className="mt-3 text-sm md:text-base text-white/70 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
};

const TermsOfService: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms of Service
          </h1>

          <p className="mt-4 text-white/70">
            These Terms of Service govern the use of services provided
            by <strong>Aviel Management Inc.</strong>
          </p>

          <Link
            to="/privacy-policy"
            className="inline-block mt-4 text-yellow-400 hover:underline"
          >
            View Privacy Policy
          </Link>
        </header>

        <div className="space-y-6">

          <Section title="Services">
            <p>
              Aviel Management Inc provides construction,
              EV charger installation, junk removal,
              demolition, roofing, and related services.
            </p>
          </Section>

          <Section title="SMS Messaging Terms">
            <p>
              By submitting your phone number on our website,
              you consent to receive SMS messages from
              <strong> Aviel Management Inc.</strong>
            </p>

            <p>
              These messages may include appointment confirmations,
              estimate updates, scheduling notifications,
              and service communications.
            </p>

            <p>
              Message frequency varies depending on your request.
              Message and data rates may apply.
            </p>

            <p>
              Reply <strong>STOP</strong> to unsubscribe or
              <strong> HELP</strong> for assistance.
            </p>
          </Section>

          <Section title="User Responsibilities">
            <p>
              You agree to provide accurate information when submitting
              service requests or contacting our business.
            </p>
          </Section>

          <Section title="Carrier Liability">
            <p>
              Mobile carriers are not liable for delayed or
              undelivered SMS messages.
            </p>
          </Section>

          <Section title="Age Requirement">
            <p>
              You must be at least 18 years old to use our services
              or consent to SMS communications.
            </p>
          </Section>

          <Section title="Contact Information">
            <p className="font-medium text-white">
              Aviel Management Inc
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

        <p className="mt-10 text-xs text-white/40">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </main>
  );
};

export default TermsOfService;
