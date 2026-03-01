import React from "react";
import { Link } from "react-router-dom";
import { PageRoute } from "./types";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="font-display text-3xl mb-4">
            AVIEL MANAGEMENT INC.
          </h2>

          <p className="text-gray-400 max-w-sm">
            Building NYC with precision, transparency,
            and high-quality craftsmanship.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <div>
              <a
                href="tel:9172755796"
                className="text-brand-gold hover:underline transition"
              >
                (917) 275-5796
              </a>
            </div>

            <div>
              <a
                href="mailto:info@avielmanagementinc.com"
                className="text-brand-gold hover:underline transition"
              >
                info@avielmanagementinc.com
              </a>
            </div>
          </div>

          <div className="mt-6 flex gap-4 text-xs uppercase tracking-widest text-white/60">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase tracking-widest text-sm text-brand-gold">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to={PageRoute.EZ_EV} className="hover:text-white">
                EZ EV Installations
              </Link>
            </li>
            <li>
              <Link to={PageRoute.JUNK_DEMO} className="hover:text-white">
                Junk Removal & Demo
              </Link>
            </li>
            <li>
              <Link to={PageRoute.ROOFING} className="hover:text-white">
                Roofing Services
              </Link>
            </li>
            <li>
              <Link to={PageRoute.GENERAL_CONSTRUCTION} className="hover:text-white">
                General Construction
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Aviel Management Inc.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
