
import React, { useState } from 'react';
import { API_CATALOG, ICON_MAP } from '../constants';
import { Search, Filter } from 'lucide-react';

const ApiHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(API_CATALOG.map(api => api.category))];
  
  const filteredApis = API_CATALOG.filter(api => {
    const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          api.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || api.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">Catalog API</h2>
          <p className="text-gray-400 mt-1">Explorează cele 50+ integrări native disponibile în ecosistemul nostru.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Caută API-uri..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-6 py-3 focus:outline-none focus:border-blue-600 transition-all w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApis.map((api) => (
          <div key={api.id} className="glass p-6 rounded-2xl border-gray-800 group hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-blue-400">
                {ICON_MAP[api.icon]}
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-800/50 px-2 py-1 rounded">
                {api.category}
              </span>
            </div>
            <h4 className="font-bold text-lg mb-2">{api.name}</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{api.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-500 uppercase">Operational</span>
              </div>
              <button className="text-xs font-bold text-blue-400 hover:underline">Documentație</button>
            </div>
          </div>
        ))}
      </div>

      {filteredApis.length === 0 && (
        <div className="text-center py-20 glass rounded-3xl">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold">Nu am găsit niciun API</h3>
          <p className="text-gray-400 mt-2">Încearcă o altă căutare sau schimbă categoria.</p>
        </div>
      )}
    </div>
  );
};

export default ApiHub;
