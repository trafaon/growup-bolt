import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardScreen } from './components/dashboard/DashboardScreen';
import { GoalScreen } from './components/screens/GoalScreen';
import { RealityScreen } from './components/screens/RealityScreen';
import { OptionsScreen } from './components/screens/OptionsScreen';
import { WayForwardScreen } from './components/screens/WayForwardScreen';
import { SummaryScreen } from './components/screens/SummaryScreen';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<DashboardScreen />} />
        <Route path={ROUTES.GOAL} element={<GoalScreen />} />
        <Route path={ROUTES.REALITY} element={<RealityScreen />} />
        <Route path={ROUTES.OPTIONS} element={<OptionsScreen />} />
        <Route path={ROUTES.WAY_FORWARD} element={<WayForwardScreen />} />
        <Route path={ROUTES.SUMMARY} element={<SummaryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;