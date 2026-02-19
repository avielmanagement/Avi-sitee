import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <h2 className="font-display text-4xl mb-4">AVIEL MANAGEMENT</h2>
          <p className="text-gray-400 max-w-sm">
            Building the future, one renovation at a time. From complete structural overhauls to state-of-the-art EV infrastructure.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-widest text-sm text-brand-gold">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Residential Renovation</li>
            <li>Commercial Build-outs</li>
            <li>Structural Engineering</li>
            <li>EZ EV Installations</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-widest text-sm text-brand-gold">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>info@avielmanagement.com</li>
            <li>(516) 806-7923</li>
            <li>NYC</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600 uppercase tracking-widest">
        © {new Date().getFullYear()} Aviel Management Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;