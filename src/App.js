import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import ServiceInfo from './components/ServiceInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Cards />
        <ServiceInfo />
        <Routes>
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/youth" element={<div>Youth Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;