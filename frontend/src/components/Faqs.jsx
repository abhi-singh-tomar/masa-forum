import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is MASA Forum?",
    answer: "MASA Forum is a platform dedicated to accelerating startups and MSMEs by providing investor connections, mentorship, and growth support."
  },
  {
    question: "How can I join MASA?",
    answer: "You can join MASA by signing up through our Membership Plans page. Choose a suitable plan and complete the registration process."
  },
  {
    question: "Is MASA only for startups?",
    answer: "No, MASA also supports MSMEs, investors, students, and mentors who want to contribute or grow in the startup ecosystem."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50 z-0" />

      {/* FAQs Section */}
      <section className="py-20 px-10 relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-xl font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mt-4 text-gray-300 text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
