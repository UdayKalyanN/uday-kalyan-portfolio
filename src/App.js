import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import CenteredNav from './components/CenteredNav';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen font-[Verdana]"> {/* Changed background to #4287f5 */}
        <CenteredNav />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* <footer className="bg-[#444444] text-[#f5f5dc] p-6 text-center">
          <p className="text-sm tracking-wider">&copy; {new Date().getFullYear()} Uday Kalyan Nuthalapati. All rights reserved.</p>
        </footer> */}
      </div>
    </Router>
  );
};

export default App;
