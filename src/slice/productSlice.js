import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  add,
  getAll,
  removeProduct,
  searchProduct,
  updateProduct,
  sortProduct,
  categoryProducts,
} from "../api/product";

export const getProduct = createAsyncThunk(
  "product/getProduct", //tên hành động
  async () => {
    const { data } = await getAll();
    return data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (dataProduct) => {
    const { data } = await add(dataProduct);
    console.log("data_add",data);
    return data;
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (dataProduct) => {
    const {data} = await updateProduct(dataProduct);
    console.log("data_edit", data);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct", //tên hành động
  async (id) => {
    const alert = window.confirm("Ban co muon xoa san pham");
    if (alert) {
      const { data } = await removeProduct(id);
      console.log(data)
      return data;
    }
  }
);

export const cateProducts = createAsyncThunk(
  "product/categoryProducts",
  async (idCate) => {
    const { data } = await categoryProducts(idCate);
    return data.product;
  }
);

export const onSearchProducts = createAsyncThunk(
  "product/searchProduct",
  async ({ text }) => {
    const { data } = await searchProduct(text);
    return data;
  }
);

export const onSortProduct = createAsyncThunk(
  "product/sortProduct",
  async (valueSort) => {
    const { data } = await sortProduct(valueSort);
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    // nếu call api thành công thì chạy hàm
    builder.addCase(getProduct.fulfilled, (state, action) => {
      //action sẽ là gtri của data reuturn
      state.value = action.payload; //gán vào state ban đầu
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      //action sẽ là gtri của data reuturn
      state.value = state.value.filter((item) => item.id !== action.payload.id); //gán vào state ban đầu
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });

    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });

    builder.addCase(cateProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    });

    builder.addCase(onSearchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    });

    builder.addCase(onSortProduct.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// const productDetail = createSlice({
//     name: 'product',
//     initialState: {
//         value: []
//     },
//     extraReducers: (builder) => {
//         // nếu call api thành công thì chạy hàm
//         builder.addCase(getProduct.fulfilled, (state, action) => {  //action sẽ là gtri của data reuturn
//             console.log(action.payload);
//             state.value = action.payload    //gán vào state ban đầu
//         })
//     }
// })

// export const { getProduct } = productSlice.actions
export default productSlice.reducer;
