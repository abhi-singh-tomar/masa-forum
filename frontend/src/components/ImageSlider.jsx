import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import eca from "../assets/gallery-imgs/ab-1.webp";
import ecb from "../assets/gallery-imgs/ab-4.webp";
import ecc from "../assets/gallery-imgs/ab-5.webp";
import ecd from "../assets/gallery-imgs/ab-6.webp";
import ece from "../assets/gallery-imgs/ab-3.webp";

// Updated image data with descriptions
const images = [
  { src: eca, desc: "First Achievement - Women MASA Marriott Kolkata" },
  { src: ecb, desc: "Delhi MASA 2024, PhD Chambers Delhi" },
  { src: ecc, desc: "Project Completion - Future Drivers for MSMEs" },
  { src: ecd, desc: "Innovation Award - Sectoral Specific Conclave" },
  { src: ece, desc: "Annual Team Summit - The rich Panel & mentor team" },
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  // Animation variants for continuous sliding
  const slideVariants = {
    enter: { x: "100%" },
    center: { x: 0 },
    exit: { x: "-100%" },
  };

  // Duplicate images to create seamless loop
  const extendedImages = [...images, ...images];

  // Continuous sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.section className="py-16 bg-black overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Our Achievements
      </h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <motion.div
          className="flex"
          animate={{
            x: `-${position * 304}px`, // Fixed pixel value (300px width + 4px total margin)
          }}
          transition={{
            duration: 1,
            ease: "linear",
          }}
          style={{ width: `${extendedImages.length * 304}px` }} // Fixed pixel width
        >
          {extendedImages.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-2 flex flex-col items-center" // Prevent width shrinkage
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              style={{ width: "300px" }} // Explicit width
            >
              <motion.img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-[300px] h-[200px] object-cover rounded-lg"
              />
              <div className="mt-2 w-[300px] bg-black bg-opacity-60 text-white text-center py-2 rounded-lg">
                <p className="text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImageSlider;