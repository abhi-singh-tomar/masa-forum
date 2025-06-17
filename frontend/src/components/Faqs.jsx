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
  },

 {
  question: "What does the Eagle symbolize in MASA’s branding?",
  answer: `🦅 Why the Eagle Represents MASA

The eagle stands for resilience, transformation, vision, and fearless leadership — the same qualities we nurture at MASA. It reflects the journey of every startup founder and MSME leader striving to rise.

🔹 Rebirth & Resilience  
At 40, an eagle renews itself through pain and change. MASA helps businesses do the same — break limits, transform, and soar again.

🔹 Mentorship through Challenge  
An eagle pushes its young off the cliff to help them fly, but always protects them. MASA mentors with the same spirit — challenge with support.

🔹 Vision & Focus  
The eagle flies above storms and sees clearly from miles away. MASA guides entrepreneurs to rise above noise and focus on what truly matters.`
},

{
  question: "MASA Forum की ब्रांडिंग में ईगल (गरुड़) का क्या प्रतीकात्मक अर्थ है?",
  answer: `🦅 MASA में ईगल का महत्व

ईगल दृढ़ता, परिवर्तन, दूरदृष्टि और निर्भीक नेतृत्व का प्रतीक है — वही मूल्य जो MASA हर उद्यमी में बढ़ावा देता है। यह हर स्टार्टअप और MSME की संघर्ष और उन्नति की यात्रा को दर्शाता है।

🔹 पुनर्जन्म और साहस  
ईगल 40 वर्ष की उम्र में दर्द और बदलाव से खुद को नया बनाता है। MASA भी व्यवसायों को खुद को फिर से परिभाषित करने और ऊंचाई तक उड़ने में मदद करता है।

🔹 चुनौती से मार्गदर्शन  
ईगल अपने बच्चों को उड़ना सिखाने के लिए उन्हें गिराता है, लेकिन बचाता भी है। MASA भी ऐसे ही जोखिम और मार्गदर्शन का संतुलन देता है।

🔹 ऊँची सोच और स्पष्ट दृष्टि  
ईगल तूफान के ऊपर उड़ता है और मीलों दूर तक देख सकता है। MASA उद्यमियों को शांति, फोकस और दिशा देने का कार्य करता है।`
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
      <div className="mt-4 text-gray-300 text-base space-y-4">
        {faq.answer.split("\n\n").map((paragraph, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>
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
