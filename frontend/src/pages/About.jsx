import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaEye, FaUsers, FaHandshake, FaGavel } from "react-icons/fa";
import Footer from "../components/Footer";

const About = () => {
  // Gradient text style
  const gradientText = {
    background: "linear-gradient(90deg, #eab308, #ffffff, #eab308)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  // Lightning effect animation for headings
  const lightningVariants = {
    animate: {
      textShadow: [
        "0 0 5px rgba(255, 255, 255, 0.5)",
        "0 0 15px rgba(234, 179, 8, 0.8)",
        "0 0 25px rgba(234, 179, 8, 1)",
        "0 0 15px rgba(234, 179, 8, 0.8)",
        "0 0 5px rgba(255, 255, 255, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { 
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(234, 179, 8, 0.6)",
      transition: { duration: 0.3 }
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50 z-0" />

      {/* Mission, Vision, and Values Cards Section */}
      <section className="py-20 px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[{
            icon: <FaRocket className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Mission", 
            description: "To accelerate startups and MSMEs in India through funding access, mentorship, and market growth opportunities within an inclusive entrepreneurship ecosystem."
          }, {
            icon: <FaEye className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Vision", 
            description: "To be India’s leading startup accelerator and MSME platform, enabling innovation, equal opportunity, and long-term business sustainability."
          }, {
            icon: <FaLightbulb className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Values", 
            description: "Driven by integrity, innovation, and inclusivity, we support grassroots startups, women entrepreneurs, and MSMEs across urban and rural India."
          }, {
            icon: <FaUsers className="text-yellow-400 text-5xl mb-4" />, 
            title: "Empowering Entrepreneurs", 
            description: "We provide tools, mentorship, and investor-ready platforms to help startups and MSMEs turn ideas into scalable, sustainable businesses."
          }, {
            icon: <FaHandshake className="text-yellow-400 text-5xl mb-4" />, 
            title: "Building Investor Confidence", 
            description: "MASA connects investors with verified startups and MSMEs, boosting visibility, credibility, and funding potential through curated pitch sessions."
          }, {
            icon: <FaGavel className="text-yellow-400 text-5xl mb-4" />, 
            title: "Driving Policy & Impact", 
            description: "We bridge entrepreneurs with government schemes, institutions, and policies that support MSME growth and startup innovation nationwide."
          }
        
        ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-gray-700 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              {item.icon}
              <motion.h2
                className="text-2xl font-bold mb-4"
                style={gradientText}
                variants={lightningVariants}
                animate="animate"
              >
                {item.title}
              </motion.h2>
              <p className="text-gray-300 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
