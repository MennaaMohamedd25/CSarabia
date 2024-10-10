import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import CompanyOverView from "./Pages/CompanyOverview";
import TeamPage from "./Pages/Team";
import MissionPage from "./Pages/MissionVision";
import ApproachPage from "./Pages/Approach";
import ContactUs from "./Pages/ContactUs";
import ServicesCNSA from "./Pages/ServicesCNSA";
import SPipeline from "./Components/SPipeline";
import SNitrogen from "./Components/SNitrogen";
import Drying from "./Components/Drying";
import Nitrogen from "./Components/Nitrogen.jsx";
import Mothballing from "./Components/Mothballing.jsx";
import Air from "./Components/Air.jsx";
import Gauging from "./Components/Gauging.jsx";
import Inspection from "./Components/Inspection.jsx";
import CPSAPage from "./Pages/CPSA.js";
import CWSAPage from "./Pages/CWSAPage.js";
import CCSAPage from "./Pages/CCSAPage.js";





import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>  {/* This is the only Router */}
      <Navbar />
      <div > {/* Content space for Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="company-overview" element={<CompanyOverView />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="mission&vision" element={<MissionPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="services-cnsa" element={<ServicesCNSA />} />
          <Route path="pipeline" element={<SPipeline />} />
          <Route path="nitrogen" element={<SNitrogen />} />
          <Route path="drying" element={<Drying />} />
          <Route path="nitrogena" element={<Nitrogen />} />
          <Route path="mothballing" element={<Mothballing />} />
          <Route path="air" element={<Air />} />
          <Route path="gauging" element={<Gauging />} />
          <Route path="inspection" element={<Inspection />} />
          <Route path="cpsa" element={<CPSAPage />} />
          <Route path="cwsa" element={<CWSAPage />} />
          <Route path="ccsa" element={<CCSAPage />} />




        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
