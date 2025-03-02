import React from "react";
import "./app.css";
import { Home } from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Trademark } from "./components/Trademark/Trademark";
import { Footer } from "./components/Footer/Footer";
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";
import Gallery from "./pages/GalleryPage/Gallery";
import About from "./pages/AboutPage/About";
import VolunteerPage from "./pages/VolunteerPage";
import FAQ from "./pages/FAQ";
import Causes from "./pages/Causes";
import CausesDetail from "./pages/CausesDetail";
import DonationPage from "./pages/DonationPage/DonationPage";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurWorkPage from "./Pages/OurWork/Ourwork";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteers" element={<VolunteerPage />} />
          <Route path="Register" element={<OurWorkPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="causes" element={<Causes />} />
          <Route path="causes/:id" element={<CausesDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetail />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
        <Trademark />
      </Router>
    </>
  );
}

export default App;
