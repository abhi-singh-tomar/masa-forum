import React, { useState } from "react";
import Footer from "../components/Footer";

// --------------------------------------------------Upcoming Images
import upcoming2 from "../assets/event-imgs/upcoming2.webp";
import upcoming3 from "../assets/event-imgs/gem.webp";
// import upcoming4 from "../assets/event-imgs/pitch.webp";
import upcoming5 from "../assets/event-imgs/pmepg.webp";
import upcoming11 from "../assets/event-imgs/upcoming11.webp";
import loanmela from "../assets/event-imgs/loanmela.jpg";
import MahaGrowth from "../assets/event-imgs/newmahagrowth.png";
import raipurphoto from "../assets/event-imgs/raipurphoto.png";
import jamshedpurphoto from "../assets/event-imgs/Jamshedpurphoto.png";


// ---------------------------------------------------PAST IMAGES
import past1 from "../assets/event-imgs/past1.webp";
import past2 from "../assets/event-imgs/past2.webp";
import past3 from "../assets/event-imgs/past3.webp";
import past4 from "../assets/event-imgs/past4.webp";
import past5 from "../assets/event-imgs/past5.webp";
import past6 from "../assets/event-imgs/past6.webp";
import past7 from "../assets/event-imgs/past7.webp";
import past8 from "../assets/event-imgs/past8.webp";
import past9 from "../assets/event-imgs/past9.webp";
import past10 from "../assets/event-imgs/past10.webp";
import past11 from "../assets/event-imgs/past11.webp";
import past12 from "../assets/event-imgs/past-yoga-day.webp";
import pastRaipur from "../assets/event-imgs/pastRaipur.webp";
// ----------------------------------------------------PAST IMAGES
import poddar from "../assets/event-imgs/leadershipProgram.JPG.webp";
import CONNECT from "../assets/event-imgs/MASA-connect1.webp"

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [expandedEvents, setExpandedEvents] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for modal image

  const eventsData = {
    upcoming: [
  
{
        id: 201,
        title: "MahaGrowth Conclave Expo and Awards – Mumbai Edition",
        date: "23rd August 2025",
        location: "Hotel Sahara Star, Mumbai",
         description: ' <a href="https://forms.gle/ZvngaRrdrW77zYaAA" target="_blank">Click here to register</a>',
  fullDescription: ` 
The MahaGrowth Conclave Expo and Awards 2025 by MASA Forum brings together industry leaders, startups, investors, and policymakers to unlock the future of business. The event features panels, exhibitions, networking, and awards — with a focus on driving growth, innovation, and investment for startups and MSMEs.

`,
        image: MahaGrowth,
      },
  {
     id: 202,
    title: "RaipurGrowth Conclave Expo and Awards - Raipur Edition",
    date: "6th September 2025",
   location: "Hotel Hyatt, Raipur",
   description: ' <a href="https://forms.gle/ZvngaRrdrW77zYaAA" target="_blank">Click here to register</a>',
  fullDescription: ` 
The RaipurGrowth Conclave Expo and Awards 2025 by MASA Forum brings together industry leaders, startups, investors, and policymakers to unlock the future of business. The event features panels, exhibitions, networking, and awards — with a focus on driving growth, innovation, and investment for startups and MSMEs.

`,
  image: raipurphoto,
},    

       {
     id: 203,
    title: "JampotGrowth Conclave Expo and Awards - Jamshedpur Edition",
    date: "12th September 2025",
   location: "Hotel Vivanta, Jamshedpur",
   description: ' <a href="https://forms.gle/ZvngaRrdrW77zYaAA" target="_blank">Click here to register</a>',
  fullDescription: ` 
The JampotGrowth Conclave Expo and Awards 2025 by MASA Forum brings together industry leaders, startups, investors, and policymakers to unlock the future of business. The event features panels, exhibitions, networking, and awards — with a focus on driving growth, innovation, and investment for startups and MSMEs.

`,
  image: jamshedpurphoto,
},
    
    ],
    past: [

       {
  id: 1,
  title: "Loan Mela & BFSI Conclave-Expo",
  date: "17th July 2025",
  location: "Hotel Hindustan International, Kolkata",
  description: "",
  fullDescription: ` 
India’s largest MSME-focused financial event  
25+ Banks, NBFCs, Fintechs & Funding Experts  
On-the-spot loan assistance & financial literacy sessions  
Explore business funding opportunities under one roof  
 

`,
  image: loanmela,
},
      {
        id: 151,
        title: "International Yoga Day 2025",
        date: "21st June 2025",
        location: "Swarnamani Banquet Hall",
       // description: "MASA & Swarnamani Pariwar celebrates International Yoga Day",
        fullDescription: "Celebration of International Yoga Day in Swarnamani Residency. For Morning mindfulness, health and harmony",
        image: past12,
      },

       {
        id: 112,
        title: "MASA Women's Excellence Conclave, Expo & Awards 2025",
        date: "6th June 2025",
        location: "Hotel Astor, Kolkata",
        description: "",
        fullDescription: "",
        image: upcoming2,
      },

        {
        id: 111,
        title: "Environment Day 2025",
        date: "5th June 2025",
        location: "National Library, Kolkata",
        description: "",
        fullDescription: "",
        image: upcoming11,
      },
     
      // {
      //   id: 16,
      //   title: "Startup Pitch Session",
      //   date: "24 May 2025",
      //   description: "",
      //   fullDescription: "",
      //   image: upcoming4,
      // },
      
      {
        id: 1,
        title: "Eastern India Job Fair & career Expo 2025",
        date: "May 4th-5th, 2025",
        location: "Indian Council for Cultural Relations (ICCR), Kolkata",
     //   description:
         // "Our vision was to establish this event as the leading career & networking event in the region. Organized by Magical Mantras Pvt. Ltd in collaboration with MASA & CWBTA.",
        fullDescription:
          "This three-day event featured keynote speeches from tech pioneers, hands-on workshops, and networking opportunities with industry leaders.",
        image: past11,
      },
      {
        id: 2,
        title: "Raipur Conclave 2025",
        date: "April 12th - 13th, 2025",
        location: "Hotel Sayaji Raipur",
        description:
          "",
        fullDescription:
          " MASA Raipur Conclave — Connecting Entrepreneurs, Investors & Ecosystem Leaders. The MASA Raipur Conclave was conceived to address the growing need for structured support, visibility, and networking opportunities for MSMEs and startups in Chhattisgarh and surrounding regions.Additionally, the event emphasized inclusivity and women’s leadership through Women’s MASA, encouraging and recognizing women entrepreneurs as vital contributors to the region’s growth story.",
        image: pastRaipur,
      },
      {
        id: 3,
        title: "MASA Global Education Conclave & Awards 2025, Kolkata",
        date: "15 February 2025",
        location: "National Library, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past10,
      },
      {
        id: 4,
        title: "MSME & Startup Accelerator Conclave & Awards 2025",
        date: "8 February 2025",
        location: "National Library, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past9,
      },
      {
        id: 5,
        title: "MASA Sanskriti Pranam 2024",
        date: "19 December, 2024",
        location: "Silpa Sadan, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past8,
      },
      {
        id: 6,
        title: "MASA Metals' Conclave 2024, Bhubaneswar",
        date: "18 September, 2024",
        location: "Hotel New Marrion, Bhubaneshwar",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past7,
      },
      {
        id: 7,
        title: "Inter College Business & Financial Conclave & Quiz 2024",
        date: "12 September, 2024",
        location: "IEM Auditorium, Ashram Building",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past6,
      },
      {
        id: 8,
        title: "MASA Metals' Conclave 2024, Kolkata",
        date: "August 21, 2024",
        location: "Hotel Hindustan International, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past5,
      },
      {
        id: 9,
        title: "Environment Quiz 2024, Kolkata",
        date: "10 August, 2024",
        location: "National Library, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past4,
      },
      {
        id: 10,
        title: "MASA Conclave & Awards 2024, New Delhi",
        date: "June 13, 2024",
        location: "PhD Chamber of Commerce, New Delhi",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past3,
      },
      {
        id: 11,
        title: "MASA Women's Excellence Conclave & Awards 2024",
        date: "March 10, 2024",
        location: "JW Marriott, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past2,
      },
      {
        id: 12,
        title: "MSME & Startup Accelerator Conclave & Awards 2024",
        date: "January 28, 2024",
        location: "Indian Council for Cultural Relations, Kolkata",
        description: "",
        fullDescription:
          "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past1,
      },
    ],
    programs: [
      {
        id: 13,
        title: "MASA Monthly Connect",
        date: "Every month 3rd Week Thursday",
        description: "An offline meet at CWBTA Office for all members and non-members",
        fullDescription: "Exact Dates details to be announced in our Whatsapp channel. This MASA CONNECT meet is to empower MSMEs & startups through monthly engagements. Be a part of nation's thriving MSMEs & Startups ecosystem",
        image: CONNECT,
      },
      {
        id: 14,
        title: "Leadership Development Program",
        date: "June 5 - July 10, 2025",
        location: "Corporate Headquarters",
        description: "Six-week intensive leadership training",
        fullDescription:
          "This program includes mentorship sessions, team projects, and leadership simulations designed to develop executive-level skills.",
        image: poddar,
      },
      {
        id: 15,
        title: "Gem Portal training",
        date: "21 May 2025",
        description: "",
        fullDescription: "",
        image: upcoming3,
      },
      {
        id: 16,
        title: "Mentoring MSMEs on Pmegp",
        date: "23 May 2025",
        description: "",
        fullDescription: "",
        image: upcoming5,
      },
      

    ],
  };

  // Toggle event expansion
  const toggleEventExpansion = (eventId) => {
    setExpandedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  // Open modal with selected image
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore Our Events for{" "}
            <span className="text-teal-400">MSMEs and Startups</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup pitch events and innovation workshops to MSME
            accelerator programs — discover hands-on opportunities that drive
            real growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 bg-gray-800 rounded-full p-2 max-w-md mx-auto shadow-lg">
          {Object.keys(eventsData).map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "bg-teal-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setExpandedEvents([]);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData[activeTab].map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-56">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => openImageModal(event.image)} // Open modal on click
                />
                <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{event.location}</p>
                <p className="text-blue-300 text-sm mb-4 "
                  dangerouslySetInnerHTML={{ __html: event.description }} >
               </p>

                {expandedEvents.includes(event.id) && (
                  <div className="mt-4 pt-4 border-t border-gray-700 text-gray-300 text-sm animate-fade-in">
                    {event.fullDescription}
                  </div>
                )}

                <button
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    expandedEvents.includes(event.id)
                      ? "text-gray-400 hover:text-white"
                      : "text-teal-400 hover:text-teal-300"
                  }`}
                  onClick={() => toggleEventExpansion(event.id)}
                >
                  {expandedEvents.includes(event.id)
                    ? "Show Less"
                    : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <img
              src={selectedImage}
              alt="Full size event"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              onClick={closeImageModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EventsPage;