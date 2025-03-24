import React from 'react';
import { useForm } from 'react-hook-form';

import { login } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
function Login() {
  const { register, handleSubmit } = useForm();
const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log(data);

   dispatch(login(data))
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input {...register('email')} type="email" />
        <label>Password</label>
        <input {...register('password')} type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
