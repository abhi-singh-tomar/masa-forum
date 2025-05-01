import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';

import photo0 from "../assets/masa-in-media-imgs/Statesman.png";
import photo1 from "../assets/masa-in-media-imgs/prabhat.png";
import photo2 from "../assets/masa-in-media-imgs/quiz.png";
import photo3 from "../assets/masa-in-media-imgs/hindu.jpg";
import photo4 from "../assets/masa-in-media-imgs/chronicle.jpg";
import photo5 from "../assets/masa-in-media-imgs/bengalNews.jpg";

const MasainMedia = () => {
  // Sample media coverage data
  const mediaCoverage = [
    {
      id: 1,
      title: "Global Education Conclave 2025",
      source: "The Statesman",
      date: "February 15, 2025",
      description: "The MSME & Startup Accelerator Awards (MASA) 2025 - Kolkata Edition was a night of inspiration, honouring exceptional entrepreneurs and industry leaders at Silpo Sadan, Camac Street",
      image: photo0,
      link: "https://heyzine.com/flip-book/e33ca50978.html"
    },
    {
      id: 2,
      title: "Coverage of our Excellence awards in MSMEs & Startups.",
      source: "Prabhat Khabar",
      date: "February 8, 2025",
      description: "The MSME & Startup Accelerator Awards 2025 – Kolkata Edition took place at Silpo Sadan, Camac Street, celebrating and honouring distinguished entrepreneurs and industry leaders in an evening filled with inspiration.",
      image: photo1,
      link: "https://www.prabhatkhabar.com/business/monetary-policy-committee-reduces-repo-rate-by-25bps-new-rate-at-6-percent/"
    },
    {
      id: 3,
      title: "Environment Quiz 2024, Kolkata",
      source: "yuvashaktinews",
      date: "10th August 2024",
      description: "The environment quiz was organized as an engaging and educational initiative to help students deepen their understanding of sustainability and conservation. It provided valuable insights and practical awareness, empowering them to make informed decisions and contribute meaningfully to environmental protection.",
      image: photo2,
      link: "https://www.yuvashaktinews.com/"
    },
    {
      id: 4,
      title: "MASA Conclave & Awards 2024, New Delhi",
      source: "iBG News",
      date: "June 13, 2024",
      description: "Coverage of our quarterly magazine launch event in Mumbai.",
      image: photo3,
      link: "https://ibgnews.com/2025/03/16/%F0%9D%90%8F%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%9E-%F0%9D%90%88%F0%9D%90%A7%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%96%F0%9D%90%A2%F0%9D%90%A7/"
    },
    {
      id: 5,
      title: "MASA Women's Excellence Conclave & Awards 2024, Kolkata",
      source: "Chronicle News",
      date: "March 10, 2024",
      description: "How our investor connect platform is bridging funding gaps.",
      image: photo4,
      link: "https://www.deccanchronicle.com/"
    },
    {
      id: 6,
      title: "MSME & Startup Accelerator Conclave & Awards 2024, Kolkata",
      source: "ABP Ananda",
      date: "January 28, 2024",
      description: "Coverage by ABP Ananda of the Panel Discussion of the ",
      image: photo5,
      link: "https://bengali.abplive.com/"
    },
    {
      id: 7,
      title: "Inter College Business & Financial Conclave & Quiz 2024",
      source: "Business Standard",
      date: "April 20, 2024",
      description: "The Inter College Business & Financial Conclave & Quiz 2024 brought together students and industry experts to discuss financial trends and compete in a dynamic quiz, fostering knowledge and innovation.",
      image: photo2, // Reusing an existing image; replace with the correct one if available
      link: "https://www.business-standard.com/"
    }
  ];

  // Featured media (for the hero section)
  const featuredMedia = mediaCoverage[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10"></div>
        <img 
          src={featuredMedia.image} 
          alt={featuredMedia.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 p-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">
              Featured Coverage
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{featuredMedia.title}</h1>
            <p className="text-gray-300 text-lg mb-6">{featuredMedia.description}</p>
            <a 
              href={featuredMedia.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
            >
              Read Full Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* Media Coverage Grid */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            MASA in Media
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how media outlets are covering our initiatives and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCoverage.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-yellow-400 font-medium">{item.source}</span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Press Inquiries Section */}
      <div className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Press Inquiries</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              For media inquiries, interview requests, or press releases, please contact our communications team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:press@masa.org" 
                className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
              >
                Email Press Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MasainMedia;