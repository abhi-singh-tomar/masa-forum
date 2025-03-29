import React, { useState } from "react";
import Footer from "../components/Footer";

const memberships = [
  {
    title: "Corporate Membership",
    price: "₹49,999",
    features: [
      "Complementary Networking Events For next 2 years.",
      "4 One-To-One Sessions",
      "Media Features + Dedicated Case Study.",
      "Premium Facilitation For MSME Schemes",
      "Banners & Brand Visibility in Events",
      "Domestic Delegation",
      "Feature in MSME TIMES Magazine & MYPOWER BRAND PODCAST",
    ],
    color: "bg-yellow-500 text-black",
  },
  {
    title: "Platinum Membership",
    price: "₹99,999",
    features: [
      "Complementary Networking Events For next 2 years.",
      "4 One-To-One Sessions",
      "Media Features + Dedicated Case Study.",
      "Premium Facilitation For MSME Schemes",
      "Banners & Brand Visibility in Events",
      "Domestic Delegation",
      "Feature in MSME TIMES Magazine & MYPOWER BRAND PODCAST",
    ],
    color: "bg-black text-white",
  },
  {
    title: "Patron Membership",
    price: "₹2,99,999",
    features: [
      "Lifetime Membership in MASA",
      "One-To-One Mentorship Guidance",
      "Media Features + Dedicated Case Study.",
      "Premium Facilitation For MSME Schemes",
      "Banners & Brand Visibility in Events",
      "Domestic Delegation",
      "Feature in MSME TIMES Magazine & MYPOWER BRAND PODCAST",
    ],
    color: "bg-green-500 text-black",
  },
  {
    title: "Premium Membership",
    price: "₹14,999",
    features: [
      "4 Free Networking Events",
      "One-To-One Session",
      "Feature in MSME TIMES Magazine",
      "Complementary Passes to events up to one year",
      "Brand Visibility for one year",
      "Advisory on Subsidies & Funding",
      "Premium Certificate of Membership",
      "Exclusive MSME Perks",
    ],
    color: "bg-yellow-500 text-black",
  },
  {
    title: "Elite Membership",
    price: "₹19,999",
    features: [
      "5 Complementary Networking Events",
      "2 One-To-One Sessions",
      "Feature in MSME TIMES Magazine & Complementary Passes to events up to one year",
      "Brand Visibility in few Events",
      "Advisory on Subsidies & Funding",
      "Elite Certificate of Membership",
      "Exclusive MSME Perks",
    ],
    color: "bg-black text-white",
  },
  {
    title: "Gold Membership",
    price: "₹24,999",
    features: [
      "8 Complementary Networking Events up to one year",
      "3 One-To-One Sessions",
      "Feature in MSME TIMES Magazine & MYPOWER BRAND PODCAST",
      "Complementary Passes to events up to one year",
      "Brand Visibility for one year & Banners in few Events",
      "Advisory on Subsidies & Funding",
      "Elite Certificate of Membership",
      "Exclusive MSME Perks",
    ],
    color: "bg-green-500 text-black",
  },
];

const MembershipPage = () => {
  const [expanded, setExpanded] = useState(Array(memberships.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
  <div>
    <div className="min-h-screen bg-gray-800 text-black p-10">
      <div className="bg-yellow-500 text-black text-center py-6 rounded-lg mb-10 shadow-lg">
        <h1 className="text-3xl font-bold">Choose Your MASA Membership Plan</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`p-6 ${membership.color} rounded-2xl shadow-lg flex flex-col justify-between h-full`}
          >
            <h2 className="text-2xl font-bold mb-4">{membership.title}</h2>
            <ul className="mb-4 space-y-2">
              {(expanded[index] ? membership.features : membership.features.slice(0, 4)).map((feature, i) => (
                <li key={i} className="text-sm">✔ {feature}</li>
              ))}
            </ul>
            {membership.features.length > 4 && (
              <button
                className="text-sm text-blue-700 underline mb-4"
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? "Show Less" : "Show More"}
              </button>
            )}
            <p className="text-xl font-bold mb-4">{membership.price}</p>
            <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </div>
        ))}
      </div>
     
    </div>
    <Footer/>
    </div>  
  );
};

export default MembershipPage;