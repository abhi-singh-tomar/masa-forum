import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import eca from "../assets/gallery-imgs/eca.jpg"
import ecb from "../assets/gallery-imgs/ecb.jpg"
import ecc from "../assets/gallery-imgs/ecc.jpg"
import ecd from "../assets/gallery-imgs/ecd.jpg"
import ece from "../assets/gallery-imgs/ece.jpg"




// Sample image data (replace with your own image URLs)
const images = [
      eca, ecb, ecc, ecd, ece
  
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
        Our Gallery
      </h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <motion.div
          className="flex"
          animate={{
            x: `-${position * (100 / images.length)}%`, // Move based on position
          }}
          transition={{
            duration: 1, // Smooth transition duration
            ease: "linear",
          }}
          style={{ width: `${extendedImages.length * (100 / images.length)}%` }} // Ensure enough width for all images
        >
          {extendedImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-[300px] h-[200px] object-cover mx-2 rounded-lg" // Adjust size as needed
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImageSlider;