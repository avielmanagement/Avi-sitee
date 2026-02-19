import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Hammer, ChevronDown, PhoneCall } from 'lucide-react';
import { PageRoute } from './types';

const NAVBAR_H = 64; // px (Tailwind h-16)

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const location = useLocation();
  const isEvPage = location.pathname === PageRoute.EZ_EV;

  const brandColor = isEvPage ? 'text-cyan-400' : 'text-brand-gold';
  const logoText = isEvPage ? 'EZ EV' : 'AVIEL';

  const services = [
    { name: 'EZ EV Installations', path: PageRoute.EZ_EV },
    { name: 'Junk Removal & Demo', path: PageRoute.JUNK_DEMO },
    { name: 'Roofing Services', path: PageRoute.ROOFING },
    { name: 'General Construction', path: PageRoute.GENERAL_CONSTRUCTION },
  ];

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServiceMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0
        z-[9999]
        text-white
        bg-gradient-to-b from-black/95 via-black/80 to-transparent
        transition-all duration-300
      "
      style={{
        // Helps iPhone notch / safe area
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* Give navbar a REAL height so content spacing is consistent */}
      <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link to={PageRoute.HOME} className="flex items-center gap-2 group relative">
          {isEvPage ? (
            <Zap className={`w-8 h-8 ${brandColor}`} />
          ) : (
            <Hammer className={`w-8 h-8 ${brandColor}`} />
          )}
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tighter leading-none shadow-black drop-shadow-lg">
              {logoText}
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-white/60 leading-none">
              {isEvPage ? 'INSTALLATIONS NYC' : 'MANAGEMENT INC.'}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase font-semibold">
          <Link to={PageRoute.HOME} className="hover:text-brand-gold transition-colors">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServiceMenuOpen(true)}
            onMouseLeave={() => setServiceMenuOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-gold transition-colors py-4">
              Services <ChevronDown className="w-4 h-4" />
            </button>

            {serviceMenuOpen && (
              <div className="absolute top-full left-0 bg-zinc-900 border border-white/10 w-64 p-4 flex flex-col gap-2 shadow-2xl animate-fade-in-up">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block p-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-xs border-b border-white/5 last:border-0"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to={PageRoute.ABOUT} className="hover:text-brand-gold transition-colors">
            About
          </Link>
          <Link to={PageRoute.SERVICE_AREAS} className="hover:text-brand-gold transition-colors">
            Service Areas
          </Link>

          <a href="tel:5168067923" className="flex items-center gap-2 text-brand-green">
            <PhoneCall className="w-4 h-4" /> <span className="hidden lg:inline">(516) 806-7923</span>
          </a>

          <Link
            to={PageRoute.GET_QUOTE}
            className={`border ${
              isEvPage
                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                : 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black'
            } px-6 py-2 transition-all duration-300 text-xs font-bold`}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl overflow-y-auto">
          {/* Push below navbar height + notch */}
          <div
            className="min-h-screen flex flex-col items-center justify-center gap-8 px-6"
            style={{
              paddingTop: `calc(env(safe-area-inset-top) + ${NAVBAR_H}px)`,
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            {services.map((s) => (
              <Link
                key={s.path}
                onClick={() => setIsOpen(false)}
                to={s.path}
                className="text-2xl font-display font-bold text-white hover:text-brand-gold"
              >
                {s.name}
              </Link>
            ))}

            <div className="w-12 h-[1px] bg-white/20 my-4" />

            <Link onClick={() => setIsOpen(false)} to={PageRoute.ABOUT} className="text-xl text-gray-400">
              About Us
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to={PageRoute.SERVICE_AREAS}
              className="text-xl text-gray-400"
            >
              Service Areas
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              to={PageRoute.GET_QUOTE}
              className="mt-8 px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
