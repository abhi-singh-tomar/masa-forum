import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    bio: "Visionary entrepreneur passionate about innovation.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    bio: "Expert in AI and cloud computing.",
  },
  {
    name: "Mike Johnson",
    role: "Head of Marketing",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/mikejohnson",
    bio: "10+ years of experience in digital marketing.",
  },
  {
    name: "Sarah Brown",
    role: "Product Manager",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/sarahbrown",
    bio: "Specializes in product development and UX design.",
  },
  {
    name: "David Lee",
    role: "Finance Head",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/davidlee",
    bio: "Handles financial strategy and investment planning.",
  },
  {
    name: "Emma Watson",
    role: "HR Manager",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/emmawatson",
    bio: "Expert in talent acquisition and team management.",
  },
  {
    name: "Chris Evans",
    role: "Lead Developer",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/chrisevans",
    bio: "Full-stack developer with experience in MERN stack.",
  },
  {
    name: "Olivia Green",
    role: "Business Analyst",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/oliviagreen",
    bio: "Analyzes market trends and business opportunities.",
  },
];

const mentors = [
  {
    name: "Dr. Robert Taylor",
    role: "Tech Mentor",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/roberttaylor",
    bio: "Former CTO with 20+ years in Silicon Valley.",
  },
  {
    name: "Lisa Wong",
    role: "Business Mentor",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/lisawong",
    bio: "Serial entrepreneur with 5 successful exits.",
  },
  {
    name: "Mark Williams",
    role: "Startup Mentor",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/markwilliams",
    bio: "Specializes in early-stage startup growth.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Mentor",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/priyapatel",
    bio: "Digital marketing expert with global experience.",
  },
  {
    name: "James Wilson",
    role: "Finance Mentor",
    image: "/images/Masa logo Feb2025 (1).jpg",
    linkedin: "https://linkedin.com/in/jameswilson",
    bio: "Investment banker turned startup advisor.",
  },
];

const CarouselSection = ({ title, members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(members.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mb-16">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      {/* Carousel Wrapper */}
      <div className="relative w-full">
        <motion.div
          key={currentIndex}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {members
            .slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide)
            .map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
                />
                <h2 className="text-xl font-bold text-white mt-3">{member.name}</h2>
                <p className="text-yellow-400">{member.role}</p>
                <p className="text-gray-300 text-sm mt-2">{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-500 mt-3 transition" />
                </a>
              </div>
            ))}
        </motion.div>

        {/* Navigation Buttons */}
        {members.length > itemsPerSlide && (
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-indigo-300 p-6 pt-16">
        <h1 className="text-4xl font-bold text-yellow-400 mb-12">Meet Our Team</h1>
        
        {/* Team Members Carousel */}
        <CarouselSection title="Our Team" members={teamMembers} />
        
        {/* Mentors Carousel */}
        <CarouselSection title="Our Mentors" members={mentors} />
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;