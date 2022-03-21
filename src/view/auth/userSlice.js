import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import StorageKeys from "../../constants/storage-keys";
import { common } from "../../utils/common";
import { paths } from "../../constants/paths";
import { utilsToken } from "../../utils/token";

// createAsyncThunk cái này sử dụng cho login và register
export const register = createAsyncThunk("user/register", async (payload) => {
  const res = await authApi.register(payload);
  console.log(res);
  localStorage.setItem(StorageKeys.ACCESS_TOKEN, res.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(res.user));
  return res.user;
});

// createAsyncThunk cái này sử dụng cho login và register
export const login = createAsyncThunk("user/login", async (payload) => {
  const response = await authApi.login(payload);
  localStorage.setItem(StorageKeys.ACCESS_TOKEN, response.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.data));
  return response.token;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {
    logout(state) {
      // const getToken = utilsToken.getAccessToken()

      //clear local storage
      state.current = {};
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
      localStorage.removeItem(StorageKeys.USER);
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
