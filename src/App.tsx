<<<<<<< HEAD
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
=======
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Tasks from './pages/Tasks';
import Quiz from './pages/Quiz';
import Grades from './pages/Grades';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/quiz/:id" element={<Quiz />} />
          <Route path="grades" element={<Grades />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
>>>>>>> 97c250ab2ab7452b2d24caf8e0c72ac363927959
  );
}
