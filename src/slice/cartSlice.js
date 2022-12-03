import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmout: 0,
  cartThue: 0,
  cartShip: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {

      const itemIndex = state.cartItems.findIndex((item) => {
        console.log("item_index___", item)
        return item.id === action.payload.id;
      });
      console.log("item_index", itemIndex);
      if (itemIndex >= 0) { //kiểm tra nếu mà nó >0 có nghĩa là có sản phẩm trong giở hàng thì thêm sna rphaamf mới vào giỏ hàng
        state.cartItems[itemIndex].quantity += 1; //thêm số lương thì tăng tiền
        toast.info(
          `Thêm số lượng ${state.cartItems[itemIndex].title} vào giỏ hàng`, // lấy ra tên dựa theo thằng state được truyền vào trong local
          {
            position: "top-right",
          }
        );
      } else { //// còn nếu mà không thì thêm sẩn phầm mới vào giỏ hàng
        const tempProduct = { ...action.payload, quantity: 1 }; //action.payload là thằng kick vào thêm sản phầm thì đí path về 1 cái action thì trong đó có dữ liệu của chính cái id mà mình click vào
        state.cartItems.push(tempProduct); // thêm cái cart vào local
        toast.success(`Thêm ${action.payload.title} vào giỏ hàng`, {
          position: "top-right",
        }); // thông báo thêm data
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
    },
    removeCart(state, action) {
      //xóa sản phầm
      console.log("action_cart", action);
      state.cartItems = state.cartItems.filter( //render ra 1 cái mảng mới có tất cả các sa rphaamr ngoài cái mình click vào
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
      toast.error(`Xóa ${action.payload.title} khỏi giỏ hàng`, {
        position: "top-right",
      });
    },
    decreaseCart(state, action) { //trừ tiền
      //"state" để lấy ra thằng inittial state trên kia
      //action để lấy ra thằng data
      const itemIndex = state.cartItems.findIndex( (item) => {
          return item.id === action.payload.id
        }
      ); //tìm trong local
      console.log("itemIndex",action.payload.quantity)
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error(`Xóa ${action.payload.title} khỏi giỏ hàng`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].quantity < 10) {
        state.cartItems[itemIndex].quantity += 1;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error(`Đã xóa toàn bộ giỏ hàng`, {
        position: "top-right",
      });
      localStorage.removeItem("cartProducts", JSON.stringify(state.cartItems));
    },
    removeLogout(state) {
      state.cartItems = [];
      localStorage.removeItem("cartProducts", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity, thue, ship, totalOrder } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          const itemThue = price * quantity * 0.03;
          const itemShip = price * quantity * 0.005;
          const itemCartTotal = price * quantity + itemShip + itemThue;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          cartTotal.thue += itemThue;
          cartTotal.ship += itemShip;
          cartTotal.totalOrder += itemCartTotal;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
          thue: 0,
          ship: 0,
          totalOrder: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmout = total;
      state.cartThue = thue;
      state.cartShip = ship;
      state.cartTotal = totalOrder;
    },
  },
});

export const {
  addToCart,
  removeCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotal,
  removeLogout,
} = cartSlice.actions;

export default cartSlice.reducer;
