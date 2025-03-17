import React from 'react';
import { useForm } from 'react-hook-form';
function Login() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const role = watch('role');
  console.log(role);
  return (
    <div className="container p-6 text-white bg-[#282828] max-w-2xl flex-col justify-center">
      <h1 className="text-2xl text-center">Register</h1>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-6 "
        >
          <div>
            <label className="block">Name</label>
            <input
              {...register('name')}
              type="text"
              className="px-6 py-1 rounded-full bg-[#121212]"
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input type="email" {...register('ema')} />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              {...register('password')}
              className="px-6 py-1 rounded-full bg-[#121212]"
            />
          </div>
          <div>
            <label className="block">Are you?</label>
            <label>Jobseeker</label>
            <input
              type="radio"
              {...register('role')}
              value="jobseeker"
              className="px-6 py-1 rounded-full bg-[#121212]"
            />
            <label>Recruiter</label>
            <input
              type="radio"
              value="recruiter"
              {...register('role')}
              className="px-6 py-1 rounded-full bg-[#121212]"
            />
          </div>

          {role === 'jobseeker' && (
            <div>
              <label>education</label>
            </div>
          )}
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
