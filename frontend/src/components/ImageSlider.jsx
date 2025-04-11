import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import eca from "../assets/gallery-imgs/ab-1.png";
import ecb from "../assets/gallery-imgs/ab-4.png";
import ecc from "../assets/gallery-imgs/ab-5.png";
import ecd from "../assets/gallery-imgs/ab-6.png";
import ece from "../assets/gallery-imgs/ab-3.png";

// Updated image data with descriptions
const images = [
  { src: eca, desc: "First Achievement - Team Celebration" },
  { src: ecb, desc: "Award Ceremony 2024" },
  { src: ecc, desc: "Project Completion Milestone" },
  { src: ecd, desc: "Innovation Award Winner" },
  { src: ece, desc: "Annual Team Summit" },
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