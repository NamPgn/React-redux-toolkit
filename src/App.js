import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import PrivateRouter from './components/PrivateRouter';
import Product from './features/product/Product';
import AddCategory from './page/AdminManager/AddCategory';
import AddProduct from './page/AdminManager/AddProduct';
import AdminManager from './page/AdminManager/AdminManager';
import CategoryManager from './page/AdminManager/CategoryManager';
import MemberManager from './page/AdminManager/MemberManager';
import ProductManager from './page/AdminManager/ProductManager';
import UpdateCategory from './page/AdminManager/UpdateCategory';
import UpdateProduct from './page/AdminManager/UpdateProduct';
import Cart from './page/Cart';
import Home from './page/Home';
import AdminPage from './page/Layout/AdminPage';
import WebsitePage from './page/Layout/WebsitePage';
import ProductDetail from './page/ProductDetail';
import Signin from './page/Signin';
import Signup from './page/Signup.jsx';
import { ToastContainer } from 'react-toastify'
import Checkout from './page/Checkout';
import SuccessOrder from './page/SuccessOrder';
import OrderManager from './page/AdminManager/OrderManager';
import OrderDetail from './page/AdminManager/OrderDetail';
import DetailCategories from './page/DetailCategories';
// import Product from './features/product/Product';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<WebsitePage />}>
          <Route path='/' element={<Home />} >
            <Route index element={<Product />} />
          </Route>
          <Route path='productdetail/:id' element={<ProductDetail />} />
        </Route>

        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='ordersuccess' element={<SuccessOrder />} />
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />

        <Route path='admin' element={<AdminPage />} >
          <Route index element={<Navigate to={'dashboard'} />} />
          <Route path='dashboard' element={<h2>dashboard</h2>} />
          <Route path='product' >
            <Route index element={<ProductManager />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<UpdateProduct />} />
          </Route>
          <Route path='category' >
            <Route index element={<CategoryManager />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/edit' element={<UpdateCategory />} />
            <Route path=':id/detail' element={<DetailCategories />} />
          </Route>
          <Route path='order' >
            <Route index element={<OrderManager />} />
            <Route path=':id/detail' element={<OrderDetail />} />
          </Route>
          <Route path='adminManager' element={<AdminManager />} />
          <Route path='memberManager' element={<MemberManager />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
