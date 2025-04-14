import React, { useState } from 'react';
import Footer from '../components/Footer';

// --------------------------------------------------Upcoming Images
import upcoming1 from "../assets/event-imgs/upcoming1.png";
// --------------------------------------------------Upcoming Images

// ---------------------------------------------------PAST IMAGES
import past1 from "../assets/event-imgs/past1.png";
import past2 from "../assets/event-imgs/past2.png";
import past3 from "../assets/event-imgs/past3.png";
import past4 from "../assets/event-imgs/past4.png";
import past5 from "../assets/event-imgs/past5.png";
import past6 from "../assets/event-imgs/past6.png";
import past7 from "../assets/event-imgs/past7.png";
import past8 from "../assets/event-imgs/past8.png";
import past9 from "../assets/event-imgs/past9.png";
import past10 from "../assets/event-imgs/past10.jpg";
// ----------------------------------------------------PAST IMAGES
// Replace with your actual image imports
import poddar from "../assets/event-imgs/leadershipProgram.JPG";


const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedEvents, setExpandedEvents] = useState([]); // Changed to array

  const eventsData = {
    upcoming: [
      {
        id: 1,
        title: "Eastern India Job Fair & career Expo 2025",
        date: "May 4th-5th, 2025",
        location: "Indian Council for Cultural Relations (ICCR), Kolkata",
        description: "Our vision is to establish this event as the leading career & networking event in the region. Organized by Magical Mantras Pvt. Ltd in collaboration with MASA & CWBTA.",
        fullDescription: "This three-day event will feature keynote speeches from tech pioneers, hands-on workshops, and networking opportunities with industry leaders. Don't miss our exclusive product launches and panel discussions.",
        image: upcoming1
      }
    ],
    past: [
      {
        id: 3,
        title: "MASA Global Education Conclave & Awards 2025, Kolkata",
        date: "15 February 2025",
        location: "National Library, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past10
      },
      {
        id: 4,
        title: "MSME & Startup Accelerator Conclave & Awards 2025",
        date: "8 February 2025",
        location: "National Library, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past9
      },
      {
        id: 5,
        title: "MASA Sanskriti Pranam 2024",
        date: "19 December, 2024",
        location: "Silpa Sadan, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past8
      },
      {
        id: 6,
        title: "MASA Metals' Conclave 2024, Bhubaneswar",
        date: "18 September, 2024",
        location: "Hotel New Marrion, Bhubaneshwar",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past7
      },
      {
        id: 7,
        title: "Inter College Business & Financial COnclave & Quiz 2024",
        date: "12 September, 2024",
        location: "IEM Auditorium, Ashram Building",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past6
      },
      {
        id: 8,
        title: "MASA Metals' Conclave 2024, Kolkata",
        date: "August 21, 2024",
        location: "Hotel Hindustan International, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past5
      },
      {
        id: 9,
        title: "Environment Quiz 2024, Kolkata",
        date: "10 August, 2024",
        location: "National Library, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past4
      },
      {
        id: 10,
        title: "MASA Conclave & Awards 2024, New Delhi",
        date: "June 13, 2024",
        location: "PhD Chamber of Commerce, New Delhi",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past3
      },
      {
        id: 11,
        title: "MASA Women's Excellence Conclave & Awards 2024",
        date: "March 10, 2024",
        location: "JW Marriott, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past2
      },
      {
        id: 12,
        title: "MSME & Startup Accelerator Conclave & Awards 2024",
        date: "January 28, 2024",
        location: "Indian Council for Cultural Relations, Kolkata",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: past1
      },
    ],
    programs: [
      {
        id: 13,
        title: "Leadership Development Program",
        date: "June 5 - July 10, 2025",
        location: "Corporate Headquarters",
        description: "Six-week intensive leadership training",
        fullDescription: "This program includes mentorship sessions, team projects, and leadership simulations designed to develop executive-level skills.",
        image: poddar
      },
    ]
  };

  // Toggle event expansion
  const toggleEventExpansion = (eventId) => {
    setExpandedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId) // Remove if already expanded
        : [...prev, eventId] // Add if not expanded
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore Our <span className="text-teal-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From cutting-edge conferences to transformative programs, dive into our world of opportunities.
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
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => {
                setActiveTab(tab);
                setExpandedEvents([]); // Reset expanded events when switching tabs
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{event.location}</p>
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>

                {expandedEvents.includes(event.id) && (
                  <div className="mt-4 pt-4 border-t border-gray-700 text-gray-300 text-sm animate-fade-in">
                    {event.fullDescription}
                  </div>
                )}

                <button
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    expandedEvents.includes(event.id)
                      ? 'text-gray-400 hover:text-white'
                      : 'text-teal-400 hover:text-teal-300'
                  }`}
                  onClick={() => toggleEventExpansion(event.id)}
                >
                  {expandedEvents.includes(event.id) ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;