import React, { useState } from 'react';
import { analyzeProjectRequest } from '../services/geminiService';
import { Loader2, Send, Sparkles } from 'lucide-react';
import { AiConsultationResponse } from '../types';

interface AiQuoteFormProps {
  type: 'renovation' | 'ev';
}

const AiQuoteForm: React.FC<AiQuoteFormProps> = ({ type }) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [consultation, setConsultation] = useState<AiConsultationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;
    
    setLoading(true);
    const result = await analyzeProjectRequest(description, type);
    setConsultation(result);
    setLoading(false);
  };

  // Updated EV accent to blue/cyan to match the new page theme
  const accentColor = type === 'ev' ? 'text-cyan-400 border-cyan-400' : 'text-brand-gold border-brand-gold';
  const buttonBg = type === 'ev' ? 'bg-cyan-400 hover:bg-cyan-300' : 'bg-brand-gold hover:bg-yellow-400';
  const headingColor = type === 'ev' ? 'text-cyan-400' : 'text-brand-gold';
  const iconColor = type === 'ev' ? 'text-cyan-400' : 'text-yellow-400';

  return (
    <div id="contact" className="w-full max-w-2xl mx-auto my-20 px-6">
      <div className="mb-8 text-center">
        <h3 className="font-display text-4xl uppercase mb-2">
          Start Your <span className={headingColor}>Transformation</span>
        </h3>
        <p className="text-gray-400">Describe your vision. Our AI Estimator will categorize your request instantly.</p>
      </div>

      {!consultation ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={type === 'ev' ? "I need a Level 2 charger installed in my garage for a Tesla Model Y..." : "I want to knock down a wall between my kitchen and living room and redo the floors..."}
              className="w-full bg-white/5 border border-white/10 p-6 text-lg min-h-[200px] focus:outline-none focus:border-white/40 transition-colors text-white placeholder:text-white/20"
            />
            <div className="absolute top-4 right-4">
              <Sparkles className={`w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity ${iconColor}`} />
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading || !description}
            className={`w-full py-4 font-bold text-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${buttonBg} disabled:opacity-50`}
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Analyze & Request Quote'}
          </button>
        </form>
      ) : (
        <div className="bg-white/5 border border-white/10 p-8 animate-fade-in-up">
          <div className="flex items-start justify-between mb-6">
            <h4 className="font-display text-2xl uppercase">Project Analysis</h4>
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${accentColor}`}>
              {consultation.estimatedTier} Tier
            </span>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Summary</p>
              <p className="text-white/90">{consultation.summary}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Recommendation</p>
              <p className="text-white/90 italic">"{consultation.recommendation}"</p>
            </div>
          </div>

          <button 
            onClick={() => alert("Request sent to our team! We will contact you shortly.")}
            className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Finalize Submission
          </button>
          
          <button 
            onClick={() => setConsultation(null)}
            className="w-full mt-4 text-xs text-gray-500 underline hover:text-white"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default AiQuoteForm;