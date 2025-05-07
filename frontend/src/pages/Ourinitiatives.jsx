import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  FaAward, 
  FaLightbulb, 
  FaNewspaper, 
  FaHandshake, 
  FaChartLine,
  FaCalendarAlt
} from "react-icons/fa";

// Dummy Images (Replace with your real ones)
import awardLogo from "../assets/awards-imgs/masa-award-img.jpg";
import powerBrand from "../assets/awards-imgs/power-brand-img.jpg";
import powerBrand1 from "../assets/awards-imgs/powerBrand1.JPG";
import powerBrand2 from "../assets/awards-imgs/powerBrand2.png";
import times from "../assets/awards-imgs/MSME-times-img.jpg";
import kalpataru from "../assets/awards-imgs/kalpataru.jpg";
import nivesh from "../assets/awards-imgs/nivesh.jpg";
import raipur from "../assets/awards-imgs/raipur.jpg";
import jobFair from "../assets/event-imgs/upcoming1.png";
import quiz from "../assets/awards-imgs/quizz.jpg";
import nivesh2 from "../assets/awards-imgs/raipur-2.jpg";
import nivesh3 from "../assets/awards-imgs/raipur9.jpg";
import awards1 from "../assets/awards-imgs/2024.jpg";
import awards2 from "../assets/awards-imgs/2025.JPG";
import comingSoon from "../assets/awards-imgs/coming-soon.jpg";
import kalpataru2 from "../assets/awards-imgs/kalpataru2.jpg";

// Data
const initiatives = [
  {
    title: "MASA Awards",
    description: "Recognizing and honoring the achievements of startups and MSMEs across India in various categories.",
    icon: <FaAward className="text-yellow-400 text-4xl" />,
    cards: [
      { image: awardLogo, title: "Startup of the Year", description: "Awarded to the most innovative startup." },
      { image: awards1, title: "MSME Leader", description: "Recognizing outstanding MSME leaders." },
      { image: awards2, title: "Innovation Excellence", description: "Celebrating technological innovation." },
    ]
  },
  {
    title: "My Power Brand",
    description: "Showcasing the most influential emerging startups and MSMEs in India through comprehensive profiling and recognition.",
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
    cards: [
      { image: powerBrand, title: "My Power Brand Podcasts", description: "Our podcast is a treasure trove of magical mantras that can turn your life around." },
      { image: powerBrand1, title: "Podcast shoot Day-1", description: "Ft Twirl Store Founder Sujata Chatterjee" },
      { image: powerBrand2, title: "Podcast shoot Day-6", description: "Ft Renowned matchmaker Kusum Bhandari" },
    ]
  },
  {
    title: "MSME Times",
    description: "Quarterly digital magazine covering success stories, government schemes, and the latest business trends for MSMEs.",
    icon: <FaNewspaper className="text-yellow-400 text-4xl" />,
    cards: [
      { image: times, title: "Market Insights", description: "Trends shaping the future." },
      { image: comingSoon, title: "www.msmetimes.com", description: "" },
    ]
  },
  {
    title: "MSME Kalptaru",
    description: "Funding and mentorship initiative designed to empower MSMEs with resources for exponential growth.",
    icon: <FaChartLine className="text-yellow-400 text-4xl" />,
    cards: [
      { image: kalpataru, title: "Funding Access", description: "Connecting startups to investors." },
      { image: kalpataru2, title: "Mentorship Programs", description: "Guidance from industry veterans." },
    ]
  },
  {
    title: "Nivesh Manthan",
    description: "Platform connecting promising startups with visionary investors through curated pitching opportunities.",
    icon: <FaHandshake className="text-yellow-400 text-4xl" />,
    cards: [
      { image: nivesh, title: "Investor Connect", description: "Bringing founders & investors together." },
      { image: nivesh2, title: "Pitch Days", description: "Live pitching events for startups." },
      { image: nivesh3, title: "VC Panels", description: "Insights from venture capitalists." },
    ]
  },
  {
    title: "Events & Initiatives",
    description: "Workshops, exhibitions, conclaves, and training programs conducted across India for ecosystem upliftment.",
    icon: <FaCalendarAlt className="text-yellow-400 text-4xl" />,
    cards: [
      { image: raipur, title: "Raipur Conclave 2025", description: "" },
      { image: jobFair, title: "East India Job & Career Expo", description: "" },
      { image: quiz, title: "Environment Quizz", description: "" },
    ]
  }
];

const Ourinitiatives = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Top Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">Our Initiatives</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Empowering startups and MSMEs through impactful programs and platforms.
        </p>
      </div>

      {/* Initiatives */}
      {initiatives.map((initiative, index) => (
        <div key={index} className="py-16 px-6 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{initiative.icon}</div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              {initiative.title}
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {initiative.description}
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiative.cards.map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-700/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: cardIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">{card.title}</h3>
                  <p className="text-gray-300">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Know More Button for MASA Awards */}
          {initiative.title === "MASA Awards" && (
            <div className="text-center mt-8">
              <a
                href="https://masaawards.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300"
              >
                Know More
              </a>
            </div>
          )}
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Ourinitiatives;