import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Reading from './pages/Reading';

import About from './pages/About';


import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}


export default App;
