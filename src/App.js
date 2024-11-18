import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import ServiceInfo from './components/ServiceInfo';
import Footer from './components/Footer';
import Events from './components/Events';
import SundayService from './components/SundayService';
import Youth from './components/Youth';
import Media from './components/Media';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <ServiceInfo />
            </>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/sunday-service" element={<SundayService />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;