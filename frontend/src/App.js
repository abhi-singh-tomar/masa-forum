import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About"; // Import About page
import OurTeam from "./pages/OurTeam";
import Partners from "./pages/Partners";
import MasaAwards from "./pages/MasaAwards";
import MembershipPage from "./pages/MembershipPage"; // Ensure correct import path
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import SchemesPage from "./pages/SchemesPage";
import MSMENews from "./pages/MSMENews";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import MouseLightEffect from "./components/MouseLightEffect";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";



function App() {
 
  return (
    <div>
    <MouseLightEffect />
     <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<OurTeam />} />  
      <Route path="/Partners" element={<Partners />} /> 
      <Route path="/masa-awards" element={<MasaAwards />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/BlogsPage" element={<BlogsPage />} />
      <Route path="/MSMENews" element={<MSMENews />} />
      <Route path="/SchemesPage" element={<SchemesPage />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
       {/* Protected Dashboard Route */}
      
    </Routes>
    <WhatsAppFloatButton />
    </div>
  
  );
}

export default App;
