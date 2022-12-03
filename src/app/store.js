import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import userReducer from '../slice/userSlice';
import categoryReducer from '../slice/categorySlice';
import cartReducer, { getTotal } from '../slice/cartSlice';
import checkoutReducer from "../slice/checkout"
import orderSlice from '../slice/orderSlice';
 //trong thằng store sẽ có nhiều reduces
export const store = configureStore({
  reducer: {  //data
    product: productReducer,
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    order: orderSlice,
  },
});

store.dispatch(getTotal())