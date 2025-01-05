import React from 'react';
import { Home } from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Trademark } from './components/Trademark/Trademark';
import { Footer } from './components/Footer/Footer';
import Blogs from './pages/Blogs';
import Gallery from './pages/GalleryPage/Gallery';
import About from './pages/AboutPage/About';
import VolunteerPage from "./pages/VolunteerPage";
import FAQ from "./pages/FAQ";
import Causes from "./pages/Causes";
import CausesDetail from "./pages/CausesDetail";
import DonationPage from './pages/DonationPage/DonationPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteers" element={<VolunteerPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="causes" element={<Causes />} />
          <Route path="causes/:id" element={<CausesDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
        <Footer />
        <Trademark />
      </Router>
    </>
  );
}

export default App;

