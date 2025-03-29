import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/yourgroupinvitelink" // Replace with your actual WhatsApp group invite link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-xl" />
        <span className="hidden sm:inline">Join our WhatsApp group</span>
      </a>
    </motion.div>
  );
};

export default WhatsAppFloatButton;