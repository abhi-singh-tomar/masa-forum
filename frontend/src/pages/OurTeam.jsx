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
    bio: "National Traders' Welfare Board Dept of Promotion of Industry & Internal Trade Ministry of Commerce & Industry Govt Of India",
  },
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: vt,
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "Risk Management,Capital Markets Leadership Coach.",
  },
  {
    name: "Mr. CK Varadrajan",
    role: "Vice-President, MASA Forum",
    image: ck,
    linkedin: "https://linkedin.com/",
    bio: "Hon. Secretary at Confederation of West Bengal Trade Associations",
  },{
    name: "Ms. Pragya Jhunjhunwala",
    role: "General Secretary, MASA Forum",
    image: pragya,
    linkedin: "https://www.linkedin.com/in/pragya-jhunjhunwala-3b16a7181/",
    bio: "CSR & Startup Consultant",
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
    image: ajay,
    linkedin: "https://www.linkedin.com/in/ajay-arora/",
    bio: "National Leader and Head of Investment Banking Advisory at EY",
  },
  {
    name: "Ina Bose",
    image: ina,
    linkedin: "https://www.linkedin.com/in/ina-bose-6270a940/",
    bio: "Academic and Communication Consultant.",
  },
  {
    name: "Dr. Dilip Kumar Gayen",
    image: dg,
    linkedin: "https://www.linkedin.com/in/dilip-kumar-gayen-consultant-quality-productivity-5912ab12/",
    bio: "Manufacturing & Business Excellence Expert",
  },{
    name: "Ajith Nayar",
    image: ajit,
    linkedin: "https://www.linkedin.com/in/ajithnayarcamcom/",
    bio: "Co-Founder and CEO at CamCom",
  },{
    name: "Deepak Vohra",
    image: deepak,
    linkedin: "https://www.linkedin.com/in/deepak-vohra-925835160/",
    bio: "Ambassador and Special Advisor in Africa and in Ladakh",
  },{
    name: "Dr Touseef Ahmed",
    image: touseef,
    linkedin: "https://www.linkedin.com/in/dr-touseef-ahmed-7a7a89253/",
    bio: "Secretary/Executive Director at Rotary International",
  },{
    name: "Dr Randeep Guleria",
    image: randeep,
    linkedin: "https://www.linkedin.com/",
    bio: "Bio Details to be entered",
  },{
    name: "Gaurav Gupta",
    image: gaurav,
    linkedin: "https://www.linkedin.com/in/gaurav-gupta-2184891a/",
    bio: "Founder President at Global Trade & Technology council of India",
  },{
    name: "Harsh vardhan Modi",
    image: harsh,
    linkedin: "https://www.linkedin.com/in/harshmodi/",
    bio: "Director at Eden Group | Real Estate Developer",
  },{
    name: "Kamlesh Jain",
    image: kamlesh,
    linkedin: "https://www.linkedin.com/in/kamlesh-jain-b1b3b816/",
    bio: "Managing Director Holdwell Components Pvt Ltd",
  },{
    name: "Madhumita Basu",
    image: basu,
    linkedin: "https://www.linkedin.com/in/madhumita-basu-b4971341/",
    bio: "Non Executive Director, Nu Vista Ltd. Advisor",
  },{
    name: "Dr. CS Adv Mamta Binani",
    image: mamta,
    linkedin: "https://www.linkedin.com/in/mamtabinani/",
    bio: "National President of The Institute of Company Secretaries",
  },
  {
    name: "Pankaj Shukla",
    image: pankaj,
    linkedin: "https://www.linkedin.com/in/pankaj-shukla-8480b74/",
    bio: "Entertainment Head at Amar Ujala",
  },
  {
    name: "Satyajit Chakrabarti",
    image: satyajit,
    linkedin: "https://www.linkedin.com/in/csatyajit/",
    bio: "Bio Details to be entered",
  },
  {
    name: "Shaji V",
    image: shaji,
    linkedin: "https://www.linkedin.com/in/shaji/",
    bio: "Director at Deloitte",
  },{
    name: "TVS Shenoy",
    image: tvs,
    linkedin: "https://www.linkedin.com/in/tvsshenoy/",
    bio: "Executive in Charge at Tata Steel",
  },{
    name: "Praveen Khemka",
    image: praveen,
    linkedin: "https://www.linkedin.com/in/khemkap/",
    bio: "Director at Tufwud | Founder at BSE",
  },{
    name: "Prabal Chatterjee",
    image: prabal,
    linkedin: "https://www.linkedin.com/in/prabal-chatterjee-17759621/",
    bio: "Co-Owner of Mono Translation Bureau",
  },{
    name: "Aditya Arora",
    image: aditya,
    linkedin: "https://www.linkedin.com/in/thefaadguy/",
    bio: "CEO at Faad Capital | Angel Investor",
  },
  {
    name: "Sharad Kohli",
    image: sharad,
    linkedin: "https://www.linkedin.com/in/sharad-kohli-6037685/",
    bio: "Tax Guru | Founder & Chairman KCC group",
  },
  {
    name: "Capt Shubhendu kumar",
    image: skumar,
    linkedin: "https://www.linkedin.com/in/capt-shubhendu-kumar-tiger-049794185/",
    bio: "CEO at Corporate Access",
  },
  {
    name: "Khiro Mishra",
    image: khiro,
    linkedin: "https://www.linkedin.com/in/khirodra/",
    bio: "Cybersecurity CEO, Board Advisor",
  }
];

const advisoryBoard = [
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: vt,
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "Risk Management,Capital Markets Leadership Coach.",
  },{
    name: "V.K.Jaitley",
    role: "National Co-ordinator at Youth4Nation",
    image: vk,
    linkedin: "https://www.linkedin.com/in/jaitly/",
    bio: "",
  },
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: vt,
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "Risk Management,Capital Markets Leadership Coach.",
  },
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: vt,
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "Risk Management,Capital Markets Leadership Coach.",
  },
];

const TeamSection = ({ title, members }) => {
  return (
    <div className="w-full max-w-7xl mx-auto mb-16 px-4">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-600 p-6 rounded-lg shadow-lg flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex-grow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md mb-4"
              />
              <h2 className="text-xl font-bold text-white text-center">{member.name}</h2>
              {member.role && <p className="text-yellow-400 text-center text-sm mt-1">{member.role}</p>}
              <p className="text-gray-300 text-sm mt-3 text-center">{member.bio}</p>
            </div>
            <div className="mt-4 pt-4 text-center border-t border-gray-700">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-500 transition" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Our Team</h1>
          <p className="text-gray-300 max-w-3xl mx-auto px-4">
            Meet the dedicated individuals who drive our organization forward with their expertise and passion.
          </p>
        </div>

        <TeamSection title="Board of Directors" members={teamMembers} />
        <TeamSection title="Advisory Board" members={advisoryBoard} />
        <TeamSection title="Our Mentors" members={mentors} />
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;