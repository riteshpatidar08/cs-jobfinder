import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  const onSubmit = (data) => {
    try {
      dispatch(login(data)).unwrap();
      navigate('/');
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-red-500 text-white py-6 px-8">
          <h1 className="text-2xl font-bold">
            Login to <span className="font-extrabold">JobFinder</span>
          </h1>
          <p className="mt-2 text-white text-opacity-90">
            Access India's No.1 Job Site
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full text-gray-700 bg-gray-50 focus:bg-white border border-gray-300 focus:border-red-500 rounded-lg px-4 py-2.5 focus:outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('remember')}
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-red-500 hover:text-red-600"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-sm"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <a
                href="/register"
                className="font-medium text-red-500 hover:text-red-600"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
