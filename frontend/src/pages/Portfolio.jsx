import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../components/Footer";

const startups = [
  { id: 1, name: "Tech Innovators", logo: "https://via.placeholder.com/100", description: "Revolutionizing AI-driven solutions with cutting-edge technology to improve efficiency and automation in industries. We provide AI-powered analytics, automation, and deep learning models for businesses.", location: "Bangalore, India", sector: "Technology", year: "2023", website: "#" },
  { id: 2, name: "AI Nexus", logo: "https://via.placeholder.com/100", description: "Advanced AI and ML applications to drive innovation across multiple sectors, including healthcare and finance. Our solutions include predictive analytics, intelligent chatbots, and smart automation tools.", location: "Hyderabad, India", sector: "Technology", year: "2024", website: "#" },
  { id: 3, name: "CyberTech", logo: "https://via.placeholder.com/100", description: "Next-gen cybersecurity solutions that provide robust protection against cyber threats for businesses and individuals. We specialize in AI-driven threat detection, encryption, and secure cloud infrastructure.", location: "Chennai, India", sector: "Technology", year: "2022", website: "#" },
  { id: 4, name: "Health First", logo: "https://via.placeholder.com/100", description: "Smart healthcare solutions designed to improve patient care and streamline hospital management. Our platform integrates telemedicine, AI diagnostics, and digital patient records.", location: "Delhi, India", sector: "Healthcare", year: "2022", website: "#" },
  { id: 5, name: "MediTech", logo: "https://via.placeholder.com/100", description: "Innovative medical devices that are transforming the healthcare industry by making treatments more effective. We focus on AI-powered diagnostic tools, robotic surgery, and wearable health monitors.", location: "Pune, India", sector: "Healthcare", year: "2023", website: "#" },
  { id: 6, name: "Wellness Hub", logo: "https://via.placeholder.com/100", description: "Holistic wellness solutions that integrate fitness, mental health, and nutrition into everyday life. Our platform offers AI-driven fitness plans, mental health therapy, and personalized nutrition guides.", location: "Mumbai, India", sector: "Healthcare", year: "2024", website: "#" },
];

export default function Portfolio() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleStartups = startups.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < startups.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div>
    <div className="p-8 max-w-7xl mx-auto bg-gray-800 text-white min-h-screen rounded-xl shadow-xl relative">
      <h1 className="text-5xl font-bold mb-6 text-center text-green-400">MASA Startup Portfolio</h1>
      <p className="text-center text-lg mb-8 text-indigo-900">Explore the startups supported by MASA Forum</p>

      <div className="relative flex items-center justify-center overflow-hidden mt-6">
        <button onClick={prevSlide} className="absolute left-0 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 z-10">
          <FaChevronLeft />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 transform transition-transform duration-500">
          {visibleStartups.map((startup) => (
            <div key={startup.id} className="p-6 rounded-lg bg-gray-800 shadow-lg text-center flex flex-col justify-between w-72 h-80 border-2 border-gray-700 hover:border-green-400 transition">
              <h2 className="text-2xl font-bold text-green-400">{startup.name}</h2>

              {/* Scrollable description with hidden scrollbar */}
              <div className="overflow-y-auto max-h-24 text-gray-300 text-md p-2 hide-scrollbar">
                {startup.description}
              </div>

              <div className="text-sm text-gray-400">
                <p>📍 {startup.location}</p>
                <p>📅 Supported: {startup.year}</p>
              </div>
              <a href={startup.website} className="mt-4 text-green-400 font-medium hover:underline">
                Visit Website
              </a>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-0 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 z-10">
          <FaChevronRight />
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
