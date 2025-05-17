import Footer from "../components/Footer";

const CancellationAndRefundNoRefund = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-900 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Cancellation and Refund Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <p className="text-white">
            This Cancellation and Refund Policy governs all services, memberships, event registrations, or purchases made through{' '}
            <a href="https://masaforum.com" className="text-blue-600 hover:underline">
              masaforum.com
            </a>
            , operated by MASA Forum. By engaging with our services, you acknowledge and agree to this policy, which stipulates that no refunds or cancellations are permitted.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">2. No Cancellations</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              All purchases, including but not limited to event tickets, memberships, workshops, sponsorships, or other services offered by MASA Forum, are final and cannot be canceled once confirmed.
            </li>
            <li>
              No exceptions will be made for cancellations, including changes in personal circumstances, scheduling conflicts, or failure to attend or utilize the purchased service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">3. No Refunds</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              All payments made to MASA Forum are non-refundable under any circumstances. This includes payments for event registrations, memberships, digital products, promotional offers, or any other services.
            </li>
            <li className="mb-2">
              No refunds will be issued for failure to attend an event, non-utilization of a service, or dissatisfaction with the service provided.
            </li>
            <li>Processing fees, bank charges, or third-party payment gateway fees associated with your purchase are also non-refundable.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">4. Changes to Services by MASA Forum</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              MASA Forum reserves the right to modify or cancel events, memberships, or services due to unforeseen circumstances (e.g., force majeure, insufficient registrations, or technical issues).
            </li>
            <li className="mb-2">
              In the event of a cancellation by MASA Forum, we may, at our sole discretion, offer alternative arrangements (e.g., rescheduling or credit for future services). However, no monetary refunds will be provided.
            </li>
            <li>
              MASA Forum is not liable for any additional costs incurred by you (e.g., travel or accommodation) due to modifications or cancellations.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">5. Non-Transferable Services</h2>
          <ul className="list-disc pl-6 text-white">
            <li>
              All purchases, including event tickets and memberships, are non-transferable. You may not transfer your registration, membership, or service to another individual or event unless explicitly permitted in writing by MASA Forum.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">6. Disputes and Inquiries</h2>
          <ul className="list-disc pl-6 text-white">
            <li className="mb-2">
              If you have questions or concerns about this policy, please contact us for clarification.
            </li>
            <li>
              This policy is governed by the laws of the Indian Judiciary, and any disputes will be subject to the exclusive jurisdiction of the courts in India.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">7. Contact Information</h2>
          <p className="text-white">
            For inquiries regarding this policy, please contact us at:
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
            Our team is available to assist you with any questions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">8. Policy Updates</h2>
          <p className="text-white">
            MASA Forum reserves the right to update this Cancellation and Refund Policy at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated terms.
          </p>
        </section>

        
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default CancellationAndRefundNoRefund;