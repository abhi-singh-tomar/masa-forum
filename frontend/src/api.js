import axios from "axios";

// ✅ Use environment variable for live API, fallback to localhost in dev
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: false, // Not using sessions/cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ API Functions

export const fetchData = async () => {
  const res = await axiosInstance.get("/");
  return res.data;
};

export const sendUserIntent = async (intent) => {
  const res = await axiosInstance.post("/user-intent", { intent });
  return res.data;
};

export const registerUser = async (formData) => {
  try {
     await axiosInstance.post("/auth/register", formData);
    return { success: true, message: "Registration successful!" };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axiosInstance.post("/auth/login", { email, password });
    return { success: true, token: res.data.token, user: res.data.user };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export const applyForAward = async (formData) => {
  try {
    const res = await axiosInstance.post("/awards/apply", formData);
    return { success: true, message: res.data.message };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Application failed",
    };
  }
};

export const sendContactMessage = async (formData) => {
  try {
   await axiosInstance.post("/contact", formData);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Message failed",
    };
  }
};

export const createOrder = async (amount, name, contact) => {
  const res = await axiosInstance.post("/payment/create-order", {
    amount,
    name,
    contact,
  });
  return res.data;
};

export const verifyPayment = async (paymentData) => {
  const res = await axiosInstance.post("/payment/verify", paymentData);
  return res.data;
};

export const registerForEvent = async (formData) => {
  const res = await axiosInstance.post("/event/register", formData);
  return res.data;
};
