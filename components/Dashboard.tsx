
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, Users, Activity, Zap } from 'lucide-react';

const data = [
  { name: 'Ian', efficiency: 400, roi: 240 },
  { name: 'Feb', efficiency: 300, roi: 139 },
  { name: 'Mar', efficiency: 200, roi: 980 },
  { name: 'Apr', efficiency: 278, roi: 390 },
  { name: 'Mai', efficiency: 189, roi: 480 },
  { name: 'Iun', efficiency: 239, roi: 380 },
  { name: 'Iul', efficiency: 349, roi: 430 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Panou de Control</h2>
          <p className="text-gray-400 mt-1">Sumarul performanței sistemelor de automatizare active.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium">
            Exportă Raport
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Eficiență Totală', value: '+42%', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
          { label: 'API-uri Active', value: '54 / 60', icon: Zap, color: 'text-blue-400', bg: 'bg-blue-400/10' },
          { label: 'Utilizatori Serviți', value: '12,450', icon: Users, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          { label: 'Sănătate Sistem', value: '99.9%', icon: Activity, color: 'text-amber-400', bg: 'bg-amber-400/10' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl border-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              </div>
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-bold">↑ 12%</span>
              <span className="text-gray-500 text-xs">vs. luna trecută</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl border-gray-800">
          <h3 className="text-lg font-bold mb-6">Performanță ROI vs Costuri</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRoi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '12px' }}
                  itemStyle={{ color: '#f3f4f6' }}
                />
                <Area type="monotone" dataKey="roi" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRoi)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl border-gray-800">
          <h3 className="text-lg font-bold mb-6">Eficiență pe Industrii</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '12px' }}
                  itemStyle={{ color: '#f3f4f6' }}
                />
                <Bar dataKey="efficiency" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
