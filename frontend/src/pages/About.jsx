import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaEye } from "react-icons/fa";
import aboutImage from "../assets/about-us-image.png";
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

  // Animation variants for section items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { 
      y: -5, 
      textShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
      transition: { duration: 0.3 }
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50 z-0" />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between p-10 z-10">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide"
            style={gradientText}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            MSME And Startup Accelerator -MASA
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MASA Forum is a premier platform connecting startups, investors, and mentors, fostering innovation and growth in the entrepreneurial ecosystem.
          </motion.p>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-yellow-400 opacity-10 rounded-full blur-3xl" />
          <img 
            src={aboutImage}
            alt="About MASA"
            style={{ height: "350px", width: "350px", objectFit: "contain" }}
          />
        </motion.div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 px-10 relative z-10">
        <div className="space-y-16">
          {[{
            icon: <FaRocket className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Mission", 
            description: "To empower startups by providing mentorship, funding, and networking opportunities for sustainable growth."
          }, {
            icon: <FaEye className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Vision", 
            description: "To be the leading entrepreneurial platform, driving economic growth through innovation and collaboration."
          }, {
            icon: <FaLightbulb className="text-yellow-400 text-5xl mb-4" />, 
            title: "Our Values", 
            description: "Integrity, innovation, and inclusivity guide our efforts in fostering entrepreneurial success."
          }].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-lg mx-auto"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              {item.icon}
              <motion.h2
                className="text-3xl font-semibold mb-4"
                style={gradientText}
                variants={lightningVariants}
                animate="animate"
              >
                {item.title}
              </motion.h2>
              <p className="text-gray-300 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;