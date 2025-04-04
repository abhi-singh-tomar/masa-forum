import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

// ----------------------------image Imports For Teams----------------------------------------
import vt from "../assets/ourTeam-imgs/VT.png";
import sushil from "../assets/ourTeam-imgs/sushil-poddar.png";
import pragya from "../assets/ourTeam-imgs/pragya.jpg";
import ck from "../assets/ourTeam-imgs/ck.png";
import tr from "../assets/ourTeam-imgs/treasurer.jpg";
import v from "../assets/ourTeam-imgs/v.png";
// ----------------------------image Imports For Teams----------------------------------------


// ---------------------------- image Imports For Mentors ------------------------------------
import ajay from "../assets/ourMentors-imgs/ajay-arora.jpeg";
import ajit from "../assets/ourMentors-imgs/Ajit-Nayar.jpeg";
import deepak from "../assets/ourMentors-imgs/Deepak-Vohra.jpeg";
import touseef from "../assets/ourMentors-imgs/Dr-Touseef.jpeg";
import randeep from "../assets/ourMentors-imgs/Dr._Randeep_Guleria.jpg";
import gaurav from "../assets/ourMentors-imgs/Gaurav-Gupta.jpeg";
import harsh from "../assets/ourMentors-imgs/Harsh-Vardhan-Modi.jpeg";
import ina from "../assets/ourMentors-imgs/Ina.jpeg";
import kamlesh from "../assets/ourMentors-imgs/Kamlesh-Jain.jpeg";
import basu from "../assets/ourMentors-imgs/Madhumita-Basu.jpeg";
import mamta from "../assets/ourMentors-imgs/Mamta-Bihani.jpeg";
import pankaj from "../assets/ourMentors-imgs/pankaj-shukla.jpg";
import satyajit from "../assets/ourMentors-imgs/Satyajit-Chakra.jpeg";
import shaji from "../assets/ourMentors-imgs/Shaji-V.jpeg";
import tvs from "../assets/ourMentors-imgs/TVS-SHenoy.jpeg";
import praveen from "../assets/ourMentors-imgs/praveen-khemka.png";
import prabal from "../assets/ourMentors-imgs/Prabal-Chatterjee.png";
import aditya from "../assets/ourMentors-imgs/aditya-arora.jpeg";
import sharad from "../assets/ourMentors-imgs/sharad-kohli.jpg";
import skumar from "../assets/ourMentors-imgs/shubhendu-kumar.jpeg";
import khiro from "../assets/ourMentors-imgs/khiro-mishra.jpeg";
import vk from "../assets/ourMentors-imgs/vk-jaithley.jpg";
import dg from "../assets/ourMentors-imgs/gayen.jpg"
// ---------------------------- image Imports For Mentors ------------------------------------

const teamMembers = [
  {
    name: "Shri. Sushil Poddar",
    role: "President, MASA Forum",
    image: sushil,
    linkedin: "https://linkedin.com/",
    bio: "",
  },
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: vt,
    linkedin: "https://linkedin.com/",
    bio: "",
  },{
    name: "Mr. CK Varadrajan",
    role: "Vice-President, MASA Forum",
    image: ck,
    linkedin: "https://linkedin.com/",
    bio: "Specializes in product development and UX design.",
  },{
    name: "Ms. Pragya Jhunjhunwala",
    role: "General Secretary, MASA Forum",
    image: pragya,
    linkedin: "https://linkedin.com/",
    bio: "10+ years of experience in digital marketing.",
  },
  {
    name: "Mr. Narendra Kapadia",
    role: "Chairman, MASA Forum",
    image: v,
    linkedin: "https://linkedin.com/",
    bio: "Handles financial strategy and investment planning.",
  },
  {
    name: "Mr. Pradeep Luhariwala",
    role: "Treasurer, MASA Forum",
    image: tr,
    linkedin: "https://linkedin.com/",
    bio: "Expert in talent acquisition and team management.",
  },
];

const mentors = [
  {
    name: "Ajay Arora",
    // role: "Designation to be entered",
    image: ajay,
    linkedin: "https://www.linkedin.com/in/ajay-arora/",
    bio: "National Leader and Head of Investment Banking Advisory at EY",
  },
  {
    name: "Ina Bose",
    // role: "Designation to be entered",
    image: ina,
    linkedin: "https://www.linkedin.com/in/ina-bose-6270a940/",
    bio: "Academic and Communication Consultant.",
  },
  {
    name: "Dr. Dilip Kumar Gayen",
    // role: "Designation to be entered",
    image: dg,
    linkedin: "https://www.linkedin.com/in/dilip-kumar-gayen-consultant-quality-productivity-5912ab12/",
    bio: "Manufacturing & Business Excellence Expert",
  },{
    name: "Ajith Nayar",
    // role: "Designation to be entered",
    image: ajit,
    linkedin: "https://www.linkedin.com/in/ajithnayarcamcom/",
    bio: "Co-Founder and CEO at CamCom",
  },{
    name: "Deepak Vohra",
    // role: "Designation to be entered",
    image: deepak,
    linkedin: "https://www.linkedin.com/in/deepak-vohra-925835160/",
    bio: "Ambassador and Special Advisor in Africa and in Ladakh",
  },{
    name: "Dr Touseef Ahmed",
    // role: "Designation to be entered",
    image: touseef,
    linkedin: "https://www.linkedin.com/in/dr-touseef-ahmed-7a7a89253/",
    bio: "Secretary/Executive Director at Rotary International",
  },{
    name: "Dr Randeep Guleria",
    // role: "Designation to be entered",
    image: randeep,
    linkedin: "https://www.linkedin.com/",
    bio: "Bio Details to be entered",
  },{
    name: "Gaurav Gupta",
    // role: "Designation to be entered",
    image: gaurav,
    linkedin: "https://www.linkedin.com/in/gaurav-gupta-2184891a/",
    bio: "Founder President at Global Trade & Technology council of India",
  },{
    name: "Harsh vardhan Modi",
    // role: "Designation to be entered",
    image: harsh,
    linkedin: "https://www.linkedin.com/in/harshmodi/",
    bio: "Director at Eden Group | Real Estate Developer",
  },{
    name: "Kamlesh Jain",
    // role: "Designation to be entered",
    image: kamlesh,
    linkedin: "https://www.linkedin.com/in/kamlesh-jain-b1b3b816/",
    bio: "Managing Director Holdwell Components Pvt Ltd",
  },{
    name: "Madhumita Basu",
    // role: "Designation to be entered",
    image: basu,
    linkedin: "https://www.linkedin.com/in/madhumita-basu-b4971341/",
    bio: "Non Executive Director, Nu Vista Ltd. Advisor",
  },{
    name: "Dr. CS Adv Mamta Binani",
    // role: "Designation to be entered",
    image: mamta,
    linkedin: "https://www.linkedin.com/in/mamtabinani/",
    bio: "National President of The Institute of Company Secretaries",
  },
  {
    name: "Pankaj Shukla",
    // role: "Designation to be entered",
    image: pankaj,
    linkedin: "https://www.linkedin.com/in/pankaj-shukla-8480b74/",
    bio: "Entertainment Head at Amar Ujala",
  },
  {
    name: "Satyajit Chakrabarti",
    // role: "Designation to be entered",
    image: satyajit,
    linkedin: "https://www.linkedin.com/in/csatyajit/",
    bio: "Bio Details to be entered",
  },
  {
    name: "Shaji V",
    // role: "Designation to be entered",
    image: shaji,
    linkedin: "https://www.linkedin.com/in/shaji/",
    bio: "Director at Deloitte",
  },{
    name: "TVS Shenoy",
    // role: "Designation to be entered",
    image: tvs,
    linkedin: "https://www.linkedin.com/in/tvsshenoy/",
    bio: "Executive in Charge at Tata Steel",
  },{
    name: "Praveen Khemka",
    // role: "Designation to be entered",
    image: praveen,
    linkedin: "https://www.linkedin.com/in/khemkap/",
    bio: "Director at Tufwud | Founder at BSE",
  },{
    name: "Prabal Chatterjee",
    // role: "Designation to be entered",
    image: prabal,
    linkedin: "https://www.linkedin.com/in/prabal-chatterjee-17759621/",
    bio: "Co-Owner of Mono Translation Bureau",
  },{
    name: "Aditya Arora",
    // role: "Designation to be entered",
    image: aditya,
    linkedin: "https://www.linkedin.com/in/thefaadguy/",
    bio: "CEO at Faad Capital | Angel Investor",
  },
  {
    name: "Sharad Kohli",
    // role: "Designation to be entered",
    image: sharad,
    linkedin: "https://www.linkedin.com/in/sharad-kohli-6037685/",
    bio: "Tax Guru | Founder & Chairman KCC group",
  },
  {
    name: "Capt Shubhendu kumar",
    // role: "Designation to be entered",
    image: skumar,
    linkedin: "https://www.linkedin.com/in/capt-shubhendu-kumar-tiger-049794185/",
    bio: "CEO at Corporate Access",
  },
  {
    name: "Khiro Mishra",
    // role: "Designation to be entered",
    image: khiro,
    linkedin: "https://www.linkedin.com/in/khirodra/",
    bio: "Cybersecurity CEO, Board Advisor",
  },{
    name: "V.K.Jaitley",
    // role: "Designation to be entered",
    image: vk,
    linkedin: "https://www.linkedin.com/in/jaitly/",
    bio: "National Co-ordinator at Youth4Nation",
  }
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