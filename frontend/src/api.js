import axios from 'axios';

// Use the environment variable set in Netlify
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Fallback for local development

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { success: false, message: error.message };
  }
};

export const sendUserIntent = async (intent) => {
  try {
    const response = await axios.post(`${API_URL}/user-intent`, { intent });
    return { success: true, message: "Intent sent successfully!" };
  } catch (error) {
    console.error("Error sending user intent:", error);
    return { success: false, message: error.message };
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, formData);
    return { success: true, message: "Registration successful!" };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};

export const applyForAward = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/awards/apply`, formData);
    return { success: true, message: response.data.message };
  } catch (error) {
    console.error("Error applying for award:", error);
    return { success: false, message: error.response?.data?.message || "Server error. Please try again later." };
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { success: false, message: "Error sending message. Please try again." };
  }
};