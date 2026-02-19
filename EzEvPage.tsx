import React from 'react';
import Navbar from '../components/Navbar';
import AiQuoteForm from '../components/AiQuoteForm';
import Footer from '../components/Footer';
import { Zap, BatteryCharging, CheckCircle2, ShieldCheck } from 'lucide-react';

const EzEvPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      <Navbar />

      {/* EV HERO */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-24">
        <div className="absolute inset-0 z-0">
           {/* Dark overlay with blue tint for atmosphere */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-blue-900/20 z-10" />
           <img 
             src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
             alt="Modern EV Charging Station" 
             className="w-full h-full object-cover opacity-60" 
           />
        </div>
        
        <div className="relative z-20">
          <div className="flex items-center gap-2 mb-6">
             <div className="h-[2px] w-12 bg-cyan-400" />
             <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Division of Aviel Management</span>
          </div>
          <h1 className="font-display font-bold text-7xl md:text-[10rem] leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Power<br />Your Drive
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-md border-l-2 border-cyan-400 pl-6 drop-shadow-md">
            Professional home and commercial EV charger installations. Seamless, safe, and certified.
          </p>
        </div>
      </section>

      {/* STATISTICS / TRUST BAR */}
      <div className="border-y border-white/10 bg-zinc-900/50 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
         {[
           { label: 'Installations', value: '500+' },
           { label: 'Certified', value: '100%' },
           { label: 'Satisfaction', value: '5-Star' },
           { label: 'Warranty', value: '3 Year' }
         ].map((stat, idx) => (
           <div key={idx} className="p-8 text-center">
             <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
             <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
           </div>
         ))}
      </div>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-4">
            The <span className="text-cyan-400">EZ</span> Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="group p-8 border border-white/10 hover:border-cyan-400 transition-colors bg-zinc-900/40">
              <BatteryCharging className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-display uppercase mb-4">1. Assessment</h3>
              <p className="text-gray-400">We analyze your electrical panel capacity and determine the optimal charger location for your vehicle.</p>
           </div>
           <div className="group p-8 border border-white/10 hover:border-cyan-400 transition-colors bg-zinc-900/40">
              <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-display uppercase mb-4">2. Installation</h3>
              <p className="text-gray-400">Our certified electricians handle the wiring, mounting, and circuit protection upgrades safely.</p>
           </div>
           <div className="group p-8 border border-white/10 hover:border-cyan-400 transition-colors bg-zinc-900/40">
              <CheckCircle2 className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-display uppercase mb-4">3. Activation</h3>
              <p className="text-gray-400">We test the throughput, set up your smart charging app, and ensure you're ready to charge.</p>
           </div>
        </div>
      </section>

      {/* BRANDS / COMPATIBILITY */}
      <section className="py-12 bg-white text-black overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="font-bold uppercase tracking-widest mb-12 text-sm text-gray-500">Compatible With All Major Brands</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 font-display text-3xl md:text-5xl font-bold uppercase">
               <span className="text-[#E82127] drop-shadow-sm hover:scale-105 transition-transform cursor-default">Tesla</span>
               <span className="text-[#F2C413] drop-shadow-sm hover:scale-105 transition-transform cursor-default">Rivian</span>
               <span className="text-[#003478] drop-shadow-sm hover:scale-105 transition-transform cursor-default">Ford</span>
               <span className="text-[#002C5F] drop-shadow-sm hover:scale-105 transition-transform cursor-default">Hyundai</span>
               <span className="text-[#F26522] drop-shadow-sm hover:scale-105 transition-transform cursor-default">ChargePoint</span>
            </div>
         </div>
      </section>

      <AiQuoteForm type="ev" />
      <Footer />
    </div>
  );
};

export default EzEvPage;