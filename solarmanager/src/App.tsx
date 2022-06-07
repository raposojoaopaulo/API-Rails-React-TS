import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//components
import ConsumerUnits from './components/ConsumerUnits';
import SideNavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import GenerationRecord from './components/GenerationRecord';
import ConsumerUnitForm from './components/ConsumerUnitForm';
import { ToastContainer } from 'react-toastify';

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
        <Route path="/consumerunits/new" element={<ConsumerUnitForm />} />
      </Routes>
      <ToastContainer />
    </div>
  </Router>
  );
}

export default App;
