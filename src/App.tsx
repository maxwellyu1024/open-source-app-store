import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Community from './pages/Community';
import LearnMore from './pages/LearnMore';
import Contact from './pages/Contact';
import Help from './pages/Help';
import AppDetails from './pages/AppDetails';
import DeveloperPortal from './pages/DeveloperPortal';
import DefaultLayout from './components/DefaultLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/community" element={<Community />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/app/:id" element={<AppDetails />} />
          <Route path="/developer" element={<DeveloperPortal />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
