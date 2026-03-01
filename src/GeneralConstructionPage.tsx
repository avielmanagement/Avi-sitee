import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AiQuoteForm from './AiQuoteForm';
import { Ruler, HardHat } from 'lucide-react';

const GeneralConstructionPage: React.FC = () => {
  useEffect(() => {
    document.title = "General Contractor NYC | Renovations & Remodeling | Aviel Management";
  }, []);

  // Fallback function: If image fails, load a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x600/1a1a1a/FFF?text=Image+Not+Found";
    e.currentTarget.alt = "Image unavailable";
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 bg-zinc-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">
            Aviel Management Inc.
          </span>
          <h1 className="font-display font-bold text-5xl md:text-8xl text-white uppercase leading-[0.9] mb-8">
            General<br />Construction
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Comprehensive renovation services for homeowners, investors, and property managers across NYC.
            Kitchens, bathrooms, flooring, and full gut renovations.
          </p>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Residential */}
          <div>
            <div className="w-full mb-8 overflow-hidden rounded-sm border border-white/10 relative bg-zinc-800"
                 style={{ height: '500px', minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                onError={handleImageError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 block"
                alt="Kitchen Renovation"
              />
            </div>
            <h2 className="font-display text-4xl uppercase mb-4 text-white">Residential Renovations</h2>
            <p className="text-gray-400 mb-6">High-ROI upgrades for your home or rental property.</p>
            <ul className="space-y-2 text-gray-300 mb-8">
              <li className="flex items-center gap-2"><Ruler className="w-4 h-4 text-brand-gold"/> Kitchen & Bath Remodels</li>
              <li className="flex items-center gap-2"><Ruler className="w-4 h-4 text-brand-gold"/> Hardwood & Tile Flooring</li>
              <li className="flex items-center gap-2"><Ruler className="w-4 h-4 text-brand-gold"/> Painting & Plastering</li>
              <li className="flex items-center gap-2"><Ruler className="w-4 h-4 text-brand-gold"/> Full Apartment Combinations</li>
            </ul>
          </div>

          {/* Property Management */}
          <div>
            <div className="w-full mb-8 overflow-hidden rounded-sm border border-white/10 relative bg-zinc-800"
                 style={{ height: '500px', minHeight: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                onError={handleImageError}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 block"
                alt="Commercial Construction Site"
              />
            </div>
            <h2 className="font-display text-4xl uppercase mb-4 text-white">Commercial & Mgmt</h2>
            <p className="text-gray-400 mb-6">Reliable vendor services for Property Managers.</p>
            <ul className="space-y-2 text-gray-300 mb-8">
              <li className="flex items-center gap-2"><HardHat className="w-4 h-4 text-brand-gold"/> White-box Commercial Retail</li>
              <li className="flex items-center gap-2"><HardHat className="w-4 h-4 text-brand-gold"/> Unit Turnovers & Make-readies</li>
              <li className="flex items-center gap-2"><HardHat className="w-4 h-4 text-brand-gold"/> Common Area Upgrades</li>
              <li className="flex items-center gap-2"><HardHat className="w-4 h-4 text-brand-gold"/> Code Violation Corrections</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-zinc-100 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl uppercase mb-12">How Our Estimates Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-black/10">
              <div className="text-4xl font-bold text-brand-gold mb-4">01</div>
              <h3 className="font-bold uppercase mb-2">Scope</h3>
              <p className="text-sm text-gray-600">
                We walk the site or review your plans to understand exactly what needs to be done.
              </p>
            </div>
            <div className="p-6 border border-black/10">
              <div className="text-4xl font-bold text-brand-gold mb-4">02</div>
              <h3 className="font-bold uppercase mb-2">Proposal</h3>
              <p className="text-sm text-gray-600">
                You receive a detailed itemized quote. No hidden fees. Material allowances clearly stated.
              </p>
            </div>
            <div className="p-6 border border-black/10">
              <div className="text-4xl font-bold text-brand-gold mb-4">03</div>
              <h3 className="font-bold uppercase mb-2">Execution</h3>
              <p className="text-sm text-gray-600">
                We assign a project manager, pull permits if needed, and get to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AiQuoteForm type="renovation" />
      <Footer />
    </div>
  );
};

export default GeneralConstructionPage;
