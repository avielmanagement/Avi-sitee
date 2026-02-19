import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AiQuoteForm from './AiQuoteForm';
import Footer from './Footer';
import { ArrowRight, LayoutTemplate, PencilRuler, Trash2, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from './types';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Aviel Management Inc. | NYC Construction & Renovations";
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      {/* FIXED FOR MOBILE NAVBAR OVERLAY */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden perspective-[2000px]"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 80px)' }}
      >

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4 w-full flex flex-col justify-center">

          <h2 className="text-white font-sans font-black tracking-[0.3em] text-3xl md:text-6xl mb-8 drop-shadow-2xl">
            AVIEL MANAGEMENT INC.
          </h2>

          <h1 className="font-display font-bold text-6xl md:text-[10rem] lg:text-[12rem] uppercase leading-[0.85] tracking-tighter text-brand-gold drop-shadow-2xl">
            Vision Into<br />Reality
          </h1>

          <p className="mt-10 max-w-6xl mx-auto text-blue-200 font-display font-bold uppercase tracking-widest text-xl md:text-3xl leading-tight">
            Full-Service NYC General Contractor & EV Infrastructure Specialist
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">

            <Link
              to={PageRoute.GET_QUOTE}
              className="px-10 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
            >
              Get a Free Quote
            </Link>

            <Link
              to={PageRoute.EZ_EV}
              className="px-10 py-4 border border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-colors shadow-xl"
            >
              EV Charger Installation
            </Link>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-10 md:left-20 flex flex-col gap-2 text-xs uppercase tracking-widest text-white/50">
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-white/50 mx-auto" />
        </div>

      </section>

      {/* MARQUEE */}
      <div className="w-full bg-brand-gold overflow-hidden py-4 -rotate-1 scale-105 z-20 relative">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-black font-display font-bold text-4xl mx-8">A TO Z RENOVATIONS</span>
          <span className="text-black font-display font-bold text-4xl mx-8">•</span>
          <span className="text-black font-display font-bold text-4xl mx-8">COMMERCIAL & RESIDENTIAL</span>
          <span className="text-black font-display font-bold text-4xl mx-8">•</span>
          <span className="text-black font-display font-bold text-4xl mx-8">JUNK REMOVAL & DEMO</span>
          <span className="text-black font-display font-bold text-4xl mx-8">•</span>
          <span className="text-black font-display font-bold text-4xl mx-8">EZ EV INSTALLATIONS</span>
          <span className="text-black font-display font-bold text-4xl mx-8">•</span>
          <span className="text-black font-display font-bold text-4xl mx-8">NYC LICENSED</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white">Our Expertise</h2>
          <p className="text-gray-400 max-w-xs mt-4 md:mt-0 text-right">
            Comprehensive management for complex builds and simple projects alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <Link to={PageRoute.GENERAL_CONSTRUCTION} className="relative group h-[400px] border border-white/10 overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="bg-brand-gold w-10 h-10 flex items-center justify-center rounded-full">
                <LayoutTemplate className="text-black w-5 h-5" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white">General Construction</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
          </Link>

          <Link to={PageRoute.JUNK_DEMO} className="relative group h-[400px] border border-white/10 overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="bg-orange-600 w-10 h-10 flex items-center justify-center rounded-full">
                <Trash2 className="text-white w-5 h-5" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white">Junk & Demo</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
          </Link>

          <Link to={PageRoute.ROOFING} className="relative group h-[400px] border border-white/10 overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                <Hammer className="text-black w-5 h-5" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white">Roofing</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
          </Link>

          <Link to={PageRoute.GENERAL_CONSTRUCTION} className="relative group h-[400px] border border-white/10 overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="border border-white w-10 h-10 flex items-center justify-center rounded-full">
                <PencilRuler className="text-white w-5 h-5" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white">Commercial Mgmt</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
          </Link>

        </div>

      </section>

      <AiQuoteForm type="renovation" />
      <Footer />

    </div>
  );
};

export default Home;
