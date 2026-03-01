// src/PrivacyPolicy.tsx
import React from "react";
import { Link } from "react-router-dom";

const Item: React.FC<{ title: string; children: React.ReactNode }> = ({
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
            This Privacy Policy explains what we collect, how we use it, and how
            we protect it when you interact with Aviel Management Inc.
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
          <Item title="1) Information We Collect">
            <p>
              We may collect personal information you provide, such as your name,
              phone number, email address, project address, and project details
              when you submit a quote request or contact us.
            </p>
          </Item>

          <Item title="2) How We Use Information">
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your quote request and questions</li>
              <li>Schedule appointments and provide service updates</li>
              <li>Improve our website and customer experience</li>
            </ul>
          </Item>

          <Item title="3) SMS Communications">
            <p>
              If you opt in, we may send text messages about your quote request,
              scheduling, and service updates.
            </p>
            <p>
              Message frequency varies. Msg & data rates may apply. Reply{" "}
              <strong className="text-white">STOP</strong> to opt out. Reply{" "}
              <strong className="text-white">HELP</strong> for help.
            </p>
          </Item>

          <Item title="4) Sharing & Disclosure">
            <p>
              We do not sell or rent your personal information. We may share
              limited information with service providers who help operate our
              systems (e.g., messaging, hosting), only as necessary to perform
              services on our behalf.
            </p>
          </Item>

          <Item title="5) Security">
            <p>
              We take reasonable measures to protect your information. However,
              no system can be guaranteed 100% secure.
            </p>
          </Item>

          <Item title="6) Contact">
            <p className="space-y-1">
              <div className="text-white">Aviel Management Inc.</div>
              <div>Phone: (917) 275-5796</div>
              <div>Email: info@avielmanagement.com</div>
            </p>
          </Item>
        </div>

        <div className="mt-10 text-xs text-white/40">
          This template is general website language and not legal advice.
        </div>
      </div>
    </main>
  );
}
