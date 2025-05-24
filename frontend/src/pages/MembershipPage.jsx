import React, { useState } from 'react';
import { createOrder, verifyPayment } from '../api';
import Footer from '../components/Footer';

const membershipPlans = [
  {
    title: "Basic MASA Community",
    price: "₹4,999",
    benefits: [
      "3 Complementary Networking Events",
      "Access to Group Webinars & Workshops",
      "Basic MSME Advisory on compliance, schemes & market linkage",
      "Standard Networking Access via MASA platforms",
      "Name in Membership Directory",
      "Access to Exclusive Member WhatsApp & Email Groups",
      "Monthly MSME Bulletin Subscription (Digital)"
    ]
  },
  {
    title: "Premium Member",
    price: "₹14,999",
    benefits: [
      "4 Free Networking Events",
      "One-to-One Business Mentorship Session (1 session)",
      "Complimentary Passes to events upto one year",
      "Advisory on MSME Subsidies, Grants & Funding Opportunities",
      "Premium Certificate of Membership",
      "Short Business Listing on MASA's Website",
      "Opportunity to Feature in MASA Member Spotlight",
      "Priority access to Trade Missions and Industry Roundtables",
      "Eligibility to Nominate for MASA Awards"
    ]
  },
  {
    title: "Gold Member",
    price: "₹24,999",
    benefits: [
      "3 One-to-One Mentorship Sessions per year",
      "Speaking Slot opportunity in Sectorial Events",
      "Nomination for Awards / T.V. Debates / Interviews / Govt meets",
      "Feature Article in MSME TIMES Magazine & My Power Brand Podcast",
      "Banners & Brand Placement at Select MASA Events",
      "Advisory on Subsidies & Funding",
      "Priority consideration for Government Meets & Policy Dialogues"
    ]
  },
  {
    title: "Corporate Member",
    price: "₹49,999",
    benefits: [
      "All benefits included in the Gold Membership Plan",
      "Complementary Networking Events for next 2 years",
      "Dedicated Media Feature & Case Study Publication",
      "Premium Facilitation For MSME Government Schemes",
      "Brand Visibility for 1 year across MASA platforms",
      "Banners & Brand Visibility in Flagship MASA Events",
      "Priority in meetings with Indian government officials, embassies, and foreign dignitaries",
      "Part of National & International Delegation",
      "Featured Interview in MSME TIMES Magazine"
    ]
  },
  {
    title: "Platinum Members",
    price: "₹99,999",
    benefits: [
      "All benefits included in the Corporate Membership Plan",
      "Complementary Networking Events for next 2 years",
      "4 One-To-One Mentorship Sessions",
      "Dedicated Media Features & Success Story Coverage",
      "Strategic Partnership Facilitation for MSME Schemes",
      "Banners & Brand Presence at Major MASA Events",
      "Participation in National & International Delegation Trips",
      "Prominent Feature in MSME TIMES Magazine & My Power Brand Podcast"
    ]
  },
  {
    title: "Patron Members",
    price: "₹2,99,999",
    benefits: [
      "All benefits included in the Platinum Membership Plan",
      "Lifetime Media Features & Dedicated Case Studies",
      "Premium Facilitation For MSME Schemes",
      "Banners & Brand Visibility in all MASA Signature Events",
      "Assured seat in the National Board as Advisor",
      "Lifetime Feature in MSME TIMES Magazine & My Power Brand Podcast",
      "Permanent Recognition on Social Media as a Patron Member"
    ]
  }
];

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async (amount, name, contact) => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Check your connection.");
    return;
  }

  try {
    const order = await createOrder(amount, name, contact);

    const options = {
      key: "rzp_live_E25Bkz5gTGwdAW",
      amount: order.amount,
      currency: order.currency,
      name: "MASA Forum",
      description: "Membership Payment",
      order_id: order.id,
      handler: async function (response) {
        try {
          const verification = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          alert("Payment Verified: " + verification.message);
        } catch (err) {
          console.error("Verification failed:", err);
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name: name,
        contact: contact,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Error initiating payment.");
  }
};

export default function MembershipPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleJoinNow = (amount, title) => {
    setSelectedAmount(amount);
    setSelectedPlan(title);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !contact) {
      alert("Please provide your name and contact details.");
      return;
    }
    setShowForm(false);
    handlePayment(selectedAmount, name, contact);
  };

  return (
    <div className="bg-gray-900">
    

      <div className="min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-500">MSME And Startups Acceleration (MASA)</h1>
            <p className="text-xl font-semibold mb-6">Join the MASA Community - Access to Excellence and Innovation!</p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-base md:text-lg">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ecosystem for Startups and MSMEs, to grow them from idea to IPO.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Get Recognitions, Awards, and validation.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Be a part of growth oriented network.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Platform for Shared learnings, workshops, training programs.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>MSME Schemes, Subsidies, Policy Support.</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <div key={index} className="bg-yellow-200 rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{plan.title}</h2>
                  <p className="text-3xl font-bold text-blue-600 mb-5">{plan.price}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                    onClick={() => handleJoinNow(parseInt(plan.price.replace(/[₹,]/g, "")), plan.title)}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-blue-600 p-4">
              <h2 className="text-xl font-bold text-white">Join {selectedPlan}</h2>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6">
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Contact Information</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Phone number or email"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center"
                >
                  Proceed to Payment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}