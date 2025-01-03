import React from 'react';
import Blogs from './pages/Blogs';
import Gallery from './Pages/GalleryPage/Gallery';
import About from './Pages/AboutPage/About';
import VolunteerPage from "./pages/VolunteerPage";
import FAQ from "./pages/FAQ";
import Causes from "./pages/Causes";
import CausesDetail from "./pages/CausesDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VolunteerPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="causes" element={<Causes />} />
          <Route path="causes/:id" element={<CausesDetail />} />
          <Route path="/blogs" component={<Blogs />} />
          <Route path="/about-us" component={<About />} />
          <Route path="/gallery" component={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

