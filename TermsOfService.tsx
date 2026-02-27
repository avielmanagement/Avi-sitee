import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl mb-6">Terms of Service</h1>
        <p className="text-gray-300 leading-relaxed">
          {/* Paste your terms text here */}
          These Terms govern your use of our website and services...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
