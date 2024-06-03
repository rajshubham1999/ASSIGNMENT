



import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';
import Particularproject from './components/Particularproject/Particularproject';
import Sampleproject from './components/sampleproject/Sampleproject';
import Editflow from './components/Editflow/Editflow';
import Configurationflow from './components/Configurationflow/Configurationflow';
import Configdisplay from './components/Configurationflow/Configdisplay';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  return (
    <div>
      {isHomeRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Particularproject" element={<Particularproject />} />
        <Route path="/Sampleproject" element={<Sampleproject />} />
        <Route path="/EditFlow" element={<Editflow />} />
        <Route path="/Configurationflow" element={<Configurationflow />} />
        <Route path="/Configdisplay" element={<Configdisplay />} />
        
      </Routes>
    </div>
  );
}

export default App;

