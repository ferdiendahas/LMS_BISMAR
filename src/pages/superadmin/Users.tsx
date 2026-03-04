import { useState } from 'react';
import { Search, Plus, MoreVertical, Edit2, Trash2, Shield } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Budi Santoso', email: 'budi@indobismar.com', role: 'Admin Cabang', branch: 'Sby Pusat', status: 'Active', lastLogin: '2 mins ago' },
  { id: 2, name: 'Siti Aminah', email: 'siti@indobismar.com', role: 'Trainer', branch: 'Sidoarjo', status: 'Active', lastLogin: '1 hour ago' },
  { id: 3, name: 'Ahmad Dahlan', email: 'ahmad@indobismar.com', role: 'User', branch: 'Malang', status: 'Inactive', lastLogin: '5 days ago' },
  { id: 4, name: 'Dewi Lestari', email: 'dewi@indobismar.com', role: 'Admin Cabang', branch: 'Gresik', status: 'Active', lastLogin: '10 mins ago' },
  { id: 5, name: 'Rudi Hermawan', email: 'rudi@indobismar.com', role: 'Trainer', branch: 'Sby Timur', status: 'Active', lastLogin: 'Yesterday' },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
          <p className="text-slate-500 mt-1">Manage all users, roles, and branch assignments.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          <Plus className="w-4 h-4" />
          Create User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
              <option value="">All Roles</option>
              <option value="Admin Cabang">Admin Cabang</option>
              <option value="Trainer">Trainer</option>
              <option value="User">User</option>
            </select>
            <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
              <option value="">All Branches</option>
              <option value="Sby Pusat">Sby Pusat</option>
              <option value="Sidoarjo">Sidoarjo</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Branch</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{user.name}</div>
                        <div className="text-slate-500 text-xs">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <Shield className={`w-3.5 h-3.5 ${user.role === 'Admin Cabang' ? 'text-purple-500' : user.role === 'Trainer' ? 'text-blue-500' : 'text-slate-400'}`} />
                      <span className="text-slate-700">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{user.branch}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <div>Showing 1 to 5 of 1,248 users</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">1</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">2</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">3</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
