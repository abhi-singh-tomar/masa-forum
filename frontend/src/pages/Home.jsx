import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaHandHoldingUsd, FaUsers, FaBusinessTime, FaClone, FaCube } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Footer from "../components/Footer";
import { IoClose } from "react-icons/io5";
import { sendUserIntent } from "../api";
import Faqs from "../components/Faqs";
// ----Image imports----------
import upSkill from "../assets/homePage-carousel-imgs/training.jpg";
import network from "../assets/homePage-carousel-imgs/networking.JPG";
import govt from "../assets/homePage-carousel-imgs/govt.jpg";
import excel from "../assets/homePage-carousel-imgs/excellence.jpg";
import masa from "../assets/homePage-carousel-imgs/whoWeAre.JPG";

import kanika from "../assets/testimonial-imgs/kanika.png";

const carouselImages = [
  {
    url: masa,
    alt: "We are Ecosystem partners for MSMEs & Startups",
    caption: "We are Ecosystem partners for MSMEs & Startups"
  },
  {
    url: excel,
    alt: "Celebrating Innovation & Business Excellence",
    caption: "Celebrating Innovation & Business Excellence"
  },
  {
    url: govt,
    alt: "Government Schemes & Policy Support",
    caption: "Government Schemes & Policy Support"
  },
  {
    url: upSkill,
    alt: "Upskilling Workshops",
    caption: "Upskilling Workshops"
  },
  {
    url: network,
    alt: "National Networking Access",
    caption: "National Networking Access"
  }
];

const testimonials = [
  { 
    name: "Kanika Gupta", 
    text: "I think this a perfect platform for women to come together and grow together. Do something very substantial", 
    profileImage: kanika 
  },
  { 
    name: "Entrepreneur", 
    text: "With MASA, I got access to funding and mentorship that helped scale my business.", 
    profileImage: "https://i.pravatar.cc/100?img=20" 
  },
  { 
    name: "Business Owner", 
    text: "The connections I've built here are priceless. It's an amazing platform for startups!", 
    profileImage: "https://i.pravatar.cc/100?img=30" 
  },
  { 
    name: "Innovator", 
    text: "I found amazing investors and mentors through MASA Forum. Highly recommended!", 
    profileImage: "https://i.pravatar.cc/100?img=40" 
  },
  { 
    name: "MSME Leader", 
    text: "This platform gave me the exposure I needed to take my business to the next level.", 
    profileImage: "https://i.pravatar.cc/100?img=50" 
  },
  { 
    name: "Tech Startup", 
    text: "Great platform to showcase your startup and get support from industry leaders!", 
    profileImage: "https://i.pravatar.cc/100?img=60" 
  },
  { 
    name: "Startup Enthusiast", 
    text: "The guidance and networking I received at MASA Forum were truly game-changing!", 
    profileImage: "https://i.pravatar.cc/100?img=70" 
  },
  { 
    name: "Investor", 
    text: "MASA Forum connects me with the most promising startups and visionary entrepreneurs.", 
    profileImage: "https://i.pravatar.cc/100?img=80" 
  },
  { 
    name: "Tech Founder", 
    text: "I secured my first round of funding through MASA's network of investors!", 
    profileImage: "https://i.pravatar.cc/100?img=11" 
  },
  { 
    name: "Young Entrepreneur", 
    text: "This platform gave me the mentorship I needed to turn my idea into reality.", 
    profileImage: "https://i.pravatar.cc/100?img=12" 
  },
  { 
    name: "Industry Expert", 
    text: "The ecosystem here fosters collaboration and innovation like no other.", 
    profileImage: "https://i.pravatar.cc/100?img=13" 
  },
  { 
    name: "Women Entrepreneur", 
    text: "MASA Forum has been instrumental in my startup journey, offering great support.", 
    profileImage: "https://i.pravatar.cc/100?img=14" 
  },
  { 
    name: "Blockchain Innovator", 
    text: "This community is the best place to discuss, innovate, and grow in the blockchain space.", 
    profileImage: "https://i.pravatar.cc/100?img=15" 
  },
  { 
    name: "AgriTech Founder", 
    text: "MASA Forum opened doors for funding and strategic partnerships in the AgriTech sector.", 
    profileImage: "https://i.pravatar.cc/100?img=16" 
  },
  { 
    name: "HealthTech Innovator", 
    text: "A great ecosystem to learn, network, and grow in the HealthTech industry.", 
    profileImage: "https://i.pravatar.cc/100?img=17" 
  }
];

const features = [
  {
     title: "Government & Policy Advocacy",
    desc: "Stay informed on government schemes, startup-friendly policies, and MSME regulations with expert-led advocacy and guidance.",
    icon: <FaChalkboardTeacher className="text-6xl text-blue-600" />
  },
  {
    title: "Business Mentorship by Experts ",
    desc: "Get personalized business mentorship from industry leaders to help startups and MSMEs scale efficiently and strategically.",
    icon: <FaBusinessTime className="text-6xl text-green-600" />
  },
  {
    title: "Skill Training & Startup Certifications",
    desc: "Gain startup-relevant skills through expert-led training programs and industry-recognized certification courses.",
    icon: <FaUsers className="text-6xl text-yellow-500" />
  },
  
{
    title: "Growth & Funding Opportunities",
    desc: "Discover curated opportunities for funding, collaboration, market access, and growth tailored for startups and MSMEs.",
    icon: <FaHandHoldingUsd className="text-6xl text-purple-600" />
},

  {
    title: "Startup Branding & Marketing Tools",
    desc: "Unlock branding strategies, marketing tools, and startup-specific resources to grow visibility and build your business identity.",
    icon: <FaClone className="text-6xl text-red-500" />
  },
 {
    title: "Nationwide Startup Network Access",
    desc: "Join a powerful national network of entrepreneurs, investors, incubators, and mentors to drive your startup forward.",
    icon: <FaCube className="text-6xl text-teal-500" />
}
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [direction, setDirection] = useState(0);
  const testimonialsPerPage = 3;

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      (prev + 1) % (testimonials.length - testimonialsPerPage + 1)
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      (prev - 1 + testimonials.length) % (testimonials.length - testimonialsPerPage + 1)
    );
  };

  // Popup handling and animations
  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstVisit");
    if (!isFirstVisit) {
      setShowPopup(true);
      localStorage.setItem("firstVisit", "true");
    }
  }, []);

  const handlePopupSelection = async (option) => {
    await sendUserIntent(option);
    setShowPopup(false);
  };

  // Text animation
  const text = "MASA Forum";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const animateText = () => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayedText("");
            index = 0;
            animateText();
          }, 10000);
        }
      }, 150);
    };
    animateText();

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  // Animation variants
  const floatVariant = {
    float: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const testimonialVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      x: dir > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 }
    })
  };

  const carouselVariants = {
    enter: (dir) => ({
      opacity: 0,
    }),
    center: {
      opacity: 1,
      transition: { duration: 1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Carousel Section */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCarouselIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={carouselVariants}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={carouselImages[currentCarouselIndex].url} 
              alt={carouselImages[currentCarouselIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center  justify-center">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-white text-opacity-70 text-center px-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {carouselImages[currentCarouselIndex].caption}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCarouselIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentCarouselIndex === index ? 'bg-yellow-500 w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 flex flex-col justify-center items-center text-center px-6 bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative z-10 text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome <span className="text-3xl md:text-4xl">to</span>{" "}
            <span className="text-yellow-400">
              {displayedText}
              <motion.span
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Helping Startups and MSMEs Thrive with Guidance, Tools & Expert Mentorship
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contactUs"
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold border-2 border-yellow-300 hover:border-yellow-200 transition-all duration-300"
              >
                Event Registration
              </Link>
            </motion.div>

            <span className="hidden sm:block text-yellow-400 text-2xl font-bold">✦</span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/membership"
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold border-2 border-yellow-300 hover:border-yellow-200 transition-all duration-300"
              >
                Membership
              </Link>
            </motion.div>

            <span className="hidden sm:block text-yellow-400 text-2xl font-bold">✦</span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/register"
                className="px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold border-2 border-yellow-300 hover:border-yellow-200 transition-all duration-300"
              >
                Enroll for Acceleration
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-6 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-gray-900 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Member Insights
        </h2>

        <div className="flex items-center justify-center gap-4 px-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <MdArrowBack className="text-2xl text-white" />
          </button>

          <div className="flex overflow-hidden max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={direction}>
              {testimonials
                .slice(currentIndex, currentIndex + testimonialsPerPage)
                .map((testimonial) => (
                  <motion.div
                    key={testimonial.name}
                    custom={direction}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full md:w-96 p-6 bg-white rounded-xl mx-2"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <h3 className="text-gray-900 font-semibold">{testimonial.name}</h3>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <MdArrowForward className="text-2xl text-white" />
          </button>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Take your startup or small business to the next level with MASA Forum.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/register"
              className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl max-w-md relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Why are you here?</h2>
              <div className="space-y-4">
                {[
                  "For MASA Awards",
                  "For Membership",
                  "Startup Incubation",
                  "know About MASA"
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handlePopupSelection(option)}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <IoClose size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <Faqs />
      <Footer />
    </div>
  );
};

export default Home;