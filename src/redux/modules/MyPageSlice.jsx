import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from '../../shared/cookies';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  mypages: [],
  myarticles: [],
  isLoading: false,
  error: null,
};

export const __getMyPage = createAsyncThunk("mypages/getMyPage", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'get',
      url: `${BASE_URL}/myPage`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
    });
    console.log(data.data)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue(error);
  }
});

// 프로필 이미지 수정
export const __patchProfileImage = createAsyncThunk("mypages/patchProfileImage", async (payload, thunkAPI) => {
  try {
    const data = await axios({
      method: 'patch',
      url: `${BASE_URL}/myPage`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
      data: payload
    });
    console.log(payload)
    console.log(data.data)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getMyArticle = createAsyncThunk("myarticles/getMyArticles", async (payload, thunkAPI) => {
  console.log("payload", payload)
  try {
    const data = await axios({
      method: 'get',
      // url: `${BASE_URL}/myPage/myArticle`,
      // 아래 무한스크롤 url
      url: `${BASE_URL}/myPage/myArticle2?page=${payload}&size=${3}`,
      payload, 
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie("accessToken")}`,
        // RefreshToken : getCookie('refreshToken')
      },
    });
    console.log(data.data)
    // console.log("payload", payload)
    // return thunkAPI.fulfillWithValue(data.data);
    // 아래 무한 스크롤일때
    return thunkAPI.fulfillWithValue(data.data.content);
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue(error);
  }
});


export const MyPageSlice = createSlice({
  name: "mypages",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mypages = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__patchProfileImage.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchProfileImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log('action.payload', action.payload)
      // state.instas = state.instas.filter((data) => data.boardId !== action.payload);
    },
    [__patchProfileImage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getMyArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.myarticles = action.payload;
      // 아래 무한스크롤일때
      state.myarticles.push(...action.payload);
      console.log('action.payload', action.payload);
    },
    [__getMyArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { } = MyPageSlice.actions;
export default MyPageSlice.reducer;