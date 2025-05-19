import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About"; // Import About page
import OurTeam from "./pages/OurTeam";
import Partners from "./pages/Partners";
import Ourinitiatives from "./pages/Ourinitiatives";
import MembershipPage from "./pages/MembershipPage"; // Ensure correct import path
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import SchemesPage from "./pages/SchemesPage";
import MSMENews from "./pages/MSMENews";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import MasainMedia from "./pages/MasainMeida"; // Ensure correct import path
import OurMember from "./pages/OurMember";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationAndRefund from "./pages/CancellationAndRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EventRegistrationPage from './pages/EventRegistrationPage';



function App() {
 
  return (
    <div>
     <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<OurTeam />} />  
      <Route path="/masainmedia" element={<MasainMedia />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/CancellationAndRefund" element={<CancellationAndRefund />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/event-registration" element={<EventRegistrationPage />} />


      <Route path="/Partners" element={<Partners />} /> 
      <Route path="/Ourinitiatives" element={<Ourinitiatives />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/BlogsPage" element={<BlogsPage />} />
      <Route path="/MSMENews" element={<MSMENews />} />
      <Route path="/SchemesPage" element={<SchemesPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ourmembers" element={<OurMember />} /> 
       {/* Protected Dashboard Route */}
      
    </Routes>
    <WhatsAppFloatButton />
    </div>
  
  );
}

export default App;
