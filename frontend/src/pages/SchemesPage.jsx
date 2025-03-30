import React from "react";
import Footer from "../components/Footer";

import img1 from "../assets/schemes-imgs/img1.jpg";
import img2 from "../assets/schemes-imgs/img2.jpg";
import img3 from "../assets/schemes-imgs/img3.jpg";
import img4 from "../assets/schemes-imgs/img4.jpg";
import img5 from "../assets/schemes-imgs/img5.jpg";
import img6 from "../assets/schemes-imgs/img6.jpg";
import img7 from "../assets/schemes-imgs/img7.jpg";
import img8 from "../assets/schemes-imgs/img8.jpg";
import img9 from "../assets/schemes-imgs/img9.jpg";
import img10 from "../assets/schemes-imgs/img10.jpg";


const schemes = [
  {
    title: "Pradhan Mantri Mudra Yojana (PMMY)",
    image: img1,
    description: "Provides loans up to ₹10 lakh to micro and small enterprises without collateral.",
    link: "https://www.mudra.org.in/"
  },
  {
    title: "Stand-Up India Scheme",
    image: img2,
    description: "Aims to support SC/ST and women entrepreneurs with bank loans from ₹10 lakh to ₹1 crore.",
    link: "https://www.standupmitra.in/"
  },
  {
    title: "Startup India Initiative",
    image: img3,
    description: "Provides tax exemptions, funding support, and ease of doing business for startups.",
    link: "https://www.startupindia.gov.in/"
  },
  {
    title: "Credit Guarantee Fund Scheme (CGTMSE)",
    image: img4,
    description: "Offers credit guarantee to MSMEs for collateral-free loans up to ₹2 crore.",
    link: "https://www.cgtmse.in/"
  },
  {
    title: "National Small Industries Corporation (NSIC) Subsidy",
    image: img5,
    description: "Provides marketing support, credit facilitation, and technology assistance to MSMEs.",
    link: "https://www.nsic.co.in/"
  },
  {
    title: "Credit Linked Capital Subsidy Scheme (CLCSS)",
    image: img6,
    description: "Offers 15% capital subsidy for MSMEs upgrading technology in manufacturing.",
    link: "https://msme.gov.in/"
  },
  {
    title: "Prime Minister's Employment Generation Programme (PMEGP)",
    image: img7,
    description: "Encourages self-employment by providing subsidies on project costs for new businesses.",
    link: "https://kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
  },
  {
    title: "ZED Certification Scheme",
    image: img8,
    description: "Promotes quality manufacturing in MSMEs by providing financial assistance for certification.",
    link: "https://zed.msme.gov.in/"
  },
  {
    title: "Women Entrepreneurship Platform (WEP)",
    image: img9,
    description: "Encourages women-led businesses by offering mentoring, funding, and networking opportunities.",
    link: "https://wep.gov.in/"
  },
  {
    title: "Technology Upgradation Fund Scheme (TUFS)",
    image: img10,
    description: "Supports textile industries in upgrading technology with financial assistance.",
    link: "https://www.txcindia.gov.in/"
  }
];

const SchemesPage = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-700 text-white p-10">
      <div className="text-center py-6 mb-10 animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-wide">Government Schemes for MSMEs & Startups</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center animate-slide-up"
          >
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-40 object-cover rounded-lg shadow-md hover:rotate-2 transition-transform"
            />
            <h2 className="text-2xl font-bold mt-4 mb-2 text-yellow-600 hover:text-purple-600 transition-colors">
              {scheme.title}
            </h2>
            <p className="text-yellow-300 mb-4 leading-relaxed">{scheme.description}</p>
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-transform hover:scale-105 shadow-md"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SchemesPage;
