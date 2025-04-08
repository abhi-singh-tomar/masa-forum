import React from 'react';

const basic = `3 Complementry Networking Events |
 Access to Group Webinars |
 Basic MSME guidance |
 Member only offers |
 Standard Networking access`;

const premium = `4 Free Networking Events |
 One-to-One Session |
 Complementary Passes to events upto one year |
 Feature in MSME TIMES Magazine |
 Brand Visibility for one year Advisory on Subsidies & Funding |
 Premium Certificate of Membership |
 Exclusive MSME Perks`;

const elite = ` 5 Complementry Networking Events
 2 One-to-One Session | 
 Feature in MSME TIMES Magazine &
 Complementary Passes to events upto one year | 
 Brand Visibility in few Events | 
 Advisory on Subsidies & Funding | 
 Elite Certificate of Membership
 Exclusive MSME Perks`;

const gold = `8 Complementary Networking Events upto one year | 
 3 One-to-One Sessions |  
 Feature in MSME TIMES Magazine & MYPOWER
 BRAND PODCAST * | 
 Complementary Passes to events upto one year | 
 Brand Visibility for one year & Banners in few
 Events | 
 Advisory on Subsidies & Funding
 Elite Certificate of Membership | 
 Exclusive MSME Perks`;

const corporate = `Complementary Networking Events for next 2 years | 
4 One-To-One Sessions | 
Media Features + Dedicated Case Study | 
Premium Facilitation For MSME Schemes | 
Banners &Brand Visibility in Events | 
Domestic Delegation | 
Feature in MSME TIMES | 
Magazine & MYPOWER BRAND PODCAST`;

// const platinum = ``;

const patron = ` Compementary Networking Events for next 2 years.
 4 One-To-One Sessions | 
Media Features + Dedicated Case Study | 
 Premium Facilitation For MSME Schemes | 
  Banners & Brand Visibility in Events | 
  Domestic Delegation | 
  Feature in MSME TIMES | 
  Magazine & MYPOWER BRAND PODCAST`;


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
    title: "Elite Member",
    price: "₹19,999",
    benefit: elite,
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
  // {
  //   title: "Platinum Members",
  //   price: "₹99,999",
  //   benefit: "2yrs Branding visibility",
  // },
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
          <li>✓  Get Recognitions, Awards, and validation.</li>
          <li>✓  Be a part of growth oriented network.</li>
          <li>✓ Platform for Shared learnings, workshops, training programs.</li>
          <li>✓  MSME Schemes, Subsidies, Policy Support.</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6">
          {memberships.map((plan, index) => (
            <div key={index} className="bg-yellow-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-2 text-blue-600">{plan.title}</h2>
              <p className="text-2xl font-semibold text-gray-800 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.benefit}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
