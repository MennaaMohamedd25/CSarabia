import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Nitrogen from "./Components/Nitrogen";
import Mothballing from "./Components/Mothballing";
import Air from "./Components/Air";
import Gauging from "./Components/Gauging";
import Cruding from "./Components/Cruding.jsx";
import Inspection from "./Components/Inspection";
import CPSAPage from "./Pages/CPSA";
import CWSAPage from "./Pages/CWSAPage";
import CCSAPage from "./Pages/CCSAPage";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FooterTwo from "./Components/FooterTwo";
import FooterThree from "./Components/FooterThree";
import FooterFour from "./Components/footerFour.jsx";
import FooterFive from "./Components/FooterFive";

function MainContent() {
  const location = useLocation();
  const footerTwoPaths = ["/services-cnsa"];
  const footerThreePath = "/cpsa";
  const footerFourPath = "/cwsa";
  const footerFivePath = "/ccsa";

  return (
    <>
      <Navbar />
      <div> {/* Content space for Navbar */}
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
          <Route path="cruding" element={<Cruding />} />
          <Route path="inspection" element={<Inspection />} />
          <Route path="cpsa" element={<CPSAPage />} />
          <Route path="cwsa" element={<CWSAPage />} />
          <Route path="ccsa" element={<CCSAPage />} />
        </Routes>
      </div>

      {/* Render appropriate footer based on the route */}
      {location.pathname === footerFivePath ? (
        <FooterFive />
      ) : location.pathname === footerFourPath ? (
        <FooterFour />
      ) : location.pathname === footerThreePath ? (
        <FooterThree />
      ) : footerTwoPaths.includes(location.pathname) ? (
        <FooterTwo />
      ) : (
        <Footer />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
