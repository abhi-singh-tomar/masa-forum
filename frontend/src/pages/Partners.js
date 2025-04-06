import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://www.google.com",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    website: "https://www.microsoft.com",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://www.amazon.com",
  },
  {
    id: 4,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    website: "https://www.tesla.com",
  },
];

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
          Our Partner Organizations
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
  );
};

export default Partners;