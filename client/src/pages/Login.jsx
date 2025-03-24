import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post('http://localhost:3000/api/login', data).then((res)=>{
        console.log(res.data)
    })
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
