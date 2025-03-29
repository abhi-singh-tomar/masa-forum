import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "mentor", // Default role
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const result = await registerUser(formData);
  
    if (result.success) {
      alert("✅ Registration Successful! Redirecting to Login...");
      navigate("/login"); // Redirect to Login Page
    } else {
      alert(`❌ Error: ${result.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border mb-2" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border mb-2" />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border mb-2" />
        
        <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border mb-2">
          <option value="mentor">Mentor</option>
          <option value="student">Student</option>
          <option value="investor">Investor</option>
          <option value="startup">Startup</option>
        </select>

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border mb-2" />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
      </form>
      <p className="text-sm text-center mt-4">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
};

export default Register;
