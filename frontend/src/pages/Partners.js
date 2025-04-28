import React from "react";
import { motion } from "framer-motion";
import gtcci from "../assets/partners-imgs/gtcci-logo.png";
import cwbta from "../assets/partners-imgs/cwbta-logo2.png";
import iem from "../assets/partners-imgs/iem-logo.png";
import dc from "../assets/partners-imgs/diplomatic-logo.jpg";
import msme from "../assets/partners-imgs/MSME-logo.jpg";
import bse from "../assets/partners-imgs/BSE_New_Logo.png";
import cbi from "../assets/partners-imgs/Central-Bank-of-India-Logo.jpg";
import cokuss from "../assets/partners-imgs/cokuss-logo.png";
import icici from "../assets/partners-imgs/icici-logo.jpg";
import ilead from "../assets/partners-imgs/ilead-logo.jpg";
import kotak from "../assets/partners-imgs/kotak-logo.jpg";
import laghu from "../assets/partners-imgs/laghu-logo.png";
import mcx from "../assets/partners-imgs/mcxlogo.jpg";
import nse from "../assets/partners-imgs/nse-logo.jpg";
import sbi from "../assets/partners-imgs/sbi-logo.jpg";
import patrika from "../assets/partners-imgs/patrika-logo.jpg";
import emami from "../assets/partners-imgs/emami-logo.png";
import adhunik from "../assets/partners-imgs/adhunik-logo.jpg";
import linc from "../assets/partners-imgs/linc-logo.png";

const partners = [
  {
    id: 1,
    name: "GTCCI",
    logo: gtcci,
    website: "https://www.google.com",
  },
  {
    id: 2,
    name: "CWBTA",
    logo: cwbta,
    website: "https://www.microsoft.com",
  },
  {
    id: 3,
    name: "IEM",
    logo: iem,
    website: "https://www.amazon.com",
  },
  {
    id: 4,
    name: "Diplomatic Club",
    logo: dc,
    website: "https://www.tesla.com",
  },
  {
    id: 5,
    name: "MSME Development Forum",
    logo: msme,
    website: "https://www.google.com",
  },
  {
    id: 6,
    name: "ILEAD",
    logo: ilead,
    website: "https://www.microsoft.com",
  },
  {
    id: 7,
    name: "COKUSS",
    logo: cokuss,
    website: "https://www.amazon.com",
  },
  {
    id: 8,
    name: "Laghu Udyog Bhaarti",
    logo: laghu,
    website: "https://www.tesla.com",
  },
  {
    id: 9,
    name: "Emami Foundation",
    logo: emami,
    website: "https://www.google.com",
  },
  {
    id: 10,
    name: "Adhunik TMT Bars",
    logo: adhunik,
    website: "https://www.microsoft.com",
  },
  {
    id: 11,
    name: "Linc",
    logo: linc,
    website: "https://www.amazon.com",
  },
  {
    id: 12,
    name: "Rajasthan Patrika",
    logo: patrika,
    website: "https://www.tesla.com",
  },
];

const banks = [
  {
    id: 1,
    name: "SBI",
    logo: sbi,
    website: "https://www.google.com"
  },
  {
    id: 2,
    name: "Kotak Mahindra",
    logo: kotak,
    website: "https://www.google.com"
  },
  {
    id: 3,
    name: "ICICI",
    logo: icici,
    website: "https://www.google.com"
  },
  {
    id: 4,
    name: "CBI",
    logo: cbi,
    website: "https://www.google.com"
  },
  {
    id: 5,
    name: "MCX",
    logo: mcx,
    website: "https://www.google.com"
  },
  {
    id: 6,
    name: "NSE",
    logo: nse,
    website: "https://www.google.com"
  },
  {
    id: 7,
    name: "BSE",
    logo: bse,
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