
import React, { useState } from 'react';
import { BUSINESS_SECTORS, ICON_MAP, API_CATALOG } from '../constants';
import { BusinessSector } from '../types';
import { ChevronRight, ArrowRight, CheckCircle2, Tag, Zap, Layers } from 'lucide-react';

const BusinessSectors: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<BusinessSector | null>(null);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold">Soluții MrDelivery AI</h2>
          <p className="text-gray-400 mt-1">Automatizare completă pentru afacerea ta, de la livrări la video marketing.</p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
            PROMOȚIE ACTIVĂ: PÂNĂ LA -45%
          </span>
        </div>
      </div>

      {!selectedSector ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_SECTORS.map((sector) => (
            <div 
              key={sector.id}
              onClick={() => setSelectedSector(sector)}
              className="glass p-6 rounded-2xl border-gray-800 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all cursor-pointer group relative overflow-hidden"
            >
              {sector.discount && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  {sector.discount}
                </div>
              )}
              
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {ICON_MAP[sector.icon]}
              </div>
              
              <h3 className="text-xl font-bold mt-6">{sector.name}</h3>
              {sector.price && <p className="text-blue-400 font-bold text-sm mt-1">{sector.price}</p>}
              <p className="text-gray-400 text-sm mt-3 line-clamp-2">{sector.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {sector.benefits.slice(0, 2).map((benefit, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-[10px] font-bold rounded-full border border-gray-700">
                    {benefit}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center text-blue-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Configurează Pachet <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
          <button 
            onClick={() => setSelectedSector(null)}
            className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 font-medium transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Înapoi la listă
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass p-8 rounded-3xl border-gray-800 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <div className="scale-[5]">{ICON_MAP[selectedSector.icon]}</div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                    {ICON_MAP[selectedSector.icon]}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">{selectedSector.name}</h3>
                    {selectedSector.price && (
                      <div className="flex items-center gap-2 mt-1">
                        <Tag className="w-4 h-4 text-blue-400" />
                        <span className="text-xl font-bold text-blue-400">{selectedSector.price}</span>
                        {selectedSector.discount && <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">ECONOMISEȘTI {selectedSector.discount}</span>}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-xl text-gray-400 max-w-2xl mt-6">{selectedSector.description}</p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSector.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedSector.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedSector.features.map((feature, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border-gray-800">
                      <h4 className="font-bold text-blue-400 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="glass p-8 rounded-3xl border-gray-800">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" /> Flow Automatizare
                </h4>
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-gray-300 leading-relaxed italic">
                  "{selectedSector.automationLogic}"
                </div>
                
                <div className="mt-8">
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">API-uri Conectate</h5>
                  <div className="flex flex-wrap gap-3">
                    {selectedSector.apisUsed.map((apiId) => {
                      const api = API_CATALOG.find(a => a.id === apiId);
                      return (
                        <div key={apiId} className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-400 rounded-xl border border-blue-600/20">
                          {api ? ICON_MAP[api.icon] : <Layers className="w-4 h-4" />}
                          <span className="font-bold text-xs uppercase tracking-tight">{api?.name || apiId}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-3xl border-gray-800 bg-gradient-to-br from-blue-600/10 to-transparent">
                <h4 className="text-lg font-bold mb-6">Impact Estimativ ROI</h4>
                <div className="space-y-6">
                  {selectedSector.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{metric.label}</span>
                        <span className="text-2xl font-bold text-white">{metric.value}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                          style={{ width: '85%' }}
                        />
                      </div>
                      <div className="mt-1 text-right">
                        <span className="text-emerald-400 text-xs font-bold">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-gray-800 text-center bg-blue-600">
                <h4 className="font-bold mb-4 text-white text-xl">Lansează Afacerea</h4>
                <p className="text-sm text-blue-100 mb-8 font-medium">Suntem departamentul tău externalizat de tech și marketing.</p>
                <button className="w-full py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-xl">
                  Activează Pachetul <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-blue-200 mt-4 font-bold uppercase tracking-widest">Implementare rapidă: 2-4 săptămâni</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSectors;
