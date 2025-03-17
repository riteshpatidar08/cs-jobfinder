import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
