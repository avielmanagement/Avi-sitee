import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EzEvPage from './pages/EzEvPage';
import JunkDemoPage from './pages/JunkDemoPage';
import RoofingPage from './pages/RoofingPage';
import GeneralConstructionPage from './pages/GeneralConstructionPage';
import ServiceAreas from './pages/ServiceAreas';
import About from './pages/About';
import GetQuote from './pages/GetQuote';
import StickyCursor from './components/StickyCursor';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <StickyCursor />
      <Routes>
        <Route path={PageRoute.HOME} element={<Home />} />
        <Route path={PageRoute.EZ_EV} element={<EzEvPage />} />
        <Route path={PageRoute.JUNK_DEMO} element={<JunkDemoPage />} />
        <Route path={PageRoute.ROOFING} element={<RoofingPage />} />
        <Route path={PageRoute.GENERAL_CONSTRUCTION} element={<GeneralConstructionPage />} />
        <Route path={PageRoute.SERVICE_AREAS} element={<ServiceAreas />} />
        <Route path={PageRoute.ABOUT} element={<About />} />
        <Route path={PageRoute.GET_QUOTE} element={<GetQuote />} />
      </Routes>
    </HashRouter>
  );
};

export default App;