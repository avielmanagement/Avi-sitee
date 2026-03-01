import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import EzEvPage from "./EzEvPage";
import JunkDemoPage from "./JunkDemoPage";
import RoofingPage from "./RoofingPage";
import GeneralConstructionPage from "./GeneralConstructionPage";
import ServiceAreas from "./ServiceAreas";
import About from "./About";
import GetQuote from "./GetQuote";

import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";

import StickyCursor from "./StickyCursor";

const App: React.FC = () => {
  return (
    <HashRouter>
      <StickyCursor />

      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/ez-ev" element={<EzEvPage />} />
        <Route path="/junk-demo" element={<JunkDemoPage />} />
        <Route path="/roofing" element={<RoofingPage />} />
        <Route path="/general-construction" element={<GeneralConstructionPage />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-quote" element={<GetQuote />} />

        {/* legal pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* fallback */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
