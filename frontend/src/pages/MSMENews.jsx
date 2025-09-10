import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const msmeNews = [
  {
    title: "India's Market Regulator Tightens Rules for IPOs of Small Firms",
    date: "March 21, 2025",
    image: "/images/MSME-news-imgs/sebi.webp",
    description: "SEBI introduces stricter guidelines for SME IPOs to ensure transparency and investor protection.",
    link: "https://www.reuters.com/markets/asia/indias-market-regulator-tightens-rules-ipos-small-firms-2024-12-18/",
  },
  {
    title: "Piyush Goyal Emphasizes MSME Sector's Key Role in Driving Services Exports and Creating Jobs",
    date: "March 21, 2025",
    image: "/images/MSME-news-imgs/goyal.webp",
    description: "Commerce Minister highlights MSMEs as a crucial force in India's export and employment sectors.",
    link: "https://www.business-standard.com/markets/capital-market-news/piyush-goyal-emphasizes-msme-sector-s-key-role-in-driving-services-exports-and-creating-jobs-125032100483_1.html",
  },
  {
    title: "ET MSME Awards 2024: Meet the 20 Winners of India's Biggest MSME Awards",
    date: "March 21, 2025",
    image: "/images/MSME-news-imgs/msme-awards.webp",
    description: "Recognizing outstanding MSMEs that are shaping India's business landscape.",
    link: "https://m.economictimes.com/small-biz/et-msme-awards-2024-meet-the-20-winners-of-indias-biggest-msme-awards/articleshow/119287122.cms",
  },
];

const MSMENews = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pt-24 px-6 flex flex-col justify-between">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Latest MSME News</h1>
        <div className="h-1 w-24 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {msmeNews.map((news, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] border border-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-2xl"
                onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found")}
              />
              {index === 0 && (
                <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  Latest
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-400">{news.date}</p>
              <h2 className="text-lg font-semibold mt-2 line-clamp-2">{news.title}</h2>
              <p className="text-gray-400 mt-2 text-sm line-clamp-3">{news.description}</p>
              <div className="mt-4 text-right">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MSMENews;
