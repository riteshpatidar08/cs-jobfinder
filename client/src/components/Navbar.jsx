import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  return (
    <nav className="h-16 sticky top-0 z-50  m-4 rounded-lg bg-[#282828] flex justify-between items-center">
      <div className="text-white">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-6 text-2xl font-semibold"
        >
          JOB<span className="text-red-500">FINDER</span>
        </motion.h1>
      </div>

      <div className="flex items-center mr-6 gap-4 text-white">
        <Link className="text-xl font-semibold">Jobs</Link>
        {location.pathname === '/register' ? (
          <div>
            <h1 className="">
              Already Registered? <Link className="text-red-500">Login</Link>
            </h1>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <button className="border border-red-500 px-6 py-2 rounded-full">
              Login
            </button>
            <Link
              to="/register"
              className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full"
            >
              Register
            </Link>{' '}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
