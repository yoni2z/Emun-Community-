import VolunteerPage from "./pages/VolunteerPage";
import FAQ from "./pages/FAQ";
import Causes from "./pages/Causes";
import CausesDetail from "./pages/CausesDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VolunteerPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="causes" element={<Causes />} />
          <Route path="causes/:id" element={<CausesDetail />} />
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
