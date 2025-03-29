import React, { useState } from 'react';
import Footer from '../components/Footer';
import masaImage from "../assets/Masa.jpg"; // Replace with your actual image imports

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedEvents, setExpandedEvents] = useState([]); // Changed to array

  const eventsData = {
    upcoming: [
      {
        id: 1,
        title: "Annual Tech Summit",
        date: "May 15-17, 2025",
        location: "Convention Center, New York",
        description: "Join industry leaders for the biggest tech event of the year",
        fullDescription: "This three-day event will feature keynote speeches from tech pioneers, hands-on workshops, and networking opportunities with industry leaders. Don't miss our exclusive product launches and panel discussions.",
        image: masaImage
      },
      {
        id: 2,
        title: "Startup Pitch Night",
        date: "June 10, 2025",
        location: "Tech Hub, San Francisco",
        description: "Pitch your startup to top investors",
        fullDescription: "A night of innovation where startups present their ideas to a panel of venture capitalists and industry experts, followed by networking and feedback sessions.",
        image: masaImage
      },
      {
        id: 3,
        title: "AI Innovation Conference",
        date: "July 20-21, 2025",
        location: "Boston Convention Center",
        description: "Explore the future of artificial intelligence",
        fullDescription: "Two days of deep dives into AI trends, featuring workshops, live demos, and discussions with leading AI researchers and developers.",
        image: masaImage
      },
    ],
    past: [
      {
        id: 4,
        title: "Digital Marketing Workshop",
        date: "March 22, 2024",
        location: "Virtual Event",
        description: "Master the latest digital marketing strategies",
        fullDescription: "This intensive workshop covered SEO, social media marketing, and content strategy with practical case studies and actionable insights.",
        image: masaImage
      },
    ],
    programs: [
      {
        id: 7,
        title: "Leadership Development Program",
        date: "June 5 - July 10, 2025",
        location: "Corporate Headquarters",
        description: "Six-week intensive leadership training",
        fullDescription: "This program includes mentorship sessions, team projects, and leadership simulations designed to develop executive-level skills.",
        image: masaImage
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