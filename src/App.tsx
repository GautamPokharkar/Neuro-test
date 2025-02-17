import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DashboardPage } from './pages/DashboardPage';
import { LearningHubPage } from './pages/LearningHubPage';
import { DailyPlannerPage } from './pages/DailyPlannerPage';
import { SocialSkillsPage } from './pages/SocialSkillsPage';
import { ParentDashboardPage } from './pages/ParentDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="onboarding" element={<OnboardingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="learning" element={<LearningHubPage />} />
          <Route path="planner" element={<DailyPlannerPage />} />
          <Route path="social" element={<SocialSkillsPage />} />
          <Route path="parent" element={<ParentDashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;