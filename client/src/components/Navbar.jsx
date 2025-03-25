import React from 'react';
import { motion } from 'framer-motion'; // Changed from motion/react to framer-motion
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

function Navbar() {
  const location = useLocation();
  
  return (
    <div className="px-2 pt-4 bg-gray-50">
      <nav className="max-w-7xl mx-auto sticky top-4 z-50 rounded-xl bg-gray-50 shadow-lg flex justify-between items-center h-16">
        <div className="text-gray-800 pl-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            JOB<span className="text-red-500 font-extrabold">FINDER</span>
          </motion.h1>
        </div>
        
        <div className="flex items-center mr-6 gap-6">
          <Link to="/jobs" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
            Jobs
          </Link>
          
          {location.pathname === '/register' ? (
            <div className="text-sm text-gray-600">
              Already Registered? <Link to="/login" className="text-red-500 font-medium hover:underline">Login</Link>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                to="/login"
                className="text-gray-700 hover:text-red-500 border border-gray-300 hover:border-red-500 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-sm"
              >
                Register
              </Link>
            </div>
          )}

          {/* token hain show profile dropdown */}
          {localStorage.getItem('token') && <>
          <ProfileDropdown/>
          </>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;