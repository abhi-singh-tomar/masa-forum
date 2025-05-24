import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { sendContactMessage } from "../api";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setLoading(true);
    setSuccess(null);
    const result = await sendContactMessage(formData);
    setSuccess(result.message);
    if (result.success) {
        setFormData({ name: "", email: "", message: "" });
    }
    setLoading(false);
};
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have any questions or need support? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-semibold text-white mb-8 flex items-center"
            >
              <FiSend className="mr-2 text-blue-400" />
              Send Us a Message
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-400" 
                    required 
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-400" 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-gray-500" />
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-white placeholder-gray-400 min-h-[150px]" 
                    required
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FiSend className="ml-2" />
                      </>
                    )}
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                </motion.button>
              </motion.div>
              
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center mt-4 p-3 rounded-lg ${success.includes("Failed") || success.includes("Error") ? "bg-red-900/30 text-red-400 border border-red-700" : "bg-green-900/30 text-green-400 border border-green-700"}`}
                >
                  {success}
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}