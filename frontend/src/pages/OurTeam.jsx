import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

// ----------------------------image Imports For Teams----------------------------------------
import vt from "../assets/ourTeam-imgs/VT.webp";
import sushil from "../assets/ourTeam-imgs/sushil-poddar.webp";
import pragya from "../assets/ourTeam-imgs/pragya.webp";
import ck from "../assets/ourTeam-imgs/ck.webp";
import tr from "../assets/ourTeam-imgs/treasurer.webp";
import v from "../assets/ourTeam-imgs/v.webp";
import ira from "../assets/ourTeam-imgs/ira.JPG.webp";
import atul from "../assets/ourTeam-imgs/atul.webp";
// ----------------------------image Imports For Teams----------------------------------------

// ---------------------------Regional BDs---------------------------------------
import gKhemka from "../assets/ourTeam-imgs/BD-Delhi/gKhemka.webp";
import pKhemka from "../assets/ourTeam-imgs/BD-Delhi/pKhemka.webp";
import tanvi from "../assets/ourTeam-imgs/BD-Delhi/tanviG.webp";

import amanat from "../assets/ourTeam-imgs/BD-Raipur/amanat.webp";
import gauravA from "../assets/ourTeam-imgs/BD-Raipur/gauravA.webp";
import lalwani from "../assets/ourTeam-imgs/BD-Raipur/lalwani.webp";
import passary from "../assets/ourTeam-imgs/BD-Raipur/passary.webp";

import aModi from "../assets/ourTeam-imgs/BD-Indore/aModi.webp";
import bj from "../assets/ourTeam-imgs/BD-Indore/bj.webp";

import gm from "../assets/ourTeam-imgs/BD-Bhubneshwar/gm.jpeg";
import lenka from "../assets/ourTeam-imgs/BD-Bhubneshwar/lenka.webp";
import khatua from "../assets/ourTeam-imgs/BD-Bhubneshwar/khatua.jpeg";
import sunita from "../assets/ourTeam-imgs/BD-Bhubneshwar/sunita.jpeg";



import anshul from "../assets/ourTeam-imgs/BD-Mumbai/anshul.webp";
import aashish from "../assets/ourTeam-imgs/BD-Mumbai/AashieshTavkarr.jpg";
import aiyappan from "../assets/ourTeam-imgs/BD-Mumbai/aiyappan.jpg";
import AyushGoyal from "../assets/ourTeam-imgs/BD-Mumbai/AyushGoyal.webp";
import Gaurav_Singh from "../assets/ourTeam-imgs/BD-Mumbai/Gaurav_Singh.jpg";
import JayanthiNatarajan from "../assets/ourTeam-imgs/BD-Mumbai/JayanthiNatarajan.jpg";
import MandeepSingh from "../assets/ourTeam-imgs/BD-Mumbai/MandeepSingh.jpg";
import Pradhan from "../assets/ourTeam-imgs/BD-Mumbai/Pradhan.jpg";
import RajSukheja from "../assets/ourTeam-imgs/BD-Mumbai/RajSukheja.jpg";
import RohanTurior from "../assets/ourTeam-imgs/BD-Mumbai/RohanTurior.png";
import SanjayK from "../assets/ourTeam-imgs/BD-Mumbai/SanjayK.jpeg";
import Rachna from "../assets/ourTeam-imgs/BD-Mumbai/Rachna.JPG";



// ---------------------------Regional BDs----------------------------------------

// ---------------------------- image Imports For Mentors ------------------------------------
import ajay from "../assets/ourMentors-imgs/ajay-arora.webp";
import ajit from "../assets/ourMentors-imgs/Ajit-Nayar.webp";
import deepak from "../assets/ourMentors-imgs/Deepak-Vohra.webp";
import touseef from "../assets/ourMentors-imgs/Dr-Touseef.webp";
import randeep from "../assets/ourMentors-imgs/Dr._Randeep_Guleria.webp";
import gaurav from "../assets/ourMentors-imgs/Gaurav-Gupta.webp";
import harsh from "../assets/ourMentors-imgs/Harsh-Vardhan-Modi.webp";
import ina from "../assets/ourMentors-imgs/Ina.webp";
import kamlesh from "../assets/ourMentors-imgs/Kamlesh-Jain.webp";
import basu from "../assets/ourMentors-imgs/Madhumita-Basu.webp";
import mamta from "../assets/ourMentors-imgs/Mamta-Bihani.webp";
import pankaj from "../assets/ourMentors-imgs/pankaj-shukla.webp";
import satyajit from "../assets/ourMentors-imgs/Satyajit-Chakra.webp";
import shaji from "../assets/ourMentors-imgs/Shaji-V.webp";
import tvs from "../assets/ourMentors-imgs/TVS-SHenoy.webp";
import praveen from "../assets/ourMentors-imgs/praveen-khemka.webp";
import prabal from "../assets/ourMentors-imgs/Prabal-Chatterjee.webp";
import aditya from "../assets/ourMentors-imgs/aditya-arora.webp";
import sharad from "../assets/ourMentors-imgs/sharad-kohli.webp";
import skumar from "../assets/ourMentors-imgs/shubhendu-kumar.webp";
import khiro from "../assets/ourMentors-imgs/khiro-mishra.webp";
import vk from "../assets/ourMentors-imgs/vk-jaithley.webp";
import dg from "../assets/ourMentors-imgs/gayen.webp";

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
      name: "Ms. Ira Saha",
      role: "Director, MASA Forum",
      image: ira,
      linkedin: "https://www.linkedin.com/in/ira-saha-5072b6285/",
      bio: "Strategist consultant and event curator, masa"
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
    name: "Dr. Touseef Ahmed",
    image: touseef,
    linkedin: "https://www.linkedin.com/in/dr-touseef-ahmed-7a7a89253/",
    bio: "Secretary/Executive Director at Rotary International",
  },{
    name: "Dr. Randeep Guleria",
    image: randeep,
    linkedin: "https://www.linkedin.com/",
    bio: "President of AIIMS Bilaspur. ",
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
    bio: "Director at Institute of Engineering & Management (IEM)",
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
  }
  ,{
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
    name: "Capt. Shubhendu kumar",
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

const regionalBoardDelhi = [
  {
    name: "Dr. Tanvi Gupta",
    image: tanvi,
    linkedin: "https://www.linkedin.com/in/dr-tanvi-gupta-207b29217/",
    bio: "Associate professor | Co-convenor, MSME Development Forum, Delhi | Convenor, Mantras Foundation (Delhi Chapter) ",
  },
  {
    name: "Govind Khemka",
    image: gKhemka,
    linkedin: "https://www.linkedin.com/in/govindkhemka/",
    bio: "Serial Entrepreneur | Startup Mentor | Business Development",
  },
  {
    name: "Priyanka Khemka",
    image: pKhemka,
    linkedin: "https://www.linkedin.com/in/priyanka-khemka/",
    bio: "Creative Writer",
  },
  // {
  //   name: "Nidhi Bansal",
  //   image: "",
  //   linkedin: "",
  //   bio: "",
  // }
];
const regionalBoardRaipur = [
  {
    name: "Anil Passary",
    image: passary,
    linkedin: "https://www.linkedin.com/in/anil-passary-88945a28/",
    bio: "Managing Director Urvarak Industries Pvt. Ltd.",
  },
  {
    name: "Gaurav Agarwal",
    image: gauravA,
    linkedin: "https://www.linkedin.com/in/thehrgaurav/",
    bio: "Founder @ Recex, Cxohiring.com & Cofounders Planet",
  },
  {
    name: "Priya Lalwani",
    image: lalwani,
    linkedin: "https://www.linkedin.com/in/priya-lalwani-6367451b0/",
    bio: "Experiential Marketing & Print Magazine Founder of Mauve",
  },
  {
    name: "Aastha Amanat",
    image: amanat,
    linkedin: "https://www.linkedin.com/in/aastha-amanat/",
    bio: "Co-Founder- Prasiddhi PR & Amanat Foundation | Founder- Women Web",
  },
];
const regionalBoardIndore = [
  {
    name: "Adharsh Modi",
    image: aModi,
    linkedin: "https://www.linkedin.com/in/modiadarsh/",
    bio: "Founder & CEO - Joytree Global | President BNI Brighton",
  },

  {
    name: "Capt BJ Singh",
    image: bj,
    linkedin: "https://www.linkedin.com/in/captbjsingh/",
    bio: "Founder and Chief Executive Officer, at Absolute Training Solutions",
  }
];
const regionalBoardBhubneshwar = [
  {
    name: "Gautam Mohanty",
    image: gm,
    linkedin: "https://www.linkedin.com/in/frts-gautam-mohanty-16297726a/",
    bio: "Educationist at Founder B-SchoolForum, Ex-Officio of AIMA New Delhi and Convenor Of PHDCCI, KCCI",
  },
  {
    name: "Trinath Lenka",
    image: lenka,
    linkedin: "https://www.linkedin.com/in/trinath-lenka-cfp-a2343a19/",
    bio: "Managing Director,(Wallet4wealth).TV Panelist & Columnist on Economy",
  },
  {
    name: "CS Sunita Mohanty",
    image: sunita,
    linkedin: "https://www.linkedin.com/in/cs-sunita-mohanty-7430891a/",
    bio: "Executive Director-BNI,(Greater Odisha)India.",
  },
  {
    name: "chidatmika khatua",
    image: khatua,
    linkedin: "https://www.linkedin.com/in/chidatmika-khatua-b1b50438/",
    bio: "Founder & managing Trustee of Aryabhata B-School(Aryabhata Institute of Education & technology)",
  }
];
const regionalBoardMumbai = [
  {
    name: "Anshul Agarwal",
    image: anshul,
    linkedin: "https://www.linkedin.com/in/anshulagarwalca/",
    bio: "Impact Funding | Debt fund raising | Financial Advisory ",
  },
   {
    name: "Shashank Pradhan",
    image: Pradhan,
    linkedin: "https://www.linkedin.com/in/shashank-pradhan-b48334240/",
    bio: "Founder CEO at fundgini Pvt Ltd",
  },
  {
    name: "Ayush Goyal",
    image: AyushGoyal,
    linkedin: "http://www.linkedin.com/passionforgoal",
    bio: "Managing general partner at Induckt ventures  ",
  },
  {
    name: "Raj Sukheja ",
    image: RajSukheja,
    linkedin: "http://www.linkedin.com/in/rajsukheja",
    bio: "CXO | Red Mammoth Ventures LLP  ",
  },
  {
    name: " Dr. Aashiesh Tavkarr",
    image: aashish,
    linkedin: "http://linkedin.com/in/tavkarr",
    bio: "Psychotherapist And Leadership Coach | Metanoia Holistic Leadership Institute",
  },
  {
    name: "Aiyappan",
    image: aiyappan,
    linkedin: "https://www.linkedin.com/in/aiyappan/",
    bio: "Founder & CEO at Congruent Services",
  },
  {
    name: "Gaurav Singh",
    image: Gaurav_Singh,
    linkedin: "https://www.linkedin.com/in/gauravsingh2805/",
    bio: "Chairman & CEO at GR",
  },
  {
    name: "Jayanthi Natarajan",
    image: JayanthiNatarajan,
    linkedin: "",
    bio: "Academic coordinator | SSSM higher secondary school chithode  ",
  },
  {
    name: "Mandeep M Singh",
    image: MandeepSingh,
    linkedin: "https://www.linkedin.com/in/mandeepmsingh/",
    bio: "General Partner, Induckt Vision Fund | Induckt Ventures",
  },
  {
    name: "Sanjay Kimbahune ",
    image: SanjayK,
    linkedin: "https://www.linkedin.com/in/sanjay-kimbahune-91b669/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3B8Z4audiaT6uG9mSwJIukhw%3D%3D",
    bio: "Senior Scientist | TCS ",
  },
  {
    name: "Rohan Turior",
    image: RohanTurior,
    linkedin: "https://www.linkedin.com/in/rohanturior?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bio: "Founding Partner | INNOIPS",
  },
  {
    name: "Rachna Lachke Bagwe",
    image: Rachna,
    linkedin: "https://www.facebook.com/share/1B2VbJJQ1n/?mibextid=wwXIfr",
    bio: "Founder  |  Rachna Arts & Creations",
  }
  
];

const advisoryBoard = [
  {
    name: "Atul Singh",
    role: "CSR & Sustainability Strategist | Executive Director, Mantras Foundation",
    image: atul,
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "",
  },{
    name: "V.K.Jaitley",
    role: "National Co-ordinator at Youth4Nation",
    image: vk,
    linkedin: "https://www.linkedin.com/in/jaitly/",
    bio: "",
  },
  {
    name: "Ina Bose",
    role : "Academic and Communication Consultant",
    image: ina,
    linkedin: "https://www.linkedin.com/in/ina-bose-6270a940/",
    bio: "",
  },
  {
    name: "Praveen Khemka",
    image: praveen,
    linkedin: "https://www.linkedin.com/in/khemkap/",
    role: "Director at Tufwud | Founder at BSE",
  }
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

        <TeamSection title="National Board of Directors" members={teamMembers} />

        <TeamSection title="Advisory Board" members={advisoryBoard} />

        <TeamSection title="Our Mentors" members={mentors} />

        <TeamSection title="Regional Board of Directors - Delhi" members={regionalBoardDelhi} />
        <TeamSection title="Regional Board of Directors - Raipur" members={regionalBoardRaipur} />
        <TeamSection title="Regional Board of Directors - Indore" members={regionalBoardIndore} />
        <TeamSection title="Regional Board of Directors - Bhubaneswar" members={regionalBoardBhubneshwar} />
        <TeamSection title="Regional Board of Directors - Mumbai" members={regionalBoardMumbai} />

        
        
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;