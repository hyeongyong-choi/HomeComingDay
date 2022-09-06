import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/cookies';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('accessToken')}`,
    // username: `${getCookie("username")}`,
  },
};

export const __loginUser = createAsyncThunk(
  'LOGIN_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/login`, payload);
      setCookie('accessToken', `${data.data.data.accessToken}`);
      // setCookie('username', `${data.data.username}`)
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signupUser = createAsyncThunk(
  'SIGNUP_USER',
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(`${BASE_URL}/signup`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: config,
  isLogin: false,
  error: null,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLogin = true;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default UserSlice;