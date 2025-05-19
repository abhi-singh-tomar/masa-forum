import React, { useState } from 'react';
  import { registerForEvent } from '../api'; 
  import Footer from '../components/Footer';

 

  const membershipOptions = [
    "Non-Member",
    "Basic MASA Community",
    "Premium Member",
    "Gold Member",
    "Corporate Member",
    "Platinum Members",
    "Patron Members"
  ];

  export default function EventRegistrationPage() {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      membershipStatus: 'Non-Member'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage('');
      setError('');

      // Basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      if (!formData.fullName || !formData.email || !formData.phone ) {
        setError("All fields are required.");
        return;
      }
      if (!emailRegex.test(formData.email)) {
        setError("Please provide a valid email address.");
        return;
      }
      if (!phoneRegex.test(formData.phone)) {
        setError("Please provide a valid 10-digit phone number.");
        return;
      }

      try {
        const response = await registerForEvent({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
         
          membershipStatus: formData.membershipStatus
        });
        setMessage(response.message);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
         
          membershipStatus: 'Non-Member'
        });
      } catch (err) {
        setError("Failed to register for the event. Please try again.");
        console.error("Event registration error:", err);
      }
    };

    return (
      <div>
        <div className="min-h-screen bg-gray-900 px-6 py-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-yellow-500">Event Registration</h1>
            <p className="text-xl font-semibold mb-8">Register for MASA Forum events and join our community!</p>

            {message && <p className="text-green-500 mb-4">{message}</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-left text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label className="block text-left text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-left text-gray-300 mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                  placeholder="Your Phone Number (10 digits)"
                />
              </div>

              
              <div>
                <label className="block text-left text-gray-300 mb-2">Membership Status</label>
                <select
                  name="membershipStatus"
                  value={formData.membershipStatus}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
                >
                  {membershipOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Register for Event
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }