import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from './types';

const ServiceAreas: React.FC = () => {
  useEffect(() => {
    document.title = "Construction Service Areas NYC | Aviel Management";
  }, []);

  const boroughs = [
    { name: 'Brooklyn', areas: ['Williamsburg', 'Bushwick', 'Park Slope', 'Bed-Stuy', 'Crown Heights', 'Bay Ridge'] },
    { name: 'Queens', areas: ['Astoria', 'LIC', 'Forest Hills', 'Flushing', 'Jamaica', 'Ridgewood'] },
    { name: 'Manhattan', areas: ['Upper East Side', 'Upper West Side', 'Harlem', 'SoHo', 'Tribeca', 'Lower East Side'] },
    { name: 'The Bronx', areas: ['Riverdale', 'Fordham', 'Pelham Bay', 'Throgs Neck'] },
    { name: 'Staten Island', areas: ['North Shore', 'Mid-Island', 'South Shore'] },
    { name: 'Long Island', areas: ['Nassau County', 'Select Suffolk Areas'] }
  ];

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase mb-8">
          Service Areas
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Aviel Management Inc. and EZ EV Installations proudly serve the entire New York City metropolitan area.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boroughs.map((b) => (
            <div key={b.name} className="bg-zinc-900 border border-white/10 p-8 hover:border-brand-gold transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-brand-gold w-6 h-6 group-hover:scale-110 transition-transform" />
                <h2 className="font-display text-3xl uppercase text-white">{b.name}</h2>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {b.areas.map(area => (
                  <li key={area} className="text-gray-400 text-sm hover:text-white transition-colors">• {area}</li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/5">
                <Link
                  to={PageRoute.GET_QUOTE}
                  className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white"
                >
                  Get a quote in {b.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-zinc-100 text-black text-center px-6">
        <h2 className="font-display text-3xl uppercase mb-6">Don't see your neighborhood?</h2>
        <p className="mb-8">We likely cover it. Contact us to confirm.</p>
        <a
          href="tel:5168067923"
          className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
        >
          Call (516) 806-7923
        </a>
      </section>

        <Footer />
    </div>
  );
};

export default ServiceAreas;

