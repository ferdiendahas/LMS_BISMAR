import { useState } from 'react';
import { Search, Plus, MapPin, Users, GraduationCap, Edit2, Trash2 } from 'lucide-react';

const mockBranches = [
  { id: 1, name: 'Surabaya Pusat', code: 'SBY-01', address: 'Jl. Basuki Rahmat No. 10', admin: 'Budi Santoso', totalUsers: 342, avgScore: 88, status: 'Active' },
  { id: 2, name: 'Surabaya Timur', code: 'SBY-02', address: 'Jl. Kertajaya Indah No. 45', admin: 'Rina Wijaya', totalUsers: 215, avgScore: 82, status: 'Active' },
  { id: 3, name: 'Sidoarjo', code: 'SDA-01', address: 'Jl. Pahlawan No. 8', admin: 'Dewi Lestari', totalUsers: 189, avgScore: 85, status: 'Active' },
  { id: 4, name: 'Malang', code: 'MLG-01', address: 'Jl. Ijen Boulevard No. 12', admin: 'Ahmad Dahlan', totalUsers: 276, avgScore: 79, status: 'Active' },
  { id: 5, name: 'Gresik', code: 'GRS-01', address: 'Jl. Veteran No. 99', admin: 'Andi Saputra', totalUsers: 145, avgScore: 81, status: 'Maintenance' },
];

export default function Branches() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Branch Management</h2>
          <p className="text-slate-500 mt-1">Manage 27 branches, assign admins, and monitor branch performance.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          <Plus className="w-4 h-4" />
          Create Branch
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search branches by name or code..."
            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBranches.map((branch) => (
          <div key={branch.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-100 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{branch.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                      branch.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {branch.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-mono mt-1">{branch.code}</p>
                </div>
                <div className="flex gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4 shrink-0 text-slate-400" />
                  <span>Admin: <span className="font-medium text-slate-900">{branch.admin}</span></span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 grid grid-cols-2 gap-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Users</p>
                  <p className="text-lg font-bold text-slate-900">{branch.totalUsers}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avg Score</p>
                  <p className="text-lg font-bold text-slate-900">{branch.avgScore}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
