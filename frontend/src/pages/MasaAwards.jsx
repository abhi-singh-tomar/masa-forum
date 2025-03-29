import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { applyForAward } from "../api";

import Footer from "../components/Footer";
import aboutImage from "../assets/Masa.jpg";
import aboutImage2 from "../assets/Masa.jpg";
import aboutImage3 from "../assets/Masa.jpg";
import aboutImage4 from "../assets/Masa.jpg";
import aboutImage5 from "../assets/Masa.jpg";

const images = [aboutImage, aboutImage2, aboutImage3, aboutImage4, aboutImage5];

const MasaAwards = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "" });
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await applyForAward(formData);
  
    setMessage(result.message);
  
    if (result.success) {
      setFormData({ name: "", phone: "", email: "", address: "" });
      setTimeout(() => setShowForm(false), 2000);
    }
  };
  
  

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"
          ></motion.div>
        </div>
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={variants} className="mb-8">
            <motion.span 
              className="text-gold-500 font-light tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              PRESENTING
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
            variants={variants}
          >
            MASA AWARDS
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300"
            variants={variants}
          >
            Celebrating excellence and innovation in the MSME ecosystem
          </motion.p>
          
          <motion.div variants={variants} className="mt-12">
            <motion.button
              onClick={() => setShowForm(true)}
              className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Apply for Nominations</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Awards Gallery */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Award Categories
          </h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognizing outstanding achievements across multiple sectors
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-yellow-400 p-4 rounded-full shadow-xl backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-yellow-400 p-4 rounded-full shadow-xl backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 max-w-md w-full"
            >
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center mb-6">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">MASA Awards Application</h3>
                  <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
                  <p className="text-gray-300">Join the elite circle of award-winning enterprises</p>
                </motion.div>
              </div>
              
              {message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center mb-4 ${message.includes("Failed") ? "text-red-400" : "text-green-400"}`}
                >
                  {message}
                </motion.p>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Full Name" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <textarea 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    placeholder="About Your Business (Achievements, Innovations, etc.)" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400 h-24"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-between pt-4"
                >
                  <button 
                    type="button" 
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-lg shadow-md transition"
                  >
                    Submit Application
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MasaAwards;