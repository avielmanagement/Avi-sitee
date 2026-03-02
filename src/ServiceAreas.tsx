import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { PageRoute } from "./types";

const PHONE_DISPLAY = "(917) 275-5796";
const PHONE_TEL = "9172755796";
const EMAIL = "info@avielmanagementinc.com";

type AreaCardProps = {
  title: string;
  items: string[];
  ctaLabel: string;
  ctaTo: string;
};

const AreaCard: React.FC<AreaCardProps> = ({ title, items, ctaLabel, ctaTo }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:bg-white/[0.05] transition">
      <div className="flex items-center gap-2 text-brand-gold">
        <MapPin className="w-4 h-4" />
        <div className="text-xs uppercase tracking-[0.25em] text-brand-gold/90">
          Service Area
        </div>
      </div>

      <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/80" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          to={ctaTo}
          className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-sm text-brand-gold hover:bg-brand-gold/15 transition"
        >
          {ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
    <div className="text-2xl md:text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
      {label}
    </div>
  </div>
);

export default function ServiceAreas() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-12">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              Coverage
            </div>

            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
              Service Areas
            </h1>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
              Aviel Management Inc. proudly serves New York City and surrounding areas.
              From renovations to EV installations, our crews deliver consistent, high-quality work —
              on schedule and with clear communication.
            </p>

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
                <Mail className="w-4 h-4" /> Email Us
              </a>

              <Link
                to={PageRoute.GET_QUOTE}
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-gold hover:bg-brand-gold/15 transition"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat value="NYC + Nearby" label="Coverage Zone" />
            <Stat value="Fast Scheduling" label="Response Time" />
            <Stat value="Licensed Crews" label="Quality Standard" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Where We Work
            </h2>
            <p className="mt-2 text-white/65 max-w-2xl">
              Select a borough or region below. If you don’t see your neighborhood,
              contact us — we may still cover it.
            </p>
          </div>
          <Link
            to={PageRoute.GET_QUOTE}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm text-white hover:bg-white/[0.06] transition"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AreaCard
            title="Brooklyn"
            items={["Williamsburg", "Bushwick", "Park Slope", "Bed-Stuy", "Crown Heights", "Bay Ridge"]}
            ctaLabel="Get a quote in Brooklyn"
            ctaTo={PageRoute.GET_QUOTE}
          />

          <AreaCard
            title="Queens"
            items={["Astoria", "Long Island City", "Forest Hills", "Flushing", "Jamaica", "Ridgewood"]}
            ctaLabel="Get a quote in Queens"
            ctaTo={PageRoute.GET_QUOTE}
          />

          <AreaCard
            title="Manhattan"
            items={["Upper East Side", "Upper West Side", "SoHo", "Tribeca", "Harlem", "Lower East Side"]}
            ctaLabel="Get a quote in Manhattan"
            ctaTo={PageRoute.GET_QUOTE}
          />

          <AreaCard
            title="The Bronx"
            items={["Riverdale", "Fordham", "Pelham Bay", "Throgs Neck", "Mott Haven", "Kingsbridge"]}
            ctaLabel="Get a quote in the Bronx"
            ctaTo={PageRoute.GET_QUOTE}
          />

          <AreaCard
            title="Staten Island"
            items={["North Shore", "South Shore", "Mid-Island", "St. George", "New Dorp", "Tottenville"]}
            ctaLabel="Get a quote in Staten Island"
            ctaTo={PageRoute.GET_QUOTE}
          />

          <AreaCard
            title="Long Island"
            items={["Nassau County", "Select Suffolk Areas", "Five Towns", "Valley Stream", "Hempstead", "Westbury"]}
            ctaLabel="Get a quote on Long Island"
            ctaTo={PageRoute.GET_QUOTE}
          />
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-brand-gold/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                Don’t see your neighborhood?
              </div>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
                We likely cover it — contact us to confirm.
              </h3>
              <p className="mt-2 text-white/70">
                We’ll respond quickly and tell you the next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-white hover:bg-white/[0.06] transition"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <Link
                to={PageRoute.GET_QUOTE}
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-gold hover:bg-brand-gold/15 transition"
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
