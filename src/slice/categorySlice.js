import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  getAllCategory,
  getCategory,
  removeCategory,
  updateCategory,
} from "../api/category";

export const getAllCate = createAsyncThunk("category/getAllCate", async () => {
  const { data } = await getAllCategory();
  console.log("data_",data);
  return data;
});

export const getCate = createAsyncThunk("category/getCate", async (id) => {
  const { data } = await getCategory(id);
  console.log("data",data);
  return data;
});

export const addCate = createAsyncThunk(
  "category/addCate",
  async (dataCate) => {
    const { data } = await addCategory(dataCate);
    return data;
  }
);

export const deleteCate = createAsyncThunk(
  "category/deleteCate",
  async (id) => {
    const alert = window.confirm("Ban co muon xoa danh muc");
    if (alert) {
      const { data } = await removeCategory(id);
      return data;
    }
  }
);

export const updateCate = createAsyncThunk(
  "category/updateCate",
  async (cateData) => {
    const { data } = await updateCategory(cateData);
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCate.fulfilled, (state, action) => {
        console.log("action_categori",action)
      state.value = action.payload;
    });

    builder.addCase(getCate.fulfilled, (state, action) => {
      state.value = action.payload;
    });

    builder.addCase(deleteCate.fulfilled, (state, action) => {
      state.value = state.value.filter(
        (item) => item._id !== action.payload._id
      );
    });

    builder.addCase(addCate.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  },
});

export default categorySlice.reducer;
