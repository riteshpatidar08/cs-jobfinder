import React from 'react';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import ProtectedRoutes from './components/ProtectedRoutes';
import UnprotectedRoutes from './components/UnprotectedRoutes';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<UnprotectedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//ui components => mantine ui
//animation => motion
//toolkit => state management library
//form => react hook form
//validation form => zod

//Job-

//role => admin , recruiter , jobseeker
