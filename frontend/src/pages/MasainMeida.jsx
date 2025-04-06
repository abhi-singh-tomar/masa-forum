import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const MasainMedia = () => {
  // Sample media coverage data
  const mediaCoverage = [
    {
      id: 1,
      title: "MASA Awards 2023 featured in Business Today",
      source: "Business Today",
      date: "March 15, 2023",
      description: "Coverage of our annual awards ceremony recognizing top MSMEs in the country.",
      image: "https://example.com/media1.jpg",
      link: "https://businesstoday.com/masa-awards-2023"
    },
    {
      id: 2,
      title: "Interview with MASA Founder on Economic Times",
      source: "Economic Times",
      date: "February 28, 2023",
      description: "Exclusive interview discussing the future of MSMEs in India.",
      image: "https://example.com/media2.jpg",
      link: "https://economictimes.com/masa-interview"
    },
    {
      id: 3,
      title: "MASA's Kalptaru Program in Forbes",
      source: "Forbes India",
      date: "January 10, 2023",
      description: "Feature on how our mentorship program is transforming small businesses.",
      image: "https://example.com/media3.jpg",
      link: "https://forbes.com/masa-kalptaru"
    },
    {
      id: 4,
      title: "MSME Times Magazine Launch Coverage",
      source: "Entrepreneur India",
      date: "December 5, 2022",
      description: "Coverage of our quarterly magazine launch event in Mumbai.",
      image: "https://example.com/media4.jpg",
      link: "https://entrepreneur.com/msme-times-launch"
    },
    {
      id: 5,
      title: "Nivesh Manthan Featured in Startup Magazine",
      source: "Startup Magazine",
      date: "November 20, 2022",
      description: "How our investor connect platform is bridging funding gaps.",
      image: "https://example.com/media5.jpg",
      link: "https://startupmag.com/nivesh-manthan"
    },
    {
      id: 6,
      title: "MASA's Impact on Regional Businesses",
      source: "The Hindu BusinessLine",
      date: "October 8, 2022",
      description: "Case studies of businesses transformed through MASA initiatives.",
      image: "https://example.com/media6.jpg",
      link: "https://thehindubusinessline.com/masa-impact"
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