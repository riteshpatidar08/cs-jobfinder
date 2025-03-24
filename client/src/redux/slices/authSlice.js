import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
const initialState = {
    id : localStorage.getItem('id') || null,
  role: localStorage.getItem('role')  || null,
  error: null,
  loading: false,
  token: localStorage.getItem('token') || null,
};

export const login = createAsyncThunk(
  '/auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        const token = action.payload.token
        console.log(token)
        const {userId , role , name} = jwtDecode(token)
       state.role = role ;
       state.id = userId ;
       state.token = token ;
       localStorage.setItem('role' , role)
       localStorage.setItem('id' , userId)
       localStorage.setItem('token' , token)
      });
  },
});

export default authSlice.reducer;
