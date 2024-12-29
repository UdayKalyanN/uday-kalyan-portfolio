// App.js
import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import CenteredNav from './components/CenteredNav';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <CenteredNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;