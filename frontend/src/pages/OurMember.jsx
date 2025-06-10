import React from "react";

import piyush from "../assets/ourMembers-imgs/piyush.webp";
import arun from "../assets/ourMembers-imgs/arun.webp";
import biswa from "../assets/ourMembers-imgs/biswa.webp";
import rajesh from "../assets/ourMembers-imgs/rajesh.webp";
import sarita from "../assets/ourMembers-imgs/sarita.webp";
import noPic from "../assets/ourMembers-imgs/unknown.webp";
import pinaki from "../assets/ourMembers-imgs/pinaki.webp";

const members = [
  {
    id: 1,
    name: "Arun Kothari",
    photo: arun,
    dateJoined: "April 2025",
    bio: "Kothari Industries"
  },
  {
    id: 2,
    name: "Rajesh Dalmia",
    photo: rajesh,
    dateJoined: "January 2025",
    bio: "Dalmia Financial Services"
  },
  {
    id: 3,
    name: "Sarita Bagaria",
    photo: sarita,
    dateJoined: "January 2025",
    bio: "Soulmist"
  },
  {
    id: 4,
    name: "Varun Biyani",
    photo: noPic,
    dateJoined: "February 2025",
    bio: "M/s SkyKing, TruckHapp Pvt Ltd"
  },
  {
    id: 5,
    name: "Dr. Biswarup Chatterjee",
    photo: biswa,
    dateJoined: "February 2025",
    bio: "Karyeshu Management Training"
  },
  {
    id: 6,
    name: "Pinaki Ganguly",
    photo: pinaki,
    dateJoined: "December 2024",
    bio: "Fractals Global Services Private Limited"
  },
  {
    id: 7,
    name: "Piyush Agarwal",
    photo: piyush,
    dateJoined: "April 2025",
    bio: "Elixir Metals"
  },
  {
    id: 8,
    name: "Vivek Agarwal",
    photo: noPic,
    dateJoined: "April 2025",
    bio: "Vivek Murarka, advocate "
  },
  {
    id: 9,
    name: "Vineet Khaitan",
    photo: noPic,
    dateJoined: "November 2024",
    bio: "NaturoDiet "
  },
  {
    id: 10,
    name: "Nimish Kumar Agrawal",
    photo: noPic,
    dateJoined: "December 2024",
    bio: "Tejas Spire LLP"
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