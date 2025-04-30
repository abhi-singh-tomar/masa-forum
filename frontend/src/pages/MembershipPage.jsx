import React from 'react';
import axios from "axios";

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
      "Short Business Listing on MASA’s Website",
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

const handlePayment = async (amount) => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Check your connection.");
    return;
  }

  try {
    const { data: order } = await axios.post("http://localhost:5000/api/payment/create-order", { amount });

    const options = {
      key: "rzp_test_8rWvfXKX4rYWSy", // Replace with process.env key in production
      amount: order.amount,
      currency: order.currency,
      name: "MASA Forum",
      description: "Membership Payment",
      order_id: order.id,
      handler: async function (response) {
        try {
          const verification = await axios.post("http://localhost:5000/api/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
          alert("Payment Verified: " + verification.data.message);
        } catch (err) {
          console.error("Verification failed:", err);
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
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
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-yellow-500">MSME And Startups Acceleration (MASA)</h1>
        <p className="text-xl font-semibold mb-2">Join the MASA Community - Access to Excellence and Innovation!</p>
        <ul className="text-left max-w-2xl mx-auto mb-12 space-y-2 text-base">
          <li>✓ Ecosystem for Startups and MSMEs, to grow them from idea to IPO.</li>
          <li>✓ Get Recognitions, Awards, and validation.</li>
          <li>✓ Be a part of growth oriented network.</li>
          <li>✓ Platform for Shared learnings, workshops, training programs.</li>
          <li>✓ MSME Schemes, Subsidies, Policy Support.</li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6">
          {membershipPlans.map((plan, index) => (
            <div key={index} className="bg-yellow-200 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <h2 className="text-3xl font-bold mb-2 text-blue-600">{plan.title}</h2>
              <p className="text-2xl font-semibold text-gray-800 mb-4">{plan.price}</p>
              <ul className="text-gray-900 mb-6 flex-grow text-left space-y-2">
                {plan.benefits.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition mt-auto"
                onClick={() => handlePayment(parseInt(plan.price.replace(/[₹,]/g, "")))}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}