import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "GTCCI",
    logo: "/images/partners-imgs/gtcci-logo.webp",
    website: "https://www.google.com",
  },
  {
    id: 2,
    name: "CWBTA",
    logo: "/images/partners-imgs/cwbta-logo2.webp",
    website: "https://www.microsoft.com",
  },
  {
    id: 3,
    name: "IEM",
    logo: "/images/partners-imgs/iem-logo.webp",
    website: "https://www.amazon.com",
  },
  {
    id: 4,
    name: "Diplomatic Club",
    logo: "/images/partners-imgs/diplomatic-logo.webp",
    website: "https://www.tesla.com",
  },
  {
    id: 5,
    name: "MSME Development Forum",
    logo: "/images/partners-imgs/MSME-logo.webp",
    website: "https://www.google.com",
  },
  {
    id: 6,
    name: "ILEAD",
    logo: "/images/partners-imgs/ilead-logo.webp",
    website: "https://www.microsoft.com",
  },
  {
    id: 7,
    name: "COKUSS",
    logo: "/images/partners-imgs/cokuss-logo.webp",
    website: "https://www.amazon.com",
  },
  {
    id: 8,
    name: "Laghu Udyog Bhaarti",
    logo: "/images/partners-imgs/laghu-logo.webp",
    website: "https://www.tesla.com",
  },
  {
    id: 9,
    name: "Emami Foundation",
    logo: "/images/partners-imgs/emami-logo.webp",
    website: "https://www.google.com",
  },
  {
    id: 10,
    name: "Adhunik TMT Bars",
    logo: "/images/partners-imgs/adhunik-logo.webp",
    website: "https://www.microsoft.com",
  },
  {
    id: 11,
    name: "Linc",
    logo: "/images/partners-imgs/linc-logo.webp",
    website: "https://www.amazon.com",
  },
  {
    id: 12,
    name: "Rajasthan Patrika",
    logo: "/images/partners-imgs/patrika-logo.webp",
    website: "https://www.tesla.com",
  },
  {
    id: 13,
    name: "HairSmart",
    logo: "/images/partners-imgs/hairsmart.webp",
    website: "https://www.tesla.com",
  },
  {
    id: 14,
    name: "Mantras Foundation",
    logo: "/images/partners-imgs/mantras.webp",
    website: "https://www.tesla.com",
  },
];

const banks = [
  {
    id: 1,
    name: "SBI",
    logo: "/images/partners-imgs/sbi-logo.webp",
    website: "https://www.google.com"
  },
  {
    id: 2,
    name: "Kotak Mahindra",
    logo: "/images/partners-imgs/kotak-logo.webp",
    website: "https://www.google.com"
  },
  {
    id: 3,
    name: "ICICI",
    logo: "/images/partners-imgs/icici-logo.webp",
    website: "https://www.google.com"
  },
  {
    id: 4,
    name: "CBI",
    logo: "/images/partners-imgs/Central-Bank-of-India-Logo.webp",
    website: "https://www.google.com"
  },
  {
    id: 5,
    name: "MCX",
    logo: "/images/partners-imgs/mcxlogo.webp",
    website: "https://www.google.com"
  },
  {
    id: 6,
    name: "NSE",
    logo: "/images/partners-imgs/nse-logo.webp",
    website: "https://www.google.com"
  },
  {
    id: 7,
    name: "BSE",
    logo: "/images/partners-imgs/BSE_New_Logo.webp",
    website: "https://www.google.com"
  }
]

const Partners = () => {
  // Gradient text style
  const gradientText = {
    background: "linear-gradient(90deg, #eab308, #ffffff, #eab308)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  // Animation variants for partner items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: {
      y: -5,
      scale: 1.05,
      filter: "drop-shadow(0 0 10px rgba(234, 179, 8, 0.5))",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50 z-0" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={gradientText}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Ecosystem Partners
        </motion.h2>
        <p className="text-gray-300 mt-2 max-w-lg mx-auto">
          We proudly collaborate with industry leaders to deliver excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {partners.map((partner) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center w-48"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto"
              />
              <p className="text-gray-200 font-semibold mt-4">{partner.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50 z-0" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          style={gradientText}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Bank & Exchange Partners
        </motion.h2>
        <p className="text-gray-300 mt-2 max-w-lg mx-auto">
          We proudly collaborate with industry leaders to deliver excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {banks.map((partner) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center w-48"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto"
              />
              <p className="text-gray-200 font-semibold mt-4">{partner.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Partners;