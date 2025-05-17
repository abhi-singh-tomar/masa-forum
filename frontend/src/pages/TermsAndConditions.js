import Footer from "../components/Footer";
const TermsAndConditions = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-900 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-white">
            By accessing or using this website,{' '}
            <a href="https://masaforum.com" className="text-blue-600 hover:underline">
              masaforum.com
            </a>
            , you agree to be bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">2. User Conduct</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</li>
            <li className="mb-2">You must not use this website in any way that may cause damage or disruption to the website or its services.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Privacy Policy</h2>
          <p className="text-white">
            Your use of this website is also governed by our Privacy Policy, which can be found{' '}
           
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">All content on this website, including text, graphics, logos, images, and software, is the property of MASA forum and is protected by copyright and other intellectual property laws.</li>
            <li>You may not use, reproduce, or distribute the content without our written permission.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">We make every effort to provide accurate and up-to-date information on our website. However, we do not guarantee the accuracy, reliability, or completeness of the information.</li>
            <li>We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Links to Third-Party Websites</h2>
          <p className="text-white">
            This website may contain links to third-party websites. These links are provided for your convenience, and we are not responsible for the content or practices of these websites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Terms and Conditions</h2>
          <p className="text-white">
            We reserve the right to change or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website constitutes acceptance of these changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law and Jurisdiction</h2>
          <p className="text-white">
            These Terms and Conditions are governed by and construed in accordance with the laws of the Indian Judiciary. Any disputes will be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
          <p className="text-white">
            If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
            <a href="tel:+919339119671" className="text-blue-600 hover:underline">
              +91 93391 19671
            </a>
            .
          </p>
        </section>

       
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default TermsAndConditions;