import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaEye } from "react-icons/fa";
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
            description: "To become the leading platform for startups and MSMEs, accelerating innovation, collaboration, and inclusive economic growth."
          }, {
            icon: <FaEye className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Vision", 
            description: "Empowering startups and MSMEs to thrive through innovative support, expert guidance, and strategic partnerships."
          }, {
            icon: <FaLightbulb className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Values", 
            description: "Integrity, innovation, and inclusivity drive our commitment to nurturing a thriving entrepreneurial ecosystem."
          }].map((item, index) => (
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
