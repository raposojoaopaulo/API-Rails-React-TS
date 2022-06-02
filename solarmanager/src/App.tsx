import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//components
import ConsumerUnits from './components/ConsumerUnits';
import SideNavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import GenerationRecord from './components/GenerationRecord';

//css
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <SideNavBar />
      <h1>Hello</h1>
      <Routes>
        <Route path="/generationrecord" element={<GenerationRecord />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consumerunits" element={<ConsumerUnits />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
