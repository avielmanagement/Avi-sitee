import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Home, Droplets, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from './types';

const RoofingPage: React.FC = () => {
  useEffect(() => {
    document.title = "NYC Roofing Repair & Replacement | Aviel Management";
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
            alt="Roofing Work NYC"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display font-bold text-6xl md:text-8xl text-white uppercase mb-4">
            Watertight<br /><span className="text-brand-gold">Protection</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Expert flat roof repair, shingle replacement, and waterproofing for NYC properties.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to={PageRoute.GET_QUOTE}
              className="px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Request Inspection
            </Link>
            <a
              href="tel:5168067923"
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Emergency Leak? Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 border-t-4 border-brand-gold">
            <Droplets className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="font-display text-2xl uppercase mb-4">Leak Detection & Repair</h3>
            <p className="text-gray-400">
              Fast response for active leaks. We trace water intrusion to the source, patching flat roofs, flashing, and parapet walls.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 border-t-4 border-brand-gold">
            <Home className="w-12 h-12 text-brand-gold mb-6" />
            <h3 className="font-display text-2xl uppercase mb-4">Full Roof Replacement</h3>
            <p className="text-gray-400">
              End-of-life roof replacement using premium Modified Bitumen (Torch Down), EPDM Rubber, or TPO systems suited for NYC climate.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 border-t-4 border-brand-gold">
            <Shield className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="font-display text-2xl uppercase mb-4">Maintenance & Coatings</h3>
            <p className="text-gray-400">
              Extend your roof&apos;s lifespan with reflective silver coating (Cool Roof) and regular drain cleaning maintenance packages.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-zinc-100 text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl uppercase mb-8">Why NYC Property Owners Trust Aviel</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-3xl mb-2">10+</div>
              <div className="text-sm uppercase text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="font-bold text-3xl mb-2">Licensed</div>
              <div className="text-sm uppercase text-gray-600">Home Improvement Contractor</div>
            </div>
            <div>
              <div className="font-bold text-3xl mb-2">Warranty</div>
              <div className="text-sm uppercase text-gray-600">On Full Replacements</div>
            </div>
            <div>
              <div className="font-bold text-3xl mb-2">Insured</div>
              <div className="text-sm uppercase text-gray-600">General Liability & Workers Comp</div>
            </div>
          </div>
          <p className="mt-12 text-xs text-gray-500 max-w-2xl mx-auto">
            Disclaimer: All roofing services performed by qualified tradespeople in accordance with NYC Building Codes. Warranties subject to maintenance terms.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoofingPage;
