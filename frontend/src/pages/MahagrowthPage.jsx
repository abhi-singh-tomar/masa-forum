import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiDownload } from 'react-icons/fi';

import excel from "../assets/homePage-carousel-imgs/excellence.webp";
import loanmela from "../assets/event-imgs/loanmela.jpg";
import pastRaipur from "../assets/event-imgs/pastRaipur.webp";

import carasoul from "../assets/mahagrowth/carasoul.webp";
import carasoul2 from "../assets/mahagrowth/carasoul2.jpg";

import partner1 from "../assets/mahagrowth/fundgini.jpg";
import partner2 from "../assets/mahagrowth/iccibi.png";
import partner3 from "../assets/mahagrowth/nselogo.png";

import support1 from "../assets/mahagrowth/apeiron.jpg";
import support2 from "../assets/mahagrowth/arthsanket.jpg";
import support3 from "../assets/mahagrowth/bigredlog.jpg";
import support4 from "../assets/mahagrowth/CEI.jpg";
import support5 from "../assets/mahagrowth/gr.png";
import support6 from "../assets/mahagrowth/icex.jpg";
import support7 from "../assets/mahagrowth/indiatechnews.jpg";
import support8 from "../assets/mahagrowth/indukt_log.jpg";
import support9 from "../assets/mahagrowth/institute.jpg";
import support10 from "../assets/mahagrowth/parifound.jpg";
import support11 from "../assets/mahagrowth/rachnaarts.jpg";
import support12 from "../assets/mahagrowth/redmammothcopy.jpg";

import vt from "../assets/ourTeam-imgs/VT.webp";
import sushil from "../assets/ourTeam-imgs/sushil-poddar.webp";
import pragya from "../assets/ourTeam-imgs/pragya.webp";
import ck from "../assets/ourTeam-imgs/ck.webp";
import tr from "../assets/ourTeam-imgs/treasurer.webp";
import v from "../assets/ourTeam-imgs/v.webp";
import ira from "../assets/ourTeam-imgs/ira.JPG.webp";
import anshul from "../assets/ourTeam-imgs/BD-Mumbai/anshul.webp";
import aashish from "../assets/ourTeam-imgs/BD-Mumbai/AashieshTavkarr.jpg";
import aiyappan from "../assets/ourTeam-imgs/BD-Mumbai/aiyappan.jpg";
import AyushGoyal from "../assets/ourTeam-imgs/BD-Mumbai/AyushGoyal.webp";
import Gaurav_Singh from "../assets/ourTeam-imgs/BD-Mumbai/Gaurav_Singh.jpg";
import JayanthiNatarajan from "../assets/ourTeam-imgs/BD-Mumbai/JayanthiNatarajan.jpg";
import MandeepSingh from "../assets/ourTeam-imgs/BD-Mumbai/MandeepSingh.jpg";
import Pradhan from "../assets/ourTeam-imgs/BD-Mumbai/Pradhan.jpg";
import RajSukheja from "../assets/ourTeam-imgs/BD-Mumbai/RajSukheja.jpg";
import RohanTurior from "../assets/ourTeam-imgs/BD-Mumbai/RohanTurior.png";
import SanjayK from "../assets/ourTeam-imgs/BD-Mumbai/SanjayK.jpeg";
import Rachna from "../assets/ourTeam-imgs/BD-Mumbai/Rachna.JPG";
import ravindra from "../assets/ourTeam-imgs/BD-Mumbai/ravindra.png";
import girish from "../assets/ourTeam-imgs/BD-Mumbai/girish.jpg";

const MahagrowthPage = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const images = [excel, loanmela, pastRaipur];
  
  // For responsive circle positions in Event Spectrum
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const spectrumRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle window resize for Event Spectrum
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel navigation
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Event segments with icons
  const eventSegments = [
    { title: 'MSME & Startup Showcase', icon: '🏢' },
    { title: 'Panel Discussions', icon: '🗣️' },
    { title: 'Investor Meet – Nivesh Manthan', icon: '💼' },
    { title: 'keynote address', icon: '🤝' },
    { title: 'Mumbai MASA Board Launch', icon: '🚀' },
    { title: 'Awards Ceremony', icon: '🏆' },
  ];

  // Calculate circle positions for Event Spectrum
  const getCirclePositions = () => {
    const isMobile = windowSize.width < 640;
    const containerWidth = spectrumRef.current?.clientWidth || 300;
    const radius = isMobile ? containerWidth * 0.35 : containerWidth * 0.25;
    
    return eventSegments.map((_, i) => {
      const angle = (i / eventSegments.length) * 2 * Math.PI - Math.PI / 2;
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    });
  };

  return (
    <div className="px-4 md:px-16 py-8 space-y-16 bg-gray-50">
      {/* 1. Hero Carousel */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-2xl shadow-xl overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover absolute"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all"
          aria-label="Previous slide"
        >
          <FiArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all"
          aria-label="Next slide"
        >
          <FiArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 2. Event Details & Brochure */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative py-12 px-4 sm:px-8"
      >
        <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm overflow-hidden max-w-6xl mx-auto">
          <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="py-8 sm:py-12 px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-center md:text-left">
                <motion.h2 
                  whileHover={{ scale: 1.02 }}
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                >
                  MahaGrowth Conclave, Expo & Awards
                </motion.h2>
                <motion.p 
                  whileHover={{ scale: 1.01 }}
                  className="text-gray-700 text-base sm:text-lg font-bold leading-relaxed"
                >
                  The MahaGrowth Conclave Expo and Awards 2025 by MASA Forum brings together industry leaders, startups, investors, and policymakers to unlock the future of business.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Date', value: 'August 23, 2025', icon: '📅' },
                    { label: 'Venue', value: 'NSE ATRIUM, MUMBAI', icon: '📍' },
                    { label: 'Timing', value: '11:00 AM - 5:00 PM', icon: '⏰' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all text-center"
                    >
                      <div className="text-2xl mb-1 sm:mb-2">{item.icon}</div>
                      <p className="text-gray-500 text-sm sm:text-base font-medium">{item.label}</p>
                      <p className="text-base sm:text-lg font-semibold">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4"
                >
                  <a
                    href="https://drive.google.com/file/d/1eAn2N1uO95H_M8JM2P-2uCotMrnj0ClY/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-lg transition-all group"
                  >
                    <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                    <span className="text-sm sm:text-base font-medium">Download Brochure</span>
                  </a>
                </motion.div>
              </div>
              <motion.div 
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 sm:gap-6 justify-center items-center relative"
              >
                <div className="w-64 sm:w-80 h-48 sm:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-2">
                  <img 
                    src={carasoul} 
                    alt="Event Preview 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-64 sm:w-80 h-48 sm:h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2 -translate-y-4 sm:-translate-y-6">
                  <img 
                    src={carasoul2} 
                    alt="Event Preview 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Event Spectrum */}
     {/* 3. Event Spectrum */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="max-w-5xl mx-auto my-12 px-4 sm:px-6 relative group"
>
  <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-3xl shadow-xl overflow-visible transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-200">
    <div className="py-8 sm:py-12 px-4 sm:px-8 relative mb-12 sm:mb-20">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h3 
          whileHover={{ scale: 1.02 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Event Spectrum
        </motion.h3>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-blue-400/30 via-blue-600 to-purple-400/30 mt-2 mx-auto max-w-xs"
        ></motion.div>
      </div>
      
      {/* Updated Container with responsive sizing */}
      <div 
        ref={spectrumRef}
        className="relative w-full aspect-square flex justify-center items-center mx-auto"
        style={{
          maxWidth: 'min(90vw, 500px)',
          minWidth: '300px'
        }}
      >
        {/* Central elements */}
        <motion.div 
          animate={{ 
            rotate: 360,
            transition: { 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            } 
          }}
          className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full border-2 border-dashed border-gray-200/60"
        ></motion.div>

        <div className="absolute w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-blue-100 to-white shadow-inner flex items-center justify-center">
          <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-600 animate-pulse"></div>
        </div>

        {/* Responsive Circle Positions */}
        {(() => {
          const containerWidth = spectrumRef.current?.clientWidth || 300;
          const isMobile = windowSize.width < 640;
          const radius = isMobile ? containerWidth * 0.35 : containerWidth * 0.4;
          const circleSize = isMobile ? '100px' : '140px';
          
          return eventSegments.map((_, i) => {
            const angle = (i / eventSegments.length) * 2 * Math.PI - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  width: circleSize,
                  height: circleSize,
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative bg-white p-3 sm:p-4 rounded-full border-2 border-gray-100 shadow-md text-center flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-gray-50 transition-all duration-300 z-10"
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 text-blue-600">{eventSegments[i].icon}</div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight px-1">
                    {eventSegments[i].title}
                  </h4>
                </motion.div>
              </div>
            );
          });
        })()}
      </div>
    </div>
  </div>
</motion.section>

      {/* 4. Register Now */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 bg-white border-2 border-gray-100 rounded-2xl shadow-lg space-y-8 sm:space-y-12"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">Register Now</h3>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-gray-700 relative">
            <span className="relative z-10 px-4 bg-white">Event Participation Options</span>
            <span className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: 'MSME/Startup Pods',
                description: 'Showcase your innovation to investors and partners',
                price: '₹15,000',
                features: ['Table space will be provided', 'Featured in event catalog', '2 delegate passes', 'Investor pitch session'],
                color: 'bg-gradient-to-br from-orange-500 to-red-600',
                icon: '🏢',
                link: 'https://forms.gle/hiToKyMn2XPgndWX9'
              },
              {
                title: 'Exhibitor Booth',
                description: 'Display your products to thousands of attendees',
                price: '₹15,000',
                features: ['Table space will be provided', 'Custom branding', 'Conference access', 'Lead capture system'],
                color: 'bg-gradient-to-br from-teal-500 to-blue-600',
                icon: '🎪',
                link: 'https://forms.gle/hiToKyMn2XPgndWX9'
              },
              {
                title: 'Nives Manthan - Investor Connect',
                description: 'Access to exclusive investor networking',
                price: '₹15,000',
                features: ['Pre-scheduled meetings', 'Pitch deck review','Networking' , 'Private lounge access'],
                color: 'bg-gradient-to-br from-purple-500 to-pink-600',
                icon: '💼',
                link: 'https://forms.gle/m1rbZZo3NGz5PBeo8'
              },
              {
                title: 'MASA Award Nominee',
                description: 'Nominate for industry recognition',
                price: '₹7,000',
                features: ['15 award categories', 'Jury evaluation', 'Award ceremony', 'Media coverage'],
                color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
                icon: '🏆',
                link: 'https://forms.gle/gwrnqjuamzeEL7Tr7'
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
              >
                <div className={`absolute inset-0 ${card.color} opacity-90`}>
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
                </div>
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6 flex items-center">
                    <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 drop-shadow-md">{card.icon}</div>
                    <div className="h-px flex-1 bg-white/30"></div>
                  </div>
                  <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{card.title}</h5>
                  <p className="text-white/90 text-sm sm:text-base font-bold mb-4 sm:mb-6">{card.description}</p>
                  <div className="mb-4 sm:mb-6">
                    <p className="text-2xl sm:text-3xl font-bold text-white">{card.price}</p>
                    <p className="text-xs sm:text-sm text-white/80">18% GST Will be Additional</p>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {card.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-white/90 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={card.link}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto inline-flex items-center justify-center gap-1 sm:gap-2 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md group-hover:shadow-lg text-sm sm:text-base"
                  >
                    Register Now
                    <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-gray-700 relative">
            <span className="relative z-10 px-4 bg-white">Delegate Passes</span>
            <span className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'VIP Experience',
                price: '₹3,500',
                benefits: ['Premium seating', 'VIP lounge access', 'Exclusive dinner', 'Priority registration'],
                color: 'from-purple-600 via-indigo-600 to-blue-600',
                icon: '👑',
                link: 'https://forms.gle/7oVyydBogJbCnPXn9'
              },
              {
                title: 'Standard Delegate',
                price: '₹1,500',
                benefits: ['Full conference access', 'Lunch included', 'Goodie bag', 'All sessions'],
                color: 'from-blue-500 via-cyan-500 to-teal-500',
                icon: '🎟️',
                link: 'https://forms.gle/7oVyydBogJbCnPXn9'
              },
              {
                title: 'Student Pass',
                price: '₹250',
                benefits: ['Conference access', 'Student networking', 'Workshop access', 'Mentorship sessions'],
                color: 'from-green-500 via-teal-500 to-emerald-500',
                icon: '🎓',
                link: 'https://forms.gle/7oVyydBogJbCnPXn9'
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-r ${card.color} rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden`}
              >
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-white/20">{card.icon}</div>
                  <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{card.title}</h5>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{card.price}</p>
                  <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">18% GST Will be Additional</p>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 mt-2 sm:mt-4">
                    {card.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 font-bold flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 font-bold text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-white/90 text-2xs font-bold sm:text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={card.link}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg font-medium hover:bg-white/20 transition-all text-sm sm:text-base"
                  >
                    Get Pass
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Partners Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto space-y-12 py-8 sm:py-12 px-4"
      >
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Organising Partners
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Our event is made possible with the support of these esteemed organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {[partner3, partner1, partner2].map((logo, i) => (
              <div
                key={i}
                className="w-32 sm:w-40 h-16 sm:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 border border-gray-200"
              >
                <img 
                  src={logo}
                  alt={`Organising Partner ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Supporting Partners
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Special thanks to our supporting partners for their contributions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {[support1, support2, support3, support4, support5, support6, support7, support8, support9, support10, support11, support12].map((logo, i) => (
              <div
                key={i}
                className="w-28 sm:w-36 h-16 sm:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 border border-gray-200"
              >
                <img 
                  src={logo}
                  alt={`Supporting Partner ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            Interested in becoming a partner? <a href="/ContactUs" className="text-blue-600 hover:underline">Contact us</a>
          </p>
        </div>
      </motion.section>

      {/* 6. Executive Team */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-6xl mx-auto text-center py-8 sm:py-12 px-4"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 relative">
          <span className="relative z-10 px-4 bg-gray-50">Executive Team</span>
          <span className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { name: 'Mr. Narendra Kapadia', designation: 'Chairman', organisation: 'MASA Forum', img: v },
            { name: 'Mr. Sushil Poddar', designation: 'President', organisation:'MASA Forum', img: sushil },
            { name: 'Mr. CK Varadrajan', designation: 'Vice-President',organisation: 'MASA Forum', img: ck },
            { name: 'Vibhor Tandon', designation: 'Vice-President', organisation: 'MASA Forum', img: vt },
            { name: 'Ms. Pragya Jhunjhunwala', designation: 'General Secretary', organisation: 'MASA Forum', img: pragya },
            { name: 'Mr. Pradeep Luhariwala', designation: 'Treasurer', organisation: 'MASA Forum', img: tr },
            { name: 'Ms. Ira Saha', designation: 'Director', organisation: 'MASA Forum',img: ira },
            { name: 'Anshul Agarwal', designation: 'Financial Advisory', organisation: 'Chartered Accountant', img: anshul },
            { name: 'Shashank Pradhan', designation: 'Founder CEO', organisation: 'fundgini Pvt Ltd', img: Pradhan },
            { name: 'Dr. Girish', designation: 'Chairman',organisation: 'ICCIBI', img: girish },
            { name: 'Dr. Aashiesh Tavkarr', designation: 'Psychotherapist And Leadership Coach',organisation: 'Metanoia Holistic Leadership Institute', img: aashish },
            { name: 'Aiyappan', designation: 'Founder & CEO', organisation: 'Congruent Services', img: aiyappan },
            { name: 'Ayush Goyal', designation: 'Managing general partner', organisation: ' Induckt ventures', img: AyushGoyal },
            { name: 'Gaurav Singh', designation: 'Chairman & CEO', organisation: 'GR', img: Gaurav_Singh },
            { name: 'Jayanthi Natarajan', designation: 'Academic coordinator',organisation: 'SSSM higher secondary school chithode', img: JayanthiNatarajan },
            { name: 'Mandeep M Singh', designation: 'General Partner', organisation: 'Induckt Ventures', img: MandeepSingh },
            { name: 'Raj Sukheja', designation: 'CXO', organisation: 'Red Mammoth Ventures',img: RajSukheja },
            { name: 'Rohan Turior', designation: 'Founding Partner', organisation: 'INNOIPS', img: RohanTurior },
            { name: 'Sanjay Kimbahune', designation: 'Senior Scientist', organisation: ' TCS',img: SanjayK },
            { name: 'Rachna Lachke Bagwe', designation: 'Founder', organisation: 'Rachna Arts & Creations',img: Rachna },
            { name: 'Ravindra Jadhav', designation: 'COO & Chief Deal Maker',organisation: 'Fundgini.com', img: ravindra },
          ].map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="space-y-2 sm:space-y-3"
            >
              <div className="relative mx-auto w-16 sm:w-20 h-16 sm:h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-2 sm:border-4 border-white shadow-md"
                />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">{member.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{member.designation}</p>
                <p className="text-xs sm:text-sm text-gray-600">{member.organisation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default MahagrowthPage;