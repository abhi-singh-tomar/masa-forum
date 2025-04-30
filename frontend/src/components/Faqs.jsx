import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is MASA Forum?",
    answer: "MASA Forum is a leading platform in India dedicated to accelerating startups and MSMEs by offering funding opportunities, investor connections, expert mentorship, and business growth support. It fosters an inclusive startup ecosystem for entrepreneurs, innovators, and small businesses."
  },
  {
    question: "How can I join MASA?",
    answer: "You can become a part of MASA by visiting our Membership Plans page and selecting a plan that suits your profile—whether you're a startup founder, MSME owner, investor, student, or mentor. Register online and start benefiting from our startup accelerator programs and events."
  },
  {
    question: "Is MASA only for startups?",
    answer: "No, MASA is designed for a wide range of stakeholders including MSMEs, startups, investors, mentors, students, and ecosystem enablers. We support all growth-oriented entities aiming to scale their business or contribute to the entrepreneurial ecosystem in India."
  },
  {
    question: "What benefits do MASA members receive?",
    answer: "MASA members gain access to startup funding opportunities, curated mentorship programs, exclusive networking events, MSME exhibitions, pitch sessions with investors, and resources to help accelerate their business journey."
  },
  {
    question: "Does MASA help with startup or MSME funding?",
    answer: "Yes, MASA actively connects startups and MSMEs with investors through pitch decks, forums, and events. Our Vyapar Kuber initiative is specifically designed to showcase funding-ready ventures to angel investors, VCs, and funding bodies."
  },
  {
    question: "How does MASA support women entrepreneurs?",
    answer: "Through the Women@MASA initiative, MASA provides targeted mentorship, visibility, and networking platforms for women entrepreneurs. We aim to empower female-led startups and MSMEs to access funding, training, and growth opportunities."
  },
  {
    question: "Can students and aspiring entrepreneurs join MASA?",
    answer: "Absolutely! MASA welcomes students and aspiring entrepreneurs who want to learn about startups, innovation, and business building. They can join mentorship programs, attend conclaves, and participate in startup pitch events."
  },
  {
    question: "What is the MASA Startup Pitch Deck program?",
    answer: "The MASA Startup Pitch Deck is a platform where early-stage startups and MSMEs pitch their ideas to a panel of judges and investors. Selected pitches receive funding leads, mentoring, and strategic guidance to scale their ventures."
  },
  {
    question: "Where are MASA events held?",
    answer: "MASA hosts national-level events across major cities in India including Kolkata, Raipur, Bhubaneswar, and Delhi. These include conclaves, startup expos, award ceremonies, and MSME exhibitions connecting entrepreneurs with policymakers and investors."
  },
  {
    question: "How can I collaborate with MASA as a mentor or investor?",
    answer: "If you're a mentor or investor interested in supporting startups and MSMEs, you can collaborate with MASA by signing up through our Partner With Us page. You'll gain access to curated pitch events, investment opportunities, and a vibrant entrepreneurial network."
  }
];


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0  z-0" />

      {/* FAQs Section */}
      <section className="py-20 px-10 relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl overflow-hidden">
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
