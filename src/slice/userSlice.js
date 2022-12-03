import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser, signinAPI, signupAPI } from "../api/user";

const initialState = {
  isAuthenticate: false,
  value: [],
  settings: {},
};

export const getAllUserAdmin = createAsyncThunk(
  "user/getAllUserAdmin",
  async () => {
    const { data } = await getAllUser();
    const checkRole = data.user.filter((item) => item.role === 1); //chekc thằng role nếu nó bằng 0 thì nó là người dùng
    return checkRole;
  }
);

export const getAllUserMember = createAsyncThunk(
  "user/getAllUserMember",
  async () => {
    const { data } = await getAllUser();
    
    const checkMember = data.user.filter((item) => item.role === 0); //check nếu mà thằng role nó bằng 0 thì render ra 1 cái mảng mới trả về thằng member thì nó là member
    return checkMember;
  }
);

export const regist = createAsyncThunk("user/regist", async (dataUser) => {
  const { data } = await signupAPI(dataUser);
  return data;
});

export const login = createAsyncThunk("user/login", async (dataUser) => {
  const { data } = await signinAPI(dataUser);
  console.log("data_login",data)
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(regist.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("userToken", JSON.stringify(action.payload));
      console.log("action__",action.payload);
      state.isAuthenticate = true;
    });
    builder.addCase(getAllUserAdmin.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(getAllUserMember.fulfilled, (state, action) => {
      console.log("action", action);
      state.value = action.payload;
    });
  },
});

export default userSlice.reducer;
