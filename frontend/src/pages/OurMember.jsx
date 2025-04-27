import React from "react";

const members = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    dateJoined: "January 2024",
    bio: "Passionate about community building and technology innovation."
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200",
    dateJoined: "March 2024",
    bio: "Dedicated to creating inclusive spaces for collaboration."
  },
  {
    id: 3,
    name: "Alex Johnson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    dateJoined: "April 2024",
    bio: "Bringing technical expertise to drive our projects forward."
  },
  {
    id: 4,
    name: "Maria Garcia",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200",
    dateJoined: "May 2024",
    bio: "Creative strategist focused on growing our community impact."
  },
  {
    id: 5,
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200",
    dateJoined: "June 2024",
    bio: "Ensuring our initiatives run smoothly and efficiently."
  },
  {
    id: 6,
    name: "Sarah Williams",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
    dateJoined: "July 2024",
    bio: "Building bridges with like-minded organizations."
  }
];

const OurMember = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-900">
      {/* Top Description */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Our Members
        </h1>
        <p className="text-lg text-white leading-relaxed">
          Meet the wonderful people who form our community. Together, we're building
          meaningful connections and making a difference.
        </p>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {members.map((member) => (
          <div 
            key={member.id} 
            className="bg-gray-600 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6 text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
              />
              <h2 className="text-xl font-bold text-white mb-2">{member.name}</h2>
              <p className="text-white text-sm mb-4">{member.bio}</p>
              <div className="flex items-center justify-center text-sm text-white">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Joined {member.dateJoined}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default OurMember;