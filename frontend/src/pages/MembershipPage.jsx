import React, { useState } from 'react';
import { createOrder, verifyPayment } from '../api';
import Footer from '../components/Footer';

const membershipPlans = [
  { title: "Community Member", price: "₹4,999", color: "from-blue-300 to-blue-500" },
  { title: "Premium Member", price: "₹14,999", color: "from-rose-200 to-rose-700" },
  { title: "Gold Member", price: "₹24,999", color:   " from-yellow-200 to-yellow-400" },
  { title: "Corporate Member", price: "₹49,999", color: "from-purple-200 to-purple-500" },
  { title: "Platinum Member", price: "₹99,999", color: "  from-gray-200 to-gray-400" },
  { title: "Patron Member", price: "₹2,99,999", color: "from-orange-200 to-orange-500" },
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
      prefill: { name, contact },
      theme: { color: "#1e40af" },
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-8xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 animate-pulse">
            MASA Membership Plans
          </h1>
          <p className="mt-4 text-xl text-gray-300 animate-fade-in">Join the MSME And Startups Acceleration (MASA) community today</p>
        </div>

        <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.color} rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-white group`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
              <div className="relative p-8 flex flex-col items-center">
                <h2 className="text-3xl font-extrabold text-white mb-4 z-10">{plan.title}</h2>
                <p className="text-4xl font-bold text-white mb-6 z-10 drop-shadow-lg">{plan.price}</p>
                <button
                  className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200 transform hover:-translate-y-1 z-10"
                  onClick={() => handleJoinNow(parseInt(plan.price.replace(/[₹,]/g, "")), plan.title)}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300">
            Contact us for more details: 
            <a href="mailto:connect@masaforum.com" className="text-yellow-400 hover:text-yellow-300 mx-2 underline">connect@masaforum.com</a>
            or
            <a href="tel:+91-9147375808" className="text-yellow-400 hover:text-yellow-300 mx-2 underline">+91-9147375808</a>
          </p>
        </div>
      </div>
  
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700/50 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-t-2xl">
              <h2 className="text-xl font-bold text-white">Join {selectedPlan}</h2>
            </div>
            <div className="p-6">
              <div className="mb-5">
                <label className="block text-gray-300 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Contact Information</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-400"
                  placeholder="Phone number or email"
                  required
                />
              </div>
              <div className="flex justify-between items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!name || !contact) {
                      alert("Please provide your name and contact details.");
                      return;
                    }
                    setShowForm(false);
                    handlePayment(selectedAmount, name, contact);
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all hover:scale-105 flex items-center justify-center"
                >
                  Proceed to Payment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}