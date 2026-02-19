import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiQuoteForm from '../components/AiQuoteForm';
import { Trash2, Hammer, Clock, CheckCircle, Truck, AlertTriangle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const JunkDemoPage: React.FC = () => {
  useEffect(() => {
    document.title = "NYC Junk Removal & Demolition | Aviel Management";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      <Navbar />
      
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           {/* Adjusted gradient to be less aggressive and opacity to be higher for visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
           <img 
             src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-full object-cover opacity-70"
             alt="Demolition and Debris Removal"
           />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 px-4 py-1 rounded-full mb-6 backdrop-blur-md">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Same-Day & Next-Day Service</span>
          </div>
          <h1 className="font-display font-bold text-6xl md:text-8xl uppercase leading-none mb-6 drop-shadow-2xl">
            Clear It. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Demolish It.</span><br />Gone.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            NYC's premier junk removal and interior demolition service. We handle the heavy lifting and leave your space broom-clean.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:5168067923" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase tracking-widest transition-all shadow-lg">
              Call Now: (516) 806-7923
            </a>
            <Link to={PageRoute.GET_QUOTE} className="px-8 py-4 border border-white hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all shadow-lg">
              Get a Fast Price
            </Link>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-20 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl uppercase mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: PhoneCall, title: "1. Snap or Call", desc: "Text us a photo of your junk or demo project, or call for an instant ballpark estimate." },
              { icon: Truck, title: "2. We Arrive", desc: "Our uniformed crew arrives on time, confirms the price upfront, and starts working immediately." },
              { icon: CheckCircle, title: "3. Broom-Clean Finish", desc: "We haul everything away and sweep the area clean. You don't lift a finger." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-black border border-white/10 hover:border-orange-500 transition-colors group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-zinc-800 border border-white/20 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold uppercase mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-5xl uppercase mb-6">Junk Removal</h2>
          <ul className="space-y-4">
            {[
              "Estate & Apartment Cleanouts", 
              "Construction Debris Removal", 
              "Furniture & Appliance Disposal", 
              "Basement & Garage Cleanouts",
              "Office Clear-outs"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-lg text-gray-300">
                <Trash2 className="text-orange-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-orange-900/20 border border-orange-500/20 rounded">
            <h4 className="font-bold text-orange-400 uppercase text-sm mb-2">We Do Not Take:</h4>
            <p className="text-sm text-gray-400">Hazardous waste, asbestos, chemicals, or medical waste.</p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-5xl uppercase mb-6">Interior Demolition</h2>
          <ul className="space-y-4">
             {[
              "Kitchen & Bath Strip-outs", 
              "Flooring & Tile Removal", 
              "Sheetrock & Non-load bearing walls", 
              "Retail White-boxing",
              "Shed & Deck Demolition"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-lg text-gray-300">
                <Hammer className="text-red-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
             <p className="text-gray-400 italic border-l-2 border-red-500 pl-4">
               "Aviel Management is fully licensed for non-structural demolition in NYC. We handle all carting and disposal regulations."
             </p>
          </div>
        </div>
      </section>

      {/* PRICING & TRUST */}
      <section className="py-24 bg-zinc-100 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl uppercase mb-6">Transparent Pricing</h2>
              <p className="text-lg mb-6">We price based on volume (how much space it takes up in our truck) or weight for dense construction debris.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="font-bold">Minimum Pickup</span>
                  <span>Starts at $150</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="font-bold">1/4 Truck Load</span>
                  <span>$250 - $350*</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="font-bold">Full Truck Load</span>
                  <span>$600 - $800*</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Prices vary based on material weight and location. Demolition is quoted by project scope.</p>
              </div>
            </div>
            
            <div className="bg-black text-white p-10 relative overflow-hidden">
               <AlertTriangle className="absolute -right-10 -bottom-10 w-64 h-64 text-zinc-800 opacity-20" />
               <h3 className="font-display text-3xl uppercase text-orange-500 mb-6">Why Aviel Management?</h3>
               <ul className="space-y-3 relative z-10">
                 <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Licensed NYC Contractor</li>
                 <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Certificate of Insurance (COI) Available</li>
                 <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Legal Disposal & Recycling</li>
                 <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500"/> Site Left Broom-Clean</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="font-display text-4xl uppercase mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="bg-zinc-900 border border-white/10 p-6 group">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-lg">
              Do you provide COIs for my building management?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400">Yes. We are fully insured and can provide a Certificate of Insurance (COI) for any coop, condo, or office building in NYC typically within 24 hours.</p>
          </details>
          <details className="bg-zinc-900 border border-white/10 p-6 group">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-lg">
              Can you demo a bathroom in a NYC apartment?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400">Absolutely. We specialize in "surgical" interior demolition. We protect common areas, seal the work zone to control dust, and remove all debris efficiently.</p>
          </details>
          <details className="bg-zinc-900 border border-white/10 p-6 group">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-lg">
              How fast can you get here?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-400">We often have same-day or next-day availability for junk removal. For demolition projects, we can typically schedule a walkthrough within 24 hours.</p>
          </details>
        </div>
      </section>

      <AiQuoteForm type="renovation" />
      <Footer />
    </div>
  );
};

export default JunkDemoPage;