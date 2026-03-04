import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SuperAdminLayout from './layouts/SuperAdminLayout';
import Dashboard from './pages/superadmin/Dashboard';
import Users from './pages/superadmin/Users';
import Branches from './pages/superadmin/Branches';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/superadmin/dashboard" replace />} />
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="branches" element={<Branches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
