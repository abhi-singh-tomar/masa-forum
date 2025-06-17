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
  question: "What does the eagle symbolize in MASA Forum’s branding?",
  answer: `🦅 Why the Eagle Represents MASA

The eagle is not just a bird — it is a symbol of resilience, transformation, vision, and fearless leadership. At MASA, we have chosen the eagle as our brand icon because it deeply reflects the journey of every entrepreneur, MSME leader, and startup founder we aim to empower.

🦅 Rebirth Through Resilience

At the age of 40, the eagle faces a life-defining choice — to die or to be reborn. Its talons grow too weak to hunt, its beak becomes bent, and its wings too heavy to fly. But instead of giving up, the eagle retreats to the mountaintop, breaks off its beak, sheds its feathers, and endures months of pain to emerge stronger, sharper, and renewed.  
This is the spirit of MASA — we believe in helping businesses and founders reimagine themselves, shed what no longer serves them, and rise again with purpose and power.

🦅 Mentorship Through Challenge

An eagle teaches its young not by comfort but by challenge. It pushes the eaglet off the cliff, forcing it to flap, fall, and find its wings. But it never lets the eaglet crash. Just when the ground nears, the parent swoops in to lift and guide.  
This is how MASA mentors — we believe real growth comes through risk and real learning through experience. We create environments where young businesses are encouraged to leap, but also supported with strong wings beneath them.

🦅 Vision That Soars High

An eagle sees its prey from miles away and chooses to fly alone, with unmatched clarity and focus. It flies above the storm, never below it.  
This represents MASA’s role as a visionary guide — helping entrepreneurs rise above chaos, focus on what matters, and soar where others hesitate.`
},

{
  question: "MASA Forum की ब्रांडिंग में ईगल (गरुड़) का क्या प्रतीकात्मक अर्थ है?",
  answer: `🦅 MASA में ईगल का महत्व

ईगल सिर्फ एक पक्षी नहीं है — यह दृढ़ता, रूपांतरण, दूरदृष्टि और निर्भीक नेतृत्व का प्रतीक है। MASA ने इसे अपने ब्रांड का प्रतीक इसलिए चुना है क्योंकि यह हर उस उद्यमी, MSME लीडर और स्टार्टअप संस्थापक की यात्रा को दर्शाता है, जिन्हें हम सशक्त बनाना चाहते हैं।

🦅 पुनर्जन्म की प्रेरणा  
जब ईगल 40 वर्ष का होता है, तो उसे एक कठिन निर्णय लेना पड़ता है — या तो मृत्यु स्वीकार करे या खुद को पूरी तरह बदलकर नया जीवन पाए। वह अपनी चोंच तोड़ता है, पुराने पंख गिराता है और अकेले पहाड़ों पर जाकर कई महीने तक दर्द सहकर खुद को फिर से नया बनाता है।  
MASA भी यही मानता है — हम उद्यमों और संस्थापकों को प्रेरित करते हैं कि वे अपनी सीमाओं को तोड़ें, खुद को फिर से परिभाषित करें और नए जोश के साथ ऊंचाई तक उड़ान भरें।

🦅 चुनौती से सीखने की शक्ति  
ईगल अपने बच्चों को उड़ना सिखाने के लिए उन्हें पहाड़ से गिरा देता है — ताकि वे अपने पंखों की ताकत जानें। लेकिन वह कभी उन्हें गिरने नहीं देता। जैसे ही वे ज़मीन के करीब पहुंचते हैं, वह उड़कर उन्हें संभाल लेता है।  
MASA mentorship भी ऐसा ही है — हम जोखिम लेने को प्रोत्साहित करते हैं, लेकिन साथ ही गाइडेंस और सुरक्षा भी देते हैं।

🦅 ऊँची दृष्टि और एकाग्रता  
ईगल मीलों दूर से अपने लक्ष्य को देख सकता है और तूफान से ऊपर उड़ता है, कभी नीचे नहीं। वह अकेले उड़ता है — शांत, केंद्रित और अडिग।  
MASA भी यही करता है — हम आपके बिज़नेस को शोर और भ्रम से ऊपर उठाते हैं, स्पष्टता और लक्ष्य पर फोकस करते हैं, और आपको ऐसी ऊँचाई तक पहुँचाते हैं जहाँ दूसरों की उड़ान खत्म हो जाती है।`
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
