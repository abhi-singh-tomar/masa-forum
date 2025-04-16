import React from 'react';

// 5
const basic = [
  "3 Complementary Networking Events",
  "Access to Group Webinars",
  "Basic MSME guidance",
  "Member only offers",
  "Standard Networking access"
];

// 7
const premium = [
  "4 Free Networking Events",
  "One-to-One Session",
  "Complimentary Passes to events upto one year",
  "Feature in MSME TIMES Magazine",
  "Brand Visibility for one year",
  "Advisory on Subsidies & Funding",
  "Premium Certificate of Membership",
  "Exclusive MSME Perks"
];

// 10
const gold = [
  "8 Complementary Networking Events upto one year",
  "3 One-to-One Sessions",
  "Feature in MSME TIMES Magazine & MYPOWER BRAND PODCAST",
  "Complimentary Passes to events upto one year",
  "Brand Visibility for one year & Banners in few Events",
  "Advisory on Subsidies & Funding",
  "Exclusive MSME Perks"
];

// 8
const corporate = [
  "All benefits included in the Gold Membership Plan",
  "Complementary Networking Events for next 2 years",
  "4 One-To-One Sessions",
  "Media Features + Dedicated Case Study",
  "Premium Facilitation For MSME Schemes",
  "Banners & Brand Visibility in Events",
  "Domestic Delegation",
  "Feature in MSME TIMES"
];

// 7
const platinum = [
  "All benefits included in the Corporate Membership Plan",
  "Complementary Networking Events for next 2 years",
  "4 One-To-One Sessions",
  "Media Features + Dedicated Case Study",
  "Premium Facilitation for MSME Schemes",
  "Banners & Brand Visibility in Events",
  "Domestic Delegation",
  "Feature in MSME Times Magazine & My Power Brand Podcast"
];

// 8
const patron = [
  "All benefits included in the Platinum Membership Plan",
  "Complimentary Networking Events for next 2 years",
  "4 One-To-One Sessions",
  "Media Features + Dedicated Case Study",
  "Premium Facilitation For MSME Schemes",
  "Banners & Brand Visibility in Events",
  "Domestic Delegation",
  "Feature in MSME TIMES Magazine & My Power Brand Podcast"
];

const memberships = [
  {
    title: "Basic MASA Community",
    price: "₹4,999",
    benefit: basic,
  },
  {
    title: "Premium Member",
    price: "₹14,999",
    benefit: premium,
  },
  {
    title: "Gold Member",
    price: "₹24,999",
    benefit: gold,
  },
  {
    title: "Corporate Member",
    price: "₹49,999",
    benefit: corporate,
  },
  {
    title: "Platinum Members",
    price: "₹99,999",
    benefit: platinum,
  },
  {
    title: "Patron Members",
    price: "₹2,99,999",
    benefit: patron,
  },
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gray-700 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-500">MSME And Startups Acceleration (MASA)</h1>
        <p className="text-xl font-semibold text-white mb-2">Join the MASA Community - Access to Excellence and Innovation!</p>
        <p className="text-white mb-8">Ecosystem Benefits for our Members:</p>

        <ul className="text-left max-w-2xl mx-auto mb-12 space-y-2 text-base text-white">
          <li>✓ Ecosystem for Startups and MSMEs, to grow them from idea to IPO.</li>
          <li>✓ Get Recognitions, Awards, and validation.</li>
          <li>✓ Be a part of growth oriented network.</li>
          <li>✓ Platform for Shared learnings, workshops, training programs.</li>
          <li>✓ MSME Schemes, Subsidies, Policy Support.</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6">
          {memberships.map((plan, index) => (
            <div key={index} className="bg-yellow-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-blue-600">{plan.title}</h2>
              <p className="text-2xl font-semibold text-gray-800 mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6 flex-grow text-left space-y-2">
                {plan.benefit.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}