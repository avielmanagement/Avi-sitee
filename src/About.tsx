import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Users, HardHat, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from './types';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Aviel Management Inc. | NYC Construction";
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">
          Our Story
        </span>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase mb-8 leading-none">
          Building NYC<br />Since Day One
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Aviel Management Inc. was founded on a simple principle:
          <strong className="text-white"> Do it right, do it once.</strong>
          In a city full of cut corners, we pride ourselves on precision,
          transparency, and high-quality craftsmanship.
        </p>
      </section>

      <section className="py-20 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-display text-2xl uppercase text-white mb-4">
              Dedicated Crews
            </h3>
            <p className="text-gray-400">
              We don't just broker jobs. We manage our own teams of skilled
              tradespeople, ensuring quality control at every step.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HardHat className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-display text-2xl uppercase text-white mb-4">
              Safety First
            </h3>
            <p className="text-gray-400">
              Fully licensed and insured. We adhere to rigorous NYC DOB safety
              protocols to protect your property and our workers.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-display text-2xl uppercase text-white mb-4">
              Satisfaction
            </h3>
            <p className="text-gray-400">
              Our reputation is our currency. We don't sign off on a project
              until the client is 100% satisfied with the finish.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="font-display text-4xl uppercase text-white mb-8">
          Ready to work with us?
        </h2>
        <Link
          to={PageRoute.GET_QUOTE}
          className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors"
        >
          Start Your Project
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default About;
