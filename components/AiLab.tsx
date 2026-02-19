
import React, { useState } from 'react';
import { getAutomationAdvice } from '../services/gemini';
import { BUSINESS_SECTORS } from '../constants';
import { Send, Bot, Sparkles, Loader2, Video, Phone, Truck } from 'lucide-react';

const AiLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedSector, setSelectedSector] = useState(BUSINESS_SECTORS[0].name);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const result = await getAutomationAdvice(selectedSector, prompt);
    setResponse(result || "Eroare la generare.");
    setLoading(false);
  };

  const suggestions = [
    { label: 'Script Video VEO3', icon: Video, text: 'Vreau un script video viral pentru TikTok cu un prezentator AI care să promoveze meniul nostru de burgeri.' },
    { label: 'Strategie Comisioane', icon: Truck, text: 'Cum pot reduce comisioanele pe Glovo și Bolt fără să pierd vizibilitate?' },
    { label: 'Voice AI Setup', icon: Phone, text: 'Configurare Voice AI pentru a prelua rezervări telefonice simultan în orele de vârf.' },
  ];

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500 max-w-5xl mx-auto pb-20">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full border border-blue-600/20 text-sm font-bold">
          <Sparkles className="w-4 h-4" /> Strategie MrDelivery AI Lab
        </div>
        <h2 className="text-4xl font-bold">Proiectează-ți Viitorul Business</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Descrie obiectivele tale. AI-ul nostru va utiliza tehnologii precum VEO3 și RAG pentru a crea arhitectura ta de business pe pilot automat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((s, i) => (
          <button 
            key={i}
            onClick={() => setPrompt(s.text)}
            className="glass p-4 rounded-2xl border-gray-800 hover:border-blue-500/50 text-left transition-all group"
          >
            <s.icon className="w-5 h-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{s.label}</h4>
            <p className="text-xs text-gray-500 line-clamp-2 italic">"{s.text}"</p>
          </button>
        ))}
      </div>

      <div className="glass p-8 rounded-3xl border-gray-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pachet Vizat</label>
            <select 
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white font-medium"
            >
              {BUSINESS_SECTORS.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Focus ROI</label>
            <div className="flex gap-2">
              {['Vânzări Directe', 'Conversie Socială', 'Costuri Ghișeu'].map(obj => (
                <button key={obj} className="flex-1 py-3 px-2 bg-gray-900/50 border border-gray-800 rounded-xl text-[10px] font-bold hover:bg-gray-800 transition-all uppercase tracking-tighter">
                  {obj}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cerința ta (Viziune sau Problemă)</label>
          <textarea 
            placeholder="Descrie exact ce vrei să automatizezi..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-all text-white min-h-[120px] resize-none"
          />
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 text-lg shadow-lg shadow-blue-600/20"
        >
          {loading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" /> Analizăm datele MrDelivery...
            </>
          ) : (
            <>
              Generează Strategia AI <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      {response && (
        <div className="glass p-8 rounded-3xl border-blue-500/30 bg-blue-600/5 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center neon-glow">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Arhitectura Strategică AI</h3>
              <p className="text-sm text-blue-400 font-medium">Recomandări Premium pentru {selectedSector}</p>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-200 leading-relaxed whitespace-pre-wrap text-lg">
              {response}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="text-xs text-gray-400 italic">
              * Arhitectura propusă integrează automatizarea menajmentului livrărilor și producția video VEO3.
            </div>
            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
              Discută Implementarea <Bot className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiLab;
