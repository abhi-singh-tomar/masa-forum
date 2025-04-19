import React from 'react';

const basic = [
  "3 Complementary Networking Events",
  "Access to Group Webinars & Workshops",
  "Basic MSME Advisory on compliance, schemes & market linkage",
  "Standard Networking Access via MASA platforms",
  "Name in Membership Directory",
  "Access to Exclusive Member WhatsApp & Email Groups",
  "Monthly MSME Bulletin Subscription (Digital)"
];

const premium = [
  "4 Free Networking Events",
  "One-to-One Business Mentorship Session (1 session)",
  "Complimentary Passes to events upto one year",
  "Advisory on MSME Subsidies, Grants & Funding Opportunities",
  "Premium Certificate of Membership",
  "Short Business Listing on MASA’s Website",
  "Opportunity to Feature in MASA Member Spotlight",
  "Priority access to Trade Missions and Industry Roundtables",
  "Eligibility to Nominate for MASA Awards"
];

const gold = [
  "3 One-to-One Mentorship Sessions per year",
  "Speaking Slot opportunity in Sectorial Events",
  "Nomination for Awards / T.V. Debates / Interviews / Govt meets",
  "Feature Article in MSME TIMES Magazine & My Power Brand Podcast",
  "Banners & Brand Placement at Select MASA Events",
  "Advisory on Subsidies & Funding",
  "Priority consideration for Government Meets & Policy Dialogues"
];

const corporate = [
  "All benefits included in the Gold Membership Plan",
  "Complementary Networking Events for next 2 years",
  "Dedicated Media Feature & Case Study Publication",
  "Premium Facilitation For MSME Government Schemes",
  "Brand Visibility for 1 year across MASA platforms",
  "Banners & Brand Visibility in Flagship MASA Events",
  "Priority in meetings with Indian government officials, embassies, and foreign dignitaries",
  "Part of National & International Delegation",
  "Featured Interview in MSME TIMES Magazine"
];

const platinum = [
  "All benefits included in the Corporate Membership Plan",
  "Complementary Networking Events for next 2 years",
  "4 One-To-One Mentorship Sessions",
  "Dedicated Media Features & Success Story Coverage",
  "Strategic Partnership Facilitation for MSME Schemes",
  "Banners & Brand Presence at Major MASA Events",
  "Participation in National & International Delegation Trips",
  "Prominent Feature in MSME TIMES Magazine & My Power Brand Podcast"
];

const patron = [
  "All benefits included in the Platinum Membership Plan",
  "Lifetime Media Features & Dedicated Case Studies",
  "Premium Facilitation For MSME Schemes",
  "Banners & Brand Visibility in all MASA Signature Events",
  "Assured seat in the National Board as Advisor",
  "Lifetime Feature in MSME TIMES Magazine & My Power Brand Podcast",
  "Permanent Recognition on Social Media as a Patron Member"
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