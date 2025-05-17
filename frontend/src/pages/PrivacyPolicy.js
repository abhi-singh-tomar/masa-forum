import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-900 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <p className="text-white">
            This Privacy Policy explains how MASA Forum ("we," "us," or "our") collects, uses, discloses, and safeguards personal information provided by visitors and users of our website,{' '}
            <a href="https://masaforum.com" className="text-blue-600 hover:underline">
              masaforum.com
            </a>
            . By using our website, you agree to the terms of this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              <strong>Personal Information</strong>: When you visit our website, register for events, join our membership, or use our services, you may be asked to provide personal information, such as your name, email address, phone number, and other identifying details.
            </li>
            <li>
              <strong>Non-Personal Information</strong>: We may collect non-personal information, such as your IP address, browser type, operating system, and browsing behavior (e.g., pages visited, time spent on the site). This data is used for statistical and analytical purposes to improve our website and services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600">We may use your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">To respond to your inquiries and provide customer support.</li>
            <li className="mb-2">To process registrations for events, memberships, or other services offered by MASA Forum.</li>
            <li className="mb-2">To improve our website and services based on your feedback and usage patterns.</li>
            <li>
              To send periodic emails regarding our events, services, and promotions, if you have subscribed to our mailing list. You may opt out of these communications at any time by following the unsubscribe instructions provided in the emails.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.</li>
            <li className="mb-2">
              We may share your information with trusted third parties who assist us in operating our website, conducting our business, or providing services (e.g., payment processors, email service providers, or event management platforms). These parties are contractually obligated to keep your information confidential and secure.
            </li>
            <li>
              We may disclose your information if required by law, such as to comply with a court order or legal process, or to protect our rights, property, or safety.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking Technologies</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-2">
              Our website may use cookies and similar tracking technologies (e.g., web beacons, analytics tools) to enhance user experience, track website performance, and gather information about user activities.
            </li>
            <li className="mb-2">
              Cookies are small data files stored on your device that help us remember your preferences and improve functionality.
            </li>
            <li>
              You can configure your browser to disable cookies or alert you when cookies are being sent. However, disabling cookies may limit your ability to use certain features of our website.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Security</h2>
          <p className="text-gray-600">
            We take data security seriously and have implemented reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no data transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites or services (e.g., social media platforms, payment gateways). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any site you visit via links from our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights and Choices</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">You may request access to, correction of, or deletion of your personal information by contacting us.</li>
            <li className="mb-2">
              If you have subscribed to our mailing list, you may opt out of receiving promotional emails by following the unsubscribe instructions in those emails.
            </li>
            <li>
              Residents of India may have additional rights under applicable data protection laws, such as the Digital Personal Data Protection Act, 2023 (if in effect). Contact us for details on exercising these rights.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">9. Children’s Privacy</h2>
          <p className="text-gray-600">
            Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will take steps to delete it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Our Privacy Policy</h2>
          <p className="text-gray-600">
            We reserve the right to amend this Privacy Policy at any time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. Your continued use of our website after such changes constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions or concerns about this Privacy Policy or the use of your personal information, please contact us at:
            <br />
            Phone:{' '}
            <a href="tel:+919339119671" className="text-blue-600 hover:underline">
              +91 93391 19671
            </a>
            <br />
            Email:{' '}
            <a href="mailto:[Insert Support Email]" className="text-blue-600 hover:underline">
              connect@masaforum.com
            </a>
            <br />
            Our team is available to assist you with any inquiries.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
          <p className="text-gray-600">
            This Privacy Policy is governed by the laws of the Indian Judiciary. Any disputes arising from this policy will be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <p className="text-center text-gray-500 italic mt-8">
          This policy is a template and should be reviewed by a legal professional to ensure compliance with Indian laws and your specific business needs.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PrivacyPolicy;