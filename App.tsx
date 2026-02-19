
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BusinessSectors from './components/BusinessSectors';
import ApiHub from './components/ApiHub';
import AiLab from './components/AiLab';
import { Bell, Search, User } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'sectors': return <BusinessSectors />;
      case 'api-hub': return <ApiHub />;
      case 'ai-lab': return <AiLab />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 glass border-b border-gray-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800 w-96">
            <Search className="w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Căutare globală în platformă..." 
              className="bg-transparent text-sm focus:outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-400 tracking-wider">NETWORK STATUS: OK</span>
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-white transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#030712]" />
            </button>

            <div className="h-8 w-[1px] bg-gray-800" />

            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">Enterprise Plan</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border-2 border-gray-800">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-10 pb-20">
          {renderView()}
        </div>

        {/* Footer info */}
        <footer className="px-10 py-8 border-t border-gray-900 text-center text-gray-600 text-xs">
          <p>© 2025 AI Automation Hub. Toate drepturile rezervate. Built for Business Excellence.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
