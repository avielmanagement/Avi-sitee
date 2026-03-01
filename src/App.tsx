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
import StickyCursor from "./StickyCursor";

import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";

import { PageRoute } from "./types";

const App: React.FC = () => {
  return (
    <HashRouter>
      <StickyCursor />

      <Routes>
        {/* Main pages (match PageRoute EXACTLY) */}
        <Route path={PageRoute.HOME} element={<Home />} />
        <Route path={PageRoute.EZ_EV} element={<EzEvPage />} />
        <Route path={PageRoute.JUNK_DEMO} element={<JunkDemoPage />} />
        <Route path={PageRoute.ROOFING} element={<RoofingPage />} />
        <Route
          path={PageRoute.GENERAL_CONSTRUCTION}
          element={<GeneralConstructionPage />}
        />
        <Route path={PageRoute.SERVICE_AREAS} element={<ServiceAreas />} />
        <Route path={PageRoute.ABOUT} element={<About />} />
        <Route path={PageRoute.GET_QUOTE} element={<GetQuote />} />

        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
