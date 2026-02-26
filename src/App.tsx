import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./src/Home";
import EzEvPage from "./src/EzEvPage";
import JunkDemoPage from "./src/JunkDemoPage";
import RoofingPage from "./src/RoofingPage";
import GeneralConstructionPage from "./src/GeneralConstructionPage";
import ServiceAreas from "./src/ServiceAreas";
import About from "./src/About";
import GetQuote from "./src/GetQuote";
import StickyCursor from "./src/StickyCursor";

import PrivacyPolicy from "./src/PrivacyPolicy";
import Terms from "./src/Terms";

const App: React.FC = () => {
  return (
    <HashRouter>
      <StickyCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ez-ev" element={<EzEvPage />} />
        <Route path="/junk-demo" element={<JunkDemoPage />} />
        <Route path="/roofing" element={<RoofingPage />} />
        <Route path="/general-construction" element={<GeneralConstructionPage />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-quote" element={<GetQuote />} />

        {/* ✅ legal pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
