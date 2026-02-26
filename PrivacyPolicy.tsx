import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl mb-6">Privacy Policy</h1>
        <p className="text-gray-300 leading-relaxed">
          {/* Paste your privacy policy text here */}
          This Privacy Policy describes how Aviel Management Inc. collects and uses information...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
