import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Shri. Sushil Poddar",
    role: "President, MASA Forum",
    image: "/images/ourTeam-imgs/sushil-poddar.webp",
    linkedin: "https://linkedin.com/",
    bio: "National Traders' Welfare Board Dept of Promotion of Industry & Internal Trade Ministry of Commerce & Industry Govt Of India",
  },
  {
    name: "Mr. Vibor Tandon",
    role: "Vice-President, MASA Forum",
    image: "/images/ourTeam-imgs/VT.webp",
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "Risk Management,Capital Markets Leadership Coach.",
  },
  {
    name: "Mr. CK Varadrajan",
    role: "Vice-President, MASA Forum",
    image: "/images/ourTeam-imgs/ck.webp",
    linkedin: "https://linkedin.com/",
    bio: "Hon. Secretary at Confederation of West Bengal Trade Associations",
  },{
    name: "Ms. Pragya Jhunjhunwala",
    role: "General Secretary, MASA Forum",
    image: "/images/ourTeam-imgs/pragya.webp",
    linkedin: "https://www.linkedin.com/in/pragya-jhunjhunwala-3b16a7181/",
    bio: "CSR & Startup Consultant",
  },
  {
      name: "Ms. Ira Saha",
      role: "Director, MASA Forum",
      image: "/images/ourTeam-imgs/ira.JPG.webp",
      linkedin: "https://www.linkedin.com/in/ira-saha-5072b6285/",
      bio: "Strategist consultant and event curator, masa"
  },
  {
    name: "Mr. Narendra Kapadia",
    role: "Chairman, MASA Forum",
    image: "/images/ourTeam-imgs/v.webp",
    linkedin: "https://linkedin.com/",
    bio: "Handles financial strategy and investment planning.",
  },
  {
    name: "Mr. Pradeep Luhariwala",
    role: "Treasurer, MASA Forum",
    image: "/images/ourTeam-imgs/treasurer.webp",
    linkedin: "https://linkedin.com/",
    bio: "Expert in talent acquisition and team management.",
  },
];

const mentors = [
  {
    name: "Ajay Arora",
    image: "/images/ourMentors-imgs/ajay-arora.webp",
    linkedin: "https://www.linkedin.com/in/ajay-arora/",
    bio: "National Leader and Head of Investment Banking Advisory at EY",
  },
  {
    name: "Dr. Dilip Kumar Gayen",
    image: "/images/ourMentors-imgs/gayen.webp",
    linkedin: "https://www.linkedin.com/in/dilip-kumar-gayen-consultant-quality-productivity-5912ab12/",
    bio: "Manufacturing & Business Excellence Expert",
  },{
    name: "Ajith Nayar",
    image: "/images/ourMentors-imgs/Ajit-Nayar.webp",
    linkedin: "https://www.linkedin.com/in/ajithnayarcamcom/",
    bio: "Co-Founder and CEO at CamCom",
  },{
    name: "Deepak Vohra",
    image: "/images/ourMentors-imgs/Deepak-Vohra.webp",
    linkedin: "https://www.linkedin.com/in/deepak-vohra-925835160/",
    bio: "Ambassador and Special Advisor in Africa and in Ladakh",
  },{
    name: "Dr. Touseef Ahmed",
    image: "/images/ourMentors-imgs/Dr-Touseef.webp",
    linkedin: "https://www.linkedin.com/in/dr-touseef-ahmed-7a7a89253/",
    bio: "Secretary/Executive Director at Rotary International",
  },{
    name: "Dr. Randeep Guleria",
    image: "/images/ourMentors-imgs/Dr._Randeep_Guleria.webp",
    linkedin: "https://www.linkedin.com/",
    bio: "President of AIIMS Bilaspur. ",
  },{
    name: "Gaurav Gupta",
    image: "/images/ourMentors-imgs/Gaurav-Gupta.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-gupta-2184891a/",
    bio: "Founder President at Global Trade & Technology council of India",
  },{
    name: "Harsh vardhan Modi",
    image: "/images/ourMentors-imgs/Harsh-Vardhan-Modi.webp",
    linkedin: "https://www.linkedin.com/in/harshmodi/",
    bio: "Director at Eden Group | Real Estate Developer",
  },{
    name: "Kamlesh Jain",
    image: "/images/ourMentors-imgs/Kamlesh-Jain.webp",
    linkedin: "https://www.linkedin.com/in/kamlesh-jain-b1b3b816/",
    bio: "Managing Director Holdwell Components Pvt Ltd",
  },{
    name: "Madhumita Basu",
    image: "/images/ourMentors-imgs/Madhumita-Basu.webp",
    linkedin: "https://www.linkedin.com/in/madhumita-basu-b4971341/",
    bio: "Non Executive Director, Nu Vista Ltd. Advisor",
  },{
    name: "Dr. CS Adv Mamta Binani",
    image: "/images/ourMentors-imgs/Mamta-Bihani.webp",
    linkedin: "https://www.linkedin.com/in/mamtabinani/",
    bio: "National President of The Institute of Company Secretaries",
  },
  {
    name: "Pankaj Shukla",
    image: "/images/ourMentors-imgs/pankaj-shukla.webp",
    linkedin: "https://www.linkedin.com/in/pankaj-shukla-8480b74/",
    bio: "Entertainment Head at Amar Ujala",
  },
  {
    name: "Satyajit Chakrabarti",
    image: "/images/ourMentors-imgs/Satyajit-Chakra.webp",
    linkedin: "https://www.linkedin.com/in/csatyajit/",
    bio: "Director at Institute of Engineering & Management (IEM)",
  },
  {
    name: "Shaji V",
    image: "/images/ourMentors-imgs/Shaji-V.webp",
    linkedin: "https://www.linkedin.com/in/shaji/",
    bio: "Director at Deloitte",
  },{
    name: "TVS Shenoy",
    image: "/images/ourMentors-imgs/TVS-SHenoy.webp",
    linkedin: "https://www.linkedin.com/in/tvsshenoy/",
    bio: "Executive in Charge at Tata Steel",
  }
  ,{
    name: "Prabal Chatterjee",
    image: "/images/ourMentors-imgs/Prabal-Chatterjee.webp",
    linkedin: "https://www.linkedin.com/in/prabal-chatterjee-17759621/",
    bio: "Co-Owner of Mono Translation Bureau",
  },{
    name: "Aditya Arora",
    image: "/images/ourMentors-imgs/aditya-arora.webp",
    linkedin: "https://www.linkedin.com/in/thefaadguy/",
    bio: "CEO at Faad Capital | Angel Investor",
  },
  {
    name: "Sharad Kohli",
    image: "/images/ourMentors-imgs/sharad-kohli.webp",
    linkedin: "https://www.linkedin.com/in/sharad-kohli-6037685/",
    bio: "Tax Guru | Founder & Chairman KCC group",
  },
  {
    name: "Capt. Shubhendu kumar",
    image: "/images/ourMentors-imgs/shubhendu-kumar.webp",
    linkedin: "https://www.linkedin.com/in/capt-shubhendu-kumar-tiger-049794185/",
    bio: "CEO at Corporate Access",
  },
  {
    name: "Khiro Mishra",
    image: "/images/ourMentors-imgs/khiro-mishra.webp",
    linkedin: "https://www.linkedin.com/in/khirodra/",
    bio: "Cybersecurity CEO, Board Advisor",
  }
];

const regionalBoardDelhi = [
  {
    name: "Dr. Tanvi Gupta",
    image: "/images/ourTeam-imgs/BD-Delhi/tanvi.webp",
    linkedin: "https://www.linkedin.com/in/dr-tanvi-gupta-207b29217/",
    bio: "Associate professor | Co-convenor, MSME Development Forum, Delhi | Convenor, Mantras Foundation (Delhi Chapter) ",
  },
  {
    name: "Govind Khemka",
    image: "/images/ourTeam-imgs/BD-Delhi/gKhemka.webp",
    linkedin: "https://www.linkedin.com/in/govindkhemka/",
    bio: "Serial Entrepreneur | Startup Mentor | Business Development",
  },
  {
    name: "Priyanka Khemka",
    image: "/images/ourTeam-imgs/BD-Delhi/pKhemka.webp",
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
    image: "/images/ourTeam-imgs/BD-Raipur/passary.webp",
    linkedin: "https://www.linkedin.com/in/anil-passary-88945a28/",
    bio: "Managing Director Urvarak Industries Pvt. Ltd.",
  },
  {
    name: "Gaurav Agarwal",
    image: "/images/ourTeam-imgs/BD-Raipur/gauravA.webp",
    linkedin: "https://www.linkedin.com/in/thehrgaurav/",
    bio: "Founder @ Recex, Cxohiring.com & Cofounders Planet",
  },
  {
    name: "Priya Lalwani",
    image: "/images/ourTeam-imgs/BD-Raipur/lalwani.webp",
    linkedin: "https://www.linkedin.com/in/priya-lalwani-6367451b0/",
    bio: "Experiential Marketing & Print Magazine Founder of Mauve",
  },
  {
    name: "Aastha Amanat",
    image: "/images/ourTeam-imgs/BD-Raipur/amanat.webp",
    linkedin: "https://www.linkedin.com/in/aastha-amanat/",
    bio: "Co-Founder- Prasiddhi PR & Amanat Foundation | Founder- Women Web",
  },
];
const regionalBoardIndore = [
  {
    name: "Adharsh Modi",
    image: "/images/ourTeam-imgs/BD-Indore/aModi.webp",
    linkedin: "https://www.linkedin.com/in/modiadarsh/",
    bio: "Founder & CEO - Joytree Global | President BNI Brighton",
  },
  {
    name: "Capt BJ Singh",
    image: "/images/ourTeam-imgs/BD-Indore/bj.webp",
    linkedin: "https://www.linkedin.com/in/captbjsingh/",
    bio: "Founder and Chief Executive Officer, at Absolute Training Solutions",
  }
];
const regionalBoardBhubneshwar = [
  {
    name: "Gautam Mohanty",
    image: "/images/ourTeam-imgs/BD-Bhubneshwar/gm.jpeg",
    linkedin: "https://www.linkedin.com/in/frts-gautam-mohanty-16297726a/",
    bio: "Educationist at Founder B-SchoolForum, Ex-Officio of AIMA New Delhi and Convenor Of PHDCCI, KCCI",
  },
  {
    name: "Trinath Lenka",
    image: "/images/ourTeam-imgs/BD-Bhubneshwar/lenka.webp",
    linkedin: "https://www.linkedin.com/in/trinath-lenka-cfp-a2343a19/",
    bio: "Managing Director,(Wallet4wealth).TV Panelist & Columnist on Economy",
  },
  {
    name: "CS Sunita Mohanty",
    image: "/images/ourTeam-imgs/BD-Bhubneshwar/sunita.jpeg",
    linkedin: "https://www.linkedin.com/in/cs-sunita-mohanty-7430891a/",
    bio: "Executive Director-BNI,(Greater Odisha)India.",
  },
  {
    name: "chidatmika khatua",
    image: "/images/ourTeam-imgs/BD-Bhubneshwar/khatua.jpeg",
    linkedin: "https://www.linkedin.com/in/chidatmika-khatua-b1b50438/",
    bio: "Founder & managing Trustee of Aryabhata B-School(Aryabhata Institute of Education & technology)",
  }
];
const regionalBoardMumbai = [
  {
    name: "Anshul Agarwal",
    image: "/images/ourTeam-imgs/BD-Mumbai/anshul.webp",
    linkedin: "https://www.linkedin.com/in/anshulagarwalca/",
    bio: "Impact Funding | Debt fund raising | Financial Advisory ",
  },
   {
    name: "Shashank Pradhan",
    image: "/images/ourTeam-imgs/BD-Mumbai/Pradhan.jpg",
    linkedin: "https://www.linkedin.com/in/shashank-pradhan-b48334240/",
    bio: "Founder CEO at fundgini Pvt Ltd",
  },
  {
    name: "Ayush Goyal",
    image: "/images/ourTeam-imgs/BD-Mumbai/AyushGoyal.webp",
    linkedin: "http://www.linkedin.com/passionforgoal",
    bio: "Managing general partner at Induckt ventures  ",
  },
  {
    name: "Raj Sukheja ",
    image: "/images/ourTeam-imgs/BD-Mumbai/RajSukheja.jpg",
    linkedin: "http://www.linkedin.com/in/rajsukheja",
    bio: "CXO | Red Mammoth Ventures LLP  ",
  },
  {
    name: " Dr. Aashiesh Tavkarr",
    image: "/images/ourTeam-imgs/BD-Mumbai/AashieshTavkarr.jpg",
    linkedin: "http://linkedin.com/in/tavkarr",
    bio: "Psychotherapist And Leadership Coach | Metanoia Holistic Leadership Institute",
  },
  {
    name: "Aiyappan",
    image: "/images/ourTeam-imgs/BD-Mumbai/aiyappan.jpg",
    linkedin: "https://www.linkedin.com/in/aiyappan/",
    bio: "Founder & CEO at Congruent Services",
  },
  {
    name: "Gaurav Singh",
    image: "/images/ourTeam-imgs/BD-Mumbai/Gaurav_Singh.jpg",
    linkedin: "https://www.linkedin.com/in/gauravsingh2805/",
    bio: "Chairman & CEO at GR",
  },
  {
    name: "Jayanthi Natarajan",
    image: "/images/ourTeam-imgs/BD-Mumbai/JayanthiNatarajan.jpg",
    linkedin: "",
    bio: "Academic coordinator | SSSM higher secondary school chithode  ",
  },
  {
    name: "Mandeep M Singh",
    image: "/images/ourTeam-imgs/BD-Mumbai/MandeepSingh.jpg",
    linkedin: "https://www.linkedin.com/in/mandeepmsingh/",
    bio: "General Partner, Induckt Vision Fund | Induckt Ventures",
  },
  {
    name: "Sanjay Kimbahune ",
    image: "/images/ourTeam-imgs/BD-Mumbai/SanjayK.jpeg",
    linkedin: "https://www.linkedin.com/in/sanjay-kimbahune-91b669/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3B8Z4audiaT6uG9mSwJIukhw%3D%3D",
    bio: "Senior Scientist | TCS ",
  },
  {
    name: "Rohan Turior",
    image: "/images/ourTeam-imgs/BD-Mumbai/RohanTurior.png",
    linkedin: "https://www.linkedin.com/in/rohanturior?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bio: "Founding Partner | INNOIPS",
  },
  {
    name: "Rachna Lachke Bagwe",
    image: "/images/ourTeam-imgs/BD-Mumbai/Rachna.JPG",
    linkedin: "https://www.facebook.com/share/1B2VbJJQ1n/?mibextid=wwXIfr",
    bio: "Founder  |  Rachna Arts & Creations",
  },
  {
    name: "Ravindra Jadhav",
    image: "/images/ourTeam-imgs/BD-Mumbai/ravindra.png",
    linkedin: "https://www.linkedin.com",
    bio: "COO & Chief Deal Maker Fundgini.com ",
  },
  {
    name: "Dr. Girish",
    image: "/images/ourTeam-imgs/BD-Mumbai/girish.jpg",
    linkedin: "",
    bio: "Chairman | ICCIBI ",
  },

  
];

const advisoryBoard = [
  {
    name: "Atul Singh",
    role: "CSR & Sustainability Strategist | Executive Director, Mantras Foundation",
    image: "/images/ourTeam-imgs/atul.webp",
    linkedin: "https://www.linkedin.com/in/vibhor-tandon-3092661b/",
    bio: "",
  },{
    name: "V.K.Jaitley",
    role: "National Co-ordinator at Youth4Nation",
    image: "/images/ourTeam-imgs/vk.webp",
    linkedin: "https://www.linkedin.com/in/jaitly/",
    bio: "",
  },
  {
    name: "Ina Bose",
    role : "Academic and Communication Consultant",
    image: "/images/ourTeam-imgs/ina.webp",
    linkedin: "https://www.linkedin.com/in/ina-bose-6270a940/",
    bio: "",
  },
  {
    name: "Praveen Khemka",
    image: "/images/ourTeam-imgs/praveen.webp",
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