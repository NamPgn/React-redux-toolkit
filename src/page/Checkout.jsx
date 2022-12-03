import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticate } from "../auth/localUser";
import Header from "../components/Header";
import { getTotal, removeCart } from "../slice/cartSlice";
import { addToOrder } from "../slice/checkout";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { user } = isAuthenticate();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemove = (cartItem) => {
    dispatch(removeCart(cartItem));
  };

  const onSubmit = async (data) => {
    const totalPrice = cart.cartTotal;
    const info = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };
    const shipAddress = {
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
    };
    const notes = data.notes;
    const orderItems = cart.cartItems;
    const users = user._id;
    const order = { info, shipAddress, notes, totalPrice, orderItems, users };
    localStorage.getItem("order", JSON.stringify(order));
    dispatch(addToOrder(order));
    navigate("/ordersuccess");
  };

  return (
    <div>
      <Header />
      {!user && (
        <div className="mt-20 text-white text-lg">
          <div className="bg-cyan-600 h-10">
            <span className="leading-10">
              Bạn cần đăng nhập để đặt hàng{" "}
              <NavLink to="/signin" className="text-black">
                <u>Đăng nhập</u>
              </NavLink>{" "}
            </span>
            <br />
            <button className="btn-cart">
              <NavLink to={"/"} className="home">
                Home
              </NavLink>
            </button>
          </div>
        </div>
      )}
      {cart.cartItems.length === 0 && user && (
        <div className="mt-20 text-white text-lg">
          <div className="bg-cyan-600 h-10">
            <span className="leading-10">
              Bạn chưa có sản phẩm trong giỏ hàng{" "}
              <NavLink to="/cart" className="text-black">
                <u>Giỏ hàng</u>
              </NavLink>{" "}
            </span>
          </div>
        </div>
      )}
      {cart.cartItems.length !== 0 && user && (
        <div>
          <ol
            role="list"
            class="bg-[#F1F1F1] max-w-2xl mt-10 mx-auto px-4 py-2 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div class="flex items-center">
                <NavLink
                  to={"/"}
                  class="mr-2 text-sm font-medium text-gray-900"
                >
                  Trang chủ
                </NavLink>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <NavLink
                  to={"/cart"}
                  class="mr-2 text-sm font-medium text-gray-900"
                >
                  Giỏ hàng
                </NavLink>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <NavLink
                  to={"/checkout"}
                  class="mr-2 text-sm font-medium text-gray-900"
                >
                  Đặt hàng
                </NavLink>
              </div>
            </li>
          </ol>
          <div class="mt-20">
            <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
              Thủ Tục Thanh Toán
            </h1>
          </div>
          <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div class="flex flex-col md:w-full">
                <h2 class="mb-4 font-bold md:text-xl text-heading ">
                  Địa chỉ giao hàng
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                      <div class="w-full lg:w-1/2">
                        <label
                          for="firstName"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Tên Đệm
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          {...register("firstName")}
                          placeholder="First Name"
                          required
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div class="w-full lg:w-1/2 ">
                        <label
                          for="firstName"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Họ Tên
                        </label>
                        <input
                          name="Last Name"
                          type="text"
                          placeholder="Last Name"
                          {...register("lastName")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="w-full">
                        <label
                          for="Email"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          type="text"
                          placeholder="Email"
                          required
                          {...register("email")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="w-full">
                        <label
                          for="Email"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Số điện thoại
                        </label>
                        <input
                          name="phone"
                          type="number"
                          placeholder="Email"
                          required
                          {...register("phone")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="w-full">
                        <label
                          for="Address"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Địa Chỉ
                        </label>
                        <input
                          name="Last Name"
                          type="text"
                          placeholder="Address"
                          required
                          {...register("address")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div class="space-x-0 lg:flex lg:space-x-4">
                      <div class="w-full lg:w-1/2">
                        <label
                          for="city"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Thành Phố
                        </label>
                        <input
                          name="city"
                          type="text"
                          placeholder="City"
                          required
                          {...register("city")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div class="w-full lg:w-1/2 ">
                        <label
                          for="postcode"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Mã Bưu Điện
                        </label>
                        <input
                          name="postcode"
                          type="text"
                          placeholder="Post Code"
                          {...register("postalCode")}
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div class="flex items-center mt-4">
                      <label class="flex items-center text-sm group text-heading">
                        <input
                          type="checkbox"
                          class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                        />
                        <span class="ml-2">
                          Lưu thông tin cho lần đặt hàng sau
                        </span>
                      </label>
                    </div>
                    <div class="relative pt-3 xl:pt-6">
                      <label
                        for="note"
                        class="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        {" "}
                        Ghi chú (Không bắt buộc)
                      </label>
                      <textarea
                        name="note"
                        {...register("notes")}
                        class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        rows="4"
                        placeholder="Notes for delivery"
                      ></textarea>
                    </div>
                    <div class="mt-4">
                      <button class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                <div class="pt-12 md:pt-0 2xl:ps-4">
                  <h2 class="text-xl font-bold">Đơn hàng</h2>
                  <div class="mt-8">
                    <div class="flex flex-col space-y-4">
                      {cart.cartItems.map((item) => (
                        <div class="flex space-x-4">
                          <div>
                            <img
                              src={`${item.image}`}
                              alt="image"
                              class="w-60"
                            />
                          </div>
                          <div>
                            <h2 class="text-xl font-bold">{item.name}</h2>
                            <span class="text-green-600">Số lượng:</span>{" "}
                            {item.quantity} <br />
                            <span class="text-red-600">Giá:</span>{" "}
                            {item.price.toLocaleString("vn-VN")} <u>đ</u>
                          </div>
                          <div>
                            <button
                              onClick={() => handleRemove(item)}
                              title="Xóa"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="flex p-4 mt-4">
                    <h2 class="text-xl font-bold">Tổng thanh toán</h2>
                  </div>
                  <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Tổng Phụ:
                    <span class="ml-2">
                      {cart.cartTotalAmout.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </span>
                  </div>
                  <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Thuế (3%):
                    <span class="ml-2">
                      {cart.cartThue.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </span>
                  </div>
                  <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Vận chuyển:
                    <span class="ml-2">
                      {cart.cartShip.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </span>
                  </div>
                  <div class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Tổng:
                    <span class="ml-2">
                      {" "}
                      {cart.cartTotal.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
