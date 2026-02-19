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
<section
  <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden perspective-[2000px]">
  style={{
    paddingTop: 'calc(env(safe-area-inset-top) + 64px)', // 64px navbar
    minHeight: '100vh',
  }}
>
  {/* Background Parallax Simulation */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      alt="Construction Site"
      className="w-full h-full object-cover opacity-40 scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
  </div>

  {/* IMPORTANT: removed h-full here */}
  <div className="relative z-10 text-center px-4 w-full flex flex-col justify-center py-10">
    <h2 className="text-white font-sans font-black tracking-[0.3em] text-3xl md:text-6xl mb-8 animate-fade-in-up drop-shadow-2xl shadow-black">
      AVIEL MANAGEMENT INC.
    </h2>

    <div className="perspective-[2000px]">
      <h1 className="font-display font-bold text-8xl md:text-[11rem] lg:text-[13rem] uppercase leading-[0.8] tracking-tighter text-brand-gold drop-shadow-2xl opacity-0 animate-flip-up origin-bottom">
        Vision Into<br />Reality
      </h1>
    </div>

    <p className="mt-12 max-w-6xl mx-auto text-blue-200 font-display font-bold uppercase tracking-widest text-2xl md:text-3xl animate-fade-in-up delay-300 drop-shadow-lg leading-tight shadow-black">
      Full-Service NYC General Contractor & EV Infrastructure Specialist
    </p>

    <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-500">
      <Link
        to={PageRoute.GET_QUOTE}
        className="px-10 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
      >
        Get a Free Quote
      </Link>

      <Link
        to={PageRoute.EZ_EV}
        className="px-10 py-4 border border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-colors shadow-xl shadow-cyan-900/20"
      >
        EV Charger Installation
      </Link>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-10 md:left-20 flex flex-col gap-2 text-xs uppercase tracking-widest text-white/50 animate-bounce">
    <span>Scroll</span>
    <div className="w-[1px] h-12 bg-white/50 mx-auto" />
  </div>
</section>
