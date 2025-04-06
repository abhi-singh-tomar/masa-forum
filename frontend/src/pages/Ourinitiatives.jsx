import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

// Images
import aboutImage from "../assets/awards-imgs/Award-1.jpg";
import aboutImage2 from "../assets/awards-imgs/Award-2.jpg";
import aboutImage3 from "../assets/awards-imgs/Award-3.jpg";
import aboutImage4 from "../assets/awards-imgs/Award-4.jpg";
import aboutImage5 from "../assets/awards-imgs/Award-5.jpg";

// Icons
import { 
  FaTrophy, 
  FaLightbulb, 
  FaNewspaper, 
  FaHandshake, 
  FaChartLine,
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";

const images = [aboutImage, aboutImage2, aboutImage3, aboutImage4, aboutImage5];

const initiatives = [
  {
    title: "My Power Brand",
    description: "Showcasing the most influential emerging startups and MSMEs in India through comprehensive profiling and recognition.",
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
    features: [
      "Annual recognition program",
      "Featured in national media",
      "Networking opportunities",
      "Brand visibility boost"
    ],
    link: "#power-brand"
  },
  {
    title: "MSME Times",
    description: "Quarterly digital magazine covering success stories, government schemes, and the latest business trends for MSMEs.",
    icon: <FaNewspaper className="text-yellow-400 text-4xl" />,
    features: [
      "Digital and print editions",
      "Industry expert interviews",
      "Policy updates analysis",
      "Case studies"
    ],
    link: "#msme-times"
  },
  {
    title: "MSME Kalptaru",
    description: "Funding and mentorship initiative designed to empower MSMEs with resources for exponential growth.",
    icon: <FaChartLine className="text-yellow-400 text-4xl" />,
    features: [
      "Seed funding opportunities",
      "Mentorship from industry leaders",
      "Business development support",
      "Investor connect"
    ],
    link: "#kalptaru"
  },
  {
    title: "Nivesh Manthan",
    description: "Platform connecting promising startups with visionary investors through curated pitching opportunities.",
    icon: <FaHandshake className="text-yellow-400 text-4xl" />,
    features: [
      "Pitch sessions",
      "Investor networking",
      "Funding opportunities",
      "Startup showcase"
    ],
    link: "#nivesh-manthan"
  },
  {
    title: "Events & Initiatives",
    description: "Workshops, exhibitions, conclaves, and training programs conducted across India for ecosystem upliftment.",
    icon: <FaCalendarAlt className="text-yellow-400 text-4xl" />,
    features: [
      "National and regional events",
      "Skill development programs",
      "Industry networking",
      "Government scheme awareness"
    ],
    link: "#events"
  }
];

const Ourinitiatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Top Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-yellow-400 mb-2">Our Initiatives</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Empowering startups and MSMEs through impactful programs and platforms.
        </p>
      </div>

      {/* MASA Awards Section */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            MASA Awards
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognizing outstanding achievements across multiple sectors
          </p>
        </motion.div>

        {/* Image Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-yellow-400 p-4 rounded-full"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[currentIndex, (currentIndex + 1) % images.length, (currentIndex + 2) % images.length].map((idx, i) => (
                  <motion.div
                    key={idx}
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <img 
                      src={images[idx]} 
                      alt={`Award ${idx + 1}`} 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                      <div>
                        <h4 className="text-xl font-bold text-yellow-400 mb-2">Category {idx + 1}</h4>
                        <p className="text-gray-300">Recognizing excellence in sector {idx + 1}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-yellow-400 p-4 rounded-full"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Visit MASA Awards Button */}
        <div className="text-center mt-12">
          <a
            href="https://masaawards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
          >
            Know More <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Individual Initiative Sections */}
      {initiatives.map((initiative, index) => (
        <div key={index} className="py-16 px-6 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              {initiative.title}
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {initiative.description}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                {initiative.icon}
              </div>
              <div className="flex-1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {initiative.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <svg className="flex-shrink-0 w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
               
              </div>
            </div>
          </motion.div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Ourinitiatives;