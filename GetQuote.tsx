import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Send, Phone, User, Mail, FileText, Zap, DollarSign, ShieldCheck } from 'lucide-react';

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or form submission logic
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col selection:bg-brand-gold selection:text-black">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="text-center max-w-2xl animate-fade-in-up border border-white/10 p-12 bg-zinc-900/50 backdrop-blur-sm">
            <h1 className="font-display text-5xl md:text-6xl text-brand-gold mb-6 uppercase">Request Received</h1>
            <p className="text-white text-xl mb-8 font-light">
              Thank you, <span className="font-bold">{formData.name}</span>. We have received your project details.
              One of our project managers will call you at <span className="text-brand-gold">{formData.phone}</span> shortly to discuss your free estimate.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', description: '' }); }}
              className="text-gray-400 hover:text-white underline uppercase tracking-widest text-sm"
            >
              Submit another request
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden flex flex-col selection:bg-brand-gold selection:text-black">
      <Navbar />

      <div className="flex-grow flex flex-col lg:flex-row relative">
        {/* Left Side - Visuals & "Free Estimates" */}
        <div className="lg:w-1/2 relative min-h-[40vh] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 pt-20">
            <div className="animate-fade-in-up">
              <div className="bg-brand-gold inline-block px-4 py-1 mb-4">
                <span className="text-black font-bold uppercase tracking-widest text-sm">No Obligation</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl text-white uppercase mb-4 drop-shadow-xl leading-[0.9]">
                Free<br /><span className="text-brand-gold">Estimates</span>
              </h2>
              <div className="w-24 h-1 bg-white mb-8" />
              <p className="text-gray-200 text-lg md:text-xl max-w-md font-light leading-relaxed mb-12">
                Ready to bring your vision into reality? Tell us about your project. We provide transparent, up-front pricing.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 gap-6 max-w-md">
                {/* Feature 1 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex-shrink-0 flex items-center justify-center border border-brand-green/30 group-hover:bg-brand-green transition-colors duration-300">
                    <Zap className="text-brand-green w-6 h-6 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Same Day EV Installations</h4>
                    <p className="text-gray-400 text-xs">Available for standard setups.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex-shrink-0 flex items-center justify-center border border-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-300">
                    <DollarSign className="text-brand-gold w-6 h-6 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Best Price Guaranteed</h4>
                    <p className="text-gray-400 text-xs">We beat competitor quotes.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500 transition-colors duration-300">
                    <ShieldCheck className="text-blue-400 w-6 h-6 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Licensed & Insured</h4>
                    <p className="text-gray-400 text-xs">Certified Master Electricians.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 px-6 py-12 md:p-24 flex flex-col justify-center bg-brand-dark relative z-10 pt-24 lg:pt-24">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase mb-2">Start the Conversation</h1>
            <p className="text-gray-400 mb-10 text-lg">We respond within a few hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold ml-1 font-bold">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 text-white focus:border-brand-gold focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-gray-600"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-gold ml-1 font-bold">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 text-white focus:border-brand-gold focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-gray-600"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Email (Optional)</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 text-white focus:border-brand-gold focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-gray-600"
                    placeholder="email@address.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold ml-1 font-bold">What needs to be done?</label>
                <div className="relative group">
                  <FileText className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors" />
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 p-4 pl-12 text-white focus:border-brand-gold focus:bg-zinc-800 focus:outline-none transition-all placeholder:text-gray-600 min-h-[160px]"
                    placeholder="Please describe your project needs, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold text-black font-bold uppercase tracking-widest py-5 hover:bg-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 mt-6 shadow-lg shadow-brand-gold/20"
              >
                Request Callback <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
