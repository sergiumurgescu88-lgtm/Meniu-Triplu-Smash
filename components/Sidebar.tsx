
import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Layers, 
  FlaskConical, 
  Settings,
  ChevronRight,
  Truck
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sectors', label: 'Pachete Servicii', icon: Briefcase },
    { id: 'api-hub', label: 'Ecosistem API', icon: Layers },
    { id: 'ai-lab', label: 'AI Strategy Lab', icon: FlaskConical },
  ];

  return (
    <div className="w-64 h-screen glass border-r border-gray-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center neon-glow">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">MrDelivery</h1>
            <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">AI Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id as ViewType)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentView === item.id 
                ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
            {currentView === item.id && <ChevronRight className="ml-auto w-4 h-4" />}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition-all">
          <Settings className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400 font-medium text-sm">Configurare Cloud</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
