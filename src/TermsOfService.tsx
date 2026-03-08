import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-400 mb-6">
          This Privacy Policy describes how <strong>Aviel Management Inc</strong> collects,
          uses, and protects the information you provide when using our website
          or services.
        </p>

        {/* INFORMATION COLLECTED */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Information We Collect</h2>
        <p className="text-gray-400 mb-6">
          When you submit a form on our website, request a quote, or contact us,
          we may collect the following information:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>ZIP code or service location</li>
          <li>Project details or service request information</li>
        </ul>

        {/* HOW DATA IS USED */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">How We Use Your Information</h2>
        <p className="text-gray-400 mb-6">
          The information you provide is used only for legitimate business purposes,
          including:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Responding to quote requests</li>
          <li>Scheduling consultations or services</li>
          <li>Providing project updates or service notifications</li>
          <li>Customer support and communication</li>
        </ul>

        {/* SMS DISCLOSURE */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">SMS Communications</h2>

        <p className="text-gray-400 mb-4">
          If you provide your phone number and consent to receive text messages,
          you may receive SMS messages from <strong>Aviel Management Inc</strong>
          related to your service request.
        </p>

        <p className="text-gray-400 mb-6">
          These messages may include appointment confirmations, estimate updates,
          scheduling notifications, or service-related communications.
        </p>

        <p className="text-gray-400 mb-6">
          Message frequency varies depending on your interaction with our
          services. Message and data rates may apply. You may reply
          <strong> STOP</strong> at any time to unsubscribe or
          <strong> HELP</strong> for assistance.
        </p>

        {/* NON SHARING CLAUSE */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Mobile Information Sharing
        </h2>

        <p className="text-gray-400 mb-6">
          Mobile information will not be shared, sold, rented, or distributed to
          third parties or affiliates for marketing or promotional purposes.
        </p>

        {/* COOKIES */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Cookies and Tracking
        </h2>

        <p className="text-gray-400 mb-6">
          Our website may use cookies or similar technologies to improve user
          experience, analyze website traffic, and enhance functionality.
        </p>

        {/* DATA SECURITY */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Data Security
        </h2>

        <p className="text-gray-400 mb-6">
          We take reasonable precautions to protect your personal information
          from unauthorized access, disclosure, or misuse.
        </p>

        {/* USER RIGHTS */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Your Rights
        </h2>

        <p className="text-gray-400 mb-6">
          You may request access to, correction of, or deletion of your personal
          information at any time by contacting us.
        </p>

        {/* CONTACT */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Contact Information
        </h2>

        <p className="text-gray-400 mb-6">
          If you have questions regarding this Privacy Policy or your data,
          please contact:
        </p>

        <p className="text-gray-400 mb-2">
          <strong>Aviel Management Inc</strong>
        </p>

        <p className="text-gray-400 mb-2">
          Phone: (917) 275-5796
        </p>

        <p className="text-gray-400 mb-10">
          Email: info@avielmanagementinc.com
        </p>

        <p className="text-gray-500 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
