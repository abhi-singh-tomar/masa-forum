import axios from 'axios';

   const API_URL = 'https://api.masaforum.com/api';

  export const fetchData = async () => {
      try {
          const response = await axios.get(`${API_URL}/`);
          return response.data;
      } catch (error) {
          console.error(error);
      }
  };

  export const sendUserIntent = async (intent) => {
      try {
          await axios.post(`${API_URL}/user-intent`, { intent });
      } catch (error) {
          console.error("Error sending data:", error);
      }
  };

  export const registerUser = async (formData) => {
      try {
          const response = await fetch(`${API_URL}/auth/register`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (!response.ok) {
              throw new Error(data.message || "Registration failed");
          }

          return { success: true, message: "Registration successful!" };
      } catch (error) {
          return { success: false, message: error.message };
      }
  };

  export const loginUser = async (email, password) => {
      try {
          const response = await fetch(`${API_URL}/auth/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (!response.ok) {
              throw new Error(data.message || "Something went wrong");
          }

          return { success: true, token: data.token, user: data.user };
      } catch (error) {
          return { success: false, message: error.message };
      }
  };

  export const applyForAward = async (formData) => {
      try {
          const response = await fetch(`${API_URL}/awards/apply`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (!response.ok) {
              throw new Error(data.message || "Failed to submit application");
          }

          return { success: true, message: data.message };
      } catch (error) {
          return { success: false, message: "Server error. Please try again later." };
      }
  };

  export const sendContactMessage = async (formData) => {
      try {
          const response = await fetch(`${API_URL}/contact`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          if (!response.ok) {
              throw new Error("Failed to send message. Try again later.");
          }

          return { success: true, message: "Message sent successfully!" };
      } catch (error) {
          return { success: false, message: "Error sending message. Please try again." };
      }
  };

  export const createOrder = async (amount, name, contact) => {
      try {
          const response = await axios.post(`${API_URL}/payment/create-order`, { amount, name, contact });
          return response.data;
      } catch (error) {
          console.error("Error creating order:", {
              message: error.message,
              status: error.response?.status,
              data: error.response?.data,
              config: error.config
          });
          throw error;
      }
  };

  export const verifyPayment = async (paymentData) => {
      try {
          const response = await axios.post(`${API_URL}/payment/verify`, paymentData);
          return response.data;
      } catch (error) {
          console.error("Error verifying payment:", error);
          throw error;
      }
  };